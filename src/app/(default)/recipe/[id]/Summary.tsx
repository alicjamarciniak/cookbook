import { LinkIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/outline";
import { sanitize } from "isomorphic-dompurify";
import { FC } from "react";
import { Spoiler } from "@mantine/core";

type SummaryProps = {
  title: string;
  sourceName: string;
  sourceUrl: string;
  servings: number;
  readyInMinutes: number;
  summary: string;
};

const Summary: FC<SummaryProps> = ({
  title,
  sourceName,
  sourceUrl,
  servings,
  readyInMinutes,
  summary,
}) => {
  return (
    <>
      <h4 className="text-5xl font-eczar w-full pt-6">{title}</h4>

      <div className="flex flex-row gap-5 mt-3 flex-wrap">
        <div className="flex w-full md:w-auto items-center">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 items-center"
          >
            <LinkIcon className="text-orange" height="1.2rem" />
            {sourceName}
          </a>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <UsersIcon className="text-orange" height="1.2rem" />
          {servings} servings
        </div>
        <div className="flex flex-row gap-2 items-center">
          <ClockIcon className="text-orange" height="1.2rem" />
          {readyInMinutes} min
        </div>
      </div>

      <div className="py-12">
        <h5 className="text-3xl font-eczar">Summary:</h5>
        <Spoiler
          maxHeight={120}
          showLabel="Show more"
          hideLabel="Hide"
          className="[&>button]:text-orange"
        >
          <div className="pt-4 text-justify">
            <div
              dangerouslySetInnerHTML={{
                __html: sanitize(summary),
              }}
            />
          </div>
        </Spoiler>
      </div>
    </>
  );
};

export default Summary;
