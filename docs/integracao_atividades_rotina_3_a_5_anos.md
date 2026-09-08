# Documentação: Expansão de Atividades de Rotina Cotidiana (3 a 5 anos)

## 1. Objetivo da Funcionalidade
Ampliar o banco de atividades lúdicas e educativas de linguagem com 4 novas atividades integradas à rotina familiar de crianças de 3 a 5 anos (pré-escolares), mantendo caráter não clínico, sem cobrança de respostas verbais e sem pontuação de desempenho.

As 4 atividades incorporadas são:
- **A28 — Duas Escolhas na Gaveta:** tomada de decisão funcional com duas opções reais na rotina (fonte: CDC).
- **A29 — O Que Vem Depois?:** antecipação de transições temporais imediatas (fonte: Head Start ECLKC).
- **A30 — Passo a Passo do Nosso Lanche:** noções de sequência temporal (*primeiro*, *depois*, *por último*) no preparo culinário frio e seguro (fonte: Harvard Center on the Developing Child).
- **A31 — Caçadores da Lista de Compras:** uso de representação visual simples (2 a 3 itens desenhados) durante compras (fonte: ASHA).

## 2. Arquitetura

### Estrutura dos Arquivos de Dados
- `data/atividades_linguagem_grupo_a.json`: fonte de dados consumida pela aplicação Next.js, contendo o array `atividades` com 26 fichas completas.
- `atividades_linguagem_22_atividades.json`: arquivo canônico do banco de dados na raiz do repositório, sincronizado com as 26 atividades.
- `src/data/faixasEtarias.ts`: tabela de mapeamento entre os identificadores das atividades (`A01` a `A31`) e as faixas etárias permitidas no filtro (`FAIXAS_POR_ATIVIDADE`).

### Esquema da Atividade
Cada atividade contém 21 campos padronizados:
- Identificação e metadados: `id`, `ideia_original`, `grupo_original`, `nome`, `categoria`.
- Conteúdo pedagógico: `faixa_etaria_fonte`, `habilidade_relacionada`, `objetivo_educativo`, `materiais_necessarios`, `preparacao`, `passo_a_passo`.
- Parâmetros práticos: `duracao_aproximada`, `como_facilitar`, `como_tornar_mais_desafiadora`, `o_que_evitar`, `observacao_seguranca`.
- Salvaguardas e conformidade: `fontes`, `aviso`, `participacao`, `regra_duracao`, `regra_faixa_etaria`.

## 3. Fluxo de Dados

1. **Carregamento:** Em `src/app/page.tsx`, o arquivo `data/atividades_linguagem_grupo_a.json` é importado estaticamente.
2. **Enriquecimento:** Cada atividade recebe o array `faixasEtarias` a partir da chave em `FAIXAS_POR_ATIVIDADE[atividade.id]` definido em `src/data/faixasEtarias.ts`.
3. **Filtragem:** No componente `src/app/FaixaEtariaSelect.tsx`, as atividades são filtradas pela combinação selecionada de `faixaSelecionada` e `categoriaSelecionada`.
4. **Sorteio:** O botão "Receber atividade" seleciona aleatoriamente uma das atividades disponíveis, evitando repetição imediata quando há mais de uma opção disponível.

## 4. Como Manter e Expandir

Ao adicionar novas atividades no futuro:
1. **Adicionar a ficha ao JSON:** incluir o novo objeto ao final do array `atividades` em `data/atividades_linguagem_grupo_a.json` e `atividades_linguagem_22_atividades.json`, garantindo ID sequencial (`A32`, `A33`, etc.) e todos os 21 campos.
2. **Atualizar `src/data/faixasEtarias.ts`:** associar o novo ID à(s) faixa(s) etária(s) suportadas pela fonte em `FAIXAS_POR_ATIVIDADE`.
3. **Validar:**
   - Executar testes e simulação com `node scripts/testar_sorteio.js`.
   - Executar verificação de tipos: `npm run typecheck`.
   - Executar compilação de produção: `npm run build`.
