import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useState, FormEvent, ChangeEvent } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import { useDispatch } from 'react-redux';

import { SignUpContainer, Header} from './sign-up-form.styles'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { signUpStart } from '../../store/user/user.action';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm= () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    const dispatch = useDispatch()
    

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e)
        //confirm password matches
        if (password !== confirmPassword) {
            alert('Passwords Do Not Match')
            return;
        }
        try {
            dispatch(signUpStart(email,password,displayName))
            resetForm()
        } catch(error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert('User with this Email Already Exists')
            } else {
                console.log('User creation encountered an error', error)
            }
        }

        //see if user is authenticated
        // createUserDocumentFromAuth()


    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value})
    };

    return (
        <SignUpContainer>
            <Header>Don't have an account?</Header>
            <span>Sign Up with email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />  
                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password}/>  
                <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>  
                <Button type='submit'>Sign Up</Button>
            </form> 
        </SignUpContainer>
    )
}



export default SignUpForm