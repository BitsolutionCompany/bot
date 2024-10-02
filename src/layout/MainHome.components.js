import VIP from '../components/Vip.componens';
import FIT from '../components/Fit.components';
import LUX from '../components/Lux.components';
import './style/MainHome.modules.css'


function MAIN(){
    return(
        <main className="main">
            <VIP></VIP>
            <FIT></FIT>
            <LUX></LUX>
        </main>
    )
}

export default MAIN;