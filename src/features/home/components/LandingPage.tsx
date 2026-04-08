import { useEffect, useState } from 'react';
import { ListadoPeliculas } from '../../peliculas/components/ListadoPeliculas';
import type Pelicula from '../../peliculas/models/pelicula.model';

export const LandingPage = () => {
  const [peliculas, setPeliculas] = useState<AppState>({});
  // Simulación de carga de datos
  useEffect(() => {
    setTimeout(() => {
      const enCines: Pelicula[] = [
        {
          id: 1,
          title: 'Sonic 3',
          poster:
            'https://tse2.mm.bing.net/th/id/OIP.AS9f3sGc3XjcyuPUIx7h9gHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
        {
          id: 2,
          title: 'John Wick 4',
          poster:
            'https://tse1.mm.bing.net/th/id/OIP.atr58Il4sHnIthvlTLZxmAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
      ];

      const proximosEstrenos: Pelicula[] = [
        {
          id: 3,
          title: 'Spider-Man: No Way Home',
          poster:
            'https://tse2.mm.bing.net/th/id/OIP.jFWga73Vye9w2gQvqWJX6gHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
      ];

      setPeliculas({ enCines, proximosEstrenos });
    }, 1000);
  }, []);
  return (
    <>
      <h3>En cines</h3>
      <ListadoPeliculas peliculas={peliculas.enCines} />
      <h3>Próximos estrenos</h3>
      <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
    </>
  );
};

interface AppState {
  enCines?: Pelicula[];
  proximosEstrenos?: Pelicula[];
}
