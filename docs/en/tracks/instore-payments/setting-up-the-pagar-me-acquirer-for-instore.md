---
title: 'Configuring the Pagar.me acquirer for inStore'
id: 6vPPMU01zS2CgEm2aLl12C
status: DRAFT
createdAt: 2020-03-04T20:23:52.210Z
updatedAt: 2022-09-05T22:21:14.647Z
publishedAt: 
firstPublishedAt: 2020-03-11T23:52:14.271Z
contentType: trackArticle
productTeam: Financial
slug: setting-up-the-pagar-me-acquirer-for-instore
locale: en
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: instore-payments
---

To configure Pagar.me as an acquirer for inStore payments, follow the steps below.

1. Access the Admin.
2. Go to the __Payments__ module.
3. Click on __Settings__.
4. In __Gateway affiliations__, click the `+` button.
5. Select the __inStore__ connector.
6. Fill in the following settings:
   - __Merchant Name__: The name you will create for the affiliation.
   - __External Reference__: The store code. Optional field.
   - __Corporate Document__: Corresponds to the company registration number. Optional field.
   - __Acquirer__: The acquirer who will process payments. Select the __pagarme__ option.
   - __Tipo de parcelamento (Type of installment)__: Define who will be responsible for installment interests — the credit card company, the retailer, or the bank.
   - __API Key__: Enter your secret key information provided by Pagar.me.
   - __Encryption Key__: Enter your public key information provided by Pagar.me.
   - __Formato (Format)__: Corresponds to the message format accepted by the credit card machine. Select the __Default__ option.
7. To finish, click `Save`.

After that, you have to configure the __Payment conditions__. Click on `NEXT` to read the articles in this track on how to configure debit and credit payment conditions.
