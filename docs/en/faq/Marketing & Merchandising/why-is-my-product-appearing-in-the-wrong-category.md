---
title: 'Why is my product appearing in the wrong category?'
id: 189ijTfdJkcy2gg2MWkuEE
status: PUBLISHED
createdAt: 2018-01-23T13:35:06.489Z
updatedAt: 2022-08-24T21:09:00.452Z
publishedAt: 2022-08-24T21:09:00.452Z
firstPublishedAt: 2018-01-23T14:36:56.218Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_59
slug: why-is-my-product-appearing-in-the-wrong-category
locale: en
legacySlug: why-is-my-product-appearing-in-the-wrong-category
---

If you think a product is being displayed in the wrong category, there are a few things we can do to test this scenario. Follow the steps below to review it.

## API Verification

The first step is to perform a GET request to Catalog API's [Get Product by Id API](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product) endpoint.

The response of this call brings the information of `DepartmentId` and `CategoryId`, as we may see in the image below:

![department-id-category-id](https://images.contentful.com/alneenqid6w5/1wJqRKDEcYkGqqsMAGy0aA/bf3521922d99fe678031a1898326b1ea/department-id-category-id.png)

Then you should compare this response to the Ids that appear in your category tree. To access your category tree, follow the steps below:

1. Enter the __Catalog__ module.
2. Click on __Categories__.
3. Click the `+` button to see your category tree.

Ready! Now just compare the values and check if the data matches. 

If the product is in the wrong category, simply change the category product. [Click here](/en/tutorial/registering-a-product) to learn how to register the product's category.

## Similar Category

At VTEX, you may register products in similar categories. With that, products that have similar categories will be displayed in the shop windows of those categories pages.

This may cause the impression that the product is being displayed in the wrong category. To check if your product has a similar category, visit our article on [how to set up similar categories](/en/tutorial/setting-up-similar-categories).
