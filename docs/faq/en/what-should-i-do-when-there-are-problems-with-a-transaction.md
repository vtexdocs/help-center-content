---
title: 'What should I do when there are problems with a transaction?'
id: 3d183R70xqAYoyyqwaAmGa
status: PUBLISHED
createdAt: 2017-05-09T13:38:39.142Z
updatedAt: 2019-12-31T14:25:26.812Z
publishedAt: 2019-12-31T14:25:26.812Z
firstPublishedAt: 2017-05-09T13:44:57.343Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_35
slug: what-should-i-do-when-there-are-problems-with-a-transaction
locale: en
legacySlug: what-should-i-do-when-there-are-problems-with-a-transaction
---

To resolve problems with a transaction quickly, you must first understand the *log* structure detailed in the transactions at VTEX Admin. See [here](/en/tutorial/how-to-view-the-orders-details/) how to view a transaction.

The *log* records all contacts between VTEX and the partner, whether gateway or antifraud. It goes from the bottom of the page to the top, where the most recent contacts appear.

Status changes and response messages are clearly marked, to make it easier to understand this timeline.

Sometimes there may be a breakdown in communications between VTEX and the partner. There are active security resources, with automatic retries, but there may also be human error, such as the partner updating the platform without updating the integration with VTEX.

In these cases logs are generated or the request is held in a loop. If erratic behavior is noted, the quickest solution is to check whether the request status is the same in both platforms. For instance, the Gateway may have updated the Status to "Settling", but subsequently reports that the Status is not correct, when in fact it is. Here is an example:

On February 8, VTEX received a notification from Gateway of a change of Status.
![2017-04-11-17 28 32-4820587- -VTEX-PCI-Gateway-300x65](//images.contentful.com/alneenqid6w5/7us92BzXFYwyQsUqWQa0sM/9c8e7dc490e5497bf8cfa16e0f7874ce/2017-04-11-17_28_32-4820587-_-VTEX-PCI-Gateway-300x65.png) 

On April 3, the gateway returns an error in the Status.
![2017-04-11-17 26 40-4820587- -VTEX-PCI-Gateway-300x87](//images.contentful.com/alneenqid6w5/35WTOXDAC4WgS0Ki866SSS/6d7f6ed699ef653d79d709c97320d10c/2017-04-11-17_26_40-4820587-_-VTEX-PCI-Gateway-300x87.png)

Another example would be if the Gateway (partner) reports that it does not have full details of a credit card to complete a purchase. However, the transaction details at the top of the page show that the information exists - the order could not have been completed without this information. The solution here would be the same, to contact your Gateway.

The __TID__ is the number that should be used to identify a transaction in the Gateway.

The fact that there is a TID also means that the transaction has been initiated, because this information is generated when a connection is established with the Gateway.
