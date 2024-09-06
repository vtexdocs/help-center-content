---
title: 'O componente Omnishipping não preencherá o campo PickupReceiver quando o cliente informar pela primeira vez um endereço para entrega'
id: 0vYgYP5NTflaVEBiAchhL
status: ARCHIVED
createdAt: 2023-12-01T14:11:00.160Z
updatedAt: 2023-12-04T13:28:38.612Z
publishedAt: 
firstPublishedAt: 2023-12-01T14:11:00.848Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-componente-omnishipping-nao-preenchera-o-campo-pickupreceiver-quando-o-cliente-informar-pela-primeira-vez-um-endereco-para-entrega
locale: pt
kiStatus: Backlog
internalReference: 945896
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Ao usar o componente **Omnishipping** no checkout, o campo **PickupReceiver** aparecerá em branco quando deveria ter o nome que o cliente inseriu na etapa de Identificação. Isso só acontece se o cliente informar primeiro um endereço para entrega e depois clicar na guia Pickup para selecionar um ponto de coleta.

## Simulação



1. Instale o componente Omnishipping em uma loja sem nenhuma personalização no checkout
2. Inicie um processo de checkout e preencha as informações de identificação
3. Selecione um endereço para entrega e, em seguida, clique em Pickup Option (Opção de coleta)
4. O campo PickupReceiver aparecerá em branco




## Workaround


N/A





