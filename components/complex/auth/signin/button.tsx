import { signIn } from "@/auth";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button
        className="text-slate-300 hover:text-cyan-500 font-thin tracking-wider"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}
