import React from 'react'
import '../App.css';
import moveToLocalStorage from './Storage/local-storage';
import API_CONFIG from './API/api'
import Image from '../Image/pexels-johannes-plenio-1114900.jpg'
import Navbar from './Navbar';
// import IndexedDB from './Component/IndexedDB/indexedDB';
// console.log(API_CONFIG.LONGITUDE)
// IndexedDB();

moveToLocalStorage()

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: API_CONFIG.API_URL,
      data: {
        latitude: 12323234,
        longitude: 2342342,
        city: 'Madiun',
        continent: 'Jawa timur',
        countryCode: 'ID',
        countryName: 'indonerasz',
        principalSubdivision: 'ewegw',
        principalSubdivisionCode: 'rhwrhwrh'
      }
    };
  }

  async componentDidMount() {
    // await fetch(this.state.url).then(res => res.json())
    //   .then(res => { this.setState({ data: res }) })
    //   .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="min-h-screen bg-slate-800 text-white focus:text-black text-left sm:p-3 xl:p-10">

        <Navbar />

        <div class="grid sm:p-5 xl:grid-cols-2 xl:gap-8 xl:mt-12">
          <div class="sm:mb-10">
            <img className='xl:w-1/2 m-auto rounded' src={Image} alt="" />
            <h1 className='text-2xl mt-7 mb-5 xl:text-3xl'>Lorem ipsum dolor sit amet.</h1>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem atque corrupti adipisci culpa. Qui neque nulla dolorum, dolore cupiditate molestiae. Provident debitis quo ut error eligendi, odit laborum qui!</p>
            <span className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, fugiat!</span>
          </div>

          <div className="w-fit m-auto text-lg xl:p-0">
            <h1 className='text-2xl mb-5 xl:text-3xl'>Your Location Right Now</h1>
            <span className='grid grid-cols-2 gap-4 items-center border-b'>
              <p class="">Latitude </p>
              <p className='py-2'> : {this.state.data.latitude}</p>
            </span>
            <span className='grid grid-cols-2 gap-4 items-center border-b'>
              <p class="">Longitude </p>
              <p className='py-2'> : {this.state.data.longitude}</p>
            </span>
            <span className='grid grid-cols-2 gap-4 items-center border-b'>
              <p class="">City </p>
              <p className='py-2'> : {this.state.data.city}</p>
            </span>
            <span className='grid grid-cols-2 gap-4 items-center border-b'>
              <p class="">Continent </p>
              <p className='py-2'> : {this.state.data.continent}</p>
            </span>
            <span className='grid grid-cols-2 gap-4 items-center border-b'>
              <p class="">Country Code </p>
              <p className='py-2'> : {this.state.data.countryCode}</p>
            </span>
            <span className='grid grid-cols-2 gap-4 items-center border-b'>
              <p class="">Country Name </p>
              <p className='py-2'> : {this.state.data.countryName}</p>
            </span>
            <span className='grid grid-cols-2 gap-4 items-center border-b'>
              <p class="">Principal Subdivision </p>
              <p className='py-2'> : {this.state.data.principalSubdivision}</p>
            </span>
            <span className='grid grid-cols-2 gap-4 items-center border-b'>
              <p class="">Principal Subdivision Code </p>
              <p className='py-2'> : {this.state.data.principalSubdivisionCode}</p>
            </span>
          </div>
        </div>

      </div>
    );
  }
}

export default Application;



  // GET LOCATION WITH MAPS
  // getLocation() {
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     this.setState({
  //       data: {
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         city: position.coords.city,
  //         continent: position.coords.continent,
  //         countryCode: position.coords.countryCode,
  //         countryName: position.coords.countryName,
  //         principalSubdivision: position.coords.principalSubdivision,
  //         principalSubdivisionCode: position.coords.principalSubdivisionCode
  //       }
  //     })
  //   })
  //   }
  // }