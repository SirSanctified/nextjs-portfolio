import { cn } from "@/lib/utils";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-auto max-w-7xl px-4 py-2 w-full bg-transperant">
      <nav className="hidden md:flex items-center justify-between gap-8">
        <Link href="/">
          <Image
            src="/logo-white.svg"
            alt="Pritchard Mambambo"
            width={200}
            height={100}
            priority
            className="object-cover"
          />
        </Link>
        <ul className="flex items-center justify-end gap-8 font-semibold text-lg">
          <li className={cn("hover:text-blue-500")}>
            <Link href="/">Home</Link>
          </li>
          <li className={cn("hover:text-blue-500")}>
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 ease-linear rounded-full ">
            <Link
              href="/#contact"
              className="px-4 py-2 flex gap-2 items-center justify-center w-full"
            >
              Contact <ArrowRight />{" "}
            </Link>
          </li>
        </ul>
      </nav>
      {/* Mobile */}
      <nav className="flex md:hidden items-center justify-between gap-8">
        <Link href="/">
          <Image
            src="/logo-white.svg"
            alt="Pritchard Mambambo"
            width={200}
            height={100}
            priority
            className="object-cover"
          />
        </Link>
        <Sheet>
          <SheetTrigger
            className="flex items-center justify-end gap-8 font-semibold text-lg"
            asChild
          >
            <Menu size={32} />
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-r from-primary to-purple-950">
            <>
              <SheetHeader className="my-4">
                <SheetClose asChild>
                  <Link href="/">
                    <Image
                      src="/logo.svg"
                      alt="Pritchard Mambambo"
                      width={200}
                      height={200}
                      priority
                      className="object-cover bg-white rounded-full p-2 border-2 border-white"
                    />
                  </Link>
                </SheetClose>
              </SheetHeader>
              <ul className="flex flex-col items-start mt-8 justify-start gap-8 font-semibold text-lg">
                <li className={cn("hover:text-blue-500")}>
                  <SheetClose asChild>
                    <Link href="/">Home</Link>
                  </SheetClose>
                </li>
                <li className={cn("hover:text-blue-500")}>
                  <SheetClose asChild>
                    <Link href="/#projects">Projects</Link>
                  </SheetClose>
                </li>
                <li className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 ease-linear rounded-full ">
                  <SheetClose asChild>
                    <Link
                      href="/#contact"
                      className="px-4 py-2 flex gap-2 items-center justify-center w-full"
                    >
                      Contact <ArrowRight />{" "}
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
