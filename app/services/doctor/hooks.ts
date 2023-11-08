import { API_QUERY_USER } from "@/app/services/user/cache-keys";
import { useMutation, useQuery } from "react-query";
import { getUniqueDepartments, getDoctorDetail } from "./api-services";
import {
  API_GET_DEPARTMENTS,
  API_GET_DOCTOR_BY_ID,
} from "@/app/services/doctor/cache-keys";
import urlcat from "urlcat";
import { getAllDepartment } from "@/services/doctor/doctor.service";

export const queryDoctorByID = (id: number) => {
  return useQuery(urlcat(API_GET_DOCTOR_BY_ID, { id }), () =>
    getDoctorDetail(id)
  );
};

export const queryUniqueDepartments = () => {
  return useMutation(
    [API_GET_DEPARTMENTS],
    (search: string) => getUniqueDepartments(search),
  );
};
