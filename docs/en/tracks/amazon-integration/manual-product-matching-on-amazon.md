---
title: 'Manual product matching on Amazon'
id: 6QPcQ2zvTROe3VuDQ3kF4X
status: ARCHIVED
createdAt: 2022-11-25T21:20:50.102Z
updatedAt: 2023-01-24T20:39:11.781Z
publishedAt: 
firstPublishedAt: 2022-12-22T17:54:57.602Z
contentType: trackArticle
productTeam: Channels
slugEN: manual-product-matching-on-amazon
locale: en
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugEN: amazon-integration
---

>ℹ️ The flow documented in this article is not mandatory. If you choose to keep automatic matching, VTEX takes no responsibility for any possible matching issues on Amazon.

Whenever an [SKU](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) with a registered [EAN](https://sellercentral.amazon.com.br/learn/courses?ref_=su_course_accordion&moduleId=71d0b122-4e43-4547-a05a-04517e8f41a2&courseId=959bc7cb-2866-499c-b24a-8d3f6def1306&modLanguage=Portuguese&videoPlayer=youtube) is sent to Amazon, the marketplace does the matching by combining offers for the same product using its EAN. 

The EAN on the VTEX platform is used to match the corresponding Amazon Standard Identification Number [(ASIN)](https://amazon-asin.com/blog/what-is-asin-number/) on Amazon. Currently, this matching is done automatically; however, it may not be done correctly, as the match between EAN and ASINs needs to be accurate to link the offers correctly. 

After [sending your products to Amazon](https://help.vtex.com/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD), follow the steps below:

1. In VTEX Admin, go to *MARKETPLACE > Integrations > Products*.
2. Filter the products with the **Affiliate** field filled in with `Amazon` and the **Status** field with the value `Processed with a warning`. You will then see the products with the corresponding list of ASINs.
3. Select the corresponding ASIN.
4. Click `Yes`.

After the ASIN confirmation, the product matching will be complete.
