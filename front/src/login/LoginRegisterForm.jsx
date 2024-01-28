import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { connectionData } from "../connection/apiConnection"
import {  toast } from "react-toastify";


const LoginRegisterForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const handleForm = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      console.error("Por favor, complete todos los campos del formulario")
      return
    }
    try {

        const res = await connectionData('register',"POST",{email,password})

        if (res.ok) {

            toast.success("Post creado correctamente");
           
          }

      
    } catch (error) {
      console.log("Problema con al APPI", error)
    }
  }


    return(    
            <>
            <div className="container">
            <div className="row bg bg-dark vh-100">
              <div className="col d-flex justify-content-center align-items-center vh-100">
   

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
                <input className="form-control mt-5" type="submit" value={"Registrar"}/>
                </form>
              </div>
            </div>
          </div>
        </>
    
)   
}

export default LoginRegisterForm;
