import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        
    }

    return (
        <div>
            <h2>Página fechada</h2>
           
            <input 
                type="text" 
                value={email} 
                placeholder="Digite o seu email" 
                name="" id="" 
            />

            <input 
                type="password" 
                value={password} 
                placeholder="Digite sua password" 
                name="" id="" 
            />
            <button onClick={handleLogin}>Logar</button>
        </div>
      
    )
}