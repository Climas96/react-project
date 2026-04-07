

function App() {

  
        return (
          <>
          <input type="checkbox" defaultChecked={mostrar} onChange={e => setMostrar(e.target.checked)}/> Nuevo Mostrar componente

          {mostrar ? <EjemploUseEffect/> : undefined}
        
         </>
        );
}

export default App