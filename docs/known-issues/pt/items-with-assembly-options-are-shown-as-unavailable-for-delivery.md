---
title: Itens com Assembly options aparecem como indisponíveis para entrega
id: uDN6ZTQgbLlZul7eLP5SQ
status: PUBLISHED
createdAt: 2021-09-27T20:09:20.031Z
updatedAt: 2022-12-22T20:41:04.858Z
publishedAt: 2022-12-22T20:41:04.858Z
firstPublishedAt: 2021-09-27T20:12:58.022Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: itens-com-assembly-options-aparecem-como-indisponiveis-para-entrega
kiStatus: Backlog
internalReference: 
---

## Sumário

Itens com Assembly options, ao serem inseridos no carrinho, aparecem para o comprador como indisponíveis para entrega enquanto não for calculado o frete.

Isso ocorre porque o [orderForm](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview) — estrutura de dados correspondente ao carrinho — fica sem informação no campo `logisticsInfo.deliveryChannel`.

Quando um endereço é inserido e o frete é calculado, os itens deixam de aparecer como indisponíveis para entrega.


## Simulação

Para realizar esta simulação, é necessário ter um item com possibilidade de Assembly options no catálogo da sua loja.

1. Na loja, adicione ao carrinho um item com possibilidade de Assembly options;
2. Adicione ao item a opção de assembly;
3. Verifique que o item aparece como indisponível para entrega;
4. Insira um endereço e calcule o frete;
5. Verifique que o item aparece como disponível para entrega normalmente.


## Workaround

Para contornar o problema, é possível ocultar a mensagem exibida enquanto nenhum endereço for informado. A princípio ela está disponível sob o seletor ".shp-alert-shipping-unavailable", mas é necessário verificar se a mensagem pode fazer falta em outros cenários, como quando o item de fato não possui opção de entrega, somente retirada.

