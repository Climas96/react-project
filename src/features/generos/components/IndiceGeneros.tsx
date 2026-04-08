import { useNavigate } from 'react-router';
import { Boton } from '../../../components/Boton';

export const IndiceGeneros = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Géneros</h3>
      <Boton onclick={() => navigate('/generos/crear')}>Crear género</Boton>
    </>
  );
};
