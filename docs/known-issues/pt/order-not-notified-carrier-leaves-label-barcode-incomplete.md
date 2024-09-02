---
title: 'Pedido não notificado, transportadora deixa etiqueta com código de barras incompleto'
id: 2QjxFv2Ul2wKCdnYtrlF0T
status: PUBLISHED
createdAt: 2023-08-01T16:55:39.774Z
updatedAt: 2023-09-18T22:52:54.573Z
publishedAt: 2023-09-18T22:52:54.573Z
firstPublishedAt: 2023-08-01T16:55:40.545Z
contentType: knownIssue
productTeam: VTEX Shipping Network (VTEX Log)
author: 2mXZkbi0oi061KicTExNjo
tag: VTEX Shipping Network (VTEX Log)
slug: pedido-nao-notificado-transportadora-deixa-etiqueta-com-codigo-de-barras-incompleto
locale: pt
kiStatus: Backlog
internalReference: 872530
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os clientes que usam transportadoras parceiras da Shipping Network, ao solicitarem a emissão de etiquetas no Ready to Ship, podem receber o arquivo com o código de barras incompleto, o que pode impedir que o pacote seja postado.

## Simulação


Não foi possível reproduzir, apenas verificar conferindo as etiquetas enviadas pelos clientes com o código de barras incompleto e confirmando via API que o pacote não foi notificado.



## Workaround


A notificação manual do pedido novamente garante que a transportadora seja notificada e que o código de barras esteja completo e a etiqueta possa ser usada.





