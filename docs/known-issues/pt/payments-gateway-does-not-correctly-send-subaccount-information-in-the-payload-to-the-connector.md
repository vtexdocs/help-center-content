---
title: 'O Gateway de Pagamentos não envia corretamente as informações da subconta na carga útil para o conector'
id: 49kjQUzk5LmPmfeCxpqdzg
status: PUBLISHED
createdAt: 2023-05-02T19:55:08.282Z
updatedAt: 2023-05-11T14:52:50.914Z
publishedAt: 2023-05-11T14:52:50.914Z
firstPublishedAt: 2023-05-02T19:55:08.857Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-gateway-de-pagamentos-nao-envia-corretamente-as-informacoes-da-subconta-na-carga-util-para-o-conector
locale: pt
kiStatus: Backlog
internalReference: 801012
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O problema está na formulação das URLs que são enviadas para o provedor de pagamento. Portanto, o que acontece é que, em cenários em que essas URLs são diferentes, como no caso de uma conta franqueada que processa pagamentos e lojas em um fast store, a diferença entre as URLs geradas no pagamento e a URL esperada pelo checkout faz com que o aplicativo não seja renderizado.

Assim, o problema se estende à arquitetura das contas VTEX, pois o parceiro relatou que o aplicativo funcionava em cenários legados ou VTEX IO sem contas franqueadas. Em resumo, o que acontece é que, quando a URL do InBound é enviada, ela vai para a conta principal, pois é ela que processa o pagamento. No entanto, a URL do checkout que fez o pedido é do fast store e, quando o gateway retorna a URL para renderizar o aplicativo de pagamento, ela é diferente da URL do checkout, fazendo com que o aplicativo não funcione.

## Simulação


Faça um pedido em um checkout de fast store que seja uma subconta ou franquia em que um aplicativo 3DS2 esteja configurado.



## Workaround


N/A





