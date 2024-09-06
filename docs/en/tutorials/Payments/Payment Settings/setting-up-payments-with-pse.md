---
title: 'Setting up payments with PSE'
id: 7dRChubn7TqdEyWrHQEQp6
status: PUBLISHED
createdAt: 2022-05-18T17:13:25.207Z
updatedAt: 2023-03-14T14:51:46.607Z
publishedAt: 2023-03-14T14:51:46.607Z
firstPublishedAt: 2023-03-14T14:51:46.607Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-pse
locale: en
legacySlug: setting-up-payments-with-pse
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

The PSE online debit system is one of VTEX's options for receiving payments in Colombia.

To enable PSE in your store, the following actions are required:
- [Install and configure the Banks for PSE App](#installing-banks-for-pse-app).
- [Setting up the PSE payment method](#setting-up-the-pse-payment-method).

>⚠️ To configure the PSE app in your store, you must have permission to access the Payments module. If you still do not have this access, request it through the [VTEX Support](https://help.vtex.com/support).

## Installing Banks for PSE App

1. Access **Admin VTEX**.
2. In the **Account Settings** sections, go to **Apps > App Store**.
3. In the **All Apps** field, type **Banks for PSE**.
4. Click `Install` in Banks for PSE app.
5. On the VTEX APP Store screen, click `GET APP`.
6. Type the name of your store (lowercase letters and without space).
7. Click `Confirm`.
8. Click `Install` to finish.

## Configuring Banks for PSE App

1. Access **Admin VTEX**.
2. In the **Account Settings** sections, go to **Apps > My apps**.
3. In the **App Store** field, type **Banks for PSE**.
4. Click on `Settings` in the Banks for PSE app.
5. In **Connector used to process the PSE payment**, select the desired option.
6. If you use GlobalPay as a connector, fill in the **Application Code** and **Application Key** fields with the data provided by GlobalPay.
7. Click `Save`.

## Setting up the PSE payment method

1. Access the **Admin VTEX**.
2. Click on **Payments**.
3. Then, click on **Settings**
4. In the **Payment Conditions** tab, click on the `+` button.
5. Click on **PSE**.
6. Fill the **Rule Name** field with a name of your choice for identification.
7. Activate the condition in the **Status** field.
8. In the **Process with affiliation** field, choose the connector that will process payments with PSE. Only connectors that support this payment method will be available for selection.
9. If you wish, you can also [configure payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).
10. Click `Save`.
