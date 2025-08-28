---
title: 'Creating a subscription promotion'
id: 3ROT13HYNeUIv0plDqgNed
status: PUBLISHED
createdAt: 2019-10-31T14:21:23.412Z
updatedAt: 2024-08-09T19:35:32.700Z
publishedAt: 2024-08-09T19:35:32.700Z
firstPublishedAt: 2019-11-05T18:40:57.634Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1E4UkWguFZAXjkguvNHPIv
slugEN: creating-a-subscription-promotion
legacySlug: creating-a-subscription-promotion
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

In this article, you will find the step-by-step instructions to create subscription promotions in [regular promotions](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI). 

1. Access the **Promotions & Taxes** module.
2. Click on **Promotions**.
3. Click on the `New Promotion` button.
4. Select the `Regular` option.
5. In the **What are the conditions for the promotion to be valid?** section, select the **Is a subscription order** field. This option specifies that the promotion will apply to subscription orders. Only products with a subscription in the cart will receive the discount. To understand configuration possibilities, see the following conditions:

![frequenciaenglish](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-&-taxes/promotions/creating-a-subscription-promotion_1.png)

- **First orders**: orders that generate subscriptions but are not part of subscription cycles yet.
- **Recurring orders**: orders from subscription cycles.
- **Filter by**: selection that filters subscription orders valid for the promotion.
  - **Frequency**: selection of the subscription order frequency valid for the promotion in days, weeks, months or years.
  - **Cycle number**: selection of subscription cycles valid for the promotion. This option is unlocked if the **Recurring orders** field has been selected.

Configure the frequency and cycle correctly to ensure that the promotion is applied to recurring orders. The frequency defines the interval between orders, while the cycle determines from which order the promotion will be applied. If you do not configure both parameters, the promotion may not be applied as expected, affecting only the first order or none of the recurring orders. Therefore, select and configure both parameters according to the specific needs of the promotion.

**Example:** By setting the **Frequency** to every 2 weeks and the **Cycle number** to 4, the promotion will only apply on the fourth cycle, i.e., as soon as the order is placed again. This scenario is illustrated below.

| Date | Cycle number | Validity |
|------------|-----------------|----------------------------|
| 12/25/2021 | First cycle | Promotion will be valid |
| 01/08/2022 | Second cycle | Promotion will not be valid |
| 01/22/2022 | Third cycle | Promotion will not be valid |
| 02/05/2022 | Fourth cycle | Promotion will be valid |

> ℹ️  You cannot configure UTM promotions and subscription promotions using coupons on recurring orders. Coupons can only be applied to first orders.

<ol start="6">
<li> Fill in the [fields of this promotion](https://help.vtex.com/en/tutorial/regular-promotion--tutorials_327).</li><br>
<li>Click on <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Save</span> to finish.</li>
</ol>
