---
title: 'Managing shipping rates'
id: tutorials_141
status: PUBLISHED
createdAt: 2017-04-27T22:17:04.172Z
updatedAt: 2023-03-29T15:06:40.531Z
publishedAt: 2023-03-29T15:06:40.531Z
firstPublishedAt: 2017-04-27T23:00:45.116Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: managing-shipping-rates
locale: en
legacySlug: editing-freight-values
subcategory: 7uJcyu0VawEm8ggqKu404u
---

Your store's [shipping rates](https://help.vtex.com/en/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM) are the shipping cost options that will be offered to your customers. In the Admin, the **Shipping rates** module allows you to manage shipping rates individually using postal codes. In this module, you can:

* [Add shipping rates](#adding-shipping-rates).
* [Search for existing shipping rates](#searching-for-existing-shipping-rates).
* [Edit shipping rates](#editing-shipping-rates).
* [Delete shipping rates](#deleting-shipping-rates).

>ℹ️ If you need to update or add multiple shipping rates, we recommend using the shipping rate template instead of the **Shipping rates** module. If you want to check out how shipping rates are added and displayed to the end customer, use the **[Shipping simulator](https://help.vtex.com/en/tutorial/simulacao-de-frete--tutorials_144)** module.

## Adding shipping rates

To add a new shipping rate, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping rates**, or type *Shipping rates* in the search bar at the top of the page.   
2. Click on the `New shipping rate` button.
3. Fill in the fields.
    * **Shipping policy**: select the [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) to which the new rate will apply.
    * **Country**: country in which the carrier will make the delivery.
    * **Postal code range: **the postal code interval to which the new rate will apply. This field must be filled in only with numbers and/or letters.
    * **Weight range**: minimum and maximum shipment weight limits accepted by the carrier (considering the shipping rate and postal code specified). This field must be filled in with a decimal number. The weight unit (grams, kilograms, etc.) must be the same used when adding items (SKUs) to the catalog. 
    * **Shipping rate**: flat rate charged for making the delivery (considering the postal code and weight specified). This field must be filled in with a decimal number.
    * **Additional value**: the product’s percentage value that will be added to the shipping rate. For example, if the product costs US$ 80.00 and the additional value is 1 then an amount of US$ 0.80 will be added to the final shipping rate.<p>The percentage refers to the product’s total cost (the product price without discounts). This field must be filled in with a decimal number.For example, to add a percentage of 
23%, you can fill in the field with `23` or `23,00`.</p>
    * **Additional value per weight**: additional value for each unit that exceeds the minimum weight limit. This field must be filled in with a decimal number.
    * **Max. cubic volume:** the maximum volume accepted by the carrier. This field must be filled in with a decimal number.
    * **Delivery time**: the maximum number of days for the carrier to make the delivery. This field must be filled in with a natural number.

## Searching for existing shipping rates

To check your existing shipping rates, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping rates**, or type *Shipping rates* in the search bar at the top of the page.    
2. Fill in the **Postal Code** field.
3. Select a **Shipping policy**.
4. Click on `Search`.

A list of search requirements will be available. The list contains the rates added both using the [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127) and the [Shipping rate](https://help.vtex.com/en/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM) module, and you can edit or delete a shipping rate.

## Editing shipping rates

1. In the VTEX Admin, go to **Shipping > Shipping rates**, or type *Shipping rates* in the search bar at the top of the page.   
2. Fill in the **Postal Code** field.  
3. Select a **Shipping policy**.  
4. Click on `Search`.  
5. In the **Actions** column, click on the <i class="fas fa-edit"></i> icon for advanced settings.  
6. Change the fields you want.  
7. Click on `Save`.  

## Deleting shipping rates

1. In the VTEX Admin, go to **Shipping > Shipping rates**, or type *Shipping rates* in the search bar at the top of the page.     
2. Fill in the **Postal Code** field.  
3. Select a **Shipping policy**.  
4. Click on `Search`.  
5. In the **Actions** column, click on `X`.  
