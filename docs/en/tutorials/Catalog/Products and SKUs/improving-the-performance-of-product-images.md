---
title: 'Improving the performance of product images'
id: tutorials_4833
status: PUBLISHED
createdAt: 2017-04-27T21:50:00.291Z
updatedAt: 2019-12-31T15:28:58.754Z
publishedAt: 2019-12-31T15:28:58.754Z
firstPublishedAt: 2017-04-27T23:11:16.876Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_65
slugEN: improving-the-performance-of-product-images
locale: en
legacySlug: improving-the-performance-of-product-images
subcategoryId: pwxWmUu7T222QyuGogs68
---

The pictures of your products are often the chief villains in your store’s performance.

This purpose of this article is to show how to use VTEX Img to make the loading of images more efficient and to improve the performance of the site.

**VTEX Img**, a service that delivers these images to the storefront, has a small API which, if properly used, can be of great benefit to your customers.

The URL of an SKU image has the following format:
`http://[ACCOUNT_NAME].vteximg.com.br/arquivos/ids/[ID](-[WIDTH]-[HEIDTH])/([IMAGE_NAME])`

The values in bold type are those that change according to the store, the SKU and the image (i.e. the account name of the store, the id, and the width, height and name of the image).

The items in brackets are optional parameters (i.e. the width, height and name of the image).

## For example

Our catalogue sends the images of the SKUs in the following format:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602/robo.jpg`

In this URL we have:

- **[ACCOUNT\_NAME]**: instoreqa
- **[ID]**: 155602
- **[LARGURA]**: not specified
- **[ALTURA]**: not specified
- **[NOME\_DA\_IMAGEM]**: robo.jpg

The name of the image is an optional parameter. Thus the same image is delivered if we open the following URL:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602/`

## Improving performance

The best way of improving the performance of the images is to arrange for them to be of the size that is actually used on the site. For example:

A store wants a page to show an image of a product size 50×50. Imagine that the store includes the following URL in its html code:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602/robo.jpg`

In this case, the browser will download the image full-size, i.e. the same image in high definition which was uploaded to the Catalogue.

These means that more data is being transferred than necessary, and this is bad for the store’s performance.

### What can we do?

We can ask VTEX Img to send the image in a specific size.

In our previous example, all you have to do is to write the URL of the image in the html code as follows:
`http://instoreqa.vteximg.com.br/arquivos/ids/155602-50-50/`

In this way, VTEX Img will deliver the image with a size of 50×50. This will make it much quicker to load.

![tamanhosImg](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products and SKUs/improving-the-performance-of-product-images_1.png)
_Sending images of a size larger than will be shown damages your store’s performance._

## Rectangular images

When resizing rectangular images, VTEX Img maintains their proportions, i.e. they are resized without distortion.

In clothing stores, for example, it is very common for images to be in portrait format, with the height greater than the width, such as 300×400. If the store needs the image to be square (in a 50×50 format, for example) it will appear distorted.

VTEX Img prevents distortion by filling in the empty space with a white background.
