import request from "umi-request";
import {
  API_GET_DEPARTMENTS,
  API_GET_DOCTOR_BY_ID,
} from "@/app/services/doctor/cache-keys";

export const getDoctorDetail = async (
  id: number
): Promise<TResponseMeta<any | null>> => {
  return request<TResponseMeta<any | null>>(API_GET_DOCTOR_BY_ID, {
    method: "GET",
    params: {
      id,
    },
  });
};

export const getUniqueDepartments = async (
  search: string
): Promise<TResponseMeta<any | null>> => {
  return request<TResponseMeta<any | null>>(API_GET_DEPARTMENTS, {
    method: "GET",
    params: {
      search,
    },
  });
};
