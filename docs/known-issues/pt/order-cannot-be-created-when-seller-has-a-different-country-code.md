---
title: 'O pedido não pode ser criado quando o vendedor tem um código de país diferente'
id: 5AaGGDakL4Ys5ZvzD2RNAB
status: PUBLISHED
createdAt: 2023-03-03T13:02:18.553Z
updatedAt: 2023-03-03T14:09:43.156Z
publishedAt: 2023-03-03T14:09:43.156Z
firstPublishedAt: 2023-03-03T13:02:19.253Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-pedido-nao-pode-ser-criado-quando-o-vendedor-tem-um-codigo-de-pais-diferente
locale: pt
kiStatus: Backlog
internalReference: 763955
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um mercado, quando há um vendedor configurado com um Código de País diferente, o serviço de atendimento considerará o Código de País do vendedor ao fazer o pedido. Isso pode gerar um erro se o Código de País do vendedor definir campos obrigatórios diferentes dos do mercado.


##

## Simulação



- Ter um vendedor com um código de país diferente;
- Montar um carrinho com itens do vendedor;
- Terminar a compra; você receberá uma mensagem de erro, e o pedido não será feito.


##

## Workaround


Configurar o mesmo código de país no vendedor.




