import { FC } from "react";
import SearchSection from "./sections/SearchSection";
import { fetchRecipes } from "./actions";

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
      {/* CLIENT COMP */}
      <SearchSection initialResults={initialRecipes} />
    </main>
  );
};

export default SearchPage;
