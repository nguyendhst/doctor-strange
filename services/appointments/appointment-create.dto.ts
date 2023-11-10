export class CreateAppointmentDto{
  userId: number;

  doctorId: number;

  symptomId: number;

  recommendationTime: Date;

  note?: string;

  constructor(userId: number, doctorId: number, symptomId: number, recommendationTime: Date, note?: string) {
    this.userId = userId;
    this.doctorId = doctorId;
    this.symptomId = symptomId;
    this.recommendationTime = recommendationTime;
    this.note = note;
  }
}