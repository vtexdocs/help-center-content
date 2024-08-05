---
title: "O aplicativo de permissões do Storefront define 'documentType' como 'cpf'"
id: 1vd0gFWrP50UZacQ0QBKP8
status: PUBLISHED
createdAt: 2023-04-27T15:19:53.064Z
updatedAt: 2023-05-23T18:01:51.986Z
publishedAt: 2023-05-23T18:01:51.986Z
firstPublishedAt: 2023-04-27T15:19:53.612Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: o-aplicativo-de-permissoes-do-storefront-define-documenttype-como-cpf
locale: pt
kiStatus: Fixed
internalReference: 798330
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O aplicativo de permissões do storefront sempre define o campo "clientProfileData.documentType" como "cpf" no formulário de pedido. Isso pode fazer com que a transação seja negada pelo provedor.

## Simulação



- Instale o B2B Suite;
- Configure uma organização;
- Acessar o site e fazer um pedido

## Workaround


Use o snippet abaixo para substituir o "documentType" de seu país no formulário de pedido

    vtexjs.checkout .getOrderForm() .then(function(orderForm) { var clientProfileData = orderForm.clientProfileData clientProfileData.documentType = 'add here the key for' return vtexjs.checkout.sendAttachment( "clientProfileData", clientProfileData ) }) .done(function(orderForm){})





