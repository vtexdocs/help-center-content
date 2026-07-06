---
title: 'Métricas e atribuição do VTEX Ads'
createdAt: '2026-07-01T10:00:00.000Z'
updatedAt: '2026-07-01T10:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-metrics-and-attribution
locale: pt
---
O [VTEX Ads](/pt/docs/tracks/retail-media) oferece um conjunto de métricas para ajudar anunciantes, publishers e agências de marketing a medir o desempenho das campanhas e o retorno sobre o investimento em publicidade. As métricas estão disponíveis em todos os dashboards do VTEX Ads como **cards de métricas** no topo de cada tela e como **colunas** nas tabelas correspondentes.

Este artigo descreve as métricas disponíveis e o modelo de atribuição que determina como a plataforma credita conversões aos anúncios.

> ℹ️ Para terminologia mais ampla de retail media, consulte o [Glossário de Retail Media](/pt/docs/tracks/glossario-de-retail-media).

## Métricas de desempenho

As métricas a seguir descrevem o volume, a eficiência e o resultado direto das campanhas.

### Métricas base


| Métrica                            | O que mede                                                                                                                                                                                | Fórmula                      |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **Impressões**                     | Número de vezes que o anúncio foi exibido na tela do usuário, independentemente de *viewability*.                                                                                         | -                            |
| **Cliques**                        | Número de cliques no anúncio.                                                                                                                                                             | -                            |
| **Visualizações**                  | Número de visualizações efetivas do anúncio (impressões que atenderam aos critérios de *viewability*).                                                                                    | -                            |
| **CTR** (Click-through rate)       | Taxa de cliques. Mede o engajamento do anúncio em relação ao volume de exibições.                                                                                                         | (Cliques / Impressões) × 100 |
| **Custo**                          | Investimento total em anúncios no período. Rótulo exibido para o público de anunciantes. O publisher vê o mesmo valor como **Receita com anúncios**.                                      | -                            |
| **Receita com anúncios**           | Valor total recebido pelo publisher com a veiculação de anúncios no período. Rótulo exibido para o público de publishers. Refere-se ao mesmo valor que o **Custo** visto pelo anunciante. | -                            |
| **CPM** (Custo por mil impressões) | Custo médio por 1.000 impressões.                                                                                                                                                         | (Custo / Impressões) × 1.000 |


### Conversões e receita


| Métrica                              | O que mede                                                                                                                                                        | Fórmula                 |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **Conversões**                       | Número total de conversões atribuídas ao anúncio (clique + visualização), aplicando a prioridade Clique > Visualização. Cada conversão é atribuída uma única vez. | -                       |
| **Conversões (clique)**              | Número de conversões atribuídas exclusivamente por clique.                                                                                                        | -                       |
| **Vendas**                           | Valor monetário total das vendas atribuídas ao anúncio.                                                                                                           | -                       |
| **Receita**                          | Receita total atribuída diretamente ao anúncio. Considera as vendas dos produtos anunciados, sem incluir vendas Halo.                                             | -                       |
| **ACOS** (Advertising Cost of Sales) | Proporção da receita gasta com publicidade. Quanto menor o ACOS, mais eficiente a campanha.                                                                       | (Custo / Receita) × 100 |


### Taxa de conversão


| Métrica                          | O que mede                                                                                                                                      | Fórmula                                 |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **Taxa de conversão**            | Eficiência de conversão do anúncio. Usa visualizações como denominador para todos os formatos, mantendo consistência entre os tipos de anúncio. | (Conversões / Visualizações) × 100      |
| **Taxa de conversão por clique** | Eficiência de conversão sobre as interações de clique. Disponível para todos os formatos como métrica complementar.                             | (Conversões por clique / Cliques) × 100 |


> ℹ️ Métricas que reportam uma contagem ou um total monetário (impressões, cliques, visualizações, conversões, vendas, receita e custo) são medidas diretas e não possuem fórmula derivada.

## Modelo de atribuição

A **atribuição** é o processo de associar uma venda a uma ou mais interações do usuário com o anúncio. O VTEX Ads atribui uma conversão a um anúncio quando o usuário interage com ele e, posteriormente, faz uma compra que atende às regras de atribuição da plataforma. As regras a seguir determinam qual interação recebe o crédito e em que prazo.

### Janela de atribuição

A janela de atribuição define o período máximo em que uma compra pode ser atribuída a uma interação elegível com o anúncio. Após esse período, a conversão não é contabilizada como resultado do anúncio. Cada formato usa janelas próprias:


| Formato                                    | Janela de clique | Janela de visualização |
| ------------------------------------------ | ---------------- | ---------------------- |
| Produtos patrocinados (Sponsored Products) | 7 dias           | 1 dia (24 horas)       |
| Banner                                     | 14 dias          | 14 dias                |
| Banner em vídeo                            | 14 dias          | 14 dias                |
| Marcas patrocinadas (Sponsored Brands)     | 14 dias          | 14 dias                |


Por exemplo, se um usuário clicar em um anúncio de produto patrocinado hoje, uma compra do produto anunciado realizada nos próximos sete dias pode ser creditada a esse anúncio. Se o usuário apenas visualizar o anúncio, a compra precisa ocorrer em até um dia (24 horas) para ser creditada à visualização.

### Atribuição consolidada

O VTEX Ads usa um modelo de **atribuição consolidada**, que considera tanto o clique quanto a visualização como interações elegíveis, dentro das respectivas janelas:

- **Atribuição por clique:** conversão atribuída a um usuário que clicou no anúncio dentro da janela de atribuição.
- **Atribuição por visualização:** conversão atribuída a um usuário que visualizou o anúncio sem clicar, dentro da janela de atribuição.

Todos os formatos são atribuídos por clique e por visualização. Para produtos patrocinados, a atribuição por visualização usa janela de um dia. Para banner, banner em vídeo e marcas patrocinadas, a janela de visualização é de 14 dias.

> ℹ️ A atribuição por visualização depende do **evento de *view***, um sinal técnico enviado pelo publisher à plataforma que registra que o usuário visualizou o anúncio. Publishers que não enviam o evento de *view* não geram conversões atribuídas por visualização.

### Prioridade de atribuição (Last Touch)

O VTEX Ads usa o modelo **Last Touch**, que credita a conversão à interação mais recente do usuário antes da compra. Quando há clique e visualização do mesmo anúncio dentro da janela de atribuição, o **clique tem prioridade** (Clique > Visualização). Assim, cada conversão é atribuída uma única vez, sem dupla contagem.


| Cenário                                                            | Atribuição   |
| ------------------------------------------------------------------ | ------------ |
| Usuário vê o anúncio, depois clica e compra                        | Clique       |
| Usuário clica no anúncio, depois vê de novo e compra               | Clique       |
| Usuário apenas vê o anúncio (sem clicar) e compra dentro da janela | Visualização |
| Usuário apenas clica e compra dentro da janela                     | Clique       |


> ℹ️ A interação (clique ou visualização) deve ocorrer antes da efetivação do pedido para que a conversão seja válida. Cada conversão é atribuída a um único anúncio e a uma única interação, sem divisão proporcional de crédito.

### Conversão direta e vendas Halo

A interação do usuário pode gerar dois tipos de venda:

- **Conversão direta:** venda do próprio produto anunciado, atribuída ao anúncio por clique ou por visualização.
- **Venda Halo:** venda de **outro produto não anunciado**, comprado no mesmo pedido influenciado pelo anúncio. É a receita assistida gerada por itens que não eram o produto anunciado, mas foram adquiridos junto por influência do anúncio.

Por exemplo, um anúncio de tênis leva o cliente a comprar o tênis (conversão direta) e, no mesmo pedido, uma meia (venda Halo).

### Mapeamento de produtos

Uma campanha só pode ser creditada por produtos explicitamente associados a ela.

- **Produtos patrocinados (mapeamento 1:1):** cada anúncio representa um único produto. Uma interação com o anúncio do produto A só pode gerar conversão direta para o produto A.
- **Banner, vídeo e marcas patrocinadas (mapeamento N:1):** um criativo está associado a uma lista de SKUs. Uma interação com o criativo pode atribuir a qualquer produto dessa lista.

> ℹ️ Dentro de uma campanha, cada criativo individual reporta o desempenho de forma independente, permitindo comparar diferentes peças de anúncio na mesma campanha.

## Métricas de ROAS

O **ROAS** (Return on Ad Spend) mede o retorno sobre o investimento em publicidade. As variantes de ROAS diferem em qual receita é incluída no numerador. Todas compartilham o mesmo denominador (custo total de publicidade), portanto são diretamente comparáveis.

Os termos de receita a seguir usados nas fórmulas distinguem a receita em duas dimensões.

Por **origem da atribuição** (clique, visualização ou ambos):

- **Receita atribuída:** receita das conversões diretas do produto anunciado, combinando atribuição por clique e por visualização.
- **Receita atribuída a cliques:** parcela da receita atribuída proveniente apenas das conversões creditadas a cliques.

Por **tipo de venda** (produto anunciado ou produtos influenciados):

- **Receita direta:** receita das conversões diretas do produto anunciado. Usada em contraposição à receita Halo.
- **Receita Halo:** receita gerada por vendas Halo, ou seja, de outros produtos não anunciados comprados no mesmo pedido influenciado pelo anúncio.


| Métrica             | O que mede                                                                                                                                                    | Fórmula                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **ROAS**            | Retorno sobre o investimento a partir das conversões atribuídas (clique e visualização combinados).                                                           | Receita atribuída / Custo               |
| **ROAS por clique** | Retorno gerado por usuários que clicaram no anúncio. Disponível como métrica complementar para comparação por canal de atribuição.                            | Receita atribuída a cliques / Custo     |
| **ROAS Halo**       | ROAS de receita assistida: receita de outros produtos do pedido que não eram o anunciado, mas foram influenciados pelo anúncio, dividida pelo investimento.   | Receita Halo / Custo                    |
| **ROAS total**      | ROAS total: soma a receita direta (produto anunciado) e a receita Halo (outros produtos do mesmo pedido). Mede o impacto total da campanha no pedido inteiro. | (Receita direta + Receita Halo) / Custo |


> ℹ️ A receita atribuída por visualização é incluída no cálculo do **ROAS** consolidado, mas não é exibida como métrica isolada nos dashboards ou nas tabelas.

Comparar o ROAS consolidado com o **ROAS por clique** ajuda a identificar quais campanhas geram retorno principalmente por cliques ou por visualizações. Isso é útil ao avaliar produtos patrocinados em comparação com banners ou marcas patrocinadas.

> ⚠️ O **ROAS por clique** está disponível apenas para usuários com permissões de super administrador (superAdmin) no VTEX Ads. Usuários padrão não verão essa métrica nos dashboards ou nas tabelas.

## Métricas de vendas influenciadas (Halo)

As métricas Halo medem o impacto indireto do anúncio em vendas de outros produtos não anunciados comprados no mesmo pedido influenciado pelo anúncio.


| Métrica          | O que mede                                                                              | Fórmula |
| ---------------- | --------------------------------------------------------------------------------------- | ------- |
| **Pedidos Halo** | Número de pedidos com pelo menos um item Halo.                                          | -       |
| **Receita Halo** | Receita de produtos não anunciados comprados no mesmo pedido influenciado pelo anúncio. | -       |
| **Itens Halo**   | Quantidade de itens Halo vendidos.                                                      | -       |

## Comportamento em janelas de data mistas

A metodologia de atribuição dos produtos patrocinados (Sponsored Products) mudou em 1º de julho de 2026 e passou a incluir conversões por visualização, além das conversões por clique. Além disso, para todos os formatos, a taxa de conversão passou a usar as **visualizações** no denominador, em vez dos cliques usados anteriormente.

Por isso, métricas como ROAS, taxa de conversão, conversões e receita atribuída são calculadas de forma diferente antes e depois dessa data.

Quando o período selecionado cruza 1º de julho de 2026, o cálculo consolidado adota a nova metodologia em todo o intervalo. Nesses casos, o gráfico exibe um aviso visual na data da mudança.

Para obter resultados consistentes, selecione o período de análise de acordo com a metodologia desejada:

- **Desempenho histórico:** selecione períodos inteiramente anteriores a 1º de julho de 2026.
- **Nova metodologia:** selecione períodos inteiramente a partir de 1º de julho de 2026.

> ⚠️ Em janelas de análise que contêm 1º de julho de 2026, a taxa de conversão é calculada com a nova metodologia em todo o intervalo. As métricas com quebra por clique (**Conversões (clique)**, **Taxa de conversão por clique** e **ROAS por clique**) estão disponíveis apenas a partir de 1º de julho de 2026.

## Disponibilidade e acesso aos dados

- As métricas base e de conversão estão disponíveis historicamente, sem restrição de data.
- O **ROAS por clique** não exibe dados anteriores a 25 de março de 2026.
- A customização de cards e colunas é persistida entre sessões. Publisher e anunciante têm configurações independentes.
- Quando não há dados para uma métrica, o campo exibe zero.

