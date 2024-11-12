---
title: 'Validating a layout before moving it to production'
id: frequentlyAskedQuestions_593
status: ARCHIVED
createdAt: 2019-01-24T20:45:55.474Z
updatedAt: 2022-09-08T16:44:20.634Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:11:50.821Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: validating-a-layout-before-moving-it-to-production
locale: en
legacySlug: validating-a-layout-before-moving-it-to-production
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

There is no independent QA environment for testing layout changes.

However, there are two ways to do these tests without having to put the changes into production.

## Testing changes using the Layout ID (LID)

Every layout created in the CMS module has a specific ID (the `LID`).

This ID can be used as a parameter in the URL for the corresponding layout to be accessed.

With that you can:
1. Duplicate the layout.
2. Make the desired changes in the duplicate layout, keeping the first layout as default (ie, the second layout will not be accessible by the default URL of your store).
3. Access the second layout using the `LID` parameter.
4. Test whatever you want.
5. Incorporate the desired changes into the original layout, that is, into the one in production.

To find the `LID`, simply access the layout in the CMS module Admin. It's in the __Properties__ section, as the image below indicates:

![lid](https://images.contentful.com/alneenqid6w5/4FISyY6wwg2asGE4Mog2sK/991b8c634b474c336de1754acdb414de/lid.png)

To access the store page with the new layout, you must enter a question mark at the end of the URL and then the `LID` parameter.

For example:
{AccountName}.vtexcommercestable.com.br**?lid=3536da96-963c-4844-bf52-cc978113be09**

## Testing changes using the Web Site ID (WID)

Another alternative that allows you to test layout changes before moving to production is to create a new Web Site and access it through its specific ID (`WID`).

1. Duplicate the web site in the CMS module.
2. Make the desired changes on the duplicate web site. In this case, you can change as many layouts as you want.
3. Access the second web site via the `WID` parameter.
4. Test whatever you want.
5. Incorporate the desired changes to the original web site, that is, the one in production.

To find the `WID`, visit the web site. It sits on the first field of the webpage screen: __WebSite Id__.

![wid](//images.contentful.com/alneenqid6w5/ghvd0wl9HqGu2KCWW2Yu2/5e27a13e79134f7ba89863ccd54031a6/wid.png)

Remember that although with the duplication of the web site you can change the layouts of the new web site independently, they will consume the same templates as the original web site. 

So, depending on the changes you want to test, you may need to create new templates to feed the new layouts.
