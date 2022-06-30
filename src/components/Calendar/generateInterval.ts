import { eachDayOfInterval, format } from "date-fns";

import { CalendarProps } from "react-native-calendars";
import { DayProps, MarkedDateProps } from ".";
import { getPlatformDate } from "../../utils/getPlatformDate";
import theme from "../../global/styles/theme";

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.dateString),
    end: new Date(end.dateString),
  }).forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });
  return interval;
}
