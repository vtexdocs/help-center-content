---
title: Configuring Greenlist
id: 2NryhZ5B0cikuwQU2GYI6a
status: DRAFT
createdAt: 2017-09-26T20:18:34.384Z
updatedAt: 2021-02-18T22:23:02.404Z
publishedAt: 
firstPublishedAt: 2019-01-25T13:43:43.063Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: configuring-greenlist
legacySlug: configuring-greenlist
subcategory: 6dLwF22Zwcy4iec2QSMeyG
---

Greenlist is a free app that can be installed in your VTEX store from our extensions store](/pt/tutorial/instalando-extensoes-na-extension-store).

1. [About Greenlist](#o-que-e-a-greenlist).
2. [Signature of order](#assinatura-do-pedido).
3. [Recurrence of the signature](#recorrencia-da-assinatura).
4. [Maximum order value](#valor-maximo-do-pedido).
5. [Security period for chargeback](#prazo-de-seguranca-para-chargeback).
6. [Activating Greenlist](#ativando-a-greenlist).

## About Greenlist

If your store uses antifraud, each time a customer closes an order the system:
1. Checks whether the customer has credit;
2. If so, consults the antifraud to find out if the customer is trustworthy;
3. If the antifraud approves the customer, the order goes ahead.

Whether or not the antifraud approves, once the service has been consulted the store owner is charged. Antifraud is paid for at a percentage of the value of the order. Thus, __for each order that is checked by antifraud, the store owner must pay a fee based on the total order value__.

__A Greenlist is a list of customers previously approved by the store owner according to certain criteria.__ Once these customers have made a certain number of purchases on your site, always giving the same details (such as email address and credit card number) they are marked as trustworthy. Then the next time they make a purchase on your site, their orders do not go through the antifraud, and your store saves the fee it would have to pay for this service.

<div class="alert alert-warning">
The more signature data you ask for, the stricter will be your rules, and the fewer customers will be added to the Greenlist.
</div>

## Configuring the Greenlist

### Order signature

To mark a customer as trustworthy, the store owner uses certain criteria. These criteria are __purchase details making up the signature of an order__:

![Greenlist - signature](//images.contentful.com/alneenqid6w5/3CvVVFRIJ22wS6o8sq6ok6/45cdf4a8259437d36aa74a40a8a04715/Greenlist_-_assinatura.png)

Let’s say you select three options from the above screen: __Email address__, __Delivery address__ and __Credit card number__. This means that for new orders from this customer not to have to pass through the antifraud, he will have to use the same email address, delivery address and credit card number for new purchases. 

If the customer makes the minimum number of purchases using the same details, he becomes trustworthy, but if at any time he makes a purchase with, for example, a different delivery address, his order will pass through the antifraud normally.

### Recurrence of the signature

The recurrence of a signature defines the number of orders a customer must make with the same signature details to be considered trustworthy and so be added to the Greenlist.

This number must be defined by the store owner, and can vary from __1 to 10__.

![Greenlist - recurrence](//images.contentful.com/alneenqid6w5/2TFJUnw1Cw8I0KcqCcAsmS/6aaec62228ec8ff5a38093e743a4229b/Greenlist_-_recorrencia.png)

If you set recurrence at 6, for example, every customer of your store who makes six purchases using the same details for the signature will not have to pass through antifraud on subsequent purchases.

### Maximum order value

You can set a maximum value for the Greenlist to operate. This is because even if a customer has been marked as trustworthy, you may prefer that – for very large amounts, where the risk of loss is greater – the antifraud should operate irrespective of the customer’s purchase record.

![Greenlist – maximum value](//images.contentful.com/alneenqid6w5/1CG6Wm74qIu4Qam2WekkE4/02f3e165b7970651406d667ae66e4589/Greenlist_-_valor_maximo.png)

### Security period for Chargeback

Sometimes, after an order has been placed and the antifraud has approved the purchase, a chargeback may occur several days later. Or it may happen that – even if the order has been initially approved - the antifraud may determine that there is a fraud involved.

In this case, it is good to define a margin of security for the Greenlist analysis. If, for example, you select a security period of 30 days, you are saying that every order approved by the antifraud will be assessed for the Greenlist only after 30 days.

![Greenlist - chargeback](//images.contentful.com/alneenqid6w5/314Ig5HLCU2uy0kyYEu4gC/105ed241ac49923035a7b4d441d698e0/Greenlist_-_chargeback.png)

### Activating a Greenlist

When you have finished defining the rules for your Greenlist, proceed as follows:
- Check that the __Status__ button at the top of the page is active. This is necessary for the Greenlist to function; 
- Check the settings of your rules in the __Summary of Rules__ box;
- If everything is OK, click on __Save Rule__. 

The Greenlist will then be operative for new orders.

### Remove a customer from the Greenlist

If you find that an order from a customer on the Greenlist (or any other customer) is fraudulent, you can indicate this manually. Just

1. Access the __PCI Gateway__ module in your store admin; 
2. In the list of transactions, click on the one you want to mark as fraudulent;
3. Click on __Mark the payment as fraudulent__.

![Mark as fraudulent](//images.contentful.com/alneenqid6w5/3EiAcGulosCgQq4qCIGqQE/d0be6c70e7129f63b189c56bdb79012b/fraud.png)

Once this is done, the customer that placed the order is removed from the Greenlist.
