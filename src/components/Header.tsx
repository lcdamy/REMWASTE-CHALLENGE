import { CiSun } from "react-icons/ci";

const Header = () => {
    return (
        <div className="flex justify-center md:justify-end mt-[15px] ">
            <h1 className="border border-white px-4 py-2 mt-2 dark:text-white rounded-md flex items-center gap-2">
                <CiSun /> Switch to light mode
            </h1>
        </div>
    );
}
export default Header;