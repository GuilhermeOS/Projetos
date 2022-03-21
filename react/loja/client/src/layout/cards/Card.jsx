import styles from './Card.module.css'

export default function Card({ img, texto, valor }) {
    return (
        <div className={ styles.card }>
            <img src={ img } alt="Produto" />
            <h3>{ texto }</h3>
            <p>R${ valor }</p>
        </div>
    )
}