import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import paths from '../paths';
import MenuButton from "./MenuButton";
import DarkThemeButton from "./DarkThemeButton";

export type propsType = {
    isOut: boolean,
    setIsOut: Dispatch<SetStateAction<boolean>>,
}

const Navbar = () => {
    // change to false
    const [isOut, setIsOut] = useState(false);
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleShadow = () => {
            // if (window.scrollY >= 1) {
            if (element.scrollTop >= 1) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        const element = document.getElementById("main-wrapper") as HTMLDivElement;
        element.addEventListener('scroll', handleShadow);
        // window.addEventListener('scroll', handleShadow);

        window.addEventListener('resize', () => {
            if (self.innerWidth > 768) setIsOut(false);
        });
    }, []);

    const propPack: propsType = {
        isOut: isOut,
        setIsOut: setIsOut,
    }

    // //* custom hook to track window width (instead resolved with event listener directly)
    // function useWindowSize() {
    //     const [size, setSize] = useState([0]);
    //     useEffect(() => {
    //         function updateSize() {
    //             setSize([window.innerWidth]);
    //         }
    //         window.addEventListener('resize', updateSize);
    //         updateSize();
    //         return () => window.removeEventListener('resize', updateSize);
    //     }, []);
    //     return size;
    // }

    // // * initialize width
    // const [width] = useWindowSize();

    // // * close sidebar if too wide
    // useEffect(() => {
    //     if (width > 768 && isOut) setIsOut(false);
    // }, [width]);


    return (
        <div className={`fixed z-10 h-24 w-[calc(100%-0.9rem)] transition-shadow duration-300
        ${shadow ? 'shadow-xl backdrop-blur dark:shadow-black/70 dark:shadow-dark-navbar' : ''}
        `}>
            <ul className="justify-end w-full h-full px-5 gap-7 text-lg uppercase md:px-10 xl:px-12 md:flex pt-8 hidden">
                <Link href={paths.about}>
                    <li className="hover:border-b hover:scale-110">About</li>
                </Link>
                <Link href={paths.skills}>
                    <li className="hover:border-b hover:scale-110">Skills</li>
                </Link>
                <Link href={paths.projects}>
                    <li className="hover:border-b hover:scale-110">Projects</li>
                </Link>
                <Link href={paths.contact}>
                    <li className="hover:border-b hover:scale-110">Contact</li>
                </Link>
            </ul>
                
            <Sidebar {...propPack} />

            <MenuButton {...propPack} />

            <DarkThemeButton />

        </div>
    );
};

export default Navbar;
