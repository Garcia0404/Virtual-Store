import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { cartReducer, initialState } from '../utils/cartReducer';
const AppContext = createContext<AppContextType|undefined>(undefined);
export const AppProvider = ({children}:{children:JSX.Element|JSX.Element[]}) => {
  const [cartItems, setCartItems] = useState<Products[]|[]>([])
  const [cartItemsAmount,setCartItemsAmount] = useState<([] | [number, number])[]>([])
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product:Products) => {
    dispatch({type:'add_to_cart',payload:product})
  }
  const removeFromCart = (product:ItemCart) => {
    dispatch({type:'remove_from_cart',payload:product})
  }
  const updateQuantity = (id:number,quantity:number) => {
    dispatch({type:'update_quantity',payload:{id,quantity}})
  }
  useEffect(() => {
    console.log(state.cartItems)
  },[state.cartItems])
  return (
    <AppContext.Provider value={{cartItems,setCartItems,cartItemsAmount,setCartItemsAmount,addToCart,removeFromCart,updateQuantity,state}}>
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => {
  const context = useContext(AppContext)
  if(context){
    return context
  } else{
    throw new Error('useAppContext must be used within an AppProvider')
  }
}