export type Option<T> = {
  value: T;
  label: string;
};

export type SortOrderType = "asc" | "desc";

export const SortValues = [
  "default",
  "calories",
  "popularity",
  "price",
  "time",
] as const;
export type SortType = (typeof SortValues)[number];

export const DietValues = [
  "all",
  "gluten free",
  "ketogenic",
  "vegetarian",
  "lacto-vegetarian",
  "ovo-vegetarian",
  "pescetarian",
  "vegan",
  "paleo",
  "primal",
  "low foodmap",
  "whole30",
] as const;
export type DietType = (typeof DietValues)[number];

const IntolerancesValues = [
  "none",
  "dairy",
  "egg",
  "gluten",
  "grain",
  "peanut",
  "seafood",
  "sesame",
  "shellfish",
  "soy",
  "sulfite",
  "tree nut",
  "wheat",
] as const;
export type IntolerancesType = (typeof IntolerancesValues)[number];

export const MealTypesValues = [
  "all",
  "main course",
  "svaluee dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink",
] as const;
export type MealTypesType = (typeof MealTypesValues)[number];
