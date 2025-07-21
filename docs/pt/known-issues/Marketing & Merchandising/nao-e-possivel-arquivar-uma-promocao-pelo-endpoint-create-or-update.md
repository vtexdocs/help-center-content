---
title: "Não é possível arquivar uma promoção pelo endpoint Create Or Update Promotion"
id: 3MUDa3ZvdhoahJhZ4FvekO
status: PUBLISHED
createdAt: 2021-02-25T20:33:18.281Z
updatedAt: 2022-12-22T14:39:48.384Z
publishedAt: 2022-12-22T14:39:48.384Z
firstPublishedAt: 2021-05-04T20:08:56.465Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
tag: Pricing & Promotions
slugEN: nao-e-possivel-arquivar-uma-promocao-pelo-endpoint-create-or-update
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Durante a atualização de uma promoção por API, configurar o atributo `isArchived` como `true` não impede que a promoção seja exibida na tela de promoções **Não Arquivadas**.

## Simulação

Atualize uma promoção usando o endpoint [Create Or Update Promotion](https://developers.vtex.com/vtex-rest-api/reference/createorupdatecalculatorconfiguration), alterando os valores `isActive` para `false` e `isArchived` para `true`. A promoção será arquivada pela API, mas não será removida da tela **Não Arquivadas** e continuará com a flag de **Arquivar** no cartão da promoção.

## Workaround

Utilize o endpoint [Archive a Promotion](https://developers.vtex.com/vtex-rest-api/reference/archivepromotion-1) para arquivar a promoção.

