import { navLinks } from "@/constants";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="py-4 px-8 absolute z-10 w-full max-sm:p-2">
      <nav className="flex justify-between items-center ">
        <Link href="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/580/623/non_2x/movie-media-letter-logo-design-illustration-free-vector.jpg"
            alt="Logo"
            width={130}
            height={29}
          />
        </Link>
        <ul className=" flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <liv key={item.label}>
              <Link className="text-lg text-white" href={item.href}>{item.label}</Link>
            </liv>
          ))}
        </ul>
        <div className="cursor-pointer fill-indigo-500 hidden max-lg:block">
            <IoMenu size={38} color="white"/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
