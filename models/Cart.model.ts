import mongoose, { Schema, Document } from 'mongoose';

interface CartType extends Document {
  userId: string;
  productId: string;
}

const CartSchema: Schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

CartSchema.index({ userId: 1, productId: 1 }, { unique: true });

const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);

export default Cart;
