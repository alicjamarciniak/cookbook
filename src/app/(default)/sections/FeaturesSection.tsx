"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const FeaturesSection = () => {
  const heartRef = useRef(null);
  const searchRef = useRef(null);
  const bookRef = useRef(null);

  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="bg-orange px-[20px] py-[100px] md:p-[100px]">
      <div
        ref={ref}
        className={`flex flex-col md:flex-row gap-[100px] justify-center ${
          inView ? "visible animate-fade-in" : "invisible"
        }`}
      >
        <div className="md:w-[15vw] flex md:block flex-row">
          <div className="h-[120px] mb-[20px]">
            <lottie-player
              autoplay
              loop
              src="/lottie/heart.json"
              ref={heartRef}
              style={{ height: 120 }}
              speed={0.75}
            />
          </div>
          <div className="flex md:block flex-[3] justify-center flex-col">
            <h4 className="text-white text-2xl font-eczar font-bold text-center">
              Create
            </h4>
            <h5 className="text-white mt-6 font-pt-sans font-thin text-center">
              Create your own recipes with quick and intuitive creator
            </h5>
          </div>
        </div>

        <div className="md:w-[15vw] flex md:block flex-row-reverse">
          <div className="h-[120px] mb-[20px] ">
            <lottie-player
              autoplay
              loop
              src="/lottie/search.json"
              ref={searchRef}
              style={{ height: 120 }}
              speed={0.33}
            />
          </div>
          <div className="flex md:block flex-[3] justify-center flex-col">
            <h4 className="text-white text-2xl font-eczar font-bold text-center">
              Explore
            </h4>
            <h5 className="text-white mt-6 font-pt-sans font-thin text-center">
              Search for a new meal inspirations in Cookbook&apos;s recipe base
            </h5>
          </div>
        </div>

        <div className="md:w-[15vw] flex flex-row md:block">
          <div className="h-[120px] mb-[20px] flex items-center">
            <lottie-player
              autoplay
              loop
              src="/lottie/book.json"
              ref={bookRef}
              style={{ height: 120 }}
              speed={0.33}
            />
          </div>
          <div className="flex md:block flex-[3] justify-center flex-col">
            <h4 className="text-white text-2xl font-eczar font-bold text-center">
              Save
            </h4>
            <h5 className="text-white mt-6 font-pt-sans font-thin text-center">
              Save your own recipes for later! Save your own recipes for later!
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
