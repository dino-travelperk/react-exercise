import { useState } from 'react'

const useInputState = (initialVal?: any) => {
  const [value, setValue] = useState<any>(initialVal)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const reset = () => {
    setValue('')
  }

  return [value, handleChange, reset]
}

export default useInputState
