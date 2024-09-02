---
title: 'Caracteres especiais no invoiceNumber causam falha no fluxo pós-compra'
id: 1tVPSLsB9SSZIF1KrNn3k2
status: PUBLISHED
createdAt: 2023-12-14T18:31:27.213Z
updatedAt: 2023-12-14T18:31:27.801Z
publishedAt: 2023-12-14T18:31:27.801Z
firstPublishedAt: 2023-12-14T18:31:27.801Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: caracteres-especiais-no-invoicenumber-causam-falha-no-fluxo-poscompra
locale: pt
kiStatus: Backlog
internalReference: 953285
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, o SNO (Shipping Notification Order) aceita que um número de fatura (invoiceNumber) seja enviado via API e UI com um "caractere especial" no final ou no início dos dados, por exemplo: "#123456".

No entanto, quando as faturas são recebidas nesse formato, alguns fluxos executados pelo sistema envolvido no fluxo pós-compra acabam retornando um erro porque não conseguem processar ou repassar o valor recebido. Exemplos de fluxos que podem falhar incluem atualizações de rastreamento, atualizações de status de pedidos faturados, comunicação com o sistema de hub de gifcard e qualquer outro sistema que use dados invoiceNumber pode ter seu fluxo comprometido devido ao uso de caracteres especiais no campo invoiceNumber.

## Simulação


1- Fature um pedido inserindo o seguinte exemplo de número de fatura: "#123456"; (caracteres especiais no início do número ou no final)

2- Observe que o pedido não será atualizado para o status de faturado

3- No caso de fluxos que envolvam um vendedor, no Get Order do pedido do vendedor será possível ver a fatura salva, mas mesmo assim o pedido do marketplace não será atualizado para faturado, pois o sistema não conseguirá repassar a fatura

## Workaround


Para esses casos, a solução alternativa é não usar os "caracteres especiais" na composição do invoiceNumber.






