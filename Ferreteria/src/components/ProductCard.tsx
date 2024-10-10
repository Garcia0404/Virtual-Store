import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import ProductModal from "./ProductModal"
import { useErrorImage } from "../hooks/useErrorImage"
import { useAppContext } from "../context/AppContext"

export const ProductCard = (product: Products) => {
  const { name, images, price, id, type, description } = product
  const { handleErrorImage, imgSrc } = useErrorImage(images[0])
  const { addToCart } = useAppContext()
  return (
    <Card className="py-4 relative grid">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{type}</p>
        <small className="text-default-500 grid">
          <span className="whitespace-pre">ID: {id} ~ Precio: {price} soles ~ Stock: 10</span>
        </small>
        <h4 className="font-bold text-large">{name}</h4>
        <button className="absolute top-0 right-0 mx-3 mt-5">
          <svg onClick={() => addToCart(product)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8  hover:scale-125 active:scale-80 transition-all hover:text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </CardHeader>
      <CardBody className="overflow-visible py-2 mt-auto relative">
        <div className="absolute z-10 right-0 top-0 my-3 mx-4">
          <ProductModal description={description} name={name} id={id} price={price} />
        </div>
        <Image
          alt={name}
          className="object-cover rounded-xl z-0"
          onError={handleErrorImage}
          src={imgSrc}
          width='full'
        />
      </CardBody>
    </Card>
  )
}
