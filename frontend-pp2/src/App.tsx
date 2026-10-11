import React from "react";
import Card from "./Card";
import Contador from "./Contador";
import ForularioDeDados from "./ForularioDeDados";
import ListaSimples from "./ListaSimples";
import ListaTarefas from "./ListaTarefas";

function App() {
  return (
    <div className="p-6 flex flex-col gap-3 items-center justify-center bg-slate-600 text-black ">
      <div>
        <Card
          title="Paradigmas de programação"
          description="Estudar State e Props "
        />
      </div>

      <div>
        <Card
          title="Exercicios de programação "
          description="Vamos colocar a mão na massa pessoal"
        />
      </div>

      <Contador />
      <ForularioDeDados />
      <div>
        <ListaSimples />
      </div>
      <div>
        <ListaTarefas/>
      </div>
    </div>
  );
}

export default App;
