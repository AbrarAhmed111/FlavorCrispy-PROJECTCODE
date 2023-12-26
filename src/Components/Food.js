import React,{useState} from 'react'
import {data} from '../Data/data.js'

function Food() {
    const [foods, setfoods] = useState(data)
    const [searchQuery, setSearchQuery] = useState('');
    
// Filter Type 
const filterType = (category) =>
{
    setfoods(
        data.filter((item) => {
            return item.category === category;
        })
    )
}

//  Filter Price

const filterPrice = (price) => {
    setfoods (
        data.filter((item) => {
            return item.price === price;
        })
    )
}

  const searchFilteredFoods = foods.filter((item) =>
    item.name && item.name.toLowerCase().includes(searchQuery ? searchQuery.toLowerCase() : '')
  );
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-4xl font-bold text-center text-orange-600'>Top Rated Menu Item</h1>

        {/* Filter Row */}
        <div className='flex flex-col justify-between px-3 mt-10 lg:flex-row'>

        {/* Filter Type */}
        <div className='font-bold text-gray-700'>
        <p>Filter Type</p>
            <div className='flex flex-wrap justify-between'>
                <button onClick={() => setfoods(data)} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                <button onClick={() => filterType('burger')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                <button onClick={() => filterType('pizza')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button onClick={() => filterType('salad')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                <button onClick={() => filterType('chicken')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
            </div>
        </div>

        {/* Search */}
        <div className='w-[80%] md:w-[40%]'>
            <p className='font-bold text-gray-700 '>Search Food</p>
           <input onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder='Search your food...' className='px-2 py-2 border-2 rounded-xl border-[#F97316] focus:outline-none w-[100%] text-[#F97316]' />
            </div>


        {/* Filter Price */}
        <div>
            <p className='font-bold text-gray-700 '>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={() => filterPrice('$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                <button onClick={() => filterPrice('$$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                <button onClick={() => filterPrice('$$$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                <button onClick={() => filterPrice('$$$$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
            </div>
          </div>

          
        </div>


        {/* Display Images */}
        
        <div className='grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4'> 
            {searchFilteredFoods.map((item, index) => (
               <div key={index} className='duration-300 shadow-lg cursor-pointer rounded-lgborder hover:scale-105'>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p><span className='p-1 text-white bg-orange-500 rounded-full'>{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Food
