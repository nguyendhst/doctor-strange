import postUserDetails from "@/app/services/user/api-services";
import getUser from "@/app/services/user/api-services"
import { useQuery } from "react-query";
import { API_QUERY_APPOINTMENTS_DETAILS } from "./cache-keys";
import getAppointmentsDetails from "./api-services";

// OLD
// export const queryAppointmentsDetails = (email: string|undefined) => {
//   return useQuery([API_QUERY_APPOINTMENTS_DETAILS], () => getAppointmentsDetails({email}), 
//   {
//     enabled: !!email,
//   })
// }

export const queryAppointmentsDetails = () => {
  return useQuery([API_QUERY_APPOINTMENTS_DETAILS], () => getAppointmentsDetails(), {  })
}