import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        console.log("Função executada com sucesso")
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            if(isLogged) {
                navigate('/')
            console.log("Navegação realizada com sucesso")

            } else {
                alert('credencias inválidas.');
            }
        }
        
    }

    return (
        <div>
            <h2>Página fechada</h2>
           
            <input 
                type="text" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite o seu email" 
            />
            <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                placeholder="Digite sua password" 
            />
            <button onClick={handleLogin}>Logar</button>
        </div>
      
    );
}