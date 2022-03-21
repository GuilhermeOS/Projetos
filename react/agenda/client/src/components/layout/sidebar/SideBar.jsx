import styles from './SideBar.module.css'

import perfil from '../../../img/perfil.png'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillContacts, AiFillPlusSquare, AiOutlineLogout } from 'react-icons/ai'

export default function SideBar() {
    return (
        <div className={ styles.sidebar }>
            <ul>
                <li><Link to={ "/" }><AiFillHome/></Link></li>
                <li><Link to={ "/contatos" }><AiFillContacts/></Link></li>
                <li><Link to={ "/novocontato" }><AiFillPlusSquare/></Link></li>
            </ul>
            <div className={ styles.img }>
                <img src={ perfil } alt="perfil" />
                <p>Estiabalda</p>
                <button><AiOutlineLogout/><span>Sair</span></button>
            </div>
            
        </div>
    )
}