---
title: 'A ordenação de grupos de especificação da categoria raiz não funciona'
id: 5iuLxVdAuK70VMYGts7CzJ
status: PUBLISHED
createdAt: 2022-08-09T00:46:23.102Z
updatedAt: 2024-02-16T20:25:08.305Z
publishedAt: 2024-02-16T20:25:08.305Z
firstPublishedAt: 2022-08-09T00:46:23.684Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-ordenacao-de-grupos-de-especificacao-da-categoria-raiz-nao-funciona
locale: pt
kiStatus: No Fix
internalReference: 634129
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, quando grupos de especificação são criados na categoria raiz, não é possível reordená-los por Admin ou API



## Simulação



1. Criar dois grupos de especificação na categoria raiz
2. Veja que você não pode alterar o pedido por Admin, apesar da mensagem de que é possível
3. Tente alterar o pedido utilizando a rota do Update Specification Group (`api/catalog_system/pvt/specification/group`)
4. Observe que o campo de posição na resposta não é alterado.



## Workaround


N/A

