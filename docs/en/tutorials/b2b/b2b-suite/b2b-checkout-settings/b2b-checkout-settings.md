---
title: 'B2B Checkout Settings'
id: u7wG1SjmeCqXCSF2UsVok
status: PUBLISHED
createdAt: 2024-07-26T14:09:31.973Z
updatedAt: 2024-07-26T19:06:26.485Z
publishedAt: 2024-07-26T19:06:26.485Z
firstPublishedAt: 2024-07-26T18:46:07.935Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: b2b-checkout-settings
legacySlug: b2b-checkout-settings
locale: en
subcategoryId: 6sgdAY3pCuZ7qNws6gnzDX
---

The **B2B Checkout Settings** app is part of the VTEX solution [B2B Suite](/en/docs/tutorials/b2b-suite-overview), a group of apps that helps stores manage organizations, roles, and storefront permissions, in addition to checkout settings for B2B business relationships.

B2B (business-to-business) transactions are more complex than B2C (business-to-consumer) transactions. B2B companies often deal with:

- Large volume orders.
- Customized contracts.
- Specific payment conditions.
- A diverse range of clients.

In B2B commerce, you need to provide custom options at checkout, which may include:

- Specific payment methods for each organization or cost center.
- Preset addresses.
- A field for entering the purchase order number.
- Option for creating an order quote before actually completing the purchase.

The **B2B Checkout Settings** app works together with other [B2B Suite](/en/tutorial/b2b-suite-visao-geral--5eG6UfveWrai7looK0kVG3#aplicativo-configuracoes-de-checkout-b2b) apps to extend the checkout experience for users that belong to an organization.

## Checkout user roles
This app automatically checks the role of users that belong to an organization and communicates with the [B2B Organizations](/en/tutorial/b2b-suite-overview--5eG6UfveWrai7looK0kVG3#aplicativo-organizacoes-b2b) app. It also confirms if the user has the required [permissions](/en/docs/tutorials/license-manager-resources) to access the checkout by interacting with the [*Storefront Permissions*](/en/docs/tutorials/permissions-management-in-b2b-suite) app.

By default, any user with a role that allows storefront access can access the checkout, except those who have an organization buyer role. If a user tries to go to checkout without the required permission, they will see a "You don't have access to the checkout" notification message.

## Cost center addresses
The **B2B Checkout Settings** app communicates with the [B2B Organizations](/en/tutorial/b2b-suite-visao-geral--5eG6UfveWrai7looK0kVG3#aplicativo-organizacoes-b2b) app and automatically lists the cost center addresses that are linked to the user at checkout.

## Purchase order number field
A purchase order (PO) is a business agreement between a buyer company and a B2B store that authorizes payment for products or services that will be delivered in the future within a specific period.

Having a purchase order number allows B2B customers to pay for authorized purchases using that number. A purchase order is authorized and issued in advance by the company that is buying.

**B2B Checkout Settings** allows you to enable an optional field — reference or purchase order number — where customers can enter that information during checkout.

## Custom checkout settings for B2B
B2B stores require specific checkout customizations. **B2B Checkout Settings** provides a custom checkout page that is ideal for this use case. This feature allows you to customize your checkout page to meet store needs.

The section below describes how to configure the B2B Checkout Settings app.

### Configuring the B2B Checkout Settings app
Follow the steps below to customize your store checkout:

<ol start="1">
<li>In the VTEX Admin, go to **Store Settings > Storefront > B2B Checkout Settings**, or type **B2B Checkout Settings** in the search bar at the top of the page.</li>
<li>When you enable `Show purchase order (PO) number field`, the checkout page will include a field for entering the purchase order number during the purchase process.</li>
<li>When you enable `Show Create a Quote button`, the checkout page will include a `Create Quote` button that allows creating a budget using the current cart items.</li>
</ol>

> ℹ️ You should only enable the `Create Quote` button if the Order Quote app is installed in your store. For more information, check [B2B Quotes & Carts](https://developers.vtex.com/docs/apps/vtex.b2b-quotes).

<ol start="4">
<li>Click `Save`.</li>
</ol>
