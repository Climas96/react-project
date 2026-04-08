export const Boton = (props: BotonProps) => {
  return (
    <button type="button" className="btn btn-primary" onClick={props.onclick}>
      {props.children}
    </button>
  );
};

interface BotonProps {
  children: React.ReactNode;
  onclick(): void;
}
