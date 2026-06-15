---
title: 'Como funciona o frete quando a entrega é feita pelo marketplace (FOB)'
id: EY1l6tYW3IUquwwwcQqwQ
status: PUBLISHED
createdAt: 2017-08-28T23:17:57.225Z
updatedAt: 2026-06-12T16:00:24.006Z
publishedAt: 2024-02-05T15:48:24.006Z
firstPublishedAt: 2017-08-29T20:09:40.790Z
contentType: tutorial
productTeam: Channels
author: authors_4
slugEN: how-shipping-works-when-delivery-is-done-by-the-marketplace
legacySlug: como-funciona-o-frete-fob-mercado-livre-quando-o-mercado-envios-e-usado
locale: pt
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Alguns marketplaces operam com frete do tipo **FOB** (*Free on Board*), no qual a entrega é de responsabilidade do próprio marketplace. Isso significa que ele define o tipo de entrega, calcula e cobra o frete do comprador e emite a etiqueta de envio, cabendo à loja apenas separar o produto e despachá-lo.

Neste artigo, você entende como os pedidos com frete do tipo FOB se comportam ao serem integrados à VTEX e quais cuidados ter na integração com o seu ERP. Esse fluxo simplifica a configuração da integração e evita que o pedido seja bloqueado por divergências nesses detalhes.

Entenda a seguir como funciona o estoque, a exibição do pedido, a API e a etiqueta no cenário de frete tipo FOB.

## Seleção de estoque

Nos pedidos com frete realizado pelo marketplace, a VTEX define de qual estoque o SKU será separado. Essa escolha segue sempre os critérios abaixo, em ordem de prioridade:

1. Menor quantidade disponível do SKU, para evitar que inventários com poucas unidades fiquem represados.
2. Menor tempo de rota entre estoque e doca.
3. Menor preço de rota entre estoque e doca.

Se mais de um estoque atender a todos os critérios, a escolha final será aleatória.

Caso o pedido tenha várias unidades de um mesmo SKU, é necessário que um único estoque tenha a quantidade total. Do contrário, o pedido será barrado pela VTEX, que acusará falta de estoque.

## Exibição do pedido no OMS

Os pedidos em que o marketplace é responsável pelo frete apresentam particularidades em como são exibidos no OMS (Order Management System). Confira abaixo os principais pontos de atenção:


- **Valor do frete:** como a entrega é feita pelo marketplace, o OMS não exibe o valor do frete, pois esse custo foi acordado entre o marketplace e o comprador, sem ônus para a loja.

- **Prazo de entrega:** o prazo exibido no pedido não corresponde ao informado pelo marketplace à VTEX, mas sim a uma simulação de frete feita no momento da integração do pedido.

- **Transportadora:** no lugar das identificações de transportadora e tipo de entrega, é apresentada a informação `vtex:fob_1111`, em que `1111` corresponde ao ID da doca.

## Consultar os dados do pedido via

Além da interface do OMS, é possível consultar os dados do pedido diretamente pelo endpoint **Get order** (https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-). Nesse cenário, o retorno também reflete as particularidades do frete tipo FOB.

Assim como no OMS, a informação `vtex:fob_1111` é retornada nos campos `selectedSla`, `deliveryCompany` e `courierName`, e o campo `shippingEstimate` recebe o valor `0bd` (zero dias úteis). Por isso, é importante que o ERP esteja preparado para receber os dados nesse formato.

Veja abaixo um exemplo do objeto `logisticsInfo` retornado pela API em um pedido com frete FOB:

```json
"logisticsInfo": [
  {
    "itemIndex": 0,
    "selectedSla": "vtex:fob_1",
    "lockTTL": "7d",
    "price": 0,
    "listPrice": 0,
    "sellingPrice": 0,
    "deliveryWindow": null,
    "deliveryCompany": "vtex:fob_1",
    "shippingEstimate": "0bd",
    "shippingEstimateDate": null,
    "slas": null,
    "shipsTo": null,
    "deliveryIds": [
      {
        "courierId": null,
        "courierName": "vtex:fob_1",
        "dockId": "1",
        "quantity": 1,
        "warehouseId": "1_1"
      }
    ]
  }
],
```

## Acessar a etiqueta de envio emitida pelo marketplace

A etiqueta de envio para este tipo de frete é gerada pelo próprio marketplace. Veja a seguir como ela é disponibilizada e onde acessá-la.

O envio utiliza o contrato que o marketplace mantém com a transportadora, no caso do exemplo os Correios. É o marketplace quem emite a etiqueta, cabendo à loja apenas imprimir para usá-la no pedido e despachá-lo sem necessidade de outros processos junto à transportadora.

É possível acessar a etiqueta diretamente pelo OMS. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos** ou digite **Todos os pedidos** na barra de busca.
2. Clique no pedido desejado.
3. Abaixo dos itens do pedido, clique no link **Correios**.
4. Uma nova janela será aberta com o PDF da etiqueta para impressão.

Para acessar a etiqueta pelo ERP, saiba como em [New Order Integration](https://developers.vtex.com/docs/guides/external-marketplace-integration-collect-orders#scenario-12-order-with-tracking-hints).