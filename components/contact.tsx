import DottedUnderline from "./dottedUnderline";
import Link from "next/link";
import { Mail, PhoneCall } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const Contact = () => {
  return (
    <section id="contact" className="w-full my-8 mb-16">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">
        Get in touch
      </h2>
      <DottedUnderline direction="horizontal" />
      <p className="text-gray-400 text-center text-md mt-6 mb-4 max-w-[60ch] lg:max-w-4xl mx-auto">
        Have a question or want to work together? Feel free to reach out to me.
      </p>
      <div className="flex justify-center items-center flex-wrap gap-4">
        <Link
          href="mailto:mambambopritchard@gmail.com"
          passHref
          className="flex items-center gap-3"
        >
          <Mail size={24} />
          mambambopritchard@gmail.com
        </Link>
        <Link
          href="tel:263784433740"
          passHref
          className="flex items-center gap-3"
        >
          <PhoneCall size={24} />
          +263 78 443 3740
        </Link>
        <Link
          href="https://wa.me/263784433740"
          passHref
          className="flex items-center gap-3"
        >
          <IconBrandWhatsapp size={24} />
          +263 78 443 3740
        </Link>
      </div>
    </section>
  );
};

export default Contact;
