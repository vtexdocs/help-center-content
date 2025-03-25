---
title: 'Flag promocional exibida em produtos fora da faixa de preço'
id: 7kJl5tyxAAOoiqW2sQcY6u
status: PUBLISHED
createdAt: 2018-04-10T15:21:04.585Z
updatedAt: 2022-12-22T20:49:01.265Z
publishedAt: 2022-12-22T20:49:01.265Z
firstPublishedAt: 2018-04-10T15:30:02.137Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: promotional-flag-displayed-on-products-outside-of-the-price-range
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

As viewports `$product.DiscountHightLight` e `<vtex.cmc:discountHightLight/>` baseiam-se nos teasers disponibilizados pelo checkout como regra para exibição de flags promocionais. Porém, o checkout não filtra regras de "ItemMinPrice" caso existam outras regras configuradas.

Como consequência, promoções que se baseiam em faixas de valores para itens e possuem outra restrição, como meios de pagamento, aparecem como flag promocional aos demais produtos, mesmo que estes estejam fora da faixa de preço para a promoção.

## Simulação

1. No menu administrativo, selecionar Taxas & Promoções > Benefícios.
2. No canto superior direito, clicar no botão Nova Promoção > Promoção Regular.
3. Escolher qualquer tipo de desconto.
4. Em Destaque nos produtos, escolher __Com destaque__.
5. Aplicar alguma restrição, por exemplo: por faixa de preço do item.
6. Restringir por algum método de pagamento, por exemplo: boleto.
7. Ativar e salvar a promoção.

## Workaround

Utilizar a API do checkout (orderForm Simulation) para buscar informações de teasers disponíveis para o produto, e então renderizar a flag promocional com a regra de negócio pretendida de forma customizada.

