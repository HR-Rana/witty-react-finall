import React from 'react'

export default function Hero() {
  return (
    <header>
        <span>
            <div className="videos">
                <video src="https://youtu.be/hxMNYkLN7tI?list=RDhxMNYkLN7tI" width={'100%'} loop muted type='video/mp4'></video>
            </div>
            <div className="text">
            <h1><span><i class="fa-solid fa-quote-left"></i> </span>the more informative your advertising, the more persuasive it will be. <span><i class="fa-solid fa-quote-right"></i></span></h1>
            </div>
        </span>
    </header>
  )
}
