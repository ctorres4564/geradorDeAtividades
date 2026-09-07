"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [escuro, setEscuro] = useState(false);

  function alternarTema() {
    const novoTema = !escuro;
    document.documentElement.dataset.theme = novoTema ? "dark" : "light";
    setEscuro(novoTema);
  }

  return (
    <div className="controle-tema">
      <button type="button" onClick={alternarTema} aria-pressed={escuro}>
        Modo escuro
      </button>
    </div>
  );
}
