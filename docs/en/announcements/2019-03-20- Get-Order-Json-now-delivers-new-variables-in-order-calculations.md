---
title: 'Get Order JSON now delivers new variables in order calculations'
id: 58rQC0b6B0lw0eeKbNxJG6
status: PUBLISHED
createdAt: 2019-03-20T18:06:17.876Z
updatedAt: 2019-12-31T15:13:28.374Z
publishedAt: 2019-12-31T15:13:28.374Z
contentType: updates
productTeam: Post-purchase
author: 5V92cmF9jG8KG600EwUgEg
slugEN:  Get-Order-Json-now-delivers-new-variables-in-order-calculations
locale: en
legacySlug:  Get-Order-Json-now-delivers-new-variables-in-order-calculations
announcementImageID: ''
announcementSynopsisEN: 'Now available detailed information about the calculation of shipping of the order'
---

>⚠️ Due to technical reasons, the launch of this feature was postponed until further notice.

Starting  April 1, 2019, the request JSON will return a new object called `alternativeTotals`. It will appear in the totalizers that are inside the array of `totals`, for queries made by the APIs Get Order.

For example:
In an order where the shipping value calculated is 9.90 and is reduced by a free delivery sale, the JSON responds with the following data

```
"totals": [
       {
           "id": "Items",
           "name": "Total Items",
           "value": 23970,
       },
       {
           "id": "Discounts",
           "name": "Total Discounts",
           "value": 0,
       },
       {
           "id": "Shipping",
           "name": "Total Shipping",
           "value": 0,

              }
           ]


```
With the new field, the return will become:
```

"totals": [
       {
           "id": "Items",
           "name": "Total Items",
           "value": 23970,
           "alternativeTotals": null
       },
       {
           "id": "Discounts",
           "name": "Total Discounts",
           "value": 0,
           "alternativeTotals": null
       },
       {
           "id": "Shipping",
           "name": "Total Shipping",
           "value": 0,
           "alternativeTotals": [
               {
                   "id": "AlternativeShippingTotal",
                   "name": "Alternative Shipping Total",
                   "value": 990,
                   "alternativeTotals": null
               },
               {
                   "id": "AlternativeShippingDiscount",
                   "name": "Alternative Shipping Discount",
                   "value": -990,
                   "alternativeTotals": null
               }
           ]
```
Note that in the shipping value, we have the value 0. In alternativeTotals, we have the data used by the system to arrive at the shipping calculation of 9.90. Additionally, we had a discount of 9.90, resulting in the final shipping value of 0.

## Main Advantages 
This new field allows the use of the data in the module interface, showing the admin user the calculation made for shipping in a clear and intuitive way.

Another advantage is the possibility of having the calculation data made by the system available for consumption of your BI system.

## What you need to do

It is critical to review the integrations that use the APIs Get Order, such as ERP, for example. Those who are not prepared to receive the new response must be adjusted before March 29, 2019.

Warning: for now, the change will occur only in the API. The Orders Management UI will not undergo any modification.
