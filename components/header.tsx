import Profile from "@/lib/current-profile";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Header() {
  const userId = Profile();

  return (
    <header className="h-full bg-zinc-800 py-4">
      <div className="flex items-center justify-between mx-auto max-w-[1000px]">
        {/* <div className="cursor-pointer">LOGO</div> */}
        <Image src="/cglogo.jpg" height={70} width={70} alt="Image" />

        <div className="text-3xl">CodeGenie</div>
        <div className="flex items-center gap-4">
          {userId ? (
            <div className="  px-4  hover:text-black rounded-lg py-2 cursor-pointer">
              <UserButton />
            </div>
          ) : (
            <div className="bg-zinc-900 hover:bg-white px-4  hover:text-black rounded-lg py-2 cursor-pointer">
              Login
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
