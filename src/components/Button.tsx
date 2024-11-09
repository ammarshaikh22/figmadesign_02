import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Button = ({ buttonText, moreClass }: { buttonText: string, moreClass?: string }) => {
    return (
        <div>
            <button className={`text-white bg-[#4F9CF9] py-2 px-6 rounded-lg ${moreClass}`}>{buttonText} <span><ArrowForwardIcon className='text-white text-sm' /></span></button>
        </div>
    )
}

export default Button