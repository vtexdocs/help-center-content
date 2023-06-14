---
title: 'Configuring discounts for orders prepaid in full on Google Shopping'
id: 40K3R5d4NogMvCzIWdWt3e
status: PUBLISHED
createdAt: 2020-12-18T19:17:16.033Z
updatedAt: 2023-03-30T16:56:23.457Z
publishedAt: 2023-03-30T16:56:23.457Z
firstPublishedAt: 2021-05-04T20:06:46.945Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: configuring-discounts-for-orders-prepaid-in-full-on-google-shopping
locale: en
legacySlug: configuring-discounts-for-orders-prepaid-in-full-on-google-shopping
subcategory: 3pGCbMh80UueoeSqoAgSuS
---

Before configuring a discount for orders prepaid in full on Google Shopping and proceeding with the steps detailed below, please follow the instructions in the tutorial [Configuring a discount for orders prepaid in full](https://help.vtex.com/en/tutorial/configuring-a-discount-for-orders-prepaid-in-full--7Lfcj9Wb5dpYfA2gKkACIt#).

To set up the discount for orders prepaid in full on Google Shopping, you must add the payment method ID on the product page in the CMS. 

1. In the VTEX Admin, go to *Storefront > Layout*, or type *Layout* in the search bar at the top of the page.
2. Click on the __CMS__ folder. 
3. Then on __HTML Templates__.
4. Select the template of your product page.
5. In the `richSnippets` component, add the `paymentSystemId` parameter with the value of the desired payment method.

![Screenshot 2020-12-18 Criar preço à vista para Google Shopping](https://images.ctfassets.net/alneenqid6w5/3cZKIpG2uAhDmFTJDslHZk/1bd7628049b5c5b7326df8044ac673f2/Screenshot_2020-12-18_Criar_pre__o____vista_para_Google_Shopping.png)

6. Click on __Save Template__ in the upper right corner.

Once the configuration is complete, the discount for orders prepaid in full will be available on Google Shopping. 

