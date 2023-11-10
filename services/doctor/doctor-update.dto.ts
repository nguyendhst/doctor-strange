export class UpdateDoctorDto{
  id: number;

  name?: string;

  specialization?: string;

  contact?: string;

  rating?: number;

  department?: string;

  constructor(id: number, name?: string, specialization?: string, contact?: string, rating?: number, department?: string) {
    this.id = id;
    this.name = name;
    this.specialization = specialization;
    this.contact = contact;
    this.rating = rating;
    this.department = department;
  }
}