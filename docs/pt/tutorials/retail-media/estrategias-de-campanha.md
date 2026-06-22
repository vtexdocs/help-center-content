---
title: 'Estratégias de campanha'
createdAt: '2026-05-05T10:00:00.000Z'
updatedAt: '2026-05-05T10:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: campaign-strategies
locale: pt
---

Ao criar uma campanha no [VTEX Ads](/pt/docs/tracks/retail-media), você escolhe uma **estratégia de campanha** que define como a plataforma gerencia os lances e prioriza seus anúncios para entregar um resultado de negócio específico. A estratégia selecionada determina o equilíbrio entre visibilidade (alcançar mais usuários) e eficiência (extrair mais retorno de cada unidade de investimento em mídia).

Este artigo descreve cada estratégia disponível, quando utilizá-la e como configurá-la no fluxo de criação de campanha.

## Visão geral das estratégias

As estratégias **Alcance**, **Crescimento** e **Rentabilidade** trabalham com faixas predefinidas de [ACOS](/pt/docs/tracks/glossario-de-retail-media) (o percentual do investimento em anúncios sobre a receita gerada por eles). A quarta estratégia, **Target ROAS**, permite definir uma meta personalizada de retorno sobre o investimento em mídia e otimiza cada anúncio individualmente para convergir até ela.

| Estratégia | Meta de eficiência | Mais indicada para |
| :---- | :---- | :---- |
| **Alcance** | ACOS 30%-50% | Produtos novos ou categorias altamente competitivas |
| **Crescimento** | ACOS 15%-30% | Produtos de rotação média |
| **Rentabilidade** | ACOS 5%-15% | Produtos mais vendidos |
| **Target ROAS** | ROAS definido pelo anunciante | Campanhas com foco em performance e meta específica de receita por unidade de investimento |

Em Alcance, Crescimento e Rentabilidade, a plataforma ajusta os lances automaticamente para manter o ACOS dentro da faixa sugerida pela estratégia. Em Target ROAS, a plataforma converge para o valor específico que você definir.

> ℹ️ ACOS (`investimento / receita`, quanto menor, melhor) e ROAS (`receita / investimento`, quanto maior, melhor) descrevem a mesma relação por ângulos opostos. Um ACOS de 20% equivale a um ROAS de 5×. Consulte o [Glossário de retail media](/pt/docs/tracks/glossario-de-retail-media) para ver as definições.

## Alcance

Use **Alcance** quando o objetivo for maximizar a visibilidade dos seus produtos e impactar o maior número possível de consumidores. A estratégia tolera um ACOS mais alto (30%-50%) para que os lances continuem competitivos o suficiente para vencer leilões mesmo em inventários com menor conversão direta.

Alcance é mais indicada para:

- Produtos novos com pouco histórico de vendas que precisam de exposição para começar a gerar dados de performance.
- Categorias com forte concorrência, em que lances mais altos são necessários para garantir visibilidade.
- Campanhas focadas em reconhecimento de marca, em que impressões e cliques são mais importantes do que retorno imediato.

## Crescimento

Use **Crescimento** quando quiser equilibrar volume e eficiência. A faixa de ACOS (15%-30%) mantém os lances competitivos o suficiente para escalar vendas, ao mesmo tempo em que preserva um retorno razoável sobre cada unidade de investimento.

Crescimento é mais indicada para:

- Produtos com velocidade de vendas estável e intermediária, em que há espaço para acelerar as vendas sem comprometer a eficiência.
- Campanhas que estão saindo de uma fase de Alcance bem-sucedida para um crescimento estruturado de vendas.
- Catálogos que combinam produtos de venda recorrente e produtos em ascensão.

## Rentabilidade

Use **Rentabilidade** quando a eficiência for o objetivo principal e você quiser maximizar o retorno sobre cada unidade de investimento. A faixa de ACOS mais baixa (5%-15%) mantém os lances rigorosamente controlados.

Rentabilidade é mais indicada para:

- Produtos mais vendidos, com forte conversão orgânica, em que o investimento adicional em mídia deve gerar um alto retorno direto.
- Campanhas em que a prioridade é ROI em vez de alcance.

> ⚠️ Metas de ACOS mais restritas reduzem a competitividade dos lances. Com Rentabilidade, os anúncios podem perder leilões com mais frequência, resultando em uma menor participação em impressões em comparação a estratégias menos restritivas.

## Target ROAS

Use **Target ROAS** quando quiser definir uma meta específica de retorno sobre o investimento em mídia em vez de uma faixa de ACOS predefinida, e deixar que a plataforma gerencie os lances automaticamente para convergir até essa meta.

Diferentemente de Alcance, Crescimento e Rentabilidade, que otimizam no nível da campanha, o Target ROAS avalia cada par anúncio × publicador de forma independente. Combinações com bom desempenho ganham prioridade e são exibidas com mais frequência, enquanto as de baixo desempenho são gradualmente reduzidas, tudo dentro da mesma campanha.

Target ROAS é mais indicada para:

- Campanhas com foco em performance e meta clara de receita por unidade de investimento (por exemplo, 3 unidades de receita para cada 1 unidade investida).
- Campanhas multipublicador (rede), em que cada publicador converte de forma diferente e lances uniformes pagariam demais por inventários fracos ou de menos por inventários fortes.
- Catálogos com performance mista, que combinam produtos de alta conversão com SKUs de cauda longa, em que a otimização granular por anúncio evita a concentração de orçamento nas combinações erradas.
- Reduzir o gerenciamento manual de lances mantendo uma meta de eficiência definida.

### Como o Target ROAS funciona

O otimizador é executado em uma frequência periódica (aproximadamente a cada hora) e, em cada ciclo, recalcula duas coisas para cada par anúncio × publicador:

- Um score de prioridade (faixa `0.1`-`5.0`, valor base `1.0`) que modula com que frequência o par vence os leilões.
- O próprio lance de CPC ou CPM, que converge progressivamente para o valor que, matematicamente, entregaria o ROAS desejado com base nas taxas de conversão atuais.

### Salvaguardas

Os lances sempre respeitam o CPC ou CPM mínimo de cada publicador como piso e são limitados a 25× o lance original como teto, para evitar aumentos descontrolados. Em anúncios de marcas patrocinadas, CPC e CPM são ajustados simultaneamente.

O otimizador também inclui as seguintes salvaguardas:

- **Cold start (primeiras 72 horas):** Pares sem impressões ou sem investimento são ignorados. Seus scores e lances são mantidos no último valor conhecido até que haja dados acumulados.
- **Warm-up (primeiros 7 dias):** A intensidade dos ajustes cresce linearmente para evitar decisões com base em poucos dados. Pausar e retomar uma campanha reinicia a janela de warm-up.
- **Janela adaptativa de análise:** O ROAS é calculado sobre 3, 7 ou 14 dias, dependendo do volume de impressões de cada par nos últimos 7 dias, para que pares com pouco volume não reajam exageradamente a ruído.
- **Throttle:** Quando o ROAS real de um par fica abaixo de 50% da meta por 3 ou mais ciclos consecutivos, uma penalidade adicional reduz progressivamente sua prioridade. A penalidade é revertida automaticamente assim que o par volta a ficar acima do limite.

> ℹ️ Pares com baixo desempenho são reduzidos, não pausados. A campanha continua rodando, mas a entrega total pode desacelerar se muitos pares estiverem sob throttle ao mesmo tempo. O Target ROAS otimiza a eficiência dos lances, não o pacing de orçamento. Os orçamentos diário e total são consumidos pela entrega normal.

### Formatos de campanha suportados

O Target ROAS está disponível para os seguintes [tipos de campanha](/pt/docs/tracks/retail-media#tipos-de-campanha):

- **Baseados em CPC:** produtos patrocinados e marcas patrocinadas.
- **Baseados em CPM:** banner, vídeo, banner vídeo e vídeo de marca patrocinada.

### Como escolher seu valor de Target ROAS

O valor inserido influencia diretamente o comportamento dos lances, portanto deve refletir a economia unitária dos produtos anunciados e a performance típica de campanhas semelhantes na mesma categoria. Como regra geral:

- **Metas realistas** permitem que o otimizador convirja e entregue de forma previsível. Quanto mais próxima a meta for da performance histórica recente, mais suave será a otimização.
- **Metas muito agressivas** (significativamente acima do ROAS típico da categoria) fazem com que a maioria dos pares fique abaixo de 50% da meta, acionando o throttle progressivo na campanha e podendo suprimir a entrega.
- **Metas muito conservadoras** podem subutilizar o otimizador, já que a maioria dos pares ficará acima da meta com pouca necessidade de correção.

Se você não tiver uma referência clara, comece com uma meta próxima ao seu ROAS atual em campanhas semelhantes e ajuste conforme acumular dados.
