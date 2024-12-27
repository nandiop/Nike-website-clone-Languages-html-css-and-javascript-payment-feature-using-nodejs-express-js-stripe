

require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path = require('path');
const app = express();



app.use(express.json()); // Middleware to parse JSON bodies
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('cart-page.ejs');
});

app.post('/checkout', async (req, res) => {
    const { checkoutTotalPrice } = req.body; // Get total price from the request body
    const { totalItems } = req.body;

    if (!checkoutTotalPrice || checkoutTotalPrice <= 0) {
        return res.status(400).json({ error: 'Invalid total price' });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Cart Total',
                        },
                        unit_amount: Math.round(checkoutTotalPrice * 100), // Convert to cents
                    },
                    quantity: 1
                },
            ],
            mode: 'payment',
            shipping_address_collection: {
                allowed_countries: ['US', 'BR', 'IN'],
            },
            success_url: 'http://localhost:4080/complete?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:4080/cancel',
        });

        res.json({ url: session.url }); // Return the session URL
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/complete', async (req, res) => {
    try {
        const result = await Promise.all([
            stripe.checkout.sessions.retrieve(req.query.session_id, {
                expand: ['payment_intent.payment_method'],
            }),
            stripe.checkout.sessions.listLineItems(req.query.session_id),
        ]);

        console.log(JSON.stringify(result));

        res.send('Your payment was successful');
    } catch (error) {
        console.error('Error fetching session details:', error);
        res.status(500).send('Failed to complete the payment.');
    }
});

app.get('/cancel', (req, res) => {
    res.redirect('/');
});

app.listen(4080, () => console.log('Server started on port 4080'));