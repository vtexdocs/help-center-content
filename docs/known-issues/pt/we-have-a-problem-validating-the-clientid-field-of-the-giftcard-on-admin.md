---
title: 'Temos um problema de validação do campo ClientId do Giftcard na administração'
id: 4S7CziQfj5P2NLAgUKnJnP
status: PUBLISHED
createdAt: 2022-03-28T00:29:38.482Z
updatedAt: 2024-02-16T20:24:40.988Z
publishedAt: 2024-02-16T20:24:40.988Z
firstPublishedAt: 2022-03-28T00:29:39.028Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: temos-um-problema-de-validacao-do-campo-clientid-do-giftcard-na-administracao
locale: pt
kiStatus: No Fix
internalReference: 454388
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Temos um problema de validação no campo ClientId na tela Giftcards. O campo originalmente chamado CPF/CNPJ em português, foi traduzido para o inglês como clientId. Mas, quando o usuário deseja criar um novo Giftcard através da UI, o campo é formatado automaticamente inserindo os caracteres ".", "-" e "/" para que os dados inseridos estejam de acordo com as normas do CPF ou CNPJ.



## Simulação



1. Vá para uma conta teste e mude o idioma para o inglês e abra a página de Giftcards
2. Crie um novo Giftcard preenchendo qualquer número no campo clientId e você verá que os números serão formatados automaticamente.



## Workaround


A solução é criar cartões-presente através de API

