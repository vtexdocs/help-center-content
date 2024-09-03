---
title: 'Enabling Local stock sale in VTEX Sales App'
id: 54eQN4rOH5yBYPGG2w8v9q
status: PUBLISHED
createdAt: 2023-05-19T17:30:02.393Z
updatedAt: 2023-05-30T15:49:36.187Z
publishedAt: 2023-05-30T15:49:36.187Z
firstPublishedAt: 2023-05-22T23:31:37.597Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: enabling-local-stock-sale-in-vtex-sales-app
locale: en
legacySlug: enabling-on-hands-in-vtex-sales-app
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

Local stock sale allows the sales associate in a physical store to complete sales through Sales App using a smartphone or a tablet without having to check out the customer at the register. To enable Local stock sale in your store, you need to:

1. [Create a franchise account](#creating-a-franchise-account)
2. [Create a seller](#creating-a-seller)
3. [Set up a pickup point](#setting-up-a-pickup-point)
4. [Create a warehouse](#creating-a-warehouse)
5. [Update the inventory](#updating-the-inventory)
6. [Link the franchise account to the physical store](#linking-the-franchise-account-to-the-physical-store)
7. [Integrate the point of sale](#integrating-the-point-of-sale)

>ℹ️ Local stock sale can only be set up for stores that use Sales App. Learn how to request and configure Sales App in our [Sales App - Getting started and setting up](https://help.vtex.com/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc) documentation.

## Creating a franchise account

The first step is to [request the creation of a franchise account](https://help.vtex.com/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/eujH0id9Y4WJjjmdazUKd) for your physical store. The [franchise account](https://help.vtex.com/en/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) will be linked to the main account of your store and will inherit its catalog. If you already have a franchise account, go to the next step.

## Creating a seller

After creating a franchise account, you need to [create a seller](https://help.vtex.com/en/tutorial/adicionar-seller--tutorials_392) to represent the physical store in the main account linked to the franchise account. To check whether your store uses store pickup or sellers to represent physical stores, go to the **[Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv)** page of your Admin and search for the physical store's name.

## Setting up a pickup point

After creating the franchise account, you need to add the address of the physical store as an available [pickup point](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R). To do this, follow the instructions in [How to set up pickup points](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#como-configurar-pontos-de-retirada).

The created pickup point will be assigned an ID that you will need when [Creating a warehouse](#creating-a-warehouse). If you lose the ID, you can view it in the **Pickup Points** screen of the VTEX Admin, under the **ID** column.

## Creating a warehouse

After you have the pickup point, you need to indicate which [warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) is available for your physical store in each seller. You can share an available warehouse between the ecommerce website and the physical operation, or you can create a separate warehouse for physical store sales. To enable a warehouse for Sales App, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy > Warehouses**, or type **Shipping Strategy** in the search bar at the top of the page.
2. Click `+ Create Warehouse`.
3. Complete the [form fields](https://help.vtex.com/en/tutorial/gerenciar-estoque--tutorials_137#filling-in-warehouse-fields) and select the pickup point configured in the previous step.
4. Toggle the switch <i class="fas fa-toggle-on"></i> to `Active` to link the warehouse of the physical store to Sales App.
5. Click `Save`.

## Updating the inventory

It is a good practice to check the items available in the [inventory](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) and update it after activating the warehouse and pickup point. You can check the store inventory in two ways:

* **Manually**: Through the **[Inventory management](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139)** page in the VTEX Admin of the franchise account.
* **ERP integration**: Through the [ERP integration](https://developers.vtex.com/docs/guides/erp-integration-guide) by adding the franchise accounts to your integration so the [warehouse is automatically updated](https://developers.vtex.com/docs/guides/erp-integration-import-inventory#update-sku-inventory) by the ERP.

If all your products are listed without quantity, you will need to add the quantities of this store manually or via API.

You need to [enabling selling an out-of-stock item](#enabling-selling-an-out-of-stock-item-optional) if you want to ensure the item on hand will always be available for customers in the store.

>ℹ️ If you created two different warehouses, one for the ecommerce website and one for Sales App, it is important to manage stock quantity correctly for each.

## Linking the franchise account to the physical store

To ensure that the sales associates of your physical store have the right access to the store warehouse at their location, it's important to link the franchise account to their profile. To do this, [add the physical store](https://help.vtex.com/en/tutorial/loja-fisica-instore-beta--N4M9njT9xomdWD7mQyPt7) to Sales App.

You will need to select a sales associate from the store where you want to test On Hands and follow the steps below.

1. With a [sales associate selected](https://help.vtex.com/en/tutorial/vendedores-instore-beta--4rzit1pzp28km4HSDEdrEC), open Sales App and log in.
2. Search for an item that exists in the franchise account warehouse. The item should display the available quantity that corresponds to the seller inventory.

![instore-pdp-en](https://images.ctfassets.net/alneenqid6w5/7CtYO9vUzaunI2qO8onP7B/064cb3f0b499da4533cacdbea0fee4eb/image.png)

>ℹ️ If you enabled Infinite inventory, the item quantity will display as a number greater than one million, which can't be changed when a sale is completed.

## Enabling selling an out-of-stock item (optional)

You can also enable On Hands to ignore stock quantity and force item availability without having to enable Infinite inventory. To do this, follow the instructions below:

1. Go to the Sales App technical settings using the URL below. Substitute `main_account` with the name of the main account of your store in the VTEX Admin:
```https://{main_account}.myvtex.com/admin/portal/#/sites```
2. Click the gear <i class="fas fa-cog"></i> button to edit.
3. Select the **Code** tab.
4. In the side tab, select the `checkout-instore-custom-js` file.
![instore-custom-js-en](https://images.ctfassets.net/alneenqid6w5/5a70caO8nFFF25CrSXPXkx/45e6d1e73997a0ff4a4872fdc502a17c/image.png)
5. In the `window.INSTORE_CONFIG` key, add the `sellWithoutStockInHands: true` flag.
![sellWithoutStockInHands-en](https://images.ctfassets.net/alneenqid6w5/3yfRFSG0QgIwnXvyxwhsLo/642bf1e6d79d00ce46275ac1924d03c0/image.png)
6. Click <i class="fas fa-save"></i> `Save`.

## Enabling mixed cart sales (optional)

A mixed cart sale is a sale that contains items that the customer is going to pick up at the store when shopping and items that will be delivered to their home. This functionality is configured by default in VTEX stores. To learn more about this feature, read [Order split and delivery split](https://help.vtex.com/en/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV).

## Integrating the point of sale

Lastly, to complete the sale of an on-hand item, a tax receipt must be issued. The sales associate might want to update the local inventory of the point of sale with the information from this sale. To solve this, you need to integrate your point of sales. You can learn more in our [Integrating Local stock sale](https://developers.vtex.com/docs/guides/integration-vtex-sales-app-local-stock-sale) article.

