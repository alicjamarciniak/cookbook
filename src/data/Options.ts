import {
  DietType,
  IntolerancesType,
  MealTypesType,
  Option,
  SortType,
} from "@/types/FilterOptions";

export const SortOptions: Option<SortType>[] = [
  { value: "default", label: "Default" },
  { value: "calories", label: "Calories" },
  { value: "popularity", label: "Popularity" },
  { value: "price", label: "Price" },
  { value: "time", label: "Time" },
];

export const Diets: Option<DietType>[] = [
  { value: "all", label: "All" },
  { value: "gluten free", label: "Gluten Free" },
  { value: "ketogenic", label: "Ketogenic" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "lacto-vegetarian", label: "Lacto-Vegetarian" },
  { value: "ovo-vegetarian", label: "Ovo-Vegetarian" },
  { value: "pescetarian", label: "Pescetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "paleo", label: "Paleo" },
  { value: "primal", label: "Primal" },
  { value: "low foodmap", label: "Low FOODMAP" },
  { value: "whole30", label: "Whole30" },
];

export const Intolerances: Option<IntolerancesType>[] = [
  { value: "none", label: "None" },
  { value: "dairy", label: "Dairy" },
  { value: "egg", label: "Egg" },
  { value: "gluten", label: "Gluten" },
  { value: "grain", label: "Grain" },
  { value: "peanut", label: "Peanut" },
  { value: "seafood", label: "Seafood" },
  { value: "sesame", label: "Sesame" },
  { value: "shellfish", label: "Shellfish" },
  { value: "soy", label: "Soy" },
  { value: "sulfite", label: "Sulfite" },
  { value: "tree nut", label: "Tree nut" },
  { value: "wheat", label: "Wheat" },
];

export const MealTypes: Option<MealTypesType>[] = [
  { value: "all", label: "All" },
  { value: "main course", label: "Main Course" },
  { value: "svaluee dish", label: "Svaluee Course" },
  { value: "dessert", label: "Dessert" },
  { value: "appetizer", label: "Appetizer" },
  { value: "salad", label: "Salad" },
  { value: "bread", label: "Bread" },
  { value: "breakfast", label: "Breakfast" },
  { value: "soup", label: "Soup" },
  { value: "beverage", label: "Beverage" },
  { value: "sauce", label: "Sauce" },
  { value: "marinade", label: "Marinade" },
  { value: "fingerfood", label: "Fingerfood" },
  { value: "snack", label: "Snack" },
  { value: "drink", label: "Drink" },
];
