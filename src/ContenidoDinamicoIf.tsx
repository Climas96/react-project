
export default function ContenidoDinamicoIf(props: contenidoDinamicoIfProps) {
    if (props.calificacion > 90){


        return (
        <div>
            <h3 style={{color: 'blue'}}> Excelente calificación</h3>
        </div>
      )
    } else if ( props.calificacion >= 80 && props.calificacion <=90){
        return(
            <h3>Muy bien hecho!</h3>
        )
    }else {
        return(
            <h3>puedes volver a intentarlo <button>Reintentar</button></h3>
        )
    }
}


interface contenidoDinamicoIfProps{
    calificacion: number;
}