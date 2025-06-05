import Yard from '../assets/4-yarder-skip.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";
import type { ISkip, stepI } from '../lib/constants';
import { steps } from '../lib/constants';
import { useStepsStore } from '../store/useStepsStore';

type ContinueProps = {
  skip: ISkip;
};

const Continue = ({ skip }: ContinueProps) => {

  const { currentStep, setCurrentStep } = useStepsStore();

  const handleMoveBack = () => {
    setCurrentStep(steps[1])
  }
  const handleMoveNext = () => {
    setCurrentStep(steps[3])
  }

  return (
    <div className="flex flex-col items-center bg-black p-2 rounded-lg w-full md:flex-row md:justify-between">
      <div className="flex flex-col items-center gap-2 md:flex-row md:items-start md:mr-auto">
        <img
          src={skip.image_url || Yard}
          alt="Skip icon"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-center md:text-left">
          <h2 className="text-white font-semibold text-[22px]">{skip.name || `${skip.size} yard skip`}</h2>
          <p className="text-[#00E5FF] text-[18px] font-semibold">£{skip.price_before_vat}</p>
          <p className="text-white/70 text-[14px] font-normal">{skip.hire_period_days} days hire period</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-8 md:flex-row">
        <button
          className="bg-[#651FFF] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 flex items-center gap-2 transition-transform duration-200 active:scale-95"
          onClick={handleMoveBack}
        >
          BACK
        </button>
        <button
          className="bg-[#84FFFF] text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 flex items-center gap-2 transition-transform duration-200 active:scale-95"
          onClick={handleMoveNext}
        >
          CONTINUE
          <span aria-hidden="true"><FaLongArrowAltRight /></span>
        </button>
      </div>
    </div>
  );
}
export default Continue;