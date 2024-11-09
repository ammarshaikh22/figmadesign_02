import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Footer = () => {
    return (
        <footer className='relative md:py-16 p-8 bg-[#043873]'>
            <div className='2xl:max-w-[80%] md:max-w-[94%] max-w-[96%] mx-auto'>
                <div className='flex gap-10 items-center text-center md:text-start text-white md:flex-row flex-col '>
                    <div className='md:w-[20%] flex justify-center flex-col items-center md:items-start'>
                        <Image src='/logo.png' alt='logo' width={100} height={100} />
                        <p className='mt-6'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    <div className='md:w-[20%]'>
                        <ul className='flex flex-col gap-6'>
                            <h3 className='text-2xl font-semibold'>Product</h3>
                            <li>
                                <Link href='/'>Overview</Link>
                            </li>
                            <li>
                                <Link href='/'>Pricing</Link>
                            </li>
                            <li>
                                <Link href='/'>Customer stories</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-[20%]'>
                        <ul className='flex flex-col gap-6'>
                            <h3 className='text-2xl font-semibold'>Product</h3>
                            <li>
                                <Link href='/'>Overview</Link>
                            </li>
                            <li>
                                <Link href='/'>Pricing</Link>
                            </li>
                            <li>
                                <Link href='/'>Customer stories</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-[20%]'>
                        <ul className='flex flex-col gap-6'>
                            <h3 className='text-2xl font-semibold'>Product</h3>
                            <li>
                                <Link href='/'>Overview</Link>
                            </li>
                            <li>
                                <Link href='/'>Pricing</Link>
                            </li>
                            <li>
                                <Link href='/'>Customer stories</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-[20%]'>
                        <h6>Try It Today</h6>
                        <p className='my-6'>Get started for free.Add your whole team as your needs grow.</p>
                        <Button buttonText='Start today' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer