---
title: 'Quando um componente de kit look não tem estoque, kit aparece esgotado na busca'
id: 5PRtTKk1HyGkKciOussWEI
status: PUBLISHED
createdAt: 2017-03-29T23:44:56.615Z
updatedAt: 2022-12-22T20:43:08.857Z
publishedAt: 2022-12-22T20:43:08.857Z
firstPublishedAt: 2017-03-29T23:46:36.720Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: when-a-component-of-the-kit-look-is-out-of-stock-the-kit-is-shown-as-sold-out-on-searching
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Quando um componente de um kit look fica sem estoque, todo o kit é exibido como esgotado na busca.

## Simulação

<!--- Conta original era automacaoqa, removemos por conta de EDU-2582 --->

Kit Look: `https://lojateste.vtexcommercebeta.com.br/admin/site/ProdutoForm.aspx?id=2000205`

Componente indisponível: `https://lojateste.vtexcommercebeta.com.br/admin/site/SkuForm.aspx?IdSku=2000362`

Exibição correta na página de produto: `https://lojateste.vtexcommercebeta.com.br/admin/site/SkuForm.aspx?IdSku=2000362`

Exibição incorreta na busca: `https://lojateste.vtexcommercebeta.com.br/kits`

## Workaround

Apenas utilize Kit Look se puder garantir que todos os componentes possuem estoque.

