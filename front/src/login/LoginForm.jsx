import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { connectionData } from "../connection/apiConnection"  
import {  toast } from "react-toastify"
import { Link } from "react-router-dom"



const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  /*const emailFixed = "user@gmail.com"*/
  /*const passwordFixed = "password"*/
  const navigate = useNavigate()
  const handleForm = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      console.error("Por favor, complete todos los campos del formulario")
      return
    }
    try {

        const res = await connectionData('login',"POST",{email,password})

        if (res.ok) {
          const data = await res.json();
          const token = data.token;
          console.log(token)

          localStorage.setItem('user', JSON.stringify({ email, token }));

            toast.success("Ingresó correctamente");

            //storege the user in session
            sessionStorage.setItem('loggedInUser', JSON.stringify({ email }));
            navigate('/menu/campgrounds');
           
          }

      
    } catch (error) {
      console.log("Problema con al APPI", error)
    }
  }
  return (
    <>
      <form onSubmit={(e) => handleForm(e)}>
        <label className="text-white">Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-white">Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="form-control mt-5" type="submit" value={"Ingresar"}/>
      </form>
    </>
  )
}

export default LoginForm
