---
title: 'A interface de usuário do checkout não está usando automaticamente o "envio enxuto" para itens sem métodos de envio comuns'
id: 2LXp8VCAay7Ic9MBfbtirT
status: PUBLISHED
createdAt: 2024-04-02T15:27:23.003Z
updatedAt: 2024-04-02T15:27:24.004Z
publishedAt: 2024-04-02T15:27:24.004Z
firstPublishedAt: 2024-04-02T15:27:24.004Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-interface-de-usuario-do-checkout-nao-esta-usando-automaticamente-o-envio-enxuto-para-itens-sem-metodos-de-envio-comuns
locale: pt
kiStatus: Backlog
internalReference: 329846
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As configurações da interface do usuário do checkout permitem que você desative o envio simples (otimizações do modo de entrega), mas isso só é possível se todos os itens no carrinho tiverem os mesmos métodos de entrega em comum. Caso contrário, o envio enxuto deve aparecer de forma forçada no carrinho, mesmo com a opção desativada.
Entretanto, em alguns cenários, o comportamento relatado acima não acontece e todos os métodos de entrega disponíveis são apresentados individualmente ao comprador.

Como resultado, como não há como selecionar um método de entrega diferente para cada item, nenhuma entrega exibida corresponde a uma única opção de entrega para todo o carrinho, com opções e pacotes sem sentido sendo apresentados.

## Simulação



- Desativar as **Optimized Shipping Options****;**
- Monte um carrinho em que nem todos os itens tenham o mesmo método de entrega;
- Também é necessário que a loja tenha a opção "allowMultipleDeliveries" ativada;
- O cenário relatado mostrará as opções abertamente em vez do envio enxuto

## Workaround


N/A




