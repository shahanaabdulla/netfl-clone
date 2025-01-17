import React from 'react'
import './Banner.css';

import axios from './axios';
import requests from './request'
import { useState,useEffect } from 'react';


function Banner() {
    
const [movie,setMovie] = useState([]);
useEffect(()=>{
    async function fetchData(){
    const request = await axios.get(requests.fetchWeeklyTrending)
    setMovie(request.data.results[ Math.floor(Math.random() * request.data.results.length-1)])
   
    }fetchData()

},[])

function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+ "...":str;

}
  return (
    <div className='banner'

    style={{
        backgroundSize:'cover',
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
    
        height: '500px',
    }}
    
    >


<div className="banner_contents">
        <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

       
          <h1 className='banner_description'>{ truncate(movie?.overview,150)}</h1>
      
      </div>
      <div className="banner_fade"></div>
    
</div>

   
  )
}

export default Banner
