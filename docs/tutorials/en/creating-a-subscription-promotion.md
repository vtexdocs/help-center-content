---
title: 'Creating a subscription promotion'
id: 3ROT13HYNeUIv0plDqgNed
status: PUBLISHED
createdAt: 2019-10-31T14:21:23.412Z
updatedAt: 2022-08-23T15:53:07.251Z
publishedAt: 2022-08-23T15:53:07.251Z
firstPublishedAt: 2019-11-05T18:40:57.634Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1E4UkWguFZAXjkguvNHPIv
slug: creating-a-subscription-promotion
locale: en
legacySlug: creating-a-subscription-promotion
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

In this article, you will find the step-by-step instructions to create subscription promotions in [regular promotions](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI). 

1. Access the **Promotions & Taxes** module.
2. Click on **Promotions**.
3. Click on the `New Promotion` button.
4. Select the `Regular` option.
5. In the **What are the conditions for the promotion to be valid?** section, select the **Is a subscription order** field. This option specifies that the promotion will apply to subscription orders. Only products with a subscription in the cart will receive the discount. To understand configuration possibilities, see the following conditions:

![frequenciaenglish](https://images.ctfassets.net/alneenqid6w5/3H1wS4j8dpkRfI0Le2A2CO/a13420f2bd7a22e963097a6e9d415e46/image2__2_.png)

- **First orders**: orders that generate subscriptions but are not part of subscription cycles yet.
- **Recurring orders**: orders from subscription cycles.
- **Filter by**: selection that filters subscription orders valid for the promotion.
  - **Frequency**: selection of the subscription order frequency valid for the promotion in days, weeks, months or years.
  - **Cycle number**: selection of subscription cycles valid for the promotion. This option is unlocked if the **Recurring orders** field has been selected.
 	Example: By setting the **Frequency** to every 2 weeks and the **Cycle number** to 4, the promotion will only apply on the fourth cycle, i.e., as soon as the order is placed again. This scenario is illustrated below.

| Date | Cycle number | Validity |
|------------|-----------------|----------------------------|
| 12/25/2021 | First cycle | Promotion will be valid |
| 01/08/2022 | Second cycle | Promotion will not be valid |
| 01/22/2022 | Third cycle | Promotion will not be valid |
| 02/05/2022 | Fourth cycle | Promotion will be valid |

<div class="alert alert-info" role="alert">
 <p>
You cannot configure UTM promotions and subscription promotions using coupons on recurring orders. Coupons can only be applied to first orders.</p>
</div>

<ol start="6">
<li> Fill in the <a href="https://help.vtex.com/en/tutorial/regular-promotion--tutorials_327" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">fields of this promotion</a>.</li><br>
<li>Click on <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Save</span> to finish.</li>
</ol>
