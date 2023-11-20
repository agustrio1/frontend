import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DropDown from "./DropDown";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md flex p-4 justify-between items-center">
      <h1 className="font-semibold text2xl text-black">Apps</h1>
      <div className="md:hidden z-10">
        <button onClick={toggleMenu}>
          {menuOpen ?<FaTimes size={24} color="black" /> : <FaBars size={24} color="black" />}
          
        </button>
        {menuOpen && (
          <div
            className={`md:hidden w-48 bg-white shadow-lg h-800 fixed top-12 right-0 rounded-bl transition-transform transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            <Link href={"/products/"} className="flex mx-auto p-2 text-black">
              Produk
            </Link>
            <Link href={"/cart/"} className="flex mx-auto p-2 text-black">
              Keranjang
            </Link>
            <DropDown/>
          </div>
        )}
      </div>
      <div className="hidden lg:flex flex-row items-center">
        <Link href={"/products/"} className="flex mx-auto p-2 text-black">
          Produk
        </Link>
        <Link href={"/cart/"} className="flex mx-auto p-2 text-black">
          Keranjang
        </Link>
        <DropDown/>
      </div>
    </nav>
  );
}

export default Navbar;
