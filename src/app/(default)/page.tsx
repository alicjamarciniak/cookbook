import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";
import ExploreSection from "./sections/ExploreSection";
import { type Recipe } from "@/types/Recipe";
import { getStaticVariables } from "@/services/client";

async function getMainCourses(): Promise<Recipe[]> {
  const { apiKey, apiUrl } = getStaticVariables();
  const res = await fetch(
    `${apiUrl}/recipes/complexSearch?` +
      new URLSearchParams({
        apiKey,
        query: "",
        type: "main course",
        cuisine: "asian",
      })
  ).then((response) => response.json());

  return res.results;
}

async function getDeserts(): Promise<Recipe[]> {
  const { apiKey, apiUrl } = getStaticVariables();
  const res = await fetch(
    `${apiUrl}/recipes/complexSearch?` +
      new URLSearchParams({
        apiKey,
        query: "",
        type: "dessert",
        cuisine: "asian",
      })
  ).then((response) => response.json());

  return res.results;
}

export default async function Home() {
  const mainCourses = await getMainCourses();
  const desserts = await getDeserts();

  return (
    <main className="bg-dark-green">
      <HeroSection />
      <FeaturesSection />
      <ExploreSection
        mainCourses={mainCourses as Recipe[]}
        desserts={desserts as Recipe[]}
      />
    </main>
  );
}
