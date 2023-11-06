import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

const noData: FC<{ message?: string }> = ({ message }) => {
  return (
    <div className="flex grow flex-row justify-center gap-2 md:gap-5 py-32 px-10 md:px-24 items-center">
      <MagnifyingGlassCircleIcon height={100} className="text-gray" />
      <p className="text-gray text-lg md:text-3xl ">
        {message ?? "Sorry, no data was found."}
      </p>
    </div>
  );
};

export default noData;
