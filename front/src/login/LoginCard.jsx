import LoginForm from "./LoginForm";
import { Link, useNavigate } from "react-router-dom";


const LoginCard = () => {
 
    return (
        <>
            <div className="card bg bg-dark">
                <div className="card-header"><h5 className="text-white text-center">Iniciar Sesión</h5></div>
                <div className="card-body">
                    <LoginForm/>                    
                    <Link to="/LoginRegisterForm" className="text-center text-white mt-3">Crear Cuenta</Link>
                </div>
            </div>
        </>
    );
}

export default LoginCard;