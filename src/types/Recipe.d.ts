export type Recipe = {
  id: string;
  title: string;
  image: string;
};

export type Ingredient = {
  id: string;
  name: string;
  originalName: string;
  amount: number;
  unit: string;
};

export type RecipeDetails = {
  id: string;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularScore: number;
  extendedIngredients: Ingredient[];
  summary: string;
};
