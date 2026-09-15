import dados from "../../data/atividades_linguagem_grupo_a.json";
import {
  FAIXAS_ETARIAS,
  FAIXAS_POR_ATIVIDADE,
} from "../data/faixasEtarias";
import FaixaEtariaSelect from "./FaixaEtariaSelect";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  const faixasEtarias = FAIXAS_ETARIAS.filter((faixaEtaria) =>
    dados.atividades.some((atividade) =>
      FAIXAS_POR_ATIVIDADE[atividade.id]?.includes(faixaEtaria),
    ),
  );
  const categorias = Array.from(
    new Set(dados.atividades.map((atividade) => atividade.categoria)),
  );
  const atividadesParaFiltro = dados.atividades.map((atividade) => ({
    id: atividade.id,
    nome: atividade.nome,
    objetivo_educativo: atividade.objetivo_educativo,
    materiais_necessarios: atividade.materiais_necessarios,
    preparacao: atividade.preparacao,
    passo_a_passo: atividade.passo_a_passo,
    duracao_aproximada: atividade.duracao_aproximada,
    como_facilitar: atividade.como_facilitar,
    como_tornar_mais_desafiadora: atividade.como_tornar_mais_desafiadora,
    o_que_evitar: atividade.o_que_evitar,
    observacao_seguranca: atividade.observacao_seguranca,
    fontes: atividade.fontes,
    aviso: atividade.aviso,
    categoria: atividade.categoria,
    faixasEtarias: FAIXAS_POR_ATIVIDADE[atividade.id] ?? [],
  }));

  return (
    <main>
      <ThemeToggle />
      <header className="apresentacao">
        <p className="identificacao-recurso">Recurso gratuito · Sônia Torres</p>
        <h1>Atividades educativas para linguagem</h1>
        <p>
          Consulte um acervo curado de atividades educativas e lúdicas para criar
          oportunidades de comunicação e interação no cotidiano. Escolha a faixa
          etária e o tipo de atividade para encontrar uma sugestão do acervo.
        </p>
        <p className="aviso-apresentacao">
          Este é um recurso educativo. As atividades não substituem avaliação ou
          acompanhamento de um profissional habilitado.
        </p>
      </header>
      <FaixaEtariaSelect
        faixasEtarias={faixasEtarias}
        categorias={categorias}
        atividades={atividadesParaFiltro}
      />
    </main>
  );
}
