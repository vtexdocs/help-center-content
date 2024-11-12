---
title: 'Shipping rate template'
id: tutorials_127
status: PUBLISHED
createdAt: 2019-02-22T19:36:18.509Z
updatedAt: 2023-10-10T13:26:19.271Z
publishedAt: 2023-10-10T13:26:19.271Z
firstPublishedAt: 2019-02-22T19:36:22.375Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-rate-template
locale: en
legacySlug: building-a-freight-spreadsheet, importing-the-shipping-spreadsheet
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

The shipping rate template is a spreadsheet where you enter shipping cost options that will be offered to your customers. It contains information such as ZIP code ranges, shipment weight limits, and the service fee charged by the company in charge of deliveries.

Please fill in the template according to the shipping service contract agreed between your store and the carrier/courier. 

To add shipping costs to the template, you have to:

1. [Fill in the fields in the spreadsheet](#fill-in-the-fields-in-the-spreadsheet)
2. [Upload the spreadsheet in VTEX Admin](#upload-the-spreadsheet-in-vtex-admin)

>ℹ️ You can also add shipping costs in the Shipping rates module. We recommend using the [shipping rate template](https://help.vtex.com/en/tutorial/shipping-rate-template--tutorials_127) to include multiple ZIP code ranges and using the Shipping rates module to manage existing shipping costs and add ZIP code ranges individually.

## Fill in the fields in the spreadsheet

To fill in the fields in the spreadsheet, consult the terms agreed with the company responsible for shipping your products. Make sure the information you enter follows these terms.

To download the template, go to **Shipping > Shipping strategy > Shipping policies > Create shipping policy.** In the **Upload shipping rates** section, click on `Download spreadsheet model`.

Fill in the columns considering that for each location there are: 

* An associated ZIP code (or geolocation) range
* Accepted weight ranges
* Fixed and additional shipping costs
* Maximum shipment volume

See below the spreadsheet columns content to understand each field in detail.
<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
        <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i"><b>Colum</b>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i"><b>Description</b>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i"><b>Details</b>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZipCodeStart</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">The first part of the ZIP code range. 
            </td>
            <td rowspan="2" class="t-body pa5" style="min-width: 15rem;"> You should add code ranges only if the <b>PolygonName</b> field is empty, as they contain equivalent function data.
            <p>
            <b>ZipCode</b> fields must contain up to 8 digits. Do not use special characters, only numbers and letters. </p>
            <p>You must fill in the fields according to the following rules:
                <body>
                  <ul>
                    <li>For numerical ranges, the accepted values are from <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">0000000</span> to <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">99999999</span>. </li>
                    <li>For alphabetical ranges, the accepted values are from <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">AAAAAAAA</span> to <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZZZZZZZZZ</span>.
                    <li>For alphanumerical ranges, the maximum value is <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZZZZZZZZ</span>.</li>
                  </ul>
                </body>  
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">ZipCodeEnd</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">The second and last part of the ZIP code range.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">PolygonName</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">The polygon identification defined in the <a href="https://help.vtex.com/en/tutorial/gerenciar-geolocalizacao/"> geolocation</a> function.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">You should fill in this field only if the <b>ZipCodeStart</b> and <b>ZipCodeEnd</b> fields are empty, as they contain equivalent function data. 
            </td>
        </tr>
    <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">WeightStart</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">The minimum weight allowed, in decimal number.
            </td>
            <td rowspan="2" class="t-body pa5" style="min-width: 15rem;">Consider the same weight unit informed when adding a SKU. For example, if you <a href="https://help.vtex.com/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY"> added SKUs</a> using grams, this will be the default unit for <b>WeightStart</b> and <b>WeightEnd</b>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">WeightEnd</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">The maximum weight allowed, in decimal number.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">AbsoluteMoneyCost</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">The fixed shipping cost to be charged, in decimal number.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">If there are additional charges, the total cost will be composed of the fixed cost plus additional costs.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">PricePercent</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> <a href="https://help.vtex.com/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV"> Price-based additional shipping charge</a> calculated in decimal number based on the total price of the products in the shopping cart. You must fill in this field with a percentage value. For example, for an additional charge of 10%, fill in the table with 10.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> <a href="https://help.vtex.com/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">Additional shipping costs</a> will be added to the fixed cost.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">PriceByExtraWeight</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"><a href="https://help.vtex.com/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">Weight-based additional shipping charge</a>, calculated based on the total weight of the order, in decimal number.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> <a href="https://help.vtex.com/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">Additional shipping costs</a> will be added to the fixed cost. Consider the exact weight unit informed when <a href="https://help.vtex.com/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY">adding a SKU</a> (examples: gram, kilogram, or ounce).
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">MaxVolume</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Maximum volume allowed, in decimal number.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Consider the same unit of volume informed when <a href="https://help.vtex.com/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY"> adding a SKU</a>. For example, if centimeter is the unit of measurement for height, width, and length, the <b>MaxVolume</b> field must be in cm³.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">TimeCost</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">The delivery time frame informed by the carrier, in the format <b>DD.HH:MM:SS</b>.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">For example, if the delivery time frame is 4.5 days, fill in the field as follows: 04.12:00:00.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Country</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Country where the delivery will take place. Fill it in with a three-letter ISO country code.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">You can check the ISO country code at <a href="https://countrycode.org/">Country Codes</a>.
            </td>
        </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">MinimumValueInsurance</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"><a href="https://help.vtex.com/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV">Additional insurance charge,</a> in absolute value and decimal number.
            </td>
            <td class="t-body pa5" style="min-width: 15rem;"> This value will be added to the shipping cost. However, it only applies when the <a href="https://help.vtex.com/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV"> price-based additional shipping charge</a> is lower than the <b>MinimumValueInsurance</b>. For more details, see the article <a href="https://help.vtex.com/en/faq/para-que-serve-o-campo-na-tabela-de-frete-minimum-value-insurance">What is the Minimum Value Insurance field?</a>.
            </td>
        </tr>
</tbody>
</table>

>ℹ️ We used the term "weight" when referring to "mass" in this documentation for readability.

Here is an example of how to fill in the fields in the spreadsheet.
![modelo_planilhanumerica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Upload the spreadsheet in VTEX Admin

Once you have completed the spreadsheet, save it as **.xls** or **.zip** file format and upload it via VTEX Admin. 

Follow the steps below: 

1. In the VTEX Admin, go to **Shipping > Shipping Strategy > Shipping Policies**, or type *Shipping Strategy* in the search bar at the top of the page.  
3. If you want to use a new shipping policy, click on the `Create shipping policy` button. If you want to edit an existing shipping policy, click on the pencil icon next to it.
4. In both cases, download the spreadsheet and [complete its fields](#fill-in-the-fields-in-the-spreadsheet). Then, upload the file in the **Upload shipping rates** section, as illustrated in the image below.
5. After completing these steps, click on `Save changes`.

![upload tarifas envioEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

>⚠️ For **new** shipping policies, other steps are required. Check out the article [Shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) for more information.

>❗ Each tab in the spreadsheet supports a maximum of 65,536 rows. You can create as many tabs as you want on the same worksheet, provided that it does not exceed the limit of rows and the maximum file size of 10MB. You can compress the file by saving it as **.zip**, if necessary. If the file is still too large to upload, you can split it into two files and create another shipping policy to upload the second file.

In the event that the spreadsheet contains an error, you will receive an email with details about the error. Make sure you have reviewed all the fields before uploading the file again.

Uploading the file and receiving confirmation may take a while because file processing may not occur immediately depending on the volume of data. 
