import Link from "next/link";
import Messages from "../login/messages";

export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center w-full px-8 sm:max-w-md gap-2 bg-white mt-8 rounded-lg">
      <form
        className="flex flex-col w-full mt-4 justify-center gap-4 text-foreground"
        action="/auth/sign-up"
        method="post"
      >
        <div className="flex flex-col mb-8">
          <span className="text-xl text-blue-500 font-bold">Hi there</span>
          <p className="text-sm text-neutral-600">
            This is the first time you get into our service
          </p>
          <p className="text-sm text-neutral-400">
            Create account by entering username & password
          </p>
        </div>

        <div className="flex-1 flex flex-col w-full justify-center gap-1 text-foreground">
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

        <div className="flex-1 flex flex-col w-full justify-center gap-1 text-foreground">
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
        <div className="flex-1 flex flex-col w-full justify-center gap-1 text-foreground">
          <label className="text-md text-black" htmlFor="password">
            Confirm Password
          </label>
          <input
            className="border-b-2 outline-0"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          formAction="/auth/sign-up"
          className="bg-blue-500 text-white rounded-md px-4 py-2 text-foreground text-lg font-bold"
        >
          Sign Up
        </button>
        <button className="border-none px-4 text-foreground text-lg mb-4 text-neutral-800">
          <Link href="/login">Sign In</Link>
        </button>
        <Messages />
      </form>
    </div>
  );
}
