"use client";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import RadioGroup from "@/components/radio-group/RadioGroup";
import { Diets, Intolerances, MealTypes } from "@/data/Options";
import { useRouter, useSearchParams } from "next/navigation";
import {
  DietType,
  IntolerancesType,
  MealTypesType,
} from "@/types/FilterOptions.d";

import useQueryParams from "@/hooks/useQeryParams";

const Filters = () => {
  const basePath = "search";
  const router = useRouter();
  const searchParams = useSearchParams();
  const [opened, { open, close }] = useDisclosure(false);
  const { addParam, removeParam } = useQueryParams();

  const updateParams = ({
    key,
    value,
    defaultValue = "all",
  }: {
    key: "mealType" | "diet" | "intolerances";
    value: MealTypesType | DietType | IntolerancesType;
    defaultValue?:
      | Extract<MealTypesType, "all">
      | Extract<DietType, "all">
      | Extract<IntolerancesType, "none">;
  }) => {
    const query =
      value === defaultValue
        ? removeParam(basePath, key)
        : addParam(basePath, key, value);
    router.push(query);
  };

  const initialMealType = searchParams.get("mealType") as MealTypesType;
  const initialDiet = searchParams.get("diet") as DietType;
  const initialIntolerances = searchParams.get(
    "intolerances"
  ) as IntolerancesType;

  const setMealType = (value: MealTypesType) => {
    updateParams({ key: "mealType", value });
  };
  const setDiet = (value: DietType) => {
    updateParams({ key: "diet", value });
  };
  const setIntolerances = (value: IntolerancesType) => {
    updateParams({ key: "intolerances", value, defaultValue: "none" });
  };

  return (
    <>
      <Modal.Root opened={opened} onClose={close} size="lg" padding={70}>
        <Modal.Overlay />

        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              <span className="font-bold text-2xl">Filters</span>
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>

          <Modal.Body className="flex flex-col gap-8">
            <div>
              <h4 className="mb-5 font-bold">Meal Types</h4>
              <RadioGroup
                initialValue={initialMealType ?? "all"}
                options={MealTypes}
                callback={setMealType}
              />
            </div>
            <div>
              <h4 className="mb-5 font-bold">Diets</h4>
              <RadioGroup
                initialValue={initialDiet}
                options={Diets}
                callback={setDiet}
              />
            </div>
            <div>
              <h4 className="mb-5 font-bold">Allergies and intolerances</h4>
              <RadioGroup
                initialValue={initialIntolerances}
                options={Intolerances}
                callback={setIntolerances}
              />
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button
        variant="white"
        onClick={open}
        size="50px"
        radius="16px"
        className="!px-4"
      >
        <AdjustmentsHorizontalIcon
          className="text-dark-orange"
          height="1.5rem"
        />
      </Button>
    </>
  );
};

export default Filters;
