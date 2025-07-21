---
title: "Pagamentos duplicados com as mesmas informações"
id: 6NYsfYOk6vOo8WjnlycjA
status: PUBLISHED
createdAt: 2025-02-17T18:22:28.796Z
updatedAt: 2025-05-08T13:09:28.425Z
publishedAt: 2025-05-08T13:09:28.425Z
firstPublishedAt: 2025-02-17T18:22:29.371Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pagamentos-duplicados-com-as-mesmas-informacoes
locale: pt
kiStatus: Backlog
internalReference: 1154246
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Pagamentos duplicados com as mesmas informações enviadas ao gateway, levando ao cancelamento da transação.

É possível confirmar o cenário verificando algumas informações, como:


- O registro de erros retornado na transação

Ex:

**PaymentGateway**
_O valor da transação (111503,00) não é igual à soma dos pagamentos (223006,00)._



-

Usando a API https://{accountName}.vtexpayments.com.br/api/pvt/transactions/{transactionId}/payments, verifique o número de objetos na matriz transaction.payments. Se forem encontrados dois objetos, esse KI se encaixa no cenário.


## Simulação


Não é possível simular



## Workaround


Não há nenhuma solução alternativa disponível.





