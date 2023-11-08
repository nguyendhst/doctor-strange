import { API_QUERY_USER } from "@/app/services/user/cache-keys"
import { useQuery } from "react-query";
import getDoctorDetail from "./api-services";

export const queryDoctorByID = (id: number) => {
  return useQuery(`/doctoc/${id}`, () => getDoctorDetail(id))
}