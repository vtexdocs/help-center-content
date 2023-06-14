---
title: 'Incapaz de mudar o status no gateway quando a transação Cart objeto em /transação é "desconhecido".'
id: 3gWqk1T2xP3eRYZtXZLX3b
status: PUBLISHED
createdAt: 2023-03-23T14:27:16.116Z
updatedAt: 2023-03-23T14:27:16.706Z
publishedAt: 2023-03-23T14:27:16.706Z
firstPublishedAt: 2023-03-23T14:27:16.706Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: incapaz-de-mudar-o-status-no-gateway-quando-a-transacao-cart-objeto-em-transacao-e-desconhecido
kiStatus: Backlog
internalReference: 776837
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A fim de cancelar ou alterar um pedido para cenários divididos, nossa porta de entrada requer um objeto de carrinho. Entretanto, se o processo de checkout via OMS enviar um objeto de carrinho nulo/ desconhecido, nosso gateway não pode processar estas operações, resultando em um erro de análise da biblioteca Newtonsoft utilizada no gateway.


##

## Simulação


Para replicar o problema, atualizar o objeto do carrinho na entidade /transação com um valor nulo utilizando nossa API para o envio de dados adicionais.
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data


##

## Workaround


Se o objeto do carrinho inicial não estiver mais disponível, recuperá-lo e enviá-lo de volta para a entidade /transação utilizando nossa API para o envio de dados adicionais pode ser um processo desafiador. Se este for o caso, por favor, contate a equipe de suporte da VTEX para obter assistência.





