"use client";

import { Radio } from "@mantine/core";
import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import { Option } from "@/types/FilterOptions.d";
import tailwindConfig from "../../../tailwind.config.js";


type RadioGroupProps<T extends string> = {
  options: Option<T>[];
  initialValue?: T;
  callback?: (selectedValue: T) => void;
};

function RadioGroup<T extends string>({
  options,
  initialValue,
  callback,
}: RadioGroupProps<T>): React.ReactElement<RadioGroupProps<T>> {
  const [selectedValue, setSelectedValue] = useState<T>(
    initialValue ?? options[0].value
  );
  const fullConfig = resolveConfig(tailwindConfig);

  useEffect(() => {
    callback && callback(selectedValue);
  }, [callback, selectedValue]);

  return (
    <Radio.Group
      value={selectedValue}
      onChange={(value: string) => setSelectedValue(value as T)}
      required
    >
      <div className="grid md:grid-cols-3 gap-2">
        {options.map(({ value, label }) => (
          <Radio
            key={value}
            value={value}
            label={label}
            color={fullConfig.theme?.colors?.orange as string}
          />
        ))}
      </div>
    </Radio.Group>
  );
}

export default RadioGroup;
