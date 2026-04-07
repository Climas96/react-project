import { useState } from "react";
import EjemploUseEffect from "./EjemploUseEffect";

function App() {

  
const [mostrar,setMostrar] = useState(true);
    
        return (
          <>
          <h1>Prueba branch</h1>
          <input type="checkbox" defaultChecked={mostrar} onChange={e => setMostrar(e.target.checked)}/> Mostrar componente

          {mostrar ? <EjemploUseEffect/> : undefined}
        
         </>
        );
}

export default App