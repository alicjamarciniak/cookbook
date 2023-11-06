"use client";

import { FC } from "react";
import { RecipeCard, SeeMoreCard } from "@/components";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import { type Recipe } from "../../../types/Recipe";

const ExploreSection: FC<{ mainCourses: Recipe[]; desserts: Recipe[] }> = ({
  mainCourses,
  desserts,
}) => {
  return (
    <>
      <div
        id="explore"
        className="text-center p-0 m-0 h-[200px] md:h-[300px]
        flex items-center justify-center bg-section-title-img"
      >
        <h3 className="text-3xl font-pt-sans font-bold">Explore</h3>
      </div>
      <div className="bg-dark-white flex flex-col items-center px-4 py-16">
        <div>
          <div className="items-left flex self-start">
            <h2 className="p-4 font-bold text-xl text-sky-950">Main courses</h2>
          </div>
          <div className="flex justify-center">
            <Carousel
              className="w-[310px] md:w-[1000px] lg:w-[1600px]
              lg:[&>div>button]:opacity-0 [&>div>button[data-inactive]]:opacity-0 [&>div>button.[data-inactive]]:cursor-default"
              slideSize={{ base: "100%", sm: "100%", md: "33.33%", lg: "20%" }}
              slideGap={{ base: 0, md: "md" }}
              align="start"
            >
              {mainCourses.slice(0, 4).map(({ id, title, image }) => (
                <Carousel.Slide key={id} className="flex">
                  <Link href={`/recipe/${id}`} className="flex grow">
                    <RecipeCard animated title={title} image={image} />
                  </Link>
                </Carousel.Slide>
              ))}
              <Carousel.Slide key={"main-courses-more"} className="flex">
                <Link href={`/search?mealType=main course`} className="flex">
                  <SeeMoreCard />
                </Link>
              </Carousel.Slide>
            </Carousel>
          </div>
        </div>

        <div>
          <div className="items-left flex self-start">
            <h2 className="p-4 font-bold text-xl text-sky-950	">Desserts</h2>
          </div>

          <div className="flex justify-center">
            <Carousel
              className="w-[310px] md:w-[1000px] lg:w-[1600px]
              lg:[&>div>button]:opacity-0 [&>div>button[data-inactive]]:opacity-0 [&>div>button.[data-inactive]]:cursor-default"
              slideSize={{ base: "100%", sm: "100%", md: "33.33%", lg: "20%" }}
              slideGap={{ base: 0, md: "md" }}
              align="start"
            >
              {desserts.slice(0, 4).map(({ id, title, image }) => (
                <Carousel.Slide key={id} className="flex">
                  <Link href={`/recipe/${id}`} className="flex grow">
                    <RecipeCard animated title={title} image={image} />
                  </Link>
                </Carousel.Slide>
              ))}
              <Carousel.Slide key={"desserts-more"} className="flex">
                <Link href={`/search?mealType=dessert`} className="flex">
                  <SeeMoreCard />
                </Link>
              </Carousel.Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
