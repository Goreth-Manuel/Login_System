import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { uid } from "uid";
import { set, ref } from "firebase/database";

export const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleRegister = async () => {
  //   if (email && password) {
  //     try {
  //         // Após cadastrar, já faz o login
  //         const isRegistered = await auth.signin(email, password);
  //         if (isRegistered) {
  //           navigate('/');
  //         }
  //     } catch (e) {
  //       console.error('Erro ao cadastrar:', e);
  //       alert('Erro ao cadastrar. Tente novamente.');
  //     }
  //   } else {
  //     alert('Preencha o e-mail e a senha.');
  //   }
  // };

  const handleRegister = async () => {
    const uuid = uid();
    set(ref(db, `/{uuid}`), {
      email,
      uuid,
    });
    setEmail('');
  };

 
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
