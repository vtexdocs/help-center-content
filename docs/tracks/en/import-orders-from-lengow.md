---
title: Import orders from Lengow
id: NyLu3CjnE0sl0QWZbuuZ2
status: PUBLISHED
createdAt: 2020-07-02T03:53:01.901Z
updatedAt: 2023-01-10T15:19:52.551Z
publishedAt: 2023-01-10T15:19:52.551Z
firstPublishedAt: 2020-07-02T04:00:18.779Z
contentType: trackArticle
productTeam: Apps
slug: import-orders-from-lengow
trackId: 2KDrouPiE4HDKUFFSG3KdN
trackSlugEN: lengow-integration
---

If you use the Lengow connector to sell on Amazon and eBay, you will need an additional step to import orders from Lengow into VTEX.

*If you need to integrate orders from marketplaces other than Amazon and eBay, please reach out to VTEX support team*.

### Manual import

To import orders manually, click on the **Import Orders** button seen in *Marketplace > Lengow Integration > Settings*. You can check the Logs and Statistics tabs to see if the importing process was run successfully.

### Automatic import

To import orders automatically, use any scheduling service to perform a periodic HTTP GET request to the following URL:

<div><span style="font-family: Monospace; font-size: 14px">http://<span style="color: #F71963">{accountName}</span>.myvtex.com/integration/lengow/importorders</span></div>

The image below provides an example of what that would look like in [EasyCron](https://www.easycron.com/):

![Lengow - EasyCron](https://images.ctfassets.net/alneenqid6w5/34iwIOlV3gTIxg8JipHwu5/4d5e6b4419ea69cb66dddb923082b374/image14.png)

For more information on how to set up cron jobs using EasyCron, refer to the [FAQ](https://www.easycron.com/faq) available in their website.
