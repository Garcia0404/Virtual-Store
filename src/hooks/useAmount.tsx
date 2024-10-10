
import { useAppContext } from '../context/AppContext'

export const useAmount = (id:number) => {
  const { state } = useAppContext()
  const item = state.cartItems.find(item => item.id == id)
  if(item){
    return {amount:item.quantity}
  }else return {amount:0}
}