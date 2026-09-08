const fs = require('fs');
const path = require('path');

// 1. Carregar o arquivo base de 22 atividades
const sourcePath = path.join(__dirname, '..', 'atividades_linguagem_22_atividades (1).json');
const rawData = fs.readFileSync(sourcePath, 'utf8');
const json = JSON.parse(rawData);

if (json.atividades.length !== 22) {
  throw new Error(`Esperado 22 atividades, mas encontrado: ${json.atividades.length}`);
}

// 2. Atualizar o escopo conforme regra 5
json.escopo = "26 atividades educativas do grupo A, incluindo 18 atividades do levantamento inicial e 8 novas atividades incorporadas após pesquisa complementar.";

// 3. Novas 4 atividades
const novasAtividades = [
  {
    "id": "A28",
    "ideia_original": 28,
    "grupo_original": "A",
    "nome": "Duas Escolhas na Gaveta",
    "categoria": "Rotina cotidiana",
    "faixa_etaria_fonte": "3 a 5 anos (pré-escolares); sustentada pelas diretrizes de parentalidade positiva para pré-escolares do CDC.",
    "habilidade_relacionada": "Tomada de decisão e comunicação de preferências",
    "objetivo_educativo": "Experimentar pequenas decisões cotidianas para exercitar autonomia e linguagem funcional em momentos comuns do dia.",
    "materiais_necessarios": "Dois objetos reais da rotina (ex.: duas opções de camisetas, dois copos de cores diferentes ou duas frutas para o lanche).",
    "preparacao": "Selecione previamente apenas duas opções reais e aceitáveis para a situação, garantindo que qualquer uma das escolhas possa ser acolhida tranquilamente.",
    "passo_a_passo": [
      "Em uma situação habitual (como vestir-se ou lanchar), posicione os dois objetos ao alcance visual da criança.",
      "Apresente a escolha de forma calma e objetiva (ex.: 'Você prefere a camiseta azul ou a verde?').",
      "Faça uma pausa tranquila de alguns segundos, permitindo que a criança processe a informação no seu próprio ritmo.",
      "Acolha a decisão manifestada por fala, apontar, toque, gesto ou olhar, e dê continuidade natural à rotina."
    ],
    "duracao_aproximada": "1–3 minutos",
    "como_facilitar": "Aproxime os dois objetos e acolha prontamente o gesto de apontar ou o direcionamento do olhar como forma válida de escolha.",
    "como_tornar_mais_desafiadora": "Após a escolha, comente uma característica do item selecionado (ex.: 'A camiseta azul é bem fresquinha hoje') e observe se a criança compartilha algo espontaneamente, sem cobrar justificativas.",
    "o_que_evitar": "Oferecer mais de duas opções ao mesmo tempo, apresentar alternativas que não estejam de fato disponíveis, corrigir a pronúncia durante a escolha ou insistir por resposta verbal.",
    "observacao_seguranca": "Certifique-se de que ambas as opções sejam totalmente seguras e adequadas para o momento.",
    "fontes": [
      {
        "id": "F15",
        "titulo": "Positive Parenting Tips: Preschoolers (3–5 years old)",
        "instituicao": "Centers for Disease Control and Prevention (CDC)",
        "url": "https://www.cdc.gov/child-development/positive-parenting/preschoolers.html"
      }
    ],
    "aviso": "Esta é uma atividade educativa de apoio à interação e à linguagem na rotina diária. Não substitui avaliação, orientação ou tratamento profissional.",
    "participacao": "Aceitar fala, gesto, apontar, escolha, observação ou escuta. Não exigir resposta verbal nem cobrar desempenho.",
    "regra_duracao": "Estimativa editorial opcional, não indicada pela fonte. Pode durar menos; encerrar ao sinal de desconforto ou desinteresse.",
    "regra_faixa_etaria": "Referência do público da fonte, não critério de avaliação nem requisito de desempenho."
  },
  {
    "id": "A29",
    "ideia_original": 29,
    "grupo_original": "A",
    "nome": "O Que Vem Depois?",
    "categoria": "Rotina cotidiana",
    "faixa_etaria_fonte": "3 a 5 anos (pré-escolares); sustentada pelas diretrizes de rotinas e transições do Head Start.",
    "habilidade_relacionada": "Noção de sequência temporal e antecipação de transições",
    "objetivo_educativo": "Compreender a sequência das etapas do dia a dia por meio de avisos prévios serenos, promovendo previsibilidade e organização temporal.",
    "materiais_necessarios": "Nenhum material específico.",
    "preparacao": "Identifique uma transição habitual da rotina (ex.: o término da brincadeira para o banho, ou o fim do almoço para lavar as mãos e escovar os dentes).",
    "passo_a_passo": [
      "Pouco antes de mudar de atividade, avise a criança sobre o momento presente e o próximo passo: 'Agora estamos terminando de guardar os blocos; depois vamos lavar as mãos para o almoço'.",
      "Se achar oportuno, faça um convite leve e totalmente opcional de antecipação: 'O que nós vamos fazer depois?'.",
      "Aguarde com tranquilidade, acolhendo qualquer retorno (fala, gesto de ir em direção à pia, apontar ou apenas escutar com atenção).",
      "Caso a criança não responda, complete você mesmo o comentário com naturalidade ('Isso, vamos lá na pia!') e siga para a transição sem cobranças."
    ],
    "duracao_aproximada": "1–2 minutos",
    "como_facilitar": "Acompanhe a fala mostrando o objeto associado ao próximo passo (como a toalha de banho ou o calçado).",
    "como_tornar_mais_desafiadora": "Mencione duas etapas encadeadas (ex.: 'Depois do almoço, vamos escovar os dentes e depois escolher um livro para ler'), observando se a criança acompanha a sequência.",
    "o_que_evitar": "Usar a pergunta como teste de memória, cobrar a resposta correta, interromper a brincadeira de forma ríspida ou apressar a criança de maneira punitiva.",
    "observacao_seguranca": "Avise a transição com calma para evitar correria ou movimentos precipitados nos deslocamentos pela casa.",
    "fontes": [
      {
        "id": "F16",
        "titulo": "The Importance of Schedules and Routines",
        "instituicao": "Head Start (Early Childhood Learning & Knowledge Center - ECLKC)",
        "url": "https://eclkc.ohs.acf.hhs.gov/teaching-practices/article/importance-schedules-routines"
      }
    ],
    "aviso": "Esta é uma atividade educativa de apoio à interação e à linguagem na rotina diária. Não substitui avaliação, orientação ou tratamento profissional.",
    "participacao": "Aceitar fala, gesto, apontar, olhar, observação ou escuta. Não exigir resposta verbal nem transformar a antecipação em teste.",
    "regra_duracao": "Estimativa editorial opcional, não indicada pela fonte. Pode durar menos; encerrar ao sinal de desconforto ou desinteresse.",
    "regra_faixa_etaria": "Referência do público da fonte, não critério de avaliação nem requisito de desempenho."
  },
  {
    "id": "A30",
    "ideia_original": 30,
    "grupo_original": "A",
    "nome": "Passo a Passo do Nosso Lanche",
    "categoria": "Rotina cotidiana",
    "faixa_etaria_fonte": "3 a 5 anos; sustentada pelas orientações de atividades executivas e culinárias para pré-escolares de Harvard.",
    "habilidade_relacionada": "Compreensão de ordem temporal de ações (início, meio e fim)",
    "objetivo_educativo": "Vivenciar a sequência de passos no preparo de um alimento simples, relacionando marcadores temporais ('primeiro', 'depois', 'por último') a ações práticas e seguras.",
    "materiais_necessarios": "Ingredientes para um lanche frio e seguro (ex.: uma banana, uma tigela plástica, colher ou espátula de plástico sem ponta e iogurte ou aveia).",
    "preparacao": "Deixe os ingredientes já lavados e organizados sobre uma mesa estável, mantendo fora do alcance qualquer faca afiada, fonte de calor ou objeto frágil.",
    "passo_a_passo": [
      "Convide a criança para montar o lanche juntos e mencione a primeira etapa: 'Primeiro, vamos descascar a banana com as mãos e colocar na tigela'.",
      "Incentive a criança a participar e narre o passo intermediário: 'Depois, nós amassamos com a colher e misturamos o iogurte'.",
      "Finalize comentando a última ação: 'E por último colocamos um pouquinho de aveia por cima. Nosso lanche está pronto!'.",
      "De forma opcional e leve, comente ao final: 'O que nós fizemos primeiro mesmo?', acolhendo a fala, o apontar para a casca ou você mesmo relembrando sorrindo."
    ],
    "duracao_aproximada": "5–10 minutos",
    "como_facilitar": "Concentre a conversa em apenas duas ações diretas ('primeiro' e 'depois') e permita que a criança apenas segure a colher ou observe o preparo.",
    "como_tornar_mais_desafiadora": "Convide a criança a opinar livremente sobre o próximo passo antes de você realizá-lo (ex.: 'E agora, o que você acha que colocamos depois?'), sem exigir exatidão.",
    "o_que_evitar": "Usar facas com corte, fogão, líquidos quentes ou qualquer utensílio cortante; repreender se cair alimento fora da tigela ou cobrar que a criança memorize a sequência da receita.",
    "observacao_seguranca": "Atividade estritamente fria e manual, com utensílios plásticos sem ponta e sob supervisão próxima e contínua do adulto.",
    "fontes": [
      {
        "id": "F17",
        "titulo": "Enhancing and Practicing Executive Function Skills with Children from Infancy to Adolescence (Activities for 3- to 5-year-olds)",
        "instituicao": "Center on the Developing Child at Harvard University",
        "url": "https://developingchild.harvard.edu/resources/handouts-tools/activities-guide-enhancing-and-practicing-executive-function-skills/"
      }
    ],
    "aviso": "Esta é uma atividade educativa de apoio à interação e à linguagem na rotina diária. Não substitui avaliação, orientação ou tratamento profissional.",
    "participacao": "Aceitar fala, gesto, ação motora de amassar/misturar, apontar, observação ou escuta. Não exigir resposta verbal nem pontuar acertos.",
    "regra_duracao": "Estimativa editorial opcional, não indicada pela fonte. Pode durar menos; encerrar ao sinal de desconforto ou desinteresse.",
    "regra_faixa_etaria": "Referência do público da fonte, não critério de avaliação nem requisito de desempenho."
  },
  {
    "id": "A31",
    "ideia_original": 31,
    "grupo_original": "A",
    "nome": "Caçadores da Lista de Compras",
    "categoria": "Rotina cotidiana",
    "faixa_etaria_fonte": "3 a 5 anos (pré-escolares); sustentada pelas orientações da ASHA para linguagem em rotinas diárias de famílias.",
    "habilidade_relacionada": "Associação de símbolo a objeto e vocabulário funcional",
    "objetivo_educativo": "Participar da tarefa rotineira de compras guiando-se por uma lista ilustrada simples, exercitando a atenção visual e a comunicação no ambiente social.",
    "materiais_necessarios": "Uma folha pequena com desenhos simples feitos à mão de apenas 2 ou 3 itens reais a comprar (ex.: uma maçã, uma caixa de leite e um pão).",
    "preparacao": "Em casa, antes de ir ao mercado ou feira, desenhe com a criança (ou recorte de panfletos) os 2 ou 3 itens que farão parte da compra do dia.",
    "passo_a_passo": [
      "Entregue o papel com os desenhos para a criança segurar enquanto caminham juntos pelo supermercado.",
      "Ao chegar perto da prateleira ou banca, olhe para o papel junto com ela e comente em tom de parceria: 'Olha só a nossa lista: temos aqui o desenho da maçã. Onde será que ela está?'.",
      "Deixe a criança explorar visualmente no tempo dela, apontando quando notar o produto ou acompanhando você colocá-lo na cestinha.",
      "Faça uma marcação lúdica na folha (como um risco suave ou dobrar a ponta) e converse sobre o que falta: 'A maçã já está aqui. Qual desenho ainda falta achar?', sem cobrança de encontrar tudo."
    ],
    "duracao_aproximada": "5–15 minutos",
    "como_facilitar": "Utilize uma lista com apenas 1 ou 2 itens grandes e de cores bem chamativas (como bananas amarelas ou pacote de pão), segurando a folha junto com a criança.",
    "como_tornar_mais_desafiadora": "Ao localizar o produto, comente uma sensação ao tocá-lo (ex.: 'Essa maçã está bem fresquinha e lisa') e acolha qualquer observação espontânea da criança.",
    "o_que_evitar": "Incluir mais de 3 itens na lista, transformar as compras em prova com pressa ou cobrança de cumprimento de meta, ou exigir que a criança leia palavras ou números.",
    "observacao_seguranca": "Mantenha a criança sempre próxima ao adulto nos corredores e assegure que ela manuseie apenas itens leves e não pontiagudos nem quebráveis.",
    "fontes": [
      {
        "id": "F18",
        "titulo": "How Teachers and Families Can Support Language in Daily Routines",
        "instituicao": "American Speech-Language-Hearing Association (ASHA)",
        "url": "https://leader.pubs.asha.org/do/10.1044/leader.MIW.28052023.language-routines.32/full/"
      }
    ],
    "aviso": "Esta é uma atividade educativa de apoio à interação e à linguagem na rotina diária. Não substitui avaliação, orientação ou tratamento profissional.",
    "participacao": "Aceitar fala, gesto, apontar, segurar a folha, observação ou escuta. Não exigir resposta verbal nem transformar em tarefa de rendimento.",
    "regra_duracao": "Estimativa editorial opcional, não indicada pela fonte. Pode durar menos; encerrar ao sinal de desconforto ou desinteresse.",
    "regra_faixa_etaria": "Referência do público da fonte, não critério de avaliação nem requisito de desempenho."
  }
];

// 4. Anexar as 4 novas ao final
json.atividades.push(...novasAtividades);

if (json.atividades.length !== 26) {
  throw new Error(`Esperado 26 atividades, mas total é: ${json.atividades.length}`);
}

const formatted = JSON.stringify(json, null, 2) + '\n';

// Salvar no arquivo com nome solicitado e manter sincronizados
fs.writeFileSync(path.join(__dirname, '..', 'atividades_linguagem_22_atividades.json'), formatted, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'atividades_linguagem_22_atividades (1).json'), formatted, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'data', 'atividades_linguagem_grupo_a.json'), formatted, 'utf8');

console.log('Integração concluída com sucesso. Total de atividades:', json.atividades.length);
