import postUserDetails from "@/app/services/user/api-services";
import getUser from "@/app/services/user/api-services"
import { API_QUERY_USER } from "@/app/services/user/cache-keys"
import { useQuery } from "react-query";

export const queryUser = () => {
  return useQuery([API_QUERY_USER], postUserDetails)
}