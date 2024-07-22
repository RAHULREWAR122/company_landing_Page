import ContactForm from '@/components/Form/ContactForm'
import React from 'react'

function DiscussPage() {
    let text = "Discuss the project"
    let color ="#ebc034"
    let text2 =""
    return (
    <div className='min-h-[50vh] w-[100%] bg-gradient-to-r md:flex  justify-around items-center p-8 from-yellow-500 to-green-300'>
           <div className=" text-white md:w-[40%]">
               <h1 className='text-[27px]'>Let&apos;s discuss Your Project</h1>
               <br />
               <p className='text-[14px]'>Let&apos;s figure out how to create an effective application,
               its cost and terms of its development</p>
           </div>

           <div className="right md:w-[40%] max-h-[500px] md:mt-0 mt-8">
              <ContactForm text={text} color={color} text2={text2} />
           </div>
    </div>
  )
}

export default DiscussPage