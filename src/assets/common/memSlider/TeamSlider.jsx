import React from 'react'
import Slider from "react-slick";





export default function TeamSlider({data}) {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <div className="slider-container"> 
        <Slider {...settings}>
            {
                data.map((items, i) =>{
                    return (
                       <Link to={`/:${items.id}`} >
                             <div>
                                 <img src={items.img} alt={`member ${i}`} />
                             </div> 
                       </Link>
                    )
                })
            }          
        </Slider>
    </div>
  )
}
