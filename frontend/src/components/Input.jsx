// import { useState } from "react";

// function Input({ inputProperties }) {
//   let [userLogin, setUserLogin] = useState({
//     userLogin: '',
//     userPassword: ''
//   })

//   let [user, setUser] = useState({
//     username: '',
//     email: '',
//     userDocument: '',
//     password: ''
//   })

//   const handleChange = (event) => {
//     const userEvent = event.target.name;
//     console.log(userEvent)
//     if (userEvent == 'userLogin' || userEvent == 'userPassword') {
//       console.log('entrei aqui?')
//       setUserLogin({
//         ...userLogin,
//         [event.target.name]: event.target.value,
//       })
//     } else {
//       setUser({
//         ...user,
//         [event.target.name]: event.target.value, 
//       });
//       console.log("alterando")
//     }
//   }

//   return (
//     <label htmlFor=""> {inputProperties.label}
//       <input 
//         type={inputProperties.type}
//         name={inputProperties.name}
//         value={user.username > 0 ? user[inputProperties.name] : userLogin[inputProperties.name]}
//         onChange={handleChange}
//       />
//     </label>
//   );
// } 

// export default Input;
