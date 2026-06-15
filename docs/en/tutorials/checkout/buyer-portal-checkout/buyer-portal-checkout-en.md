---
title: 'Buyer Portal Checkout'
status: PUBLISHED
createdAt: 2026-04-24T18:00:00.000Z
updatedAt: 2026-04-24T18:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: buyer-portal-checkout-en
locale: en
---

> ℹ️ This feature is only available for stores using the [B2B Buyer Portal](https://help.vtex.com/docs/tutorials/b2b-buyer-portal), which is currently available for selected accounts.

The **Buyer Portal Checkout** is the new version of the VTEX checkout, designed to deliver a fast, customizable checkout experience. The solution was built based on the market's best usability practices and directly integrated into the B2B flows of the Buyer Portal, such as [Contracts](https://help.vtex.com/docs/tutorials/b2b-buyer-portal#contracts), [Accounting Fields](https://help.vtex.com/docs/tutorials/b2b-buyer-portal#accounting-fields), [Budgets](https://help.vtex.com/docs/tutorials/b2b-buyer-portal#budgets), and [Buying Policies](https://help.vtex.com/docs/tutorials/b2b-buyer-portal#buying-policies).

![Buyer Portal Checkout](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-en_1.png)

## Concept

The Buyer Portal Checkout features a modern architecture, designed to provide greater flexibility, security, and scalability to the purchase experience. Among the characteristics that define the solution, the following stand out:

- Integration with the Buyer Portal compliance tools.
- Optimization for mobile and desktop devices.
- Support for advanced omnichannel options.

> ℹ️ Buyer Portal Checkout is in closed beta and is currently available to B2B customers in North America. To learn more about the eligibility requirements, contact [VTEX Support](https://help.vtex.com/en/support).

## Features

Buyer Portal Checkout delivers all the expected features of a modern checkout, covering the complete flow from cart to order confirmation. The main features include:

- Cart management with item viewing and adjustment (quantity, addition, individual or bulk removal), grouping by delivery channel (shipping or store pickup), and automatic handling of unavailable items.
- Real-time order summary, including a detailed breakdown of subtotal, shipping, discounts, promotions, taxes, gift cards, and final total.
- Shipping simulation directly in the cart with new or saved addresses.
- Support for multiple payment methods, including credit cards with installment options and saved cards (for B2B flows without CVV), PIX with QR codes, and one-click checkout.
- Order review and confirmation, allowing users to edit each section and view order details such as status (approved or pending), order number, delivery or pickup information, and payment details.

Beyond these features, VTEX offers solutions to optimize the B2B purchasing experience, enabling personalization and secure transactions for buyers.

### Budgets

The [Budgets](https://help.vtex.com/docs/tutorials/b2b-buyer-portal#budgets) feature allows the buyer to see which budgets are associated with their order before checkout. This gives buyers visibility into their budgets and helps prevent spending beyond the limits defined by their organization.

![Account billing](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-en_3.png)

### Checkout for Punchout

The [Punchout](https://developers.vtex.com/docs/guides/punchout) flow enables buyers to integrate their e-procurement systems directly with the ecommerce site. The [Checkout for Punchout](https://developers.vtex.com/docs/guides/punchout-cart-integration) offered by VTEX is adapted for this type of integration, allowing users to return the configured cart and complete the purchase through their e-procurement system.

### Billing addresses

The Billing addresses feature allows buyers to explicitly select the correct billing address during checkout. This feature ensures that the billing address recorded in the order accurately reflects the fiscal reality of the transaction and is consistently propagated to subsequent systems.

![Billing addresses](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-en_3.png)

### Scheduled delivery

[Scheduled delivery](/docs/tutorials/configure-scheduled-delivery-buyer-portal-checkout) allows VTEX stores to offer customers the option to choose the best date and time to receive their purchases. You can configure this directly in your shipping policies to define the available delivery periods.

### Buying policies

The [Buying policies](https://help.vtex.com/docs/tutorials/buying-policies-overview) system supports dynamic rules that buyers can configure to apply their organization's compliance policies throughout the purchasing process. [Buyer organization managers](https://help.vtex.com/docs/tutorials/b2b-buyer-portal) can define custom rules to route orders for approval before confirmation, or even prevent them from being completed.

### Assembly Options

The [Assembly Options](https://help.vtex.com/pt/docs/tutorials/assembly-options) feature allows you to group bundle items into a single element in the cart list. This element displays detailed information about the bundle composition and provides control over the quantities of each item.

![Assembly Options](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-en_4.png)

### Saved cards

Buyer Portal Checkout allows the use of credit cards shared by the organization. It also allows you to [save cards](https://developers.vtex.com/docs/api-reference/checkout-custom-card-payment-api) for future transactions (available to users with this [permission](https://help.vtex.com/docs/tutorials/b2b-buyer-portal)).

Integrated with VTEX’s [credit card tokenization flow](https://help.vtex.com/docs/tutorials/dpan-and-fpan-understanding-security-in-the-online-tokenized-payment-flow), the information is processed according to [PCI](https://help.vtex.com/docs/tutorials/what-is-the-pci-ssc) rules, ensuring security for the process.

### Saved shipping addresses

In Buyer Portal Checkout, users can select shipping addresses from the [list provided by their organization](https://help.vtex.com/docs/tutorials/b2b-buyer-portal). If they have the configured [permissions](https://developers.vtex.com/docs/guides/storefront-roles), users can also add new addresses and edit existing ones directly in the checkout experience.

![Address manager](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-en_5.png)

### Multiple delivery options (Multidelivery)

This feature allows buyers to choose different combinations of [shipping options](https://help.vtex.com/docs/tutorials/delivery-options-beta) for each item in the cart, providing more flexibility at checkout.

![Multidelivery](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-en_6.png)

### Accounting fields

[Customizable data fields](https://help.vtex.com/docs/tutorials/accounting-fields) can be set up by the buyer organization to collect administrative or financial information, such as cost center, internal order number (PO), and other control data.

![Accounting fields](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-en_7.png)

### Store pickup

Buyer Portal Checkout enables buyers to locate and select a store for order pickup during checkout. You can search by address or ZIP code, filter by radius, and check item availability in real time for each location.

![Accounting fields](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/checkout/buyer-portal-checkout/buyer-portal-checkout-en_8.png)
