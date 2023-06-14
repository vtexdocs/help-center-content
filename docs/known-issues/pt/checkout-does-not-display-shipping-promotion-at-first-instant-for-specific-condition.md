---
title: 'O checkout não exibe promoção de remessa no primeiro instante para condições específicas'
id: 14rQaM53csQQeA1wu5lRj8
status: PUBLISHED
createdAt: 2022-05-20T17:46:10.644Z
updatedAt: 2022-11-25T21:53:02.607Z
publishedAt: 2022-11-25T21:53:02.607Z
firstPublishedAt: 2022-05-20T17:46:11.046Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-checkout-nao-exibe-promocao-de-remessa-no-primeiro-instante-para-condicoes-especificas
kiStatus: Backlog
internalReference: 280144
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O checkout (backend) tem um comportamento de pré-selecionar o melhor método de entrega para o usuário assim que um código postal é informado.

As promoções que utilizam a restrição de "Aplicar o desconto somente quando um dos transportadores acima é selecionado pelo cliente" na verdade só são aplicadas depois que o cliente escolhe o método de entrega específico.

Acontece que, se a opção de entrega selecionada automaticamente por caixa se encaixa em qualquer promoção com a restrição acima, o desconto não será aplicado A opção mencionada é a que diz "Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente").

Isto só ocorre no primeiro momento, pois o checkout não recalcula as promoções ao fazer esta escolha de entrega automática. Isto porque, se você recalcular as promoções, eventualmente a melhor opção de entrega poderá ser diferente, e isto deixaria o sistema em um loop, sempre procurando a melhor opção. Em futuras atualizações do OrderForm, todo seu contexto é recalculado, desta vez com a forma de entrega realmente selecionada, e então a promoção será aplicada.

Além deste fato, a simulação de envio do carrinho (shipping-preview) faz pedidos adicionais à API, não apenas utilizando o contexto do OrderForm. Isto faz com que ele receba a promoção, enquanto os totais do carrinho são restritos ao contexto do OrderForm, que ainda não tem a promoção, resultando em valores divergentes.



## Simulação



## Workaround



