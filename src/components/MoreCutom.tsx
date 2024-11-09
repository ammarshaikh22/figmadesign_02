import React from 'react'
import SideBySide from './SideBySide'

const MoreCutom = () => {
    return (
        <section className='py-20 relative'>
            <SideBySide imgUp={true} img={false} divImg={true} textRight={false} divClass='md:max-w-[548px] md:h-[350px] w-full h-[214px]' heading='Customise it to your needs' para='Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.' buttonText='Let’s Go' />
        </section>
    )
}

export default MoreCutom