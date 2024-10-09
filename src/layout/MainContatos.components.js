import './style/MainContatos.modules.css'
import { IoLocation } from "react-icons/io5";

function MAIN(){
    return(
        <main className="mainContatos">
            <section className='sectionContatos'>
                <ul className='list-contacts-city'>
                    <li id='box-contacts'>
                        <div className='photo'>
                            <img src={require('../images/vendedor/photo1.jpeg')} alt="vendedor" />
                        </div>
                        <div className="address">
                            <IoLocation />
                            <address>
                                <strong>Farmácia São Paulo:</strong> Rua Francisco Bezerra, 225, CEP: 62380-000, Guaraciaba do Norte - CE
                            </address>
                        </div>
                        <div className="social-media">
                            <a href="https://w.app/touticosmeticosgba" target="__blank" rel="noopener noreferrer">
                                <button type='button' id='whatsapp'>
                                    Whatsapp
                                </button>
                            </a>
                        </div>
                    </li>
                    <li id='box-contacts'>
                        <div className='photo'>
                            <img src={require('../images/vendedor/photo1.jpeg')} alt="vendedor" />
                        </div>
                        <div className="address">
                            <IoLocation />
                            <address>
                                <strong>Farmácia Nossa Senhora de Fátima:</strong> Rua Aristides Barreto, Nº , CEP: 62370-000, São Benedito - CE
                            </address>
                        </div>
                        <div className="social-media">
                            <a href="https://w.app/touticosmeticossb" target="__blank" rel="noopener noreferrer">
                                <button type='button' id='whatsapp'>
                                    Whatsapp
                                </button>
                            </a>
                        </div>
                    </li>
                    <li id='box-contacts'>
                        <div className='photo'>
                            <img src={require('../images/vendedor/photo3.jpeg')} alt="vendedor" />
                        </div>
                        <div className="address">
                            <IoLocation />
                            <address>
                                <strong>Farmácia do Povo:</strong> Rua Coronel Félix, centro, Nº 1253, CEP: 62250-000, IPU - CE
                            </address>
                        </div>
                        <div className="social-media">
                            <a href="https://w.app/touticosmeticosipu" target="__blank" rel="noopener noreferrer">
                                <button type='button' id='whatsapp'>
                                    Whatsapp
                                </button>
                            </a>
                        </div>
                    </li>
                    <li id='box-contacts'>
                        <div className='photo'>
                            <img src={require('../images/vendedor/photo1.jpeg')} alt="vendedor" />
                        </div>
                        <div className="address">
                            <IoLocation />
                            <address>
                                <strong>Farmácia do Povo:</strong> Rua , Nº , CEP: , Ipueiras - CE
                            </address>
                        </div>
                        <div className="social-media">
                            <a href="https://w.app/" target="__blank" rel="noopener noreferrer">
                                <button type='button' id='whatsapp'>
                                    Whatsapp
                                </button>
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default MAIN