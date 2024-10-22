---
title: 'Peso de SKU KIT divergente entre simulação de frete e cadastro (admin)'
id: 4YAWHxWpPOAoyi0O8MuEeC
status: PUBLISHED
createdAt: 2017-09-29T12:52:49.738Z
updatedAt: 2022-12-22T20:45:55.001Z
publishedAt: 2022-12-22T20:45:55.001Z
firstPublishedAt: 2017-09-29T13:16:34.258Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-kit-weight-differs-between-shipping-simulation-and-registration-admin
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Um SKU KIT deve ter como peso a soma dos pesos de seus componentes. Quando um KIT está sendo montado, o sistema deveria incrementar o peso de cada componente ao peso do KIT porém, isso apenas está acontecendo quando o KIT (Pai) é editado e atualizado. O principal impacto é na simulação de frete, já que na maioria das vezes o KIT fica com um peso bem superior ao real.

![simulacao de entrega](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Marketing & Merchandising/peso-de-sku-kit-divergente-entre-simulacao-de-frete-e-cadastro-admin_1.png)

## Simulação

Para simular, basta criar um SKU KIT manualmente pelo admin. Esse artigo descreve cada passo do cadastro de KIT: [Cadastrando Kit](http://help.vtex.com/pt/tutorial/cadastrando-kit "Cadastrando Kit")

## Workaround

Para contornar esse comportamento, sempre que observar essa divergência, acesse o SKU KIT (Pai) pelo admin e clique no botão salvar (fazendo ou não alterações). O mesmo processo pode ser feito por planilha. Depois disso, aguarde alguns instantes pela conclusão da indexação.

