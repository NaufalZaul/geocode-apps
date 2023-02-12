import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // class Navbar extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.Dropdown = this.Dropdown.bind(this);
  //   }
  //   render() {

  // const dropRef = useRef(null)

  const [show, setShow] = useState(false)
  const [menu, setMenu] = useState(false)
  const dropdown = () => setShow(!show)
  const menuBtn = () => setMenu(!menu)

  return (
    <div class="max-w-max xl:flex">
      <button type="submit" className='flex items-center px-4 py-2 lg:hidden' onClick={menuBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        Menu
      </button>
      {menu == true &&
        <div class="border-t">
          <Link to='/'>
            <button type="submit" className='flex items-center px-4 py-2 xl:border-r'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Back</button>
          </Link>
          <Link to='/location-now'>
            <button type="submit" className='flex items-center px-4 py-2 xl:border-x'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              My Location</button>
          </Link>
          <div class="relative">
            <button type="submit" className='flex items-center px-4 py-2 xl:border-l' onClick={dropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

              Search Location

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-5 fill-white text-white rotate-90 border rounded-full p-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            </button>

            {show == true &&
              <div className="absolute w-80 pl-8 bg-gray-600">
                <Link to='/search-country'>
                  <button type="submit" className='flex items-center px-4 py-3 w-48 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                    </svg>
                    Search by Country
                  </button>
                </Link>
                <Link to='/search-coordinate'>
                  <button type="submit" className='flex items-center px-4 py-3 border-t'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                    </svg>
                    Search by Coordinate Point
                  </button>
                </Link>
              </div>
            }
          </div>
        </div>
      }
    </div>
  )
}
// }


export default Navbar;