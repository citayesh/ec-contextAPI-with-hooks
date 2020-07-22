import React, { useState } from 'react';
import {SignInContainer,SignInTitle,ButtonsBarContainer} from "./Signin.style"
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { auth, signInWithGoogle } from '../firebase/Firebase.utils';

function Signin(){
    const [state, setState] = useState({ email: "", password: "" });
    function handleChange(event){
        const {name,value}=event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    async function handleSubmit(event){
        event.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
    return(
<SignInContainer>
    <SignInTitle>I allready have an account</SignInTitle>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
    <FormInput 
    name="email"
     value={state.email} 
     type="email"
     lable="Email"
     handleChange={handleChange}
     required />
    <FormInput 
    name="password" 
    value={state.password} 
    type="password" 
    lable="Password"
    handleChange={handleChange} 
    required />
    <ButtonsBarContainer>
    <CustomButton type="submit">SIGN IN</CustomButton>
    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
    </ButtonsBarContainer>
    </form>
</SignInContainer>
)
}

export default Signin;
