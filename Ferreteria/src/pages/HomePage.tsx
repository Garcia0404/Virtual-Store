import { useEffect, useState } from "react"
import { ProductCard } from "../components/ProductCard"
import { Divider } from "@nextui-org/react"
export const HomePage = () => {
  const [data,setData] = useState<ProductsAPI[]>()
  const getProducts = async() => {
    try{
      const response  = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()
      return data
    } catch(e){
      console.error(e)
    }
  }
  useEffect(() => {
    getProducts().then(res => setData(res))
  },[])
  useEffect(() => {
    console.log(data)
  },[data])
  return (
    <main className="max-w-5xl mx-auto px-6">
      <Divider/>
      <h1 className="text-2xl font-bold mt-8 mb-6">Productos</h1>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          data && data.map((item) => (
            <ProductCard key={item.id} name={item.title} images={item.images} id={item.id} type={item.category.name} description={item.description} price={item.price}/>
          ))
        }
      </div>
    </main>
  )
}
