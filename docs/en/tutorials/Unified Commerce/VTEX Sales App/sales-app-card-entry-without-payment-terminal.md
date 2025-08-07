---
title: 'Sales App card entry (without payment terminal)'
id: 48OR7InFvdLW6hekvfESs3
status: PUBLISHED
createdAt: 2025-03-28T15:33:24.822Z
updatedAt: 2025-04-10T19:05:57.726Z
publishedAt: 2025-04-10T19:05:57.726Z
firstPublishedAt: 2025-03-28T16:09:38.187Z
contentType: tutorial
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: sales-app-card-entry-without-payment-terminal
legacySlug: sales-app-card-entry
locale: en
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

The **Sales App card entry** feature allows the store to sell using credit cards without payment terminals. The solution enables card payment through **VTEX Sales App** and allows for automatic card scanning or manual data entry. The process is secure since the data is masked and the information isn't stored.

This feature ensures the purchase is processed through the same gateway as the ecommerce website, applying the existing checkout settings. After the sale, the payment confirmation is done through **VTEX Sales App**.

This article introduces the solution **Sales App card entry** and is organized in the following sections:

- [Characteristics](#characteristics)
- [Advantages](#advantages) 
- [Use cases](#use-cases)
- [Settings](#settings)
- [Using the solution](#using-the-solution)

## Characteristics

**Sales App card entry** has the following characteristics:

- ✅ Allows payments with the same credit card network as the ecommerce website.
- ✅ Includes the same [payment conditions](https://help.vtex.com/en/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) and installments provided by the ecommerce website.
- ✅ It's [PCI compliant](https://help.vtex.com/en/tutorial/o-que-e-o-pci-ssc), meaning it protects customer data and doesn't store sensitive information.

However, the feature has some restrictions:

- ❌ Doesn't support third-party [private label](https://help.vtex.com/en/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4) payments.
- ❌ Doesn't allow using multiple cards for a single purchase.

## Advantages

The following table presents the main advantages of using **Sales App card entry**:

| **Topic** | **Description** |
| :---: | :--- |
| **Speed and convenience** | Scanning the customer's card and the option of automatic or manual card entry streamline and speed up the purchase process. |
| **Integrated and frictionless experience** | The purchase and the payment confirmation take place in **VTEX Sales App**, eliminating the need for multiple environments to complete a sale and promoting a seamless experience. |
| **Secure purchases** | During the purchase, the customer watches the card scanning and (automatic or manual) data entry process, which keeps the information masked and doesn't store it after the purchase is completed. |
| **Virtual card support** | **Sales App card** entrysupports physical card with [BINs](https://help.vtex.com/en/tutorial/cadastrar-informacoes-de-bins--7xvo4JJ53WM7aLzufdC4au) and virtual cards, expanding payment options for customers. |
| **Payment starter kit** | In addition to the [shared cart (Social Selling)](https://help.vtex.com/en/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6deiffo22iKkY27PkfstXy) option, **Sales App card entry** allows merchants starting to use **VTEX Sales App** to integrate the solution without having to get an additional acquirer. |

## Use cases

When using **Sales App card entry** for [endless aisle](https://help.vtex.com/en/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/40KMlmGI5tN0r0KPCDWgGn) sales with default shipping (over 24 hours), the purchase follows the same checkout flow as the ecommerce website and is classified as a card-not-present transaction — a technical term applied when the payment doesn't count has having used a physical card.

<div class="alert alert-danger">
<p>Transactions made using this feature are subject to anti-fraud rules. Approval may take up to 24 hours if the purchase requires anti-fraud authorization. For this reason, we don't recommend using <b>Sales App card entry</b> in the following scenarios:</p><p><ul><li>Sales with express shipping</li><li>Local inventory sales (On Hands)</li></ul></p>
</div>

If the store has a [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) specifically for **VTEX Sales App** with an exclusive anti-fraud rule review, you can use **Sales App card entry** for sales with local inventory (On Hands) or express shipping.

## Settings

The settings required to activate the feature differ for stores that already use **VTEX Sales App** or will start using the solution.

<div class="alert alert-warning">
Before enabling the feature, make sure that the store is integrated with a payment partner and can process credit card sales.
</div>

### Stores starting to use VTEX Sales App

When [setting up VTEX Sales App](https://help.vtex.com/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO), in the payment method activation step, keep the option <i class="fas fa-toggle-on" aria-hidden="true"></i> **Sales App card entry** enabled.

### Stores using VTEX Sales App

To use **Sales App card entry**, there are two main settings that need to be enabled: one for Checkout and another for Payments.

#### Checkout configuration 

Credit card network IDs need to be enabled as payment methods in the VTEX Sales App payment settings. To confirm, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Checkout** or type **Checkout** in the search bar at the top of the page.
2. Click the <i class="fas fa-cog" alt="engrenagem azul" aria-hidden="true"></i> icon in `Default`.
3. Click the **Code** tab
4. In **Files**, click `checkout-instore-custom.js`.
5. Check the information, and if you add a new payment ID, click `Save`.

#### Payments configuration

Credit card network IDs need to be enabled for payments in this method. To confirm they are, follow the steps below:

1. In the VTEX Admin, go to **Store settings > Payment > Settings** or type **Settings** in the search bar at the top of the page.
2. Check if the IDs of the credit card networks are `Active`. If they aren't, proceed to the next step.
3. Set up a [credit card payment condition](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455) for your store.

## Using the solution

After completing the system [settings](#settings), check the instructions for selling with **Sales App card entry**.

### Before the sale

Enable the mobile camera in **VTEX Sales App** through the app settings or the first time you access **Sales App card entry**. This setup is required for card scanning.

### Completing the sale

Follow the steps below to sell using **Sales App card entry**:

1. In the **VTEX Sales App** checkout, in the `Select a payment method` step, click `Enter card`.
2. Select the option to scan the card or enter the data manually.
3. Automatically capture the card data with the capture screen or enter the data manually. The front and back of the card must be scanned.
4. After the payment is approved, the purchase confirmation is made in **VTEX Sales App**.

<div class = "alert alert-info">
Customers can scan the card or manually enter the data themselves if they prefer.
</div>

## Learn more

- [VTEX Sales App: FAQ](https://help.vtex.com/en/tutorial/vtex-sales-app-faq--3CRKQHzflSW0DXenEHUpP5)
- [Sharing shopping cart using VTEX Sales App Social Selling](https://help.vtex.com/en/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6deiffo22iKkY27PkfstXy)
- [Prerequisites for using VTEX Sales App](https://help.vtex.com/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u)
