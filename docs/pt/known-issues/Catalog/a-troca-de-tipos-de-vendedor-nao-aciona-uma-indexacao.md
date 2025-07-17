---
title: "A troca de tipos de vendedor não aciona uma indexação"
id: 5RkGYncJlbxFZY4f0IUont
status: PUBLISHED
createdAt: 2025-06-10T16:45:40.854Z
updatedAt: 2025-06-10T16:45:41.511Z
publishedAt: 2025-06-10T16:45:41.511Z
firstPublishedAt: 2025-06-10T16:45:41.511Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-troca-de-tipos-de-vendedor-nao-aciona-uma-indexacao
locale: pt
kiStatus: Backlog
internalReference: 1242193
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A plataforma VTEX oferece duas opções distintas de tipos de vendedores no momento da redação desta edição: 1 (vendedor amplo) e 2 (vendedor regionalizado).

O tipo de vendedor pode ser alterado por meio da API https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog_system/pvt/seller. No entanto, ao fazer isso, todos os itens vendidos por esse vendedor devem ser indexados; caso contrário, os efeitos colaterais, como itens que deveriam estar aparecendo para vendedores específicos disponíveis, não serão atualizados corretamente.

## Simulação


1 - Altere a propriedade isBetterScope de um vendedor em sua loja.

2 - Verifique o histórico de indexação de um item após esse movimento e você poderá ver que seus dados indexados não foram atualizado

## Workaround


Reindexar o banco de dados após atualizar o vendedor em questão.





