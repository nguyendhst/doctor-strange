export class CreateAppointmentDto {
  userId?: number | string;

  doctorId?: number | string;

  symptomId?: number | string;

  symptomIdArray?: number[] | string[];

  recommendationTime?: Date | string;

  note?: string;

  shift?: string;

  constructor(
    userId?: number | string,
    doctorId?: number | string,
    recommendationTime?: Date | string,
    shift?: string,
    symptomId?: number[] | string[],
    note?: string
  ) {
    this.userId = userId;
    this.doctorId = doctorId;
    this.symptomIdArray = symptomId;
    this.symptomId = symptomId?.[0];
    this.recommendationTime = recommendationTime;
    this.note = note;
    this.shift = shift;
  }
}
