import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Sidebar from "./Sidebar";

const Navbar = () => {
    // change to false
    const [isOut, setIsOut] = useState(false);

    const handleNav = () => {
        setIsOut(state => !state);
    }

  return (
    <div className="fixed w-full shadow-xl z-50">
        <div className="flex justify-between items-center w-full h-full px-5 md:px-10 xl:px-12 backdrop-blur">
            <Image
                src="/skills/nextjs.png"
                alt="/"
                width="90"
                height="60"
            />
            <div>
                <ul className="hidden md:flex gap-7 text-lg uppercase content-end h-8 mt-2">
                    <Link href="/">
                        <li className="hover:border-b hover:scale-110">Home</li>
                    </Link>
                    <Link href="/">
                        <li className="hover:border-b hover:scale-110">About</li>
                    </Link>
                    <Link href="/">
                        <li className="hover:border-b hover:scale-110">Skills</li>
                    </Link>
                    <Link href="/">
                        <li className="hover:border-b hover:scale-110">Projects</li>
                    </Link>
                </ul>
                </div>
                <CustomButton
                    isOut = {isOut}
                    setIsOut = {handleNav}
                />
            </div>
            
            <Sidebar
                isOut = {isOut}
                setIsOut = {handleNav}
            />

        </div>
    );
};

export default Navbar;
