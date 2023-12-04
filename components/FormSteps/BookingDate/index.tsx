"use client";
import { FORM_KEY } from "@/app/const/form";
import AntdDatePicker from "@/components/Input/DatePicker";
import ValidateError from "@/components/Input/ValidateError";
import { Row, Col, Form, Select, Spin, Empty, Radio } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import DoctorDetails from "@/components/DoctorDetails";
import {
  useSearchDepartments,
  useSearchDoctors,
  useSearchSymptoms,
} from "@/components/FormSteps/BookingDate/hooks/useSearch";
import { useSchedule } from "@/components/FormSteps/BookingDate/hooks/useSchedule";

const { Item } = Form;

const BookingDate: React.FC<TFormControl> = ({ control, error }) => {
  const { searchDepartments, loadingDepartments, departments } =
    useSearchDepartments();

  const { symptomsList, searchSymptoms, loadingSymptoms } = useSearchSymptoms();

  const { doctorsList, loadingDoctors, searchDoctors, selectedDoctor } =
    useSearchDoctors(control);

  const { schedule } = useSchedule(control);
  return (
    <Row gutter={24}>
      <Col span={24} lg={12}>
        <Col span={24}>
          <Item label="Hospital Department Selection">
            <Controller
              name={FORM_KEY["DEP"]}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  allowClear
                  onClear={() => searchDepartments("")}
                  showSearch={true}
                  size="large"
                  placeholder="Select the relevant department(s) based on your symptoms."
                  fieldNames={{
                    label: FORM_KEY["DEP"],
                    value: FORM_KEY["DEP"],
                  }}
                  onSearch={searchDepartments}
                  loading={loadingDepartments}
                  options={departments}
                  filterOption={false}
                  notFoundContent={
                    loadingDepartments ? (
                      <Spin className="h-full w-full m-auto" />
                    ) : (
                      <Empty />
                    )
                  }
                />
              )}
            />
            <ValidateError error={error} />
          </Item>
        </Col>

        <Col span={24}>
          <Item label="Choose some symptoms" required>
            <Controller
              name={FORM_KEY["SYMP"]}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  mode="multiple"
                  showSearch={true}
                  allowClear={true}
                  size="large"
                  placeholder="Please select some symptoms"
                  fieldNames={{ label: FORM_KEY["SYMP"], value: "id" }}
                  onSearch={searchSymptoms}
                  loading={loadingSymptoms}
                  options={symptomsList}
                  filterOption={false}
                  notFoundContent={
                    loadingSymptoms ? (
                      <Spin className="h-full w-full m-auto" />
                    ) : (
                      <Empty />
                    )
                  }
                />
              )}
            />
            <ValidateError error={error} />
          </Item>
        </Col>

        <Col span={24}>
          <Item label="Choose your Appointment Date" required>
            <AntdDatePicker
              placement="top"
              control={control}
              error={error}
              name={FORM_KEY["BOOKING_DATE"]}
              className="w-full"
              format="DD/MM/YYYY"
              size="large"
              disabledDate={(current) =>
                current && current < dayjs().endOf("day")
              }
            />
          </Item>
        </Col>

        <Col span={24}>
          <Item label="Doctor Selection" required>
            <Controller
              name={FORM_KEY["DOCTOR"]}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  allowClear
                  onClear={() => searchDoctors("")}
                  size="large"
                  placeholder="Doctor's info displayed upon selection.."
                  fieldNames={{ label: "name", value: "id" }}
                  onSearch={searchDoctors}
                  loading={loadingDoctors}
                  options={doctorsList}
                  filterOption={false}
                  showSearch
                  notFoundContent={
                    loadingDoctors ? (
                      <Spin className="h-full w-full m-auto" />
                    ) : (
                      <Empty />
                    )
                  }
                />
              )}
            />
          </Item>
        </Col>

        <Col span={24}>
          <Item label="Select Preferred Appointment Time of Day" required>
            <Controller
              name={FORM_KEY["SHIFT"]}
              control={control}
              render={({ field }) => (
                <Radio.Group
                  className="flex flex-row gap-2"
                  onChange={field.onChange}
                  value={field.value}
                >
                  {schedule.map((timeSlot) => (
                    <Radio
                      key={timeSlot.code}
                      value={timeSlot.code}
                      disabled={timeSlot.disabled}
                    >
                      {timeSlot.name}
                    </Radio>
                  ))}
                </Radio.Group>
              )}
            />
          </Item>
        </Col>
      </Col>

      <Col span={0} lg={12}>
        <DoctorDetails doctorId={selectedDoctor} />
      </Col>
    </Row>
  );
};

export default BookingDate;
