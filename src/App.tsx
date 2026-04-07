import { useState } from "react";
import EjemploUseEffect from "./EjemploUseEffect";

function App() {

  
const [mostrar,setMostrar] = useState(true);
    
        return (
          <>
          <input type="checkbox" defaultChecked={mostrar} onChange={e => setMostrar(e.target.checked)}/> Nuevo Mostrar componente

          {mostrar ? <EjemploUseEffect/> : undefined}
        
         </>
        );
}

export default App