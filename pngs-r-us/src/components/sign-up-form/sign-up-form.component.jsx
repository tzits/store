
import { useState } from 'react';
import FormInput from '../form-input/form-input';
import Button from '../button/button.component'

import './sign-up-form.styles.scss'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm= () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        //confirm password matches
        if (password !== confirmPassword) {
            alert('Passwords Do Not Match')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
                )

            await createUserDocumentFromAuth(user, { displayName } ) 
            resetForm()
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('User Already Exists')
            } else {
                console.log(error)
            }
        }

        //see if user is authenticated
        // createUserDocumentFromAuth()


    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value})
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign Up with email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />  
                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password}/>  
                <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>  
                <Button type='submit'>Sign Up</Button>
            </form> 
        </div>
    )
}



export default SignUpForm