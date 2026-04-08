import { useNavigate } from 'react-router';
import { Boton } from '../../../components/Boton';

export const IndiceActores = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Actores</h3>
      <Boton onclick={() => navigate('/actores/crear')}>Crear Actor</Boton>
    </>
  );
};
