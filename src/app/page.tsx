import styles from "./page.module.css";
import RecipeCard from "@/components/RecipeCard";
import Link from "next/link";

type Recipe = {
  id: string;
  title: string;
  image: string;
};

async function getRecipes(): Promise<Recipe[]> {
  const apiKey = "8e682e9a63e34f4ca5d20dcbda444fb7";
  const res = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?" +
      new URLSearchParams({ apiKey, query: "", type: "main course" })
  ).then((response) => response.json());

  return res.results;
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main className={styles.main}>
      <div>
        <h2>Main courses</h2>
        <div>
          {recipes.map(({ id, title, image }) => (
            <Link key={id} href={`/${id}`}>
              <RecipeCard title={title} image={image} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
