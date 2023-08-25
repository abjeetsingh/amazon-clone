import React from 'react'
import {ShoppingCartIcon}from "@heroicons/react/24/outline"
import Search from './Search'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        <div className="flex items-center m-4">
          
          <Link to={'/'}>
          <img className='h-[35px] w-[100px] m-2' src="../images/amazon.png" alt="" />
          </Link>
          <div className= 'px-4'>
            <div className='text-xs xl:text-sm'>United Kingdom</div>
            <div className='text-xs xl:text-base font-bold'>Deliver to</div>
          </div>
        </div>

        <div className="flex grow relative items-center ">
          <Search/>
        </div>


        <div className="flex items-center m-4">
          <div className= 'px-4'>
            <div className='text-xs xl:text-sm'>Hello, sign in</div>
            <div className='text-xs xl:text-base font-bold'>Accounts & Lists</div>
          </div>
          
          <div className= 'px-4'>
            <div className='text-xs xl:text-sm'>Returns</div>
            <div className='text-xs xl:text-base font-bold'>& Orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className='flex px-3'>
              <ShoppingCartIcon className="h-[48px]"/>
              <div className='mt-7 text-xs xl:text-sm font-bold'>
                Cart
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className='flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6'>
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>

      </div>

    </nav>
  )
}

export default Navbar