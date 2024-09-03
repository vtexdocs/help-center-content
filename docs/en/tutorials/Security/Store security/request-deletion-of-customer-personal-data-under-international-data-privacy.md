---
title: 'Request deletion of customer personal data under international data privacy laws'
id: 34Sd4DN6fOk5odkjIAedpE
status: ARCHIVED
createdAt: 2022-04-11T21:00:56.085Z
updatedAt: 2022-04-27T13:02:50.770Z
publishedAt: 
firstPublishedAt: 2022-04-11T22:24:38.940Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: request-deletion-of-customer-personal-data-under-international-data-privacy
locale: en
legacySlug: request-deletion-of-customer-personal-data-under-international-data-privacy
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

Our platform has tools that are constantly updated to make customer compliance with personal data protection laws easier and more transparent.

There are international laws on data protection in the international community. One of them is the European Union’s [General Data Protection Regulation (GDPR)](https://gdpr.eu/what-is-gdpr/#:~:text=The%20General%20Data%20Protection%20Regulation,to%20people%20in%20the%20EU.), which has been in force since 2018. In Brazil, there is the [General Data Protection Law (LGPD)](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm), which has been in force since 2020.

In general, the laws of several countries give the data subjects rights over their own data, since they are considered the owners of such data. One of these rights is to have your data erased from systems such as VTEX.

There are two steps to deleting data: 

1. [Configuring data in Master Data](#configuring-data-in-master-data)
2. [Opening a ticket with VTEX Support](#opening-a-ticket-with-vtex-support)

## Configuring data in Master Data

Configuring the data in Master Data is the first step in deleting sensitive data. End-user data such as personal identification, confidential information, and address are stored there. 

Privacy laws stipulate that personal data must not be shared or unduly exposed. Therefore, settings are required to ensure protection of that data. 

>⚠️ Settings that are saved cannot be reversed.

To perform the configuration, follow the steps below: 

1. Access the URL `https://<account>.ds.vtexcrm.com.br/` replacing `<account>` with your [store name](https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC).
2. Select the option in **Data Entity**.
3. In the *Acronyms* column, select the items with the acronyms **CL** (client) and **AD** (address) that you want to configure.
4. In the Actions column, click the `Edit` option.
5. Choose the data you want to edit from the Fields tab and click `the gear icon` <i class="fas fa-cog"></i>.
6. In *General Settings*, select the options you want:
   * **Is nullable?:** indicates that the field is null.
   * **Make readable without credentials:** allows anyone to read this field without authentication. We suggest that you do not check this field for personal or confidential data.
   * **Allow editing without credentials:** allows anyone to change the value in the field without authentication.
   * **Allow filter without credentials:** allows anyone to search for users using the field value without authentication.
7. Click `Save`.

## Opening a ticket with VTEX Support

Once you have configured the data in Master Data, you must request the deletion of your customers' personal data from the VTEX systems by opening a ticket with the [VTEX Support](https://help.vtex.com/en/support).

>⚠️ Please request the deletion of data for only one account, i.e. one shopper email per ticket. If you include more than one email, the ticket will be returned.

To request the deletion of customer personal data, follow the steps below.

1. Access the [VTEX Support](https://help.vtex.com/en/support).
2. Fill in your full name in the **Name** field and in the **Store** field select the name of the store you want to open the ticket for.
3. Click the `Continue` option.
4. Select the `Technical` option.
5. In the **Problem type** field, select `I would like to request a setup`.
6. In the **Subject of the request** field, fill in the following information:
   * Data Subject Request
   * VTEX accounts
   * Email linked to VTEX accounts whose data must be deleted
7. In the field **Your experience with the platform**, select the option that corresponds to your experience as a user of the VTEX platform.
8. Fill in the **Describe what happened in detail** field with details of your request.
9. Click `Submit`.

Your request will be sent to our support team. Upon completion of the ticket, a certificate will be issued to the email where the ticket was opened confirming the completion of the deletion of the data.
