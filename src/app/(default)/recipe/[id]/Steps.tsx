import { FC } from "react";
import { ThemeIcon } from "@mantine/core";

export type RecipeInstructions = {
  name: string;
  steps: {
    number: number;
    step: string;
  }[];
};

type StepsProps = {
  instructions: RecipeInstructions[];
};

const Steps: FC<StepsProps> = ({ instructions }) => {
  return (
    <>
      <h5 className="text-3xl font-eczar">Instructions:</h5>
      <div className="flex flex-col gap-6 pt-4 pr-5 pb-12">
        {instructions.map(({ steps }) =>
          steps.map(({ number, step }) => (
            <div key={number} className="flex flex-row gap-6 text-lg">
              <ThemeIcon className="!bg-dark-orange my-2" size={30} radius={30}>
                <h6 className="text-sm font-bold">{number}</h6>
              </ThemeIcon>
              <div className="flex grow">
                <h6 className="text-justify flex items-center">{step}</h6>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Steps;
