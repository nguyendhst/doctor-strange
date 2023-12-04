import request from "umi-request";
import {
  API_GET_DEPARTMENTS,
  API_GET_DOCTORS_BY_SYMPTOMS,
  API_GET_DOCTORS_SCHEDULE,
  API_GET_DOCTOR_BY_ID,
} from "@/app/services/doctor/cache-keys";

export const getDoctorDetail = async (
  id?: number | string
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

export const getDoctorsBySymptoms = async (
  ids: string[] | null,
  search: string | null,
): Promise<TResponseMeta<any | null>> => {
  return request<TResponseMeta<any | null>>(API_GET_DOCTORS_BY_SYMPTOMS, {
    method: "GET",
    params: {
      ids,
      search,
    },
  });
};

export const getDoctorSchedule = async (
  id: string | null,
  date: number | Date | null,
): Promise<TResponseMeta<any | null>> => {
  return request<TResponseMeta<any | null>>(API_GET_DOCTORS_SCHEDULE, {
    method: "GET",
    params: {
      id,
      date,
    },
  });
};