---
title: 'How to register SKU price'
id: tutorials_230
status: ARCHIVED
createdAt: 2017-04-27T22:13:28.715Z
updatedAt: 2021-02-03T16:31:00.230Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:04.007Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: registering-sku-price
locale: en
legacySlug: registering-sku-price
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

The functionality of the platform for registering or altering the price of an SKU is “Valores de Tabela de SKUs”. Here you can register the price of each SKU manually through admin, in mass by importing from an Excel spreadsheet or through a API. 

The manual process is more appropriate when the storeowner wants to alter the price of a small number of SKUs, as in this case it is quicker and more practical. The other processes are used to alter a larger number of SKUs simultaneously, thus saving time, since the manual process would be very work-intensive. The procedure in each case is shown below.

## Manual registration or change

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price%20list/registering-sku-price_1.gif)

### Registration for a new value

1. Access the __Catalog__ module.
2. Click on the “Cadastro de Produtos” button.
3. Then select “Produtos e SKUs” and “Importar/Exportar valores de tabelas de Skus”.
4. Click on “Novo Valor de Tabela”.
5. Complete the “Sku” field with the ID of the SKU for which you want to register the price.
6. Complete the other fields (as explained below) and save.

### Altering an existing registration

1. Access the Catalog module.
2. Click on the “Cadastro de Produtos” button.
3. Then select “Produtos e SKUs” and “Importar/Exportar valores de tabelas de Skus”.
4. Click on “Filtrar resultados ou fazer uma busca”.
5. In the “Sku” field, enter the ID of the SKU for which you want to change the price, and click on “Buscar”.
6. Click on the “Alterar” button.
7. Alter the field you want to update, and save.

### Fields available for manual registration or change

- **SKU:** SKU ID. When registering, completion of this field is mandatory, but when you are making a change, it is read-only.
- **Parceiro (utm_source):** Option for the URL parameter to be used on the site, for the price to be applied.
- **Campanha (utm_campaign):** Option for the URL parameter to be used on the site, for the price to be applied.
- **Campanha interna (utmi_cp):** Option for the URL parameter to be used on the site, for the price to be applied.
- **Valor De:** SKU list price which will appear on the site as “preço de”.
- **Valor:** SKU list price which will appear on the site as “preço por”. If the "price of" has the same value as the "price per", the value of the "price per" will be displayed on the website. It's to this value that the benefits are applied.
- **Data inicial:** Inicial effective date of the price. Before this date, the SKU will not be available for sale.
- **Data final:** Final effective date of the price. After this date, the SKU will not be available for sale.
- **Política Comercial:** Policy for applying the price, as registered in E-Commerce -> Marketplace -> Política Comercial.
- **Seller:** Defines the seller, the owner of the product. Normally used for stores which operate as a marketplace (selling products of other stores).
_If you click on the “Novo Valor de Tabela” button after filtering an SKU, this will be a new value registered on the table of the SKU you filtered. You must pay attention to this type of action, so as to avoid duplicate prices with the same conditions (utm, validity, sales policy or seller), as this will adversely affect the indexation of that SKU._

## Registration or change by importing Excel spreadsheets

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price%20list/registering-sku-price_2.gif)

### To register new prices

1. Access the __Catalog__ module.
2. Click on the “Cadastro de Produtos” button.
3. Then select “Produtos e SKUs” and “Importar/Exportar valores de tabelas de Skus”.
4. Click on “Exportar / Importar Valores” and then on “Exportar”.
5. Click on “Clique aqui” to export the model worksheet. This step ensures that you will be using a worksheet which the system will accept.
6. Complete the columns as explained below.
7. Save the file on your computer as .xls (Excel 97-2003 Workbook).
8. Return to admin, and click on “importar”.
9. Select the saved file.
10. Enter the email to receive notification of the import.
11. Click on “Importar”. The request will be processed internally by the system, and notification of completion of the process will be sent to the email address registered.

### To change prices already registered

1. Access the __Catalog__ module.
2. Click on the “Cadastro de Produtos” button.
3. Then select “Produtos e SKUs” and “Importar/Exportar valores de tabelas de Skus”.
4. Click on “Exportar / Importar Valores” and then on “Exportar”.
5. Complete the field “E-mail para notificação".
6. Click on “Exportar para Excel”.
7. The system will process the request internally, and on completion will send the worksheet to the e-mail address registered.

### Excel spreadsheet fields for Import

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price%20list/registering-sku-price_3.jpg)

- **StockKeepingUnitId: **ID of the SKU to be registered or whose price is to be changed;
- **Source**: value of utm\_source;
- **Price**: selling price of the SKU. It will appear on the site as “preço por”;
- **ID**: Price ID. If you leave this field blank, a new price will be registered. If the field is completed in the exported document, do not alter it;
- **StoreId**: ID of the commercial policy in which the price will be applied. The same as the ID registered in the module E-Commerce &gt; Marketplace &gt; Política Comercial. To register more than one, separate with commas (e.g.: 1,2,3);
- **Medium (Deprecated)**: This field is no longer used. Do not complete it;
- **Campaign**: value of utm\_campaign;
- **InternalCampaign**: value of utmi\_cp;
- **DateFrom: **Initial effective date for the new price. The SKU is not available before this date;
- **DateTo**: final effective date for the price. The SKU will not be available after this date;
- **ListPrice**: list price. Will appear on the site as “preço de”;
- **RefId (Not changeble)**: Reference ID for the SKU, according to the SKU registration. If a value is shown in the exported document, do not change it;
- **Ean13Default (Not changeble)**: EAN of the SKU, according to the SKU registration. If a value is shown in the exported document, do not change it;
- **BrandName (Not changeble)**: brand name of the product, according to the SKU registration. If a value is shown in the exported document, do not change it;
- **StockKeepingUnitName (Not changeble)**: name of the SKU, according to the SKU registration. If a value is shown in the exported document, do not change it;
- **SellerId**: ID of the seller who owns the SKU. Normally used for stores which operate as a marketplace (selling products of other stores).

_The spreadsheet must upload up to 200 lines at a time, as this will speed up the processing and prevent the occurrence of errors caused by delays in processing the file._
