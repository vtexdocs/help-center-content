---
title: Konduto AF não pode completar um pedido quando falta a contaId.
id: CGHZoCfr01ATsbtiLU9ym
status: PUBLISHED
createdAt: 2022-03-03T22:09:57.638Z
updatedAt: 2022-11-25T22:05:52.845Z
publishedAt: 2022-11-25T22:05:52.845Z
firstPublishedAt: 2022-03-03T22:09:58.094Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: konduto-af-nao-pode-completar-um-pedido-quando-falta-a-contaid
kiStatus: Backlog
internalReference: 496298
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Algumas transações não podem ser concluídas porque a Konduto antifraude não faz o pedido apropriado porque falta a conta utilizada para obter informações de pagamento na tabela de banco de dados da conta. Isto pode ser validado observando a rota de pagamento onde o nó "useAccountId" é falso neste caso.

**{**"nome": "usedAccountId", "valor": "Falso "**}****



## Simulação


Este erro não pode ser reproduzido neste momento, ele ocorre de forma intermitente.



## Workaround


Não há nenhuma solução disponível.

