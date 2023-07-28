// import { useState } from 'react'
import { useState } from 'react'
import '../App.css'
// import Header from '../components/Header'
// import Input from '../components/input'

function SignUp() {
  let [user, setUser] = useState({
    username: '',
    email: '',
    userDocument: '',
    password: ''
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <h1>CADASTRO - OPEN BANKING</h1>
      <form>
        <label htmlFor="">Nome: 
            <input type="text" name="username" value={user.username} onChange={handleChange} />
          </label>
          <label htmlFor="">E-mail: 
            <input type="email" name="email" value={user.email} onChange={handleChange} />
          </label>
          <label htmlFor="">CPF ou CNPJ: 
            <input type="text" name="userDocument" value={user.userDocument} onChange={handleChange} />
          </label>
          <label htmlFor="">Senha: 
            <input type="password" name="password" value={user.password} onChange={handleChange} />
          </label>
          <button type="submit">
            Cadastrar
          </button>
      </form>
    </>
  )

}

export default SignUp
