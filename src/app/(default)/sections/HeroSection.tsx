"use client";

import { BookOpenIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Image } from "@mantine/core";
import Link from "next/link";
import { FilledButton, OutlinedButton } from "@/components/buttons";
import { showWorkInProgressToast } from "@/services/toasts";

const HeroSection = () => {
  return (
    <div
      className="h-[calc(100vh-111px)] w-[100vw] lg:w-[80vw] flex flex-row m-auto md:bg-none md:bg-dark-green relative
      md:before:bg-none before:content-[''] before:bg-hero-img before:bg-cover before:bg-center
      before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-full before:brightness-[0.7]"
    >
      <div className="flex flex-1 flex-col justify-end md:justify-start relative">
        <h3
          className="text-dark-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]
        md:text-light-orange font-eczar text-6xl sm:text-7xl md:text-[5.3rem] mt-[7vh] pt-5 pr-5 animate-fade-up"
        >
          Finally, all your favorite recipes in one place
        </h3>
        <div className="hidden md:block py-8 md:bg-dark-green w-full">
          <div className="border border-light-orange" />
        </div>
        <div className="animate-fade-down">
          <h5 className="hidden md:inline text-light-orange font-pt-sans font-thin text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac velit
            nunc. Quisque euismod mattis lorem. Aenean eget nulla tempor,
            condimentum odio eget, ullamcorper massa.
          </h5>

          <div className="flex flex-col lg:flex-row w-full justify-center items-center md:items-start gap-4 md:gap-10">
            <Link href="/search">
              <FilledButton
                className="mt-32 md:mt-16 duration-500 lg:transition-[max-width]
              w-[300px] max-w-[300px] lg:hover:max-w-[350px] lg:hover:w-[400px]"
              >
                <MagnifyingGlassIcon height="1.5rem" />
                Search
              </FilledButton>
            </Link>

            <OutlinedButton
              onClick={showWorkInProgressToast}
              className="w-[300px] max-w-[300px] lg:hover:max-w-[400px] lg:hover:w-[350px]
                          lg:transition-[max-width] duration-500bg-dark-white
                          md:bg-transparent mb-8 md:mb-0 md:mt-16"
            >
              <BookOpenIcon height="1.5rem" />
              Your recipes
            </OutlinedButton>
          </div>
        </div>
      </div>

      {/* visible only for md+ screens */}
      <div className="hidden h-[calc(100vh-111px)] md:flex flex-1 justify-end">
        <div className="relative">
          <div className="absolute top-0 left-0 h-full">
            <svg style={{height: "100%"}} viewBox="0 0 70 350">
              <polygon points="0,0 70,0 0,350" className="fill-dark-green" />
            </svg>
          </div>
          <Image alt="burger" src="/img/burger-guy.jpg" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
