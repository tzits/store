import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input';

import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form copy/sign-in-form.component';

const Authentication = () => {

    return (
        <div className=''>
            <SignInForm />
            <SignUpForm />
        </div>

    



    )
}

export default Authentication