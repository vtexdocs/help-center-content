---
title: 'O espaço na propriedade da rua no JSON do código postal afeta a exibição do campo de endereço no checkout'
id: Rr3wSsdC5hxMS8ttK4kIj
status: PUBLISHED
createdAt: 2023-08-01T22:30:35.290Z
updatedAt: 2024-07-01T18:49:10.379Z
publishedAt: 2024-07-01T18:49:10.379Z
firstPublishedAt: 2023-08-01T22:30:36.187Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: o-espaco-na-propriedade-da-rua-no-json-do-codigo-postal-afeta-a-exibicao-do-campo-de-endereco-no-checkout
locale: pt
kiStatus: No Fix
internalReference: 872935
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao ativar o uso da API de código postal no formulário de endereço para países que não estão no modelo BR (país, estado, cidade, bairro, rua), esses países que não têm todos esses campos preenchidos na API e precisam ser capazes de inserir os outros dados de endereço no formulário de endereço no checkout, o campo rua do bloco de endereço não estará disponível se a propriedade rua do JSON estiver com espaço, pois será entendido como preenchido e válido, o que não permite prosseguir com o pedido.


## Simulação


Crie um carrinho em uma loja EMEA que use o código postal e o formulário de endereço e, na base do código postal, o campo street esteja com espaço " " .
O campo de endereço não estará disponível para ser preenchido

## Workaround


Não existe





