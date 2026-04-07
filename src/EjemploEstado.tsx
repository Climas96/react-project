import type React from "react";
import { useState } from "react";
import Header from "./Header";
import MostrarTexto from "./MostrarTexto";

function EjemploEstado() {
  console.log('renderizando el componente App')

  const [texto, setTexto] = useState('')
  let texto2 = '';
  console.log(texto2);
  const manejarClick = ()=> alert('has clickeado');
  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {


    texto2 = e.currentTarget.value;
    
    setTexto(e.currentTarget.value);
  }

        return (
          <>
          
          <Header/>
          <button onClick={manejarClick}>Clickeame</button>

          <div>
            <input onKeyUp={(e) => manejarKeyUp(e)} />
          </div>
         <MostrarTexto texto={texto}/>
</>
        );
}

export default EjemploEstado;
