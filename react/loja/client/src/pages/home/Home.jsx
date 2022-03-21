import Ofertas from '../../layout/ofertas/Ofertas'
import styles from './Home.module.css'

import bicicleta_azul from '../../img/produtos/bicicleta_azul.jpg'
import bicicleta_preta from '../../img/produtos/bicicleta_preta.jpg'
import bicicleta_rosa from '../../img/produtos/bicicleta_rosa.jpg'
import bicicleta_verde from '../../img/produtos/bicicleta_verde.jpg'
import bicicleta_old from '../../img/produtos/bicicleta_old.jpg'
import bicicleta_infantil from '../../img/produtos/bicicleta_infantil.jpg'
import bicicleta_motor from '../../img/produtos/bicicleta_motor.jpg'

export default function Home() {

    const ofertas = [
        {
            imagem : bicicleta_azul,
            text : "Bicleta Azul",
            valor : "1.500,00"
        },
        {
            imagem : bicicleta_preta,
            text : "Bicleta Preta",
            valor : "1.700,00"
        },
        {
            imagem : bicicleta_rosa,
            text : "Bicleta Rosa",
            valor : "1.100,00"
        },
        {
            imagem : bicicleta_verde,
            text : "Bicleta Verde",
            valor : "1.300,00"
        },
        {
            imagem : bicicleta_old,
            text : "Bicleta Old",
            valor : "2.500,00"
        },
        {
            imagem : bicicleta_motor,
            text : "Bicleta Motorizada",
            valor : "4.500,00"
        },
        {
            imagem : bicicleta_infantil,
            text : "Bicleta Infantil",
            valor : "1.000,00"
        }
    ]

    return (
        <div className={ styles.container }>
            <div className={ styles.content }>
                <h1>Ofertas da Semana</h1>
                <div className={ styles.carrosel }>
                    {  ofertas.map((oferta) => {
                        <Ofertas 
                            img={ oferta.imagem }
                            texto={ oferta.text }
                            valor={ oferta.valor }
                        />
                    }) }
                </div>
            </div>
        </div>
    )
}