import type { StepType } from '../lib/types'
import { FaCheck } from "react-icons/fa6";
interface props {
  step: StepType,
  isSelected: boolean,
  isPrevious: boolean,
  isLast: boolean,
  setSelectedStep: (step: StepType) => void
}

function Step({ step, isSelected, isPrevious, setSelectedStep, isLast }: props) {
  return (
    <li
      className={`
        ${isSelected ? 'bg-[#651FFF] text-white' : 'bg-white text-gray-900 dark:bg-gray-800 dark:text-white'}
        p-[12px] flex flex-col gap-4 rounded-[12px] mb-10 cursor-pointer relative
        transition-colors duration-200
      `}
      onClick={() => setSelectedStep(step)}
    >
      {!isLast && (
        <div
          className={`
            flex-1 h-[200%] w-[1.4px] absolute start-6 top-4 -z-10 border-[1.2px]
            ${isSelected || isPrevious ? "border-[#651FFF]" : "border-gray-200 dark:border-gray-700"}
          `}
        />
      )}
      <div className='flex items-center gap-4'>
        <span
          className={`
        flex items-center justify-center text-sm w-8 h-8 rounded-full
        aspect-square
        ${isSelected || isPrevious
              ? 'bg-[#651FFF] text-white'
              : 'bg-gray-200 text-gray-900 dark:bg-[#79869A] dark:text-white'}
        transition-colors duration-200
          `}
          style={{ minWidth: '2rem', minHeight: '2rem' }}
        >
          {(isPrevious || isSelected)
            ? (<FaCheck className='w-3.5 h-3.5 text-white' />)
            : step.id
          }
        </span>
        <div>
          <h3 className={`
        font-[600] leading-tight
        ${isSelected ? 'font-semibold' : ''}
          `}>
            {step.title}
          </h3>
          <p className="text-sm">{step.description}</p>
        </div>
      </div>
    </li>
  )
}

export default Step