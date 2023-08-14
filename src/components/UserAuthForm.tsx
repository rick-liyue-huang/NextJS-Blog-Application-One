"use client";

import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { Icons } from "./Icons";
import { useToast } from "@/components/ui/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserAuthForm({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    console.log("login with google");
    setIsLoading(true);
    try {
      // throw new Error();
      await signIn("google");
    } catch (err) {
      // toast notification
      toast({
        title: "Here has a problem when sign in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={cn("flex justify-center")} {...props}>
      <Button size="sm" className="w-full" onClick={loginWithGoogle}>
        {isLoading ? null : <Icons.google className="w-4 h-4 mr-2" />}
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      </Button>
    </div>
  );
}
