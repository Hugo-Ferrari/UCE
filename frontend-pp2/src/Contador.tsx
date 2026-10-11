import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <button
        onClick={() => setContador(contador + 1)}
        className="p-2 rounded-2xl bg-teal-600">
        Clique aqui:
      </button>
      {contador}
    </div>
  );
}

export default Contador;
