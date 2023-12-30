import React from 'react'
import img1 from '../assets/fortnite.png'
import img2 from '../assets/fortnite1.png'
import img3 from '../assets/fortnite3.png'
import './Poster.css'


function Poster() {
  return (
    <div className='row'>
      <div className='posters'>
        <img className='poster-image' src={img1} alt="" />
        <p className='tag'>Explore large, destructible environments where no two games are ever the same.</p>
      </div>
      <div className='posters'>
        <img className='poster-image' src={img2} alt="" />
        <p className='tag'>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale.</p>
      </div> 
      <div className='posters'>
        <img className='poster-image' src={img3} alt="" />
        <p className='tag'>Discover even more ways to play across thousands of creator-made game genres.</p>
      </div>
    </div>
  )
}

export default Poster
