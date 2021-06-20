import mongoose, { Schema } from 'mongoose';

const ProductSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'product name is required'],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    description: {
      type: String,
    },
    stock: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      required: [true, 'product image is required'],
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    brand: {
      type: String,
    },
    specificity: {
      type: String,
      enum: [
        'male',
        'female',
        'children',
        'child',
        'baby',
        'all',
        'men',
        'women',
      ],
      default: 'all',
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
