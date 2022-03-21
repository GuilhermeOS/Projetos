import styles from './Form.module.css'

import Input from '../../form/Input'
import SubmitButton from '../../form/SubmitButton'
import { useState } from 'react'

export default function Form({ handleSubmit, btnText }) {

    const [ user, setUser ] = useState({})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(user)
    }

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={ submit }>
            <Input 
                type="text"
                text="Nome"
                name="nome"
                placeholder="Nome"
                handleOnChange={ handleChange }
                value={ user.nome ? user.nome : ""}
            />
            <Input 
                type="text"
                text="Sobrenome"
                name="sobrenome"
                placeholder="Sobrenome"
                handleOnChange={ handleChange }
                value={ user.sobrenome ? user.sobrenome : ""}
            />
            <Input 
                type="email"
                text="E-mail"
                name="email"
                placeholder="email@gmail.com"
                handleOnChange={ handleChange }
                value={ user.email ? user.email : ""}
            />
            <Input 
                type="tel"
                text="Telefone"
                name="telefone"
                placeholder="(48) 90000-0000"
                handleOnChange={ handleChange }
                value={ user.telefone ? user.telefone : ""}
            />
            <Input 
                type="text"
                text="Estado"
                name="estado"
                placeholder="Estado"
                handleOnChange={ handleChange }
                value={ user.estado ? user.estado : ""}
            />
            <Input 
                type="text"
                text="Cidade"
                name="cidade"
                placeholder="Cidade"
                handleOnChange={ handleChange }
                value={ user.cidade ? user.cidade : ""}
            />

            <SubmitButton text={ btnText } />
        </form>
    )
}