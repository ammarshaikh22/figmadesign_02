import Link from 'next/link'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
const Plane = ({ title, price, bg, para, points, boxSize, buttonColor }: any) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
                className={`relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke px-8 py-10 ${boxSize} shadow-pricing sm:p-12 lg:px-6 dark:border-dark-3 dark:bg-dark-2 ${bg}`}
            >
                <span className="mb-3 block text-lg font-semibold text-primary">
                    {title}
                </span>
                <h2 className="mb-5 text-[42px] font-bold">
                    <span>{'$' + price}</span>
                </h2>
                <p
                    className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6"
                >
                    {para}
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">
                    {
                        points.map((item: any, index: any) => {
                            return (
                                <div key={index} className='flex gap-4 items-center'>
                                    <CheckIcon className="text-primary" />
                                    <p className="text-base text-body-color dark:text-dark-6">{item}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <Link
                    href="/"
                    className={`ml-6 border-black rounded-md border border-stroke p-3 text-center text-base ${buttonColor}`}
                >
                    Choose Personal
                </Link>
            </div>
        </div>
    )
}

export default Plane