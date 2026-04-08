import { useParams } from 'react-router';

export const EditarActor = () => {
  const { id } = useParams();
  return (
    <>
      <h3>Editar Actor</h3>
      <p>el id es {id}</p>
    </>
  );
};
