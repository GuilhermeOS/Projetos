import styles from './Contatos.module.css'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../../components/layout/card/Card'

export default function Contatos() {

    const [ contatos, setContatos ] = useState([]);

    useEffect(() => {
        getContatos();
    }, []);

    const getContatos = async () => {
        const response = await axios.get('http://localhost:5000/contatos');
        setContatos(response.data)
    }

    const deleteContato = async (id) => {
        await axios.delete(`http://localhost:5000/contatos/${id}`)
    }

    return (
        <div className={ styles.container }>
            <h1>Contatos</h1>
            <div className={ styles.cards }>
                { contatos.map((contato) => (
                    <Card 
                        id={ contato.id }
                        nome={ contato.nome }
                        sobrenome={ contato.sobrenome }
                        email={ contato.email }
                        telefone={ contato.telefone }
                        estado={ contato.estado }
                        cidade={ contato.cidade }
                        handleRemove={ deleteContato }
                        key={ contato.id }
                    />
                )) }
            </div>
            
        </div>
    )
}