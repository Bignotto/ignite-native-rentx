import { addDays } from "date-fns";

import { Platform } from "react-native";

export function getPlatformDate(date: Date): Date {
  if (Platform.OS === "android") {
    return addDays(date, 1);
  }
  return date;
}
