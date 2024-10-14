import './style/Lux.modules.css'
import React, { useState, useEffect } from 'react'
import productsData from './productsLux.json'
import Slider from "react-slick"

function LUX(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setProducts(productsData.produtos);
    }, []);

    // const addToCart = (product) => {
    //     const quantity = prompt(`Quantidade de ${product.name} que deseja adicionar ao carrinho?`);
    //     const quantityNumber = parseInt(quantity);
    
    //     if (quantityNumber > 0 && quantityNumber <= product.stock) {
    //         setCart((prevCart) => {
    //             // Verifica se o produto já está no carrinho
    //             const existingProduct = prevCart.find(item => item.id === product.id);
                
    //             if (existingProduct) {
    //                 // Se o produto já estiver no carrinho, atualiza a quantidade
    //                 return prevCart.map(item =>
    //                     item.id === product.id
    //                         ? { ...item, quantity: item.quantity + quantityNumber }
    //                         : item
    //                 );
    //             } else {
    //                 // Se não estiver, adiciona o novo produto ao carrinho
    //                 return [...prevCart, { ...product, quantity: quantityNumber }];
    //             }
    //         });
    
    //         // Atualiza o estoque do produto
    //         setProducts((prevProducts) => {
    //             return prevProducts.map(item =>
    //                 item.id === product.id
    //                     ? { ...item, stock: item.stock - quantityNumber }
    //                     : item
    //             );
    //         });
    //     } else {
    //         alert('Quantidade inválida ou produto indisponível');
    //     }
    // };

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
        <fieldset className='caixa-lux'>
            {/* Link que faz o slick funcionar */}
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            {/* Items do slider */}
            <legend>Linha Lux</legend>
            <div className='slider-container-lux'>
                <div className='produtos'>
                    <Slider {...settings} data-slick="slider-container-lux">
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
                                            {product.stock <= 0 ? <h2>Indisponível</h2> :
                                            <h2>Disponível: {product.stock}</h2>
                                            }
                                        </div>
                                        {/* {product.stock > 0 && (
                                            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {/* <div className='carrinho'>
                <h2>Carrinho</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} x {item.quantity} - R$ {(item.price * item.quantity).toLocaleString()}
                        </li>
                    ))}
                </ul> 
            </div>*/}
        </fieldset>
    )
}

export default LUX