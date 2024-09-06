---
title: "[Pedido FOB integrado com entrega 'Convencional'."
id: 74uM19UXEopXguM6m0JbOL
status: PUBLISHED
createdAt: 2022-12-23T12:40:05.775Z
updatedAt: 2022-12-23T12:40:06.357Z
publishedAt: 2022-12-23T12:40:06.357Z
firstPublishedAt: 2022-12-23T12:40:06.357Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: pedido-fob-integrado-com-entrega-convencional
locale: pt
kiStatus: Backlog
internalReference: 721951
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Precisamos rever o fluxo e entender porque pedidos como "Magalu Entregas/FOB" estão sendo integrados com "selectedSla = "Convencional", por exemplo.

Revista Luiza
Causa da raiz do produto:**_ Encomendas
Arquitetura:**_ FOB / Magalu Entregas


##

## Simulação


 ![](https://vtexhelp.zendesk.com/attachments/token/trNBBsjQKWcb75RAS5bGAtTAM/?name=image.png)

 ![](https://vtexhelp.zendesk.com/attachments/token/2BTcd1rvMRWs05Aq1uFjfBah0/?name=image.png)


    Se nenhum pedido de enviado isFOB=true, o SLA selecionado deve ser um do tipo FOB, como, por exemplo: "selectedSla": "vtex:fob_1" Se você deseja selecionar um SLA que não é do tipo FOB, o campo isFOB deve ser enviada como false ou não ser enviada.



##

## Workaround


n/d

