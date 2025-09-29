---
title: '​​Payments in VTEX marketplaces'
id: 2kYOfWCZYweJkYl18bw9yD
status: PUBLISHED
createdAt: 2022-01-26T20:27:07.040Z
updatedAt: 2023-03-22T19:01:11.613Z
publishedAt: 2023-03-22T19:01:11.613Z
firstPublishedAt: 2022-01-26T21:27:07.735Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: payments-in-vtex-marketplaces
legacySlug: payments-in-vtex-marketplaces
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

In this article, we will cover the different scenarios related to payments in[ VTEX marketplaces](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex) and the configurations involved.

For VTEX clients in Brazil, both the seller and the marketplace can process payments, depending on the commercial conditions negotiated between them and the payment provider.

Learn more about the payment split and the settings required to configure the seller or the marketplace as the payment processor.

## Payment split

Orders placed in a marketplace may contain items from multiple sellers, which are paid for in a unified checkout experience at the marketplace's storefront. VTEX offers the Payment split solution so that the total amount of the order is automatically divided according to the commissions configured when adding a seller.

If the seller is the payment processor, they must operate under the conditions determined in our [Transaction split](/en/tutorial/split-payment#transaction-split). Similarly, if the VTEX marketplace is the payment processor, it must follow the [Payout split](/en/tutorial/split-payment#payout-split) flow or perform its transactions outside the VTEX environment.

> ℹ️ VTEX clients in Brazil can use both transaction splits and payout splits. However, VTEX clients in other countries must only use transaction splits. Please note that some countries impose restrictions on transfers between sellers and marketplaces. Get in touch with your country's financial authorities to learn more about these restrictions before building your payment architecture.

Use the OMS reports to calculate commissions when setting the amounts for transfers outside the VTEX environment. In Brazil, transfers in external environments, without the participation of platforms such as VTEX, can only be performed by financial institutions.

## Payment settings

See below for the necessary configurations to create commissions for sellers and to configure a seller or a marketplace as the payment processor.

> ℹ️ If your integration with external sellers or VTEX sellers is done via API, please refer to the article [External seller processing payment](https://developers.vtex.com/vtex-rest-api/docs/external-seller-processing-payments).

### Configuring commissions for sellers

When you [Add a seller](/en/tutorial/adicionar-seller--tutorials_392), the marketplace configures commissions by product, freight, or category for their orders. To configure commissions for your sellers, follow the steps below in the VTEX Admin.

1. In the VTEX Admin, go to **Marketplace** > **Management**, or type **Management** in the search bar at the top of the page.
2. Select a seller from the list and click on `Edit/View`.    
_If you are using a different version of the Management page, just click on the name of the desired seller._    
3. Edit the fields in the **Commissions** section.   
_If you are using a different version of the Management page, edit the fields in the **Commercial Agreements** section._  
4. Click on `Save`.  

### VTEX Marketplace

For the marketplace system to process payments, you need to access the [Payments](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) section in the VTEX environment and configure the following:

- [Gateway affiliations](/en/tutorial/afiliacoes-de-gateway)  
- [Payment conditions](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3)  
- [Payment connector](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)  
- [Anti-fraud solution](/en/tutorial/como-configurar-antifraude--tutorials_446)  

To finish configuring a marketplace as the payment processor, when [Configuring an affiliate](/en/tutorial/como-configurar-afiliado--tutorials_187), the **Use my payment method** option must be unchecked.

### VTEX Seller processing payments

For the seller's system to process payments, the seller needs to access the[ Payments](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) section in the VTEX environment and configure the steps described in this article. This option also applies to physical stores registered as white label sellers.

- [Trade policies for marketplaces](/en/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404)  
- [Gateway affiliations](/en/tutorial/afiliacoes-de-gateway)  
- [Payment conditions](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3)  
- [Payment connector](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)  
- [Anti-fraud solution](/en/tutorial/como-configurar-antifraude--tutorials_446)  

Once the Payments system is configured, when [Configuring an affiliate](/en/tutorial/como-configurar-afiliado--tutorials_187) for the marketplace in question, the seller needs to select the **Use my payment method** option.

## Learn more

- [Configuring a VTEX marketplace](/en/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)
