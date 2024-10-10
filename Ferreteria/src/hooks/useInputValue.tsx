import { useState } from "react"
export const useInputValue = () => {
  const [value,setValue] = useState('')

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return {handleChange,value}
}
