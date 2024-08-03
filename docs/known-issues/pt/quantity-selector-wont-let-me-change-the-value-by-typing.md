---
title: 'O Quantity Selector não permite que eu altere o valor digitando'
id: 4whARKlTiLQhTluJrIRfO5
status: PUBLISHED
createdAt: 2024-06-28T15:01:34.187Z
updatedAt: 2024-07-05T16:17:08.672Z
publishedAt: 2024-07-05T16:17:08.672Z
firstPublishedAt: 2024-06-28T15:01:35.225Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: o-quantity-selector-nao-permite-que-eu-altere-o-valor-digitando
locale: pt
kiStatus: Fixed
internalReference: 1057544
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O componente seletor de quantidade na Faststore está apresentando um bug. Se o valor mínimo de um produto for 10 e eu quiser digitar 15, o seletor não permitirá que eu exclua o 0 porque ele permitirá que digitemos 1, que seria um valor menor do que a quantidade mínima. Se eu quiser digitar 15, preciso digitar 150 e então poderei excluir o 0.

## Simulação


Você pode testá-lo em nossa loja padrão em nossa página de documentação:
https://developers.vtex.com/docs/guides/faststore/molecules-quantity-selector
https://starter.vtex.app/handmade-plastic-chips-9009169/p

Nesse caso, o valor mínimo é 1 e o valor máximo é 10.
Tente digitar 2 excluindo o valor 1, mas ele não permitirá que você digite porque, depois de excluir o 1, o valor será menor que o valor mínimo

## Workaround


N/A





