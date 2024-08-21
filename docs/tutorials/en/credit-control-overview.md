---
title: 'Credit Control - Overview'
id: 6v9AaldPvUmUCcyEgwKwSC
status: DRAFT
createdAt: 2017-12-06T20:30:52.367Z
updatedAt: 2020-08-10T12:46:12.258Z
publishedAt: 
firstPublishedAt: 2017-12-06T20:33:54.235Z
contentType: tutorial
productTeam: Financial
author: 6xBnaVsQ7K60kemi2U2Q6w
slug: credit-control-overview
locale: en
legacySlug: credit-control-overview
subcategory: 7EWKfPIGfmI0G8iMYK8Aiy
---

>⚠️ **WARNING:** Credit Control is unavailable as of ** December 2018**. Now, to offer credit as a payment method right on your store's checkout, you need to use [Customer Credit](https://help.vtex.com/en/tutorial/customer-credit-overview).</br>
> Learn more about the Customer Credit's setup process on this [article](http://help.vtex.com/en/tracks/customer-credit-getting-started).


## What it is

Credit Control is the VTEX module that allows merchants to enable payment on Smartcheckout™ with store credit, as well as manage invoices and credit limits on the customers' checking accounts.

## Why it was created

Demand for credit control has grown in e-commerce, and implement it several VTEX customers have been integrating their stores with external systems.

Although this is a valid choice, it reduces the efficiency of your operation as it becomes necessary to manage one extra service.

That's why we created Credit Control - so that it's done within the VTEX system, without the need to use external tools.

## How it works

![Credit Control basic flow](https://images.contentful.com/alneenqid6w5/35jUk6EVksKUQi8EaU6caO/2f8f3ddb5ead2d2c9379fc340fb070f9/credit-control-flow_en.gif)
*Basic flow of how Credit Control works on VTEX stores.*

Because it was developed in VTEX, Credit Control is fully integrated with the existing SmartCheckout system through its connector - which means that your customers' shopping experience remains the same. Credit Control's admin can be accessed through the main menu of the VTEX modules panel.

You can choose the users who will receive credit, set the credit limit for each of them, and individually manage each invoice.

This framework adapts to different business rules. Your store may, for example, grant credit to the end customer or to a set of resellers of your products.

The Credit Control module can be used either via its web interface in the VTEX Admin or the API. For the latter, check the documentation at the [VTEX Developer Docs](/en/developer-docs).

## Concepts

### Checking Account

A customer who makes a purchase with credit must have an account with Credit Control. This account is made up of the __credit limit__, a __description__, a value of __tolerance__ and some identifiers.

You can manage accounts by importing, exporting, and bulk editing using Import and Export features with .csv files.

### Credit limit

For each customer or representative to whom your store provides credit, you must set a credit limit. This limit indicates the maximum amount of credit that that person can get.

If she tries to make a purchase using a value above the limit the user will see an error message in Checkout and the purchase will not be made.

You can set a value of __tolerance__, which is a percentage that the customer is allowed to go beyond their credit limit without blocking the purchase.

### Invoice

An invoice is the instrument issued by your store and intended for your customers or representatives who use credit. It consists of a __value__, __expire date__, __payment link__ and some identifiers.

As with checking accounts you can bulk import, export, and edit title data using the Import and Export features with .csv files.


## Interested?

Although Credit Control is already being used by some VTEX clients, it is still in Beta. We have many new features planned, and we're always open to hearing about the needs of your business to serve you better.

If you would like to give credit to your store customers or have customers who would like to use the module please contact [VTEX Support](https://support.vtex.com/hc/en-us/requests). We'll help you identify if this module already meets your needs or if there are improvements to be done.

We're working so that in the near future the tool reaches a level of maturity that allows us to provide tutorials that give you total autonomy in the usage, sparing the need for contacting Support.
