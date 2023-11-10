import request from 'umi-request';
import { API_QUERY_SYMPTOMS } from '@/app/services/symptoms/cache-keys'

export default async function getSymptoms(search: string): Promise<TResponseMeta<any>> {
  return request<TResponseMeta<any>>(API_QUERY_SYMPTOMS, {
    method: 'GET',
    params: {
      search
    }
  })

}