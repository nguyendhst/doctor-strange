import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { User } from '@supabase/supabase-js'
import { API_QUERY_USER } from '@/app/services/user/cache-keys'
import request from 'umi-request';

export default async function getDoctorDetail(id: number): Promise<TResponseMeta<User|null>> {
  return request<TResponseMeta<User|null>>(`/services/doctor/detail`, {
    method: 'GET',
    params: {
      id,
    }
  })

}