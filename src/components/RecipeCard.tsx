import { FC } from "react";
import Image from "next/image";
import { Card } from "@mantine/core";

type RecipeCardProp = {
  title: string;
  image: string;
};

const RecipeCard: FC<RecipeCardProp> = ({ title, image }) => {
  return (
    <Card withBorder>
      <Image alt={`${title}-image`} src={image} width={200} height={150} />
      <h3>{title || "My recipe"}</h3>
    </Card>
  );
};

export default RecipeCard;
