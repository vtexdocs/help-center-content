---
title: "Erro MELI ao enviar o rastreamento do pedido"
id: 4wdzb5xjelAkFnbuRCFXAt
status: PUBLISHED
createdAt: 2023-03-06T10:06:58.255Z
updatedAt: 2023-10-20T17:28:38.314Z
publishedAt: 2023-10-20T17:28:38.314Z
firstPublishedAt: 2023-03-06T10:06:59.162Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: erro-meli-ao-enviar-o-rastreamento-do-pedido
locale: pt
kiStatus: Fixed
internalReference: 764885
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



No momento, estamos registrando uma mensagem de erro dentro do menu Brige - Tracking, esse erro está sendo retornado pelo MELI quando enviamos o fluxo de rastreamento para ele.

É importante observar que isso não está afetando o fluxo, pois o rastreamento está funcionando corretamente, mas o problema é que estamos criando o registro como uma mensagem de erro quando deveria ser de sucesso (devido ao que o MELI retorna).

## Simulação



Dentro do menu Bridge - Tracking (Ponte - Rastreamento), uma mensagem de erro como a mostrada abaixo será exibida.

"Mensagem de erro não mapeada pela integração. Entre em contato com a VTEX informando o ocorrido para que o mapeamento seja realizado.
Mensagem de erro Mercado Livre:

## Workaround



Nenhuma ação é necessária, é importante observar que, embora a mensagem de erro seja exibida, isso não está afetando o fluxo de rastreamento, o XML está sendo enviado para o MELI e o status do pedido está sendo atualizado.




