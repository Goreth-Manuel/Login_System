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
                onChange={e => setEmail(e.target.value)} 
                placeholder="Digite o seu email" 
                name="" id="" 
            />

            <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                placeholder="Digite sua password" 
                name="" id="" 
            />
            <button onClick={handleLogin}>Logar</button>
        </div>
      
    )
}