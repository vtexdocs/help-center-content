---
title: 'Hiding or removing Live Shopping component'
id: 7e3bP6LjFgxXC210jSpl59
status: PUBLISHED
createdAt: 2025-07-23T18:14:54.073Z
updatedAt: 2025-07-28T16:21:15.534Z
publishedAt: 2025-07-28T16:21:15.534Z
firstPublishedAt: 2025-07-28T15:08:44.289Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: hiding-or-removing-live-shopping-component
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
---

When the [transmission has ended](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/69PX90vv4oDWQ34nnBkiQt#ending-the-transmission) in Bundle or another studio, and the event [status](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#event-status) is `Completed`, you must hide the **Live Shopping** component or remove the code, depending on your frontend solution. While you don’t take this action, the audience will continue to see the black display in your site or landing page.

Check the step by step according to your frontend solution:

* [Store Framework (VTEX IO)](#store-framework-vtex-io)
* [Legacy CMS Portal](#legacy-cms-portal)
* [Headless CMS](#headless-cms)

> ❗ When you end an event, the audience sees a black screen. To avoid this, we recommend displaying an image that represents the end of the transmission. The correct way to do it is the following:<ol><li>Before ending the transmission, display the ending image in Bundle on an external studio.</li><li>Hide the **Live Shopping** component or remove the code from the store (as shown in the next sections).</li><li>Wait about 10 minutes after displaying the ending image for the cache to update.</li><li>End the event.

## Store Framework (VTEX IO)

For stores using [Store Framework](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework), you can simply hide the **Live Shopping** component in the [Site Editor](https://help.vtex.com/en/tutorial/managing-page-and-template-content--3tMbx6HXy4Fy5r9EhboG37), by following the steps below: 

1. In the VTEX Admin, go to **Storefront > Site Editor**, or type **Site Editor** in the search bar at the top of the page.
2. On the list **Blocks** on the right corner of the page, select the **Live Shopping** block.
3. Deactivate the <i class="fas fa-toggle-off" aria-hidden="true"></i> `Show component` option.

  ![article_4_store_framework_EN](//images.ctfassets.net/alneenqid6w5/CU6g8lTpsQSvuq184znAP/cb0c60872f06b68d8177f2dd229e8562/article_4_show_component_EN.png)

4. Click `Save`.

> ℹ️ After configuring the **Live Shopping** component in the **Site Editor**, it may take from five to ten minutes for the changes to reflect on the storefront. While the page is being updated, a good practice is having an image placeholder finalizing the event.

## Legacy CMS Portal

For stores using [Legacy CMS Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), it is necessary to remove the **Live Shopping** script, by following the steps below: 

1. In the VTEX Admin, go to **Storefront > Layout**, or type **Layout** in the search bar at the top of the page.
2. Click **CMS > HTML Templates**.
3. Delete the **Live Shopping** script on the HTML file where [you’ve placed it](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR#legacy-cms-portal).
4. Click `Save template` on the top right of the template.

## Headless CMS

For stores using [Headless CMS](https://help.vtex.com/en/tutorial/headless-cms-overview--3U5gvhHdQL0jczYH8gjX09), it is necessary to remove the **Live Shopping** script on the HTML file where [you’ve placed it](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR#headless-cms).

