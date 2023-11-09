import Image from "next/image";
import OnionSvg from "public/svg/onion.svg";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { Ingredient } from "@/types/Recipe";

type IngredientsProps = {
  extendedIngredients: Ingredient[];
};

const Ingredients: FC<IngredientsProps> = ({ extendedIngredients }) => {
  return (
    <div className="md:bg-dark-white md:bg-opacity-5 flex md:flex-[2] md:grow flex-col gap-4 px-4 md:px-6 md:py-12">
      <h5 className="text-3xl font-eczar">Ingredients:</h5>

      <div className="ingredients px-2 md:px-10 flex flex-col gap-4">
        {extendedIngredients.map(({ originalName, amount, unit }) => (
          // Used uuid generator because fetched id happens to be not unique
          <div key={uuidv4()} className="flex flex-row gap-2">
            <Image
              className="h-[16px] w-auto"
              height={0}
              width={0}
              src={OnionSvg}
              alt="onion bullet"
              style={{
                filter:
                  "invert(58%) sepia(84%) saturate(451%) hue-rotate(330deg) brightness(101%) contrast(101%)",
              }}
            />
            <span className="font-bold pr-2">
              {amount.toFixed(2).replace(/[.,]00$/, "")} {unit}
            </span>
            {originalName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
