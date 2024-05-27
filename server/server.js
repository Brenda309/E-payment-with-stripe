const env = require('dotenv').config
const express = require('express');
const cors = require('cors');
const stripe = require('stripe');
// const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/payment', async (req, res) => {
    const { amount, id } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
           payment_method_types:[card],
           mode: 'payment',
           success_url : `${process.env.SERVER_URL}/success.html`,
           cancel_url:  `${process.env.SERVER_URL}/cancel.html`

        });

        res.status(200).json({
            success: true,
            payment,
        });
    } catch (error) {
        console.error('Error', error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})