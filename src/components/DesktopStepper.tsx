import { useStepsStore } from '../store/useStepsStore';
import { steps } from '../lib/constants';
import Step from './Step';

const DesktopStepper = () => {
  const { currentStep, setCurrentStep } = useStepsStore();

  return (
    <ol className="hidden md:flex flex-col text-gray-500 dark:text-gray-400">
      {steps.map((el, index) => (
        <Step
          key={el.id}
          step={el}
          isLast={index === steps.length - 1}
          isPrevious={el.id < currentStep.id}
          setSelectedStep={setCurrentStep}
          isSelected={currentStep.title === el.title}
        />
      ))}
    </ol>
  );
};

export default DesktopStepper;
