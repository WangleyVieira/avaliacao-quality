import { useState } from "react"
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

import './styles.css'

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    
    //chama o authService para realizar a autenticação
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const data = await login(email, password);
            localStorage.setItem('token', data.token);

            navigate('/cliente')

            console.log('Login realizado com sucesso:', data);
        } catch (error) {
            console.error('Erro no login:', error);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <hr />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChangeEmail} /><br />
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" value={password} onChange={handleChangePassword} />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </>
    )
}