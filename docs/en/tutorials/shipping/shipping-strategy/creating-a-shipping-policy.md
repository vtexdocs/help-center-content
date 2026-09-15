---
title: 'Creating a shipping policy'
id: 66rJO4LKBdyMJOH6Z3dsaT
status: PUBLISHED
createdAt: 2024-01-30T21:08:12.106Z
updatedAt: 2024-06-11T19:05:19.723Z
publishedAt: 2024-06-11T19:05:19.723Z
firstPublishedAt: 2024-01-31T01:09:33.011Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: creating-a-shipping-policy
legacySlug: criar-uma-politica-de-envio
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

[Shipping policy](/en/docs/tutorials/shipping-policy) is a set of rules and settings that define the shipping options displayed to customers at checkout. The relationship between shipping policy, [warehouse](/en/docs/tutorials/warehouse), and [loading dock](/en/docs/tutorials/loading-dock) defines your [shipping strategy](/en/docs/tutorials/shipping-strategy) in VTEX.

This article explains how to create a shipping policy through the VTEX Admin. If you want to manage your shipping policies, see the article [Managing shipping policies](/en/docs/tutorials/managing-shipping-policies).

To create a shipping policy, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping strategy > Shipping policies**, or type **Shipping strategy** in the search bar at the top of the page.
2. Click the `Create shipping policy` button.
3. Complete the fields displayed as described below, and click `Save changes`.

- **Active/Inactive**: Activates or deactivates the shipping policy.
- **Name**: Internal name of the shipping policy.
- **ID**: Internal identifier also used for integrators. You must complete this field only with letters and numbers; don't use spaces. If the field is left blank, an ID will be created automatically.
- **[Shipping method](/en/docs/tutorials/how-does-the-type-of-delivery-work)**: Name of the delivery type  used to differentiate delivery services. It will be displayed for customers at checkout. For example, express vs. standard shipping.
- **[Upload shipping rates](/en/docs/tutorials/shipping-rate-template)**: This is where you upload the spreadsheet with the shipping rates and delivery time frames based on the shipping policy.
- **[Package dimensions](/en/docs/tutorials/how-does-stacking-work):**
  - **Sum of all dimensions:** Size limit of the package. It considers the sum of the lengths of all edges. If this limit is exceeded, the order will be split into two or more packages, or the delivery won't be made. This information is given by the carrier when the contract is signed.
  - **Largest edge:** Size limit of the largest edge of the package. If this limit is exceeded, the order will be split into two or more packages or the delivery will not be made.
  - **[Cubic weight factor](/en/docs/tutorials/understanding-the-cubic-weight-factor)**: The factor that will be used to calculate the dimensional weight of the package. The sum of measures divided by the cubic factor.
  - **Minimum weight factor:** Uses the cubic weight only if it exceeds this value. If this is the case, the cubic weight will be used to calculate the shipping rate.
- **Weekends and holidays:** Days on which deliveries can be made. Click the toggle switches to enable or disable delivery in the following scenarios: `Saturday delivery`, `Sunday delivery`, `Holiday delivery`.

> ⚠️ To offer shipping on weekends, you must check the `Saturday shipping` and `Sunday shipping` options and include Saturday and Sunday in the [Business hours](/docs/tutorials/carrier-working-hours) settings of the shipping policy. If the day is set in the business hours but the corresponding option isn't active, weekend delivery won't be offered to the customer at checkout.

- **[Active modals](/en/docs/tutorials/how-does-the-modal-work):** Specifications for products that require special delivery. They indicate product shipping limitations covered by the shipping policy. Check the boxes to enable delivery for the following items: `chemicals`, `electronics`, `furniture`, `glass`, `liquids`, `mattresses`, `refrigerated products`, `tires`, `appliances`, and `firearms`.
- **Package items:** Specification for the price and number of items in the package:
  - **Minimum value:** Minimum shipment price accepted by the shipping policy to make the delivery.
  - **Minimum of items:** Minimum multiple of the number of items accepted by the carrier. For example, if it's set to **3**, it means the carrier only makes deliveries in item quantities that are multiples of three (3, 6, 9, 21...).
  - **Maximum value:** Maximum shipment price accepted by the shipping policy to make the delivery.
- **Link pickup points:** Click the toggle switch to view pickup point options. Choose one of the options and complete it by clicking its dropdown menu. You can select between `Pickup points tags`, `Pickup points names`, or `Import pickup point from sellers` previously configured in your store.
- **[Business hours:](/en/docs/tutorials/carrier-working-hours)** Time frames in which the carrier ships items to customers and the times at which it picks up items for delivery, as specified in the shipping policy. These settings influence the calculation of delivery time.
  - **Shipping window:** Where you add the carrier's business hours, meaning the times it accepts orders. To configure it, select the `Shipping window` card:
    - `Accept purchases outside working hours`: Activates or deactivates the option to receive orders outside working hours. When this option is enabled, and an order is placed outside working hours, the time until the next available shipping window will be added to the total delivery time.
    - Select the `Day of the week` and complete the `Start time` and `End time`.
    - To add more days of the week, click `Add shipping window`.
  - **Pickup time:** Here, you can add the times when the carrier will pick up packages from your warehouse or distribution center for delivery to end customers. If an order is placed after the pickup time, the time until the next available pickup time will be added to the total delivery time. If an order is placed after the pickup time, the time until the next available pickup time will be added to the total delivery time.
    - Select the `Day of the week` and the `Pickup time`.
    - To add more days of the week, click `Add pickup time`.

> ⚠️ The **Shipping window** and the **Pickup time** are mutually exclusive options, as the same period can't be simultaneously assigned to different actions.

- **[Scheduled delivery](/en/docs/tutorials/scheduled-delivery):** This feature can be enabled if the shipping policy offers scheduled delivery. Here, you must add the delivery windows that will be displayed to customers at checkout. To use this feature, click the toggle switch and complete the following fields:
  - **Maximum delivery time:** Maximum number of days to deliver a product.
  - **Delivery windows:** Time frames during which the carrier delivers packages to customers. Set the days of the week, the `Start time` and `End time`, and any additional rates. Click `Add delivery window` to set more delivery windows.
  - **Configure delivery capacity:** Allows you to limit the number of items or orders that can be delivered in each delivery window. This feature can be activated or not, and whether it's used or not doesn't affect the platform's operation. To learn more about these features, see the articles [Scheduled delivery](/en/docs/tutorials/scheduled-delivery) and [Managing delivery capacity](/en/docs/tutorials/managing-delivery-capacity). If you activate this feature, you must:
    - Choose a delivery capacity unit (`items` or `orders`).
    - Check the shipping windows.
    - Set the delivery capacity. We recommend carefully choosing the delivery capacity unit and the maximum number of items, as the system doesn't consider the number of items in the cart when calculating delivery window availability. So if a delivery window still has capacity for 2 items and your customer is buying 4, they can still select that shipping window.

      Note that shipping windows become unavailable to customers once they've reached the `delivery capacity` limit. To make a delivery window available to customers again, you must increase the number of items/orders in its delivery capacity.

### Learn more

- [Shipping policy](/en/docs/tutorials/shipping-policy)
- [Managing shipping policies](/en/docs/tutorials/managing-shipping-policies)
- [Shipping strategy](/en/docs/tutorials/shipping-strategy)
