---
title: "O primeiro endereço da lista de endereços incompleto não preenche os dados de perfil/envio no checkout"
id: 2AqDZb1AGBjmeMOBU0JkLQ
status: PUBLISHED
createdAt: 2024-01-03T20:44:07.692Z
updatedAt: 2024-01-03T20:49:41.249Z
publishedAt: 2024-01-03T20:49:41.249Z
firstPublishedAt: 2024-01-03T20:44:11.604Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: o-primeiro-endereco-da-lista-de-enderecos-incompleto-nao-preenche-os-dados-de-perfilenvio-no-checkout
locale: pt
kiStatus: Backlog
internalReference: 366975
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um usuário tem mais de um endereço em seu perfil e o primeiro endereço na lista de endereços está incompleto, independentemente de os outros serem válidos, o checkout não preenche automaticamente os dados de perfil/envio após a adição do e-mail.

## Simulação



- Adicione 2 endereços a um perfil, sendo que o primeiro está incompleto;
- Montar um carrinho e adicionar o e-mail;
- Nenhum dado de perfil/endereço é preenchido

## Workaround


Remova o endereço incompleto do perfil por meio dos dados mestre




