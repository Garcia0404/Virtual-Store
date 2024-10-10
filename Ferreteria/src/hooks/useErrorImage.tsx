import {useState} from 'react'

export const useErrorImage = (url:string) => {
  const [imgSrc, setImgSrc] = useState(url)
  const handleErrorImage = () => {
    setImgSrc("https://nextui.org/images/hero-card.jpeg")
  }
  return {handleErrorImage,imgSrc}
}
