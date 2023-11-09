import Image from "next/image";
import { FC } from "react";
import getBase64Image from "@/services/base64";

type RecipeImgProp = {
  title: string;
  image: string;
  size?: "lg" | "sm";
};

const RecipeImg: FC<RecipeImgProp> = async ({ title, image, size }) => {
  const blurDataURL = await getBase64Image(image);

  return (
    <Image
      placeholder="blur"
      blurDataURL={blurDataURL}
      alt={`${title}-image`}
      src={image}
      width={0}
      height={0}
      sizes="100vw"
      className={`${
        size === "lg" ? "w-[280px] h-[200px]" : "w-[140px] h-[100px]"
      }`}
    />
  );
};

export default RecipeImg;
