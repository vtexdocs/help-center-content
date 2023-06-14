---
title: 'Managing shipping rates'
id: 2Pj1gKR80QIuUhc0orMraD
status: DRAFT
createdAt: 2019-10-23T14:48:44.609Z
updatedAt: 2022-03-08T18:43:48.534Z
publishedAt: 
firstPublishedAt: 2019-10-23T15:03:37.365Z
contentType: trackArticle
productTeam: Post-purchase
slug: managing-shipping-rates
locale: en
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
---


To properly set up a new carrier, it's important to have a look at how to add a __shipping rates spreadsheet__, a key point from the previous stage.

The spreadsheet is used to add served ZIP code ranges, along with the respective cost, weight range and additional values for each carrier.

## Populating the spreadsheet

After the store signed a contract with a carrier, it usually agrees upon the ZIP code range and weight that will be served according to the shipping rates and extras. Once this information is defined, all that's needed is for the each spreadsheet field to be filled out, as follows:
- **ZipCodeStart**: ZIP code range start.
- **ZipCodeEnd**: ZIP code range end.
- **PolygonName**: Identifies the polygon defined by the [geolocation](https://help.vtex.com/en/tutorial/mapping-geolocation--tutorials_138) function.
- **WeightStart**: Weight range start for the respective ZIP code range. Consider the same weight unit informed when [adding a SKU](https://help.vtex.com/en/tutorial/sku-registration-fields--21DDItuEQc6mseiW8EakcY). 
- **WeightEnd**: Weight range end for the respective ZIP code range. Consider the same weight unit informed when [adding a SKU](https://help.vtex.com/en/tutorial/sku-registration-fields--21DDItuEQc6mseiW8EakcY). 
- **AbsoluteMoneyCost**: Total shipping cost due, meaning that a value at least equal to it will always be charged.
- **PricePercentage**: [Additional shipping cost](https://help.vtex.com/en/tutorial/how-additional-shipping-fees-work--tutorials_121), according to the cart price. [Understand how shipping additional fees are configured](https://help.vtex.com/en/tutorial/how-to-configure-shipping-additional-fees--tutorials_105).
- **PriceByExtraWeight**: [Additional shipping value](https://help.vtex.com/pt/tutorial/como-funciona-o-adicional-de-frete), according to the cart's weight **in grams**. [Understand how shipping additional fees are configured](https://help.vtex.com/en/tutorial/how-to-configure-shipping-additional-fees--tutorials_105).
- **MaxVolume**: Max weight volume **in centimeters** to be shipped by the carrier.
- **TimeCost**: Order shipping time, following the __DD.HH:MM:SS__ format.
- **Country**: Country to where the order is shipped to. Must be filled out with the [country's 3 digit ISO code](https://countrycode.org/).
- **MinimumValueInsurance**: It's an additional shipping fee with an absolute value, which is compared to the valued given in PricePercentage and then multiplied by the cart's value. Whichever value is greater is added to the shipping cost. Only one of the two possible values will be added to the shipping cost. For more details, see [what the Minimum Value Insurance field does](http://help.vtex.com/tutorial/what-is-the-minimum-value-insurance--frequentlyAskedQuestions_158).

<div class="alert alert-warning">
<strong>OBS:</strong> If your spreadsheet size is over 10MB, you'll need to compress it into a <strong>.zip</strong> format. The .zip file must be less than 10MB for the upload to work. If, however, it still exceeds the size limit, we recommend splitting the spreadsheet among several carriers. 
</div>

## Managing shipping rates without using the spreadsheet

Even if a carrier's shipping rates are added by spreadsheet, you can edit these rates in the __shipping rates__ section, located in the admin's side menu, under inventory & shipping.

### To search

1. Fill in the **Postal Code**;
2. Select a carrier;
3. Click on **Search**.

### To edit

1. Fill in the **Postal Code**;
2. Select a carrier;
3. Click on **Search**;
4. Click on the editing icon, next to the x, under actions;
5. Change the desired values;
6. **Save** changes.

### To delete

1. Fill in the **Postal Code**;
2. Select a carrier;
3. Click on **Search**;
4. Click on the **x** button, under actions.

### To add

1. Click on **New shipping rate**.
2. Fill in the fields, which are the same as those present in the spreadsheet given to the carrier.
3. **Save** changes.
