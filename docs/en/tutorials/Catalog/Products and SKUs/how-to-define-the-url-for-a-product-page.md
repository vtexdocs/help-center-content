---
title: 'How to define the URL for a product page?'
id: frequentlyAskedQuestions_368
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.153Z
updatedAt: 2023-03-29T14:51:40.299Z
publishedAt: 2023-03-29T14:51:40.299Z
firstPublishedAt: 2019-01-24T21:55:07.896Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-to-define-the-url-for-a-product-page
locale: en
legacySlug: how-is-a-product-url-set-up
subcategoryId: pwxWmUu7T222QyuGogs68
---

The URL of a product page is the electronic address that allows accessing this page on the Internet. Creating a friendly and optimized URL is crucial to make it easily findable by search engines and simplify your customer's experience on your ecommerce website.

The VTEX URL structure for a product page is composed of the store domain plus the value of the required **textLink** field when [adding a product](https://help.vtex.com/en/tutorial/adding-products--tutorials_2567), plus `/p`, which stands for "product."  For example: If the textLink field for a given product is populated with polo-shirt in a store with the domain storename.com, the URL's final structure will be storename.com/polo-shirt.

You can change the **textLink** of existing products anytime in the VTEX Admin, under **Catalog > All products > Edit**. We recommend filling in the field **textLink** with the product's name, using only the main keywords related to it.

Check out the [Filling rules](#filling-rules) section to understand the restrictions on this field.

![textlink.en](//images.ctfassets.net/alneenqid6w5/2FDLvlMqvZNRCAiCoFNbfB/3485de69b69d5245045063e617177c70/textlink.en.png)

>ℹ️ You can also change a product's page URL using the [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api#overview). In this case, you must change the field `LinkId`. See [Update Product](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product) for more information.

## Filling rules

Follow the rules below to fill in the **textLink** field:

- Replace spaces with hyphens (`-`).
- Use no more than 50 characters.
- Do not use special characters like `! . * ' ( ) ; : @ & = + $ , / ? % # [ ] |` or accents such as `´ ¨ ^ ~`.
- Do not use the following keywords since they are used for other features on the VTEX platform and may generate errors if applied to a product page's URL:
    * `a`
    * `meta`
    * `api`
    * `admin`

>❗ Please note that not complying with the rules listed above to complete the **textLink** field can affect your store's performance, lead to search issues, and interfere with the proper functioning of pages defined in the VTEX Admin.

## Learn more

- [How to add products](https://help.vtex.com/en/tutorial/adding-products--tutorials_2567)
- [Filling in product registration fields](https://help.vtex.com/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke)
