---
title: 'Conditions Builder - Usage examples'
id: 3xrod1IDw4ucywYOg4cm6E
status: ARCHIVED
createdAt: 2018-06-25T15:13:10.190Z
updatedAt: 2020-03-13T21:24:58.470Z
publishedAt: 
firstPublishedAt: 2018-06-25T18:37:29.930Z
contentType: tutorial
productTeam: VTEX IO
author: 7kumplNTMIsWYGeeegCqO8
slugEN: conditions-builder-usage-examples
locale: en
legacySlug: conditions-builder-usage-examples
subcategoryId: 3e2VLdLao8GGk4sAmMmwmi
---


The purpose of this article is to show some examples of conditions that can be created using the *Conditions Builder* app.

To understand __how__ to use the app in more detail, see the article [How to Use Conditions Builder](http://help.vtex.com/en/tutorial/how-to-use-conditions-builder-app).  
To understand __what__ to create the conditions for, see the article [Create Conditional Prices](http://help.vtex.com/en/tutorial/how-to-create-conditional-prices).  

## Conditions by UTM

UTM (Marketing tag) is an information that relates to the origin of the customer's traffic. Therefore, the app has a block that checks for this type of information. 

![utm_source_english](//images.ctfassets.net/alneenqid6w5/1eC4fEARZG84MYiSmekSIm/5c784e46e4ab63487f183f7cd2060ea9/utm_source_english.png)

>⚠️ **Note: **
> It is possible that your store employs customizations and thereby the UTM information contained in the URL is not being passed on to our system. If you use JavaScript customization, read the article [Por que as utms não estão sendo aplicadas ao carrinho](https://help.vtex.com/pt/faq/por-que-as-utms-nao-estao-sendo-aplicadas-ao-carrinho)

### utm_source

__utm_source__ informs the __origin__ of your customer until your store. In the case of images, the block checks if the origin was *Facebook*

### utm_campaign

__utm_campaign__ informs in __which campaign__ your customer specifically clicked. In case of images, the block check if the campaign was that of *Valentine’s Day*.

### utm_medium

__utm_medium__ informs which __advertising channel__ , that can be E-mail or a Banner on a site, reached your customer. In the case of images, the block checks if the channel was *email*.  

![utmenglish](//images.ctfassets.net/alneenqid6w5/4lFJ73jp9Cysoes6igUKO2/6e099fe8ff1600fc165ef4c1b008bdaa/utmenglish.png)
  
For each one of these blocks, you can check to see if: 

1. the value __is exactly__ what you wanted -> utm_source is (Facebook)
2. the value __is not exactly__ what you wanted -> utm_source is not (Facebook)
3. the value __contains__ a word that you want -> utm_source contains (face)
4. the value __does not contain__ a word that you want -> utm_source does not contain (face)  


### Example

Let's assume you wanted a price for a particular product to be special if your customer clicked on the *banner * for the Mother’s Day he/she had received by email.
You immediately have to create a condition that checks whether the __utm_medium__ is `email` and if the __utm_campaign__ is `Mother’s Day`.

## Conditions for the shopping cart

There are 3 blocks that are related to the items contained in the user's shopping cart:

### Total Quantity

This block analyzes the quantity of items in the cart as a whole. 

- __at least__ -> checks whether the user’s shopping cart has __3 or more items__.
- __at most__ -> checks whether the user’s shopping cart has __3 or less items__.

### Quantity of a specific SKU
This block analyzes the quantity of a specific item to which it will be linked in [*Conditional Price*](http://help.vtex.com/en/tutorial/how-to-create-conditional-prices)

- __at least__ -> checks whether the user’s shopping cart has __3 or more of that item__.
- __at most__ -> checks whether the user’s shopping cart has __3 or less of that item__.
- __exactly__ -> checks whether the user’s shopping cart has __exactly 3__ of that __specific item__. 


### Total Value
This block analyzes the total value which exists in the cart.

- __at least__ -> checks whether the __total value__ of the items in the cart is worth __100 reais or more__.
- __at most__ -> checks whether the __total value__ of the items in the cart is worth __100 reais or less__.

### Example

Let’s assume that your wanted to put a cheaper price on a shampoo if your customer would buy __exactly 3 units__, but apart from this would also buy __at least 150 reais__ worth of goods.
The condition to be created will be: 

![Exemplo2](//images.ctfassets.net/alneenqid6w5/11Z9LujUl66G80yGQyKI6S/fa33819d9e0ef37113466e3612d370d5/exemplo2.png)  

*quantity of this item in the cart is **exactly** 3 
**and** 
total value of the cart is **at least** $150*


