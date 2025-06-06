import { useState } from 'react';
import { useStepsStore } from '../store/useStepsStore';
import { steps } from '../lib/constants';
import { TfiMenuAlt } from "react-icons/tfi";
import { FaLongArrowAltRight } from "react-icons/fa";

const MobileStepper = () => {
  const { currentStep, setCurrentStep } = useStepsStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectStep = (id: string) => {
    const selected = steps.find(s => s.id.toString() === id);
    if (selected) {
      setCurrentStep(selected);
      setIsOpen(false);
    }
  };

// Mobile Dropdown Toggle
return (
    <div className="md:hidden relative">
        <button
            onClick={toggleDropdown}
            className="md:hidden text-white bg-[#651FFF] hover:bg-[#651FFF]/70 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 w-full justify-between"
            type="button"
        >
            <span>{currentStep.id}/6</span>
            <div><span>Select step</span></div>
            <div><TfiMenuAlt /></div>
        </button>

        {/* Mobile Dropdown Menu */}
        <div
            className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-500 rounded-lg shadow-md transition-all duration-300 transform z-10
                ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
            `}
        >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 p-2">
                {steps.map((el) => (
                    <li
                        key={el.id}
                        onClick={() => handleSelectStep(el.id.toString())}
                        className={`${currentStep.title === el.title ? 'bg-[#651FFF] text-white' : ''} hover:bg-gray-100 dark:hover:bg-gray-500 border-b dark:border-y-white/70 dark:hover:text-white cursor-pointer`}
                    >
                        <div className="px-4 py-2 flex gap-2 items-center">
                            {el.id}/6 <FaLongArrowAltRight /> {el.title}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
};

export default MobileStepper;
