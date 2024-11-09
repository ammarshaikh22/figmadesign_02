import React from 'react'
import Plane from './Plane'
const Price = () => {
    return (
        <section
            className="relative z-10 overflow-hidden bg-white py-10 lg:pb-[90px] lg:pt-10 dark:bg-dark"
        >
            <div className="2xl:max-w-[80%] md:max-w-[94%] max-w-[96%] mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] md:max-w-[75%] text-center relative">
                            <h2 className="relative text-6xl font-semibold mb-6 ">
                                Choose Your Plan
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap justify-center items-center">
                    <Plane title='Free' buttonColor='bg-transparent text-black' price='0' boxSize='md:py-10' bg='bg-white' para='Capture ideas and find them quickly' points={['Sync unlimited devices', '10 GB monthly uploads', '200 MB max. note size', 'Customize Home dashboard and access extra widgets', 'Connect primary Google Calendar account', 'Add due dates, reminders, and notifications to your tasks']} />
                    <Plane title='Personal' buttonColor='bg-[#4F9CF9] text-white' boxSize='md:py-24' price='11.99' bg='bg-[#043873] text-white' para='Keep home and family on track' points={['Sync unlimited devices', '10 GB monthly uploads', '200 MB max. note size', 'Customize Home dashboard and access extra widgets', 'Connect primary Google Calendar account', 'Add due dates, reminders, and notifications to your tasks']} />
                    <Plane title='Organization' buttonColor='bg-transparent text-black' boxSize='md:py-10' price='49.99' bg='bg-white' para='Capture ideas and find them quickly' points={['Sync unlimited devices', '10 GB monthly uploads', '200 MB max. note size', 'Customize Home dashboard and access extra widgets', 'Connect primary Google Calendar account', 'Add due dates, reminders, and notifications to your tasks']} />
                </div>
            </div>
        </section>
    )
}

export default Price