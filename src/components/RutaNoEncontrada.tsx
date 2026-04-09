import { useEffect } from "react"
import { Navigate, useLocation } from "react-router"

const RutaNoEncontrada = () => {
    const location = useLocation();
    useEffect(()=>{
        console.log(`ruta no encontrada ${location.pathname}`)
    },[location])
  return (
    <Navigate to="/"/>
  )
}

export default RutaNoEncontrada
