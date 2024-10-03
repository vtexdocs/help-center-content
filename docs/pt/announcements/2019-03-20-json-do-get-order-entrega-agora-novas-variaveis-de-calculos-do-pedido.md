---
title: 'JSON do Get Order entrega agora novas variáveis de cálculos do pedido'
id: 58rQC0b6B0lw0eeKbNxJG6
status: PUBLISHED
createdAt: 2019-03-20T18:06:17.876Z
updatedAt: 2019-12-31T15:13:28.374Z
publishedAt: 2019-12-31T15:13:28.374Z
contentType: updates
productTeam: Post-purchase
author: 5V92cmF9jG8KG600EwUgEg
slugEN: 2019-03-20- Get-Order-Json-now-delivers-new-variables-in-order-calculations
locale: pt
legacySlug: json-do-get-order-entrega-agora-novas-variaveis-de-calculos-do-pedido
announcementImageID: ''
announcementSynopsisPT: 'Tenha em mãos informações detalhadas sobre o cálculo do frete do pedido'
---

>⚠️ Por motivos técnicos, o lançamento dessa funcionalidade foi postergado por tempo inderteminado.


A partir de 01 de Abril de 2019, o JSON de pedidos retornará um novo objeto chamado `alternativeTotals`.  Ele aparecerá nos totalizers que ficam dentro do array de `totals`, para as consultas feitas pela API de Get Order.

Por exemplo:
Em um pedido onde o valor de frete calculado seja de R$9,90 e ele foi abatido por uma promoção de envio grátis, o JSON retorna o seguinte dado:

```
"totals": [
        {
            "id": "Items",
            "name": "Total dos Itens",
            "value": 23970,
        },
        {
            "id": "Discounts",
            "name": "Total dos Descontos",
            "value": 0,
        },
        {
            "id": "Shipping",
            "name": "Total do Frete",
            "value": 0,

               }
            ]
```
Com o novo campo, o retorno passará a ser:

```
"totals": [
        {
            "id": "Items",
            "name": "Total dos Itens",
            "value": 23970,
            "alternativeTotals": null
        },
        {
            "id": "Discounts",
            "name": "Total dos Descontos",
            "value": 0,
            "alternativeTotals": null
        },
        {
            "id": "Shipping",
            "name": "Total do Frete",
            "value": 0,
            "alternativeTotals": [
                {
                    "id": "AlternativeShippingTotal",
                    "name": "Alternative Shipping Total",
                    "value": 990,
                    "alternativeTotals": null
                },
                {
                    "id": "AlternativeShippingDiscount",
                    "name": "Alternative Shipping Discount",
                    "value": -990,
                    "alternativeTotals": null
                }
            ]
```

Repare que no valor de frete temos o `value` 0. No `alternativeTotals`, temos os dados usados pelo sistema para chegar no cálculo de frete de R$9,90. Contudo, tivemos também um desconto de R$9,90, fazendo com que o valor final do frete fosse 0.

## Principais vantagens 
Este novo campo permite a utilização do dado na interface do módulo, mostrando ao usuário do admin o cálculo feito para o frete de forma clara e intuitiva.

Outra vantagem é a possibilidade de ter os dados do cálculo, feito pelo sistema, disponível para consumo de seu sistema de BI.

## O que você precisa fazer 
É fundamental revisar as integrações que usam as APIs Get Order, como as de ERP, por exemplo. Aquelas que não estiverem preparadas para receber a nova resposta precisam ser ajustadas antes de 29 de Março 2019.

Atenção: por hora, a mudança ocorrerá apenas na API. A UI do Gerenciamento de pedidos não sofrerá nenhuma modificação. 


