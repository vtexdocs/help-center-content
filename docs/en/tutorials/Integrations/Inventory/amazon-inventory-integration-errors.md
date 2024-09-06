---
title: 'Amazon inventory integration errors'
id: 3t05cXK2vDbKCA6rifMMWj
status: PUBLISHED
createdAt: 2021-10-28T13:54:04.797Z
updatedAt: 2023-03-29T14:38:55.490Z
publishedAt: 2023-03-29T14:38:55.490Z
firstPublishedAt: 2021-10-28T18:41:30.731Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: amazon-inventory-integration-errors
locale: en
legacySlug: amazon-inventory-integration-errors
subcategoryId: 7lxg0kyL3TYIsrlSQlf1zP
---

Inventory integration errors may occur in marketplaces for which VTEX has developed a [native connector](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex). This article gathers the most common Amazon inventory integration errors and provides directions on how to fix them.

In the Admin, there are messages identifying the errors. To view them, log in to your VTEX Admin and go to **MARKETPLACE > Connections > Inventory**. Click on "processed with error".

After fixing the error, you must manually reprocess the inventory integration for that SKU. This is done in the same place where the error is viewed by clicking on **Actions > Reprocess**.

Below are the most common Amazon inventory integration error messages:

#### Error message

`Invalid seller id`

This error means that the seller ID used when configuring the Amazon integration is considered invalid. You must contact [Amazon Seller Central](https://sellercentral.amazon.com/) to confirm the correct ID. Once this is done, correct the integration connector settings. In your VTEX Admin, go to **MARKETPLACE > Connections > Settings.** On the Amazon card, click on the <i class="fas fa-cog"></i> gear icon and choose the **Edit configuration** option. Fill in the _Amazon Seller ID_ field with the correct ID number and click on **Save configuration**.

____

#### Error message

`This SKU is not in the Amazon catalog. If you are receiving this message after submitting a multi-marketplace inventory file and the designated marketplace for this error is different than the marketplace in which you submitted your file, this error is an indication that the Detail page for this item does not exist in the designated marketplace. Amazon is attempting to create the Detail Page for this item on your behalf. If successful, your listing will be created in the designated marketplace within 48 hours.`

This message indicates a failure to export the SKU to the Amazon catalog, probably because the mapping template was not filled in correctly for that SKU. This makes it impossible to integrate inventory with Amazon. First, you must re-export the category to which the SKU belongs. To do this, please refer to the article [Sending products to Amazon](https://help.vtex.com/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD). Then, [update your inventory](https://help.vtex.com/en/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo). This will automatically be reflected in Amazon, therefore, no manual reprocessing of the error is required.

____

#### Error message

`Amazon must approve your brand before you can use it to list products. Brands should be registered through Brand Registry, but if your brand is not eligible for Brand Registry, you can obtain an exception by contacting Seller Support and mentioning error code 5665. When contacting Seller Support, provide the following information: - The brand name used when creating the listing. - Images of the product and packaging, showing branding on either. The images can show the product and packaging held in hand, or placed on a table. The branding must be permanently affixed. - If using inventory file templates, please also provide the Batch ID of the inventory file process report. For more information, please review our Brand Name Policy.`

Amazon will only accept a product after approving the brand for that product, which must be registered through [Amazon Brand Registry](https://brandservices.amazon.com/eligibility). However, if your brand is not eligible for registration under [Amazon Brand Name Policy](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ?language=en_US), you can get an exception by contacting [Amazon Seller Central](https://sellercentral.amazon.com). You must report the _error code 5665_ to support, along with the information described in the Amazon Brand Name Policy.

____

#### Error message

`We have identified you may be misusing the Brand field and not complying with the Brand Name Policy. If you believe you are complying with our policy, please contact Seller Support and mention error code 5661. When contacting Seller Support, provide the following information: - The brand name used when creating the listing. - Images of the product and packaging, showing branding on either. The images can show the product and packaging held in hand, or placed on a table. The branding must be permanently affixed. - If using inventory file templates, please also provide the Batch ID of the inventory file process report. For more information, please review our Brand Name Policy.`

Your product's brand name has been found to be in violation of [Amazon Brand Name Policy](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ?language=en_US). If you have checked the marketplace requirements and cannot identify the source of the problem, please contact [Amazon Seller Central](https://sellercentral.amazon.com). Please report the _error code 5661_ to support, along with the information described in the Amazon Brand Name Policy.

____

#### Error message

`The seller does not have an eligible Amazon account to call Amazon MWS. For more information about eligible accounts, see the Amazon MWS documentation.`

A user's Amazon account can be deemed ineligible for several reasons, such as incorrectly filled in registration data, token issues, or violation of marketplace policy. To fix the error, please contact [Amazon Seller Central](https://sellercentral.amazon.com/). More information about accounts can be found in [Managing your AWS account](https://docs.aws.amazon.com/accounts/latest/reference/managing-accounts.html). To learn more about the security policy on Amazon seller accounts, please refer to [Security in AWS Account Management](https://docs.aws.amazon.com/accounts/latest/reference/security.html).

____

#### Error messages

`Access to Feeds. SubmitFeed is denied`<br>
</br>`Feed rejected`

Amazon [Data feeds](https://docs.aws.amazon.com/marketplace/latest/userguide/data-feed.html) give sellers the ability to collect and analyze information about their products, sales, and more. These errors usually occur due to registration or token issues. One of the registration fields may be pending or may have been incorrectly filled in. It may also be an issue with the integration token, which may have expired or may have been deemed suspicious for security reasons, for example. To fix the error, please contact [Amazon Seller Central](https://sellercentral.amazon.com/).
____

#### Error messages

`AuthToken is not valid for SellerId and AWSAccountId`<br>
</br>`Access denied`

These errors occur due to token issues. Amazon may consider a token invalid for different reasons, such as expiration date or suspected security threat. Issues regarding tokens must be addressed directly through [Amazon Seller Central](https://sellercentral.amazon.com/).

<br></br>
### Learn more

- [Amazon Integration](https://help.vtex.com/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP)
- [Minimum stock control for integrations
](https://help.vtex.com/en/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D)
- [Setting up the Alert Low Inventory
](https://help.vtex.com/en/tutorial/configurar-o-alerta-de-estoque-critico--6FD0GHeQPCsKIMgkQ88SGu)
