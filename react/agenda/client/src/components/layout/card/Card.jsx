import styles from './Card.module.css'
import perfil from '../../../img/perfil.png'
import { BsFillTrashFill } from 'react-icons/bs'
import axios from 'axios'

export default function Card({ id, nome, sobrenome, email, telefone, estado, cidade, handleRemove }) {
    
    const remove = () => {
        handleRemove(id)
    }

    return (
        <div className={ styles.card }>
            <img src={ perfil } alt="" />
            <h4>{ nome } { sobrenome }</h4>
            <p>
                <span>Email:</span> { email }
            </p>
            <p>
                <span>Telefone:</span> { telefone }
            </p>
            <p>
                { cidade }/{estado}
            </p>
            <div className={ styles.card_actions }>
                <button onClick={ remove }>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}