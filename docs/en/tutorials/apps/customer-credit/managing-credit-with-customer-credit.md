---
title: 'Credit management through Customer Credit'
id: 5lihi3WBsV5mSIDqNvnoK0
status: CHANGED
createdAt: 2020-05-29T12:51:08.993Z
updatedAt: 2020-11-27T19:40:26.828Z
publishedAt: 2020-06-01T23:34:10.710Z
firstPublishedAt: 2020-05-29T13:00:01.098Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: managing-credit-with-customer-credit
legacySlug: managing-credit-with-customer-credit
locale: en
subcategoryId: 7EWKfPIGfmI0G8iMYK8Aiy
---

Granting credit to third parties is a strategy used in several business models. It is no different in the B2B (Business to Business) model, in which agreements can involve up to four companies.

Before we look more deeply at how to apply this strategy, let's define “credit”. Every company that accepts installment payments needs to establish a maximum amount per month to cover these small “debts”. This amount is the credit limit.

At VTEX, stores count on [Customer Credit](/en/tutorial/customer-credit-visao-geral--1uIqTjWxIIIEW0COMg4uE0) to assist them in the management of this topic. It is an app that allows users to grant credit to customers - whether they are individuals or partner stores -, and they can use this credit as a payment method.

In this article, we’ll suggest an implementation flow for Customer Credit in B2B strategies.

## Selecting your customers

First of all, you must download Customer Credit at [VTEX App Store](https://apps.vtex.com/) and [configure it](/en/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/21ok0GBwmcIeaY2IukYMOg) in your store.

The next step is to select the customers to whom you want to offer credit.

There is no limit to the number of accounts that can be added to Customer Credit. Some of our customers work with thousands of Customer Credit accounts. In a B2B context, this is a relevant differential, since it allows VTEX’s clients to do business with companies of any size.

Therefore, you can use the app in several scenarios. For example, a distributor can supply and manage a base of one thousand accounts simultaneously, making it possible to manage and grant credit to each customer.


### Ebitda


The process of selecting customers, however, must be careful. After all, it is essential that the companies chosen are able to bear the costs of the invoices.

One way to make this analysis is by checking the financial health of each potential customer through financial indicators, such as the __Ebitda__ (Earnings Before Interest, Taxes, Depreciation and Amortization).

In B2B scenarios, this indicator calculates a company's net sales disregarding factors external to the business.

When you don't have access to the company's Ebitda, other factors can be consulted that can shed light on a company's financial health, such as:

The balance sheet, including shareholder equity.
- Current assets and liabilities
- The current ratio
- The market-to-book multiple
- The company's financial position (i.e., its book value)
 
You may also consult with the relevant state/federal/government bodies that regulate and oversee how companies operate, and get relevant information on the company's tax compliance and other such issues.

This process can be performed either by a credit department or by software companies that perform this analysis automatically from different sources.


## Adding accounts through the app

Now that your customers have been selected, it is possible to [create their Customer Credit accounts](/en/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).

Currently, stores can carry out this operation in three different ways:
- Base registration through the [Customer Credit API](https://developers.vtex.com/reference/customer-credit-api-overview).
- Individual registration through VTEX’s administrative dashboard.
- Bulk registration through spreadsheet import, with data from several accounts, also via our administrative dashboard.

Store owners must use the method they find most convenient for their business. However, the number of accounts can be an important factor when choosing the registration method.

### Small and medium databases

For a small number of registrations, the customer can create accounts one by one through the Admin. It's simple: just access the Customer Credit Accounts section, click on the New button and fill out the form with:
- Document Type
- Document number
- Email
- Credit limit

![CustomerCredit1-EN.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/apps/customer-credit/managing-credit-with-customer-credit_1.png)

If the database has a large number of accounts, it is best to import a spreadsheet in CSV format. You can download a template in the Accounts section and fill it with the required information. To do this, click on the Import button.

![CustomerCredit2-EN.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/apps/customer-credit/managing-credit-with-customer-credit_2.png)

### Large databases

If a store works with external credit management in its ERP system, we recommend that the operation is performed through the [Customer Credit API](https://developers.vtex.com/reference/account-1#openanaccount). In this case, use the Open an Account endpoint.

Another differential of the API is that the operation adds the account and at the same time grants a limit to it.

On our [Introduction to Customer Credit track](/en/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU), you can check out a tutorial on how to add an account through each of these methods.

The next step after the initial configuration is [managing the accounts](/en/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/4eknoeqaj6EGC20amsm6Gc), with the aim of ensuring a healthy credit flow.
