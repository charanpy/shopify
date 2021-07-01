import Cart from '@/models/Cart.model';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51HT5nIDKV0ASSP3YWHzMBlox7Zhvwn1bq2liI7RNVmSSWqIP3KALx3nko4EdIwumBAEWziLUzpINoHzhmeYg7NBX00sPJX4Ahm',
  {
    apiVersion: '2020-08-27',
  }
);

const paymentHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return;
  try {
    const { amount, userId } = req.body;
    if (amount > 2000) {
      throw new Error('Test limit exceed');
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Shopify',
              images: ['https://i.imgur.com/EHyR2nP.png'],
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/cart?success=true`,
      cancel_url: `http://localhost:3000/cart?canceled=true`,
    });

    await Cart.updateMany({ userId }, { paid: true });
    return res.status(200).json({
      session,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: 'Server error' });
  }
};

export default paymentHandler;
