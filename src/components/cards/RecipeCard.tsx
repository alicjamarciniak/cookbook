"use client";

import Image from "next/image";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

type RecipeCardProp = {
  animated?: boolean;
  title: string;
  image: string;
  size?: "lg" | "sm";
};

const RecipeCard: FC<RecipeCardProp> = ({
  animated = false,
  title,
  image,
  size = "lg",
}) => {
  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 100,
  });

  return (
    <div
      ref={ref}
      className={`bg-white  p-0 rounded-lg shadow-lg border border-light-gray
      ${size === "lg" ? "w-[300px]" : "w-[150px]"}
      ${
        animated
          ? inView
            ? "animate-fade-in visible"
            : "invisible"
          : "visible"
      }`}
    >
      <div
        className={`overflow-hidden p-[10px]
        ${size === "lg" ? "w-[300px] h-[200px]" : "w-[150px] h-[100px]"}`}
      >
        {image ? (
          //TODO: add blur loading
          <Image
            alt={`${title}-image`}
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            className={`${
              size === "lg" ? "w-[280px] h-[200px]" : "w-[140px] h-[100px]"
            }`}
          />
        ) : null}
      </div>
      <div className="text-dark-gray text-center text-sm md:text-lg p-3 pb-5 grow">
        <h3 className="line-clamp-2">{title || "My recipe"}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
