import type {stepI} from '../lib/constants'
import { FaCheck } from "react-icons/fa6";
interface props {
    step:stepI,
    isSelected:boolean,
    isPrevious:boolean,
    isLast:boolean,
    setSelectedStep:(step:stepI)=>void

}
function Step({step,isSelected,isPrevious,setSelectedStep,isLast}:props) {

  return (
    <li className={`${isSelected ?' bg-[#651FFF]' : ' '} p-[12px] flex flex-col gap-4  rounded-[12px] mb-10  cursor-pointer relative`} onClick={()=>setSelectedStep(step)}>
     {!isLast && (
    <div className={`flex-1 h-[200%] w-[1.4px] absolute start-6 top-4 -z-10 border-[1.2px] ${ isSelected || isPrevious ? " border-[#651FFF] "  :  " dark:bg-gray-900 bg-gray-200"}`}/>
     )} 
    <div className='flex items-center gap-4'>
                    <span className={`flex items-center justify-center  text-sm w-8 h-8 bg-gray-200 rounded-full  ${isSelected || isPrevious ? 'dark:bg-[#651FFF] ' :' dark:bg-[#79869A] text-white' } `}>
                        { (isPrevious || isSelected) ? 
                        (<FaCheck className='w-3.5 h-3.5 text-gray-500 dark:text-gray-400' />) : 
                        step.id 
                        }
                    </span>
                    <div>
                    <h3 className={`font-medium leading-tight  ${isPrevious|| isSelected ? 'text-white' : ''  } ${isSelected ? 'font-semibold' : '' }`}>{step.title}</h3>
                    <p className="text-sm">{step.description}</p>
                    </div>
    </div>
                    
        </li>
  )
}

export default Step