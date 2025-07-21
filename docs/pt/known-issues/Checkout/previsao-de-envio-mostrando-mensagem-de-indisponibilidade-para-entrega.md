---
title: "Previsão de envio mostrando mensagem de indisponibilidade para entrega"
id: 5rL396csjLiJhD8morzfeb
status: PUBLISHED
createdAt: 2025-01-29T14:24:05.390Z
updatedAt: 2025-01-29T14:24:06.123Z
publishedAt: 2025-01-29T14:24:06.123Z
firstPublishedAt: 2025-01-29T14:24:06.123Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: previsao-de-envio-mostrando-mensagem-de-indisponibilidade-para-entrega
locale: pt
kiStatus: Backlog
internalReference: 1170877
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A visualização do frete no carrinho não considera o SLA selecionado, mesmo que a API de checkout esteja correta. Ela mostra a mensagem "Frete não disponível para sua localização".

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Checkout/previsao-de-envio-mostrando-mensagem-de-indisponibilidade-para-entrega_1.png)

Esse comportamento foi observado em países específicos, como Argentina e Colômbia, mas não se limita a esses 2 países.

## Simulação



- Adicione um item ao carrinho;
- Digite um código postal com o SLA disponível

## Workaround


N/A - Atualizar a página mostrará o SLA.




