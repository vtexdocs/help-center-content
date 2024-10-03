---
title: 'Changes in the orderPlaced provide more precision to Google Analytics data'
id: 4u1VqmUtriycuukqqcSKaA
status: PUBLISHED
createdAt: 2018-09-04T20:11:58.119Z
updatedAt: 2019-12-31T15:12:58.712Z
publishedAt: 2019-12-31T15:12:58.712Z
contentType: updates
productTeam: Channels
author: authors_24
slugEN: 2018-09-04-changes-in-the-orderplaced-provide-more-precision-to-google-analytics-data
locale: en
legacySlug: changes-in-the-orderplaced-provide-more-precision-to-google-analytics-data
announcementImageID: ''
announcementSynopsisEN: ' Now, orders with products from more than one seller generate a single event on Google Analytics.'
---

The order confirmation page (also known as orderPlaced) received a series of improvements in its data layer. The update gets rid of existing redundancies in event creation on Google Analytics.


## What has changed
The orderPlaced used to create separate events for orders which had products from two or more sellers. It means that a single order could trigger several events, unnecessary multiplying the amount of data and making them less trustable.

We resolved that with an update of the __fourth version of orderPlaced__. Now, it's the orderGroup parameter that triggers the event creation on Google Analytics

`transactionId`: Now it's the orderGroup.

`transactionTotal`: The value is the sum of all transactions from all orders in the orderGroup.

`transactionShipping`: The value is the sum of all shipping fees from the orders in the orderGroup.

`transactionTax`: The value is the sum of all taxes from the orders in the orderGroup.

`transactionPaymentType`: Returns a list of objects (which are the payment methods of all orders in the orderGroup) in the format below:
```json
{ 
       group: p.group,    
       paymentSystemName: p.paymentSystemName,    
       installments: p.installments,    
       value: p.value 
}
```

`transactionShippingMethod`: Returns a list of objects (which are the shipping methods of all orders in the orderGroup) in the format below:
```json
{    
        itemId: l.itemId,    
        selectedSla: l.selectedSla,    
}
```

`transactionProducts`: Returns the products of all orders in the orderGroup.


## Main advantages
The updates are mainly intended for those scenarios where a single order has products from different sellers. Now they generate more precise data in the Google Analytics, which gives a better vision of your clients' shopping behavior.


## What you need to do
This update __doesn't require__ any actions. If your store already uses the __version 4 of the orderPlaced__, which is fully compatible with the [Omnichannel](/en/announcement/shift-your-business-with-vtexs-omnichannel-experience) features, the new logic is already on.


>⚠️ It's an update on the **version 4 of orderPlaced only**, and it doesn't affect the behavior of previous versions.
