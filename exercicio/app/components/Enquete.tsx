import React, { useState } from "react";

interface EnqueteInterface {
  pergunta: string;
  opcaoA: string;
  opcaoB: string;
}
function Enquete({ pergunta, opcaoA, opcaoB }: EnqueteInterface) {
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);

  return (
    <div>
      <div>
        <h2 className="font-bold">Enquete</h2>
        <h3>Pergunta: </h3>
        <p>{pergunta}</p>
      </div>
      <div>
        <h3>{opcaoA}</h3>
        <h3>{opcaoB}</h3>
        <div className="flex flex-col">
          <button className="bg-blue-300" onClick={() => setVotosA(votosA + 1)}>
            VOTE: {opcaoA}
          </button>
          <p>VOTOS A: {votosA}</p>
          <button className="bg-red-400 " onClick={() => setVotosB(votosB + 1)}>
            VOTE: {opcaoB}
          </button>

          <p>VOTOS B: {votosB}</p>
        </div>

        <p>
          Resultado:{" "}
          {votosA > votosB? `${opcaoA} esta na frente`: `${opcaoB} esta na frente` && votosA === votosB
              ? "Empate"
              : `${opcaoB} esta na frente`}
        </p>
      </div>
    </div>
  );
}

export default Enquete;
