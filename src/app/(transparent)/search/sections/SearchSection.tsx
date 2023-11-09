"use client";

import { useState, FC, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { type Recipe } from "@/types/Recipe";
import WelcomeSection from "./WelcomeSection";
import SearchBar from "./SearchBar";
import useDevices from "@/hooks/useDevices";
import { Affix } from "@/components";
import dynamic from "next/dynamic";

const DynamicResults = dynamic(() => import("./SearchResults"));
const DynamicFilters = dynamic(() => import("./Filters"));
const DynamicFilterPills = dynamic(() => import("./FilterPills"));
const DynamicSortSelect = dynamic(() => import("./SortSelect"));

// TODO: simplify animation

type SearchSectionProps = {
  initialResults?: Recipe[];
};

const SearchSection: FC<SearchSectionProps> = ({ initialResults }) => {
  const { isMobile } = useDevices();
  const searchParams = useSearchParams();
  const querySize = searchParams.size;
  const query = searchParams.get("query");
  const [isSearchActive, setSearchActive] = useState(false);

  useEffect(() => {
    setSearchActive(querySize > 0);
  }, [querySize]);

  return (
    <>
      <div className="bg-dark-orange flex flex-col">
        <div
          className={`flex flex-col md:flex-row transition-[height] delay-[1s] duration-700 ${
            !isSearchActive ? "h-[100vh]" : "h-auto md:h-[40vh]"
          }`}
        >
          <div
            className={`bg-[url('/img/kitchen.jpg')] bg-cover md:bg-[url('/img/hungry.jpg')]
            h-[30vh] md:h-full w-full md:w-[45vw] bg-center rounded-br-[75px] md:rounded-none
            opacity-70 md:opacity-100
            md:pl-[45vw] transition-transform duration-[1000ms]`}
            style={{
              transform: `translate3d(0, ${isSearchActive ? "-100vh" : 0}, 0)`,
            }}
          />

          <div
            className={`flex flex-col transition-[margin, padding] delay-700 duration-700  ${
              !isSearchActive ? "px-4 md:px-10" : "px-4 md:ml-[-25vw]"
            } `}
            {...(isMobile && {
              style: {
                transform: `translate3d(0, ${isSearchActive ? "-10vh" : 0}, 0)`,
              },
            })}
          >
            <WelcomeSection isSearchActive={isSearchActive} />

            <div className="pt-10 md:bg-dark-orange flex justify-center flex-col md:flex-row gap-4 mb-2">
              <SearchBar
                initialSearch={query}
                setSearchActive={setSearchActive}
                isSearchActive={isSearchActive}
              />

              <div
                className={`flex flex-row transition-[opacity] duration-700 delay-1000 gap-4 pb-5 ${
                  !isSearchActive ? "opacity-0" : "opacity-100 "
                }`}
              >
                <DynamicFilters />
                <DynamicSortSelect />
              </div>
            </div>

            <DynamicFilterPills />
          </div>
        </div>

        {isSearchActive && (
          <DynamicResults query={query ?? ""} initialResults={initialResults} />
        )}
      </div>
      <Affix />
    </>
  );
};

export default SearchSection;
