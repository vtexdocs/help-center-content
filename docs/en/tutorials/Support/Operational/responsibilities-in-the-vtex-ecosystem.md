---
title: 'Responsibilities within the VTEX ecosystem'
id: 3vL9aWICDr3WR64DYi1fJ3
status: PUBLISHED
createdAt: 2024-01-31T17:08:24.444Z
updatedAt: 2024-02-16T17:22:16.507Z
publishedAt: 2024-02-16T17:22:16.507Z
firstPublishedAt: 2024-01-31T23:11:13.804Z
contentType: tutorial
productTeam: Billing
author: 1malnhMX0vPThsaJaZMYm2
slugEN: responsibilities-in-the-vtex-ecosystem
locale: en
legacySlug: responsibilities-in-the-vtex-ecosystem
subcategoryId: 1VvCpaa8NCA6a0MK6W6oWg
---

The future of digital commerce is collaborative, and successful partnerships are crucial to successful store operations. When operating a store, doubts often arise about the responsibilities of each player in the ecosystem.

This article outlines the main players' responsibilities in a digital commerce operation to optimize your store's operation and ensure efficient communication between the merchant and VTEX support. Check out the responsibilities in each scenario below:

- [Back-office integrations (ERP/PIM/WMS)](#back-office-integrations-erp-pim-wms)
- [Payment provider integrations](#payment-provider-integrations)
- [Implementation agencies](#implementation-agencies)
- [Marketplace integrations](#marketplace-integrations)

## Back-office integrations (ERP / PIM / WMS)

During the initial setup on VTEX, if your store uses[ external integrations with ERP/PIM/WMS](https://developers.vtex.com/docs/guides/erp-integration-guide), these systems should send your store's products, prices, and inventory to VTEX. Next, you must build a middleware to send and receive information from VTEX based on your store's routine events.

Once the initial product, price, and inventory integration has been set up and the middleware built, the information flow will be as shown in the diagram below.

![back-office-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Support/Operational/responsibilities-in-the-vtex-ecosystem_1.PNG)

During routine operations, responsibilities are divided as follows:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <tr>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Player</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Responsibilities</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>ERP / PIM / WMS</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">Sending the following information to VTEX via integration:
        <ul>
          <li>Changes to product information</li>
          <li>Prices</li>
          <li>Inventory</li>
          <li>Invoice</li>
          <li>Order tracking details</li>
          <li>Order changes</li>
          <li>Cancellations</li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>VTEX</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">Sending the following information to the ERP, based on the store's configuration via <a href="https://developers.vtex.com/docs/guides/orders-feed" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Order Feed</a> or <a href="https://developers.vtex.com/docs/guides/orders-feed" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Hook</a>:
        <ul>
          <li>Notifications of a new order created.</li>
          <li>Notifications of an order's progress.</li>
        </td>
    </tr>
  </tbody>
</table>

## Payment provider integrations

To process payments for orders in a VTEX store, the payment infrastructure responsibilities are divided as follows:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <tr>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Player</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Responsibilities</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Merchant</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Contract payment providers (gateways, acquirers, or subacquirers).</li>
          <li>Contract an anti-fraud solution provider (optional).</li>
          <li>Configure the store with the payment and anti-fraud providers with whom you have established contracts.</li>
          <li>Configure payment methods and conditions in the store based on the specifications of each contract established with payment and anti-fraud providers.</li>
          <li>Manually cancel or refund a payment when the payment provider does not do this automatically or in specific cases where the merchant needs to do it manually.</li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Payment providers (gateways, acquirers, or subacquirers)</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Develop the payment provider integration according to the instructions in<a href="https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word"> Integrating a new payment provider on VTEX</a>.</li>
          <li>Obtain<a href="https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word"> PCI-DSS</a> certification or develop the integration with VTEX using<a href="https://developers.vtex.com/docs/guides/payments-integration-secure-proxy" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word"> Secure Proxy</a> to process payment transactions with sensitive information, such as credit, debit, and co-branded card details.</li>
          <li>Process financial transactions securely and efficiently, which includes:
            <ul>
              <li>Approving or denying payments, following internal policies.</li>
              <li>Settling or refunding payments.</li>
              <li>Acquirer: Processing payments made with credit and debit cards.</li>
              <li>Subacquirer: Enabling payments between acquirers, anti-fraud solution providers, and merchants.</li>
              <li>Sending payment transaction status updates to the VTEX gateway.</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Anti-fraud solution provider</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Conduct risk analysis on transactions involving credit, debit, and co-branded cards to identify fraudulent activities.</li>
          <li>Send analysis information to the VTEX gateway.</li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>VTEX Gateway</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Create payment transactions for new orders.</li>
          <li>Send transaction and order details to partners processing or analyzing payment information (payment and anti-fraud providers).</li>
          <li>Record all the actions during the payment transaction flow, such as creation, approval, cancellation, etc.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

If inconsistencies or errors are detected during the order payment transaction, the merchant must:

1. Contact who is handling the transaction (payment and anti-fraud providers).
2. If the issue remains unresolved, contact [VTEX Support](https://help.vtex.com/en/faq/how-does-vtex-support-work--3kACEfni4m8Yxa1vnf2ebe) providing details of the incident.

## Implementation agencies

With native CMS solutions, merchants often rely on an implementation agency to customize the storefront's layout and customer experience.

VTEX offers the following native CMS options: [Layout](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj#layout) for [Legacy CMS Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) stores, [Site Editor](https://help.vtex.com/en/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) for stores using the [Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework), and [Headless CMS](https://help.vtex.com/en/tutorial/headless-cms-visao-geral--3U5gvhHdQL0jczYH8gjX09) for stores using [FastStore](https://www.faststore.dev/). You can also integrate your external CMS with the VTEX APIs using a [headless](https://developers.vtex.com/docs/guides/headless-commerce) approach.

Issues related to how the content is being displayed to the end user should always be addressed initially with the agency's support. Some examples of these issues are:

* Incorrect or outdated images, titles, or banners.
* Products unavailable on the storefront.
* Blank pages.
* Incorrect or outdated category menu.
* Incorrect or incomplete search or collection results.
* Call-to-action buttons (e.g., Buy, Notify Me, Add to Cart) with unexpected behavior.
* Product prices or shipping rates inconsistent with the information stored on the platform.

If the agency identifies that the problem is with VTEX controls, apps, or native components, contact [VTEX Support](https://help.vtex.com/en/faq/how-does-vtex-support-work--3kACEfni4m8Yxa1vnf2ebe) including all evidence from the agency's investigation.

## External marketplace integrations

VTEX has a native multi-seller architecture that allows VTEX stores to become marketplaces or sellers in other VTEX stores. The platform has native integrations with external marketplaces, allowing you to sell your products without having to write a single line of code. The marketplaces with native integrations can be found in the [Marketplaces and Integrations](https://help.vtex.com/en/tutorial/marketplaces-e-integracoes--5AcBO1t29nhq7rBHas9b6V) tab.

Even so, there may be strategic partner stores for your business that operate outside this native collaborative network. In such cases, VTEX allows developing[ integrations with external marketplaces](https://developers.vtex.com/docs/guides/external-marketplace-integration-guide), where external connectors (hubs) establish the communication between a VTEX store and a non-native external marketplace.

For merchants operating in this scenario, it's important to understand the responsibilities of each player involved in the operation, as detailed below.

>⚠️ The following sections consider a store already integrated with an external marketplace via an external connector. Learn how to integrate your VTEX Catalog with an external connector for the first time, go to the [Catalog Integration](https://developers.vtex.com/docs/guides/external-marketplace-integration-catalog" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word) guide.

### Updating or sending new products and SKUs

Below are the responsibilities involved in updating or sending new products and SKUs to external marketplaces:

| **Player** | **Responsibilities** |
|---|---|
| **VTEX** | Send a notification of a new product or SKU created or updated to the affiliate endpoint provided by the hub and added to the VTEX platform. |
| **Partner connector (integration hub)** | Process the notification and send the updated product or SKU to the marketplace. <br /><br />This process encompasses many steps: checking if this SKU already exists in the marketplace and adding it if necessary, validating if the product is active and associating it with the marketplace's trade policy, running an order simulation to check the SKU's updated price and inventory, etc. |
| **Non-native external marketplace** | Provide the necessary endpoints for the hub to send the updated SKU, log the received SKU, and reply the status to the connector.= |

### Updating or creating new orders

See below the responsibilities involved in updating or creating orders based on the order flow.

1. The **marketplace** provides the products and the checkout for placing orders and notifies the connector when a new order is created.
2. The **connector** creates the order on VTEX.
3. VTEX replies to the connector with the order creation status: Success or Failure. In this step, contact the connector's support if an error occurs while creating the order on VTEX or if the order is created with the **Canceled** status.
4. Once the order is created on VTEX, the responsibility for updating its status in the OMS depends on the process stage:

   * If the order is being handled or invoiced, for example, the **ERP** notifies VTEX.
   * If the order was canceled in the marketplace, it is the **connector**'s responsibility to update the status.

For more information on who is responsible for each step of the order flow in an external marketplace scenario, see [Order flow and status - Seller flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196#seller-flow).

To understand the right support to request in case of issues with updating the order status, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**.
2. Click the desired order to go to the [order details page](https://help.vtex.com/en/tutorial/order-details-page--2Y75n54Cc9VizrlG1N6ZNl).
3. In the **Order History** section, click `View Interactions` (button illustrated below) and check for any error messages.

![view-interactions-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Support/Operational/responsibilities-in-the-vtex-ecosystem_2.png)

If the error message does not provide sufficient information, the merchant can contact [VTEX Support](https://help.vtex.com/en/faq/how-does-vtex-support-work--3kACEfni4m8Yxa1vnf2ebe), providing the interaction screen and order ID as evidence, and our team of experts will help identify the source of the issue.
