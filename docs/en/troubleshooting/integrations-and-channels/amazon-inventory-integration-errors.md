---
title: 'Amazon inventory integration errors'
id: 3t05cXK2vDbKCA6rifMMWj
status: PUBLISHED
createdAt: 2021-10-28T13:54:04.797Z
updatedAt: 2026-10-07T22:20:00.000Z
publishedAt: 2023-03-29T14:38:55.490Z
firstPublishedAt: 2021-10-28T18:41:30.731Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: amazon-inventory-integration-errors
legacySlug: amazon-inventory-integration-errors
locale: en
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Logistics
  - Integrations
symptomFilters:
  - Sync issue
  - Misconfiguration
---

When an inventory integration error occurs between **Amazon** and a store, an error message is displayed for each SKU. To check the errors, in the VTEX Admin, go to **Marketplace > Connections > Inventory**, or type **Inventory** in the search bar.

The most common Amazon inventory integration errors are:

- **Invalid seller ID**
- **SKU not in the catalog**
- **Brand not approved**
- **Misuse of the Brand field**
- **Ineligible account**
- **Feed access denied**
- **Invalid token**

## Solution

To fix Amazon inventory integration errors, consider the options in the following table:

|Error message|Meaning|Required action|
|---|---|---|
|**Invalid seller id**|The seller ID used in the integration settings is considered invalid.|Confirm the correct ID with [Amazon Seller Central](https://sellercentral.amazon.com/). In the VTEX Admin, go to **Marketplace > Connections > Settings**, click the gear icon on the Amazon card, choose **Edit configuration**, fill in the _Amazon Seller ID_ field, and click **Save configuration**. Then reprocess the SKU under **Marketplace > Connections > Inventory** by clicking **Actions > Reprocess**.|
|**This SKU is not in the Amazon catalog. If you are receiving this message after submitting a multi-marketplace inventory file and the designated marketplace for this error is different than the marketplace in which you submitted your file, this error is an indication that the Detail page for this item does not exist in the designated marketplace. Amazon is attempting to create the Detail Page for this item on your behalf. If successful, your listing will be created in the designated marketplace within 48 hours.**|The SKU was not exported to the Amazon catalog, usually because the mapping template was filled in incorrectly.|Export the SKU category again, as described in [Sending products to Amazon](/en/docs/tracks/sending-products-to-amazon), and [update the inventory](/en/docs/tutorials/updating-the-quantity-of-items-in-inventory). The update is reflected in Amazon automatically, so manual reprocessing is not required.|
|**Amazon must approve your brand before you can use it to list products. Brands should be registered through Brand Registry, but if your brand is not eligible for Brand Registry, you can obtain an exception by contacting Seller Support and mentioning error code 5665.**|Amazon only lists the product after approving its brand.|Register the brand in [Amazon Brand Registry](https://brandservices.amazon.com/eligibility). If the brand is not eligible under the [Amazon Brand Name Policy](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ?language=en_US), request an exception through [Amazon Seller Central](https://sellercentral.amazon.com) and report error code 5665 along with the information required by the policy.|
|**We have identified you may be misusing the Brand field and not complying with the Brand Name Policy. If you believe you are complying with our policy, please contact Seller Support and mention error code 5661.**|The product brand was found to violate Amazon's brand name policy.|Review the [Amazon Brand Name Policy](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ?language=en_US). If the cause is still unclear, contact [Amazon Seller Central](https://sellercentral.amazon.com) and report error code 5661 along with the information required by the policy.|
|**The seller does not have an eligible Amazon account to call Amazon MWS.**|The Amazon account was considered ineligible because of incorrect registration data, a token issue, or a marketplace policy violation.|Contact Amazon through [Amazon Seller Central](https://sellercentral.amazon.com/). See also [Managing your AWS account](https://docs.aws.amazon.com/accounts/latest/reference/managing-accounts.html) and [Security in AWS Account Management](https://docs.aws.amazon.com/accounts/latest/reference/security.html).|
|**Access to Feeds. SubmitFeed is denied**<br>**Feed rejected**|The feed was denied because of a pending or incorrect registration field, or because the integration token expired or was considered suspicious.|Contact Amazon through [Amazon Seller Central](https://sellercentral.amazon.com/). Learn more about [Data feeds](https://docs.aws.amazon.com/marketplace/latest/userguide/data-feed.html).|
|**AuthToken is not valid for SellerId and AWSAccountId**<br>**Access denied**|The token was considered invalid, for example because it expired or there was a suspected security threat.|Address the token directly with Amazon through [Amazon Seller Central](https://sellercentral.amazon.com/).|
