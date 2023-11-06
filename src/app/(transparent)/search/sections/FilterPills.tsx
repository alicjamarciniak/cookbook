import { Pill } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import useQueryParams from "@/hooks/useQeryParams";

const FilterPills = () => {
  const basePath = "search";
  const router = useRouter();
  const searchParams = useSearchParams();
  const { removeParam } = useQueryParams();

  const updateParams = (key: "mealType" | "diet" | "intolerances") => {
    const query = removeParam(basePath, key);
    router.push(query);
  };

  const mealType = searchParams.get("mealType");
  const diet = searchParams.get("diet");
  const intolerances = searchParams.get("intolerances");

  const setMealType = () => updateParams("mealType");
  const setDiet = () => updateParams("diet");
  const setIntolerances = () => updateParams("intolerances");

  return (
    <div className="flex gap-2">
      {mealType && mealType !== "all" && (
        <Pill value={mealType} onRemove={setMealType} />
      )}
      {diet && diet !== "all" && <Pill value={diet} onRemove={setDiet} />}
      {intolerances && intolerances !== "none" && (
        <Pill value={intolerances} onRemove={setIntolerances} />
      )}
    </div>
  );
};

export default FilterPills;
