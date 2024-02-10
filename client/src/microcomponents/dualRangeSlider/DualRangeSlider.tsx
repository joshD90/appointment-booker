import { FC, useState } from "react";
import { Range } from "react-range";
import SliderRuler from "./SilderRuler";

type Props = { rangeArray: string[]; smallestIncrement: number };

const DualRangeSlider: FC<Props> = ({ rangeArray, smallestIncrement }) => {
  const min = parseFloat(rangeArray[0]) - 1;
  const range =
    parseFloat(rangeArray[rangeArray.length - 1]) / smallestIncrement -
    min / smallestIncrement;

  const [values, setValues] = useState([min + smallestIncrement, range - 5]); // Initial min and max values

  const minString = String(min.toFixed(2)).padStart(5, "0");
  return (
    <div>
      <Range
        step={1}
        min={0}
        max={range}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => {
          const selectedStartPercentage = (values[0] / range) * 100;
          const selectedEndPercentage = (values[1] / range) * 100;
          return (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
              }}
              className="w-full bg-red-300"
            >
              <div
                style={{
                  height: "6px",
                  left: `${selectedStartPercentage}%`,
                  right: `${100 - selectedEndPercentage}%`,
                }}
                className="bg-green-600 absolute"
              ></div>
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#999",
              borderRadius: "100%",
            }}
          />
        )}
      />
      <SliderRuler tickArray={rangeArray} min={minString} />
      <div className="w-full flex items-center justify-between mt-14">
        <p>
          <span>Start: </span>
          {calcTimeFromValue(values[0], smallestIncrement, min, range).hour}:
          {calcTimeFromValue(values[0], smallestIncrement, min, range).min}
        </p>
        <p>
          <span>End: </span>
          {calcTimeFromValue(values[1], smallestIncrement, min, range).hour}:
          {calcTimeFromValue(values[1], smallestIncrement, min, range).min}
        </p>
      </div>
    </div>
  );
};

const calcTimeFromValue = (
  value: number,
  increment: number,
  minimum: number,
  maximum: number
): { hour: number; min: string } => {
  console.log(maximum, value);
  const hour = Math.floor(value * increment) + minimum;
  const min = String((value % (1 / increment)) * (60 * increment)).padStart(
    2,
    "0"
  );

  return { hour, min };
};

export default DualRangeSlider;
