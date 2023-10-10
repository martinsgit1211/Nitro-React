import React from 'react'
import "./App.css"
// import "./images"
import { Link } from 'react-router-dom'
import rocketguyimg from "./images/rocket-guy.png"
import nitrosvg from "./images/nitro.svg"

function Banner() {
    return (
        <>
            <div class="nitro-container">
                <nav class="nav-container">
                    <div class="nav-discordd">
                        <img src="https://img.icons8.com/ios-filled/50/000000/discord-logo.png" alt="imageForIcons8" />
                        <Link to="" class="nav-discord">Discord</Link>
                    </div>
                    <div class="download-nav">
                        <Link to="http://" class="nav-items">Download</Link>
                        <Link to="http://" class="nav-items">Nitro</Link>
                        <Link to="" class="nav-items">Safety</Link>
                        <Link to="" class="nav-items">Support</Link>
                        <Link to="" class="nav-items">Blog</Link>
                        <Link to="" class="nav-items">Careers</Link>
                    </div>
                    <div class="login">
                        <button class="logbut">
                            <a href="./src/CSS/index.html" class="log">Login</a>
                        </button>
                    </div>
                </nav>

                <div class="section1">
                    <div class="left">
                        <img src={nitrosvg} class="nitro" alt="" />
                        <p class="imagine-2">Get an enhanced Discord experience for one low monthly cost. Upgrade your emoji, enjoy bigger file uploads, stand out in your favorite Discords, and more.</p>
                        <div class="buttons">
                            <button class="openbutton"> $99.99 per year<div class="innerbutton">16% off</div></button>
                            <button class="openbutton2">$9.99 per month</button>
                        </div>
                    </div>
                    <div class="right">
                        <img src={rocketguyimg} alt="" class="right-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner