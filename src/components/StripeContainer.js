import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentFrom"

const PUBLIC_KEY = "pk_test_51PKgYvIBgeEIZAi829oOHlSvx5XWHZDVZ7hVIn0JsO51V5Ix6MW2C7oTlb7tHzkjrYcavCQU3jDOXvMg0PBYqUQZ00YohZwqnh"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}