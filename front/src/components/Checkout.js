import styled from "styled-components"
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, Elements } from '@stripe/react-stripe-js'
import AwesomeButton from './styles/AwesomeButton'


const CheckoutFormStyles = styled.form`
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    padding: 1rem;
    display: grid;
    grid-gap: 1rem;
`;

const stripeLib = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function Checkout() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('we gotta do some work')
    }

    return (
        <Elements stripe={stripeLib}>
            <CheckoutFormStyles onSubmit={handleSubmit}>
                <CardElement />
                <AwesomeButton>Check Out Now</AwesomeButton>
            </CheckoutFormStyles>
        </Elements>
    )
}

export { Checkout };
