"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CloseButton, TextInput } from "@mantine/core";
import { useDebouncedValue, useEventListener } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { FC, useRef, useState } from "react";

type SearchBarProps = {
  initialSearch: string | null;
  isSearchActive: boolean;
  setSearchActive: (value: boolean) => void;
};

const SearchBar: FC<SearchBarProps> = ({
  initialSearch,
  isSearchActive,
  setSearchActive,
}) => {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(initialSearch);
  const [query] = useDebouncedValue(text, 750, { leading: true });

  const updateURL = () => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (!query) {
      router.push("/search");
    } else {
      router.push(`/search?query=${query}`);
    }
  };

  const ref = useEventListener(
    "click",
    () => !isSearchActive && setSearchActive(true)
  );

  return (
    <TextInput
      ref={ref}
      type="search"
      size="lg"
      value={text ?? ""}
      placeholder="Search recipes"
      className="md:w-[40vw] flex flex-col border border-dark-orange
              rounded-2xl flex-grow [&>div>input]:border-0 overflow-hidden"
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        e.key === "Enter" && updateURL();
      }}
      rightSection={
        <div className="flex flex-row gap-2 justify-end min-w-[100px] absolute right-1 h-full items-center">
          <CloseButton
            aria-label="Clear input"
            onClick={() => setText("")}
            style={{ display: text ? undefined : "none" }}
          />
          <button
            onClick={updateURL}
            title="search"
            type="submit"
            className="px-2 w-fit h-full flex justify-center items-center"
          >
            <MagnifyingGlassIcon className="text-dark-orange" height="1.5rem" />
          </button>
        </div>
      }
    />
  );
};

export default SearchBar;
