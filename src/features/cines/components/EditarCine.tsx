import { useParams } from 'react-router';

export const EditarCine = () => {
  const { id } = useParams();
  return (
    <>
      <h3>editar cines</h3>
      <p>el id es {id}</p>
    </>
  );
};
