---
title: 'VTEX Pick and Pack: Last Mile'
createdAt: 2023-04-10T16:01:14.613Z
updatedAt: 2026-10-08T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-last-mile
locale: en
hidden: false
---

> ℹ️ If you're interested in adopting this feature for your business, complete our [form](https://www.vtex.com/en-us/get-started/) and enter the desired product name in the `Comments` field.

**Last Mile** is the VTEX Admin page that tracks the final fulfillment stage of orders processed by [VTEX Pick and Pack](/docs/tutorials/vtex-pick-and-pack): shipping to the customer by integrated carriers and in-store pickup.

Each movement is represented by a **service**, the record that brings together the origin, destination, packages, and status history of one or more orders. The page is organized into two tabs, one for each service type:

- [Deliveries](#deliveries)
- [In-store pickup](#in-store-pickup)

In these tabs, you can do the following:

- [Create service](#create-service)
- [View service details](#view-service-details)
- [Confirm in-store pickup](#confirm-in-store-pickup)

The module also has the following configuration sections:

- [Integrations](#integrations)
- [Settings](#settings)

## Deliveries

The **Deliveries** tab lists services assigned to carriers, along with the status updates they return until the order is delivered to the customer.

![vtex-pick-and-pack-last-mile_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_1.png)

The table displays the following information:

| Table field        | Description                                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Carrier            | [Carrier](/en/docs/tutorials/carriers-on-vtex) handling shipping, with the respective logo and the service identifier in the carrier. |
| Service ID         | Service identification number in Last Mile.                                                                                           |
| Tags               | Tags associated with the service.                                                                                                     |
| Origin/Destination | Shipment origin and destination locations.                                                                                            |
| Delivery date      | Expected delivery date for the order.                                                                                                 |
| Status             | Current stage of the service.                                                                                                         |

To find a specific service, use the search bar at the top of the page. You can also refine the view with the following filters:

- **Delivery date:** Range of expected delivery dates.
- **Carrier:** Carrier handling the delivery.
- **Status:** Current stage of the service. You can select more than one status.
- **Fulfillment locations:** Store or distribution center where the service originates.
- **Payment methods:** [Payment method](/docs/tutorials/difference-between-payment-methods-and-payment-conditions) used for the order.

To deselect a filter, open it and click `Clear`.

### Service status

The available statuses depend on the carrier integration configuration. The following table shows the statuses that can be applied to services in both tabs. The filters display only the statuses sent by the carrier. For example, a carrier may only submit the **Created** and **Delivered** statuses.

| Status     | Description                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Created    | Internal data validation status, assigned when the service is created.                                                                                       |
| Pending    | The system sent the information to the carrier, and the service was created on their end.                                                                    |
| Assigned   | The carrier assigned a courier to the service.                                                                                                               |
| Picked     | The carrier collected the packages at the origin.                                                                                                            |
| On the way | Packages are in transit to the destination.                                                                                                                  |
| Delivered  | The order was delivered to the customer at the provided address, at a [pickup point](/en/docs/tutorials/pickup-points), or at the store for in-store pickup. |
| Incident   | The carrier reported an issue during transit.                                                                                                                |
| On hold    | The carrier temporarily suspended the service, for example, due to a vehicle breakdown.                                                                      |
| Returned   | The order was returned to its origin. For example, the customer wasn't found or refused the order.                                           |
| Transfer   | The service corresponds to a transfer of items between fulfillment locations.                                                                                |
| Canceled   | The service was canceled.                                                                                                                                    |

> ℹ️ In shipping services, statuses are updated by the carrier via the [Pick and Pack Last Mile Protocol API](https://developers.vtex.com/docs/api-reference/pick-and-pack-protocol-api). For pickup services, the status is updated by the store operator in the VTEX Admin.

## In-store pickup

The In-store pickup tab lists orders that customers will pick up in-store, and pickup is confirmed there.

![vtex-pick-and-pack-last-mile_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_2.png)

The table displays the following information:

| Table field | Description                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| Order ID    | Order identification number.                                                              |
| Customer    | Name of the customer who placed the order.                                                |
| Pickup date | Expected date and time for the customer to pick up the order.                             |
| Store       | Store where the order will be picked up.                                                  |
| Status      | Current status of the service, as defined in the [service status](#service-status) table. |

To find a specific order, use the search bar at the top of the page. You can also refine the view with the **Pickup date**, **Status**, and **Fulfillment location** filters.

## Creating a service

Services can be created automatically or manually:

- **Automatically:** Configure a rule in the **Automation > Shipping services** tab of the Pick and Pack [Settings](/en/docs/tutorials/vtex-pick-and-pack-settings) to create the service when the defined conditions are met.
- **Manually:** Create the service on the **Last Mile** page.

To create a service manually, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Last Mile > Shipping services**.

2. Click `Create service`.

3. In **Select a service type**, select the service type:
   - **Delivery:** The order will be delivered by a carrier to the customer's address or at a [pickup point](/en/docs/tutorials/pickup-points).
   - **Pickup:** The order will be picked up by the customer at a store.

4. Click `Continue`.

   ![vtex-pick-and-pack-last-mile_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_3.png)

5. Select the orders that will be part of the service. The list displays only the orders that are eligible for the selected service type, and it includes the following information:

   - **Order ID:** Identifier and created date of the order.
   - **Items:** Number of items and units in the order.
   - **Shipping:** Order shipping method, `Delivery to customer` or `In-store pickup`.
   - **Status:** The step of the order in the VTEX Pick and Pack flow.
   - **Fulfillment location:** Store or distribution center responsible for the order.

   The selected orders appear under **Selected orders**, and the **Summary** block consolidates the number of orders, items, and fulfillment locations. To find an order, use the search bar or the **Status**, **Fulfillment locations**, and date filters — which correspond to **Delivery date** for shipping services and **Pickup date** for pickup services.

   ![vtex-pick-and-pack-last-mile_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_4.png)

6. Click `Continue`.

7. Check the packages for every order, with the items, quantity, and dimensions of each.

   ![vtex-pick-and-pack-last-mile_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_5.png)

8. Click `Continue`.

9. Define the origin and destination information for the service. This step varies depending on the type of service selected, as described in [Pickup services](#pickup-services) and [Shipping services](#shipping-services).

10. Click `Create service`.

At any step, you can click `Back` to review the information you've already completed. Throughout the process, the side summary accumulates the selected information, such as orders, packages, addresses, and carriers.

### Pickup services

For pickup services:

1. In the **Create pickup service** window, select the **Fulfillment location** where the order will be available and enter the **Estimated pickup date**. The corresponding address appears in the side summary, under **Pickup**.
2. Click `Continue`.
3. Click `Create service`.

![vtex-pick-and-pack-last-mile_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_6.png)

> ⚠️ In-store pickup doesn't use external carriers or transportation management systems (TMS), since the customer picks up the order directly at the store. These services use the `Manual` integration, which records the movement without sending a request to a carrier. If the `Manual` integration isn't active, you can't complete the creation of a pickup service.

### Shipping services

In shipping services:

1. In **Pickup information**, select the **Fulfillment location** and enter the **Expected pickup date**. The `Create from order` option sets the origin using the order's information.

   ![vtex-pick-and-pack-last-mile_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_7.png)

2. Click `Continue`.

3. In **Shipping information**, check the destination and enter the **Expected delivery date**. The destination address appears in the side summary, under **Ship to**.

   ![vtex-pick-and-pack-last-mile_8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_8.png)

4. Click `Continue`.

5. Select the **Carrier** that will handle shipping from the active integrations. The selected carrier appears in the side summary.

6. Click `Create service`.

## Viewing service details

To view more information about a service, click the corresponding row in the table. Details are displayed in a panel, organized in the **Details**, **Tracking**, **Attachments**, and **Notes** tabs.

![vtex-pick-and-pack-last-mile_9](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_9.png)

At the top of the panel, the order identifier and the current service status are displayed. The vertical ellipsis menu on the right allows you to download the tracking label generated by Last Mile. The label template is standard and can't be customized.

The panel's content varies depending on the type of service and the information provided by the integration. The panel is organized into the **Details**, **Tracking**, **Attachments**, and **Notes** tabs.

The **Details** tab includes the following information:

- **Order ID:** Order identification number.
- **Buyer information:** Customer name, phone number, and email address.
- **Pickup details:** Expected date and time range for pickup services.
- **Store:** Pickup store, with the full address, in pickup services.
- **Pickup and shipping information:** Addresses and dates for each stage in shipping services.
- **Package(s):** Service packages, with the packaging type and item quantity. Click the package to view the items it contains.
- **Timeline:** Service history, with the date, time, and author of each event, from creation to the last status update.

The **Tracking** tab, when available, contains additional tracking information sent by the integration.

The **Attachments** tab allows you to view labels and proof-of-delivery photos sent by the integration, when available.

The **Notes** tab collects route alerts and messages sent in real time by the integration, when available.

## Confirming in-store pickup

For orders with in-store pickup, Last Mile generates a six-digit code that authenticates the hand-off to the customer. The flow works as follows:

1. The order is picked and packed, and the pickup service is created.
2. VTEX Pick and Pack sends the customer an email with the pickup code.
3. The customer goes to the store and provides the code.
4. The store operator validates the code in the service and completes the pickup.
5. The service moves to the `Delivered` status, with the confirmation date recorded. From this event, the order invoice can be triggered automatically, depending on the configured integration.

The email is sent by [Message Center](/en/docs/tutorials/understanding-the-message-center), the VTEX transactional email framework, using a dedicated template for the pickup code. In addition to the code, the message includes the order ID, the pickup store, and the expected pickup date.

> ℹ️ The email template and sender are configured per account. In operations with multiple accounts, such as white label sellers, you need to configure the template in each one of them. To learn how to customize the message's content and layout, see [Transactional email templates](/en/docs/tutorials/order-transactional-email-templates).

### Sending a new code by email

If the customer didn't receive the email or no longer has access to it, you can send a new code from the service.

To send a new code, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Last Mile > Shipping services**.
2. Click the **In-store pickup** tab.
3. Click the desired order.
4. At the bottom of the details panel, click `Send new code via email`.

The `New code sent to customer email` message confirms that the new code was sent to the customer's email.

![vtex-pick-and-pack-last-mile_10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_10.png)

There's a minimum interval between codes. The option is unavailable until the end of the interval, and the footer displays a count in seconds until the next send is allowed, formatted as `Retry in {second}s`. This restriction can't be bypassed and it's meant to prevent sending excessive messages to the customer.

![vtex-pick-and-pack-last-mile_11](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_11.png)

### Validating the code and completing the pickup

To confirm order pickup, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Last Mile > Shipping services**.

2. Click the **In-store pickup** tab.

3. Click the desired order.

4. At the bottom of the details panel, click `Start handoff`.

5. On the **Enter pickup code** screen, enter the six-digit code provided by the customer.

   ![vtex-pick-and-pack-last-mile_12](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_12.png)

6. Click `Complete handoff`.

To return to the details panel without confirming the pickup, click `Back to details`.

If the code is incorrect, the screen displays an error and allows another attempt. After confirmation, the panel shows the message `Pickup completed`, the service's status changes to `Delivered`, and the confirmation date is recorded in the **Timeline**.

![vtex-pick-and-pack-last-mile_13](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_13.png)

> ❗ The pickup code is sensitive data: it's the proof that the order was delivered to the right person. Share the code only with the customer who placed the order.

## Integrations

In **Shipping > Last Mile > Integrations**, you add and activate the companies that can receive Last Mile services. Integrations are organized into two groups:

- **Carriers:** Companies that handle direct delivery. This group includes the `Manual` integration used for in-store pickup services.
- **Brokers:** Brokers that aggregate multiple carriers, giving you access to all of them through a single integration.

Each card displays the company name, the countries served, and the integration status, which can be `Active` or `Inactive`. Only active integrations can be selected when creating a service.

![vtex-pick-and-pack-last-mile_14](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_14.png)

To add an integration, follow these steps:

1. In the VTEX Admin, go to **Shipping > Last Mile > Integrations**.

2. Click `Add integration`.

3. In the **Add Integration** window, select the desired company. Companies with an existing integration in the account show as unavailable for selection.

   ![vtex-pick-and-pack-last-mile_15](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_15.png)

4. Click `Continue`.

5. Enable the **Active** option and complete the configuration fields.

   > ℹ️ Each company has its own configuration fields, and some information must be obtained directly from the company. If needed, contact the carrier's support.

   > ℹ️ Some integrations require sending credentials to VTEX. In such cases, contact [VTEX Support](https://help.vtex.com/docs/tutorials/opening-tickets-to-vtex-support) to receive guidance on how to submit the required information.

   ![vtex-pick-and-pack-last-mile_16](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_16.png)

6. Click `Create`.

To edit an existing integration, click the corresponding card, make the desired changes, and click `Update`.

> ℹ️ To integrate a carrier that isn't on the list, see the [Pick and Pack Last Mile Protocol API](https://developers.vtex.com/docs/api-reference/pick-and-pack-protocol-api) and the [VTEX Pick and Pack Carriers Integration Protocol](https://developers.vtex.com/docs/guides/vtex-pick-and-pack-carriers-integration-protocol) guide.

## Last Mile settings

In **Shipping > Last Mile > Settings**, under the **Information > General** section, you define the store location and contact information used in shipping services.

![vtex-pick-and-pack-last-mile_17](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_17.png)

In **Store location**, enter the country, state, city, postal code, street, and time zone of the store. You can also use the **Find an address** field to locate the address and complete the fields automatically, including the latitude and longitude. In **Contact information**, enter the name and phone number of the assigned contact. Click `Save` to save the changes.

> ⚠️ The Last Mile mobile app, intended for the store's own fleet couriers, was discontinued in 2024. The settings related to own-fleet delivery are no longer in use, and delivery tracking depends on integrated carriers.

## Learn more

- [VTEX Pick and Pack](/en/docs/tutorials/vtex-pick-and-pack)
- [VTEX Pick and Pack: Orders](https://help.vtex.com/docs/tutorials/vtex-pick-and-pack-orders)
- [VTEX Pick and Pack: Service orders](/en/docs/tutorials/vtex-pick-and-pack-worksheets)
- [VTEX Pick and Pack: Settings](/en/docs/tutorials/vtex-pick-and-pack-settings)
- [VTEX Pick and Pack: Insights](/en/docs/tutorials/vtex-pick-and-pack-insights)
- [Order flow and status](/en/docs/tutorials/order-flow-and-status)