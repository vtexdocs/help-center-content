---
title: '[Amazon] Error Code 13013 while sending product to Amazon marketplace'
id: 5bmPQ4Jzi8HvoDoTaDFv9b
status: PUBLISHED
createdAt: 2023-10-27T11:24:52.357Z
updatedAt: 2023-12-18T17:35:20.302Z
publishedAt: 2023-12-18T17:35:20.302Z
firstPublishedAt: 2023-10-27T11:24:53.258Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-error-code-13013-while-sending-product-to-amazon-marketplace
locale: en
kiStatus: Fixed
internalReference: 926656
---

## Summary



Currently we have an issue while trying to export products for Amazon marketplace, there are some cases Amazon itself returns an error 13013. but the error is sometimes not logged in Bridge menu, and some products remains with sucess status, but when they actually have the error below


    "code": "13013", "message": "Não há registro do código SKU correspondente a esta atualização em sua conta. Isso geralmente ocorre quando há outros problemas com o código SKU.", "severity": "ERROR",



##

## Simulation



Inside the bridge products menu, you may see an error, showing the error code 13013, or any other message, but when checking the Amazon Portal que SKU might not be exported to Amazon.


##

## Workaround


Is there a workaround for this bug? If yes, describe it here. If not, write "N/A" or "There is no workaround available.". Do not remove this section if there is no workaround, please.





