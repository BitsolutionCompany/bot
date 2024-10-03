import './style/MainContatos.modules.css'

function MAIN(){
    return(
        <main className="mainContatos">
            <section className='sectionContatos'>
                <ul className='list-contacts-city'>
                    <li id='box-contacts'>
                        <div className='photo'>
                            <img src={require('../images/vendedor/photo1.jpeg')} alt="vendedor" />
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
                    </li>
                    <li id='box-contacts'>
                        <div className='photo'>
                            <img src={require('../images/vendedor/photo1.jpeg')} alt="vendedor" />
                        </div>
                    </li>
                    <li id='box-contacts'>
                        <div className='photo'>
                            <img src={require('../images/vendedor/photo1.jpeg')} alt="vendedor" />
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default MAIN