import postUserDetails from "@/app/services/user/api-services";
import getUser from "@/app/services/user/api-services"
import { useQuery } from "react-query";
import { API_QUERY_APPOINTMENTS_DETAILS } from "./cache-keys";
import getAppointmentsDetails from "./api-services";

export const queryAppointmentsDetails = (email: string|undefined) => {
  console.log("xxxxx", email)
  return useQuery([API_QUERY_APPOINTMENTS_DETAILS], () => getAppointmentsDetails({email}), 
  {
    enabled: !!email,
  })
}