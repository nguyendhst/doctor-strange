import getSymptoms from "@/app/services/symptoms/api-services";
import { API_QUERY_SYMPTOMS } from "@/app/services/symptoms/cache-keys";
import { useMutation } from "react-query";

export const querySymptoms = () => {
  return useMutation(
    [API_QUERY_SYMPTOMS],
    (search: string) => getSymptoms(search),
  );
};
