import { Pill as MPill } from "@mantine/core";
import { FC } from "react";

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
