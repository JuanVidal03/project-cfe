import { format } from "date-fns";
import { es } from "date-fns/locale";

export const formatDate = (date: Date): string => {
  const dateFormated: string = format(date, "dd 'de' MMMM 'de' yyyy", {
    locale: es,
  });
  return dateFormated;
};
