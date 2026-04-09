export const Boton = (props: BotonProps) => {
  return (
    <button type={props.type ?? 'button'} className="btn btn-primary" onClick={props.onclick}
    disabled= {props.disabled ?? false}
    >
      {props.children}
    </button>
  );
};

interface BotonProps {
  children: React.ReactNode;
  onclick?(): void;
  type?: 'button' | 'submit'  | 'reset',
  disabled?: boolean
}
