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
| **Taxa de conversão (clique)** | Porcentagem de cliques que resultaram em conversões atribuídas por clique. | (Conversões por clique / Cliques) × 100 |
| **Taxa de conversão (visualização)** | Porcentagem de visualizações que resultaram em conversões atribuídas por visualização. | (Conversões por visualização / Visualizações) × 100 |
| **CPM** (Custo por mil impressões) | Custo médio por 1.000 impressões. | (Custo / Impressões) × 1.000 |
| **Custo** | Valor total gasto na campanha. | - |
| **Receita** | Receita total atribuída ao anúncio. | - |
| **ACOS** (Advertising Cost of Sales) | Proporção da receita gasta com publicidade. Quanto menor o ACOS, mais eficiente a campanha. | (Custo / Receita) × 100 |

> ℹ️ Métricas que reportam uma contagem ou um total monetário (impressões, cliques, conversões, vendas, custo e receita) são medidas diretas e não possuem fórmula derivada.

Cada formato de anúncio usa o denominador adequado ao seu modelo de atribuição: cliques para produtos patrocinados e visualizações para banners, vídeos e marcas patrocinadas. Os dashboards exibem **Taxa de conversão (clique)** e **Taxa de conversão (visualização)** separadamente, com tooltips que explicam o cálculo de cada uma.

## Modelo de atribuição

O VTEX Ads atribui uma conversão a um anúncio quando um usuário interage com o anúncio e, posteriormente, faz uma compra que atende às regras de atribuição da plataforma. As regras a seguir determinam qual anúncio recebe o crédito, em que prazo e como jornadas com múltiplas interações são resolvidas.

### Janela de atribuição

A janela de atribuição define o prazo durante o qual uma conversão pode ser atribuída a uma interação elegível com o anúncio. Cada formato usa janelas próprias:

- **Produtos patrocinados:** 7 dias para conversões por clique e 1 dia para conversões por visualização.
- **Banner, vídeo e marcas patrocinadas:** 14 dias para conversões por visualização.

Por exemplo, se um usuário clicar em um anúncio de produto patrocinado hoje, uma compra do produto anunciado realizada nos próximos 7 dias pode ser creditada a esse anúncio. Se o usuário apenas visualizar o anúncio, a compra precisa ocorrer em até 1 dia (24 horas) para ser creditada à visualização.

### Sinal de medição por tipo de campanha

A interação que conta como sinal de atribuição depende do tipo de campanha:

- **Produtos patrocinados:** atribuídos por clique e por visualização. Uma conversão é contada quando o usuário clicou no anúncio ou o visualizou antes da compra, dentro da janela correspondente a cada interação.
- **Banner, vídeo e marcas patrocinadas:** atribuídos por visualização (impressão). Uma conversão é contada quando o usuário visualizou o anúncio antes da compra.

> ℹ️ As métricas **ROAS click** e **ROAS view**, descritas em [Métricas de ROAS](#metricas-de-roas), separam o retorno por tipo de interação atribuída.

### Conversões por clique e por visualização

Uma conversão ocorre quando o usuário compra o próprio produto anunciado. A venda é creditada ao anúncio com base na interação elegível mais recente:

- **Conversão por clique:** uma conversão atribuída a um clique no anúncio.
- **Conversão por visualização:** uma conversão atribuída a uma visualização do anúncio.


### Hierarquia de atribuição

Uma única compra nunca é creditada para mais de uma campanha. Quando um usuário interage com vários anúncios antes de comprar, a plataforma decide qual campanha recebe o crédito usando esta ordem de prioridade:

1. **Campanhas offsite:** se uma campanha [offsite](/pt/docs/tracks/glossario-de-retail-media) ativa foi o último ponto de contato do usuário, ela tem prioridade total.
2. **Último clique:** caso contrário, a plataforma busca o clique mais recente em uma campanha atribuída por clique, dentro da janela de atribuição do formato.
3. **Última visualização:** se não houver clique elegível, o crédito vai para a visualização mais recente em uma campanha atribuída por visualização, dentro da janela de atribuição do formato.

> ℹ️ A interação (clique ou visualização) deve ocorrer antes do pedido ser efetuado para que a conversão seja válida.

### Mapeamento de produtos

Uma campanha só pode ser creditada por produtos explicitamente associados a ela.

- **Produtos patrocinados (mapeamento 1:1):** cada anúncio representa um único produto. Uma interação com o anúncio do produto A só pode gerar conversão para o produto A.
- **Banner, vídeo e marcas patrocinadas (mapeamento N:1):** um criativo está associado a uma lista de SKUs. Uma interação com o criativo pode atribuir a qualquer produto dessa lista.

> ℹ️ Dentro de uma campanha, cada criativo individual reporta o desempenho de forma independente, permitindo comparar diferentes peças de anúncio na mesma campanha.

## Métricas de ROAS

O **ROAS** (Return on Ad Spend) mede o retorno sobre o investimento em publicidade. As variantes de ROAS diferem em qual receita é incluída no numerador. Todas compartilham o mesmo denominador (custo total de publicidade), portanto são diretamente comparáveis.

Os termos de receita usados nas fórmulas são:

- **Receita atribuída:** receita das conversões do produto anunciado, combinando conversões por clique e por visualização.
- **Receita de conversão por clique:** receita das conversões creditadas a cliques.
- **Receita de conversão por visualização:** receita das conversões creditadas a visualizações.

| Métrica | O que mede | Fórmula |
| :---- | :---- | :---- |
| **ROAS** | Retorno sobre o investimento em publicidade a partir das conversões atribuídas (clique e visualização combinados). | Receita atribuída / custo total |
| **ROAS click** | Retorno sobre o investimento em publicidade a partir das conversões creditadas a cliques. | Receita de conversão por clique / custo total |
| **ROAS view** | Retorno sobre o investimento em publicidade a partir das conversões creditadas a visualizações. | Receita de conversão por visualização / custo total |

Comparar **ROAS click** e **ROAS view** ajuda a identificar quais tipos de campanha geram retorno principalmente por cliques ou por visualizações. Isso é útil ao avaliar produtos patrocinados em comparação com banners ou marcas patrocinadas.

> ⚠️ ROAS click e ROAS view estão disponíveis para usuários com permissões de administrador no VTEX Ads. Usuários padrão não verão essas duas métricas nos dashboards ou nas tabelas.

## Disponibilidade e acesso aos dados

- Métricas de desempenho estão disponíveis historicamente. Não há restrição de data para esses dados.
- **ROAS click** e **ROAS view** estão disponíveis para usuários com permissão de administrador a partir de 1º de julho de 2026. Essas métricas não exibem dados anteriores a 25 de março de 2026.
- Quando não há dados para uma métrica, o campo exibe zero.
