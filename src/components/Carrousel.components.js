import React from "react"
import Slider from "react-slick"
import './style/Carroussel.modules.css'


function CARROUSEL(){
    var settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <>
        {/* Link que faz o slik funcionar */}
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        {/* items do slider */}
        <div className="caixa">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src={require('./../images/carrousel/item1.png')} alt="nome da imagem" />
              </div>
              <div>
                <img src={require('./../images/carrousel/item2.png')} alt="nome da imagem" />
              </div>
            </Slider>
          </div>
        </div>
      </>
    )
}

export default CARROUSEL;