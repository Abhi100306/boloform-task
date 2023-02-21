import React from 'react'
import './review.css'
function Review() {
  return (
    <div style={{
      paddingRight:150,
      paddingLeft:150,
      marginBottom:200
    }}>

    <div  class="boxRoot my-12 w-full flex flex-row items-center p-4 sm:p-10 rounded-3xl">
        <div class="h-16 w-16 sm:h-32 sm:w-32 rounded-full overflow-hidden">
             <img alt="" src="repa.483a1471.jpeg" width="639" height="593" decoding="async" data-nimg="1" class="h-full w-full object-cover" loading="lazy"/>
        </div>
        <div class="pl-4 sm:pl-12"><div class="h-6 mb-4">
            <img alt="" src="Stars.885edd0c.svg" width="380" height="65" decoding="async" data-nimg="1" class="w-32 h-full" loading="lazy"/>
        </div>
        <p class="mb-2 text-sm sm:text-base">"Boloforms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure that everything runs smoothly. I love how it automates tasks and eliminates manual processes, saving me time and effort. It's a great Google Workflow software and is well worth the money!"</p><h3 class="text-base sm:text-lg font-semibold">Repa Mandala</h3>
    </div>
    </div>
    </div>
  )
}

export default Review

