---
title: 'Trava de Preço - Definição de conceito'
id: 7JZhLmI3mjBVu0RMOueoy3
status: PUBLISHED
createdAt: 2019-07-04T13:54:19.429Z
updatedAt: 2020-02-13T15:45:22.885Z
publishedAt: 2020-02-13T15:45:22.885Z
firstPublishedAt: 2019-07-17T19:47:20.847Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: trava-de-preco-definicao-de-conceito
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precos-101
---

## Definição 

A mudança de preços dos SKUs da sua loja é uma ação delicada e que pode causar impactos indesejáveis caso não seja feita com cuidado. Podem ocorrer situações em que, devido a algum erro de cadastro, um SKU seja vendido por um preço muito abaixo do desejado. 

Para aumentar a segurança desta operação, é possível configurar as **variações máximas e mínimas** do preço de um item. Esta funcionalidade garante que os preços dos SKUs não sejam alterados para valores indesejados.

Caso você tente alterar o preço do SKU acima ou abaixo do percentual de variação configurado, a seguinte mensagem será retornada na UI:  

`Price cannot be increased more than {{upperLimit}}% at a time, from {{currentValue}} to {{newValue}} ({{variation}}% increase)`  

ou

`Price cannot be decreased more than {{lowerLimit}}% at a time, from {{currentValue}} to {{newValue}} ({{variation}}% decrease)`

## Exemplos

Vamos considerar que você configurou uma trava de preço com **Limite superior** de 50% e **Limite inferior** de 10%. Isso significa que se você aumentar um preço acima de 50% ou diminuir um preço com uma variação acima de 10%, a trava de preço será acionada.

Dessa maneira, vamos usar como exemplo um SKU que tenha um preço de R$ 100,00. 

Se você tenta alterar o preço para R$ 160,00, **a trava será acionada**, já que a variação do preço foi de 60% e a **trava de limite superior** prevê uma variação máxima de 50%. Com isso, o preço será mantido em R$ 100,00.

Se você alterar o preço para R$ 20,00, **a trava será acionada**, já que a variação do preço foi de 80% e a **trava de limite inferior** prevê uma variação máxima de 10%. Com isso, o preço será mantido em R$ 100,00.
