import Image from 'next/image'
import React from 'react'

const LastFooter = () => {
    return (
        <section className='bg-[#043873] py-4'>
            <div className='2xl:max-w-[80%] md:max-w-[90%] max-w-[96%] mx-auto'>
                <div className='flex justify-between items-center md:flex-row flex-col gap-10 md:gap-0'>
                    <div className='text-white'>
                        <ul className='flex md:gap-10 gap-6 items-center md:flex-row flex-col'>
                            <li>English</li>
                            <li>Terms & privacy</li>
                            <li>Security</li>
                            <li>Status</li>
                            <li>©2021 Whitepace LLC.</li>
                        </ul>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <Image src='/Facebook.png' alt='logo' width={9} height={10} />
                        <Image src='/Twitter.png' alt='logo' width={9} height={10} />
                        <Image src='/Linkedin.png' alt='logo' width={9} height={10} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastFooter