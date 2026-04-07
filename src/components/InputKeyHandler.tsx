import type React from "react"

export default function InputKeyHandler() {

    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        console.log('tecla presionada', e.key)
    }
  return (
    <>
    <input type="text" onKeyDown={handleKey} />
    </>
  )
}
