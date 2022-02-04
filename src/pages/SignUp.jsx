import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

//components
import Loader from '../components/Loader'

//styles
import '../styles/SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [userImageName, setUserImageName] = useState('Upload profile image')
  const [imageError, setImageError] = useState(null);
  const {signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(email, password, displayName, userImage)
  }

  const handleFile = (e) => {
    setUserImage(null);

    let selected = e.target.files[0];
    if (!selected) {
      setImageError("Please select an image");
      setUserImageName('Upload profile image');
      return;
    }

    if (!selected.type.includes('image')) {
      setImageError('Selected file must be an image');
      setUserImageName('Upload profile image');
      return;
    }

    if (selected.size > 5242880) {
      setImageError('Image file size must be less than 5mb');
      setUserImageName('Upload profile image');
      return;
    }

    setImageError(null);
    setUserImage(selected);
    setUserImageName(selected.name)
  }


  return (
    <form className='auth-form' onSubmit={handleSubmit}>
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
        <span>{userImageName}</span>
        <input type="file" required className='file-input' onChange={handleFile}/>
      </label>
      {imageError && <div className='img-error'>{imageError}</div>}
      {!isPending && <button className='signup-button'>Sign Up</button>}
      {isPending && <Loader />}
      {error && <div className='img-error'>{error}</div>}
    </form>
  );
};

export default SignUp;
