import { useMutation, useQuery } from "react-query";
import {
  getUniqueDepartments,
  getDoctorDetail,
  getDoctorsBySymptoms,
} from "@/app/services/doctor/api-services";
import {
  API_GET_DEPARTMENTS,
  API_GET_DOCTORS_BY_SYMPTOMS,
  API_GET_DOCTOR_BY_ID,
} from "@/app/services/doctor/cache-keys";
import urlcat from "urlcat";

export const queryDoctorByID = (id?: number | string) => {
  return useQuery([API_GET_DOCTOR_BY_ID, id], () => getDoctorDetail(id), {
    enabled: !!id,
  });
};

export const queryUniqueDepartments = () => {
  return useMutation([API_GET_DEPARTMENTS], (search: string) =>
    getUniqueDepartments(search)
  );
};

export const queryDoctorsBySymtoms = (
  ids: string[] | null,
  search: string | null
) => {
  return useQuery([API_GET_DOCTORS_BY_SYMPTOMS], () =>
    getDoctorsBySymptoms(ids, search)
  );
};
