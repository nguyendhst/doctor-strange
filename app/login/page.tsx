import Link from "next/link";
import Messages from "./messages";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center w-full px-8 sm:max-w-md gap-2 bg-white mt-8 rounded-lg">
      <form
        className="flex flex-col w-full mt-4 justify-center gap-4 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <div className="flex flex-col mb-8">
          <span className="text-xl text-blue-500 font-bold">Welcome back</span>
          <p className="text-sm text-neutral-400">
            Enter username & password to login
          </p>
        </div>

        <div className="flex-1 flex flex-col w-full justify-center gap-1 text-foreground">
          <label className="text-md text-black" htmlFor="email">
            Email
          </label>
          <input
		    id="email"
            className="border-b-2 outline-0"
			type="email"
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
		    id="password"
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
          // formAction="/auth/sign-up"
          className="border-none px-4 text-lg text-foreground mb-4 text-neutral-800"
        >
          <Link href="/signup">Sign Up</Link>
        </button>
        <Messages />
      </form>
    </div>
  );
}
