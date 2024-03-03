import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return <header className="fixed top-0 left-auto max-w-7xl px-4 py-2 w-full bg-transperant">
    <nav className="flex items-center justify-between gap-8">
      <Link href="/"><Image
        src="/logo.svg"
        alt="Pritchard Mambambo"
        width={200}
        height={100}
        className="object-cover"
        />
        </Link>
        <ul className="flex items-center justify-end gap-8 font-semibold text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>
  </header>;
};

export default Navbar;
