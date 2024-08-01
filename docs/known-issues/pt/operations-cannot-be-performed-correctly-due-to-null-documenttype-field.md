---
title: 'As operações não podem ser executadas corretamente devido ao campo documentType nulo.'
id: 5cZWkKc0ZXnMZCw4bvXJjA
status: PUBLISHED
createdAt: 2023-05-11T17:33:04.077Z
updatedAt: 2023-12-06T15:21:16.013Z
publishedAt: 2023-12-06T15:21:16.013Z
firstPublishedAt: 2023-05-11T17:33:04.511Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: as-operacoes-nao-podem-ser-executadas-corretamente-devido-ao-campo-documenttype-nulo
locale: pt
kiStatus: Backlog
internalReference: 697107
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns provedores precisam necessariamente que `documentType` seja diferente de `null`, ou seja, que seja preenchido corretamente para realizar algumas operações de pagamento.

Até o momento, temos dois cenários conhecidos:

1. A ausência desse campo não permite que o pagamento seja analisado corretamente pelo antifraude, o que faz com que a transação corra risco.
2. A ausência do campo impede que o pagamento seja autorizado e, consequentemente, faz com que a transação seja cancelada.

## Simulação


Esse problema ocorre quando um cliente usa informações de uma empresa para concluir um pedido.
Se o nome da empresa for usado para concluir a transação, o campo `documentType` não será preenchido, causando problemas com a aprovação do pagamento.



## Workaround



Para o primeiro cenário, é possível usar uma API interna para ignorar a etapa de análise antifraude.
Apesar de ser fortemente desencorajada, essa é uma operação possível.

