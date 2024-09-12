---
title: 'Posso ordenar os produtos de acordo com o critério da loja?'
id: 33nmI2G2DN3J334gFcur68
status: ARCHIVED
createdAt: 2019-03-13T15:49:17.305Z
updatedAt: 2022-09-08T16:42:33.128Z
publishedAt: 
firstPublishedAt: 2019-03-13T15:50:45.091Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 2zh4tqFMxyMCgwaUcsS0O2
slug: posso-ordenar-os-produtos-de-acordo-com-o-criterio-da-loja
locale: pt
legacySlug: posso-ordenar-os-produtos-de-acordo-com-o-criterio-da-loja
---

Por default, o sistema da VTEX traz os produtos ordenados pela relevância que têm no site. Ou seja, têm prioridade os mais vendidos e mais visitados.

Porém, é possível alterar essa ordenação de duas formas: por meio do campo Score e por meio de Querystring. 

O funcionamento do campo Score é explicado no artigo [Como funciona o campo Score?](https://help.vtex.com/pt/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae "clique aqui").

Já o processo feito por meio da Querystring é mais simples: basta inserir um parâmetro na URL para mudar a ordem de exibição.

Veja abaixo esses parâmetros:

- __Menor preço__: `?O=OrderByPriceASC`
- __Maior preço__: `?O=OrderByPriceDESC`
- __Mais vendidos__: `?O=OrderByTopSaleDESC`
- __Mais bem avaliados__: `?O=OrderByReviewRateDESC`
- __Ordem alfabética A-Z__: `?O=OrderByNameASC`
- __Ordem alfabética Z-A__: `?O=OrderByNameDESC`
- __Data de lançamento (cadastrada no produto)__: `?O=OrderByReleaseDateDESC`
- __Melhor desconto__: `?O=OrderByBestDiscountDESC`
- __Pior desconto__: `?O=OrderByBestDiscountASC`

Exemplo: `http://www.{AccountName}.com.br/{departamento}/{categoria}?O=OrderByPriceASC`

>⚠️ **Você só pode usar um parâmetro de ordenação de produtos por vez.** Por isso, escolha aquele que melhor se adequa às suas necessidades (se precisar, você pode substituir os parâmetros utilizados)
