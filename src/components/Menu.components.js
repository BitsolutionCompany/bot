import { Link } from 'react-router-dom'
import './style/Menu.modules.css'

function MENU(){
    return(
        <ul className='list_menu'>
            <Link to="/">
                <li id='items_link'>
                    Home
                </li>
            </Link>
            <Link to="/empresa">
                <li id='items_link'>
                    Empresa
                </li>
            </Link>
            <Link to="/contato">
                <li id='items_link'>
                    Contato
                </li>
            </Link>
            <Link to="/vender">
                <li id='items_link'>
                    Como Vender?
                </li>
            </Link>
        </ul>
    )
}

export default MENU