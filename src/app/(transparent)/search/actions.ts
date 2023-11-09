"use server";

import { getStaticVariables } from "@/services/client";
import { type Recipe } from "@/types/Recipe";

type FetchRecipesParams = {
  query: string;
  number?: string;
  offset?: string;
  mealType?: string;
  diet?: string;
  intolerances?: string;
  sort?: string;
};

export async function fetchRecipes({
  query,
  number,
  offset,
  mealType,
  diet,
  intolerances,
  sort,
}: FetchRecipesParams): Promise<Recipe[]> {
  const { apiKey, apiUrl } = getStaticVariables();
  const res = await fetch(
    `${apiUrl}/recipes/complexSearch?` +
      new URLSearchParams({
        apiKey,
        query,
        number: number || "20",
        offset: offset || "0",
        ...(mealType && { type: mealType }),
        ...(diet && { diet }),
        ...(intolerances && { intolerances }),
        ...(sort && { sort, sortDirection: "asc" }),
      })
  ).then((response) => response.json());

  return res.results;
}
