import { useEffect, useState } from "react";
const EjemploUseEffect = () => {
const [clicks,setClicks] = useState(0);
    useEffect(() =>{
        console.log('componente ha cargado');

        return() => console.log('desmontando el componente')
    });
  return (
    <>
      <h2>Erik Climas Samano</h2>

      <div><button onClick={() => setClicks(clicks +1)}>me has clickeado {clicks} veces</button></div>
    </>
  )
}

export default EjemploUseEffect
