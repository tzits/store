import { CardElement } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES} from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-forms.styles";

const PaymentForm = () => {
    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now </Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm