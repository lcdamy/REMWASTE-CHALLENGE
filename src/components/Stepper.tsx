import { useState } from 'react';
import { useStepsStore } from '../store/useStepsStore';
import { steps } from '../lib/constants';
import type { stepI } from '../lib/constants';
import Step from './Step';
import { TfiMenuAlt } from "react-icons/tfi";
import { FaLongArrowAltRight } from "react-icons/fa";

const Stepper = () => {
    const { currentStep, setCurrentStep } = useStepsStore();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelectStep = (stepId: string) => {
        const selectedStep = steps.find((el) => el.id.toString() === stepId) as stepI;
        setCurrentStep(selectedStep);
        setIsDropdownOpen(false); // Close menu after selection
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            {/* Desktop Stepper */}
            <ol className="relative hidden md:flex flex-col text-gray-500 dark:text-gray-400">
                {steps.map((el) => (
                    <Step
                        key={el.id}
                        step={el}
                        isLast={steps.indexOf(el) === steps.length - 1}
                        isPrevious={el.id < currentStep.id}
                        setSelectedStep={setCurrentStep}
                        isSelected={currentStep.title === el.title}
                    />
                ))}
            </ol>

            {/* Mobile Dropdown Toggle */}
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
                    ${isDropdownOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
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

export default Stepper;
