import Image from "next/image";
import NextImage from "./NextImage";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
      <div
        className="
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-zinc-900
            bg-opacity-90"
      >
        <NextImage
          alt="logo"
          src="/images/logo.png"
          height={50}
          className="my-2"
        />
      </div>
      Navbar
    </nav>
  );
};

export default Navbar;
