---
title: 'Promotions Simulator '
id: 4zc8SNqjqeIJ0ZRMhjlnvy
status: PUBLISHED
createdAt: 2022-09-13T21:22:59.620Z
updatedAt: 2024-03-13T19:31:16.281Z
publishedAt: 2024-03-13T19:31:16.281Z
firstPublishedAt: 2022-09-13T22:59:58.058Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: promotions-simulator-beta
locale: en
legacySlug: promotions-simulator-beta
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

<div class="alert alert-warning">
  <p>Users must have an authorized <a href="https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc">role</a> that grants access to the <strong>Promotions</strong> module in the VTEX Admin to access the <strong>Promotion Simulator</strong>.</p>
</div>

The **Promotion Simulator** is a tool that allows you to view not only the promotions created in the VTEX platform and applied to the shopping cart but also their activation conditions. You can also test the application of promotions before activating them, including scheduled and inactive promotions.

With multiple configuration possibilities for promotions, the simulator brings visibility into promotion [competition](https://help.vtex.com/en/tutorial/how-promotion-competition-works--tutorials_2270), how they are combined during the purchase, and the triggers that activate them.

The **Promotion Simulator** is available for all VTEX stores through [Cartman](https://help.vtex.com/en/tutorial/configure-cartman--1ACMTStZYkMqB0lTgwg451), a tool for merchants at checkout. To access the simulator, follow the steps below:

1. In the top bar of the VTEX Admin, click the `Preview` button to open your store's restricted access page.

    If you prefer, you can access it directly from the URL `https://{accountname}.myvtex.com/`, replacing `{accountname}` with the name of your VTEX account.

2. Add products to the cart and access the checkout at `https://{accountname}.myvtex.com/checkout/#/cart`.
3. Click the blue button <img src="//images.ctfassets.net/alneenqid6w5/2Z1d5lHtVM7E7SvL58C8UW/acc0fa24cc8ae2e008d4a8d0f466b035/cartman-removebg-preview.png" alt="cartman-icon" width="25"/> in the bottom right corner of the page to launch Cartman.
4. Click **Promotion Simulator**.

   In the new window, you will find a list of the products in your cart and all the promotions that have been applied and are applicable to each item.

![Simulator-promo-en-gif-1](//images.ctfassets.net/alneenqid6w5/66PaJF2TBi2T1VBEFPlLuz/c05b0c30d34a029e4bff69dff70de0d5/simulador-promo-en-230706.gif)

The **Promotion Simulator** interface displays the following information:

| Column | Description |
|---|---|
| **Product** | List of products in the cart. |
| **Price** | Full price and discounted price of the promotion applied. |
| **Quantity** | Total number of items in the cart. |
| **Total** | Total price that will be charged for the product, considering the promotion discounts and the number of items. |
| **Discount** | Discount status in the cart, which can be: `Applied` or `Not applied`. The `Applied` status indicates that at least one promotion has been applied to the product.  |

<div class="alert alert-info">
  <p>You can send us your feedback about your experience using the <strong>Promotion Simulator</strong> from the megaphone <i class="fas fa-megaphone"></i> button in the right corner of the screen.</p>
</div>

### Updating the simulator

If you need to add or remove items from your cart, you can keep the simulator window open. After making changes to your cart, click `Update` in the **Promotion Simulator** to review the promotions applied to the updated cart.

### Searching and filtering promotions

The tool provides a search bar for finding promotions by product or promotion name. Additionally, you can filter promotions by **Promotion type** ([Regular](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI), [Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323), [Get More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325), [Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324), [Buy One, Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322), or [Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)) and **Discount** (Applied or Not Applied).

### Viewing applied promotions details

By clicking each product, you can see more information about the promotions applied to it, details about their effects, and the triggers that activated them. You can also see the promotions that have not been applied and the reason they were not.

### Editing promotions

To edit a promotion, follow the steps below:

1. In the **Promotion Simulator**, click a product row or the arrow <i class="fas fa-chevron-right"></i>.
2. Click the name of the promotion you want to edit.

   You'll be redirected to the promotion form.

3. Edit the [promotion fields](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#1-promotion-overview).
4. Once you have made all changes, click `Save`.

### Simulating promotions

The **Promotion Simulator** allows you to test the application of another promotion or simulate the effects of deactivating applied promotions. To do this, click the `Select Promotions` button at the top right of the page, as shown in the image below.

![ui-Simulator-promo-en-gif-2](//images.ctfassets.net/alneenqid6w5/4CkGZCw0142IDUwH8VVf7A/31e593dbdb4fed07df101576ecc63f20/ui-simulador-promo-en-230706.gif)

To run a simulation, follow the instructions below:

1. In the **Promotion Simulator**, click `Select Promotions` at the top right of the page.

    A list of all promotions in your store will be displayed, including active, paused, scheduled, and ended promotions.

2. Select one or more promotions to simulate their application in your cart. You can also deselect active promotions if you wish to simulate their deactivation.
3. Click the `Simulate` button.

    After running the simulation, you will see the results of the selected promotions. To verify if the tested promotions were applied to the cart items in the simulation, you can check the status of the **Discount** column or click the respective product.

<div class="alert alert-info">
  <p>You can apply promotions to products that already have an active promotion. However, please note that not all promotions can be applied. The VTEX system will always choose the most favorable one for your store customers, considering factors such as the total price of the items or the shipping cost.</p>
</div>

### Learn more

* [How promotions work](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR)
* [Promotions for specific scenarios](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy)
* [Configuring Cartman](https://help.vtex.com/en/tutorial/configure-cartman--1ACMTStZYkMqB0lTgwg451)
