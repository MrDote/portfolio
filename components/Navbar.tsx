import Image from "next/image";
import Link from "next/link";
// Install react icons (https://react-icons.github.io/react-icons)
// import { HiOutlineMenuAlt1 } from 'react-icons/hi';
// Install react snippets (https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
// rafce
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Sidebar from "./Sidebar";

const Navbar = () => {

  const [isOut, setIsOut] = useState(false);

  const setIsVis = () => {
    setIsOut(state => !state);
  }

  return (
    <div className="fixed w-full shadow-xl z-50">
      <div className="flex justify-between items-center w-full h-full px-5 md:px-10 xl:px-12">
        <Image
          src="/../public/skills/nextjs.png"
          alt="/"
          width="90"
          height="60"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:border-b">Projects</li>
            </Link>
          </ul>
        </div>
        {/* <div className="md:hidden px-3 m-2">
          <HiOutlineMenuAlt1 size={30} />
        </div> */}
        <CustomButton
          isOut = {isOut}
          setIsOut = {setIsVis}
        />
      </div>
      
      <Sidebar
        isOut = {isOut}
        setIsOut = {setIsVis}
      />

    </div>
  );
};

export default Navbar;
