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
legacySlug: creating-a-shipping-policy
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

[Shipping policy](/en/docs/tutorials/shipping-policy) is a set of rules and settings that define the shipping options displayed to customers at checkout. The relationship between shipping policy,[warehouse](/en/docs/tutorials/warehouse), and [loading dock](/en/docs/tutorials/loading-dock) makes up your [shipping strategy](/en/docs/tutorials/shipping-strategy) on VTEX.

This article explains how to create a shipping policy via VTEX Admin. If you wish to manage your shipping policies, see the article [Managing shipping policies](/en/docs/tutorials/managing-shipping-policies).

To create a shipping policy, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy > Shipping Policies**, or type **Shipping Strategy** in the search bar at the top of the page. 
2. Click the `Create shipping policy` button.
3. Fill in the fields on the screen as described below, and click `Save changes`.

*   **Active/Inactive**: enables or disables the shipping policy.
*   **Name**: the internal name of the shipping policy.
*   **ID**: the internal identifier also used for integrators. You must fill in this field only with letters and numbers, do not use spaces. If it is not filled in, an ID will be created automatically.
*   **[Shipping method](/en/docs/tutorials/how-does-the-type-of-delivery-work)**: the delivery type,  which is used to differentiate delivery services. It will be displayed for customers at checkout. For example, express vs. standard shipping.
*   **[Upload shipping rates](/en/docs/tutorials/shipping-rate-template)**: this is where you upload the spreadsheet with the shipping rates and delivery time frames based on the shipping policy.
*   **[Package dimensions](/en/docs/tutorials/how-does-stacking-work):**
    *   **Sum of all dimensions:** size limit of the package. It considers the sum of the lengths of all edges of the box. If this limit is exceeded, the order will be split into two or more packages or the delivery will not be made. This information is given by the carrier when the contract is signed.
    *   **Largest edge:** size limit of the largest edge of the package. If this limit is exceeded, the order will be split into two or more packages or the delivery will not be made.
    *   **[Cubic weight factor](/en/docs/tutorials/understanding-the-cubic-weight-factor)**: the factor that will be used to calculate the dimensional weight of the package. The sum of measures divided by the cubic factor.
    *   **Minimum weight factor:** use the cubic weight only if it exceeds this value. If this is the case, the cubic weight will be considered for calculating the shipping rate.
*   **Weekends and holidays:** days on which deliveries can be made. Click the toggles to enable or disable delivery in the following scenarios: `Saturday Delivery`, `Sunday Delivery`, `Holiday Delivery`.
*   **[Active modals](/en/docs/tutorials/how-does-the-modal-work):** specifications for products that require special delivery. They indicate product shipping limitations covered by the shipping policy. Check the boxes to enable delivery in the following scenarios: `chemicals`, `electronics`, `furniture`, `glass`, `liquids`, `mattresses`, `refrigerated products`, `tires`,`appliances`, and `firearms`.
*   **Package items:** specification of the price and number of items in the package.
    *    **Minimum value:** minimum shipment price accepted by the shipping policy to make the delivery.
    *   **Minimum of Items:** minimum multiple of the quantity of items accepted by the carrier. For example, if the value is **3**, it means that the carrier only ships items with quantities multiple of three (3, 6, 9, 21...).
    *   **Maximum value:** the maximum shipment price accepted by the shipping policy to make the delivery.
*   **Link pickup points:** Click the toggle to view the pickup point options. Choose one of the options and fill it in by clicking on its dropdown menu. You can select between `Pickup points tags`, `Pickup points names`, or `Import sellers' pickup point` that have been previously configured in your store.
*   **[Business Hours:](/en/docs/tutorials/carrier-working-hours)** the time frames in which the carrier ships items to customers and the times at which it picks up items for delivery, as specified in the shipping policy. These settings influence the calculation of delivery time.
    *    **Shipping Window:** here you can add the time frames in which the carrier ships items to customers. To configure it, select the `Shipping Window` card.
        *    `Accept purchases outside working hours`: click the toggle button to enable or disable the option to receive orders outside working hours. When this option is enabled and an order is placed outside working hours, the time until the next available shipping window will be added to the total delivery time.
        *   Select the `Day of the week`, the `Start time`, and the `End time`.
        *   To add more days of the week, click on `Add shipping window`.
    *    **Pickup Time:** here you can add the times at which the carrier will pick up packages from your warehouse or distribution center to send them to end customers. If an order is placed after the pickup time, the time until the next available pickup time will be added to the total delivery time.
        *   Select the `Day of the week` and the `Pickup time`.
        *   To add more days of the week, click on `Add pickup time`.

> ⚠️ The **Shipping Window** and **Pickup Time** are options that exclude each other since a period cannot simultaneously be allocated to different actions. 

*   **[Scheduled delivery](/en/docs/tutorials/scheduled-delivery)**: this feature can be enabled if this service is included in your shipping policy. Here you must add the delivery windows that will be displayed to customers at checkout. To use this feature, click the toggle and fill in the following fields:
    *    **Maximum delivery time:** the maximum number of days to deliver a product.
    *   **Delivery windows:** the time frames during which the carrier delivers packages to customers. Set the days of the week, the `Start` and `End` times, and any additional rates. Click `Add delivery window` to set more time frames.
    *   **Delivery capacity:** allows you to limit how many items/orders can be delivered in each delivery window. This feature is optional.   To learn more about these features, check out the articles[Scheduled delivery](/en/docs/tutorials/scheduled-delivery) and [Managing delivery capacity](/en/docs/tutorials/managing-delivery-capacity). If you enable this feature, you must:
        *   Choose a delivery capacity unit (`items` or `orders`).
        *   Check the delivery windows.
        *   Define the `delivery capacity`. We recommend choosing the delivery capacity unit and the maximum number of items carefully because the system does not consider the number of items in the cart to calculate the delivery window availability. So if a delivery window has a remaining capacity of 2 items and your customer is buying 4 items, they will be able to select this delivery window.

            Once the delivery window has reached its full `delivery capacity` it will no longer be available to customers. To make a delivery window available to customers again, you must increase the number of items/orders in its `delivery capacity`.

 ### Learn more

 * [Shipping policy](/en/docs/tutorials/shipping-policy)
 * [Managing shipping policies](/en/docs/tutorials/managing-shipping-policies)
 * [Shipping strategy](/en/docs/tutorials/shipping-strategy)

