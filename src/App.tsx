

function App() {

  
        return (
          <>
          <h1>Prueba branch</h1>
          <input type="checkbox" defaultChecked={mostrar} onChange={e => setMostrar(e.target.checked)}/> Mostrar componente

          {mostrar ? <EjemploUseEffect/> : undefined}
        
         </>
        );
}

export default App