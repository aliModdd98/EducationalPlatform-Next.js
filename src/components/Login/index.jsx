import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { login } from './../../store/actions/auth';
import './LoginStyle.css'
import { useRouter } from 'next/router';
import { loginStart } from '@/store/slice/auth.slice';
function Home({login}) {
  
  const handleLogin = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        login(data);
      });
  };
const router=useRouter();
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    const pw1 = e.target.pswd1.value;
    const pw2 = e.target.pswd2.value;
    if (pw1 !== pw2) {
      alert("Passwords did not match");
    } else {
      alert("Password created successfully");
    }
  };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello")
    dispatch(loginStart(email, password));
    alert('Login Successfully!');
    router.push('/landingPage');
  };
  return (
  
    <div className="login">
    <div className={`containerLogin ${isSignUpActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUpFormSubmit}>
          <h1>Create Account</h1>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" name="pswd1" />
          <input type="password" placeholder="Confirm Password" name="pswd2" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <a href="#">Forgot your password?</a>
          <button onClick={handleLogin}>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <button className="ghost" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

const mapDispatchToProps = (dispatch) => {
return {
  login: (data) => dispatch(login(data)),
};
};

export default connect(null, mapDispatchToProps)(Home);