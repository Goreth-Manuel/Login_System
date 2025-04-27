import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auths } from "../../firebaseConfig";

export const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    createUserWithEmailAndPassword,
    loading,
  ] = useCreateUserWithEmailAndPassword(auths);

  const handleRegister = async () => {
    if (email && password) {
      try {
        const user = await createUserWithEmailAndPassword(email, password);
        if (user) {
          // Após cadastrar, já faz o login
          const isLogged = await auth.signin(email, password);
          if (isLogged) {
            navigate('/');
          }
        }
      } catch (e) {
        console.error('Erro ao cadastrar:', e);
        alert('Erro ao cadastrar. Tente novamente.');
      }
    } else {
      alert('Preencha o e-mail e a senha.');
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <h2>Cadastro</h2>
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
        placeholder="Digite sua senha" 
      />
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
};
