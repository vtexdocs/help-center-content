---
title: 'A interface do usuário mostra que uma retirada foi selecionada no carrinho com assinaturas, mas não foi na API'
id: 6WUGylIHWZtfeAm7hplYHD
status: PUBLISHED
createdAt: 2024-03-08T19:08:16.010Z
updatedAt: 2024-03-08T19:08:17.012Z
publishedAt: 2024-03-08T19:08:17.012Z
firstPublishedAt: 2024-03-08T19:08:17.012Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-interface-do-usuario-mostra-que-uma-retirada-foi-selecionada-no-carrinho-com-assinaturas-mas-nao-foi-na-api
locale: pt
kiStatus: Backlog
internalReference: 996976
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As opções de retirada são oferecidas aos compradores em um carrinho com um item com uma assinatura. Quando uma das retiradas é selecionada, o checkout muda automaticamente para entrega, mas a interface do usuário ainda mostra que a retirada foi selecionada.

## Simulação



- Configure uma assinatura;
- Adicione o item com a assinatura ao carrinho;
- Na etapa de envio, selecione "Pick up in store" (Retirar na loja);
- Verifique o formulário de pedido via API, e a entrega será selecionada

## Workaround


Abra um ticket para o Suporte da VTEX solicitando a ativação de pontos de retirada para pedidos de assinatura.




