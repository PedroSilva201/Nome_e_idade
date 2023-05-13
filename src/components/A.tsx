import { useExemplo } from "../hooks";
import B from "./B";

function A() {
  const { nome, setNome } = useExemplo();
  return (
    <>
      <div>
        <label>Nome</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <B />
    </>
  );
}

export default A;
