import './style/Header.modules.css'
import LOGO from '../components/Logo.components'
import MENU from '../components/Menu.components';

function HEADER(){
    return(
        <header className="header">
            <LOGO></LOGO>
            <MENU></MENU>
        </header>
    )
}

export default HEADER;