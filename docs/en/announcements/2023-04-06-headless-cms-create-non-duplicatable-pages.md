---
title: 'Headless CMS: create non-duplicatable pages'
id: 6aSxQhpcb1RCnaWYcUAnoz
status: ARCHIVED
createdAt: 2023-04-06T15:19:47.475Z
updatedAt: 2023-04-10T15:08:45.599Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: headless-cms-create-non-duplicatable-pages
locale: en
legacySlug: headless-cms-create-non-duplicatable-pages
announcementImageID: ''
announcementSynopsisEN: 'Introducing the Singleton: a Headless CMS content type that prevents duplicates and ensures consistent store content.'
---

The Singleton is a new type of content type that allows merchants to create and manage a single page of a content type in the Headless CMS. Unlike other content types, the Singleton cannot be duplicated, ensuring that only one page exists and the content is consistent across the store's pages.
![singleton-en](//images.ctfassets.net/alneenqid6w5/6aMWhl66yiP8YLJr5Bzuo5/336d3df9b113a1b919209c304856c339/singleton-en.gif)

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
The Singleton content type is only available for stores using the <a href="https://help.vtex.com/en/tutorial/managing-pages-beta--3DO6rBhZ1p3zndnFu5BgRt">VTEX Headless CMS</a> (Currently in Beta phase).
</div>

## What has changed?

Previously, you could create multiple pages of any content type, sometimes leading to inconsistencies. For example, you could have multiple pages with the same name but with different content.

Now, Singleton allows you to create non-duplicable content types, ensuring that there will be only one page per given content type and which will reflect all updates. This new feature streamlines content management and provides store consistency.

## Why did we make this change?
Our goal with the new Singleton content type is to bring the following benefits:

- **Non-duplicable pages**: Prevents creating multiple pages with the same content type and possible conflicts in page updates.
- **Content consistency**:  Having a single page per content type, providing your store with consistent content.
- **Easy content management**: Managing and updating content is easier with just one page per content type.

## What needs to be done? 

For more information on creating and managing the Singleton content type, read the [Managing the Singleton content type documentation](https://help.vtex.com/en/tutorial/gerenciando-content-types-do-tipo-singleton--VBibMN1BqV2OFmavUFCdo).

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
To create the Singleton content type, check with your developer team if the <i>isSingleton</i> property is implemented or ask them to follow the instructions in <a href="https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Using%20isSingleton%20property%20in%20a%20contenty%20type">Using isSingleton in a content type</a> to add it to the desired content type.
</div>
