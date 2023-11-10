import AppointmentForm from '@/app/book-appointment/component/AppointmentForm';
import { Metadata } from 'next';

const BookAppointment = () => {
  return (
    <AppointmentForm />
  )
}

export const metadata: Metadata = {
  title: 'Book Appointment',
  description: 'Submit form to meet a doctor',
}

export default BookAppointment
