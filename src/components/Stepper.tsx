import { useStepsStore } from '../store/useStepsStore'
import { steps } from '../lib/constants'
import type { stepI } from '../lib/constants'
import Step from './Step'

const Stepper = () => {
    const { currentStep, setCurrentStep } = useStepsStore()
    const handleSelectStep = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const stepId = e.target.value;
        const selectedStep = steps.find((el) => el.id.toString() === stepId) as stepI
        setCurrentStep(selectedStep)
    }
    return (
        <div className="relative">
            <ol className="relative hidden md:flex flex-col text-gray-500  dark:text-gray-400">
                {steps.map((el) => (
                    <Step key={el.id} step={el} isLast={steps.indexOf(el) == steps.length - 1} isPrevious={el.id < currentStep.id} setSelectedStep={setCurrentStep} isSelected={(currentStep.title == el.title)} />
                ))}
            </ol>
            <select onChange={handleSelectStep} className='p-2 rounded-[6px] w-full' >
                {steps.map((el) =>
                    <option className='block' value={el.id} selected={el.id == currentStep.id} >
                        {el.title}
                    </option>)}
            </select>
        </div>
    );

}
export default Stepper;