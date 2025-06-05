import { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme === "dark" : true; // default to dark
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className="flex justify-center md:justify-end mt-[15px]">
            <button
                onClick={toggleTheme}
                className={`border px-4 py-2 mt-2 rounded-md flex items-center gap-2
                    ${isDarkMode ? "border-yellow-400 text-yellow-400 bg-gray-800" : "border-gray-800 text-gray-800 bg-yellow-100"}
                    dark:border-yellow-400 dark:text-yellow-400 dark:bg-gray-800
                `}
            >
                {isDarkMode ? <CiSun /> : <CiDark />}
                {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            </button>
        </div>
    );
};

export default Header;
