---
title: 'Why does the promised date differ from the delivery date?'
id: 2ykKClT2FWgEKQ6Y0s4iMS
status: PUBLISHED
createdAt: 2018-03-05T15:42:17.800Z
updatedAt: 2023-03-22T20:52:10.588Z
publishedAt: 2023-03-22T20:52:10.588Z
firstPublishedAt: 2018-03-05T16:16:16.312Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: why-does-the-promised-date-differ-from-the-delivery-date
locale: en
legacySlug: why-does-the-promised-date-differ-from-the-delivery-date
---

When there is an error associated with the number of days of a [holiday](https://help.vtex.com/en/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk), for security reasons, the platform configures an automatic range that may be affecting the order's delivery date.

When registering a holiday, if you fill in the __Start Date__ field correctly, but fill in the __End Date__ field incorrectly, and the holiday ends up being 1 year, 6 months or any undue period, the system understands that there was a registration error and automatically sets a smaller range to deliver the order.

In such case, the order may have the estimated delivery date for the first available business day set by the system.

If you have incoherent deadlines or disagreement between the promised date and delivery date, check out the __Holidays__ feature, as described below:

1. In the VTEX Admin, go to __Store Settings > Shipping > Holidays__, or type __Holidays__ in the search bar at the top of the page.
2. Check if the `Start Date` and `End Date` fields are filled in correctly.
3. Adjust them, if necessary.
4. Click `Save`.

For more information, see the article [Registering Holidays](https://help.vtex.com/en/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk).
