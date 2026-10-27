"use client";

import React from "react";
import BotaoPasso from "./components/BotaoPasso";
import BotaoReultilizavel from "./components/BotaoReultilizavel";
import CartaoCurtidas from "./components/CartaoCurtidas";
import CartaoDeTarefas from "./components/CartaoDeTarefas";
import ConversorMoedas from "./components/ConversorMoedas";
import Enquete from "./components/Enquete";
import ListaPost from "./components/ListaPost";
import TabelaUsuario from "./components/TabelaUsuario";
import TarefaComFiltroStatus from "./components/TarefaComFiltroStatus";

function Page() {
  return (
    <main className="min-h-screen  p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-2xl border border-slate-200  p-6 shadow-sm">
          <h1 className="mb-4 text-2xl font-bold text-slate-800">
            Componentes do exercício
          </h1>
          <div className="flex flex-wrap gap-6">
            <BotaoPasso passos={1} />
            <BotaoPasso passos={5} />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200  p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-800">Ações</h2>
          <div className="flex flex-wrap gap-4">
            <BotaoReultilizavel
              texto="Salvar"
              variante="primario"
              onClick={() => alert("Salvando")}
            />

            <BotaoReultilizavel
              texto="Excluir"
              variante="perigo"
              onClick={() => alert("Excluindo")}
            />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200  p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-800">
            Produtos
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <CartaoCurtidas nome="Mouse" preco={49.5} />
            <CartaoCurtidas nome="Monitor" preco={1200.9} />
          </div>
        </section>

        <h1 className="text-3xl">Cartão de Tarefas</h1>
        <CartaoDeTarefas titulo="Estudar React" />
        <CartaoDeTarefas titulo="Fazer exercícios" />
        <CartaoDeTarefas titulo="Revisar props" />
      </div>
      <div>
        <h2>Conversor de Moeda</h2>
        <ConversorMoedas tipo="EUR " taxa={0.16} />
        <ConversorMoedas tipo="USD" taxa={0.18} />
      </div>

      <section className="mx-auto mt-8 max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Enquetes</h2>
          <p className="mt-1 text-sm text-slate-500">
            Vote nas opções e acompanhe os resultados.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Enquete
            pergunta="Melhor linguagem?"
            opcaoA="TypeScript"
            opcaoB="Python"
          />
          <Enquete
            pergunta="Melhor editor?"
            opcaoA="VS Code"
            opcaoB="WebStorm"
          />
        </div>

        <div>
          <ListaPost/>
        </div>
        <div>
          <TabelaUsuario/>
        </div>
        <div>
          <TarefaComFiltroStatus/>
        </div>
      </section>
    </main>
  );
}

export default Page;
