---
title: 'Data de expiração da condição especial não é apagada'
id: 4UuFAcukNrutyJOthTPxAA
status: PUBLISHED
createdAt: 2022-03-21T19:49:55.408Z
updatedAt: 2022-11-25T22:08:07.423Z
publishedAt: 2022-11-25T22:08:07.423Z
firstPublishedAt: 2022-03-21T19:49:55.888Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: data-de-expiracao-da-condicao-especial-nao-e-apagada
locale: pt
kiStatus: Backlog
internalReference: 547046
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o cliente configura uma Condição Especial por um período de tempo e deseja apagar esta configuração, apenas o período é apagado, a recorrência desta configuração não é apagada. Isto significa que mesmo que a configuração de programação da Condição de Pagamento seja removida, o campo `dateIntervals' continua a indexar e pára de indexar a Regra de Pagamento.



## Simulação



1. Estabelecer uma nova condição de pagamento e adicionar a data de vencimento e a recorrência da Condição Especial.
2. Utilize as Regras de Obtenção por Id endpoint para ver os campos `beginDate`, `endDate` e `dateIntervals`. Ambos são preenchidos.
3. Em seguida, exclua a data de vencimento e a recorrência da configuração da Condição Especial.
4. 4. Utilize as regras Get by Id endpoint para ver os campos `beginDate`, `endDate` e `dateIntervals`. O campo `dateIntervals` ainda será preenchido com as informações anteriormente excluídas.



## Workaround


Uma possível solução seria duplicar a condição de pagamento, de modo que a nova regra não terá a configuração "dateIntervals". Portanto, a primeira Condição de Pagamento pode ser eliminada.

