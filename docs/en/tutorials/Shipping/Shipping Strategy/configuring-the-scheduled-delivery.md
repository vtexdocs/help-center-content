---
title: 'How to configure the scheduled delivery'
id: tutorials_111
status: ARCHIVED
createdAt: 2017-04-27T22:19:16.609Z
updatedAt: 2021-05-24T17:38:53.796Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:42.972Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: configuring-the-scheduled-delivery
locale: en
legacySlug: configuring-the-scheduled-delivery
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

>ℹ️ Warning: This documentation is being updated to reflect the concept change from Dashboards to [shipping strategy](https://help.vtex.com/en/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl).


The scheduled delivery is a feature that allows you to customize delivery times and to set specific deadlines and prices, as well as enables the customers to choose the period when they wish to receive your order. 

Eg.: An office supplies store works with delivery shifts and different prices on weekends, and would like to give the customers the chance to choose the day of receivement and in which turn. With the scheduled delivery, this demand can be fulfilled, and here's how:

## How to set it up

On **Inventory & shipping**, access **Dashboard** and select the desired **Carrier** to scheduled delivery. 

Then on **Shipping method**, click on **Scheduled Delivery**.


![entrega-agendada en](https://images.ctfassets.net/alneenqid6w5/5o3hYPSCha8IuYs2QOIgIc/09756c4259fc66808dafd6ce07e39eb8/entrega-agendada_en.png)
For a better understandment about this sectin fields fulfillments, check out our document on how to [register a carrier](http://help.vtex.com/en/tutorial/registering-a-carrier).

In this area, we have the following data:

- **Max. range of delivery:** This field sets out a delivery interval added to the regular delivery period (Stock + Dock + Freight Value).
- **Default Delivery value:** This field sets out a default value for delivery.
- **Delivery time:** This field defines which days of delivery can be chosen, in which periods, and what value will be charged "extra" on these days. To add more options, simply click on the __Include Time__ button.

## Example

Using the same situation of the store mentioned above, this would be the carrier configuration suitable to their demand:


![entrega-agendada-exemplo en](https://images.ctfassets.net/alneenqid6w5/1VBGSFNpZ6KcM6wU0y62k0/956e0301532b9d2d615572e215d47e81/entrega-agendada-exemplo_en.png)

Assuming that Inventory time is 2 days, Dock time is 1 day, and Freight Timetable previews 5 days, the first day available for delivery will be **8** days after the date the request was made and, since the maximum delivery time is 10 days, the last day available for customer's choice will be the **18th** day after the date the request was made.

So, if today is May 3 and the customer chooses this kind of delivery, the interval to be displayed will be from May 11 to May 21. And, if the customer chooses to receive the product on a Saturday or a Sunday, another R$ 5.00 will also be added to freight.
