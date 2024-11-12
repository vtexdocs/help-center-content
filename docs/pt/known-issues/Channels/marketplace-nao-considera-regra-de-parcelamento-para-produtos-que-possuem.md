---
title: 'Marketplace não considera regra de parcelamento para produtos que possuem condição comercial no seller'
id: 57fIYUFmvuyYaq8W6KkieC
status: PUBLISHED
createdAt: 2017-06-16T21:18:22.276Z
updatedAt: 2022-12-22T15:05:04.302Z
publishedAt: 2022-12-22T15:05:04.302Z
firstPublishedAt: 2017-06-16T21:30:20.109Z
contentType: knownIssue
productTeam: Channels
author: authors_35
tag: Checkout,Payments
slugEN: marketplace-doesnt-consider-installment-rule-for-products-that-have-a-commercial-condition-in-the-seller
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

As integrações entre lojas VTEX x VTEX podem ser configuradas de tal modo que toda regra de pagamento pode ser feita diretamente no ambiente do seller. Isso significa que o seller pode criar condições de pagamento conforme sua regra de negócio. Uma dessas regras é a condição comercial que é definida no catálogo e associada a cada SKU. Para entender melhor essa funcionalidade clique [aqui](http://help.vtex.com/pt/tutorial/como-cadastrar-condicao-comercial).

Essa funcionalidade é comumente usada para criar cenários como este: a geladeira **X** deverá ter uma regra de parcelamento diferente e ser transacionado apenas pelo pelo afiliado **XPTO**.

O problema conhecido fica evidente no seguinte exemplo, em que o marketplace não consegue refletir as mesmas regras de parcelamento que o seller:

## Marketplace - Até 12x sem juros
![Geladeira Marketplace](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Seller - Até 10x sem juros
![2017-06-16 18 15 44-Geladeira 540 Litros Evox Brastemp Side Inverse - Brastemp](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

A exibição no marketplace está errada. Os parcelamentos em 11x e 12x não exibem juros, quando, na realidade, deveriam exibir.

Atualmente existe uma restrição no checkout. Ele não reconhece as condições comerciais de um SKU em um seller para fins de split de pagamento (pedido no marketplace com pagamento no seller).

## Simulação

1. O seller deve criar uma condição comercial e associá-la a um SKU que está sendo enviado a um marketplace
2. O seller deve criar uma condição de pagamento cuja condição especial inclui a política comercial dessa integração e também a condição comercial associada a esse SKU.
3. O marketplace não consegue refletir essa configuração.

## Workaround

Enquanto o checkout nao desenvolver a funcionalidade necessária para refletir condições comerciais de um seller, a melhor via alternativa é o seller criar uma nova política comercial para essa integração e incluir nessa política as configurações de pagamento que satisfaçam a regra de negócio em questão.

