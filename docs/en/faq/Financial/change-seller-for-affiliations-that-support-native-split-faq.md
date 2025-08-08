---
title: 'Change seller for affiliations that support native split: FAQ '
id: 2TcTp83SYrZ5GK9jOUwTam
status: PUBLISHED
createdAt: 2021-02-04T17:15:55.230Z
updatedAt: 2023-03-31T12:53:55.772Z
publishedAt: 2023-03-31T12:53:55.772Z
firstPublishedAt: 2021-02-04T18:32:32.831Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: change-seller-for-affiliations-that-support-native-split-faq
locale: en
legacySlug: change-seller-for-affiliations-that-support-native-split-faq
---

During the purchase process in a marketplace, it may be necessary to change the seller that will deliver the product to the final customer. One of the most common reasons is a stockout, which may lead to order cancellations.

The new __Change seller__ feature for marketplaces with affiliations that support split payments allows you to [change the seller](https://help.vtex.com/en/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete) and ensure that the sale is completed, avoiding refunds and unnecessary transactions.

For more details about the solution, access the article [Affiliations with native split payment and seller change](https://help.vtex.com/en/announcements/afiliacoes-com-split-nativo-e-alteracao-de-seller?utm_source=newsletter-pt&utm_medium=email-text&utm_campaign=jan-2021%0A%0Aletter-pt&utm_medium=email-text&utm_campaign=jan-2021%0A%0A). If you want to know how to use it, check out our tutorial [How to use the Change Seller feature](https://help.vtex.com/en/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete).

We have compiled below the main questions that may arise regarding seller changes:

### Is it possible to perform a seller change when using automatic settlement (capture)?

No. When opting for automatic settlement, payment is settled immediately after authorization and/or anti-fraud analysis. At this point, we send information about recipients and payment fees to acquirers. 
For this reason, to access the change seller feature, you must configure the affiliation with one of the following settlement behaviors in the __Auto Settlement__ field:

- __Use Payment Processor Recommended Behavior__.
- __Disabled: Do Not Auto Settle__.

![AutoSettlement](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/Financial/change-seller-for-affiliations-that-support-native-split-faq_1.png)

### If I opted for a non-automatic settlement behavior, when will the payment be settled?

In that case, the settlement will be performed when the order is invoiced. In case invoicing takes many days to be processed, the settlement will follow the pattern previously configured in the affiliation, as shown below:

1. __Use Payment Processor Recommended Behavior:__ The settlement is scheduled according to the time period specified by the connector. This period indicates if the payment has been authorized and determines (or recommends) the number of days for payment settlement at the time of the acquirer’s response. The number of days to be specified by the partner will depend on the business agreement between you, your customer, and the payment provider.

2. __Disabled: Do Not Auto Settle:__ Settlement does not happen automatically.

### Is it possible to change the seller after payment settlement?

No, the time window for changing sellers is between authorization and settlement.
When the payment is settled, the system will send information about recipients and values to the acquirers. After that, you cannot change sellers anymore.

### Is it possible to change the seller in affiliations with split for all payment methods?

No. Split payments support the change seller feature only when made with one or two credit cards. This is because most of the payment providers settle the value immediately for payment methods such as “boleto” (popular Brazilian off-line payment method) or debit card. Therefore, we cannot offer a time window to change sellers in this case. 

> ⚠️ If you make an attempt to change sellers with payment methods other than credit card, you will receive the following API call error message: "Error when updating additional data for transaction = 722726D8B04C4AAFB1EC945076FD2913. Payout split was already done".

### Is it possible to partially or fully refund an order?

Yes, you can issue partial and full refunds.

### What happens if the seller change results in an increase or decrease in the product and/or shipping cost?

The value settled from the final customer will remain the same. Therefore, the split payment will consider the original value and apply the commission and receivable division rules to this value.

For cases where the new seller has a higher price than the original seller’s, our change seller solution has a safety mechanism. This feature allows changing the seller only if the total cost difference (products + shipping) does not exceed a total of BRL 0.30.

For cases where the new seller has a lower price than the original seller's, you will be able to proceed with the change, even though the settled value remains the same.

Since the split payment considers the initial settlement value, the new seller will receive a higher value than the product's advertised price.

## Examples

### New seller with a total cost difference of up to BRL 0.30

A customer bought a product in the Coinshop marketplace, and initially the order would be fulfilled by the seller Partner01. The product’s price was BRL 0.02, and the shipping cost was BRL 5.00. Coinshop would receive a commission (10% of the product price).

The authorized payment amount on the customer’s card was BRL 5.02.
However, it was necessary to change the seller. After the change, the order was reassigned to a seller called Partner02, whose product’s price was BRL 0.30.

On the Partner02 dashboard, you can see a discount of BRL 0.28 identified as "Coinshop Discount". Although the price advertised by the seller Partner02 was BRL 0.30, it will receive only BRL 0.02.

> ℹ️ It is worth mentioning that in this case, it was possible to change sellers because the total cost difference was no more than BRL 0.30. If the difference was higher than BRL 0.31, it would not be possible to change sellers.

After the order invoicing, the system settled BRL 5.02 and performed the split payment.

See the receivables __distribution calculation__ of this case below:

| Receiver     | Calculation     | Total     |
| ---------- | ---------- | ---------- |
| Marketplace Coinshop      | Comission x Product price = 10%(0,2%)       | 0,002 (illustrative only)       |
| Partner 02       | Order's final price - Comission = 5,02-0,002       | 5,018 (illustrative only)       |

Therefore, even though the price advertised by the seller Partner02 was BRL 0.30 — which combined with the shipping cost should make a total of BRL 5.30 — the amount divided was BRL 5.02.

### New seller with a lower price

A customer bought a product in the Coinshop marketplace, and the order was fulfilled by the seller Tupinicoin. The product’s price was BRL 0.60 with free shipping. Coinshop would receive a 10% commission on this order's products.

However, it was necessary to change the seller. After the change, the order was reassigned to a seller called Japacoin, whose product’s price was BRL 0.04.

On the new seller screen, you can note an increase of BRL 0.56 in the product’s price. Although the price advertised by the seller Japacoin was BRL 0.04, it received BRL 0.60.

The distribution of the receivables would be calculated as follows:

| Receiver     | Calculation     | Total     |
| ---------- | ---------- | ---------- |
| Marketplace Coinshop       | Comission x Product price = 10%(0,60)        | 0,60 (illustrative only)      |
| Japacoin       | Order's final price - Comission = 0,60-0,06      | 0,54 (illustrative only)       |

Even though the price advertised by the seller Japacoin was BRL 0.04, the amount divided was BRL 0.60.

### How can I see the price differences?

During the change seller process, the marketplace can use the [API](https://help.vtex.com/en/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete) for shopping cart simulation. 

With the sellers’ information in hand, you can simulate shopping carts to verify product availability. For more information, please check this tutorial on our Help Center: [How to use the Change Seller feature](https://help.vtex.com/en/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete).

During the simulation step, you can check the price of the new seller’s products and shipping and then decide if you want to change sellers.

Once you’ve changed the seller, you can see the price differences on the __new seller's order screen__, as shown in the previous question's images.

