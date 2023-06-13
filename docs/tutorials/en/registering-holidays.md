---
title: Registering Holidays
id: 2ItOthSEAoyAmcwsuiO6Yk
status: PUBLISHED
createdAt: 2018-02-07T13:04:56.796Z
updatedAt: 2023-03-29T20:13:47.518Z
publishedAt: 2023-03-29T20:13:47.518Z
firstPublishedAt: 2018-02-07T16:34:46.797Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slug: registering-holidays
legacySlug: registering-holidays
subcategory: 6F0Qup9onmEM2wsEsEsUQa
---

The **Holidays** feature allows you to configure days that should not be considered valid for shipping. Therefore, the system can calculate the shipping deadline considering holidays and increasing shipping estimated time.

## Setting up Holidays

To set up the Holidays, follow the steps below:

1. In the VTEX Admin, go to **Store settings > Shipping > Holidays**, or type *Holidays* in the search bar at the top of the page.  
2. In the `Holiday Name` field, fill in the name of the holiday you want to register.
3. In the `Start Date` field, fill in the holiday start date.
4. In the `End Date`, fill in the end date of the holiday.
5. Click on `Save`.

**Holidays** feature will only be valid for carriers configured to allow these settings. To make the carrier eligible for holiday setup, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.  
2. On the `Shipping Policies` tab, select the [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) associated with the given carrier.
3. In the **Weekends and Holidays** section, make sure the option `Holiday delivery` disabled <i class="fas fa-toggle-off"></i>.
4. Click on `Save`.

<div class="alert alert-info">
You may configure holidays for the years to come.
</div>

## How to consider holidays when calculating shipping time

The shipping time calculated for an order is based on the sum of two factors:

- **Picking time**: The time the store operator takes to make the order items available to the [carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE).
- **Delivery time**: The time it takes for the carrier to deliver the order to the end customer.

`Picking time + Delivery time = Order shipping time`

This distinction is important because holidays can impact each one differently, as you will see below.

From a technical standpoint, holidays are considered in the `shippingEstimateDate` variable of the order ([orderForm](https://developers.vtex.com/vtex-rest-api/reference/orderform-fields)), which is calculated only after payment confirmation. After payment confirmation, the customer is informed about the estimated delivery date, which by default disregards holidays as business days.

### Example 1

1. An order is placed and has its payment confirmed on Monday (02/05), with a delivery time of two business days.
2. Tuesday (02/06) is a holiday.
3. The estimated delivery date will be Thursday (02/08), as Tuesday will not be considered a business day.

<div class="alert alert-warning">
There is one exception in which the holiday counts as a business day: when the customer places an order on a holiday and the carrier has shipping hours set (<a href="https://help.vtex.com/en/tutorial/carrier-working-hours--2oGpbInIgdxSWUi3TZjdCS">Shipping Window</a>) for that same day.
</div>

### Example 2

1. An order is placed and has its payment confirmed on Wednesday (11/02), with a delivery time of one business day.
2. Wednesday (11/02) is a holiday.
3. The carrier has a picking time configured for Wednesday (11/02), so the estimated date the customer will receive the order is Thursday (11/03). The Wednesday holiday will be considered a business day because the shipping is scheduled for the same day the customer placed the order.
