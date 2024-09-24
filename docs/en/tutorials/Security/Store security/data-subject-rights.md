---
title: 'Data subject rights'
id: 6imchxTx09icupKMbzHVIM
status: PUBLISHED
createdAt: 2023-04-26T18:56:45.938Z
updatedAt: 2023-06-22T21:47:26.569Z
publishedAt: 2023-06-22T21:47:26.569Z
firstPublishedAt: 2023-04-26T19:50:54.254Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: data-subject-rights
locale: en
legacySlug: data-subject-rights
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

When purchasing online, customers must provide their personal information for payment, delivery, invoice issuing, and joining promotions, among others. In this context, every person has the right to know and decide how their personal data is used and for what purposes.

As a merchant, it's important to be aware of personal data subject rights and assist your customers in exercising those rights.

This article explains how to comply with the following data subject rights:
- [Access and portability](#access-and-portability)
- [Rectification](#rectification)
- [Consent](#consent)
- [Erasure](#erasure)

>❗ VTEX is not responsible for personal data stored by systems integrated with your store, such as ERPs, third-party marketplaces, third-party sellers, third-party applications available in the [VTEX App Store](https://help.vtex.com/en/tutorial/visao-geral-apps--4xfsHXyAQTjbZNuiKl6Y0e) or customizations implemented by your development team. You must map this data and ensure the enforceability of the rights of personal data subjects in these instances, in addition to the processes described below.

## Access and portability

The right of access allows customers to get a copy of their personal data stored by your store. The right of portability allows customers to request the transfer of their personal data to another data controller.

If one of your customers requests it, you can use the VTEX Admin to access and export this data. You can then share this information with the customer or transfer it to another data controller as you wish.

### Accessing and exporting customer data

When answering an access or portability request, it's important to ensure that you are accessing and exporting all the person-related data stored by your store. There are different modules where you can find this information, and you should check all the pertinent ones depending on your store data architecture. See below for details on how to consult each module.

#### Master Data v1

You can use the [Master Data API v1](https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search) or VTEX Admin to access and export customer data stored in the [Master Data v1](https://help.vtex.com/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw).

If you want to use the API, your developers should use the [Master Data v1 search endpoint](https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search), searching the customer data (**CL**) and address (**AD**) entities, and any other entity you have configured to get personal information from your customers. Filter the search by customer email.

To export data from the Master Data v1 through the Admin dashboard, follow these steps:

1. In the VTEX Admin, go to **Store Settings** > **Storefront** > **Master Data.**
2. Click the **Applications** tab.
3. Click the view icon (on the right) of the desired data entity.
![Master Data view button](//images.ctfassets.net/alneenqid6w5/oYSaPi7x9Vlr4EAiufbew/601df52aab81d94c5ad3afc75103fde3/visualizar_bot__o_master_data_EN.png)
4. Use the [Master Data v1 filter](https://help.vtex.com/tutorial/filtering-data-on-master-data--tutorials_778#how-to-use-filters) to filter only the data for the desired user. Use the `email` or `user ID` as the filter field.
5. Click `Export XLS`.
6. Select the `Select all fields` option.
7. If you want, change the email address to which you want to send the report.
8. Click `Export`.

Repeat this step for customer data (**CL**) and address (**AD**) entities and any other entity you have configured to get personal information from your customers.

>ℹ️ Learn more about [filtering data](https://help.vtex.com/tutorial/filtering-data-on-master-data--tutorials_778#how-to-use-filters) and [exporting data](https://help.vtex.com/en/tutorial/exporting-data--tutorials_1125) in the Master Data v1 interface.

#### Master Data v2

To fetch customer data stored in Master Data v2, your developers must use the [Master Data Search API v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/search), searching the customer data and address entities, and any other entity you have configured to get personal information from your customers. Filter the search by customer email.

#### Order Management

The VTEX Order Management module stores the order history of your customers, which means that it may also hold personal information. To access and export a customer order history, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders** or type **All Orders** in the search bar at the top of the page. 
2. Enter the desired customer email address in the search field.
3. Press `Enter`.
4. Click the `Export` button in the upper right corner of the screen.

You will receive an order history report by email.

## Rectification

The right of rectification allows customers to request changes to their personal information if it is inaccurate or incomplete, for example.

Your customers can exercise their right to consent and rectify personal data using your store **My Account** page. On this page, customers can do the following:

- View their order history.
- View and edit their profile information.
- View and edit their address information.
- View and edit their saved payment methods.

>ℹ️ Learn more about the [My Account page](https://help.vtex.com/en/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh).

## Consent

The consent right allows your customers to state their agreement, often indicated by an opt-in checkbox, to how their data is processed and for what purposes.

Consent is not required in all situations. Explicit consent is not necessary if you use minimal information to complete an order (name, address, credit card) or issue an invoice (ID, items purchased). However, it is required for certain options that customers have in your store. See below for more details on these options and how to configure them, if necessary.

### Newsletter subscription

When completing a purchase at VTEX Checkout, your customers can choose to subscribe to your store newsletter. If they wish to unsubscribe later, they can manage their subscription in the [My Account](https://help.vtex.com/en/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh) section of your store, under the **Profile** tab. This is a native option for VTEX stores.

In case you need to [adjust the subscription status of a particular customer](https://developers.vtex.com/docs/guides/newsletter-inclusion-master-data-v1), your development team can do it directly using the Master Data v1 API.

>ℹ️ Learn more about the My Account page and how your developers can[directly edit a customer newsletter subscription](https://developers.vtex.com/docs/guides/newsletter-inclusion-master-data-v1).

### Abandoned cart

The VTEX platform allows you to [set up abandoned cart automation](https://help.vtex.com/en/tutorial/configurar-carrinho-abandonado--tutorials_740). With this feature, you can configure automatic emailing to customers who have visited your store, added products to their cart, and ended the session without making a purchase.

To ensure that you comply with the right to consent for this specific purpose, you should [set up your abandoned cart automation](https://help.vtex.com/en/tutorial/configurar-carrinho-abandonado--tutorials_740) to send emails only to [store newsletter subscribers](#newsletter-subscription). Customers subscribed to the newsletter have the `isNewsletterOptIn` field set to `true` in the **CL** entity of the [Master Data v1](https://help.vtex.com/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw).

### Notify me

The [Notify Me](https://help.vtex.com/en/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e) option allows people to sign up to receive an email notification when an item they are interested is back in stock.

Anyone can manage consent for [Notify Me](https://help.vtex.com/en/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e) on the page of the product in which they are interested.

### Save profile or payment details at Checkout

The right to consent allows people to buy in your store without their personal data being saved by the store for future use.

Please contact your development team to make this option available following the [Enable the Save user data opt-in](https://developers.vtex.com/docs/guides/enable-the-save-user-data-opt-in) guide.

>ℹ️ Learn more about [abandoned cart automation](https://help.vtex.com/en/tutorial/configurar-carrinho-abandonado--tutorials_740).

## Erasure

The right to erasure allows customers to request that their personal data be erased from the platform.

If any customer requests to erase their data from your store, you can comply by following the [Erasing customer data](https://help.vtex.com/en/tutorial/exclusao-de-dados-de-clientes--1R9Fn7A06Ifj4R9YD4JTKU) guide.

