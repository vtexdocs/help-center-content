---
title: 'Why was the order closed with the wrong price?'
id: frequentlyAskedQuestions_708
status: PUBLISHED
createdAt: 2017-04-27T22:28:49.849Z
updatedAt: 2021-03-23T20:08:37.325Z
publishedAt: 2021-03-23T20:08:37.325Z
firstPublishedAt: 2017-04-27T23:02:33.393Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-was-the-order-closed-with-the-wrong-price
locale: en
legacySlug: why-was-the-order-closed-with-the-wrong-price
---

The [Integrations](/en/tutorial/checking-integrations-in-bridge) module informs the status of the orders placed on each certified marketplace. Sometimes, an order has not been integrated because the order value on the marketplace is not the same as the one expected by VTEX. 

`Total do pagamento (311,77) é diferente do pretendido pela loja (313,61)`

[]![DescontoMarketplace](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/Channels/why-was-the-order-closed-with-the-wrong-price_1.png)

And when the order has not been integrated due to difference in value, the following message is displayed on Integrations :

`Payment total (49.11) differs from store desired value (54.11)`

Or the value of the order may be being influenced by the **Price Divergence Rate**, which is the acceptance rate of the difference in value of an order. Any order that has a difference between the selling price in the marketplace and the price determined by the seller will be compared to this value. If the divergence, in percent, is less than the value defined in this field, the order will be correctly integrated. Otherwise, the order will not be integrated and you will be able to view it in the [orders tab within the integrations section in the Admin](https://help.vtex.com/en/tutorial/checking-integrations-in-bridge).

This article sets out to explain the reasons why this occurs. There are three possibilities:

## A different value assumed by the marketplace

This scenario arises when there is not enough time to replicate the new price on the marketplace. The price is firstly submitted to VTEX for indexation, then cached on both platforms, while purchases are closed.

It may also happen that the price change includes a discount that violates the marketplace’s price reduction policy. B2W, for example, does not accept values lower than 50% of the last registered price.

At the same time, some marketplaces check the price on VTEX when the purchase is being concluded, others do not. The marketplaces that do not make this query have greater chances of ending up in this scenario.

The marketplace that checks the price on VTEX when the purchase is being concluded is:

- Walmart

The marketplaces that do not check the price on VTEX when the purchase is being concluded are:

- CNova
- B2W
- Mercado Livre
- NetShoes
- Buscapé

## Shipping rates calculated on the marketplace

When configuring the sales logistics on the marketplace, the [shipping charges can be configured](/en/tutorial/configuring-logistics-for-a-marketplace) by the partner. In other words, the shipping rates are not calculated on VTEX. However, this scenario can cause a price divergence, in the event that the free shipping offer has not been configured.

Furthermore, it may be that the shipping cost query was not made by the marketplace or [some problem arose in the process](/en/faq/why-was-the-order-closed-when-there-was-no-stock) and that is why the marketplace shipping cost was assumed.

This means that the marketplace query may not be successful, and so as to not lose the order, the partner uses internal contingency values. This may lead to a divergence in the values originally registered on VTEX, implying an error.

Lastly, some marketplaces check shipping rates on VTEX when the purchase is being concluded, while others do not. The marketplaces that do not make this query have greater chances of ending up in this scenario.

The marketplaces that check the shipping rate on VTEX when the purchase is being concluded are:

- Walmart
- CNova
- B2W

The marketplaces that do not check the shipping rate on VTEX when the purchase is being concluded are:

- Buscapé
- Mercado Livre
- NetShoes

## SKU value changes before the order is integrated

This option is not as common as the previous ones, and it happens when the order is placed and the SKU price changes immediately afterwards. Since the integration of the placed order takes several minutes to conclude, when the integration is done the SKU price will be different and the calculation on VTEX will not yield the same result as the calculation on the marketplace, and the order will remain in Integrations as an error.

## How is this resolved

The order may be integrated by [reprocessing it on Bridge](/en/tutorial/checking-integrations-in-bridge). This entails that VTEX would accept the order, even with a different value than expected.

It is also recommended to configure the price discrepancy fee, which is the percentage difference of the acceptable price for an integration. This configuration takes place on Bridge, when configuring your marketplace.
