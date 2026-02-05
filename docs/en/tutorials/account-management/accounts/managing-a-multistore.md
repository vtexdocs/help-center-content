---
title: 'Managing a multistore'
id: 4S0lFVBPylRS5KpVgdyDhJ
status: PUBLISHED
createdAt: 2024-09-06T12:35:51.501Z
updatedAt: 2025-02-07T13:40:57.764Z
publishedAt: 2025-02-07T13:30:06.894Z
firstPublishedAt: 2024-09-06T13:11:49.620Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: managing-a-multistore
legacySlug: managing-a-multistore
locale: en
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

A multistore, also known as a subaccount or multidomain, is a second store managed within the same VTEX administration panel. This feature is generally used when the store has other brands with similar logistics and payment methods or needs another environment, such as for B2B sales.

In this guide, you will learn how to create, configure, and delete a multistore.

## Creating a multistore

Creating a multistore is free of charge for merchants. However, if you need to [request an additional trade policy](/en/docs/tutorials/requesting-an-additional-trade-policy), additional costs will apply.

To create a new store, follow the instructions in the section **Creating a store** in the guide [Account management](/en/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq#criar-loja).

You need to specify the domain of your new store. Learn more in the guide [Configuring the store domain](/en/docs/tutorials/configuring-the-store-domain).

Once the multistore has been created, set the layout for each store based on the frontend technology used. For more information, see [Setting layouts for each store](#setting-layouts-for-each-store).

### Setting layouts for each store

In a multidomain environment, you can set different layouts for each store, depending on the domain accessed.

- For Legacy CMS Portal stores, see [Layout](/en/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW).
- For stores developed using Store Framework, see [Managing page and template content](/en/docs/tutorials/managing-page-and-template-content).

### Defining trade policies

Trade policies are required to differentiate products and/or prices in each store. To learn more, see [How trade policies work](/en/docs/tutorials/how-trade-policies-work) and [Creating a trade policy](/en/docs/tutorials/creating-a-trade-policy).

## Configuring a website

To allow customers to access the new store, follow the instructions below to create a website by copying the folder structure of your main site. This process makes it easier to create the layout and create a new website.

> ⚠️ Stores developed using Store Framework should also follow these instructions. Otherwise, the new store won't be available.

1. In the VTEX Admin, go to **Storefront > Layout**.
2. Click **CMS > Sites and channels**.
3. Click your main website.
4. Click `Copy Website`.
5. Click **Sites and channels** again in the side column.
6. Click the website you have created and change its name.
7. Click `Save Website`.
8. In the **Links** field, click `Add`.

    ![cms-layout](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/accounts/managing-a-multistore_1.png)

9. Complete the **Store name from License Manager** field with the value of the subaccount previously created in the [Account Management] module (#creating-a-store).
10. Complete the **Available sales channel** field by selecting the trade policies that will be associated with this store.

    > ⚠️ If your store uses more than one trade policy, check the sorting of these policies in **Store Settings > Channels > Trade Policies**. To learn more, see [How the relationship between websites and sales policies works](/en/docs/tutorials/managing-a-multistore).

11. Click `Save Binding` and then `Save Website`.

### Configuring the XML domain

To automatically generate the XML file for the new store, follow the instructions in the guide [Configure an XML domain](/en/docs/tutorials/configuring-an-xml-domain).

## Deleting a multistore

To delete an existing multistore, follow the instructions in the **Deleting a store** section of the guide [Account management](/en/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq#excluir-loja).

> ⚠️ The name of the deleted subaccount cannot be used again.

## Learn more

- [Choosing between a multistore architecture or an additional environment](/en/docs/tutorials/choosing-between-a-multistore-architecture-or-an-additional-environment)

