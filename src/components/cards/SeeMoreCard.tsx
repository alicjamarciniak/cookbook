"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@mantine/hooks";

const SeeMoreCard = ({}) => {
  const lottieRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)", true, {
    getInitialValueInEffect: false,
  });

  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div
      ref={ref}
      className={`bg-orange hover:bg-dark-orange transition-colors w-[300px] p-0  rounded-lg shadow-lg
      ${inView ? "animate-fade-in visible" : "invisible"}`}
    >
      <div className="h-[200px]">
        <lottie-player
          loop
          hover
          src="/lottie/wired-outline-eye.json"
          ref={lottieRef}
          style={{ height: 200 }}
          autoplay={isMobile}
        />
      </div>
      <div className="text-dark-white p-3 pb-5 grow">
        <h3 className="line-clamp-2 text-center font-bold">See more</h3>
      </div>
    </div>
  );
};

export default SeeMoreCard;
