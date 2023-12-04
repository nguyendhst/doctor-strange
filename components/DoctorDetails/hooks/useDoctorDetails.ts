import { queryDoctorByID } from "@/app/services/doctor/hooks"

export const useDoctorDetails = (id?: number | string) => {
  const {data, isLoading} = queryDoctorByID(id);

  return {
    data, isLoading
  }
}
