---
title: 'A desactualização do Mastercard Debit regex está nos levando a identificar erroneamente alguns BINs'
id: 5gx4dSY2P5gGE0JI661hGL
status: PUBLISHED
createdAt: 2022-08-20T00:03:11.640Z
updatedAt: 2022-11-25T22:04:24.418Z
publishedAt: 2022-11-25T22:04:24.418Z
firstPublishedAt: 2022-08-20T00:03:12.490Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-desactualizacao-do-mastercard-debit-regex-esta-nos-levando-a-identificar-erroneamente-alguns-bins
kiStatus: Backlog
internalReference: 642136
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns BINs não estão sendo identificados corretamente no checkout. A marca do cartão é determinada por um regex que pode eventualmente estar desatualizado, fazendo com que a marca do cartão não seja identificada ou seja mal identificada.



## Simulação



1. Configurar duas Condições de Pagamento uma para débito com cartão Mastercard
2. Adicione um item aleatório ao seu carrinho na loja e opte por pagá-lo com cartão de débito
3. Preencha o número do cartão com o Mastercard Debit BIN 551898 e complete-o com números aleatórios.
4. Preencher as demais informações do cartão com dados falsos
5. Como o cartão não pôde ser identificado, o checkout pedirá para confirmar o número do cartão e a marca do cartão já pode ser selecionada como outra marca de cartão.



## Workaround


Não há solução.

