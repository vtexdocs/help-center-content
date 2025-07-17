---
title: "Registros declarando que houve um reembolso, mas devido a um erro por parte do comprador, a reversão não ocorre de fato"
id: Bpa1ncKcUuKd7i5isR2D4
status: PUBLISHED
createdAt: 2022-03-17T21:07:16.944Z
updatedAt: 2023-05-17T17:24:11.178Z
publishedAt: 2023-05-17T17:24:11.178Z
firstPublishedAt: 2022-03-17T21:07:17.323Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: registros-declarando-que-houve-um-reembolso-mas-devido-a-um-erro-por-parte-do-comprador-a-reversao-nao-ocorre-de-fato
locale: pt
kiStatus: Backlog
internalReference: 545331
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Mesmo com os registros das transações informando que o estorno foi feito, ocorreu um erro no adquirente.
Para verificar o comportamento, é possível ver que nos eventos da transação há uma mensagem de reversão:

Estorno de xx,xx (moeda)

Procurando a TID no painel do adquirente, é possível provar que o estorno não foi feito se houver uma mensagem de erro no cancelamento.




## Simulação


Não é possível simular.



## Workaround


Envie a lista com a TID para a equipe OPS e, em caso de cancelamento parcial, informe o valor a ser revertido para que eles possam entrar em contato com o comprador e, desta forma, encaminhar esta lista para que eles possam reverter manualmente a lista em seu lado e eu retornarei com as cartas de cancelamento para cada um destes pedidos para que tenhamos prova de cancelamento.

