---
title: "A rota /_search do sistema de cartões-presente intermitentemente não devolve comprovantes quando o cabeçalho da faixa REST é inferior a 10."
id: 1WgbuMggOFUYFm2HseAxnd
status: PUBLISHED
createdAt: 2023-03-13T22:29:35.009Z
updatedAt: 2023-03-13T22:29:35.922Z
publishedAt: 2023-03-13T22:29:35.922Z
firstPublishedAt: 2023-03-13T22:29:35.922Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: a-rota-search-do-sistema-de-cartoespresente-intermitentemente-nao-devolve-comprovantes-quando-o-cabecalho-da-faixa-rest-e-inferior-a-10
locale: pt
kiStatus: Backlog
internalReference: 770337
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um cenário onde o cliente tem comprovantes de fidelidade e chega à caixa, espera-se que a rota /_search devolva todos os comprovantes vinculados a esse usuário. Entretanto, o checkout passa o cabeçalho com a faixa de REST = 0-9. Em algumas contas, esta faixa não é suficiente e a API retorna uma matriz vazia. Quando simulamos a chamada diretamente à API com um intervalo maior que 10, podemos recuperar pelo menos um comprovante.


##

## Simulação


Para ter uma loja nesta situação e fazer um POST para esta rota https://developers.vtex.com/docs/api-reference/giftcard-api#post-/giftcards/_search passando o cabeçalho REST-range=giftcard=0-9.


##

## Workaround


Use um número maior do que a faixa de 0-9. Entretanto, o checkout não personaliza este campo.





