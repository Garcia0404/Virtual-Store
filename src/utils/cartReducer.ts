
export const cartReducer = (state:StateReducer,action:ActionReducer):StateReducer => {
  switch(action.type){
    case 'add_to_cart':{
    //Obteniendo el producto 
    const product = action.payload;
    // Verificando si el producto está en el carrito
    const existingProductIndex = state.cartItems.findIndex((item:ItemCart) => item.id == product.id)
    //Si ya existe en el carrito
    if(existingProductIndex>=0){
      const updateCartItems = [...state.cartItems];
      updateCartItems[existingProductIndex]={
        ...updateCartItems[existingProductIndex],
        quantity:updateCartItems[existingProductIndex].quantity+1
      }
      return {
        ...state,
        cartItems:updateCartItems,
        totalItems:state.totalItems +1,
        totalPrice: state.totalPrice + product.price
      }
    }
    //Si es producto nuevo 
    return {
      ...state,
      cartItems: [...state.cartItems, {name:product.name,price:product.price,img:product.images[0],id:product.id, quantity: 1 }],
      totalItems:state.totalItems +1,
      totalPrice:state.totalPrice + product.price
    }
    }
    case 'remove_from_cart':{
      const product = action.payload
      const updatedProducts = state.cartItems.filter((item:ItemCart) => item.id != product.id)
      const productToRemove = state.cartItems.find((item:ItemCart) => item.id == product.id)
      //Validando que productToRemove no sea undefined
      const quantity = productToRemove?productToRemove?.quantity:0
      const price = productToRemove?productToRemove.price:0
      return {
        ...state,
        cartItems:updatedProducts,
        totalItems:state.totalItems - quantity,
        totalPrice:state.totalPrice - price*quantity,
      }
    }
    case 'update_quantity':{
      const {id,quantity} = action.payload
      const updatedItems = state.cartItems.map((item:ItemCart) => item.id == id? {...item,quantity:quantity}:item)
      const product = state.cartItems.find((item:ItemCart) => item.id == id)
      if(product && quantity){
        const priceDifference = (quantity - product.quantity) * product.price
        return {
          ...state,
          cartItems:updatedItems,
          totalItems:state.totalItems + (quantity - product.quantity),
          totalPrice:state.totalPrice + priceDifference
        }
      } return state
    }
    default:
      return state;
  }
}
export const initialState = {
  cartItems:[],
  totalItems:0,
  totalPrice:0
}