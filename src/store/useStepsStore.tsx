import { create } from "zustand";
import type { StepType } from '../lib/types'
import { steps } from '../lib/constants'
interface IStepsStore {
    currentStep: StepType,
    setCurrentStep: (step: StepType) => void
}

export const useStepsStore = create<IStepsStore>((set) => ({
    currentStep: steps[2],
    setCurrentStep: (step: StepType) => set(() => ({
        currentStep: step
    }))
}));