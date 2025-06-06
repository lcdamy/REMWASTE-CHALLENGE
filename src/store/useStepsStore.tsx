import { create } from "zustand";
import type { stepI } from '../lib/constants'
import { steps } from '../lib/constants'
interface IStepsStore {
    currentStep: stepI,
    setCurrentStep: (step: stepI) => void
}

export const useStepsStore = create<IStepsStore>((set) => ({
    currentStep: steps[2],
    setCurrentStep: (step: stepI) => set(() => ({
        currentStep: step
    }))
}));