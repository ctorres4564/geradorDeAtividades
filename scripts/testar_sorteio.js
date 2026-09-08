const fs = require('fs');
const path = require('path');

// Carregar JSON de dados e mapeamento de faixas etárias
const dados = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'atividades_linguagem_grupo_a.json'), 'utf8'));

// Simulação fiel do faixasEtarias.ts
const FAIXAS_ETARIAS = [
  "0 a 12 meses",
  "1 a 2 anos",
  "2 a 3 anos",
  "3 a 5 anos",
];

const FAIXAS_POR_ATIVIDADE = {
  A01: FAIXAS_ETARIAS,
  A02: FAIXAS_ETARIAS,
  A03: FAIXAS_ETARIAS,
  A04: ["0 a 12 meses", "1 a 2 anos", "2 a 3 anos"],
  A05: ["0 a 12 meses"],
  A06: ["0 a 12 meses"],
  A07: ["0 a 12 meses", "1 a 2 anos", "2 a 3 anos"],
  A08: FAIXAS_ETARIAS,
  A09: ["3 a 5 anos"],
  A11: ["3 a 5 anos"],
  A12: ["3 a 5 anos"],
  A13: ["3 a 5 anos"],
  A15: ["1 a 2 anos", "2 a 3 anos", "3 a 5 anos"],
  A16: ["1 a 2 anos", "2 a 3 anos"],
  A17: ["0 a 12 meses", "1 a 2 anos", "2 a 3 anos"],
  A19: ["0 a 12 meses"],
  A20: ["0 a 12 meses"],
  A23: ["1 a 2 anos", "2 a 3 anos"],
  A24: ["3 a 5 anos"],
  A25: ["3 a 5 anos"],
  A26: ["3 a 5 anos"],
  A27: ["3 a 5 anos"],
  A28: ["3 a 5 anos"],
  A29: ["3 a 5 anos"],
  A30: ["3 a 5 anos"],
  A31: ["3 a 5 anos"],
};

console.log('--- TESTE DE INTEGRAÇÃO E VALIDAÇÃO ---');
console.log('Total de atividades:', dados.atividades.length);

// Verificar combinação 3 a 5 anos + Rotina cotidiana
const faixaSelecionada = "3 a 5 anos";
const categoriaSelecionada = "Rotina cotidiana";

const atividadesParaFiltro = dados.atividades.map((atividade) => ({
  id: atividade.id,
  nome: atividade.nome,
  categoria: atividade.categoria,
  faixasEtarias: FAIXAS_POR_ATIVIDADE[atividade.id] ?? [],
}));

const atividadesCompativeis = atividadesParaFiltro.filter(
  (atividade) =>
    atividade.categoria === categoriaSelecionada &&
    atividade.faixasEtarias.includes(faixaSelecionada)
);

console.log(`\nAtividades para [${faixaSelecionada}] + [${categoriaSelecionada}]: ${atividadesCompativeis.length}`);
atividadesCompativeis.forEach(a => console.log(` - ${a.id}: ${a.nome}`));

// Simulação de sorteio
console.log('\n--- SIMULAÇÃO DE SORTEIO (10 rodadas) ---');
let atividadeSugerida = null;
for (let i = 1; i <= 10; i++) {
  const candidatas = atividadesCompativeis.length > 1
    ? atividadesCompativeis.filter(a => a.id !== atividadeSugerida?.id)
    : atividadesCompativeis;
  const indice = Math.floor(Math.random() * candidatas.length);
  atividadeSugerida = candidatas[indice];
  console.log(`Sorteio #${i}: ${atividadeSugerida.id} - ${atividadeSugerida.nome}`);
}

console.log('\nTeste de sorteio finalizado com sucesso!');
