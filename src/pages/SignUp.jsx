import { useState } from 'react';

//styles
import '../styles/SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [userImage, setUserImage] = useState(null);

  return (
    <form className='auth-form'>
      <h2>Sign Up</h2>
      <label>
        <span>email :</span>
        <input type="text" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </label>
      <label>
        <span>password :</span>
        <input type="password" required onChange={(e)=>setPassowrd(e.target.value)} value={password}/>
      </label>
      <label>
        <span>display name :</span>
        <input type="text" required onChange={(e)=>setDisplayName(e.target.value)} value={displayName}/>
      </label>
      <label className='file-input-label'>
        <span>upload profile image</span>
        <input type="file" required className='file-input'/>
      </label>
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;
