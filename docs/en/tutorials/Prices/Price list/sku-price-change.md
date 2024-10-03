---
title: "Changing a SKU's price"
id: tutorials_95
status: PUBLISHED
createdAt: 2017-04-27T22:19:48.759Z
updatedAt: 2024-01-05T17:59:41.793Z
publishedAt: 2024-01-05T17:59:41.793Z
firstPublishedAt: 2017-04-27T23:00:42.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: sku-price-change
locale: en
legacySlug: sku-price-change
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

The platform offers three possibilities for updating prices, namely: each item manually using the admin by importing a spreadsheet and by integrating with the ERP. You will see in this article how to proceed in each of these manners for changing the mentioned information on the system; but before making changes using any of the options mentioned, it is important to pay close attention to the price change rule.

## Price change rule

To securely change the price in your store, the platform prevents the price from having an increase of more than 70% or a reduction of more than 30%. In other words, if I have a product priced R$100.00, the maximum I can increase the price to is R$170.00 and the lowest price I can reduce it to is R$70.00. This constraint was designed to prevent human errors when typing in the prices at the time of change, regardless of what tool is used.

This constraint was developed to avoid human errors in typing prices, at the time of change through any tool that is used.

Let’s suppose you have a product that costs R$10.00 and I need to update it to R$11.00. If the constraint didn’t exist and, through a typing error, it was updated to R$110.00, in the best-case scenario you would stop selling this item until the error was identified and the problem corrected. In the worst case, you would lose your customer’s trust and you could be sued for imposing prices well in excess of the market average.

The price reduction constraint aims to avoid losses, because the customer could easily buy the product with the wrong price and, depending on how many sales there are with the wrong price, your store could fail.

## Manual updating of each item using Admin

This updating normally occurs where a quick adjustment is needed to the SKU price and, as it is only one item, it’s easier to do manually on the admin than importing a spreadsheet. Those that don’t use ERP perhaps do not need this updating mode, since the integration with the tool makes allowances for this procedure. To do so, follow these steps:

1. In the VTEX Admin, go to *Prices > Price list*, or type *Price list* in the search bar at the top of the page.
2. Enter the ID of the SKU whose **SKU** field you wish to change in **Search**.
3. Click on the SKU desired. 
4. Add the **Cost Price ($)** + **Initial Markup (%)** = **Base Price (final value of product to consumer)**.
5. The information will automatically be saved by closing the tab. 

## Fields of the SKU price change form

These fields represent the information that is changed in any of the three manners mentioned. The difference is that whoever enters data manually, sees this form, when importing a spreadsheet, arranged in columns, while in the case of integration the request structure shows fields in the JSon format.

- **ID:** code of the SKU you accessed.
- **SKU:** name of the SKU.
- **Parceiro (utm\_source):** Optional field. This is a parameter for conditioning differentiated pricing, by using it on the site of the utm source registered here.
- **Campaign Audience (utm\_campaign):** Optional field. This is a parameter for conditioning differentiated pricing, by using it on the site of the utm campaign registered here, which can also be used in e-mail marketing links.
- **Internal Campaign Audience (utmi\_cp):** Optional field. This is a parameter for conditioning differentiated pricing, by using it on the site of the utm source registered here. Normally used for store employees, when it’s the case of having differentiated purchase conditions.
- **Valor De:** Mandatory field. The price is registered here and on the site it is crossed out (e.g.: De: R$100,00).
- **Valor:** Mandatory field. The selling price of the product is registered here.
- **Data inicial:** Mandatory field. This registers the start of the price validity period which, when registered or changed via integration with the ERP, and the date is not defined, shows 01/01/1900.
- **Data final:** Mandatory field. This registers the end date of the price validity period which, when registered or changed via integration with the ERP, and the date is not defined, shows 31/12/4000.
- **Política Comercial:** Mandatory field, but defaults to the main store’s policy. This field serves to define to what policy the price will be applied If only the price for the main store is registered, all other sales policies registered on the store will look to the same price as the main store. As prices are registered for specific policies, these policies will only consult their own price.
- **Seller:** Optional field. Substitutes the price registered on the seller selected, according to the message displayed in the field itself.

## By importing spreadsheets

This tool is normally used for mass updating of prices, which can be of all the products in the store, or according to the filter you set before exporting. Those that don’t use ERP perhaps do not need this updating mode, since this procedure is part of integration with the tool. To do so, follow these steps:

1. In the VTEX Admin, go to *Prices > Price list*, or type *Price list* in the search bar at the top of the page.
2. Click on __Export Prices Spreadsheet__ icon.
3. Select the table you want to export (**Table of base prices**, **Table of fixed prices** or **Table of computed prices**).
4. Click on the **Export Table**.
5. Then on the link **Exportar/Importar Valores**.
6. Select the **Exportar** tab and click on the **Exportar para Excel** button.
7. The system will process the request internally and, once this is ready, it will send it to the e-mail address you enter in the **E-mail para notificação** field.
8. This field defaults to the e-mail of the user who accessed the Admin. This is an important step, as it ensures that your spreadsheet will have the correct format, as well as keeping problems to a minimum at the time of importation.

Once the e-mail arrives and you download it, only change those SKUs that really need to be updated. You can exclude the others from the spreadsheet. This way, importation will take less time and you will avoid needless re-indexation of the products that were not changed. It is important to point out that the format accepted by the platform for importing spreadsheets is .xls. Taking into account that you haven’t closed the Admin page, continue with the steps below:

1. Select the **Importar** tab.
2. Click on **Selecionar arquivo**.
3. Search for the file you saved on your machine with the changed prices.
4. Select the file and click on **Open**.
5. Enter your e-mail address on **Email para notificação** so as to be notified about possible errors during importation (completion, spreadsheet format, etc.).
6. Click on the **Importar** button.

These are the spreadsheet columns that arrive at the user’s e-mail upon export, as mentioned in the step-by-step procedure above. The text below is exactly how it appears in the spreadsheet. The mandatory completion of each column abides by the same standard as the fields of the form described in the topic mentioned above.

- **StockKeepingUnitId:** id of the SKU.
- **Source:** utm\_source.
- **Price:** product selling price.
- **Id:** Price ID. Do not change this value, otherwise the system will create a new line on the price table and two prices will be registered for the SKU.
- **StoreId:** id of the sales policy in which the price will be applied. If you have any doubts about the identification code of any policy, access the module E-Commerce &gt; Marketplace &gt; Política Comercial. Check the number that appears in the “Id – Nome” column, this is the code that should be used here.
- **Medium (Disregard):** Discontinued field.
- **Campaign:** utm\_campaign.
- **InternalCampaign:** utmi\_cp.
- **DateFrom:** initial effective date for the price. Fill out in the dd/mm/yyyy format.
- **DateTo:** final effective date for the price. Fill out in the dd/mm/yyyy format.
- **ListPrice:** price of, also known as the list price. It is the one that appears crossed out (e.g.: From: $ 10,00) on the site.
- **RefId (Unchangeable):** product reference code, as per the product registration. Do not change this value.
- **Ean13Default (Unchangeable):** product ean, as per the product registration. Do not change this value.
- **BrandName (Unchangeable):** product brand name, as per the product registration. Do not change this value.
- **StockKeepingUnitName (Unchangeable):** name of the SKU, as per the product registration. Do not change this value.
- **SellerId:** id of the seller who owns the product. This will only be pre-populated in the event your store is the marketplace of another store.

## Through integration with ERP

This is usually configured when your store is being set up, and you and your technical team must follow the integration manual to avoid inconsistent integrations or any problem that might adversely affect the information that will be fed into the platform. The price update is performade via API, for information, access [Pricing API](https://developers.vtex.com/docs/api-reference/pricing-api#overview).

