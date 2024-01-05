import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";


const LoginCard = () => {
    const navigate = useNavigate();


    const handleLogOut= () => {
        localStorage.removeItem('user');
        navigate('/LoginFormRegister');
    
    }

    return (
        <>
            <div className="card bg bg-dark">
                <div className="card-header"><h5 className="text-white text-center">Login</h5></div>
                <div className="card-body">
                    <LoginForm/>
                    <p className="text-center text-white mt-3">Iniciar Sesión</p>
                    <a onClick={handleLogOut} className="text-center text-white mt-3">Crear Cuenta</a>
                </div>
            </div>
        </>
    );
}

export default LoginCard;