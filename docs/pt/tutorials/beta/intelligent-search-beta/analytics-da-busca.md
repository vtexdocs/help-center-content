---
title: 'Analytics da busca (Beta)'
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: search-analytics
locale: pt
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
createdAt: 2026-08-26T00:00:00.000Z
updatedAt: 2026-08-26T00:00:00.000Z
---

> ℹ️ Este artigo se refere à nova versão da página **Analytics da busca**. Para mais informações sobre a versão anterior, consulte [Intelligent Search - Analytics](https://help.vtex.com/pt/docs/tutorials/intelligent-search-analytics).

> ℹ️ Esta funcionalidade está na fase Beta fechada, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, entre em contato com o nosso [suporte](https://support.vtex.com/hc/pt-br/).

A página **Analytics da busca**, do VTEX Intelligent Search, organiza os dados das buscas realizadas na loja, oferecendo visibilidade sobre o desempenho da busca para que você possa realizar ações de melhoria, como criar redirecionamentos ou cadastrar sinônimos.

Para acessá-la no Admin VTEX, entre em *Storefront > Intelligent Search > Analytics da busca*.

## O que mudou?

> ℹ️ A página **Analytics da busca** foi reformulada. Algumas métricas são calculadas de forma diferente da versão anterior, então os números podem não ser comparáveis com períodos anteriores à mudança.

Confira a seguir as mudanças em relação à versão anterior da página:

- **Nova experiência de visualização:** novos gráficos, filtros e formas de analisar os dados. Saiba mais em [Métricas gerais](#metricas-gerais) e [Filtrar informações](#filtrar-informacoes).
- **Coleta de eventos:** os eventos de busca passam a ser coletados pelo [Activity Flow](https://developers.vtex.com/docs/guides/activity-flow). Lojas headless e apps precisam implementar o rastreamento de eventos de busca via Activity Flow para que as métricas reflitam o comportamento do comprador nesses canais. Confira os [Requisitos](#requisitos) para mais detalhes. Eventos no domínio myvtex não são considerados nas métricas.

  > ⚠️ Implementar o rastreamento via Activity Flow não ativa a nova página automaticamente. Os eventos coletados via Activity Flow aparecem apenas na nova página **Analytics da busca**, e não na [versão anterior](https://help.vtex.com/pt/docs/tutorials/intelligent-search-analytics). Para ativar a nova página, entre em contato com o suporte.

  Em lojas nas versões mais recentes do [Store Framework](https://developers.vtex.com/docs/guides/store-framework) ou [FastStore](https://developers.vtex.com/docs/guides/faststore) que utilizam componentes nativos, a coleta de eventos é feita automaticamente.

- **Taxa de cliques:** passa a considerar buscas e cliques únicos por sessão. Antes, cada filtro, troca de ordenação ou paginação era contado como uma nova busca para o mesmo termo.

## Requisitos

Para utilizar a nova página de **Analytics da busca**, é necessário:

- Ter o [Intelligent Search](https://help.vtex.com/pt/docs/tutorials/intelligent-search-visao-geral) habilitado na loja.
- Em lojas headless ou aplicativos mobile (Flutter ou React Native), ter o rastreamento de eventos de busca configurado via [Activity Flow](https://developers.vtex.com/docs/guides/activity-flow). Consulte os guias [Tracking search analytics events in headless web stores](https://developers.vtex.com/docs/guides/tracking-search-analytics-events-in-headless-web-stores) e [Tracking search analytics events in mobile apps](https://developers.vtex.com/docs/guides/tracking-search-analytics-events-in-mobile-apps). Sem essa configuração, as métricas exibidas podem não considerar o comportamento do comprador em todos os canais.
- Solicitar ao [suporte](https://support.vtex.com/hc/pt-br/) a ativação da nova tela.

## Métricas gerais

A seção superior da página apresenta o desempenho agregado das buscas realizadas na loja. Os dados variam de acordo com o [período selecionado para análise e comparação](#selecionar-periodo-de-analise) e os [filtros definidos](#filtrar-informacoes).

A linha contínua representa o período atual selecionado, enquanto a linha pontilhada representa o período de comparação.

![Métricas gerais da página Analytics da busca](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/intelligent-search-beta/analytics-da-busca_1.gif)

Clique em cada métrica para visualizar o gráfico correspondente. O gráfico apresenta a evolução da métrica selecionada ao longo do período. Ao passar o mouse sobre o gráfico, em uma data específica, os dados daquela data são exibidos.

Para escolher outra métrica para ser exibida no card e no gráfico, passe o mouse sobre uma das métricas e clique em **Alterar**, depois clique na métrica que deseja visualizar. Essa seleção também atualiza as colunas exibidas na [tabela de termos buscados](#metricas-por-termo-buscado) abaixo.

As informações apresentadas são:

| **Métrica** | **Descrição** | **Considera** | **Não considera** |
| :-: | :-: | :-: | :-: |
| **Taxa de conversão** | Percentual de buscas únicas que resultaram em uma compra concluída. Calculado como (total de pedidos ÷ buscas únicas) × 100. | Busca por *tênis*, clique em "Tênis masculino" na PLP, compra concluída. Conta como **1** busca convertida. | Compra feita pela navegação por categoria, sem passar por uma busca. |
| **Posição média dos cliques** | Posição média dos produtos clicados na lista de resultados, ponderada pelo número de cliques (soma das posições de clique ÷ total de cliques). | Busca por *tênis* com clique no produto da posição 1 e no produto da posição 4. A média é **2,5**. | Clique em um banner de campanha exibido acima da lista de resultados. Não é uma posição. |
| **Taxa de cliques (CTR)** | Percentual de buscas únicas que resultaram em pelo menos um clique em um produto na PLP. Calculado como (buscas únicas com clique ÷ total de buscas únicas) × 100. | Busca por *tênis*, filtro de tamanho e dois cliques em produtos na mesma sessão. Conta como **1** busca e **1** busca com clique. | Busca por *tênis*, filtro de tamanho e ordenação por menor preço, sem nenhum clique em produto. Conta como **1** busca e **0** buscas com clique. |
| **Receita total** | Soma do preço dos produtos adicionados ao carrinho a partir de um clique em um resultado de busca durante a sessão. Cada receita é atribuída ao termo inicial da busca. | Busca por *tênis*, clique em um produto de R$ 199 e adição ao carrinho. Conta **R$ 199** para o termo *tênis*. | Meia de R$ 30 que já estava no carrinho antes da busca, sem clique em resultado de busca. Não entra na receita. |
| **Total de buscas** | Contagem de termos de busca únicos por sessão do comprador. | Busca por *tênis* e, na mesma sessão, busca por *tênis corrida*. Conta **2** buscas. | Busca por *tênis* seguida de filtro de tamanho e ordenação na mesma sessão. Conta **1** busca. |
| **Cliques** | Número total de cliques em produtos realizados na página de resultados de busca (PLP). | Busca por *tênis* com clique no produto A e depois no produto B na mesma sessão. Conta **2** cliques. | Clique em um banner de campanha exibido na PLP. Não é um clique em produto. |
| **Cliques únicos** | Contagem de buscas únicas que resultaram em pelo menos um clique em um produto na PLP. Este é o numerador usado no cálculo da **Taxa de cliques**. | Busca por *tênis* com dois cliques em produtos na mesma sessão. Conta **1** clique único. | Busca por *tênis* com um clique, seguida de busca por *tênis corrida* com um clique. Conta **2** cliques únicos, uma por busca. |
| **Pedidos** | Contagem de pedidos únicos que contêm pelo menos um item adicionado a partir de uma PLP de busca. | Pedido com dois tênis adicionados a partir da busca por *tênis*. Conta **1** pedido. | Pedido feito só com itens adicionados pela navegação por categoria ou pela home. |

> ℹ️ Ao considerar mais de um dia no período de análise, a **Taxa de conversão**, a **Taxa de cliques** e a **Posição média dos cliques** são recalculadas a partir da soma dos valores do período (pedidos, cliques e buscas), e não pela média simples dos valores diários. Quando não há buscas ou cliques suficientes no período selecionado, essas métricas são exibidas como ***-***.

## Métricas por termo buscado

O valor de um pedido é atribuído ao último termo buscado pelo comprador. A tabela apresenta o desempenho individual de cada termo buscado na loja. Os dados variam de acordo com o [período selecionado](#selecionar-periodo-de-analise) e os [filtros definidos](#filtrar-informacoes).

![Tabela de métricas por termo buscado](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/intelligent-search-beta/analytics-da-busca_2.png)

A página apresenta as seguintes informações sobre cada termo buscado em uma tabela:

| **Coluna** | **Descrição** |
| :-: | :-: |
| Termo de busca | Termo pesquisado pelo comprador. |
| Taxa de conversão, Posição média dos cliques, Taxa de cliques, Receita total, Total de buscas, Total de cliques, Total de cliques únicos, Total de pedidos | As mesmas métricas de [Métricas gerais](#metricas-gerais), exibidas por termo buscado. As colunas exibidas seguem a seleção feita em **Alterar**. |

Por padrão, a tabela é ordenada pelo **Total de buscas**, mesmo quando essa coluna não está sendo exibida. É possível ordenar por qualquer outra métrica exibida, um critério de ordenação por vez. Para isso, clique no nome da coluna.

Use o campo de busca para encontrar um termo específico. A busca considera todas as páginas da tabela, não apenas as linhas já carregadas. A tabela carrega 30 linhas por vez, e mais linhas são carregadas automaticamente conforme você rola a página.

Os dados da tabela podem ser selecionados e copiados.

Passe o cursor sobre um indicador de tendência para ver as datas exatas do período atual e do período de comparação.

## Selecionar período de análise

Os dados são atualizados a cada hora. Para definir o período de análise da página, siga as instruções abaixo:

1. Clique no período definido no canto superior direito da página.
2. Escolha uma das opções disponíveis:
    - **Hoje:** considera o início às 00h do dia atual, e não as últimas 24 horas.
    - **Ontem**
    - **Últimos 7 dias**
    - **Últimos 28 dias**
    - Datas personalizadas nos campos **Atual** e **Comparação**
3. Clique em **Aplicar**.

O período de comparação pode ser alterado manualmente ao preencher uma data diferente no campo **Comparação**. Nesse caso, apenas a duração do período precisa ser a mesma, mas o intervalo de datas em si pode ser ajustado livremente.

Se não for alterado, o período de comparação será automaticamente definido como o período equivalente imediatamente anterior. Exemplo: ao selecionar **Últimos 7 dias**, a comparação será feita com os 7 dias anteriores ao período selecionado se você não especificar um outro intervalo de datas.

Quando o período selecionado é curto o suficiente, o eixo X do gráfico passa a exibir horas em vez de dias.

![Seleção do período de análise e comparação](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/intelligent-search-beta/analytics-da-busca_3.gif)

## Filtrar informações

É possível filtrar os dados exibidos na página pelos seguintes critérios:

| **Filtro** | **Opções** |
| :-: | :-: |
| **Tipo** | Com resultados ou Sem resultados. |
| **Dispositivo** | Celular, Tablet ou Computador. |
| **Elemento** | Busca ou Autocomplete. |
| **Idioma** | Idiomas configurados na loja. |

Para aplicar filtros na página, siga os passos abaixo:

1. Clique em **Filtrar** no canto superior direito da página.
2. Clique no filtro desejado (**Tipo**, **Dispositivo**, **Elemento** ou **Idioma**).
3. Marque a opção desejada.
4. Clique em **Aplicar**.

É possível combinar os filtros disponíveis.

Para remover um filtro, repita os passos 1 e 2 e clique em **Limpar**.

![Filtros da página Analytics da busca](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/intelligent-search-beta/analytics-da-busca_4.gif)

## Resolução de problemas

Se os dados não aparecerem ou parecerem incorretos, verifique os cenários abaixo.

| **Cenário** | **O que fazer** |
| :-: | :-: |
| Não há dados para o período e os filtros selecionados | Verifique se o rastreamento de eventos via [Activity Flow](https://developers.vtex.com/docs/guides/activity-flow) está configurado. Para lojas headless e apps, consulte os [guias de rastreamento](#requisitos). |
| Alguns números parecem desatualizados | Pode haver um problema temporário no pipeline de dados. O comportamento normal será restabelecido em breve. |
| Os dados não incluem um canal da loja, como headless ou apps | As métricas podem não refletir o comportamento do comprador nesse canal. Verifique se o canal envia eventos para o [Activity Flow](https://developers.vtex.com/docs/guides/activity-flow). Veja os [Requisitos](#requisitos). |
| Implementei o Activity Flow, mas não vejo os dados | Verifique se a nova página foi ativada para sua loja, porque a versão anterior não exibe eventos do [Activity Flow](https://developers.vtex.com/docs/guides/activity-flow). |

## Saiba mais

- [Intelligent Search](https://help.vtex.com/pt/docs/tutorials/intelligent-search-visao-geral)
- [Tracking search analytics events in headless web stores](https://developers.vtex.com/docs/guides/tracking-search-analytics-events-in-headless-web-stores)
- [Tracking search analytics events in mobile apps](https://developers.vtex.com/docs/guides/tracking-search-analytics-events-in-mobile-apps)
