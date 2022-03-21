import styles from './Ofertas.module.css'

export default function Ofertas({ img, texto, valor }) {
    return (
        <div className={ styles.oferta }>
            <div className={ styles.item }>
                <img src={ img } alt="Oferta" />
                <p>{ texto }</p>
                <p>R${ valor }</p>
            </div>
        </div>
    )
}