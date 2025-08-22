---
title: 'White label sellers selection'
id: 3MemNQ4pKkWCpMdzI27AHa
status: PUBLISHED
createdAt: 2021-03-05T12:15:19.533Z
updatedAt: 2025-07-22T22:19:55.610Z
publishedAt: 2025-07-22T22:19:55.610Z
firstPublishedAt: 2021-03-05T13:12:55.997Z
contentType: tutorial
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: white-label-sellers-selection
legacySlug: algorithm-for-selecting-white-label-sellers
locale: en
subcategoryId: 3vhg10rO4MSmy06KeIYMIa
---

The architecture of a VTEX store allows it to act both as a [marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) and as a seller. The marketplace is the environment where a product is sold, also called window display. The seller is the inventory owner and the one responsible for delivering orders.

There are two types of sellers on the VTEX platform:

- **Common seller:** The seller is visible for customers in the marketplace and can be chosen by the customer during their shopping experience.
- **[White label seller](https://help.vtex.com/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa):** The seller remains unknown to the customer during their shopping experience and is automatically selected by the VTEX platform to deliver the order. 

> ℹ️ At VTEX, a franchise account is associated with a main account, and it acts as a white label seller of the main account. This business model is strategic for retailers who want to connect physical stores to their digital sales channel. Learn more in [What is a franchise account?](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl).

When the customer browses the marketplace, either the window display or the shopping cart, the seller information regarding item availability and shipping options may vary, depending on the marketplace knowing or not the buyer's location. Therefore, this article is divided into the following:

- [Seller selection in the window display](#seller-selection-in-the-window-display)
- [Seller selection in the shopping cart](#seller-selection-in-the-shopping-cart)
- [Customer experience at checkout](#customer-experience-at-checkout)

## Seller selection in the window display

When customers browse the marketplace, they expect to view products that can be delivered to their location. To guarantee item availability in the window display, the VTEX platform selects the sellers linked to the marketplace. Since it's not always possible to identify the customer's region during browsing, there are two possible scenarios:

- [Window display when customer location is not defined.](#window-display-when-customer-location-is-not-defined)
- [Window display when customer location is defined.](#window-display-when-customer-location-is-defined)

> ℹ️ During the window display stage of the shopping experience, the VTEX platform does not consider the sellers' shipping options. This only happens when the customer enters the address at checkout. However, the price and availability presented in the window display may change when completing the purchase.

### Window display when customer location is not defined

When a customer is browsing the marketplace from an undefined location, only the products in the inventory of the main seller, also called Seller 1, and of the [comprehensive sellers](https://help.vtex.com/en/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI) will be displayed. A seller must be configured as comprehensive when it is able to ship orders to all regions covered by the marketplace operation. In cases of more than one comprehensive seller, the checkout selects the one with the highest amount in stock for the item in question, among all comprehensive sellers.

### Window display when customer location is defined

When the marketplace has access to the customer's location, either through captured geolocation or customer provided data, the VTEX platform queries for all the sellers covering that specific region to display the product price and availability in the window display and select the seller offering the lowest price. Learn more in [Setting up price and availability of SKUs by Region](https://help.vtex.com/en/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc).

> ⚠️ When the customer location is known, the VTEX platform queries for all sellers by default, using the [Region v2](https://developers.vtex.com/vtex-developer-docs/changelog/region-v2-release) feature. However, some VTEX stores may still be operating with Region v1, which has a limited seller selection for the window display.

## Seller selection in the shopping cart

When the customer adds items to the shopping cart, the marketplace may or may not know the customer's location. Seller selection will be different for each of the two possible scenarios:

- [Shopping cart with no customer address](#shopping-cart-with-no-customer-address)
- [Shopping cart with customer address](#shopping-cart-with-customer-address)

### Shopping cart with no customer address

As long as the marketplace doesn't know the customer’s location, product availability and price are limited to the ones offered by the main seller and the [comprehensive sellers](https://help.vtex.com/en/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). A seller must be configured as comprehensive when it is able to ship orders to all regions covered by the marketplace operation. In cases of more than one comprehensive seller, the checkout selects the one with the highest amount in stock for the item in question, among all comprehensive sellers.

### Shopping cart with customer address

When the customer fills in the address in the shopping cart stage, the VTEX platform makes a seller selection, guaranteeing optimized cost and time conditions for shipping the items. To maintain the high performance of the VTEX platform, the selection is composed of a maximum of twelve sellers, up to six sellers for shipping by delivery and up to six sellers for pickup.

The main criteria for the white label seller selection are:

- Cheapest cost in the [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127) of the seller's [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140).
- Shortest time in the shipping rate template of the seller's shipping policy.
- Having available [inventory](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque).

After filtering all sellers based on the criteria above, up to six sellers will be selected for each shipping method:

- [Delivery](#shipping-method-delivery): the customer receives the order at their address.
- [Pickup](#shipping-method-pickup): the customer picks up the order from a [pickup point](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R).

> ℹ️ By default, from a total of up to twelve sellers, up to six do delivery and up to six offer pickup. However, if less than six sellers meet the criteria for one shipping method, the other category may list more than six sellers. For example, if there are only five sellers for order delivery, the pickup list may have seven sellers, so that the total adds up to twelve sellers.

#### Shipping method: delivery

The selection of up to six white label sellers for delivery shipping consists of the following steps:

1. The VTEX platform generates a list with all the SKUs the customer added to the shopping cart.
2. The sellers who ship at least one item from the SKU list in the customer's region are selected. Sellers who don't have in their [inventory](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) all the units of at least one SKU are disregarded.
  > Example: For an order containing five red blouses and three white blouses, the seller must be able to ship at least the five red blouses or the three white blouses.
3. The VTEX platform selects the seller covering more SKUs from the list. 
4. A new selection is carried out where the SKUs to be delivered by the selected seller are disregarded.
5. The next seller covering more SKUs is selected, until all SKUs in the shopping cart are covered.
6. Based on the selection of sellers covering the shopping cart, the VTEX platform calculates the combinations with the lowest number of sellers.
7. Out of these combinations, a list of maximum six sellers is made for delivery shipping.

> ℹ️ During selection, different sellers may come to a tie. In that case, the selection is divided into two criteria in order to choose: <ul> <li>Up to three sellers with the best cost.</li> <li>Up to three sellers with the best time.</li> </ul>

If there is a tie between sellers on the best cost or time, the tiebreaker criterion is the seller with the highest quantity of SKUs in stock.

##### Example 1 for delivery shipping

A customer added five SKUs to the shopping cart. Each of the sellers delivering in the customer's region (sellers A, B, C, and D) has only part of the ordered items in [stock](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139), as illustrated below: 

![print_selecao_seller_white_label_1](//images.ctfassets.net/alneenqid6w5/23CWM1CDejDvKqF31O2DH9/4fdb2ed25e8d3d52eef96e5c0e2fd908/print_selecao_seller_white_label_1.png)

The VTEX platform selects the seller that has available in stock the maximum quantity of the SKUs added to the shopping cart. In this case, it's Seller B, the only one that can deliver three SKUs. 

After Seller B is selected, there are two SKUs still to be delivered. If a single seller were able to deliver both items, it would be a decisive selection factor because the objective is to find the lowest number of sellers to cover the shopping cart. However, Sellers A and C will be selected for delivering SKUs 1 and 4, as illustrated in the image below:

![print_selecao_seller_white_label_2](//images.ctfassets.net/alneenqid6w5/23CWM1CDejDvKqF31O2DH9/3f7b71abf734ae7c55d8b40d3a76f3c0/print_selecao_seller_white_label_2.png)

In the first image, Seller C was able to deliver SKUs 3 and 4, and Seller D could deliver SKU 5. But Seller B has already been selected to deliver those items, so those SKUs will be disregarded in the following steps of the selection. This is represented by removing the arrow connecting Seller C to SKU 3 and Seller D to SKU 5.

The selection result for the delivery method is a combination between sellers A, B, and C.

##### Example 2 for shipping by delivery

A customer added five SKUs to the shopping cart and there are four sellers delivering in their region: sellers A, B, C, and D. None of them has all of the items in [stock](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139), as illustrated below:

![print_selecao_seller_white_label_3](//images.ctfassets.net/alneenqid6w5/23CWM1CDejDvKqF31O2DH9/26cd86b37e5e47ada6f15cc08acfbfbc/print_selecao_seller_white_label_3.png)

The VTEX platform selects the seller that has available in stock the highest number of the SKUs added to the shopping cart. Seller B and Seller D are able to deliver three items. Because both can deliver SKU 3, they are in competition.

When the shopping cart covering criteria generates a tie, the selection is divided in two parallel criteria:

- Fastest shipping
- Cheapest shipping

Suppose Seller B has the cheapest shipping and Seller D has the fastest shipping. In each case, a combination of sellers covering all items in the shopping cart will be generated.

- **Fastest shipping:** After Seller D is selected, SKUs 3 and 4 remain to be delivered. Seller C is able to deliver both, therefore it will be selected. The selection result is a combination of sellers D and C.

![print_selecao_seller_white_label_4](//images.ctfassets.net/alneenqid6w5/5OVQXuRwsEWGUxy3hocfOF/4751f13e35a8187655c04b11c67f6079/print_selecao_seller_white_label_4.png)

- **Cheapest shipping cost:** After Seller B is selected, SKUs 1 and 4 remain to be delivered. Since only Seller A is able to deliver SKU 1 and Seller C SKU 4, the selection result is a combination of sellers A, B, and C. 

![print_selecao_seller_white_label_5](//images.ctfassets.net/alneenqid6w5/2zLEDj7yHw54HufNUeC8OT/d69cee9bb79c876adb571e98ccd0060c/print_selecao_seller_white_label_5.png)

In the images showing the fastest shipping and the cheapest shipping, the arrows pointing repeatedly to sellers which delivered SKUs covered by sellers B and D were removed. During the selection process, SKUs that are already covered are disregarded.

The selection result for sellers using the delivery method are sellers D and C for fastest shipping and sellers A, B, and C for cheapest shipping. A seller may be part of both selections, as it happens in the case of Seller C.

#### Shipping method: pickup

By default, the list of sellers for pickup shipping is generated without including sellers selected for delivery shipping. The objective is that the two analysis do not compete with one another.

The selection of up to six sellers is made for the customer to get all shopping cart items from a single [pickup point](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R). The selection follows the steps below:

1. The VTEX platform generates a list with all the SKUs the customer added to the shopping cart.
2. The sellers shipping in the customer's region at least one item from the SKU list are selected. Sellers who don't have in their inventory all the units of at least one SKU are disregarded.
  > Example: For an order containing five red blouses and three white blouses, the seller must be able to ship at least the five red blouses or the three white blouses.
3. The VTEX platform selects the sellers covering the highest number of items on the list, guaranteeing the highest shopping cart coverage.
4. From this list, the sellers with pickup points closest to the customer’s address are selected.
5. The selection is then divided in two parallel criteria:
  - **Pickup with best cost:** Up to three sellers are selected based on the following criteria and in this order of relevance:
    - **Best cost:** Sellers which offer the cheapest prices for order pickup.
    - **Best time:** Sellers which make the products available for pickup in the shortest time.
  - **Pickup with best time:** Up to three sellers are selected based on the following criteria and in this order of relevance: 
    - **Best time:** Sellers which make the products available for pickup in the shortest time.
    - **Best cost:** Sellers which offer the cheapest prices for order pickup.

> ℹ️ When there is a tie between the best cost and best time, the tiebreak criterion is the seller with the highest quantity of SKUs in stock.

##### Example for pickup shipping

A customer adds six SKUs to the shopping cart and there are eight sellers able to do pickup shipping for at least one of these SKUs. To calculate the shipping, the following criteria is considered:

- SKU availability in the seller's stock.
- Distance between the pickup point and the customer's address.
- Pickup cost.
- Pickup preparation time.

The values from each seller are compared in the table below:

| **Sellers** | **SKU availability of the total of 6 items**  | **Distance between the pickup point and the customer's address** | **Pickup cost** | **Pickup preparation time** |
| ---------- | ---------- | ---------- | ---------- | ---------- |
|  Seller 1 | 5 | 1 km | 10 USD | 1 day |
|  Seller 2 | 4 | 1 km | 0 | 1 day |
|  Seller 3 | 2 | 1 km | 0 | 1 day |
|  Seller 4 | 5 | 5 km | 0 | 0 |
|  Seller 5 | 3 | 5 km | 0 | 0 |
|  Seller 6 | 4 | 1 km | 10 USD | 0 |
|  Seller 7 | 1 | 10 km | 0 | 0 |
|  Seller 8 | 2 | 5 km | 0 | 0 |

The selection of sellers for pickup will list up to six sellers, where up to three prioritize the cheapest pickup and up to three the fastest pickup.

To determine the sellers with the cheapest pickup, the criteria below are considered in the following order of relevance:

1. Seller with more SKUs available in stock.
2. Shortest distance between pickup point and customer's address.
3. Cheapest shipping cost.
4. Shortest order preparation time for pickup.

The selection result of up to three sellers with the cheapest pickup cost is presented in the table below:

| **Selection position** | **Sellers** | **SKU availability of the total of 6 items** | **Distance between the pickup point and the customer's address** | **Pickup cost** | **Pickup preparation time** |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 1st |  Seller 1 | 5 | 1 km | 10 USD | 1 day |
| 2nd |  Seller 4 | 5 | 5 km | 0 | 0 |
| 3rd |  Seller 2 | 4 | 1 km | 0 | 1 day |
| 4th |  Seller 6 | 4 | 1 km | 10 USD | 0 |
| 5th |  Seller 5 | 3 | 5 km | 0 | 0 |
| 6th |  Seller 3 | 2 | 1 km | 0 | 1 |
| 7th |  Seller 8 | 2 | 5 km | 0 | 0 |
| 8th |  Seller 7 | 1 | 10 km | 0 | 0 |

- **Seller 1 is on first place:** It has five of the six SKUs in stock, and also the shortest distance between the pickup point and the customer's address. 
- **Seller 4 is on second place: **Same as Seller 1, it has five SKUs in stock, but the distance is longer.
- **Seller 2 is on third place:** Despite the tie with Seller 6, judging by the two main criteria, the cost is lower.

In parallel, the VTEX platform performs the seller selection with the fastest pickup. The criteria below are considered in the following order of relevance:

1. Seller with more SKUs available in stock.
2. Shortest distance between pickup point and customer's address.
3. Shortest order preparation time for pickup.
4. Cheapest shipping cost.

The selection result of up to three sellers with the cheapest pickup is presented in the table below:

| **Selection position** | **Sellers** | **SKU availability of the total of 6 items** | **Distance between the pickup point and the customer's address** | **Pickup preparation time** | **Pickup cost** |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 1st |  Seller 1 | 5 | 1 km | 1 day | 10 USD |
| 2nd |  Seller 4 | 5 | 5 km | 0 | 0 |
| 3rd |  Seller 6 | 4 | 1 km | 0 | 10 USD |
| 4th |  Seller 2 | 4 | 1 km | 1 day | 0 |
| 5th |  Seller 5 | 3 | 5 km | 0 | 0 |
| 6th |  Seller 3 | 2 | 1 km | 1 day | 0 |
| 7th |  Seller 8 | 2 | 5 km | 0 | 0 |
| 8th |  Seller 7 | 1 | 10 km | 0 | 0 |

- **Seller 1 is on first place:** It has five of the six SKUs in stock, and also the shortest distance between the pickup point and the customer's address. 
- **Seller 4 is on second place:** Same as Seller 1, it has five SKUs in stock, but the distance is longer.
- **Seller 6 is on third place:** Despite the tie with Seller 2, judging by the two main criteria, it has the shortest order preparation time for pickup.

Since sellers 1 and 4 were both included in the fastest and cheapest shipping list, the final selection result for pickup shipping are sellers 1, 2, 4, and 6. This means that only four sellers were selected, even though the list could have up to six. The two places left can be assigned to sellers doing delivery shipping, so there will be four sellers for pickup and eight for delivery, maintaining the total number of twelve sellers.

## Customer experience at checkout

Based on the selection of twelve sellers, the VTEX platform calculates the delivery and pickup options in order to optimize the order's shipping cost and time.

At checkout, the customer can:

- Choose the shipping method: delivery, pickup, or a combination of both.
- Choose a [pickup point](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) if they decide to pick up the order.
- Evaluate and select the order shipping cost and time.

Since only white label sellers were selected, the customer is not able to see the name of the sellers responsible for shipping the order. What will be displayed during the customer's shopping experience are shipping options, which can be standard, economic, or express, for example.
