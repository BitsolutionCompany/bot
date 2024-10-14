import './style/MobileMenu.modules.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function MOBILEMENU(){
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() =>{
        if(isOpen){
            document.body.classList.add('no-scroll')
        }else{
            document.body.classList.remove('no-scroll')
        }
    }, [isOpen])

    function showMenu(){
        setIsOpen(true)
    }

    function hideMenu(){
        setIsOpen(false)
    }

    return(
        <>
            <button onClick={showMenu} className='button'>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`modal ${isOpen ? 'open' : ''}`}>
                <div className='mobileMenu'>
                    <ul className='list_menu_mobile'>
                        <div className='center'>
                            <Link to="/">
                                <li id='items_link_mobile' onClick={hideMenu}>
                                    Home
                                </li>
                            </Link>
                            <Link to="/empresa">
                                <li id='items_link_mobile' onClick={hideMenu}>
                                    Empresa
                                </li>
                            </Link>
                            <Link to="/contato">
                                <li id='items_link_mobile' onClick={hideMenu}>
                                    Contato
                                </li>
                            </Link>
                            <Link to="/vender">
                                <li id='items_link_mobile' onClick={hideMenu}>
                                    Como Vender?
                                </li> 
                            </Link>
                            {/* <Link to="/cadastro">
                                <li id='items_link_mobile' onClick={hideMenu}>
                                    Cadastro
                                </li>
                            </Link> */}
                        </div>
                    </ul>
                    <button onClick={hideMenu} className='close-button'>
                        X
                    </button>
                </div>
            </div>

        </>
    )
}

export default MOBILEMENU