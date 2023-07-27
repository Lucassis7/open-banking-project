import { Link } from 'react-router-dom'
import '../App.css'

function Header({ userName, userDocument }) {

  const navBarPagesContent = [
    {
      pageName: "Início",
      URL: "/",
    },
    {
      pageName: "Cadastro",
      URL: "/signup",
    },
    {
      pageName: "Login",
      URL: "/login",
    },
    // {
    //   pageName: "Extrato",
    //   URL: "/statement",
    // },
  ]

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "100px" }}>
      <h3>{userName}</h3>
      <h3>{userDocument}</h3>
      {/* <Link to={"/"}>Início</Link> */}
      {navBarPagesContent.map((element) => {
          return (
            <Link key={element.URL} to={element.URL}>{element.pageName}</Link>
          )
      })}
      <button type="button">Logout</button>
    </div>
  )
}

export default Header
