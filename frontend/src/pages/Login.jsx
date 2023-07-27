import '../App.css'
import Header from '../components/Header'
import Input from '../components/input'

function Login() {
  return (
    <>
      <Header userName={"Teste"} userDocument={"123456789-99"} />
      <h1>LOGIN</h1>
      <Input inputProperties={{ label: "CPF ou CNPJ: ", type: "email", name: "userLogin" }}/>
      <Input inputProperties={{ label: "Senha: ", type: "password", name: "userPassword" }}/>
    </>
  )
}

export default Login
