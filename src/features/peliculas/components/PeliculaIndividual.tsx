import type Pelicula from '../models/pelicula.model';
import styles from './PeliculaIndividual.module.css';

export const PeliculaIndividual = (props: peliculaIndividualProps) => {
  const construirLink = () => `/pelicula/${props.pelicula.id}`;

  return (
    <div className={styles.div}>
      <a href={construirLink()}>
        <img src={props.pelicula.poster} alt="Poster" />
      </a>
      <p>
        <a href={construirLink()}>{props.pelicula.title}</a>
      </p>
    </div>
  );
};

interface peliculaIndividualProps {
  pelicula: Pelicula;
}
