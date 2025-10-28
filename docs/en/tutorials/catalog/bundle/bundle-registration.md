---
title: 'Bundle registration'
id: tutorials_215
status: PUBLISHED
createdAt: 2017-04-27T22:13:50.843Z
updatedAt: 2025-09-16T19:15:39.706Z
publishedAt: 2025-09-16T19:15:39.706Z
firstPublishedAt: 2017-04-27T23:02:48.663Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: bundle-registration
legacySlug: kit-registration
locale: en
subcategoryId: 17Lkzo2rGBE1Bt7dXjE0tV
---

On VTEX, a bundle is a type of SKU that is composed of one or more SKUs, which are known as components. A specific type of bundle is the outfit.

## Difference between bundle and outfit

The following table describes the characteristics and scenarios for using a bundle or an outfit:

| **Type** | **Definition** | **Example** |
| :---: | :--- | :--- |
| [Bundle](/en/tutorial/what-is-a-bundle--5ov5s3eHM4AqAAgqWwoc28) | <ul><li>The components form a set that can't be divided, and customers can't pick individual items from it.</li><li>The store may or may not offer individual components separately.</li></ul> | A men's fashion store offers a "Father's Day" bundle that includes a pair of shoes, a pair of socks, and a keychain. The customer isn't interested in the keychain, but likes the shoes and the socks, so they buy the bundle because items aren't sold separately.|
| [Outfit](/en/tutorial/how-to-assemble-an-outfit--tutorials_266) | <ul><li>The components are a buy-together suggestion and customers can pick and choose whatever items they want to buy from the outfit.</li><li>The store always offers individual components separately.</li></ul> | A women's fashion store offers a "Summer" bundle that includes a bikini, a cover-up, and sandals. The customer doesn't like the sandals and only buys the bikini and the cover-up. |

## Creating a bundle

Follow the instructions below to create a bundle.

> ℹ️ If you want to create an outfit, check [How to assemble an Outfit](/en/tutorial/how-to-assemble-an-outfit--tutorials_266).

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type **Products and SKUs** in the search bar at the top of the page.
2. Open the edit page of one of the SKU components. If the SKUs aren't created yet, check [Adding or editing SKUs](/en/tutorial/adding-or-editing-skus--4ryZ6J45kwn3jDiQBxGiiN).
3. In the **SKUs** tab, click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> menu in the row of the SKU.

  ![bundle_registration_image_1_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/bundle/bundle-registration_1.png)

4. Click `Create bundle`.
5. Click `Convert to bundle`.

> ❗ Converting a SKU into a bundle is permanent and can't be undone.

After converting the SKU into a bundle, the word `Bundle` will display next to the SKU ID:

![bundle_registration_image_2_v2_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/bundle/bundle-registration_2.png)

If you want, you can duplicate the SKU or move it to another product. These actions are available in the same menu as the `Create bundle` option, described in step 4.

## Bundle weight

The weight of the bundle will be made up by the sum of the weight of its components.

## Inventory

The bundle’s [inventory](/en/tutorial/inventory-management--tutorials_139) will always be the inventory of its components. In other words, it is not possible to enter inventory merely in the bundle, but rather in each and every independent component, in order to update the bundle’s inventory. You can access this information in your VTEX Admin in **Catalog > Inventory > Inventory Management**.

Since the SKUs that make up the bundle must be sold together, the bundle overall inventory will be equal to the SKU which has less inventory items. This is as such due to the fact that when a component is out of stock, the bundle cannot be purchased.

> **Example:** A bundle has two components. Consider Component 1 has 30 units in stock, while Component 2 has 3 units in stock. As a result, only 3 kits will be available for sale.

Bundle components can be in different stocks, as long as they are shipped from the same dock. If they do not leave through the same dock, the entire bundle becomes unavailable. 

> ℹ️ This is not applicable to the outfit, since it may be sold with the components that are still in stock, without the need for all the components to be in stock.

## Price

The price of the bundle is updated automatically after changing the unit value of any of the components. The final price will be the sum of the components' values.

You may only change the final price of the bundle by directly accessing the pricing system without updating the components. As such, the value of the component will only be used to assess the sales value between components, ascertaining the price of each individual product in that specific order.

Please note that any change in any component will generate a new final price, updating what had been previously registered. Merely changing the final price will not update the price of the components.
