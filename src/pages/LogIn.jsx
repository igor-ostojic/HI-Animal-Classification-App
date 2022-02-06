import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

//components
import Loader from '../components/Loader'

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    login (email, password);
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
    <h2>Log In</h2>
    <label>
      <span>email :</span>
      <input type="text" required onChange={(e) => setEmail(e.target.value)}/>
    </label>
    <label>
      <span>password :</span>
      <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
    </label>
    {!isPending &&<button className='signup-button'>Log in</button>}
    {isPending && <Loader />}
    {error && <div className='img-error'>{error}</div>}
  </form>
  );
};

export default LogIn;
