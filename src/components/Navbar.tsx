import Link from "next/link";
import { buttonVariants } from "./ui/button";

export async function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href={"/"} className="flex gap-2 items-center">
          {/* <Icons.logo className="w-8 h-8 sm:h-6 sm:w-6" /> */}

          <div className="w-8 h-8 sm:h-6 sm:w-6 leading-8 sm:leading-6">
            <img src="logo.png" />
          </div>
          {/* <Image src={"/logo.png"} width={32} height={32} alt="logo" /> */}
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Blog
          </p>
        </Link>

        {/* Search Bar */}
        <Link href={"/sign-in"} className={buttonVariants()}>
          Sign In
        </Link>
      </div>
    </div>
  );
}
