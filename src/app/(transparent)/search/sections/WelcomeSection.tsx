import { FC } from "react";

const WelcomeSection: FC<{ isSearchActive: boolean }> = ({
  isSearchActive,
}) => {
  return (
    <div className="flex ">
      <h4
        className={`font-eczar text-dark-white text-6xl md:text-9xl mt-[5vh] md:mt-[15vh]
        transition-[width,max-height] duration-300 delay-[0s, 0.7s] overflow-hidden
        ${!isSearchActive ? "max-h-[50vh] w-full" : "max-h-0 w-0"}`}
      >
        Hungry for
        <br />
        something
        <br />
        <span className="text-dark-green">new?</span>
      </h4>
      <h4
        className={`font-eczar text-dark-white text-5xl md:mt-[15vh] transition-[width,max-height] duration-500 delay-[0.5s,2s] overflow-hidden ${
          isSearchActive ? "max-h-[20vh] w-full" : "w-0 max-h-0"
        }`}
      >
        Ok, let&apos;s search for
        <span className="text-dark-green"> it</span> then!
      </h4>
    </div>
  );
};

export default WelcomeSection;
