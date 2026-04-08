import type React from 'react';
import { Cargando } from './Cargando';

export const ListadoGenerico = <T,>(props: ListadoGenericoProps<T>) => {
  if (!props.listado) {
    return props.cargandoUI ? props.cargandoUI : <Cargando />;
  } else if (props.listado.length === 0) {
    return props.listadoVacioUI ? (
      props.listadoVacioUI
    ) : (
      <p>No hay elementos para mostrar.</p>
    );
  } else {
    return <>{props.children}</>;
  }
};

interface ListadoGenericoProps<T> {
  listado: T[] | undefined;
  children: React.ReactNode;
  listadoVacioUI?: React.ReactNode;
  cargandoUI?: React.ReactNode;
}
