import React from 'react'

function HeadlinesCard() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white cursor-pointer  hover:bg-black/30 duration-500'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='hover:bg-orange-600 hover:border-orange-600 hover:text-white border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
         </div>
         <img className='max-h-[180px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/16890470/pexels-photo-16890470/free-photo-of-pizza-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>

          {/* Card */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white cursor-pointer  hover:bg-black/30 duration-500'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurant</p>
            <p className='px-2'>Added Daily</p>
            <button className='hover:bg-orange-600 hover:border-orange-600 hover:text-white border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
         </div>
         <img className='max-h-[180px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

        </div>

          {/* Card */}
          <div className='rounded-xl relative'>
            {/* Overlay */}
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white  cursor-pointer  hover:bg-black/30 duration-500'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Fries Too</p>
            <p className='px-2'>Tasty Crispy</p>
            <button className='hover:bg-orange-600 hover:border-orange-600 hover:text-white border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
         </div>
         <img className='max-h-[180px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        </div>
</div>
        
  
  )
}

export default HeadlinesCard