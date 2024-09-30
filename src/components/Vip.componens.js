import './style/Vip.modules.css'
import React, { useState, useEffect } from 'react'
import productsData from './productsVip.json';
import Slider from "react-slick"

function VIP() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      setProducts(productsData.produtos)
    }, [])   
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
    return(
      <fieldset className="caixa-vip">
      {/* Link que faz o slik funcionar */}
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      {/* items do slider */}
      <legend>Linha Vip</legend>
      <div className="slider-container-vip">
        <div className="produtos">
          <Slider {...settings} data-slick="slider-container-vip">
            {products.map(product => (
              <div key={product.id}>
                <div className='box-produto'>
                  <div className='img'>
                      <img src={require(`./../${product.image_url}`)} alt={product.name} />
                  </div>
                  <div className="info_prod">
                      <h3>{product.name}</h3>
                      <div id="gender">
                        <h2>{product.gender}</h2>
                      </div>
                      <div id="desc">
                        <h2>{product.description}</h2>
                      </div>
                      <div id="price">
                        <h2>R$ {product.price.toLocaleString()}</h2>
                      </div>
                      <div id="estoque">
                        {product.stock <= 0 ? <h2>Indisponivel</h2> :
                          <h2>Disponivel: {product.stock}</h2>
                        }
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </fieldset>
    )
}
export default VIP