import type Persona from "./persona.model";


const Fila = ({persona, remover}: FilaProps) => {
  return (

      <tr>
                        <td>{persona.nombre}</td>
                        <td>{persona.departamento}</td>
                        <td><button onClick={()=> remover(persona)}>remover</button></td>
                    </tr>

  )
}

interface FilaProps{
  persona: Persona;
  remover: (p: Persona) => void;
}

export default Fila
