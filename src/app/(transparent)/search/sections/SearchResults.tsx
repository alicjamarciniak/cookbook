"use client";

import { Loader, Skeleton } from "@mantine/core";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC, Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { NoData, RecipeCard } from "@/components";
import useDevices from "@/hooks/useDevices";
import { type Recipe } from "@/types/Recipe";
import { fetchRecipes } from "../actions";

const LIMIT = 20;

type SearchResultsProps = {
  query: string;
  initialResults?: Recipe[];
};

const SearchResults: FC<SearchResultsProps> = ({ initialResults, query }) => {
  const [page, setPage] = useState(0);
  const [results, setResults] = useState<Recipe[]>();
  const searchParams = useSearchParams();
  const { ref, inView, entry } = useInView();
  const { isMobile } = useDevices();

  const mealType = searchParams.get("mealType");
  const diet = searchParams.get("diet");
  const intolerances = searchParams.get("intolerances");
  const sort = searchParams.get("sort");

  const loadMoreRecipes = async () => {
    const next = page + 1;
    const recipes = await fetchRecipes({
      query,
      number: LIMIT.toString(),
      offset: (next * LIMIT).toString(),
      ...(mealType && { mealType }),
      ...(diet && { diet }),
      ...(intolerances && { intolerances }),
      ...(sort && { sort, sortDirection: "asc" }),
    });

    if (recipes.length) {
      setPage(next);
      setResults((prev: Recipe[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...recipes,
      ]);
    } else {
      const infiniteLoader = entry?.target;
      infiniteLoader?.classList.add("hidden");
    }
  };

  useEffect(() => setResults(initialResults), [initialResults]);

  useEffect(() => {
    if (inView) {
      loadMoreRecipes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      className="flex flex-col bg-dark-white w-[90vw] self-center rounded-t-xl border-gray"
      style={{ boxShadow: "8px 8px 50px -5px rgba(66, 68, 90, 1)" }}
    >
      {results?.length ? (
        <div className="flex flex-col min-h-[60vh]">
          <div className="flex flex-wrap md:p-5 gap-4 justify-center">
            {results.map(({ title, image, id }) => (
              <Suspense fallback={<Skeleton />} key={`search-${id}`}>
                <div className="flex">
                  <Link href={`/recipe/${id}`} className="flex grow">
                    <RecipeCard
                      title={title}
                      image={image}
                      {...(isMobile && { size: "sm" })}
                    />
                  </Link>
                </div>
              </Suspense>
            ))}
          </div>
          <div
            ref={ref}
            className="flex flex-row justify-center items-center m-10"
          >
            <Loader color="orange" />
          </div>
        </div>
      ) : (
        <NoData message="Sorry, we couldn't find any recipe matching your search" />
      )}
    </div>
  );
};

export default SearchResults;
