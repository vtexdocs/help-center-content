---
title: 'Faixa de preço não respeita política comercial'
id: 3OsmwHOZyM0AQWA8CuK0aC
status: PUBLISHED
createdAt: 2017-10-17T17:50:40.970Z
updatedAt: 2022-12-22T20:46:23.778Z
publishedAt: 2022-12-22T20:46:23.778Z
firstPublishedAt: 2017-10-17T18:03:23.731Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: faixa-de-preco-nao-respeita-politica-comercial
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O filtro por faixa de preço, que é configurado nas opções de categoria, considera o preço cadastrado em todas as políticas comerciais da loja, ou seja, sempre vai imprimir o considerando o valor mais baixo cadastrado entre todas as políticas comerciais, possibilitando a exibição de um produto que não está na faixa de preço da política comercial específica.

## Simulação


1. Cadastre preços diferentes em políticas comerciais diferentes para o mesmo SKU;
2. Cadastre faixas de preço na categoria onde os preços cadastrados fiquem em faixas diferentes;
3. Na política comercial com o preço do SKU mais caro, faça o filtro por faixa de preço;
4. Veja que o valor do SKU considerado é o da outra política comercial, pois ele considera o valor mais barato entre todas as políticas.


## Workaround

Não existe solução de contorno para o cenário.

