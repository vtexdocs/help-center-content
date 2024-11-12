---
title: 'Configuring XML for Google Shopping'
id: frequentlyAskedQuestions_372
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.317Z
updatedAt: 2023-03-24T13:45:31.912Z
publishedAt: 2023-03-24T13:45:31.912Z
firstPublishedAt: 2019-01-24T22:02:18.230Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: how-to-configure-xml-for-google-shopping
locale: en
legacySlug: how-to-configure-xml-for-google-shopping
subcategoryId: 2OCA7SVfWoMSiAi0GEGwKo
---

>ℹ️ We have developed a new type of integration with Google Shopping via API, which allows real-time tracking. Learn more at [Integrating with Google Shopping](https://help.vtex.com/en/tracks/integrating-with-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/2kGKxwD9HKJvTLDTikQ4zG).

>⚠️ This article refers to the May 22, 2013 Google Shopping spec template. Google modifies and updates this template without previous warning. Always check if our explanation remains up-to-date according to the [Google Shopping documentation](https://support.google.com/merchants/answer/188494?hl=en-US).

You can set up Google Shopping via VTEX Admin by following the steps below:

1. In VTEX Admin, go to **Store Settings**.
2. Under **Channels**, click **XML Integration**.
3. Click `New XML`.
4. On **XML Type**, select **Open XML (default)**.
5. On the **Collection** field, select a previously registered collection of products.
6. Select the option **Show product with default SKU**.
  With this selection, you must define the XML structure following the definitions of the example below.
7. Review the model, making the desired alterations.
8. Click `Save`.
  The URL to access the XML will be generated automatically.
9. Save this XML to a .txt file and send the file to Google.

![](https://images.contentful.com/alneenqid6w5/3boyluRWTYA4C0s4qkSG2I/28be460a5f8a6340f0b389fe5000b27c/2.png)

>⚠️ If the option **Show unavailable SKUs** is unchecked, out-of-stock products or SKUs will not be shown in the XML. Inactive products also do not appear in the XML.
