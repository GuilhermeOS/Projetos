import styles from './NavBar.module.css'

import logo from '../../../public/img/logo/logo.png'
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

export default function NavBar() {
    return (
        <header>
            <img src={ logo } alt="logo" />
            <ul className={ styles.lista }>
                <li><a href="#">Carro</a></li>
                <li><a href="#">Moto</a></li>
                <li><a href="#">Bike</a></li>
                <li><a href="#">Patins</a></li>
            </ul>

            <div className={ styles.buscar }>
                <input type="text" placeholder='Buscar' />
                <button>
                    <AiOutlineSearch />
                </button>
            </div>

            <div className={ styles.actions }>
                <AiOutlineUser className={ styles.item_action }/>
                <AiOutlineShoppingCart className={ styles.item_action }/>
            </div> 
        </header>
    )
}