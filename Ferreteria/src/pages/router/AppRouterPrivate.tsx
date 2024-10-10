import { Navigate } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { HomePage } from "../HomePage"
import { Header } from "../../components"
import { ShoppingCart } from "../../components/ShoppingCart"
interface Props {
  isAuthenticated: boolean
}
export const AppRouterPrivate = ({ isAuthenticated }: Props) => {
  return isAuthenticated ?
    <>
      <Header />
      <div className="fixed bottom-0 right-0 z-20 scale-110 my-3 mx-4 lg:hidden">
        <ShoppingCart />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </>
    : <Navigate to="/login" />
}
