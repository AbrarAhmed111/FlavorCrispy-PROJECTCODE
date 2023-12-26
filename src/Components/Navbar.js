
import React, {useState} from 'react'
import {AiFillTags, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet,FaUserFriends} from 'react-icons/fa'
function Navbar() {
const [nav, setnav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left side */}
        <div className='flex items-center'>
        <div onClick={() => setnav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30}/>
        </div>
        <h1 className='px-2 text-2xl sm:text-3xl lg-text-4xl'>Flavor<span className='font-bold text-orange-600'>Crispy</span></h1>
        <div className=' hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
        <p className='p-2 text-white bg-black rounded-full'>Delivery</p>
        <p className='p-2 '>Pickup</p> 
        </div>
        </div>
        {/* search input */} 
        <div className='bg-gray-200 rounded-full hidden  items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20}/>
        <input className='w-full p-2 bg-transparent focus:outline-none' type="text" placeholder='Search foods' />
        </div>

        {/* Cart Button */}
        <button className='items-center hidden py-2 text-white duration-300 bg-black rounded-full hover:text-orange-600 md:flex'>
            <BsFillCartFill size={20} className='mr-2'/>
        </button>

        {/* Mobile Menu */}
        {/* overlay */}
       
        {nav  ? <div className='fixed top-0 left-0 z-10 w-full h-screen bg-black/80'/> : '' }

        {/* Side Drawer Menu */}

        
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100vh] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={() => setnav(!nav)} className='absolute cursor-pointer right-4 top-4' size={30}/> 
        <h2 className='p-4 text-2xl'>Flavor<span className='font-bold text-orange-600'>Crispy</span></h2>
        <nav>
        <ul className='flex flex-col p-4 text-gray-800'>
            <li className='flex py-4 text-xl cursor-pointer hover:text-black hover:font-semibold '><TbTruckDelivery className='mr-4 text-orange-600' size={25}/> Orders</li>
            <li className='flex py-4 text-xl cursor-pointer hover:text-black hover:font-semibold'><MdFavorite className='mr-4 text-orange-600' size={25}/> Favorites</li>
            <li className='flex py-4 text-xl cursor-pointer hover:text-black hover:font-semibold'><FaWallet className='mr-4 text-orange-600' size={25}/> Wallet</li>
            <li className='flex py-4 text-xl cursor-pointer hover:text-black hover:font-semibold'><MdHelp className='mr-4 text-orange-600' size={25}/> Help</li>
            <li className='flex py-4 text-xl cursor-pointer hover:text-black hover:font-semibold'><AiFillTags className='mr-4 text-orange-600' size={25}/> Promotions</li>
            <li className='flex py-4 text-xl cursor-pointer hover:text-black hover:font-semibold'><BsFillSaveFill className='mr-4 text-orange-600' size={25}/> Best Ones</li>
            <li className='flex py-4 text-xl cursor-pointer hover:text-black hover:font-semibold'><FaUserFriends className='mr-4 text-orange-600' size={25}/> Invite Friends</li>
        </ul>

        </nav>


        </div>
    </div>
  )
}

export default Navbar