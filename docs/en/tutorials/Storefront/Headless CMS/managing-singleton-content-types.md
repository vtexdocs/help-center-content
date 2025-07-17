---
title: 'Managing Singleton content types'
id: VBibMN1BqV2OFmavUFCdo
status: PUBLISHED
createdAt: 2023-04-05T17:55:26.748Z
updatedAt: 2024-06-05T19:07:02.549Z
publishedAt: 2024-06-05T19:07:02.549Z
firstPublishedAt: 2023-04-06T19:11:57.614Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: managing-singleton-content-types
locale: en
legacySlug: managing-singleton-content-types
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

Singleton content types allow creating and managing a single page, ensuring that only one page of this content type exists in Headless CMS.

This content type avoids potential conflicts and inconsistencies when multiple pages of the same content type are created. For example, you can use Singleton for your store's Home page to ensure that there is only one Home page and that all updates and requests to this page always return the same result.
![singleton-en](https://images.ctfassets.net/alneenqid6w5/6aMWhl66yiP8YLJr5Bzuo5/336d3df9b113a1b919209c304856c339/singleton-en.gif)

<div class="alert alert-warning">
  To create the Singleton content type, check with your developer team if the <i>isSingleton</i> property is implemented or ask them to follow the instructions in <a href="https://v1.faststore.dev/how-to-guides/cms/vtex-headless-cms/Using%20isSingleton%20property%20in%20a%20contenty%20type">Using isSingleton in a content type</a> to add it to the desired content type.
</div>

## Creating the Singleton
1. Access the **Admin > Storefront > Headless CMS**.
2. Select `CREATE NEW` and choose the name of the singleton content type, for example, **Home**.
3. Edit the page as you desire using new sections.

<div class="alert alert-warning">
You can only create the Singleton once. The Singleton page will not be displayed in the content type list if it already exists.
</div>

## Editing the Singleton
1. Access the **Admin > Storefront > Headless CMS**.
2. Click on the project where the Singleton were created.
3. Select the Singleton that you created, for example, **Home**.
4. On the **Home** page, edit as you desire by adding new sections.

## Unpublishing the Singleton
1. Access the **Admin > Storefront > Headless CMS**.
2. Click the project where the Singleton was created.
3. Click `Unpublish` > `Unpublish Now`.

<div class="alert alert-warning">
Before unpublishing, make sure there are no existing drafts. Otherwise, you won't be able to proceed. If you have drafts, either delete them or schedule them for publication.
</div>

4. A modal will display for you to confirm the unpublishing of the page.
5. Click and hold `UNPUBLISH` to unpublish content.

## Deleting the Singleton
1. On the Singleton page, select `more`(kebab menu) and choose `Delete`.
2. Choose`DELETE` and `BACK TO PAGES`. 

<div class="alert alert-warning">
  If you want to restore the page and its content, click <i>RESTORE</i>.
</div>
