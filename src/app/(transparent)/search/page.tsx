import { FC } from "react";
import { fetchRecipes } from "./actions";
import SearchSection from "./sections/SearchSection";

type SearchPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SearchPage: FC<SearchPageProps> = async ({ searchParams }) => {
  const query =
    typeof searchParams.query === "string" ? searchParams.query : "";
  const mealType =
    typeof searchParams.mealType === "string" ? searchParams.mealType : "";
  const diet = typeof searchParams.diet === "string" ? searchParams.diet : "";
  const intolerances =
    typeof searchParams.intolerances === "string"
      ? searchParams.intolerances
      : "";
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "";

  const initialRecipes = await fetchRecipes({
    query,
    mealType,
    diet,
    intolerances,
    sort,
  });

  return (
    <main>
      <SearchSection initialResults={initialRecipes} />
    </main>
  );
};

export default SearchPage;
