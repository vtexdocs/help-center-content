---
title: 'Shipping rate template'
id: tutorials_127
status: PUBLISHED
createdAt: 2019-02-22T19:36:18.509Z
updatedAt: 2025-09-03T20:19:15.421Z
publishedAt: 2025-09-03T20:19:15.421Z
firstPublishedAt: 2019-02-22T19:36:22.375Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-rate-template
legacySlug: building-a-freight-spreadsheet, importing-the-shipping-spreadsheet
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

The shipping rate template is a spreadsheet where you enter shipping cost options that will be offered to your customers. It contains information such as ZIP code ranges, shipment weight limits, and the service fee charged by the company in charge of deliveries.

Please fill in the template according to the shipping service contract agreed between your store and the carrier/courier. 

To add shipping costs to the template, you have to:

1. [Fill in the fields in the spreadsheet](#fill-in-the-fields-in-the-spreadsheet)
2. [Upload the spreadsheet in VTEX Admin](#upload-the-spreadsheet-in-vtex-admin)

> ℹ️ You can also add shipping costs in the Shipping rates module. We recommend using the [shipping rate template](/en/tutorial/shipping-rate-template--tutorials_127) to include multiple ZIP code ranges and using the Shipping rates module to manage existing shipping costs and add ZIP code ranges individually.

## Fill in the fields in the spreadsheet

To fill in the fields in the spreadsheet, consult the terms agreed with the company responsible for shipping your products. Make sure the information you enter follows these terms.

To download the template, go to **Shipping > Shipping strategy > Shipping policies > Create shipping policy.** In the **Upload shipping rates** section, click on `Download spreadsheet model`.

Fill in the columns considering that for each location there are: 

* An associated ZIP code (or geolocation) range
* Accepted weight ranges
* Fixed and additional shipping costs
* Maximum shipment volume

See below the spreadsheet columns content to understand each field in detail.

| Colum                 | Description                                                                                                                                                                                                                                                                                      | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ZipCodeStart`         | The first part of the ZIP code range.                                                                                                                                                                                                                                                            | You should add code ranges only if the **PolygonName** field is empty, as they contain equivalent function data.<br><br>**ZipCode** fields must contain up to 8 digits. Do not use special characters, only numbers and letters.<br><br>You must fill in the fields according to the following rules:<br>- For numerical ranges, the accepted values are from `0000000` to `99999999`.<br>- For alphabetical ranges, the accepted values are from `AAAAAAAA` to `ZZZZZZZZZ`.<br>- For alphanumerical ranges, the maximum value is `ZZZZZZZZ`. |
| `ZipCodeEnd`           | The second and last part of the ZIP code range.                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `PolygonName`          | The polygon identification defined in the [geolocation](/en/tutorial/gerenciar-geolocalizacao/) function.                                                                                                                                                                  | To use geolocation, after filling in the **PolygonName** column with the desired values, fill in the **ZipCodeStart** and **ZipCodeEnd** columns with the value `0`.<br>You should fill in this field only if the **ZipCodeStart** and **ZipCodeEnd** fields are used, as they contain equivalent function data.                                                                                                                                                                                                                          |
| `WeightStart`          | The minimum weight allowed, in decimal number.                                                                                                                                                                                                                                                   | Consider the same weight unit informed when adding a SKU. For example, if you [added SKUs](/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY) using grams, this will be the default unit for **WeightStart** and **WeightEnd**.                                                                                                                                                                                                                                                                             |
| `WeightEnd`            | The maximum weight allowed, in decimal number.                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `AbsoluteMoneyCost`    | The fixed shipping cost to be charged, in decimal number.                                                                                                                                                                                                                                        | If there are additional charges, the total cost will be composed of the fixed cost plus additional costs.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `PricePercent`         | [Price-based additional shipping charge](/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV) calculated in decimal number based on the total price of the products in the shopping cart. You must fill in this field with a percentage value. For example, for an additional charge of 10%, fill in the table with 10. | [Additional shipping costs](/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV) will be added to the fixed cost.                                                                                                                                                                                                                                                                                                                                                                                                |
| `PriceByExtraWeight`   | [Weight-based additional shipping charge](/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV), calculated based on the total weight of the order, in decimal number.                                                                                                   | [Additional shipping costs](/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV) will be added to the fixed cost. Consider the exact weight unit informed when [adding a SKU](/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY) (examples: gram, kilogram, or ounce).                                                                                                                                                                                                       |
| `MaxVolume`            | Maximum volume allowed, in decimal number.                                                                                                                                                                                                                                                       | Consider the same unit of volume informed when [adding a SKU](/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY). For example, if centimeter is the unit of measurement for height, width, and length, the **MaxVolume** field must be in cm³.                                                                                                                                                                                                                                                             |
| `TimeCost`             | The delivery time frame informed by the carrier, in the format **DD.HH:MM:SS**.                                                                                                                                                                                                                   | For example, if the delivery time frame is 4.5 days, fill in the field as follows: 04.12:00:00.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `Country`              | Country where the delivery will take place. Fill it in with a three-letter ISO country code.                                                                                                                                                                                                     | You can check the ISO country code at [Country Codes](https://countrycode.org/).                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `MinimumValueInsurance`| [Additional insurance charge](/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV), in absolute value and decimal number.                                                                                                                                                 | This value will be added to the shipping cost. However, it only applies when the [price-based additional shipping charge](/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV) is lower than the **MinimumValueInsurance**.<br>For more details, see the article [What is the Minimum Value Insurance field?](/en/faq/para-que-serve-o-campo-na-tabela-de-frete-minimum-value-insurance).                                                                                                           |

> ℹ️ We used the term "weight" when referring to "mass" in this documentation for readability.

Here is an example of how to fill in the fields in the spreadsheet.

![modelo_planilhanumerica](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/shipping-rate-template_1.png)

## Upload the spreadsheet in VTEX Admin

Once you have completed the spreadsheet, save it as **.xls** or **.zip** file format and upload it via VTEX Admin. 

Follow the steps below: 

1. In the VTEX Admin, go to **Shipping > Shipping Strategy > Shipping Policies**, or type *Shipping Strategy* in the search bar at the top of the page.  
3. If you want to use a new shipping policy, click on the `Create shipping policy` button. If you want to edit an existing shipping policy, click on the pencil icon next to it.
4. In both cases, download the spreadsheet and [complete its fields](#fill-in-the-fields-in-the-spreadsheet). Then, upload the file in the **Upload shipping rates** section, as illustrated in the image below.
5. After completing these steps, click on `Save changes`.

![upload tarifas envioEN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/shipping-rate-template_2.png)

> ⚠️ For **new** shipping policies, other steps are required. Check out the article [Shipping policy](/en/tutorial/politica-de-envio--tutorials_140) for more information.

> ❗ Each tab in the spreadsheet supports a maximum of 65,536 rows. You can create as many tabs as you want on the same worksheet, provided that it does not exceed the limit of rows and the maximum file size of 10MB. You can compress the file by saving it as **.zip**, if necessary. If the file is still too large to upload, you can split it into two files and create another shipping policy to upload the second file.

In the event that the spreadsheet contains an error, you will receive an email with details about the error. Make sure you have reviewed all the fields before uploading the file again.

Uploading the file and receiving confirmation may take a while because file processing may not occur immediately depending on the volume of data. 
