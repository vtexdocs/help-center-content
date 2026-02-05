---
title: 'Hiding or removing the Live Shopping component'
id: 7e3bP6LjFgxXC210jSpl59
status: PUBLISHED
createdAt: 2025-07-23T18:14:54.073Z
updatedAt: 2025-10-24T13:34:17.911Z
publishedAt: 2025-10-24T13:34:17.911Z
firstPublishedAt: 2025-07-28T15:08:44.289Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: hiding-or-removing-live-shopping-component
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
order: 11
---

After [ending the transmission](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/69PX90vv4oDWQ34nnBkiQt#ending-the-transmission) in Bundle or an external studio and the [event status](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#event-status) is `Completed`, you must hide the **Live Shopping** component or remove the code, depending on your frontend solution. The audience will continue to see a black screen on your site or landing page until you complete this action.

Check the instructions that correspond to your frontend solution:

* [Store Framework (VTEX IO)](#store-framework-vtex-io)
* [Legacy CMS Portal](#legacy-cms-portal)
* [Headless CMS](#headless-cms)
* [FastStore](#faststore)

> ❗ If you don't want your audience to view a black screen at the end of the transmission, you can display an end-of-transmission image, as explained below:<ol><li>Before ending the transmission, display the ending image in Bundle or an external studio.</li><li>Hide the **Live Shopping** component or remove the code from the store (as shown in the next sections).</li><li>Wait about 10 minutes after displaying the ending image for the cache to update.</li><li>End the event.

## Store Framework (VTEX IO)

For stores using [Store Framework](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework), you can hide the **Live Shopping** component in [Site Editor](/en/docs/tutorials/managing-page-and-template-content) by following the steps below:

1. In the VTEX Admin, go to **Storefront > Site Editor**, or type **Site Editor** in the search bar at the top of the page.
2. On the **Blocks** list on the right side of the page, select the **Live Shopping** block.
3. Deactivate the <i class="fas fa-toggle-off" aria-hidden="true"></i> `Show component` option.
4. Click `Save`.

> ℹ️ After saving the **Live Shopping** component configuration in **Site Editor**, it may take five to ten minutes for the changes to be reflected on the storefront. While the page is being updated, it's good practice to have an image placeholder at the end of the event.

## Legacy CMS Portal

For stores using [Legacy CMS Portal](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), you need to remove the **Live Shopping** script by following the steps below: 

1. In the VTEX Admin, go to **Storefront > Layout**, or type **Layout** in the search bar at the top of the page.
2. Click **CMS > HTML Templates**.
3. Delete the **Live Shopping** script from the HTML file where [you added it](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR#legacy-cms-portal).
4. Click `Save template` on the top right of the template.

## Headless CMS

For stores using [Headless CMS](/en/docs/tutorials/headless-cms-overview), you need to remove the **Live Shopping** script from the HTML file where [you added it](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR#headless-cms).

## FastStore

To delete the **Live Shopping** component from a [FastStore](https://developers.vtex.com/docs/guides/faststore) project, follow the steps below:

1. In the VTEX Admin, go to **Storefront > Headless CMS**, or type **Headless CMS** in the search bar at the top of the page.
2. Select the page where you added the **Live Shopping Player**.
3. In the `Sections` tab, go to the **Live Shopping Player** section and click <i class="fas fa-ellipsis-v" aria-hidden="true"></i> **More > Delete**.
4. Click `Save`.
5. Click **Publish > Publish Now**.
6. In the **Overwrite Published Version** window, click `Overwrite`.
