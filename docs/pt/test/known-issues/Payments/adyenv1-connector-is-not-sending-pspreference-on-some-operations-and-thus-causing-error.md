---
title: 'O conector AdyenV1 não está enviando pspReference em algumas operações e, portanto, causando erros'
id: 3Eut9j0dxzywSk3ssvRo3l
status: PUBLISHED
createdAt: 2023-05-11T16:44:19.660Z
updatedAt: 2023-05-11T17:49:08.119Z
publishedAt: 2023-05-11T17:49:08.119Z
firstPublishedAt: 2023-05-11T16:44:20.204Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-conector-adyenv1-nao-esta-enviando-pspreference-em-algumas-operacoes-e-portanto-causando-erros
locale: pt
kiStatus: Backlog
internalReference: 758411
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

Em algumas operações, o conector nativo da AdyenV1 não está enviando o código `pspsReference` para a Adyen. Como esse campo é obrigatório para essa integração, recebemos uma resposta de erro quando ele está ausente.

O motivo da ausência desse campo está sendo investigado.


## Simulação


Faça um pedido com o Adyen Connector e tente cancelá-lo.



## Workaround


N/A.

