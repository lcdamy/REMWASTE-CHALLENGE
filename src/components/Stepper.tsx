import { useStepsStore } from '../store/useStepsStore'
import { steps } from '../lib/constants'
import type { stepI } from '../lib/constants'
import Step from './Step'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaLongArrowAltRight } from "react-icons/fa";

const Stepper = () => {
    const { currentStep, setCurrentStep } = useStepsStore()
    const handleSelectStep = (stepId: string) => {
        const selectedStep = steps.find((el) => el.id.toString() === stepId) as stepI
        setCurrentStep(selectedStep)
    }
    const handleDropDown = () => {
        const dropdown = document.getElementById('dropdown');
        if (dropdown) {
            dropdown.classList.toggle('hidden');
        }
    }
    return (
        <div className="relative">
            <ol className="relative hidden md:flex flex-col text-gray-500 dark:text-gray-400">
                {steps.map((el) => (
                    <Step key={el.id} step={el} isLast={steps.indexOf(el) == steps.length - 1} isPrevious={el.id < currentStep.id} setSelectedStep={setCurrentStep} isSelected={(currentStep.title == el.title)} />
                ))}
            </ol>

            <button id="dropdownDefaultButton" onClick={handleDropDown} data-dropdown-trigger="dropdown" className="md:hidden text-white bg-[#651FFF] hover:bg-[#651FFF]/70 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 w-full justify-between" type="button">
                <div>
                    <span> {currentStep.id}/6 </span> <span> Select skip </span>
                </div>
                <div>
                    <span> <TfiMenuAlt /></span>
                </div>
            </button>


            <div id="dropdown" className="z-10 divide-y md:hidden hidden divide-gray-100 rounded-lg shadow-sm w-44">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

                    {steps.map((el) => (
                        <li
                        onClick={() => handleSelectStep(el.id.toString())}
                        key={el.id}
                        className={`${currentStep.title == el.title ? 'bg-[#651FFF] text-white' : ''} hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white`}
                    >
                        <a href="#" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white flex gap-2 items-center">{el.id}/6 <FaLongArrowAltRight /> {el.title}</a>
                    </li>
                    ))}

                </ul>
            </div>


        </div>
    );

}
export default Stepper;