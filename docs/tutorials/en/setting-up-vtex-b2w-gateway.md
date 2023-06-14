---
title: 'Setting up VTEX B2W gateway'
id: 4Xssw6LV5ewAWEssiqgmU6
status: DRAFT
createdAt: 2018-03-09T15:11:51.754Z
updatedAt: 2022-02-02T14:46:32.563Z
publishedAt: 
firstPublishedAt: 2018-03-09T15:39:13.088Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-vtex-b2w-gateway
locale: en
legacySlug: setting-up-vtex-b2w-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

VTEX has a native gateway with [PCI Security Standards Council certification](/en/faq/what-is-the-pci-ssc). This means that it follows the highest standards of data security, ensuring more protection for transactions in your store.

There are three different connectors: with __VTEXB2W__ configured, your store in B2W's marketplace will process payments made with bank slips and the major credit card brands. Just follow the steps below.

## Setting VTEX B2W gateway affiliation
1. Enter __Payments__ module.
2. Click __Settings__.
3. On the __Gateway affiliations__ tab, click the __+__ button.
4. Click the __VTEXB2W__ connector.
5. In the __External Service Url__ field, set up the external URL that will be associated with `/pvt/payments?an={AccountName}`.
6. Fill in the registration fields with the data provided by VTEX (_appKey_ and _appToken_ fields). Learn how to find this information [in this article](/en/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations).
7. Under __Implements Installments Service__, choose whether you want to use external installment services or the one configured on the portal. If you choose _yes_, the system will use the URL configured in the __Installments Service Url__ field.
8. In __External Cancellation Service__, set whether or not to use an external cancellation service. If you choose _yes_, the system will use the URL configured in the __External Service Url__ field.
9. In the __Installments Service Url__ field, configure the external URL that will be associated with `/options`.
10. In __SoftDescriptor__, insert the thext that will appear to identify transactions made in your store.
11. In the __B2W Service Url__ field, define the URL that will be used to get the payments token.
12. In __b2wServiceUser__ and __b2wServicePassword__, enter your account data in the B2W marketplace.
13. Already at __mainAccountName__, fill in the Main Account Name to which your store in the B2W marketplace is linked.
14. In __Captura de segurança antecipada__ ("Advanced Security Capture"), choose how long you want the capture to take place after the transaction approval and antifraud analysis. You can also disable this function.
15. In __Anti-Fraud__, inform if you wish to use the anti-fraud system.
16. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, VTEX B2W will be configured in your store and can be used to process payments in B2W marketplace. To use the gateway, simply register a compatible payment condition and VTEX B2W will be available in the __Process with affiliation__ field. 
To learn how to set up payment terms, check out [this article](/es/tutorial/condiciones-de-pago).
