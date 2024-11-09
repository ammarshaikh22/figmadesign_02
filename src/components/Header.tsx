/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from './Button';
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className='relative py-4 bg-[#043873] z-30'>
            <div className='2xl:max-w-[80%] md:max-w-[94%] max-w-[96%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image src='/logo.png' alt='logo' width={100} height={100} />
                    </div>
                    <div className='flex items-center lg:gap-16 md:gap-10'>
                        <div className='lg:block hidden'>
                            <ul className='flex justify-between items-center gap-8 text-white text-lg'>
                                <li className='flex justify-between items-center gap-2'>
                                    <Link href='/'>Products</Link>
                                    <Image src='/Vector.png' alt='arrow' width={10} height={5} />
                                </li>
                                <li className='flex justify-between items-center gap-2'>
                                    <Link href='/'>Solutions</Link>
                                    <Image src='/Vector.png' alt='arrow' width={10} height={5} />
                                </li>
                                <li className='flex justify-between items-center gap-2'>
                                    <Link href='/'>Resources</Link>
                                    <Image src='/Vector.png' alt='arrow' width={10} height={5} />
                                </li>
                                <li className='flex justify-between items-center gap-2'>
                                    <Link href='/'>Pricing</Link>
                                    <Image src='/Vector.png' alt='arrow' width={10} height={5} />
                                </li>
                            </ul>
                        </div>
                        <div className='md:flex gap-4 items-center hidden'>
                            <button className='bg-[#FFE492] py-2 px-6 rounded-lg'>Login</button>
                            <Button buttonText='Try Whitepace free' />
                        </div>
                        <div className='lg:hidden block z-10'>
                            {
                                open ?
                                    <CloseIcon className='text-white text-3xl' onClick={() => setOpen(!open)} /> :
                                    <MenuIcon className='text-white text-3xl' onClick={() => setOpen(!open)} />
                            }
                        </div>

                        <div className={`lg:hidden absolute top-0 right-0 h-screen w-full bg-[#043873] transition-all duration-500 ${open ? '-translate-y-0' : '-translate-y-full'}`}>
                            {
                                open ?
                                    <div className='flex flex-col items-center h-full justify-center gap-16'>
                                        <div>
                                            <ul className='flex justify-center flex-col items-center gap-20 text-white text-lg'>
                                                <li className='flex justify-between items-center gap-2'>
                                                    <Link href='/'>Products</Link>
                                                    <Image src='/Vector.png' alt='arrow' width={10} height={5} />
                                                </li>
                                                <li className='flex justify-between items-center gap-2'>
                                                    <Link href='/'>Solutions</Link>
                                                    <Image src='/Vector.png' alt='arrow' width={10} height={5} />
                                                </li>
                                                <li className='flex justify-between items-center gap-2'>
                                                    <Link href='/'>Resources</Link>
                                                    <Image src='/Vector.png' alt='arrow' width={10} height={5} />
                                                </li>
                                                <li className='flex justify-between items-center gap-2'>
                                                    <Link href='/'>Pricing</Link>
                                                    <Image src='/Vector.png' alt='arrow' width={10} height={5} />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='md:hidden block text-center'>
                                            <button className='bg-[#FFE492] py-2 px-6 rounded-lg mb-6'>Login</button>
                                            <Button buttonText='Try Whitepace free' />
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header