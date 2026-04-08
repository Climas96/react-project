import type Pelicula from '../models/pelicula.model';
import { PeliculaIndividual } from './PeliculaIndividual';
import styles from './ListadoPeliculas.module.css';
import { ListadoGenerico } from '../../../components/ListadoGenerico';

export const ListadoPeliculas = (props: ListadoPeliculasProps) => {
  return (
    <ListadoGenerico<Pelicula>
      listado={props.peliculas}
      listadoVacioUI={<p>No hay películas para mostrar.</p>}
    >
      <div className={styles.div}>
        {props.peliculas?.map((pelicula) => (
          <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    </ListadoGenerico>
  );
};
interface ListadoPeliculasProps {
  peliculas?: Pelicula[];
}
