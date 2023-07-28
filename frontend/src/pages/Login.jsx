import { useState } from 'react'
import '../App.css'
// import Header from '../components/Header'
// import Input from '../components/input'

function Login() {
  let [userLogin, setUserLogin] = useState({
    userDocument: '',
    password: ''
  })

  const handleChange = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <h1>LOGIN</h1>
      <form>
        <label htmlFor="">Login: 
          <input type="text" name="userDocument" value={userLogin.userDocument} onChange={handleChange} />
        </label>
        <label htmlFor="">Senha: 
          <input type="password" name="password" value={userLogin.password} onChange={handleChange} />
        </label>
        <button type="submit">
          Entrar
        </button>
      </form>
    </>
  )
}

export default Login
