import React from 'react'
import './App.css'
import nitroclassic from './images/nitro-classic.svg'

function Sectionthree() {
  return (
    <>
        <div class="nitro-classic">
            <div class="left">
                <img src={nitroclassic} class="nitro" alt=""/>
                 <p class="imagine-2">Keep it simple — get the base chat perks without a Server Boost.</p>
                 <div class="buttons">
                     <button class="openbutton"> $49.99 per year<div class="innerbutton">16% off</div></button>
                     <button class="openbutton2">$4.99 per month</button>
                 </div>
            </div>
        </div>
    </>
  )
}

export default Sectionthree