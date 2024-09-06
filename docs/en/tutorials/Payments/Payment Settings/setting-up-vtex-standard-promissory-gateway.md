---
title: 'Setting up VTEX Standard Promissory gateway'
id: 2LEec9Z3m0gS8gCAK2uIYc
status: ARCHIVED
createdAt: 2018-03-09T14:46:43.809Z
updatedAt: 2020-04-22T13:52:07.836Z
publishedAt: 
firstPublishedAt: 2018-03-09T15:09:10.272Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-vtex-standard-promissory-gateway
locale: en
legacySlug: setting-up-vtex-standard-promissory-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

VTEX has a native gateway with [PCI Security Standards Council certification](/en/faq/what-is-the-pci-ssc). This means that it follows the highest standards of data security, ensuring more protection for transactions in your store.

There are three different connectors: with __VTEX Standard Promissory__ configured, your store will process payments made with promissory notes. Just follow the steps below:

## Setting up VTEX Standard Promissory gateway affiliation
1. Enter the __Payments__ module.
2. Click __Settings__.
3. On the __Gateway Affiliations__ tab, click the __+__ button.
4. Click the __VTEX Standard Promissory__ connector.
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

After following the steps indicated above, VTEX Standard Promissory will be configured in your store. Thus, while you're registering a payment condition, this gateway will be available in the **Process with affiliation** field if the payment methods are compatible with it. 

To learn how to register custom payments, check out [this article](http://help.vtex.com/en/tutorial/how-to-configure-payment-conditions)
