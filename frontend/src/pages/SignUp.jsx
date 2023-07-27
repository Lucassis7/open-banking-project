// import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import Input from '../components/input'

function SignUp() {
  

  return (
    <>
      <Header userName={"Teste"} userDocument={"123456789-99"} />
      <h1>CADASTRO - OPEN BANKING</h1>
      <form>
        <Input inputProperties={{ label: "Nome: ", type: "text", name: "username" }} />
        <Input inputProperties={{ label: "E-mail: ", type: "email", name: "email" }} />
        <Input inputProperties={{ label: "CPF ou CNPJ: ", type: "text", name: "userDocument" }} />
        <Input inputProperties={{ label: "Senha: ", type: "password", name: "password" }} />
        {/* <button type="button" onClick={() => { console.log(user) }}>Debbug</button> */}
      </form>
    </>
  )

}

export default SignUp
