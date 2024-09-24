---
title: 'Adding holidays'
id: 3XQS5nrVrT1obZ0K6pqnOt
status: ARCHIVED
createdAt: 2019-10-23T15:06:13.415Z
updatedAt: 2022-03-08T18:47:55.510Z
publishedAt: 
firstPublishedAt: 2019-10-23T15:21:27.021Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: adding-holidays
locale: en
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
---

The holidays feature allows you to set the days that should not be taken into account when calculating the estimated shipping date in the Inventory & Shipping module.

Let's suppose for example, that the normal shipping time for orders made Mondays is three days. If you've set Tuesday as a holiday, it won't be taken into account for the 3-day calculation. Therefore, instead of seeing Thursday as the delivery date, your client will see that delivery will be made on Friday (4 days after the order was placed).

##  Configuring the holidays feature

To configure holidays, follow the step-by-step below:

1. In the __Orders__ section of the Admin's side menu, click on __Inventory & shipping__.
2. From the subsequent options, choose __Holidays__.
3. The __Holiday name__ box should be filled in with the name you want to give that holiday.
4. Fill in the holiday's start date (in __Date__) as well as its __end date__. 
5. Click on __Salvar__.

>⚠️ Holidays will only be considered for carriers having the "Carrier **does not deliver** on weekends" option enabled.

To enable a carrier's holiday feature, follow these steps:

1. In the admin's side menu, click on __Orders__, followed by __Inventory & shipping__.
2. From the options that expand below, click on __Shipping Strategy__.
3. Select the __Carrier__ you want to edit.
4. In the following screen, look for the __Weekends and holidays__ subsection (under _Freight options_).
5. Enable the __Carrier does not deliver on weekends__ options (either by clicking on the word "delivery" in "carrier delivery on weekends, thereby becoming "carrier does  not deliver on weekends", or by leaving it as it is in case the option already appears).
6. Click on __Save__.

>ℹ️ You can set future holidays in advance, creating a Christmas holiday for the next few years for example.

## How the estimated shipping date is calculated

Holidays will be taken into account in the `shippingEstimateDate` variable pertaining to the set period. This variable is calculated __only after payment for the order is confirmed__. After payment confirmation, the estimated shipping date considers the holiday and can be informed to your client. 
