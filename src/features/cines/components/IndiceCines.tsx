import { useNavigate } from 'react-router';
import { Boton } from '../../../components/Boton';

export const IndiceCines = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Cines</h3>
      <Boton onclick={() => navigate('/cines/crear')}>Crear cine</Boton>
    </>
  );
};
