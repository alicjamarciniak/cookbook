import { FC } from "react";
import { RecipeDetails } from "@/types/Recipe";
import Summary from "./Summary";
import Steps, { type RecipeInstructions } from "./Steps";
import Ingredients from "./Ingredients";
import { getStaticVariables } from "@/services/client";

async function getRecipeDetails(id: string): Promise<RecipeDetails> {
  const { apiKey, apiUrl } = getStaticVariables();
  const res = await fetch(
    `${apiUrl}/recipes/${id}/information?` +
      new URLSearchParams({
        apiKey,
      })
  ).then((response) => response.json());

  return res;
}

async function getRecipeInstructions(
  id: string
): Promise<RecipeInstructions[]> {
  const { apiKey, apiUrl } = getStaticVariables();
  const res = await fetch(
    `${apiUrl}/recipes/${id}/analyzedInstructions?` +
      new URLSearchParams({
        apiKey,
        stepBreakdown: "true",
      })
  ).then((response) => response.json());

  return res;
}

type RecipeDetailsProps = {
  params: {
    id: string;
  };
};

const RecipeDetails: FC<RecipeDetailsProps> = async ({ params: { id } }) => {
  const details = await getRecipeDetails(id);
  const instructions = await getRecipeInstructions(id);

  return (
    <main className="flex flex-col md:flex-row gap-5 justify-center md:px-10 md:py-12 bg-light-black pb-5">
      <div className="px-3 pt-5 md:pt-0">
        <div
          className="flex flex-col md:flex-row flex-wrap w-full md:w-[80vw] rounded-xl border bg-dark-white bg-opacity-[0.03]
        border-dark-gray text-dark-white overflow-hidden"
        >
          <div className="md:order-2 md:basis-2/5 w-full md:bg-dark-white md:bg-opacity-5">
            <div
              className="w-full h-[35vh] md:h-[50vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${details.image})` }}
            />
          </div>

          <div className="md:order-1 basis-full md:basis-3/5 px-4 md:px-6 md:pt-12">
            <Summary
              title={details.title}
              sourceName={details.sourceName}
              sourceUrl={details.sourceUrl}
              servings={details.servings}
              summary={details.summary}
              readyInMinutes={details.readyInMinutes}
            />
          </div>

          <div className="flex md:order-4 basis-full md:basis-2/5">
            <Ingredients extendedIngredients={details.extendedIngredients} />
          </div>

          <div className="md:order-3 basis-full md:basis-3/5 px-4 md:px-6 py-12 md:pb-0">
            <Steps instructions={instructions} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetails;
