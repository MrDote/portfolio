import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoon, BsSunFill } from "react-icons/bs";

const DarkThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, []);

    if (!mounted) return <></>;

    return (
        <button
        onClick={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
        className="absolute z-20 right-32 top-7
        md:left-10 md:right-auto
        ">
            {resolvedTheme === "dark" ? <BsSunFill size="48" /> : <BsMoon size="48" />}
        </button>
    );
}

export default DarkThemeButton