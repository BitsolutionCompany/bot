import './style/Header.modules.css'
import LOGO from '../components/Logo.components'
import MENU from '../components/Menu.components';
import MOBILEMENU from '../components/MobileMenu.components';


function HEADER(){
    return(
        <header className="header">
            <LOGO></LOGO>
            <MENU></MENU>
            <MOBILEMENU></MOBILEMENU>
        </header>
    )
}

export default HEADER;