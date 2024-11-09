import React from 'react'
import Button from './Button'
import Image from 'next/image'

const SideBySide = ({ img, heading, para, buttonText, divImg, divClass, textRight, imgUrl, imgUp }: any) => {
    return (
        <div className={`${img ? 'bg-[url("/banner-bg.png")] bg-cover bg-center w-full h-full' : null}`}>
            <div className='2xl:max-w-[80%] md:max-w-[94%] max-w-[96%] mx-auto'>
                <div className={`flex ${textRight ? null : 'md:flex-row-reverse'} items-center gap-24 md:gap-12 2xl:gap-40 md:flex-row ${imgUp ? 'flex-col-reverse' : 'flex-col'}`}>
                    <div className='text-center md:text-left md:w-1/2'>
                        <div>
                            <h2 className='text-6xl max-w-[96%] relative'>
                                {heading}
                            </h2>
                        </div>
                        <p className='text-lg mt-6'>{para}</p>
                        <Button buttonText={buttonText} moreClass='mt-10' />
                    </div>
                    {
                        divImg ? <div className={`bg-[#C4DEFD] ${divClass}`}></div> : <Image src={imgUrl} alt='img' width={583} height={542} />
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBySide