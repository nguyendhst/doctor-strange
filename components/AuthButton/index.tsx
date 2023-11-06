"use client"
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { queryUser } from '@/app/services/user/hooks'
import { Button } from 'antd';

export default function AuthButton() {

  const {
    data
  } = queryUser();

  const user = data?.data;

  return user ? (
    <div className="flex items-center gap-4 pr-4">
      Hey, {user.email}!
      <form action="/auth/sign-out" method="post">
        <button className="py-2 px-4 rounded-md no-underline text-white bg-blue-500 hover:bg-blue-400">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <div className="flex items-center gap-4 pr-4">
      You haven't logged in yet!
      <Link
        href="/login"
      >
        <Button size='large' type='primary' className="ant-btn-primary px-4 ">
          Login
        </Button>
      </Link>
    </div>
  )
}
