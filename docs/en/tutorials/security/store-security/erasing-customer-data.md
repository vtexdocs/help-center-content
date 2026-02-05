---
title: 'Erasing customer data'
id: 1R9Fn7A06Ifj4R9YD4JTKU
status: PUBLISHED
createdAt: 2022-04-14T13:28:53.209Z
updatedAt: 2025-04-10T14:19:21.979Z
publishedAt: 2025-04-10T14:19:21.979Z
firstPublishedAt: 2022-04-14T13:50:08.688Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: erasing-customer-data
legacySlug: deleting-customer-data
locale: en
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

Under data protection regulations such as the [EU's General Data Protection Regulation (GDPR) and the Brazilian General Data Protection Law (LGPD)](https://vtex.com/us-en/privacy-and-agreements/vtex-commitment/), companies that store customer personal data must accept customer requests to delete their information. VTEX allows merchants to request the deletion of data directly through Copilot.

## 1. Checking data stored in Master Data

Before [requesting customer data deletion via Copilot](#requesting-customer-data-deletion-via-copilot), follow these steps:

1. **Identify where the data is stored:** Check the [Master Data](/en/docs/tutorials/master-data) entities that store customer data in your operation.
2. **Delete custom entities manually:** If your store keeps customer data in custom entities, delete it manually before requesting data deletion via Copilot. For instructions, see the [Custom data entities](#custom-data-entities) section. Follow this process only for custom entities. Don't delete the Master Data [native entities](#master-data-native-entities) CL and AD.

### Master Data native entities

Once you've submitted your [deletion request](#requesting-customer-data-deletion-via-copilot), VTEX will delete the data from the native data entities **CL** and **AD**. It's important you don't delete data from these entities on your side.

### Custom data entities

If your store keeps customer data in custom data entities (CL and AD), you must manually delete this data before requesting customer data deletion via Copilot. You can manually delete customer data using the Master Data API:

1. Search for the document using the [Search document](https://developers.vtex.com/vtex-rest-api/reference/searchdocuments-1) endpoint. 
2. Delete the document using the [Delete document](https://developers.vtex.com/vtex-rest-api/reference/deletedocument-1) endpoint.

> ❗ Don't do this for the native entities **CL** and **AD**.

## 2. Configuring the GDPR role

To request data deletion, create a [custom role](/en/tutorial/criar-perfil-de-acesso) named **General Data Protection Law** with the following resources from [License Manager](/en/tutorial/license-manager-resources):

- **Write user rights requests** (from the **User Rights** product)
- **Open Support Ticket** (from the **VTEX Support** product)

![perfil-de-acesso-gdpr](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/store-security/erasing-customer-data_1.jpg)

Next, assign this role to the user who will request customer data deletion.

## 3. Requesting customer data deletion via Copilot

After checking the data and configuring the role, follow these steps to submit the request via Copilot:

1. Log in to the VTEX Admin with a user that has the **General Data Protection Law** role, configured in [2. Configuring the GDPR role](#2-configuring-the-gdpr-role).
2. Go to **Copilot > Chat** in the VTEX Admin.
3. Send the message: `I want to delete a user from the VTEX platform.`
    ![copilot-excluir-cliente-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/store-security/erasing-customer-data_2.gif)
4. When requested, provide the email of the user you want to delete. You can delete data for only one shopper per request. Submit the email address of a single shopper at a time.

After this step, the request will be forwarded to VTEX Support, and you'll receive the support ticket ID to follow up.

Once your ticket is closed, VTEX will send a deletion certificate to the email used to open the ticket, confirming that the data has been deleted.

