export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  detail: string;
}

export interface CartItem extends Product {
  quantity: number;
}
