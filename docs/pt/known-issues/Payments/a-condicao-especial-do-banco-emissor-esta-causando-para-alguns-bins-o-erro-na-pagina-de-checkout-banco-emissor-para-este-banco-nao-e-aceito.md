---
title: 'A Condição Especial do Banco Emissor está causando para alguns BINs o erro na página de checkout "Banco Emissor para este banco não é aceito".'
id: 7HgNpwcvqQDwSfJfv9KpY8
status: PUBLISHED
createdAt: 2022-03-25T19:04:12.310Z
updatedAt: 2022-11-25T22:04:57.905Z
publishedAt: 2022-11-25T22:04:57.905Z
firstPublishedAt: 2022-03-25T19:04:13.255Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: a-condicao-especial-do-banco-emissor-esta-causando-para-alguns-bins-o-erro-na-pagina-de-checkout-banco-emissor-para-este-banco-nao-e-aceito
locale: pt
kiStatus: Backlog
internalReference: 391549
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Usando as condições especiais no método de pagamento para filtrar o emissor está fazendo com que o caixa exiba um erro "Banco emissor não é aceito". O problema é intermitente e foi notado pela primeira vez ao utilizar o cartão de Co-branded de Pagamento Personalizado, mas também aconteceu no Método de Pagamento com Cartão de Crédito.



## Simulação


N/A



## Workaround


Remover a condição especial do banco emissor da condição de pagamento.

