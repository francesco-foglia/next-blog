import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-start items-center w-full bg-gray-300">
      <div className="container mx-auto flex justify-start items-center p-5">
        <Link href="/" className="text-lg font-semibold mr-5">Blog</Link>
        <Link href="/about" className="text-lg font-semibold">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
