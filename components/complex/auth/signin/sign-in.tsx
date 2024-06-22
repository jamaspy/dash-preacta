import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WandSparkles } from "lucide-react";

export function SignInForm() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
    >
      <Input type="email" name="email" placeholder="Email" />
      <p className="text-xs text-slate-600 mb-4 mt-1 pl-1">
        Everyone hates passwords, so enter your email below and we&rsquo;ll send
        you a link.
      </p>
      <Button type="submit" className="mb-4 disabled:cursor-not-allowed">
        Signin with Resend <WandSparkles className="ml-1 w-[1rem] h-[1rem]" />
      </Button>
    </form>
  );
}
