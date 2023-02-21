import React from 'react'
import './hero.css'
function Hero() {
  return (
    <div className='root'>
        <div className="w-full flex flex-col md:flex-row xxl:-mx-6">
            <div className="w-full md:pr-12 mb-12 flex flex-col justify-center items-center md:items-start">
                <h4 class="text-3xl md:text-4xl font-semibold mb-2 sm:mb-4 capitalize">Transform Google Forms into Interactive Workflows</h4>
                <p  class="text-base md:text-lg mb-8 xl:mr-[50px]">BoloForms is a Google Forms add on that allows you to add conditional
                logic to your forms. With BoloForms, you can create interactiveworkflows, approval flows automate processes.</p>
            </div>
            <div className='w-full flex justify-center md:justify-start items-center'>
            <iframe loading="lazy" class="w-[560px] h-[315px] md:w-[460px] lg:w-[560px] border-4 rounded-2xl border-[#9a6afd]" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div>
        </div>
    </div>
  )
}

export default Hero