import mongoose, { Schema } from 'mongoose';

const CategorySchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      unique: true,
    },
    image: {
      type: String,
      required: [true, 'Category image is required'],
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default Category;
