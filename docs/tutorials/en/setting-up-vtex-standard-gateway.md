---
title: 'Setting up VTEX Standard gateway'
id: 3B0uJ5XGVqecaII8WG0qaE
status: DRAFT
createdAt: 2018-06-21T22:12:51.416Z
updatedAt: 2020-05-21T22:16:51.280Z
publishedAt: 
firstPublishedAt: 2018-06-21T22:31:36.348Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-vtex-standard-gateway
locale: en
legacySlug: setting-up-vtex-standard-gateway
subcategory: 
---

VTEX has a native gateway with [PCI Security Standards Council certification](/en/faq/what-is-the-pci-ssc). This means that it follows the highest standards of data security, ensuring more protection for transactions in your store.

There are three different connectors: with __VTEX Standard__ configured, your store will process payments made with credit cards and custom payments. Just follow the steps below:

## Setting up VTEX Standard gateway affiliation
1. Enter the __Payments__ module.
2. Click __Settings__.
3. On the __Gateway Affiliations__ tab, click the __+__ button.
4. Click the __VTEX Standard__ connector.
5. In the __External Service Url__ field, set up the external URL that will be associated with `/pvt/payments?an={AccoutName}`.
6. Fill in the registration fields with the data provided by VTEX (_appKey_ and _appToken_ fields). Learn how to find this information [in this article](/en/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations).
7. Under __Implements Installments Service__, choose whether you want to use external installment services or the one already configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
8. Under __External Cancellation Service__, set whether or not you wish to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
9. In the __Installments Service Url__ field, set up the external URL that will be associated with `/options`.
10. In __SoftDescriptor__, insert the label that will identify transactions made in your store.
11. In __Captura de Segurança Antecipada__ ("Advanced Security Capture"), choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
12. In __Usa Antifraude__ ("Use anti-fraud"), inform if you wish to use the anti-fraud system.
13. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, VTEX Standard will be configured in your store. So while you're entering a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with VTEX Standard). 
To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
