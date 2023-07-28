import { useState } from "react"
import Header from "../components/Header"

function Profile() {
  let [userUpdate, setUserUpdate] = useState({
    username: '',
    email: '',
    userDocument: '',
    password: ''
  })

  const handleChange = (event) => {
    setUserUpdate({
      ...userUpdate,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div>
      <Header />
      <form>
        <label htmlFor="">Nome: 
          <input type="text" name="username" value={userUpdate.username} onChange={handleChange} />
        </label>
        <label htmlFor="">E-mail: 
          <input type="email" name="email" value={userUpdate.email} onChange={handleChange} />
        </label>
        <label htmlFor="">CPF ou CNPJ: 
          <input type="text" name="userDocument" value={userUpdate.userDocument} disabled />
        </label>
        <label htmlFor="">Senha: 
          <input type="password" name="password" value={userUpdate.password} onChange={handleChange} />
        </label>
        <button type="submit">
          Editar Informações
        </button>
        <button type="submit">
          Deletar Conta
        </button>
      </form>
    </div>
  )
}

export default Profile
