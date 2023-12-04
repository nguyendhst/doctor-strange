export class PatientDto {
  name: string;

  gender: string;

  contact?: string;

  social_id?: string | null;

  phone_number: string;

  dob?: Date | string | null;

  constructor(
    name: string,
    gender: string,
    phoneNumber: string,
    contact?: string,
    dob?: Date | string | null,
    socialId?: string | null,
  ) {
    this.name = name;
    this.gender = gender;
    this.phone_number = phoneNumber;
    this.contact = contact;
    this.social_id = socialId;
    this.dob = dob;
  }
}
