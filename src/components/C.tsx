import { useExemplo } from "../hooks";

function C(){
    const {nome,idade} = useExemplo();
    return <div>Nome: {nome} Idade: {idade} </div>;
}

export default C;