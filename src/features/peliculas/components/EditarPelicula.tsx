import { useParams } from 'react-router';

export const EditarPelicula = () => {
  const { id } = useParams();
  return (
    <>
      <h3>Editar Película</h3>
      <p>el id es {id}</p>
    </>
  );
};
