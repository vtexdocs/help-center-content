---
title: "Compradores que não conseguem acessar a etapa de pagamento diretamente com um perfil completo e opção de retirada disponível"
id: 4cRa7KS8AHmNpwEBUDFRdM
status: PUBLISHED
createdAt: 2025-06-12T20:55:53.412Z
updatedAt: 2025-06-12T20:55:54.242Z
publishedAt: 2025-06-12T20:55:54.242Z
firstPublishedAt: 2025-06-12T20:55:54.242Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: compradores-que-nao-conseguem-acessar-a-etapa-de-pagamento-diretamente-com-um-perfil-completo-e-opcao-de-retirada-disponivel
locale: pt
kiStatus: Backlog
internalReference: 1243953
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao tentar acessar a etapa de pagamento do checkout diretamente pelo URL (`/checkout?orderFormId={orderFormId}#/payment`), o comprador é levado para a etapa de envio.

Isso acontece se o usuário (e-mail) presente nas informações clientProfileData do formulário de pedido tiver um perfil completo **e** houver uma opção de retirada disponível para o carrinho.

## Simulação



- Crie um carrinho de um usuário que tenha um perfil completo e copie o orderFormId dele;
- Em uma nova guia anônima, tente acessar a página de pagamento desse carrinho diretamente usando o link `/checkout?orderFormId={orderFormId}#/payment`;
- Se houver uma opção de retirada disponível, o comprador será direcionado para a etapa de envio

## Workaround


N/A





