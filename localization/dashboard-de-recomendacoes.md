---
title: 'Dashboard de recomendações (Beta)'
id: 2QIexbD2FSXBxELUnFtg7g
status: PUBLISHED
createdAt: 2026-02-20T13:01:10.919Z
updatedAt: 2026-02-20T13:01:10.919Z
publishedAt: 2026-02-20T13:01:10.919Z
firstPublishedAt: 2025-06-27T20:41:49.041Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: recommendations-dashboard
legacySlug: dashboard-de-recomendacoes
locale: pt
subcategoryId: 6WyZwZfn89IsnNFNkTAi8d
---

> ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Se já é cliente da VTEX e deseja adotar essa funcionalidade em seu negócio, entre em contato com o [Suporte Comercial](/pt/docs/tracks/suporte-comercial). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

A página **Recomendações** apresenta um dashboard que permite acompanhar e analisar o desempenho das estratégias de recomendação de produtos da loja, por meio de métricas consolidadas e detalhadas por prateleira.

Para acessá-la no Admin VTEX, entre em *Storefront > Recomendações*.

## Requisitos

* Ter a funcionalidade de [Recomendações de produtos](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta) habilitada na loja.  
* Ter [estratégias de recomendação](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta#estrategias-de-recomendacao) implementadas na loja.

## Informações gerais

A seção superior da página apresenta o desempenho agregado das estratégias de recomendação configuradas na loja. Os dados variam de acordo com o [período selecionado para análise e comparação](#selecionar-periodo) e os [filtros definidos](#filtrar-informacoes).

A linha contínua representa o período atual selecionado, enquanto a linha pontilhada representa o período de comparação.

![informacoes-gerais-gif](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/dashboard-de-recomendacoes_1.gif)

Clique em cada métrica para visualizar o gráfico correspondente. O gráfico apresenta a evolução da métrica selecionada ao longo do período. Ao passar o mouse sobre o gráfico, em uma data específica, os dados daquela data são exibidos.

As informações apresentadas são:

| Métrica | Descrição | Informações disponíveis ao passar o mouse sobre uma data |
| :---- | :---- | :---- |
| **Conversão por clique** | Percentual de cliques em recomendações que resultaram em pedidos. | Cliques <br /> Pedidos <br /> Conversão por click |
| **Taxa de visualização** | Percentual de visualizações de prateleiras de recomendação em relação ao total de visualizações de página. A cada vez que a página é carregada, a estratégia é gerada e ela pode ou não ser visualizada. | Visualizações <br /> Impressões <br /> Taxa de visualização |
| **Taxa de cliques** | Taxa média de cliques (CTR) nas recomendações. | Cliques <br /> Visualizações <br /> Taxa de cliques |
| **Receita total** | Valor total de receita gerada a partir de interações com recomendações. | Receita |

## Informações sobre prateleiras

A tabela apresenta o desempenho individual de cada prateleira de recomendação configurada na loja. Os dados variam de acordo com o [período selecionado](#selecionar-periodo) e os [filtros definidos](#filtrar-informacoes).

![informacoes-prateleiras](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/dashboard-de-recomendacoes_2.png)

A página apresenta as seguintes informações sobre cada prateleira em uma tabela:

| Coluna | Descrição |
| :---- | :---- |
| Prateleira | Nome da prateleira de recomendação e sua respectiva estratégia e contexto de exibição (por exemplo, *home*, *pdp*, *cart*, *footer*). |
| Taxa de visualização | Percentual de visualizações da prateleira em relação às visualizações da página em que ela está inserida. |
| Taxa de cliques | Percentual de cliques nos produtos da prateleira em relação ao número de visualizações. |
| Conversão por click | Percentual de cliques na prateleira que resultaram em pedidos. |
| Vendas | Receita total gerada a partir das interações com a prateleira. |

### Ver detalhes

Para visualizar o gráfico de desempenho de uma prateleira específica no período selecionado, siga as instruções:

1. Clique na linha da prateleira ou no menu ⋮.  
2. Clique em **Ver detalhes**.

![ver-detalhes](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/dashboard-de-recomendacoes_3.png)

Na tela de detalhes, também é possível:

* Alterar o período selecionado.  
* Copiar o ID da prateleira por meio do menu ⋮ no canto superior direito da página.

### Copiar ID

Para copiar o identificador de uma prateleira de recomendação:

3. Na linha da prateleira ou na página de detalhes da prateleira, clique no menu ⋮.  
4. Clique em **Copiar ID**.

O identificador pode ser utilizado para:

* Implementação da estratégia no storefront.  
  Saiba mais na documentação do componente [Recommendation Shelf](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf) para Store Framework.  
* Facilitar a identificação da estratégia durante a solução de problemas ou ao acionar o Suporte.

## Selecionar período de análise

Para definir o período de análise do dashboard, siga as instruções abaixo:

1. Clique no período definido no canto superior direito da página.
2. Escolha uma das opções disponíveis:  
   * **Ontem**  
   * **Últimos 7 dias**  
   * **Últimos 28 dias**  
   * Datas personalizadas nos campos **Atual** e **Comparação**

     O período de comparação pode ser alterado manualmente ao preencher uma data diferente no campo **Comparação**. Nesse caso, apenas a duração do período precisa ser a mesma, mas o intervalo de datas em si pode ser ajustado livremente.

     Se não for alterado, o período de comparação será automaticamente definido como o período equivalente imediatamente anterior. Exemplo: ao selecionar **Últimos 7 dias**, a comparação será feita com os 7 dias anteriores ao período selecionado se você não especificar um outro intervalo de datas.

3. Clique em `Aplicar`.

![selecionar-periodo](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/dashboard-de-recomendacoes_4.gif)

## Filtrar informações

É possível filtrar os dados exibidos no dashboard por **Status** (*Ativo* ou *Inativo*) e **Tipo de campanha**:

* Mais populares  
* Recomendado para você  
* Produtos similares  
* Comprados juntos  
* Mais vendidos  
* Vistos recentemente  
* Interações recentes  
* Produtos visualmente similares

Para aplicar filtros no dashboard, siga os passos abaixo:

1. Clique em `Filtrar` no canto superior direito da página.  
2. Clique em `Status` ou `Tipo de campanha`.  
3. Marque a opção desejada.  
4. Clique em `Aplicar`.

É possível combinar os filtros de **Status** e **Tipo de campanha**.

Para remover um filtro, repita os passos 1 e 2 e clique em `Limpar`.

![filtrar-informacoes](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/dashboard-de-recomendacoes_5.gif)

## Saiba mais

* [Recomendações de produtos](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta)  
* [Recommendation Shelf (Store Framework)](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf)
* [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores)  
* [Implementing product recommendations in Faststore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore)
