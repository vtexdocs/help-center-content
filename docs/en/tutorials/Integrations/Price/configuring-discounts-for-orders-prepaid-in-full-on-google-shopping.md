---
title: 'Configuring discounts for orders paid in full on Google Shopping'
id: 40K3R5d4NogMvCzIWdWt3e
status: PUBLISHED
createdAt: 2020-12-18T19:17:16.033Z
updatedAt: 2024-11-01T13:39:20.668Z
publishedAt: 2024-11-01T13:39:20.668Z
firstPublishedAt: 2021-05-04T20:06:46.945Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuring-discounts-for-orders-prepaid-in-full-on-google-shopping
locale: en
legacySlug: configuring-discounts-for-orders-prepaid-in-full-on-google-shopping
subcategoryId: 3pGCbMh80UueoeSqoAgSuS
---

Before configuring a discount for orders paid in full on Google Shopping and proceeding with the steps detailed below, please follow the instructions in the tutorial [Configuring a discount for orders paid in full](https://help.vtex.com/en/tutorial/configuring-a-discount-for-orders-prepaid-in-full--7Lfcj9Wb5dpYfA2gKkACIt#).

To set up the discount for orders paid in full on Google Shopping, you must add the payment method ID on the product page in the CMS. 

1. In the VTEX Admin, go to *Storefront > Layout*, or type *Layout* in the search bar at the top of the page.
2. Click on the __CMS__ folder. 
3. Then on __HTML Templates__.
4. Select the template of your product page.
5. In the `richSnippets` component, add the `paymentSystemId` parameter with the value of the desired payment method.

```
<body id="product-page">
    <!--  Component: richSnippets -->
    <vtex.cmc:productRichSnippets showGoogle="1" paymentSystemId="6"/>
    <!-- /Component: richSnippets -->
```

6. Click on __Save Template__ in the upper right corner.

Once the configuration is complete, the discount for orders paid in full will be available on Google Shopping. 

