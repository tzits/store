
import { useState } from 'react';
import FormInput from '../form-input/form-input';
import Button from '../button/button.component'
import './sign-in-form.styles.scss'

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm= () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //confirm password matches
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
            resetForm()
        } catch(error) {

            }
        }

        //see if user is authenticated
        // createUserDocumentFromAuth()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value})
    };

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />  
                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password}/>  
                <div className='buttons-container'>
                    <Button type='submit'>SIGN IN</Button>
                    <Button buttonType='google' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>
                </div>
                {/* <Button buttonType={'google'}>SIGN IN WITH GOOGLE</Button> */}
            </form> 
        </div>
    )
}



export default SignInForm