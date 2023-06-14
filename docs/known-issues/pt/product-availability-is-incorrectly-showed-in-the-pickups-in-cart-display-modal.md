---
title: 'A disponibilidade do produto é mostrada incorretamente nos pickups no modal de exibição do carrinho'
id: 6aoRWAMSGDwcuUPvGd8bI9
status: PUBLISHED
createdAt: 2022-03-30T17:24:21.013Z
updatedAt: 2022-11-25T21:53:23.560Z
publishedAt: 2022-11-25T21:53:23.560Z
firstPublishedAt: 2022-03-30T17:24:21.669Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-disponibilidade-do-produto-e-mostrada-incorretamente-nos-pickups-no-modal-de-exibicao-do-carrinho
kiStatus: Backlog
internalReference: 552875
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Na pré-visualização de embarque, após entrar no local, o modal de seleção de pickups informa incorretamente a disponibilidade dos itens em suas respectivas lojas. Por exemplo, a loja X tem todos os itens disponíveis, mas no modal a informação é que um dos itens está indisponível. Ao chegar na caixa, a informação é exibida corretamente, tanto na etapa de envio como também no modal de pickups (quando há uma divisão dos itens em vários pickups diferentes).



## Simulação



Neste caso específico, havia três itens no carrinho, cada item vinha de um vendedor diferente, mas era o mesmo SLA para retirar todos os itens em apenas 1 pickup. E com isso, no modal de retirada do carrinho, parecia que dois itens não estavam disponíveis, apesar de estarem disponíveis. Ao chegar à fase de checkout, a divisão de embalagem estava correta com a retirada no SLA único que era equivalente para todos.




## Workaround


N/A

