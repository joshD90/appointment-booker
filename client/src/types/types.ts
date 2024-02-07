export type TypeOfDay = "midWeek" | "weekend" | "bankHoliday";
export type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type StatusOfClinic = "available" | "annualLeave" | "sickLeave";

export type AvailableTimes = { startTime: Date; endTime: Date };

export type Clinic = {
  clinicId: string;
  clinicName: string;
  status: StatusOfClinic;
};

export type Day = {
  typeOfDay: TypeOfDay;
  availableTimes: AvailableTimes;
  date: number;
  dayOfWeek: DayOfWeek;
};
