---
title: 'Recomendações de produtos (Beta)'
id: 2QIexbD2FSXBxELUnFtg7g
status: PUBLISHED
createdAt: 2025-06-27T20:37:59.368Z
updatedAt: 2025-07-04T13:01:10.919Z
publishedAt: 2025-07-04T13:01:10.919Z
firstPublishedAt: 2025-06-27T20:41:49.041Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: product-recommendations-beta
legacySlug: recomendacoes-de-produtos-beta
locale: pt
subcategoryId: 6WyZwZfn89IsnNFNkTAi8d
---

> ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Se já é cliente da VTEX e deseja adotar essa funcionalidade em seu negócio, entre em contato com o [Suporte Comercial](/pt/docs/tracks/suporte-comercial). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

A funcionalidade de Recomendações de produtos permite que sua loja ofereça experiências personalizadas aos consumidores, sugerindo itens com base em diferentes estratégias de recomendação. Com ela, é possível exibir produtos relevantes ou complementares, impulsionar a taxa de conversão e elevar o ticket médio da sua operação.

![produtos-similares-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/recomendacoes-de-produtos-beta_1.png)

## Pré-requisitos

Para ativar as recomendações de produtos, é necessário ter uma loja implementada com [Store Framework](https://developers.vtex.com/docs/guides/store-framework), [FastStore](https://developers.vtex.com/docs/guides/faststore) ou no modelo [headless](https://developers.vtex.com/docs/guides/headless-commerce).

## Estratégias de recomendação

Confira a seguir as estratégias de recomendação disponíveis, implementadas diretamente pelo time da VTEX.

| Nome                           | Descrição                                                                         | Requisitos e como funciona |
| ------------------------------ | --------------------------------------------------------------------------------- | -------------------------- |
| Mais populares                 | Produtos com maior número de visualizações.                                       | - |
| Recomendado para você          | Recomendações personalizadas com base no perfil e no comportamento do usuário.    | Mínimo de 1000 compras com mais de 1 item no carrinho. O algoritmo analisa padrões de compra dos clientes. |
| Produtos similares             | Produtos semelhantes a um produto específico.                                     | A similaridade é determinada principalmente por estarem na mesma categoria do catálogo. Se não for suficiente, o sistema pode considerar também as especificações dos produtos. A qualidade depende da organização do seu catálogo. Se você deseja personalizar as regras de similaridade, entre em contato com o [Suporte VTEX](/pt/docs/tracks/suporte-na-vtex). |
| Comprados juntos (Cross-sell)  | Produtos complementares a um produto específico, comumente comprados em conjunto. | Mínimo de 1000 compras com mais de 1 item no carrinho. Identifica produtos complementares com base na quantidade de vezes que são comprados juntos no carrinho. |
| Mais vendidos                  | Produtos mais vendidos da loja.                                                   | - |
| Vistos recentemente            | Produtos visualizados mais recentemente pelo usuário.                             | - |
| Interações recentes            | Produtos com maior probabilidade de interação futura pelo usuário.                | - |
| Produtos visualmente similares | Produtos visualmente semelhantes a um produto específico.                         | Utiliza tecnologia de reconhecimento de imagem para identificar produtos com aparência visual semelhante, analisando características como cores, formas e padrões. |
| Coleção manual                 | Recomendações a partir de uma coleção definida manualmente.                       | - |

## Implementação

Para solicitar a ativação da funcionalidade de recomendações de produtos na sua loja, abra um ticket com o [Suporte Comercial](/pt/docs/tracks/suporte-comercial), indicando quais estratégias deseja ativar. A equipe da VTEX vai analisar a solicitação e entrar em contato.

### Store Framework

Para lojas implementadas com Store Framework, utilize o componente [Recommendation Shelf](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf), que permite exibir prateleiras de produtos recomendados em diferentes páginas da loja.

### FastStore

Para lojas implementadas com FastStore, consulte a documentação [Implementing product recommendations in FastStore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore) para integrar as APIs de recomendações de produtos na sua loja.

### Headless

Para implementações headless, utilize as APIs de recomendações de produtos da VTEX para consumir as estratégias de recomendação e exibir os produtos em sua aplicação customizada. Consulte a documentação [Integrating product recommendations in headless stores](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores) para mais informações sobre como integrar as APIs.
