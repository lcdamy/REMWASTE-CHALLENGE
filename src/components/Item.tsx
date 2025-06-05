import { FaCheck } from "react-icons/fa";
import type { ISkip } from './../lib/constants'
import { motion } from 'framer-motion'

interface props {
    skip: ISkip,
    selectedSkip: number | null,
    handleSkipSelect: (skip: ISkip) => void
}

function Item({ skip, selectedSkip, handleSkipSelect }: props) {
    return (
        <div
            key={skip.id}
            className={`
                relative md:w-full rounded-lg p-4
                bg-white/80 hover:bg-blue-50
                border border-transparent
                hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200
                dark:bg-black/40 dark:hover:bg-[#13084ACC]/80
                dark:hover:border-[#2196F3] dark:hover:border-[1.6px]
                dark:hover:shadow-2xl dark:hover:shadow-[#2196F3]
                ${selectedSkip === skip.id
                    ? 'shadow-2xl border-blue-400 border-[1.6px] shadow-blue-200 dark:border-[#2196F3] dark:shadow-[#2196F3]'
                    : ''
                }
            `}
        >
            <a href="#">
                <img
                    className={`rounded-xl ${selectedSkip === skip.id ? '' : 'mt-[-3rem]'}`}
                    src={skip.image_url}
                    alt={skip.name || 'Skip image'}
                />
            </a>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[22px] leading-[100%] mt-4 text-gray-900 dark:text-white">
                    {skip.size} yard Skip
                </h1>
                <h1 className="font-bold text-[18px] mt-2 text-blue-500 dark:text-[#00E5FF]">
                    £{skip.price_before_vat}
                </h1>
                <p className="font-[400] text-gray-400 dark:text-white/40 text-[14px] mt-4">
                    {skip.hire_period_days} days hire period
                </p>
                {selectedSkip !== skip.id && (
                    <motion.button
                        className="w-full mt-4 px-6 py-2 mb-4 rounded-full text-blue-400 border border-blue-400 dark:text-[#84FFFF] dark:border-[#84FFFF]"
                        initial={{ opacity: 1, y: -10 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                        onClick={() => handleSkipSelect(skip)}
                    >
                        SELECT
                    </motion.button>
                )}
            </div>
            {selectedSkip === skip.id && (
                <motion.div
                    onClick={() => handleSkipSelect(skip)}
                    initial={{ top: '50%', height: '2rem', borderRadius:'100%' }}
                    transition={{ delay: 0.2, stiffness: 100, damping: 10, duration: 0.5, type: 'spring' }}
                    animate={{ height: '8rem', borderRadius:'100%' }}
                    className="
                        w-32 h-32 border-2 flex-col flex items-center hover:cursor-pointer justify-center
                        text-blue-400 border-blue-400 bg-blue-50
                        dark:text-[#84FFFF] dark:border-[#84FFFF] dark:bg-[#13084ACC]/80
                        rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-28
                    "
                >
                    <h1 className="font-[400]"><FaCheck /></h1>
                    <h1>SELECTED</h1>
                </motion.div>
            )}
        </div>
    )
}

export default Item