import Ofertas from '../../layout/ofertas/Ofertas'
import Card from '../../layout/cards/Card'
import styles from './Home.module.css'

import { useEffect, useState, useRef } from 'react'

import { IoMdArrowDropleft, IoMdArrowDropright }  from 'react-icons/io'

export default function Home() {

    const [ produtos, setProdutos ] = useState([]);
    const carrosel = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3000/static/produtos.json')
            .then((response) => response.json())
            .then(setProdutos)
    }, [])

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carrosel.current.scrollLeft += carrosel.current.offsetWidth;
    }

    return (
        <div className={ styles.container }>
            <div className={ styles.content }>
                <h1>Ofertas da Semana</h1>
                <div className={ styles.carrosel } ref={ carrosel } >
                    { produtos.map((produto) => {

                        const { id, image, text, valor } = produto;

                        return (
                            <Ofertas 
                                key={ id }
                                img={ image }
                                texto={ text }
                                valor={ valor } 
                            />
                        )
                    }) }
                    <div className={ styles.buttons }>
                        <button className={ styles.button } onClick={ handleLeftClick }><IoMdArrowDropleft/></button>
                        <button onClick={ handleRightClick }><IoMdArrowDropright/></button>
                    </div>
                </div>
                <h2>Novos Produtos</h2>
                <div className={ styles.cards }>
                    { produtos.map((produto) => {
                        const { id, image, text, valor } = produto;

                        return (
                            <Card 
                                key={ id }
                                img={ image }
                                texto={ text }
                                valor={ valor }
                            />
                        )
                    }) }
                    
                </div>
            </div>
        </div>
    )
}