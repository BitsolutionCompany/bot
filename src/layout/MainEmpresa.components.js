import './style/MainEmpresa.modules.css'
import AudioPlayer from 'react-audio-player'

function MAIN(){
    return(
        <main className='mainEmpresa'>
            <section className='sectionEmpresa'>
                <AudioPlayer
                    src={require('./../songs/audio1.mp3')}
                    controls
                    onCanPlay={() => console.log('O arquivo de áudio está pronto para ser reproduzido')}
                    onError={() => console.log('Ocorreu um erro ao carregar o arquivo de áudio')}
                    className="audio-player"
                    onLoad={() => {
                        this.audioPlayer.play();
                    }}
                />
                <p>
                    Inspirada pela elegância de Paris, a TouTi Cosmetics nasceu para proporcionar mais confiança a homens e mulheres. Acreditamos que os perfumes são essenciais para construir e afirmar a personalidade, além de promover o bem-estar. Nossas diversas fragrâncias permitem que cada pessoa explore diferentes facetas de si mesma.
                </p>
                <p>
                    O nome TouTi é uma homenagem a Dame Touti, uma egípcia que, há 3000 anos, foi a primeira diva registrada a criar seus próprios cosméticos, inspirando pessoas ao redor do mundo. No Egito antigo, o perfume era central tanto na estética quanto na terapia, e a criação de fragrâncias era considerada uma arte – uma visão que mantemos até hoje. 
                </p>
                <p>
                    Com mais de 560 unidades em diversos estados do Brasil, estamos em rápida expansão. Nossos quiosques contam com consultoras especializadas, prontas para oferecer a melhor experiência de compra possível. Além disso, estamos sempre inovando e lançando novas fragrâncias para atender aos gostos e preferências de nossos clientes.
                </p>
                <p>
                    Venha conhecer a TouTi e descubra suas fragrâncias únicas! Deixe-se envolver pela magia dos nossos perfumes e encontre a essência que melhor representa você. Nossa missão é fazer com que cada cliente se sinta especial e confiante, todos os dias.
                </p>
            </section>
        </main>
    )
}

export default MAIN