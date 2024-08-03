---
title: 'O conector PayU não consegue processar pagamentos quando há dados de envio com mais de 40 caracteres.'
id: 1SEaraqWshBYzjOcL9LxsN
status: PUBLISHED
createdAt: 2023-09-18T21:02:32.217Z
updatedAt: 2023-09-18T21:02:32.812Z
publishedAt: 2023-09-18T21:02:32.812Z
firstPublishedAt: 2023-09-18T21:02:32.812Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-conector-payu-nao-consegue-processar-pagamentos-quando-ha-dados-de-envio-com-mais-de-40-caracteres
locale: pt
kiStatus: Backlog
internalReference: 902539
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O conector da PayU não trata os dados de endereço recebidos do checkout e os envia ao provedor como estão, sem nenhuma modificação. No entanto, a documentação do provedor afirma que esses dados não devem exceder 40 caracteres.

Isso faz com que a transação seja cancelada devido a um erro de autorização de pagamento com a mensagem:

    message: El tamaño debe estar entre 0 y 40 property: , message: El tamaño debe estar entre 0 y 40


## Simulação



- Durante a etapa de envio no checkout, selecione um endereço de entrega com mais de 40 caracteres, como "Región Del Libertador General Bernardo O'Higgins (VI)" no Chile.
- Selecione um método de pagamento processado por meio do conector PayU

## Workaround


N/A





