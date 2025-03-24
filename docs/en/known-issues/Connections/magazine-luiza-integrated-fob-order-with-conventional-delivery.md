---
title: "[Magazine Luiza] Integrated FOB order with 'Conventional' delivery"
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
slugEN: magazine-luiza-integrated-fob-order-with-conventional-delivery
locale: en
kiStatus: Backlog
internalReference: 721951
---

## Summary


We need to review the flow and understand why orders like `"Magalu Entregas/FOB"` are being integrated with` selectedSla = "Convencional"` for example.

_**Marketplace:**_ Magazine Luiza
_**Product Root Cause:**_ Orders
_**Architecture:**_ FOB / Magalu Entregas


##

## Simulation


 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Connections/magazine-luiza-integrated-fob-order-with-conventional-delivery_1.png)

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Connections/magazine-luiza-integrated-fob-order-with-conventional-delivery_2.png)


    Se no request for enviado isFOB=true, o SLA selecionado deve ser um do tipo FOB, como, por exemplo: "selectedSla": "vtex:fob_1" Se você deseja selecionar um SLA que não é do tipo FOB, o campo isFOB deve ser enviada como false ou não ser enviada.



##

## Workaround


n/a

