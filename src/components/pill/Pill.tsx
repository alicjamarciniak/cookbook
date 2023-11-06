import { FC } from "react";
import { Pill as MPill } from "@mantine/core";

type PillProps = {
  value: string;
  onRemove: () => void;
};

const Pill: FC<PillProps> = ({ value, onRemove }) => {
  return (
    <MPill withRemoveButton onRemove={onRemove}>
      {value}
    </MPill>
  );
};

export default Pill;
