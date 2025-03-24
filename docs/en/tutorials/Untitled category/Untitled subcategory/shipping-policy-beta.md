---
title: 'Shipping policy (Beta)'
id: QJqfPfjGvoXJeuDsHxvUb
status: DRAFT
createdAt: 2021-04-22T17:19:04.531Z
updatedAt: 2023-03-17T14:32:24.441Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-policy-beta
locale: en
legacySlug: shipping-policy-beta
subcategoryId: unknown-subcategory
---


A shipping policy is a set of rules that define the shipping options and conditions that will be displayed to the customer at checkout. Shipping conditions include the information you have configured for carrier working hours, delivery time frames, additional shipping rates, types of deliverable products (modals), and delivery windows.

 These settings are based primarily on the contracts between your store and[ carriers](https://help.vtex.com/en/tutorial/o-que-e-uma-transportadora--7u9duMD5UQa2QQwukAWMcE), service providers, or any other type of contract for shipping services that your store offers to customers.

 &lt;div class="alert alert-info"> 

A single carrier can be linked to multiple shipping policies, each with its particularities. See below how to create, edit, and delete shipping policies

&lt;/div>

On the VTEX platform, you can:

* [Add shipping policies](#adding-a-shipping-policy)

* [Edit shipping policies](#editing-a-shipping-policy)

* [Delete shipping policies](#deleting-a-shipping-policy)

## Adding a shipping policy

1. Access the `Inventory & shipping` module.
2. Select the `Shipping strategy` tab.
3. Click on the `Create shipping policy` button.
4. Fill in the fields on the screen and click on `Save changes`.
*    **Active/Inactive**: enables or disables the shipping policy.
*   **Name**: the internal name of the shipping policy.
*   **ID**: the internal identifier also used for integrators. You must fill in this field only with letters and numbers. If it is not filled in, an ID will be created automatically.
*   **[Shipping method](https://help.vtex.com/en/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126)**: the delivery type,  which is used to differentiate delivery services. It will be displayed for customers at checkout. For example, express vs. standard shipping.
*   **[Upload shipping rates](https://help.vtex.com/en/tutorial/como-montar-a-planilha-de-frete--tutorials_127)**: this is where you upload the spreadsheet with the shipping rates and delivery time frames based on the shipping policy.
*   **Package dimensions:**
    *   **Sum of all dimensions:** size limit of the package. It considers the sum of the lengths of all edges of the box. If this limit is exceeded, the order will be split into two or more packages or the delivery will not be made. This information is given by the carrier when the contract is signed.
    *   **Largest edge:** size limit of the largest edge of the package. If this limit is exceeded, the order will be split into two or more packages or the delivery will not be made.
    *   **[Cubic weight factor](https://help.vtex.com/en/tutorial/como-o-peso-cubado-e-calculado--tutorials_128)**: the factor that will be used to calculate the dimensional weight of the package. The sum of measures divided by the cubic factor.
    *   **Minimum weight factor:** use the cubic weight only if it exceeds this value. If this is the case, the cubic weight will be considered for calculating the shipping rate.
*   **Weekends and holidays:** days on which deliveries can be made. Click the toggles to enable or disable delivery in the following scenarios: `Saturday Delivery`, `Sunday Delivery`, `Holiday Delivery`.
*   **[Active modals](https://help.vtex.com/en/tutorial/como-funciona-o-modal--tutorials_125):** specifications for products that require special delivery. They indicate product shipping limitations covered by the shipping policy. Check the boxes to enable delivery in the following scenarios: `chemicals`, `electronics`, `furniture`, `glass`, `liquids`, `mattresses`, `refrigerated products`, `tires`,`appliances`, and `firearms`.
*   **Package items:** specification of the price and number of items in the package.
    *    **Minimum value:** minimum shipment price accepted by the shipping policy to make the delivery.
    *   **Minimum number of items:** the minimum number of items accepted by the shipping policy to make the delivery.
    *   **Maximum value:** the maximum shipment price** **accepted by the shipping policy to make the delivery.
*   **Link pickup points:** Click the toggle to view the pickup point options. Choose one of the options and fill it in by clicking on its dropdown menu. You can select between `Tags`, `Pickup points`, or `Sellers` that have been previously configured in your store.
*   **[Business hours:](https://help.vtex.com/en/tutorial/configurar-horario-de-funcionamento-para-transportadoras--2oGpbInIgdxSWUi3TZjdCS)** the time frames in which the carrier ships items to customers and the times at which it picks up items for delivery, as specified in the shipping policy. These settings influence the calculation of delivery time.
    *    **Shipping window:** here you can add the time frames in which the carrier ships items to customers. To configure it, select the `Shipping window` card.
        *    `Accept purchases outside working hours`: click the toggle button to enable or disable the option to receive orders outside working hours. When this option is enabled and an order is placed outside working hours, the time until the next available shipping window will be added to the total delivery time.
        *   Select the `Day of the week`, the `Start time`, and the `End time`.
        *   To add more days of the week, click on `Add shipping window`.
    *    **Pickup time:** here you can add the times at which the carrier will pick up packages from your warehouse or distribution center to send them to end customers. If an order is placed after the pickup time, the time until the next available pickup time will be added to the total delivery time.
        *   Select the `Day of the week` and the `Pickup time`.
        *    To add more days of the week, click on `Add pickup time`.
*   **[Scheduled delivery](link)**: this feature can be enabled if this service is included in your shipping policy. Here you must add the delivery windows that will be displayed to customers at checkout. To use this feature, click the toggle and fill in the following fields:
    *    **Maximum delivery time:** the maximum number of days to deliver a product.
    *   **Delivery windows:** the time frames during which the carrier delivers packages to customers. Set the days of the week, the `Start` and `End` times, and any additional rates. Click `Add delivery window` to set more time frames.
    *   **Delivery capacity:** allows you to limit how many items/orders can be delivered in each delivery window. This feature is optional.   To learn more about these features, check out the articles[ Scheduled delivery](link) and[ Managing delivery capacity](link). If you enable this feature, you must:
        *   Choose a delivery capacity unit (`items` or `orders`).
        *   Check the delivery windows.
        *   Define the `delivery capacity`. We recommend choosing the delivery capacity unit and the maximum number of items carefully because the system does not consider the number of items in the cart to calculate the delivery window availability. So if a delivery window has a remaining capacity of 2 items and your customer is buying 4 items, they will be able to select this delivery window.

            Once the delivery window has reached its full `delivery capacity` it will no longer be available to customers. To make a delivery window available to customers again, you must increase the number of items/orders in its `delivery capacity`.

## Editing a shipping policy

1. Access the `Inventory & shipping` module.
2. Select the `Shipping strategy` tab.
3. Click on the `shipping policy` you want to edit.
4. Edit `the content you want to change` (the fields are described in Adding a shipping policy) and save.

## Deleting a shipping policy

1. Access the `Inventory & shipping` module.
2. Select the `Shipping strategy` tab.
3. Hover the mouse pointer over the shipping policy you want to delete.
4. Click on the trash can icon.
5. Click on the `Delete` button.
