---
title: 'How the additional shipping rate works'
id: tutorials_121
status: DRAFT
createdAt: 2017-04-27T22:18:41.679Z
updatedAt: 2021-08-25T13:18:16.442Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:43.430Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: understanding-the-additional-shipping-cost
locale: en
legacySlug: understanding-the-additional-freight
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

There are three possible ways to add a value to the shipping rate: additional cost per value, additional cost per weight and additional percentage. Each one is calculated and configured in different ways in your VTEX Admin. This article consists of:   

- What an additional fee per value is
- How to add an additional fee per value
- What an additional fee per weight is
- How to add an additional fee per weight
- What an additional shipping percentage fee is
- How to add an additional shipping percentage fee


## Additional (fee) per value

In this field, a percentage of the product's price must be set, which will then be added to the shipping value.

![adicionalfrete1 EN](//images.ctfassets.net/alneenqid6w5/OqyvMFeOU6OmsMGAMQ2km/ba3c318b0b158ccbccb511863dc7fc57/adicionalfrete1_EN.png)

In the example above, the product's price $ 80.00, and the percentage set in the __Additional value__ field is 10%. Therefore, $ 8.00 will be added to the shipping rate. The shipping rate plus this first additional fee results in a $ 18.00 total fee.

### How to add additional (fee) per value

The additional fee per value is configured trough the shipping spreadsheet when adding a shipping policy. The **PricePercent** column needs to be filled out in the spreadsheet. Find out more in our documentation on [creating a shipping spreadsheet](https://help.vtex.com/tutorial/como-montar-a-planilha-de-frete--tutorials_127?locale=en) 

## Additional (fee) per weight

The calculation of this field considers the product's weight and its difference when compared to the lower weight limit range set in the shipping spreadsheet.

__It looks as follows:__

![adicionalfrete2 EN](//images.ctfassets.net/alneenqid6w5/1FbPWgvxpuOQeImAS0S6uS/2a9740e4bff83d1a1e3c51d77729bede/adicionalfrete2_EN.png)

In the example above, the product's lower weight limit range is 100g. The value set in the **Additional value per weight** field is 0.1. Therefore, the amount to be added to the shipping rate total is $ 10.00. As the shipping calculation previously totaled $ 14.00, the final value is now $ 24.00.

### How to add an additional fee per weight

The additional fee per weight is configured trough the shipping spreadsheet when adding a shipping policy. The spreadsheet column that needs to be filled out is **PriceByExtraWeight**. Find out more details in our documentation on [creating a shipping spreadsheet](https://help.vtex.com/tutorial/como-montar-a-planilha-de-frete--tutorials_127?locale=en).


## Additional percentage

This additional fee is calculated on top of the final shipping rate, as opposed to the first kind of additional fee (per value), which is calculated on top of the product price.

The additional percentage fee is the last shipping calculation made, which means that it's added to the shipping price table value + the other additional fees above * the value set in the field.

![adicionalfrete3 EN](//images.ctfassets.net/alneenqid6w5/1K03RGdwsMsuQGe8Awqsua/8ffe9ec0b094914ed4d14be361542cad/adicionalfrete3_EN.png)

In this case, the value entered in the field __Additional value__ will be the percentage fee that is to be added to the final shipping rate calculation. For example, if shipping, with all its additional fees included, is $ 20.00, and the value set in the Additional Shipping fee field is 10, $ 2.00 would be added to those original $ 20.00, totaling $ 22.00 that the customer would pay for shipping. This is a simple way of having a profit margin on shipping.

### How to add additional percentage to the freight

 1. Access the **Inventory & shipping** module.  
 2. Access the **Settings** tab.  
 3. In **Additional shipping rate**, fill out the field **Include additional value of ___ % for all shipping rates**.  
 > For uneven percentages, separate digits using a period punctuation mark. The system doesn't read commas in this field. Example: 1.67%  
4. Click on **Save**.  
