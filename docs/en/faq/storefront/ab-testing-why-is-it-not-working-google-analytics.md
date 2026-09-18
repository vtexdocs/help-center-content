---
title: "A/B testing: why isn't it working in Google Analytics?"
excerpt: "A/B testing fails when the Analytics script is not saved in the page template. Add a content placeholder and an HTML control with the script."
id: frequentlyAskedQuestions_629
status: PUBLISHED
createdAt: 2017-04-27T22:31:14.775Z
updatedAt: 2019-12-31T14:24:07.364Z
publishedAt: 2019-12-31T14:24:07.364Z
firstPublishedAt: 2017-04-27T23:02:25.985Z
contentType: frequentlyAskedQuestion
productTeam: Storefront
author: authors_84
slugEN: ab-testing-why-is-it-not-working-google-analytics
locale: en
legacySlug: ab-testing-why-is-it-not-working-google-analytics
---

This usually happens because the Analytics script was not saved in the page template.

To fix it:

1. Create a content placeholder in the template.
2. On the page where A/B testing is running, create an HTML control and paste the script.

A/B testing can then send data to Google Analytics.

Examples of each step:

**Control:**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/storefront/ab-testing-why-is-it-not-working-google-analytics_1.png)

**Script:**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/storefront/ab-testing-why-is-it-not-working-google-analytics_2.png)

**Template:**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/storefront/ab-testing-why-is-it-not-working-google-analytics_3.png)
