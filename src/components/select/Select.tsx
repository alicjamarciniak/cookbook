"use client";

import { Option } from "@/types/FilterOptions.d";
import {
  Combobox,
  Input,
  Group,
  InputBase,
  CheckIcon,
  useCombobox,
} from "@mantine/core";
import { useEffect, useState } from "react";

type SelectProps<T> = {
  label?: string;
  options: Option<T>[];
  callback?: (value: T) => void;
};

function Select<T extends string>({
  label,
  options,
  callback,
}: SelectProps<T>): React.ReactElement<SelectProps<T>> {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: (eventSource) => {
      eventSource === "keyboard"
        ? combobox.selectActiveOption()
        : combobox.updateSelectedOptionIndex("active");
    },
  });

  const [selectedItem, setSelectedItem] = useState<Option<T>>(options[0]);

  useEffect(() => {
    callback && callback(selectedItem.value);
  }, [callback, selectedItem.value]);

  const optionsList = options.map(({ value, label }) => (
    <Combobox.Option
      value={value}
      key={value}
      active={value === selectedItem.value}
    >
      <Group gap="xs">
        {value === selectedItem.value && <CheckIcon size={12} />}
        <span>{label}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      width={200}
      store={combobox}
      resetSelectionOnOptionHover
      withinPortal={false}
      onOptionSubmit={(value) => {
        const selected = options.find((item) => item.value === value);
        setSelectedItem(selected as Option<T>);
        combobox.updateSelectedOptionIndex("active");
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          radius="16px"
          className="[&>div>button]:h-[50px] [&>div>button]:w-[200px] [&>div>button]:bg-dark-white"
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {label && <span className="mr-2 text-gray">{label}</span>}
          {selectedItem.label || (
            <Input.Placeholder>Pick value</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{optionsList}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default Select;
