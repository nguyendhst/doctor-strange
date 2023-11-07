import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { User } from '@supabase/supabase-js'
import request from 'umi-request'
import { API_QUERY_APPOINTMENTS_DETAILS } from './cache-keys'

export type TAppointmentsDetailsProps = {
  email?: string,
}

export default async function getAppointmentsDetails({email}: TAppointmentsDetailsProps): Promise<TResponseMeta<TAppointmentsDetails[]>> {
  return request<TResponseMeta<TAppointmentsDetails[]>>(API_QUERY_APPOINTMENTS_DETAILS, {
    method: 'POST',
    // cache: "no-cache",
    data: {
      email
    }
  })

}