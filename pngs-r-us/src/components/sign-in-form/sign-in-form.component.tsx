
import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { SignInContainer, ButtonsContainer, Header} from './sign-in-form.styles'


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm= () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const dispatch = useDispatch()

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())    
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //confirm password matches
        try {
            dispatch(emailSignInStart(email, password))
            resetForm()
        } catch(error) {
            console.log(error)
            }
        }

    

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value})
    };

    return (
        <SignInContainer>
            <Header>I already have an account</Header>
            <span>Sign in with email and Password</span>
            <form onSubmit={(e) => handleSubmit}>
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />  
                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password}/>  
                <ButtonsContainer>
                    <Button type='submit'>SIGN IN</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
                </ButtonsContainer>
                {/* <Button buttonType={'google'}>SIGN IN WITH GOOGLE</Button> */}
            </form> 
        </SignInContainer>
    )
}



export default SignInForm