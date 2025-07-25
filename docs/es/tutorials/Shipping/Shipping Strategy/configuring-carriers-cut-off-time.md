---
title: "Configuring carriers' cut-off time"
id: 3QVhjcZ74smYsmEEgAGsui
status: ARCHIVED
createdAt: 2018-02-07T21:25:14.224Z
updatedAt: 2021-05-26T13:45:55.753Z
publishedAt: 
firstPublishedAt: 2018-02-07T23:14:17.882Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: configuring-carriers-cut-off-time
locale: en
legacySlug: setting-the-carriers-cut-off-time
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

>⚠️ Warning: This documentation is being updated to reflect the concept change from Dashboards to [Shipping strategy](https://help.vtex.com/en/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl).

The carriers, which are called Shipping Policies in the Admin, are the companies responsible for distributing the products sold through an e-commerce platform. It is common for a store to have multiple carriers associated with it. This is because the carriers’ operation and fleet profile **vary according to the route, shipping time, and type of product** that it will deliver.

It is possible to manipulate the settings of the carriers registered in your store, so that your logistics route is in accordance with your business’ reality. In order to customize your logistics for different delivery scenarios, you can configure:  

- Carriers' **cutoff times**.  
- Carriers' **business hours**.  

> *By default, all carriers are configured for every day from 12:00 a.m. to 11:59 p.m. (according to local time).*

> *It is not possible to select the options `Set carrier’s cutoff times and days` and `Set carrier’s working days and hours` at the same time. Therefore, you must use either cutoff times or business hours.*
 
 
## Carrier’s Cutoff Times
A carrier's cutoff time information is very important for calculating an order's delivery date. The estimated delivery date is always calculated after payment is approved.

  > *The default cutoff time is 12:00 a.m.*  

**Example 1**

1. A carrier’s delivery time is **2 business days**.  
2. The cutoff time defined for Monday is **3 p.m.**.  
3. Payment for an order that will be delivered by this carrier is **approved at 11 a.m.** on a Monday.  
4. For the calculation of the order delivery date, Monday will be considered as **day 0**. Therefore, the order will be delivered on Wednesday.  


**Example 2**

1. A carrier’s delivery time is **2 business days**.  
2. The cutoff time defined for Monday is **3 p.m.**  
3. Payment for an order that will be delivered by this carrier is **approved at 6 p.m.** on a Monday.  
4. For the calculation of the order delivery date, Tuesday will be considered as **day 0**, as the payment was approved after the cutoff time. Therefore, the order will be delivered on Thursday.  


### Configuring the cutoff time

 1. Access the **Inventory & shipping** module.  
 2. Click on the **Shipping strategy** tab.  
 3. Click on the pencil icon next to the **Shipping policy** you want to edit.  
 4. In Time setup, click on `Cutoff times`.  
 5. Click on the desired days and fill in the cutoff times.  

 > *Do not fill in the cutoff time fields by entering values. To avoid registration errors, use the boxes according to the predefined options*.  

 6. Click on **Save changes**.


## Carriers' business hours

The business hours define the availability of a carrier for your store’s logistics operation. To configure a carrier’s business hours, follow the step by step below:


### Configuring a carrier's business hours

 1. Access the **Inventory & shipping** module.  
 2. Click on the **Shipping strategy** tab.  
 3. Click on the pencil icon next to the **Shipping policy** you want to edit.  
 4. In Time setup, click on `Business hours`.  
 5. Set the days and times in which the carrier will work.  

 > *By activating the option `Accept purchases outside working hours`, you allow the carrier to accept sales outside the configured business hours, so it will be considered for any shipping simulation*.   

 6. Click on **Save changes**.  
