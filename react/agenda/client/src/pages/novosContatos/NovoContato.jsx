import styles from './NovoContato.module.css'

import Form from "../../components/project/form/Form"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function NovoContato() {

    let history = useNavigate();

    async function createPost(user) {
        await axios.post('http://localhost:5000/contatos', {
            nome: user.nome,
            sobrenome: user.sobrenome,
            email: user.email,
            telefone: user.telefone,
            estado: user.estado,
            cidade: user.cidade
        });

        console.log(user)

        history("/contatos")
    }

    

    return (
        <div className={ styles.container }>
            <h1>Adicionar Contato</h1>
            <Form handleSubmit={ createPost } btnText="Adicionar"/>
        </div>
    )
}