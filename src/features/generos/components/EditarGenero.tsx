import { useParams } from 'react-router';

export const EditarGenero = () => {
  const { id } = useParams();
  return (
    <>
      <h3>Editar Genero</h3>
      <p>el id es {id}</p>
    </>
  );
};
