---
title: 'Posso ordenar os produtos de acordo com o critério da loja?'
id: qfWKX2ZekoEoayiyo0uuA
status: ARCHIVED
createdAt: 2019-01-24T20:45:49.100Z
updatedAt: 2022-09-13T15:38:47.301Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:14:24.815Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2zh4tqFMxyMCgwaUcsS0O2
slug: posso-ordenar-os-produtos-de-acordo-com-o-criterio-da-loja
locale: pt
legacySlug: posso-ordenar-os-produtos-de-acordo-com-o-criterio-da-loja
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Por default, o sistema da VTEX traz os produtos ordenados pela relevância que têm no site, ou seja, mais vendidos e mais visitados nos últimos 30 dias.

Porém, é possível alterar essa ordenação por meio da Querystring. Basta inserir um parâmetro na URL para mudar a ordem de exibição.

Os parâmetros também podem ser usados em mapeamentos de URLs para redirecionar URLs específicas para outras, como páginas de listagem de produtos. Para saber mais sobre esse recurso, acesse [Mapeamento de URLs (Redirecionamento 301)](https://help.vtex.com/pt/tutorial/mapeamento-de-urls-redirecionamento-301--frequentlyAskedQuestions_623).

Estes são os parâmetros:

- __Preço (do menor para o maior)__: `?O=OrderByPriceASC`
- __Preço (do maior para o menor)__: `?O=OrderByPriceDESC`
- __Mais vendidos__: `?O=OrderByTopSaleDESC`
- __Mais bem avaliados__: `?O=OrderByReviewRateDESC`
- __Ordem alfabética A-Z__: `?O=OrderByNameASC`
- __Ordem alfabética Z-A__: `?O=OrderByNameDESC`
- __Data de lançamento (cadastrada no produto)__: `?O=OrderByReleaseDateDESC`
- __Melhor desconto__: `?O=OrderByBestDiscountDESC`
- __Score (do menor para o maior)__: `?O=OrderByScoreASC`
- __Score (do maior para o menor)__: `?O=OrderByScoreDESC`

Exemplo de como usar um parâmetro: `http://www.{AccountName}.com.br/{departamento}/{categoria}?O=OrderByPriceASC`

## Artigos relacionados
- [Como funciona o campo Score?](https://help.vtex.com/pt/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae?&utm_source=autocomplete)
- [Mapeamento de URLs (Redirecionamento 301)](https://help.vtex.com/pt/tutorial/mapeamento-de-urls-redirecionamento-301--frequentlyAskedQuestions_623)
