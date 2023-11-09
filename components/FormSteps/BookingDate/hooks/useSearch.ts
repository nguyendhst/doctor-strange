import { FORM_KEY } from "@/app/const/form";
import {
  queryDoctorsBySymtoms,
  queryUniqueDepartments,
} from "@/app/services/doctor/hooks";
import { querySymptoms } from "@/app/services/symptoms/hooks";
import { useDebounceFn } from "ahooks";
import { useEffect, useState } from "react";
import { Control, useWatch } from "react-hook-form";

export const useSearchDepartments = () => {
  const { mutateAsync, isLoading, isError } = queryUniqueDepartments();

  const [departments, setDepartments] = useState();

  useEffect(() => {
    mutateAsync("").then((data) => setDepartments(data.data));
  }, []);

  const {
    run: searchDepartments,
    flush,
    cancel,
  } = useDebounceFn(
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

export const useSearchSymptoms = () => {
  const { mutateAsync, isLoading, isError } = querySymptoms();

  const [symptomsList, setSymptomsList] = useState();

  useEffect(() => {
    mutateAsync("").then((data) => setSymptomsList(data.data));
  }, []);

  const {
    run: searchSymptoms,
    flush,
    cancel,
  } = useDebounceFn(
    async (search) => {
      mutateAsync(search).then((data) => setSymptomsList(data.data));
    },
    {
      wait: 500,
    }
  );
  return {
    symptomsList,
    searchSymptoms,
    loadingSymptoms: isLoading,
    symptomsError: isError,
  };
};

export const useSearchDoctors = (control?: Control) => {
  const symptomsIds = useWatch({ control, name: FORM_KEY["SYMP"] });
  const selectedDoctor = useWatch({control, name: FORM_KEY["DOCTOR"]})
  
  const [searchString, setSearchString] = useState<string>('');

  const { data, isLoading, isError, refetch } =
    queryDoctorsBySymtoms(symptomsIds, searchString);

  useEffect(() => {
    refetch();
  }, [symptomsIds, searchString]);

  return {
    doctorsList: data?.data,
    loadingDoctors: isLoading,
    doctorsError: isError,
    searchDoctors: setSearchString,
    selectedDoctor,
  };
};
