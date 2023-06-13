---
title: Create product feed
id: 70Yx1oxJDXSLFwepbU7PJj
status: CHANGED
createdAt: 2020-06-30T00:28:52.057Z
updatedAt: 2020-11-27T19:36:48.086Z
publishedAt: 2020-07-02T03:20:31.139Z
firstPublishedAt: 2020-06-30T01:10:09.032Z
contentType: trackArticle
productTeam: Apps
slug: create-product-feed
trackId: 2KDrouPiE4HDKUFFSG3KdN
trackSlugEN: lengow-integration
---

With the Lengow connector installed and set up, it's time to create a product feed so you can choose which products should become available to Lengow. 

After completing this step, you will be ready to define your sales channels and map specifications to make them available for Lengow.

## Create collection for Lengow

To choose which products should become available to Lengow, you must [create a collection](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3moFonW33dgOYDrU21Z1X0) in *Store Setup > CMS > Layout*. We recommend naming the collection `Lengow` and including all products in your Catalog.

## Configure XML feed for Lengow

To make product updates available to Lengow, you must [configure an XML feed](https://help.vtex.com/en/tutorial/configuring-xml--tutorials_242) in *Products > Catalog > XML integration*. Since we are configuring a simple feed, most settings can be kept in their default values. These are the settings that need to be filled in or changed:

- **File Name:** `lengow.xml`
- **Collection:** `Lengow` (or another name you chose)
- **Show Unavailable SKUs:** <img src="https://images.ctfassets.net/alneenqid6w5/3tqaZgkyGMFRCdDIpQoU4v/ae419a4f9ff8c73c32964bcc8d3391f9/image3.png"/> (enabled)

The feed itself should then be filled in as seen in the image below:

![image2](//images.ctfassets.net/alneenqid6w5/2TuXQFVWgd7liQ7jSxYHDu/c46858cd6a536d3f3290bafe2e105724/image2.png)

## Verify XML feed consistency

Your product feed should now be available at the following URL:

<div><span style="font-family: Monospace; font-size: 14px">http://<span style="color: #F71963">{accountName}</span>.vtexcommercestable.com.br/XMLData/lengow.xml</span></div>

If you visit this URL in your browser, you should see an XML document tree like this:

![image8](//images.ctfassets.net/alneenqid6w5/7fBOjuxHDkRYtIoLPSnJcp/038cfb985ae364a3af5068ed5f69e489/image8.png)

The numbers seen in the XML feed correspond to the Product ID for all products in the collection you created for the Lengow connector.

