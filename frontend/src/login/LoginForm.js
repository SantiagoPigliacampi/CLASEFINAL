import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const emailFixed = 'user@gmail.com';
    const passwordFixed = 'password';
    const navigate = useNavigate();
    const handleForm = async (e) => {
        
        e.preventDefault();
        if(!email   || !password) {
            console.error('Por favor, complete todos los campos del formulario');
            return;
        }
        try {
            //const result = await fetch
            //lo que esta comentado LO VI EN CLASE 62 12-12-2023 - 1HORA 22 MINUTOS 40 SEGUNDS
            //const user = await connectionData(endpoint,'users/login','POST',formData);
            if(email === emailFixed && password === passwordFixed){
                //const setting = await connectionData(endpoint,'settings','GET',{id:user.id});
                //console.log(settings);
                const user = {email:email,password:password};
                localStorage.setItem('user',JSON.stringify(user));
                //console.log('entro');
                navigate('/menu');
            } else {
                navigate('/login');
                console.log('Usuario y Password incorrecto');
            }
            
        } catch (error) {
            console.log('Problema con al APPI',error);
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
                    onChange={(e) => setEmail(e.target.value)}/>
               <label className="text-white">Password</label>
               <input 
                    className="form-control" 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}/>
                <input 
                    className="form-control mt-5" 
                    type="submit"/>
            </form>
        </>
    );
}

export default LoginForm;