---
title: '"How many times will your benefit be applied in your store" Saving Incorrectly on Promotion Form Interface'
id: 6vT0rYIry3cGx1nG5BPkmx
status: PUBLISHED
createdAt: 2022-06-28T19:23:30.074Z
updatedAt: 2022-11-25T22:12:21.814Z
publishedAt: 2022-11-25T22:12:21.814Z
firstPublishedAt: 2022-06-28T19:23:30.406Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: how-many-times-will-your-benefit-be-applied-in-your-store-saving-incorrectly-on-promotion-form-interface
kiStatus: Backlog
internalReference: 268304
---

## Summary



In the first box of the "Restrictions and Use Limitations" section of the Regular promotion form, when you save the first box with a value other than unlimited and all the other checkboxes are checked, like this:

 ![](https://vtexhelp.zendesk.com/attachments/token/XPIZEznRNirizqLBs0Bk3F2ns/?name=inline1741007227.png)

And you revisit the promotion after saving, the data "moves" to the box below:

 ![](https://vtexhelp.zendesk.com/attachments/token/QH2S7TuWMuQ2DRdr78J2YbZvS/?name=inline137244708.png)



## Simulation


As described above, just go to a regular promotion form and save a promotion filling only the first box of section #4.

After that, open the promotion form again.



## Workaround


There are 3 workarounds:


**1)** Just don't save the benefit again. The data is correctly saved in the backend in the first save action.

When you revisit the promotion, it "moves" down in the form and saving it again that will make the information to be saved incorrectly.


**2)** Populating the second box with substitute data for "unlimited" (in other words, a high number such as 9999999) works too:

 ![](https://vtexhelp.zendesk.com/attachments/token/7J5orWNE31sV3vzBFhy6pwWXs/?name=inline-1533850111.png) ![](https://vtexhelp.zendesk.com/attachments/token/vZMkrn7uS56cywlx1nDO3g7vz/?name=inline-468944681.png)​

3) Finally, the last workaround would be saving directly via API, in our SaveBenefit request documented in our help center: https://developers.vtex.com/reference/benefits#createorupdatecalculatorconfiguration

