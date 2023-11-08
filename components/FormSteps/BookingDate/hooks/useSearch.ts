import { queryUniqueDepartments } from "@/app/services/doctor/hooks";
import { getAllDepartment } from "@/services/doctor/doctor.service";
import { useDebounceFn } from "ahooks";
import React, { useEffect, useState } from "react";

export const useSearchDepartments = () => {
  const { mutateAsync, isLoading, isError } = queryUniqueDepartments();

  const [departments, setDepartments] = useState();

  useEffect(() => {
    mutateAsync("").then((data) => setDepartments(data.data));
  }, []);

  const {run : searchDepartments, flush, cancel} = useDebounceFn(
    async (search) => {
      mutateAsync(search).then((data) => setDepartments(data.data));
    },
    {
      wait: 500,
    }
  );
  return {
    departments,
    searchDepartments,
    loadingDepartments: isLoading,
    departmentsError: isError,
  };
};
