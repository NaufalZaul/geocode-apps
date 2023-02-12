import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../Video/file.mp4'


class Home extends React.Component {

  render() {
    return (
      <div className="relative sm:bg-image-background">

        <video autoPlay loop className='sm:hidden xl:block fixed top-0 bottom-0 z-0'>
          <source src={Background} type="video/mp4" />
        </video>

        <div className="relative flex flex-col text-white text-left z-10  sm:min-h-screen sm:justify-center sm:px-6 xl:w-1/2 xl:min-w-full xl:m-12 xl:px-2">
          <h1 className='text-4xl mb-5'>Lorem ipsum dolor sit amet consectetur.</h1>
          <p className='text-lg mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, itaque magni eius laborum error dolore quo, veniam illo consectetur voluptatum temporibus, libero ea fugiat nam in sunt? Explicabo, amet molestiae?</p>
          <div className="flex justify-center items-center text-center">
            <Link to='/location-now'>
              <button type="submit" className='border rounded mx-2 px-4 py-2 bg-white text-black'>Your Location</button>
            </Link>
            <Link to='/search-coordinate'>
              <button type="submit" className='border rounded mx-2 px-4 py-2'>Search Location</button>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}

export default Home;