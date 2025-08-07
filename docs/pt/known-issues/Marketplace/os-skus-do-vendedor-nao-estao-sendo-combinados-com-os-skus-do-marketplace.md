---
title: "Os skus do vendedor não estão sendo combinados com os skus do marketplace"
id: 3nMHzPCop8uKOD98GkT3k
status: PUBLISHED
createdAt: 2024-10-03T16:23:17.416Z
updatedAt: 2024-10-03T16:23:18.274Z
publishedAt: 2024-10-03T16:23:18.274Z
firstPublishedAt: 2024-10-03T16:23:18.274Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: os-skus-do-vendedor-nao-estao-sendo-combinados-com-os-skus-do-marketplace
locale: pt
kiStatus: Backlog
internalReference: 1100159
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Apesar de um produto idêntico no catálogo do Marketplace, os SKUs dos vendedores não estão sendo combinados e aprovados automaticamente. Em vez disso, eles estão indo para a Área Pendente ou, nos casos de marketplaces com o sinalizador de aprovação automática ativado, estão sendo criados como novos no catálogo.

_Esse cenário geralmente acontece somente com SKUs que têm um "Nome do produto" grande ou que têm caracteres especiais, como_ `+` _ou_ `&`_._

## Simulação



1. Verifique se o mesmo produto existe no catálogo do marketplace e se está indexado.
2. Verifique se o vendedor enviou um produto com pelo menos o mesmo "Product Name".
3. Verifique se as regras do Matcher do marketplace estão configuradas corretamente.
4. Verifique se o SKU não foi correspondido como deveria

## Workaround


Aprovar manualmente as SKUs com a correspondência incorreta.





