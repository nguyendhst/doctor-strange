import Link from 'next/link'
import Messages from './messages'

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center w-full px-8 sm:max-w-md gap-2 bg-white mt-8 rounded-lg">
      {/* <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link> */}

      <form
        className="flex flex-col w-full mt-4 justify-center gap-4 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <div className='flex flex-col mb-8'>
        <span className='text-xl text-blue-500 font-bold'>Welcome back</span>
        <p className='text-sm text-neutral-400'>Enter username & password to login</p>
        </div>
        
        <div className='flex-1 flex flex-col w-full justify-center gap-1 text-foreground'>
          <label className="text-md text-black" htmlFor="email">
            Email
          </label>
          <input
            className="border-b-2 outline-0"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className='flex-1 flex flex-col w-full justify-center gap-1 text-foreground'>
          <label className="text-md text-black" htmlFor="password">
            Password
          </label>
          <input
            className="border-b-2 outline-0"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
        </div>
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 text-foreground text-lg font-bold">
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className="border-none px-4 text-foreground mb-4 text-neutral-600"
        >
          Sign Up
        </button>
        <Messages />
      </form>
    </div>
  )
}