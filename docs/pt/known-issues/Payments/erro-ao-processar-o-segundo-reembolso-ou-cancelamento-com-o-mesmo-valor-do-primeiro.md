---
title: "Erro ao processar o segundo reembolso ou cancelamento com o mesmo valor do primeiro"
id: 17uP0QDzEPHmKvLMiyDYxc
status: PUBLISHED
createdAt: 2024-10-16T20:27:34.223Z
updatedAt: 2025-06-26T19:23:23.166Z
publishedAt: 2025-06-26T19:23:23.166Z
firstPublishedAt: 2024-10-16T20:27:35.166Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: erro-ao-processar-o-segundo-reembolso-ou-cancelamento-com-o-mesmo-valor-do-primeiro
locale: pt
kiStatus: Scheduled
internalReference: 1118560
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao solicitar um segundo reembolso parcial com o mesmo valor do primeiro, o gateway retorna a seguinte mensagem:

    Message: O cartão-presente já foi reembolsado.


Ou se estiver solicitando um segundo cancelamento parcial com o mesmo valor do primeiro, o gateway retorna:

    Mensagem: "O cartão-presente já foi cancelado"


Embora isso seja registrado na interação, o segundo reembolso/cancelamento não é realmente processado.
Esse cenário é muito mais comum para o segundo reembolso/cancelamento com o mesmo valor, mas também pode ocorrer em reembolsos subsequentes, desde que o valor solicitado seja igual à soma dos reembolsos já processados.

## Simulação



1. Faça uma compra exclusivamente com um cartão-presente (GC);
2. Conclua a transação;
3. Emitir um reembolso parcial de um valor menor que a metade do pagamento total;
4. Solicitar outro reembolso no mesmo valor do primeiro.



## Workaround


Para casos de reembolso, abra um tíquete com o suporte para aplicar a solução interna.
Para casos de cancelamento, cancele manualmente com seu provedor.




