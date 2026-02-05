---
title: 'Product integration errors with Amazon'
id: 4HsdzgoYxgQNtCBCRttKDA
status: PUBLISHED
createdAt: 2023-06-29T19:08:38.476Z
updatedAt: 2023-09-26T15:02:03.011Z
publishedAt: 2023-09-26T15:02:03.011Z
firstPublishedAt: 2023-06-29T22:27:35.313Z
contentType: trackArticle
productTeam: Channels
slugEN: product-integration-errors-with-amazon
locale: en
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugEN: product-integration-errors-with-amazon
order: 8
---

There are several reasons why a product may not integrate correctly between Amazon and your VTEX store, and each one generates a notification about the nature of the error. You can find the error message in the VTEX Admin if you go to the **Marketplace > Connections > Products** module, or if you search for it in the search bar. On the Products page, filter by Amazon as the marketplace and click the product to view the message.  

After fixing the error, you must manually reprocess the inventory integration for that SKU. You can do that from the same place where you view the error by clicking **Actions > Reprocess.**  

In this article, we cover the following errors:  

- [Errors in the Amazon category and attribute mapping spreadsheet](#Errors-in-the-Amazon-category-and-attribute-mapping-spreadsheet)
- [Errors related to missing mandatory attributes on Amazon](#Errors-related-to-missing-mandatory-attributes-on-Amazon)
- [Errors related to divergence between VTEX and Amazon catalogs (offer matching)](#Errors-related-to-divergence-between-VTEX-and-Amazon-catalogs-(offer-matching))
- [Errors related to Amazon tokens and permissions](#Errors-related-to-Amazon-tokens-and-permissions)
- [Errors related to the configuration of the Amazon integration](#Errors-related-to-the-configuration-of-the-Amazon-integration)
- [Errors when submitting the VTEX global category](#Errors-when-submitting-the-VTEX-global-category)
- [Inactive SKU warning](#Inactive-SKU-warning)

## Errors in the Amazon category and attribute mapping spreadsheet

  **The VTEX global category for this SKU was not completed or was completed incorrectly in the mapping spreadsheet**

This error occurs when the [global category](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#categoria-global) is not configured or was configured incorrectly. Amazon uses the global category from the VTEX platform to map products. That is why it is important that the equivalence between the VTEX global category and the Amazon general categories is done correctly.

To fix this error, [configure the global category](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#configuracao-da-categoria-global) of your product.

  **Specification (X) from the mapping spreadsheet was not found in the product or SKU specification in your VTEX catalog**

This error occurs when the spreadsheet contains a specification that does not exist in the VTEX catalog. To fix this error, you need to add a [product](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) or [SKU](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/6UjLHdAT5YLuflki10SXLr) specification. To view the values supported by Amazon, open the [Amazon mandatory attribute spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) and check the `VALID VALUES` tab.

  **Value (X) from the mapping spreadsheet is not an attribute/specification value supported by Amazon**

This error occurs when specification X is not supported by Amazon. You need to [add a specification](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) that is supported by Amazon. To view the values supported by Amazon, open the [Amazon mandatory attribute spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) and check the `VALID VALUES` tab.

  **The VTEX global category ID for this product was not found in the mapping spreadsheet**

This error occurs when the [global category](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#categoria-global) is not configured or was configured incorrectly. To fix this error, [configure the global category](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#configuracao-da-categoria-global) of your product.

  **The "Material" or "Department" specification value from the spreadsheet is not an attribute/specification supported by Amazon**

For both of these errors, the [VTEX global category](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) of the product selected by the seller requires the **Department** or **Material** attributes as mandatory in the product, and completing the [mapping spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#4-planilha-de-mapeamento). [Add](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) the attribute to the product and complete it in the spreadsheet as shown in the example below:

|**CategoryID**|**VariationTheme**|**Type**|**VTEXSpecification**|**AmazonSpecification**|**VTEXValue**|**AmazonValue**|
| :- | :- | :- | :- | :- | :- | :- |
|3||Information|Gender|Department|Women|Female|

- **The category and attribute mapping spreadsheet was not uploaded**

  This error occurred because the [Amazon mapping spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#4-planilha-de-mapeamento) was not uploaded. You need to [complete](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#5-preenchimento-da-planilha-de-mapeamento) the Amazon mapping spreadsheet and [upload](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#6-upload-da-planilha-de-mapeamento) it once it is completed.

- **The value of specification (X) from the spreadsheet does not exist in the VTEX product specification**

  In this error, the attribute in question has not been added to the SKU in the VTEX catalog. You need to [add the attribute](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) and redo the [mapping](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) of the submitted product.

- **The minimum age unit from the mapping spreadsheet is different from the value expected by Amazon.**

  The minimum age unit is different from the value requested by Amazon. Amazon supports years or months as units. Resubmit the [mapping](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) using the values accepted by Amazon.

- **Amazon does not accept the SKU variation from the mapping spreadsheet**

  This error occurs when the **VariationTheme** column of the Amazon mapping spreadsheet contains a value that is not supported by Amazon [Check the supported values](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#5-preenchimento-da-planilha-de-mapeamento) and add a valid value to the mapping spreadsheet.

- **The "SizeMap" attribute value from the mapping spreadsheet is not an attribute/specification value supported by Amazon**

  You added an incorrect value for the SizeMap attribute. To view the values supported by Amazon, open the [Amazon mandatory attribute spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) and check the `VALID VALUES` tab.

- **The "TargetGender" specification value from the spreadsheet is not an attribute/specification value supported by Amazon**

  You added an incorrect value for the TargetGender specification. To view the values supported by Amazon, open the [Amazon mandatory attribute spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) and check the `VALID VALUES` tab.

- **The color and size attributes for this SKU were not found in the mapping spreadsheet**

  You did not add a value for the Color and Size specifications that are mandatory for the category of the product you want to submit. Check the [Amazon mandatory attribute spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) to see the values supported by Amazon and add a valid value to the mapping spreadsheet.

- **The SKU does not have a value for the "author" attribute or the mapping spreadsheet does not contain a value for it**

  You did not add the mandatory Author attribute to the product you want to submit. To view the values supported by Amazon, open the [Amazon mandatory attribute spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon), check the `VALID VALUES` tab, and [add a product specification](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) for this attribute.

- **The "Size" attribute value from the mapping spreadsheet is not an attribute/specification value supported by Amazon**

  You did not add the Size specification value correctly. To view the values supported by Amazon, open the [Amazon mandatory attribute spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) and check the `VALID VALUES` tab.

- **The "Color" attribute value from the mapping spreadsheet is not an attribute/specification value supported by Amazon**

  You did not add the Color specification value correctly. To view the values supported by Amazon, open the [Amazon mandatory attribute spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) and check the `VALID VALUES` tab.

## Errors related to missing mandatory attributes on Amazon

- **The SKU does not have a value for the "Color" attribute or the mapping spreadsheet does not contain a value for it**

  The Color attribute is required for the category of the product you are submitting to Amazon and the SKU does not have it, or it was not added to the mapping spreadsheet.
You need to [add a SKU specification](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/6UjLHdAT5YLuflki10SXLr) for the Color attribute and/or redo the[mapping](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) for the submitted product.

- **The "TargetGender" product specification is mandatory for integrating this product with Amazon**

  The TargetGender product specification is mandatory for the category of the product you are submitting. Amazon may call it Department or TargetGender depending on the category.
Add the TargetGender [product specification](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) and redo the [mapping](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD).

## Errors related to divergence between VTEX and Amazon catalogs (offer matching)

- **The SKU already exists in the Amazon catalog and is ready for matching between VTEX and Amazon. However, the value of attribute (X) for this SKU on VTEX is different from the value it has on Amazon. It has value (X) on VTEX and value (Y) on Amazon.**

  This error occurs when there are differences between attribute values (details of SKU characteristics) in the Amazon and VTEX catalogs. To fix this error, you need to [edit the attribute value](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/6UjLHdAT5YLuflki10SXLr) on VTEX to make it match the [attribute value on Amazon](https://drive.google.com/uc?export=download&id=1UkcrfPopMg-cnrSDOF0qt51NRIXgzi0r).  

## Error Missing Attributes  

- **`SKU XXXXX, Missing AttributesX`. SKU XXXXX doesn't match any ASINs. Make sure that all standard product ids (such as UPC, ISBN, EAN, or JAN codes) are correct.**  

This error occurs when a SKU in your feed does not match any ASIN in Amazon's catalog, and the product attribute data is not sufficient to create an ASIN. To resolve it, make sure you are submitting the information correctly according to the values required [Amazon mandatory attribute spreadsheet](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon).

## Errors related to the Amazon token and permissions

- **The token entered in the Amazon configuration form on VTEX expired or does not have permission to access the flow**

  This error occurred because the serial number of the **MWS authorization token** expired. Contact Amazon to fix this problem, and [reconfigure the Amazon integration](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan).

- **Your account does not have permission on Amazon MWS**

  Missing permissions on Amazon MWS. To fix this error, you need to contact Amazon through [Amazon Seller Central](https://sellercentral.amazon.com/ap/signin?clientContext=135-8176388-1570853&openid.return_to=https%3A%2F%2Fsellercentral.amazon.com%2Fgp%2Fhomepage.html&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=sc_na_amazon_v2&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&mons_redirect=sign_in&ssoResponse=eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.PRkHwAgdQ7WNNaYmsjVxyF4S14XtyFJ90kRs_cAwB1nM2UeBvdF4yg.waGuLtWTiFMKrHYm.k8i8i6uR4KHIjrZ2OXqDhbyVPnxdmQMrUYpB776Ct68tZmYGoG6TqCYWMLAsBB79dnCwlb7M35CRVUZe-irxeAO-KhYcKXNuYs51r56and5qSqGBmrSz7UAuOLFF2jK0NwSvy61ArqrUZJWupPq_jIoTcgjOEKn6XjMaH-SaQjnnetzoDYsuK5xiSAOo3_NuL_OU75zeq20.I6sO_vS2_iRVpuH7l8xHjg). You can see more information about accounts in the Amazon documentation under [Managing your AWS account](https://docs.aws.amazon.com/accounts/latest/reference/managing-accounts.html). To learn more about the security policy for Amazon seller accounts, read [Security in AWS Account Management](https://docs.aws.amazon.com/accounts/latest/reference/security.html).

## Errors related to the configuration of the Amazon integration

- **The value of the "Shipping type name" field in the configuration of the Amazon integration on VTEX is different from the value it has on Amazon Seller Central**

  This error occurs when there is no equivalence between the value entered for the **Shipping type name** field in the [Configuring the Amazon integration](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan) step on VTEX and the value it has on Amazon Seller Central. Check the Amazon Seller Central documentation to clarify questions and fix the problem.

- **The value of the "SELLER ID" field in the configuration of the Amazon integration on VTEX is different from the value it has on Amazon Seller Central**

  This error occurs when there is no equivalence between the value entered for the **Seller ID** field in the [Configuring the Amazon integration](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan) step on VTEX and the value it has on Amazon Seller Central. Keep in mind that during the integration configuration, the **Seller ID** value you are asked to enter is the one from Amazon.
[Check the Amazon Seller Central documentation](https://sellercentral.amazon.com/ap/signin?clientContext=135-8176388-1570853&openid.return_to=https%3A%2F%2Fsellercentral.amazon.com%2Fgp%2Fhomepage.html&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=sc_na_amazon_v2&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&mons_redirect=sign_in&ssoResponse=eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.btqAgOsEYCzMdO5m9YBtHULpOJ9zDulpquLZakKdx_i4EiYLCA8JRA.6JVG2JtMpz5o1_pj.esabEhqgD_QW-8Kuy32N5O363NO0Mu3-uF-ckJjSyajtUVJ5VIboj4u66Zz8JvOZOXqv8hbNo_8I_xCDO5-gyD_OmF5M674zXjsnuuA4thqW0LsQnN1FJJsomwlM0188J3j15mfmZi2VRscda1HEsvhWR3EI2wG_XRLGmBEnBJ0Q7A3_QCkdkDUwSE6V2u0kW3OqT_HNLw.DzX-HENfRu35E7yMNMkS7g) to clarify questions and fix the problem.

## Errors when submitting the VTEX global category

- **The VTEX global category (X) for this SKU is not configured correctly in the integration**

  This error occurs when the [global category](/en/docs/tutorials/setting-up-the-global-category) that was selected in the mapping does not exist on Amazon. Check the product [global category mapping](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#categoria-global) and make sure that the selected category is linked with Amazon.

## Inactive SKU warning

- **The SKU you tried to submit is inactive on VTEX**

  The [SKU](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) is not active on VTEX. Only active SKUs can be integrated. Sometimes this error is generated by old [collections](/en/docs/tutorials/how-to-delete-a-collection) linked to the Amazon trade policy that contain inactive SKUs.
Check the SKU status on the Admin through the *PRODUCTS > Catalog > Products and SKUs* module and [activate the SKU](/en/docs/tutorials/activating-skus-in-bulk) if needed.

