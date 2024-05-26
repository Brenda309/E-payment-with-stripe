import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"; 

const PUBLIC_KEY = 'pk_test_51PKgYvIBgeEIZAi829oOHlSvx5XWHZDVZ7hVIn0JsO51V5Ix6MW2C7oTlb7tHzkjrYcavCQU3jDOXvMg0PBYqUQZ00YohZwqnh'

const stripTestPromise = loadStripe(PUBLIC_KEY);
export default function stripeConntainer(){
    return (
  
<Elements stripe={stripTestPromise}>
    <PaymentFrom />
</Elements>
        
    )
}