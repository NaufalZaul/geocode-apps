// import Application from "./Application";
// Application.halo()

import React from "react";
import { Link } from "react-router-dom";
import Image from '../Image/pexels-tima-miroshnichenko-7567554.jpg'
import Navbar from "./Navbar";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    }
    this.getCountry = this.getCountry.bind(this)
  }

  getCountry() {
    const con = document.getElementById('country').value;
    const getFromLocalStorage = localStorage.getItem(con);
    this.setState({
      data: JSON.parse(getFromLocalStorage)
    })
  }
  render() {
    return (
      <div className="min-h-screen bg-slate-800 text-white sm:p-3 xl:p-10" >

        <Navbar />

        <div className="grid xl:grid-cols-2 sm:p-5 xl:gap-4 xl:mt-12">
          <div className="text-left sm:mb-10">
            <div class="h-60 flex bg-image-background mb-10">
              <p className="text-3xl m-auto sm:text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <h1 className="text-2xl mb-3">Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure placeat quasi mollitia iste nesciunt, odio atque adipisci distinctio eos eum eaque non modi et numquam dicta officiis soluta</p>
          </div>
          <div class="">
            <div className="">
              <h1 className="text-2xl mb-4 sm:text-left xl:text-3xl">Cari Berdasarkan Negara</h1>
              <input className="rounded py-2 px-3 text-black sm:w-full xl:w-auto" type="text" name="country" id="country" placeholder='Country' />
              <button className="border rounded px-4 py-2 sm:mt-4 xl:mt-0 xl:ml-4" type="submit" onClick={this.getCountry}>Search</button>
            </div>
            {
              this.state.data &&
              <div className="w-fit text-left m-auto">
                <p className="mt-10 mb-5 sm:text-2xl xl:text-3xl">Lorem ipsum dolor sit amet.</p>
                <span className="grid border-b grid-cols-3 sm:my-2 xl:my-auto xl:text-xl">
                  <p>Code Country</p>
                  <p className="col-span-2 mb-1 ml-8">: {this.state.data.country}</p>
                </span>
                <span className="grid border-b grid-cols-3 sm:my-2 xl:my-auto xl:text-xl">
                  <p>Name Country</p>
                  <p className="col-span-2 mb-1 ml-8">: {this.state.data.nameCountry}</p>
                </span>
                <span className="grid border-b grid-cols-3 sm:my-2 xl:my-auto xl:text-xl">
                  <p>Latitude</p>
                  <p className="col-span-2 mb-1 ml-8">: {this.state.data.latitude}</p>
                </span>
                <span className="grid border-b grid-cols-3 sm:my-2 xl:my-auto xl:text-xl">
                  <p>Longitude</p>
                  <p className="col-span-2 mb-1 ml-8">: {this.state.data.longitude}</p>
                </span>
              </div>
            }
          </div>

        </div>


      </div>
    )
  }
};
export default Search;