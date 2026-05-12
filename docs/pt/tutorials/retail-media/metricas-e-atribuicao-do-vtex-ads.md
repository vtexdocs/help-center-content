---
title: 'Métricas e atribuição do VTEX Ads'
createdAt: '2026-05-04T10:00:00.000Z'
updatedAt: '2026-05-05T10:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-metrics-and-attribution
locale: pt
---

O [VTEX Ads](/pt/docs/tracks/retail-media) oferece um conjunto de métricas para ajudar anunciantes, publishers e agências de marketing a medir o desempenho das campanhas e o retorno sobre o investimento em publicidade. As métricas estão disponíveis em todos os dashboards do VTEX Ads como **cards de métricas** no topo de cada tela e como **colunas** nas tabelas correspondentes.

Este artigo descreve as métricas disponíveis e o modelo de atribuição que determina como a plataforma credita conversões aos anúncios.

> ℹ️ Para terminologia mais ampla de retail media, consulte o [Glossário de Retail Media](/pt/docs/tracks/glossario-de-retail-media).

## Métricas de desempenho

As métricas a seguir descrevem o volume, a eficiência e o custo das campanhas:

| Métrica | O que mede | Fórmula |
| :---- | :---- | :---- |
| **Impressões** | Número de vezes que o anúncio foi exibido para os usuários. | - |
| **Cliques** | Número de vezes que os usuários clicaram no anúncio. | - |
| **Conversões** | Número de compras atribuídas ao anúncio. | - |
| **Vendas** | Valor monetário total das vendas atribuídas ao anúncio. | - |
| **CTR** (Click-through rate) | Porcentagem de impressões que resultaram em cliques. | (Cliques / Impressões) × 100 |
| **Taxa de conversão** | Porcentagem de cliques que resultaram em conversões. | (Conversões / Cliques) × 100 |
| **CPM** (Custo por mil impressões) | Custo médio por 1.000 impressões. | (Custo / Impressões) × 1.000 |
| **Custo** | Valor total gasto na campanha. | - |
| **Receita** | Receita total atribuída ao anúncio. | - |
| **ACOS** (Advertising Cost of Sales) | Proporção da receita gasta com publicidade. Quanto menor o ACOS, mais eficiente a campanha. | (Custo / Receita) × 100 |

> ℹ️ Métricas que reportam uma contagem ou um total monetário (impressões, cliques, conversões, vendas, custo e receita) são medidas diretas e não possuem fórmula derivada.

## Modelo de atribuição

O VTEX Ads atribui uma conversão a um anúncio quando um usuário interage com o anúncio e, posteriormente, faz uma compra que atende às regras de atribuição da plataforma. As regras a seguir determinam qual anúncio recebe o crédito, em que prazo e como jornadas com múltiplas interações são resolvidas.

### Janela de atribuição

A janela de atribuição é de 14 dias. Qualquer conversão que ocorra dentro de 14 dias após uma interação elegível com o anúncio (clique ou visualização) pode ser atribuída a esse anúncio.

Por exemplo, se um usuário clicar em um anúncio hoje, uma compra do produto anunciado realizada nos próximos 14 dias pode ser creditada a esse anúncio.

### Sinal de medição por tipo de campanha

A interação que conta como sinal de atribuição depende do tipo de campanha:

- **Produtos patrocinados:** atribuídos por clique. Uma conversão só é contada quando o usuário clicou no anúncio antes da compra.
- **Banner, vídeo e marcas patrocinadas:** atribuídos por visualização (impressão). Uma conversão é contada quando o usuário visualizou o anúncio antes da compra.

> ℹ️ Essa distinção é o que diferencia as métricas **ROAS click** e **ROAS view**, descritas em [Métricas de ROAS](#metricas-de-roas).

### Conversões diretas e vendas assistidas

Toda compra influenciada por anúncios é classificada em uma de duas categorias mutuamente exclusivas:

- **Conversão direta:** o usuário comprou o próprio produto anunciado. A venda é creditada ao anúncio com base na interação elegível mais recente:
  - **Conversão por clique:** uma conversão direta atribuída a um clique no anúncio.
  - **Conversão por visualização:** uma conversão direta atribuída a uma visualização do anúncio.
- **Venda assistida:** o usuário comprou um produto diferente do mesmo seller do produto anunciado, após pelo menos uma interação com o anúncio (clique ou visualização) e sem nenhuma conversão direta atribuída ao anúncio.


### Hierarquia de atribuição

Uma única compra nunca é creditada para mais de uma campanha. Quando um usuário interage com vários anúncios antes de comprar, a plataforma decide qual campanha recebe o crédito usando esta ordem de prioridade:

1. **Campanhas offsite:** se uma campanha [offsite](/pt/docs/tracks/glossario-de-retail-media) ativa foi o último ponto de contato do usuário, ela tem prioridade total.
2. **Último clique:** caso contrário, a plataforma busca o clique mais recente em uma campanha atribuída por clique dentro da janela de 14 dias.
3. **Última visualização:** se não houver clique elegível, o crédito vai para a visualização mais recente em uma campanha atribuída por visualização (banner, vídeo ou marcas patrocinadas).

> ℹ️ A interação (clique ou visualização) deve ocorrer antes do pedido ser efetuado para que a conversão seja válida.

### Mapeamento de produtos

Uma campanha só pode ser creditada por produtos explicitamente associados a ela.

- **Produtos patrocinados (mapeamento 1:1):** cada anúncio representa um único produto. Um clique no anúncio do produto A só pode gerar conversão para o produto A.
- **Banner, vídeo e marcas patrocinadas (mapeamento N:1):** um criativo está associado a uma lista de SKUs. Uma interação com o criativo pode atribuir a qualquer produto dessa lista.

> ℹ️ Dentro de uma campanha, cada criativo individual reporta o desempenho de forma independente, permitindo comparar diferentes peças de anúncio na mesma campanha.

## Métricas de vendas assistidas

Vendas assistidas revelam a influência que um anúncio teve em compras que não converteram diretamente. Por exemplo, um usuário vê um anúncio de um Samsung S26 e, dois dias depois, compra um Samsung S25 do mesmo seller. Essa venda é contada como assistida ao anúncio do Samsung S26.

Uma venda é contada como assistida quando todas as condições a seguir são verdadeiras:

- O item vendido pertence ao mesmo seller do produto anunciado.
- Não há conversão direta atribuída ao anúncio.
- O usuário interagiu com o anúncio pelo menos uma vez antes da compra.

Quando mais de uma interação com o anúncio é elegível, a venda assistida é creditada à interação elegível mais recente antes da compra.

> ℹ️ A correspondência é baseada no seller. Qualquer produto do mesmo seller pode gerar uma venda assistida, independentemente da marca ou linha de produto.

As métricas derivadas dos dados de vendas assistidas são:

| Métrica | O que mede |
| :---- | :---- |
| **Vendas assistidas** | Receita das vendas que o anúncio influenciou sem conversão direta. |
| **Pedidos assistidos** | Número de pedidos atribuídos como assistidos. |
| **Itens assistidos** | Número de itens vendidos atribuídos como assistidos. |
| **ROAS assistido** | Retorno sobre o investimento em publicidade a partir da receita assistida (receita assistida / custo total). |

## Métricas de ROAS

O **ROAS** (Return on Ad Spend) mede o retorno sobre o investimento em publicidade. As variantes de ROAS diferem em qual receita é incluída no numerador. Todas compartilham o mesmo denominador (custo total de publicidade), portanto são diretamente comparáveis.

Os termos de receita usados nas fórmulas são:

- **Receita direta:** receita das conversões diretas do produto anunciado, combinando conversões por clique e por visualização.
- **Receita de conversão por clique:** receita das conversões diretas creditadas a cliques.
- **Receita de conversão por visualização:** receita das conversões diretas creditadas a visualizações.
- **Receita assistida:** receita das [vendas assistidas](#metricas-de-vendas-assistidas).

| Métrica | O que mede | Fórmula |
| :---- | :---- | :---- |
| **ROAS** | Retorno sobre o investimento em publicidade a partir das conversões diretas (clique e visualização combinados). | Receita direta / custo total |
| **ROAS click** | Retorno sobre o investimento em publicidade a partir das conversões diretas creditadas a cliques. | Receita de conversão por clique / custo total |
| **ROAS view** | Retorno sobre o investimento em publicidade a partir das conversões diretas creditadas a visualizações. | Receita de conversão por visualização / custo total |
| **Overall ROAS** | Retorno consolidado que inclui tanto a receita direta quanto a assistida. | (Receita direta + receita assistida) / custo total |

Comparar **ROAS click** e **ROAS view** ajuda a identificar quais tipos de campanha geram retorno principalmente por cliques ou por visualizações. Isso é útil ao avaliar produtos patrocinados em comparação com banners ou marcas patrocinadas.

O **Overall ROAS** combina receita direta e assistida sobre o mesmo custo total, oferecendo uma visão unificada do retorno total.

> ⚠️ ROAS click e ROAS view estão disponíveis para usuários com permissões de administrador no VTEX Ads. Usuários padrão não verão essas duas métricas nos dashboards ou nas tabelas.

## Disponibilidade e acesso aos dados

- Métricas de desempenho e métricas de vendas assistidas estão disponíveis historicamente. Não há restrição de data para esses dados.
- **ROAS click**, **ROAS view** e **Overall ROAS** estão disponíveis a partir de 25 de março de 2026. Não há dados históricos para esses campos antes dessa data.
- Quando não há dados para uma métrica, o campo exibe zero.
