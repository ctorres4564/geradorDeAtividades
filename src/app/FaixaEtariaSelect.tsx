"use client";

import { useState } from "react";

type FaixaEtariaSelectProps = {
  faixasEtarias: readonly string[];
  categorias: readonly string[];
  atividades: readonly {
    id: string;
    nome?: string | null;
    objetivo_educativo?: string | null;
    materiais_necessarios?: string | readonly string[] | null;
    preparacao?: string | null;
    passo_a_passo?: string | readonly string[] | null;
    duracao_aproximada?: string | null;
    como_facilitar?: string | null;
    como_tornar_mais_desafiadora?: string | null;
    o_que_evitar?: string | null;
    observacao_seguranca?: string | null;
    fontes?: readonly {
      id?: string;
      titulo?: string | null;
      instituicao?: string | null;
      url?: string | null;
    }[] | null;
    aviso?: string | null;
    categoria: string;
    faixasEtarias: readonly string[];
  }[];
};

function CampoAtividade({ titulo, valor, numerado = false }: {
  titulo: string;
  valor?: string | readonly string[] | null;
  numerado?: boolean;
}) {
  const itens = Array.isArray(valor)
    ? valor.filter((item) => item.trim().length > 0)
    : null;
  if (itens ? itens.length === 0 : typeof valor !== "string" || !valor.trim()) {
    return null;
  }
  const Lista = numerado ? "ol" : "ul";

  return (
    <section>
      <h3>{titulo}</h3>
      {itens ? (
        <Lista>{itens.map((item, indice) => <li key={indice}>{item}</li>)}</Lista>
      ) : <p>{valor}</p>}
    </section>
  );
}

export default function FaixaEtariaSelect({
  faixasEtarias,
  categorias,
  atividades,
}: FaixaEtariaSelectProps) {
  const [faixaSelecionada, setFaixaSelecionada] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [atividadeSugerida, setAtividadeSugerida] = useState<
    FaixaEtariaSelectProps["atividades"][number] | null
  >(null);
  const atividadesCompativeis = atividades.filter(
    (atividade) =>
      atividade.categoria === categoriaSelecionada &&
      atividade.faixasEtarias.includes(faixaSelecionada),
  );
  const quantidadeDisponivel = atividadesCompativeis.length;
  const podeSortear = Boolean(
    faixaSelecionada && categoriaSelecionada && quantidadeDisponivel > 0,
  );

  function receberAtividade() {
    if (!podeSortear) return;

    const candidatas = quantidadeDisponivel > 1
      ? atividadesCompativeis.filter(
          (atividade) => atividade.id !== atividadeSugerida?.id,
        )
      : atividadesCompativeis;
    const indice = Math.floor(Math.random() * candidatas.length);
    setAtividadeSugerida(candidatas[indice]);
  }

  return (
    <>
    <section className="selecao-faixa" aria-labelledby="titulo-escolha">
      <header className="cabecalho-escolha">
        <h2 id="titulo-escolha">Encontre uma atividade</h2>
        <p>Escolha a idade da criança e o tipo de atividade.</p>
      </header>
      <label htmlFor="faixa-etaria">Escolha a faixa etária</label>
      <select
        id="faixa-etaria"
        value={faixaSelecionada}
        onChange={(evento) => {
          setFaixaSelecionada(evento.target.value);
          setAtividadeSugerida(null);
        }}
      >
        <option value="">Selecione uma faixa etária</option>
        {faixasEtarias.map((faixaEtaria) => (
          <option key={faixaEtaria} value={faixaEtaria}>
            {faixaEtaria}
          </option>
        ))}
      </select>
      {faixaSelecionada && <p>Faixa selecionada: {faixaSelecionada}</p>}
      {faixaSelecionada && (
        <>
          <label htmlFor="categoria">Escolha uma categoria</label>
          <select
            id="categoria"
            value={categoriaSelecionada}
            onChange={(evento) => {
              setCategoriaSelecionada(evento.target.value);
              setAtividadeSugerida(null);
            }}
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
          {categoriaSelecionada && (
            <p>Categoria selecionada: {categoriaSelecionada}</p>
          )}
          {categoriaSelecionada && quantidadeDisponivel > 0 && (
            <p>{quantidadeDisponivel} atividades disponíveis</p>
          )}
          {categoriaSelecionada && quantidadeDisponivel === 0 && (
            <p>Nenhuma atividade disponível para esta combinação.</p>
          )}
        </>
      )}
      <button type="button" disabled={!podeSortear} onClick={receberAtividade}>
        Receber atividade
      </button>
    </section>
      {atividadeSugerida && (
        <article className="atividade-sugerida" aria-live="polite">
          {atividadeSugerida.nome?.trim() && (
            <h2>Atividade sugerida: {atividadeSugerida.nome}</h2>
          )}
          <CampoAtividade titulo="Objetivo educativo" valor={atividadeSugerida.objetivo_educativo} />
          <CampoAtividade titulo="Materiais" valor={atividadeSugerida.materiais_necessarios} />
          <CampoAtividade titulo="Preparação" valor={atividadeSugerida.preparacao} />
          <CampoAtividade titulo="Passo a passo" valor={atividadeSugerida.passo_a_passo} numerado />
          <CampoAtividade titulo="Duração aproximada" valor={atividadeSugerida.duracao_aproximada} />
          <CampoAtividade titulo="Como facilitar" valor={atividadeSugerida.como_facilitar} />
          <CampoAtividade titulo="Como tornar mais desafiadora" valor={atividadeSugerida.como_tornar_mais_desafiadora} />
          <CampoAtividade titulo="O que evitar" valor={atividadeSugerida.o_que_evitar} />
          <CampoAtividade titulo="Observações de segurança" valor={atividadeSugerida.observacao_seguranca} />
          {!!atividadeSugerida.fontes?.length && (
            <section>
              <h3>Fontes</h3>
              <ul>
                {atividadeSugerida.fontes.map((fonte, indice) => (
                  <li key={fonte.id ?? indice}>
                    {fonte.url?.trim() ? (
                      <a href={fonte.url} target="_blank" rel="noopener noreferrer">
                        {fonte.titulo?.trim() ? fonte.titulo : fonte.url}
                      </a>
                    ) : fonte.titulo}
                    {fonte.instituicao?.trim() && <p>{fonte.instituicao}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {atividadeSugerida.aviso?.trim() && (
            <p className="aviso-atividade">{atividadeSugerida.aviso}</p>
          )}
        </article>
      )}
    </>
  );
}
