---
title: 'Image compression'
id: 4klbgpsPksq44KcwqKeye8
status: PUBLISHED
createdAt: 2017-08-17T22:59:59.002Z
updatedAt: 2024-04-15T14:59:26.688Z
publishedAt: 2024-04-15T14:59:26.688Z
firstPublishedAt: 2017-08-17T23:30:18.772Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: image-compression
locale: en
legacySlug: how-the-automatic-compacting-of-images-works
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Image compression is a process that reduces the size of image files, optimizing them for the web and ensuring that images load quickly as a user browses a website.

This process aims to boost the speed and performance of the store, which significantly affects user experience, [SEO](https://developers.google.com/search/blog/2010/04/using-site-speed-in-web-search-ranking), and conversion rates.

There are two types of image compression, as described in the table below:

| Compression type | Description |
| - | - |
| Lossy | Reduces the image size and quality to retain the most significant information without keeping all the pixels. |
| Lossless | Rewrites an image file without removing any information. While it maintains the original quality, this type is less effective than lossy compression in reducing file size. |

On VTEX, files are stored in their original format but are compressed in real time during store browsing.

We automatically convert images to the [WebP](https://developers.google.com/speed/webp/) format when there is a size advantage — resulting in smaller images — regardless of whether the original file is in **PNG** or **JPG/JPEG format**.

Using WebP can lead to a reduction in page load time by 1 to 2 seconds, depending on the layout. Below is an explanation of how image optimization functions with each format.

>ℹ️ Browsers not yet [compatible with the WebP format](https://developers.google.com/speed/webp/faq#which_web_browsers_natively_support_webp) and services, such as integrations and marketplaces, always receive unconverted images in any format. GIF files are not converted to WebP.

## PNG

For images in PNG format, which is ideal for solid colors, detailed graphics, and high contrast, conversion to WebP uses lossless compression to minimize quality loss. Lossless WebP images can be up to 26% smaller than PNG images.

Additionally, PNG images are optimized with [pngquant](https://pngquant.org/), which maintains the format while reducing the image size by up to 70%.

Finally, VTEX delivers the smallest file between the lossless WebP and the optimized PNG, as illustrated in the diagram below.

![png-image-compression](https://images.ctfassets.net/alneenqid6w5/2i6UAp6HkiWl87Q7SDfIMB/c3f60b063fbfa38ed197d44d6e7da014/png-image-compression.PNG)

## JPG / JPEG

For images in the **JPG/JPEG** formats, which are ideal for photos, the conversion to WebP uses lossy compression. This approach might lead to some quality loss but ensures an optimized file size. Lossy WebP images are 25% to 34% smaller than similar images with an equivalent [SSIM](https://ece.uwaterloo.ca/~z70wang/research/ssim/) quality index.

VTEX delivers the image with the smallest file size to the customer, choosing between the original and the one converted to lossless WebP, as illustrated in the diagram below.

![webp-image-compression](https://images.ctfassets.net/alneenqid6w5/6fZVHgF3ExpBr4XOpjw2pi/0a711ec8fb9135cbddeada05f9191d95/webp-image-compression.PNG)

## Related articles

* [Best practices for using images in the Catalog](https://help.vtex.com/en/tutorial/best-practices-for-using-images-in-the-catalog--738K2yfq5U86kUI2k4AQIk)
* [Add image to product description](https://help.vtex.com/en/tutorial/add-image-to-product-description--2hQGTAAiyUSoISGSyOK8Y4)
* [Importing images from a spreadsheet](https://help.vtex.com/en/tutorial/importing-images-from-a-spreadsheet--tutorials_262)
* [Updating the image of an SKU](https://help.vtex.com/en/tutorial/how-to-update-the-image-of-an-sku--5PMb54FnvUuWOq2qGyAosu)
* [Reusing images with Image Widget](https://help.vtex.com/en/tutorial/image-widget--7pRSVI2xXpQUzjUZj0m4ov)
