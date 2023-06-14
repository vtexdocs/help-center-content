---
title: 'Como funciona o frete quando a entrega é feita pelo marketplace (FOB)'
id: EY1l6tYW3IUquwwwcQqwQ
status: PUBLISHED
createdAt: 2017-08-28T23:17:57.225Z
updatedAt: 2021-08-11T17:11:00.299Z
publishedAt: 2021-08-11T17:11:00.299Z
firstPublishedAt: 2017-08-29T20:09:40.790Z
contentType: tutorial
productTeam: Channels
author: authors_4
slug: como-funciona-o-frete-quando-o-marketplace-faz-a-entrega
locale: pt
legacySlug: como-funciona-o-frete-fob-mercado-livre-quando-o-mercado-envios-e-usado
subcategory: 5m1qqfnmfYKsO0KiOQC8Ky
---

Pedidos realizados via marketplaces que têm frete tipo FOB (Free on board, Mercado Full Envios, B2W Entrega), em que a definição de tipo de entrega, sua cobrança e emissão da etiqueta são todas realizadas pelo marketplace, não determinam uma transportadora ao integrar na VTEX.

Esse fluxo evita validações desnecessárias do pedido, simplifica a configuração da integração e evita a falta de integração por bloqueio nestes detalhes. No entanto, pode trazer algumas dúvidas e até mesmo necessidade de adequação da integração com o ERP para os pedidos do marketplace.

## Estoque

A regra pela escolha do estoque que irá servir o SKU será feita sempre da seguinte maneira:

1. Maior quantidade disponível do SKU.
2. Menor tempo de rota entre estoque e doca.
3. Menor preço de rota entre estoque e doca.

Caso exista mais de um estoque disponível seguindo estes critérios e prioridades, a escolha final será aleatória.

Caso o pedido tenha várias unidades de um SKU, é necessário que algum dos estoques tenha a quantidade total, ou então o pedido será barrado pela VTEX, que acusará falta de estoque.

## Gerenciamento de Pedidos

Como a entrega será feita pelo marketplace, o OMS não trará o valor do frete, já que isso ficou acordado entre o marketplace e o comprador do produto, não trazendo ônus à loja. A informação de prazo que aparece no pedido não é a que o marketplace informou à VTEX, mas sim uma simulação de frete feita no momento de integrar o pedido.

No lugar das identificações de transportadora e tipo de entrega é apresentada a informação `vtex:fob_1111`, sendo que `1111` será correspondente ao ID do estoque em que o SKU foi reservado.

## API

Assim como na interface do OMS, a API traz a informação `vtex:fob_1111` para os campos __selectedSla__, __deliveryCompany__ e __courierName__. O tempo para __shippingEstimate__ será `0bd`.

É importante que o ERP esteja adequado à recepção dos dados neste formato.

![](https://images.ctfassets.net/alneenqid6w5/5jPtBeUPHCUvgMco9FoKuZ/add1ce05e78a216f0aa7074c3ae4d444/slack-imgs.com.png)

## Etiqueta

O pedido é enviado em um contrato com os Correios do próprio marketplace. Neste cenário, eles emitem a etiqueta para que a loja faça impressão e use a em seus pacotes, sem a necessidade de outros processos com os Correios, bastando apenas o despacho.

É possível acessar a etiqueta diretamente pelo OMS, abaixo dos itens do pedido. Basta clicar no link e uma nova janela será aberta já com o PDF da etiqueta.

![Etiqueta de entrega pelos Correios (BR) - Marketplace](https://images.ctfassets.net/alneenqid6w5/3Xc7eqzjetqNwScoZxkWOK/e49eff1715dd0b3018bb58a6521f5c0c/Screen_Shot_2020-03-25_at_11.43.27.png)

Caso queria aproveitar a etiqueta dentro do ERP, ela também está disponível na [API de Pedidos](https://developers.vtex.com/reference/orders#getorder), no array `trackingHints` que faz parte do objeto `shippingData`.
