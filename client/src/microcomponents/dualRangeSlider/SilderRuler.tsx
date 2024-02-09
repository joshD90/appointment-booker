import { FC } from "react";

import { doTickFromArray } from "./doTickFromArray";

type Props = { tickArray: string[]; min: string };

const SliderRuler: FC<Props> = ({ tickArray, min }) => {
  return (
    <div className="relative w-full mt-8">
      {doTickFromArray(tickArray, min)}
    </div>
  );
};

export default SliderRuler;
