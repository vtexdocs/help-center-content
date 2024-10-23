---
title: 'Creating an XML with promotional price using a price table'
id: tutorials_312
status: PUBLISHED
createdAt: 2017-04-27T22:09:13.953Z
updatedAt: 2023-03-30T15:53:05.498Z
publishedAt: 2023-03-30T15:53:05.498Z
firstPublishedAt: 2017-04-27T23:03:14.297Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-an-xml-with-promotional-price-using-a-price-table
locale: en
legacySlug: creating-an-xml-with-promotional-price-using-a-price-table
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

Learn more about the XML feature on the VTEX platform in the article [How XML updating works](https://help.vtex.com/en/tutorial/understanding-the-updating-of-the-xml--tutorials_297)
To apply different prices to products via XML, you must associate a SKU price table. To do this, please follow the steps below:

  1. In the VTEX Admin, go to *Store Settings > Channels > XML Integration*, or type *XML Integration* in the search bar at the top of the page.
  2. Find the XML file you want to edit and click on `Modify`. If you want to create a new file, please read our article [Configuring XML](https://help.vtex.com/en/tutorial/configuring-xml--tutorials_242).
  3. Here, you must check if the fields related to SKU price (lowest product price, highest product price, original SKU price, current SKU price and current SKU price + taxes) are filled in. For the operation to work correctly, at least one of these fields must contain information.
  4. Fill in the **Price tables ** field with the name of the desired price table. Then, click on the check box corresponding to the tag in the column **Show content**. The selected price table must have fixed prices registered. Otherwise, the configuration will not be performed.
![PT-tabela de precos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price list/creating-an-xml-with-promotional-price-using-a-price-table_1.png)
>⚠️ Once the price table is included in the XML, all price fields will be overwritten.
  5. Click on `Save`.

Thus, the platform will associate the values in the price table with the products registered in the XML file collection.
After finishing the XML registration and saving the changes, you can check the information when it is updated by entering the URL as follows:

`https://{domain}.myvtex.com/XMLData/{XML file name}.xml`

Example of updated XML:

![XML-exemplo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price list/creating-an-xml-with-promotional-price-using-a-price-table_2.png)
