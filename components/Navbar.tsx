import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "./CustomButton";
import Sidebar from "./Sidebar";

const Navbar = () => {
    // change to false
    const [isOut, setIsOut] = useState(false);

    const handleNav = () => {
        setIsOut(state => !state);
    }

    return (
        <div className="fixed w-full shadow-xl z-40">
            <div className={`flex justify-end w-full h-full px-5 md:px-10 xl:px-12 duration-500
            ${isOut ? `` : `backdrop-blur`}
            `}>
                <div className="my-7">
                    <ul className="hidden md:flex gap-7 text-lg uppercase content-end h-8 mt-2">
                        <Link href="/">
                            <li className="hover:border-b hover:scale-110">About</li>
                        </Link>
                        <Link href="/">
                            <li className="hover:border-b hover:scale-110">Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="hover:border-b hover:scale-110">Contact</li>
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
