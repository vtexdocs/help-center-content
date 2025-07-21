---
title: 'Como funciona o frete quando a entrega é feita pelo marketplace (FOB)'
id: EY1l6tYW3IUquwwwcQqwQ
status: PUBLISHED
createdAt: 2017-08-28T23:17:57.225Z
updatedAt: 2024-02-05T15:48:24.006Z
publishedAt: 2024-02-05T15:48:24.006Z
firstPublishedAt: 2017-08-29T20:09:40.790Z
contentType: tutorial
productTeam: Channels
author: authors_4
slugEN: how-shipping-works-when-delivery-is-done-by-the-marketplace
locale: pt
legacySlug: como-funciona-o-frete-fob-mercado-livre-quando-o-mercado-envios-e-usado
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Pedidos realizados via marketplaces que têm frete tipo FOB (Free on board, Mercado Full Envios, B2W Entrega), em que a definição de tipo de entrega, sua cobrança e emissão da etiqueta são todas realizadas pelo marketplace, não determinam uma transportadora ao integrar na VTEX.

Esse fluxo evita validações desnecessárias do pedido, simplifica a configuração da integração e evita a falta de integração por bloqueio nestes detalhes. No entanto, pode trazer algumas dúvidas e até mesmo necessidade de adequação da integração com o ERP para os pedidos do marketplace.

## Estoque

A regra pela escolha do estoque que irá servir o SKU será feita sempre da seguinte maneira:

1. Menor quantidade disponível do SKU.
    > _Para evitar que inventários com pequenas quantidades de itens fiquem represados._
2. Menor tempo de rota entre estoque e doca.
3. Menor preço de rota entre estoque e doca.

Caso exista mais de um estoque disponível seguindo estes critérios e prioridades, a escolha final será aleatória.

Caso o pedido tenha várias unidades de um SKU, é necessário que algum dos estoques tenha a quantidade total, ou então o pedido será barrado pela VTEX, que acusará falta de estoque.

## Pedidos

Como a entrega será feita pelo marketplace, o OMS não trará o valor do frete, já que isso ficou acordado entre o marketplace e o comprador do produto, não trazendo ônus à loja. A informação de prazo que aparece no pedido não é a que o marketplace informou à VTEX, mas sim uma simulação de frete feita no momento de integrar o pedido.

No lugar das identificações de transportadora e tipo de entrega é apresentada a informação `vtex:fob_1111`, sendo que `1111` será correspondente ao ID da doca.

## API

Assim como na interface do OMS, a API traz a informação `vtex:fob_1111` para os campos __selectedSla__, __deliveryCompany__ e __courierName__. O tempo para __shippingEstimate__ será `0bd`.

É importante que o ERP esteja adequado à recepção dos dados neste formato.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Orders/como-funciona-o-frete-quando-o-marketplace-faz-a-entrega_1.png)

## Etiqueta

O pedido é enviado em um contrato com os Correios do próprio marketplace. Neste cenário, eles emitem a etiqueta para que a loja faça impressão e use a em seus pacotes, sem a necessidade de outros processos com os Correios, bastando apenas o despacho.

É possível acessar a etiqueta diretamente pelo OMS, abaixo dos itens do pedido. Basta clicar no link e uma nova janela será aberta já com o PDF da etiqueta.

![Etiqueta de entrega pelos Correios (BR) - Marketplace](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Orders/como-funciona-o-frete-quando-o-marketplace-faz-a-entrega_2.png)

Caso queria aproveitar a etiqueta dentro do ERP, ela também está disponível em [Marketplace Protocol API](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/order-integration/orders), saiba mais em [New Order Integration](https://developers.vtex.com/docs/guides/external-marketplace-integration-collect-orders#scenario-12-order-with-tracking-hints).
