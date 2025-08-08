---
title: 'Managing a multistore'
id: 4S0lFVBPylRS5KpVgdyDhJ
status: CHANGED
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

Creating a multistore is free of charge for merchants. However, if you need to [request an additional trade policy](https://help.vtex.com/en/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), additional costs will apply.

To create a new store, follow the instructions in the section **Creating a store** in the guide [Account management](https://help.vtex.com/en/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq#criar-loja).

You need to specify the domain of your new store. Learn more in the guide [Configuring the store domain](https://help.vtex.com/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450).

Once the multistore has been created, set the layout for each store based on the frontend technology used. For more information, see [Setting layouts for each store](#setting-layouts-for-each-store).

### Setting layouts for each store

In a multidomain environment, you can set different layouts for each store, depending on the domain accessed.

- For Legacy CMS Portal stores, see [Layout](https://help.vtex.com/en/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW).
- For stores developed using Store Framework, see [Managing page and template content](https://help.vtex.com/en/tutorial/gerenciando-conteudo-de-pagina-e-template--3tMbx6HXy4Fy5r9EhboG37).

### Defining trade policies

Trade policies are required to differentiate products and/or prices in each store. To learn more, see [How trade policies work](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) and [Creating a trade policy](https://help.vtex.com/en/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE).

## Configuring a website

To allow customers to access the new store, follow the instructions below to create a website by copying the folder structure of your main site. This process makes it easier to create the layout and create a new website.

<div class="alert alert-warning">
Stores developed using Store Framework should also follow these instructions. Otherwise, the new store won't be available.
</div>

1. In the VTEX Admin, go to **Storefront > Layout**.
2. Click **CMS > Sites and channels**.
3. Click your main website.
4. Click `Copy Website`.
5. Click **Sites and channels** again in the side column.
6. Click the website you have created and change its name.
7. Click `Save Website`.
8. In the **Links** field, click `Add`.

    ![cms-layout](//images.ctfassets.net/alneenqid6w5/4bVAAc3Fs8ArVYy1qSCAnX/2376e2c489b5894681626ef26bf58d47/cms-layout.png)

9. Complete the **Store name from License Manager** field with the value of the subaccount previously created in the [Account Management] module (#creating-a-store).
10. Complete the **Available sales channel** field by selecting the trade policies that will be associated with this store.

    <div class="alert alert-warning">If your store uses more than one trade policy, check the sorting of these policies in <strong>Store Settings > Channels > Trade Policies</strong>. To learn more, see <a href="https://help.vtex.com/en/tutorial/managing-a-multistore--4S0lFVBPylRS5KpVgdyDhJ">How the relationship between websites and sales policies works</a>.</div>

11. Click `Save Binding` and then `Save Website`.

### Configuring the XML domain

To automatically generate the XML file for the new store, follow the instructions in the guide [Configure an XML domain](https://help.vtex.com/en/tutorial/configurar-dominio-do-xml--2RkGK4vHS0c6sYuUw0cUWC).

## Deleting a multistore

To delete an existing multistore, follow the instructions in the **Deleting a store** section of the guide [Account management](https://help.vtex.com/pt/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq#excluir-loja).

<div class="alert alert-warning">
The name of the deleted subaccount cannot be used again.
</div>

## Learn more

- [Choosing between a multistore architecture or an additional environment](https://help.vtex.com/en/tutorial/escolhendo-entre-arquitetura-multi-loja-ou-ambiente-adicional--4HRNpa1OCKZ5YzP8yiilBL)

