import { FC } from "react";

type Props = { date: Date };

const SetDayTimes: FC<Props> = ({ date }) => {
  return <div>{date.toString()}</div>;
};

export default SetDayTimes;
