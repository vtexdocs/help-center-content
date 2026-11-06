---
title: 'VTEX Sales App: Configuring the checkout-instore-custom.js file'
status: PUBLISHED
createdAt: 2026-10-23T21:43:00.000Z
updatedAt: 2026-10-23T21:43:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: vtex-sales-app-configuring-the-checkout-instore-custom-js-file
locale: en
---

The `checkout-instore-custom.js` file is used to customize **VTEX Sales App** settings. This article describes the properties available in this file and how to configure them. To find the file, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Checkout** or type **Checkout** in the search field.
2. Click the gear icon of the main account where **Sales App** was installed.
3. Click the **Code** tab.
4. In the **Files** section, you'll see the `checkout-instore-custom.js` file.

## Language and locale

- `window.LOCALE_MESSAGES.locale`: Defines the language and locale used in **Sales App**, such as US English (`'en-us'`) or Spanish from Spain (`'es-es'`).

## Configuration by account

- `window.INSTORE_CONFIG_BY_ACCOUNT`: Object that maps stores and accounts to specific settings.
  - **Key:** Store ID and name (example: `"1"` and `"storename"`).
  - `name`: VTEX account name.
- `accounts`: Located inside `INSTORE_CONFIG`, receives the value of `window.INSTORE_CONFIG_BY_ACCOUNT` and associates **Sales App** with the configured stores.

## Authentication

- `auth.oAuthProviderName`: Defines the OAuth authentication provider used to log in to **Sales App** (example: `'Google'`).

## Checkout flow and navigation

- `enableNewCheckout`: Activates the new **Sales App** checkout flow. The default value of this flag is `false`. When the merchant completes the initial setup, this flag is saved as `true` in the store.

  > ⚠️ Don't change the value of `enableNewCheckout`. **Sales App** automatically records this value after the initial setup, and a manual change can disrupt the checkout flow and cause issues when completing orders.

- `enableExplore`: Activates the screen with the **Explore** experience (custom display and offers).

- `initialPage`: Sets the page that opens first after login. Accepted values are:

  | Value              | Route                      | Opens                                                               |
  | :----------------- | :------------------------- | :------------------------------------------------------------------ |
  | `'advertisements'` | `/checkout/advertisements` | Custom display and offers (the **Explore** page) |
  | `'sale'`           | `/sale`                    | Sales flow (deprecated route)                    |
  | `'turn-list'`      | `/turn-list`               | Sales associate tracking                                            |
  | `'b2b'`            | `/b2b`                     | B2B homepage                                                        |

- `pathAfterLogin`: Determines the internal route the user is directed to after logging in (example: `'/sale'`). This flag has been deprecated and replaced by `initialPage`. It still takes precedence over `initialPage`. If the store has `pathAfterLogin` in the file, `initialPage` is ignored.

  > ⚠️ Use `initialPage` instead of `pathAfterLogin`.

- `topbarTitle`: Defines the text displayed in the **Sales App** top bar (example: `'Store name'`).

- `enableChangePrice`: When set to `true`, allows the sales associate to manually change the price in **Sales App**. When `false`, it doesn't allow it. It's related to the `manualPrice` field in the [OrderForm](https://developers.vtex.com/docs/guides/orderform-fields).

## Sales and tracking

- `sales.enabled`: Activates the sales feature in **Sales App**.

- `salesAssociateTracking.enabled`: Activates sales tracking by sales associate, so orders are associated with a sales associate code.

  > ⚠️ Both `sales.enabled` and `salesAssociateTracking.enabled` need to be set to `true` for **Sales App** to work correctly.

- `salesPerformance.enabled`: When set to `true`, displays the store's performance monitor in the new **Sales App** menu. When `false`, it doesn't display it.

- `enableStorePerformance`: When set to `true`, displays the store's performance in the sidebar of the previous version of **Sales App**. When `false`, it doesn't display it. This flag is independent of `salesPerformance.enabled`.

- `showItemOriginSeller`: When set to `true`, displays the text **partner store** on items sold by an external seller. When `false`, it doesn't display it.

## Product search (`search`)

- `search.vtexSearch`: When set to `true`, uses [**Intelligent Search**](/en/docs/tutorials/intelligent-search-overview). When `false` or absent from the file, uses [**VTEX Search (Legacy)**](/en/docs/tutorials/how-does-vtex-search-legacy-work). Faceted filters (`search.filtersEnabled`) and regionalization (`search.regionalizationEnabled`) depend on this flag being set to `true`.
- `search.filtersEnabled`: Activates faceted filters in the search interface. It only takes effect when `search.vtexSearch` is set to `true`.
- `search.regionalizationEnabled`: Activates [regionalized search](/en/docs/tutorials/regionalization). Only takes effect when `search.vtexSearch` is set to `true`.
- `search.alternateIdRegex`: Regular expression (regex) used to recognize alternative SKU IDs, such as barcodes.

## Inventory and out-of-stock sales

- `sellWithoutStockInHands`: Allows selling products without local inventory in stores configured for local inventory sales (**On Hands**).
- `showStock`: When set to `true`, displays the quantity in stock on the product and search screens. When `false`, it doesn't display it.

## Attachments and services

- `enableAttachments`: Activates services and attachments in the sales flow (example: gift packaging).
- `giftPackagingName`: Name displayed for the service or attachment (example: `'packaging'`).

## Social Selling

- `socialShare.vendorType`: Determines the sales associate identification in [**Social Selling**](/en/docs/tracks/sharing-shopping-cart-using-vtex-sales-app-social-selling) links (example: `'code'` to use the sales associate code).
- `socialShare.hostName`: Defines the site address that appears in the link shared with the customer. **Sales App** uses, in this order, the value set in this property (`socialShare.hostName`), the address already saved for sharing (`share.hostName`), and lastly, the address of the page the sales associate is on (`window.location.host`).

## Sales associate code (`noteAsVendorCode`)

- `noteAsVendorCode.type`: Defines the field type for the sales associate code. Only the value `'select'` creates a selection list. The other values display an open text field. Possible values are:

  | Value      | Result                                                                                                                                                                                                                  |
  | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `'select'` | Selection list with the sales associates from the store where the sales associate is logged in. The list is populated by `getVendorsByStore` based on this sales associate's `storeId`. |
  | `'input'`  | Text field (`TextBox`).                                                                                                                                                              |
  | `'text'`   | Text field (`TextBox`).                                                                                                                                                              |

- `noteAsVendorCode.skipValidation`: Controls whether the sales associate code is required and whether it's checked against [Master Data](/en/docs/tutorials/master-data).

  | Value                      | Result                                                                                                           |
  | :------------------------- | :------------------------------------------------------------------------------------------------------------- |
  | `false`                    | Makes the field required.                                                                        |
  | `true`                     | Saves the code without checking **Master Data**.                                                 |
  | Flag missing from the file | The field isn't required, but **Sales App** still validates whether the entered code is correct. |

- `noteAsVendorCode.autofill`: Defines whether the sales associate code is autocompleted in the shared link. This flag only works if `socialShare` is set. See [Social Selling](#social-selling).

  | Value                      | Result                                                                     |
  | :------------------------- | :------------------------------------------------------------------------- |
  | `false`                    | Doesn't autocomplete the code.                             |
  | `true`                     | Autocompletes the sales associate code in the shared link. |
  | Flag missing from the file | The default value is `true`.                               |

- `noteAsVendorCode.mask`: Regular expression (regex) that validates the sales associate code format.

  | Value                      | Result                                                                                                                                     |
  | :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
  | Configured regex           | Validates the format of the sales associate code. It's ignored when `noteAsVendorCode.type` is `'select'`. |
  | Flag missing from the file | The regular expression (regex) remains empty, and the field accepts any format.                         |

Below is an example of how to configure `noteAsVendorCode`:

```js
noteAsVendorCode: {
  type: 'input',
  mask: '^LL.{0,8}$',
  skipValidation: true,
  autofill: false,
}
```

## Anonymous customer

- `allowAnonymousUser`: When set to `true`, allows completing orders without identifying the customer. When `false`, it doesn't allow it. Used for local inventory sales (**On Hands**).

## Customer registration and profile

- `customerProfile.isCorporate`: Defines whether the business sales option is available in the customer registration. Besides `true` and `false`, the flag also accepts the object `{ optional: true }`.

  | Value                | Result                                                                                |
  | :------------------- | :------------------------------------------------------------------------------------ |
  | `false`              | Deactivates business sales.                                           |
  | `true`               | Requires identifying the sale as a business sale.                     |
  | `{ optional: true }` | Keeps business sales available, but completing the field is optional. |

## Customer identification types

- `enableIdentificationTypes`: Defines the customer identification types that are available in **Sales App**. Set each property to `true` to activate the method, or to `false` to deactivate it.
  - `QRCode`: When set to `true`, allows the customer to identify themselves using the QR code. When `false`, it doesn't allow it.
  - `CPF`: When set to `true`, allows the customer to identify themselves using a CPF (Brazil). When `false`, it doesn't allow it.
  - `Email`: When set to `true`, allows the customer to identify themselves using their email. When `false`, it doesn't allow it.
  - `Phone`: When set to `true`, allows the customer to identify themselves using their phone number. When `false`, it doesn't allow it.

Below is an example of how to configure `enableIdentificationTypes`:

```js
enableIdentificationTypes: {
  QRCode: false,
  CPF: false,
  Email: true,
  Phone: false,
}
```

## Payments

- `challengeDrivenPaymentWorkflow`: Activates a payment flow with additional validations, such as [digital wallets (ewallets)](/en/docs/tracks/digital-wallet-e-wallet), [Payment Apps](https://developers.vtex.com/docs/guides/payments-integration-payment-app), and [POS (Point of Sale)](https://developers.vtex.com/docs/guides/payments-integration-ppp-applied-to-pos).
- `payments.filters`: Lists the IDs of the payment methods (`paymentSystemId`) that can appear in the **Sales App** checkout (example: `'1'`, `'4'`, `'125'`, `'202'`, `'44'`, `'45'`, `'207'`, `'208'`, `'209'`).

## Order cancellation

- `isCancelOrderAlwaysVisible`: When set to `true`, keeps the order cancellation option always visible in the interface. When `false`, it doesn't keep it visible.

## Devices and printer

- `printedOrderExtraText`: Additional text printed on the order receipt.
- `enablePrintButton`: When set to `true`, displays the print button on the order. When `false`, it doesn't display it. The default value is `true`.
