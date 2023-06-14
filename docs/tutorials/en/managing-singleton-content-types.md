---
title: Managing Singleton content types
id: VBibMN1BqV2OFmavUFCdo
status: PUBLISHED
createdAt: 2023-04-05T17:55:26.748Z
updatedAt: 2023-04-06T19:11:57.614Z
publishedAt: 2023-04-06T19:11:57.614Z
firstPublishedAt: 2023-04-06T19:11:57.614Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: managing-singleton-content-types
legacySlug: managing-singleton-content-types
subcategory: 27t6x0lngvjI3bnUg5AgEO
---

Singleton content types allow creating and managing a single page, ensuring that only one page of this content type exists in Headless CMS.

This content type avoids potential conflicts and inconsistencies when multiple pages of the same content type are created. For example, you can use Singleton for your store's Home page to ensure that there is only one Home page and that all updates and requests to this page always return the same result.
![singleton-en](//images.ctfassets.net/alneenqid6w5/6aMWhl66yiP8YLJr5Bzuo5/336d3df9b113a1b919209c304856c339/singleton-en.gif)

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
  To create the Singleton content type, check with your developer team if the <i>isSingleton</i> property is implemented or ask them to follow the instructions in <a href="https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Using%20isSingleton%20property%20in%20a%20contenty%20type">Using `isSingleton` in a content type</a> to add it to the desired content type.
</div>

## Creating the Singleton
1. Access the **Admin > Storefront > Headless CMS**.
2. Select `CREATE NEW` and choose the name of the singleton content type, for example, **Home**.
3. Edit the page as you desire using new sections.

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
You can only create the Singleton once. The Singleton page will not be displayed in the content type list if it already exists.
</div>

## Editing the Singleton
1. Access the **Admin > Storefront > Headless CMS**.
2. Select the Singleton that you created, for example, **Home**.
3. On the **Home** page, edit as you desire by adding new sections.

## Deleting the Singleton
1. On the Singleton page, select `more`(kebab menu) and choose `Delete`.
2. Choose`DELETE` and `BACK TO PAGES`. 

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
  If you want to restore the page and its content, click <i>RESTORE</i>.
</div>
