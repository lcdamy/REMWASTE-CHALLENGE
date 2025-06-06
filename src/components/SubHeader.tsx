import { FaExclamationTriangle } from "react-icons/fa";

const SubHeader = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="font-[600] text-[24px] mb-2 text-gray-900 dark:text-white">
          Choose your skip size
        </h1>
        <h1 className="text-[14px] text-gray-600 dark:text-white/70">
          Select the skip size that best suit your needs
        </h1>
      </div>
      <div className="dark:bg-[#0F053C] bg-white dark:text-white text-[14px] border dark:border-[#FFFCF5] border-gray-400 font-[400] flex justify-center items-center gap-2 mt-4 p-3 rounded-lg">
        <div> <FaExclamationTriangle /> </div>
        <div>  Imagery and information shown throughout this website may not reflect the exact shape or size specification.colooues may vary options and or accessories may be featured at additional cost. Please refer to the skip size guide for more information.
        </div>
      </div>
    </>
  );
}
export default SubHeader;