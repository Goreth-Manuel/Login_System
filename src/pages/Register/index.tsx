import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auths, db } from "../../firebaseConfig";

import { set, ref } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Register = () => {
  // const auth = useContext(AuthContext);
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
    if (!email || !password) {
      alert('Preencha o e-mail e a senha.');
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auths, email, password);
      const userId = userCredential.user.uid;
  
      const userData = {
        name: "Pedro Franco",
        email: email,
        phone: "244 989456767",
      };
      
      await set(ref(db, `/${userId}`), userData);
  
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Erro ao cadastrar. Verifique o email e senha.');
    }
  };
  
 
  return (
    <div>
      <h2>Cadastro</h2>
      {/* <input 
        type="text" 
        value={name} 
        onChange={e => setEmail(e.target.value)}
        placeholder="Digite o seu email" 
      /> */}
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
