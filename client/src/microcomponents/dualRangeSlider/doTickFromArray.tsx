export const doTickFromArray = (tickArray: string[], min: string) => {
  const mappedTicks = tickArray.map((tick, index) => (
    <div
      key={tick}
      className={`absolute bottom-0 -translate-x-1/2`}
      style={{
        left: `${((index + 1) / tickArray.length) * 100}%`,
      }}
    >
      {tick}
    </div>
  ));
  //the mapping doesnt work and leaves out the min so we manually put it back in
  const minDiv = (
    <div className="absolute left-0 bottom-0 -translate-x-1/2">{min}</div>
  );
  return [minDiv, ...mappedTicks];
};
