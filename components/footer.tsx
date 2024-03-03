import { GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-8 max-w-7xl mx-auto w-full p-4 mt-4">
      <p className="text-sm font-medium sm:mx-auto">
        &copy; {new Date().getFullYear()} Pritchard Mambambo
      </p>
      <ul className="flex items-center justify-center gap-4 font-semibold text-lg">
        <li>
          <Link href="https://github.com/SirSanctified">
            <GithubIcon size={28} />
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/pritchard-mambambo">
            <LinkedinIcon size={28} />
          </Link>
        </li>

        <li>
          <Link href="https://twitter.com/Sir_sanctified">
            <Image
              src="/x.png"
              alt="Twitter/X Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
