import { useExemplo } from "../hooks";
import C from "./C";

function B() {
    const {idade,setIdade} = useExemplo();
  return (
    <>
      <div>
        <label>Idade</label>
        <input value={idade} onChange={(e) => setIdade(e.target.value)} />
      </div>
      <C />
    </>
  );
}

export default B;
