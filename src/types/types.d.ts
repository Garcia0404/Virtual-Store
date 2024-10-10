type Products = {
  name: string;
  type: string;
  images: string[];
  id: number;
  description: string;
  price: number;
};
type ProductsAPI = {
  title: string;
  category: {
    name:string
  };
  images: string[];
  id: number;
  description: string;
  price: number;
};
interface ItemCart {
  name: string;
  price: number;
  img: string;
  id: number;
  quantity: number;
}
interface StateReducer {
  cartItems: ItemCart[];
  totalItems: number;
  totalPrice: number;
}
type ActionReducer =
  | { type: "add_to_cart"; payload: Products }
  | { type: "remove_from_cart"; payload: ItemCart }
  | { type: "update_quantity"; payload: { id: number; quantity: number } };
interface AppContextType {
  cartItems: Products[];
  setCartItems: React.Dispatch<React.SetStateAction<Products[]>>;
  cartItemsAmount: ([] | [number, number])[];
  setCartItemsAmount: React.Dispatch<
    React.SetStateAction<([] | [number, number])[]>
  >;
  addToCart:(product: Products) => void
  removeFromCart: (product: ItemCart) => void
  updateQuantity: (id: number, quantity: number) => void
  state: StateReducer
}
