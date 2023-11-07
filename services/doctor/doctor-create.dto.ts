export class CreateDoctorDto{
  name: string;

  specialization: string;

  contact: string;

  rating: number;

  department: string;

  constructor(name: string, specialization: string, contact: string, rating: number, department: string) {
    this.name = name;
    this.specialization = specialization;
    this.contact = contact;
    this.rating = rating;
    this.department = department;
  }
}