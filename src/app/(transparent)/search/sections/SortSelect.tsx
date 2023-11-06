import { SortType } from "@/types/FilterOptions.d";
import { SortOptions } from "@/data/Options";
import { Select } from "@/components";
import { useRouter } from "next/navigation";
import useQueryParams from "@/hooks/useQeryParams";

const SortSelect = () => {
  const basePath = "search";
  const router = useRouter();
  const { addParam, removeParam } = useQueryParams();

  const setSort = (value: SortType) => {
    const query =
      value === "default"
        ? removeParam(basePath, "sort")
        : addParam(basePath, "sort", value);
    router.push(query);
  };

  return <Select label="Sort by: " options={SortOptions} callback={setSort} />;
};

export default SortSelect;
