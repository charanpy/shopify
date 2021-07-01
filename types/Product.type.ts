export interface RecommendationProduct {
  _id: string;
  name: string;
  image: string;
  price: number;
}

export interface Product extends RecommendationProduct {
  category: string;
  stock: string;
  specificity: string;
  description?: string;
}

export interface CartProduct extends Product, RecommendationProduct {}

export interface Cart {
  productId: CartProduct;
  userId?: string;
}
