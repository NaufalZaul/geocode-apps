import React from "react";
import { Link } from "react-router-dom";
import API_CONFIG from "./API/api";
import Navbar from "./Navbar";
import Image from '../Image/pexels-johannes-plenio-1114900.jpg'
import IndexedDB from "./IndexedDB/indexedDB";


class SearchByCoordinatePoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: API_CONFIG.API_GET_LOCATION,
      latitude: 0,
      longitude: 0,
      // data: null
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
    this.setCoordinate = this.setCoordinate.bind(this)
    this.getLocation = this.getLocation.bind(this)
  }

  setCoordinate() {
    this.setState({
      latitude: document.getElementById('latitude').value,
      longitude: document.getElementById('longitude').value,
    })
  }

  async getLocation() {
    const newURL = this.state.url(this.state.latitude, this.state.longitude)
    await fetch(newURL).then(res => res.json())
      .then(res => { this.setState({ data: res }) })
  }

  componentDidUpdate() {
    this.getLocation()
    // IndexedDB(this.state.data)
  }

  render() {
    return (
      <div className="min-h-screen bg-slate-800 text-white sm:p-3 xl:p-10" >

        <Navbar />

        <div className="grid xl:grid-cols-2 sm:p-5 xl:gap-4 xl:mt-12">
          <div class="text-left sm:mb-10">
            <img className='m-auto rounded xl:w-1/2' src={Image} alt="" />
            <h1 className='text-2xl mt-7 mb-5 xl:text-3xl'>Lorem ipsum dolor sit amet.</h1>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem atque corrupti adipisci culpa. Qui neque nulla dolorum, dolore cupiditate molestiae. Provident debitis quo ut error eligendi, odit laborum qui!</p>
            <span className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, fugiat!</span>
          </div>

          <div className="text-left m-auto xl:w-fit">
            <h1 className="text-2xl mb-4">Cari Berdasarkan Latitude</h1>
            <div className="m-auto">
              <div class="grid xl:grid-cols-2 xl:gap-4">
                <input className='rounded py-1 pl-2 my-1 text-black' type="number" name="latitude" id="latitude" placeholder='latitude' />
                <input className='rounded py-1 pl-2 my-1 text-black' type="number" name="longitude" id="longitude" placeholder='longitude' />
              </div>
              <div class="flex items-center justify-center">
                <button className='border px-3 py-1 m-2 bg-white text-black text-base' type="submit" onClick={this.setCoordinate}>Search</button>
                <Link to='/search-country'>
                  <button className='border px-3 py-1 m-2 text-bases' type="submit">Search by Country</button>
                </Link>
              </div>
            </div>

            {this.state.data != null &&
              <div class="text-left mt-5">
                <h1 className='text-2xl mb-3'>Your Location Right Now</h1>
                <div class="grid gap-2 xl:grid-cols-2 xl:gap-4">
                  <span className='grid grid-cols-3 gap-4 items-center border-b'>
                    <p class="">Latitude </p>
                    <p className='col-span-2 py-2'> : {this.state.data.latitude}</p>
                  </span>
                  <span className='grid grid-cols-3 gap-4 items-center border-b'>
                    <p class="">Longitude </p>
                    <p className='col-span-2 py-2'> : {this.state.data.longitude}</p>
                  </span>
                  <span className='grid grid-cols-3 gap-4 items-center border-b'>
                    <p class="">City </p>
                    <p className='col-span-2 py-2'> : {this.state.data.city}</p>
                  </span>
                  <span className='grid grid-cols-3 gap-4 items-center border-b'>
                    <p class="">Continent </p>
                    <p className='col-span-2 py-2'> : {this.state.data.continent}</p>
                  </span>
                  <span className='grid grid-cols-3 gap-4 items-center border-b'>
                    <p class="">Country Code </p>
                    <p className='col-span-2 py-2'> : {this.state.data.countryCode}</p>
                  </span>
                  <span className='grid grid-cols-3 gap-4 items-center border-b'>
                    <p class="">Country Name </p>
                    <p className='col-span-2 py-2'> : {this.state.data.countryName}</p>
                  </span>
                  <span className='grid grid-cols-3 gap-4 items-center border-b'>
                    <p class="">Principal Subdivision </p>
                    <p className='col-span-2 py-2'> : {this.state.data.principalSubdivision}</p>
                  </span>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default SearchByCoordinatePoint;