import { format } from "date-fns";
import { es } from "date-fns/locale";

export const formatDate = (date) => {
  const dateFormated = format(date, "dd 'de' MMMM 'de' yyyy", { locale: es });
  return dateFormated;
};
