import {Navigate, useLoaderData} from 'react-router-dom';
import {LoginCard, LoginScreenStyled} from "./login.screen.styled";
import truck from "/src/assets/images/back.jpg";
import logo from "/src/assets/logo_completo.svg";
import useInput from "../../utils/hooks/useInput.js";
import {PasswordValidator, UserValidator} from "./login.screen.validators.js";
import Input from "../../components/shared/Input/Input.jsx";
import {ScreenTitle} from "../../styles/StyledTexts.styled";

function Login() {
    const loadedData = useLoaderData();
    const inputUser = useInput('user', 'Usuario', 'Nombre de usuario', '', 'text', UserValidator);
    const inputPassword = useInput('user', 'Usuario', 'Nombre de usuario', '', 'password', PasswordValidator);
    
    const handleLogin = async (event) => {
        event.preventDefault();
    }
    
    return (
        <>
            {
                loadedData.user ? (
                    <Navigate to={"/"} replace/>
                ) : (
                    <LoginScreenStyled>
                        <LoginCard>
                            
                            <div className="image-container">
                                <img src={truck} alt="Transportadora Cuahutemoc"/>
                            </div>
                            
                            <form>
                                <ScreenTitle>Iniciar Sesión</ScreenTitle>
                                <input type="text" placeholder={'Nombre de usuario'}/>
                                <input type="password" placeholder={'Password'}/>
                            </form>
                        
                        </LoginCard>
                        
                        
                    </LoginScreenStyled>
                )
            }
        </>
    )
}

export default Login;
