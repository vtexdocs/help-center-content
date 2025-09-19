---
title: 'Placing the Live Shopping component'
id: 4r5uk6XHxdYlOGMr11GFWR
status: PUBLISHED
createdAt: 2025-07-23T17:54:26.773Z
updatedAt: 2025-09-15T20:53:57.710Z
publishedAt: 2025-09-15T20:53:57.710Z
firstPublishedAt: 2025-07-28T15:07:46.555Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: placing-the-live-shopping-component
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
order: 4
---

Once your event is [configured on Bundle](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX) or an external studio and before transmitting it, you have to place the **Live Shopping** component on your site, whether on the store homepage or a [landing page](/en/tutorial/live-shopping-configuring-a-landing-page-for-live-shopping-events--4iBDPEpXyKSfoIqUdwHGFE). The configuration steps vary depending on your store frontend solution:

* [Store Framework (VTEX IO)](#store-framework-vtex-io)
* [Legacy CMS Portal](#legacy-cms-portal)
* [Headless CMS](#headless-cms)

> ⚠️ After configuring the **Live Shopping** component, it may take five to ten minutes for the changes to be reflected on the storefront due to caching.

## Store Framework (VTEX IO)

For stores using [Store Framework](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework), follow the steps below to place the **Live Shopping** component from [Site Editor](/en/tutorial/managing-page-and-template-content--3tMbx6HXy4Fy5r9EhboG37): 

1. In the VTEX Admin, go to **Storefront > Site Editor**, or type **Site Editor** in the search bar at the top of the page.
2. On the **Blocks** list on the right side of the page, select the **Live Shopping** block.
3. Activate the <i class="fas fa-toggle-on" aria-hidden="true"></i> `Show component` option.
4. Click the **Events (Live)** dropdown and select the desired event. The options displayed only include events with `Live` [status](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#event-status).
5. Click `Save`.

## Legacy CMS Portal

For stores using [Legacy CMS Portal](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), follow the steps below to place the **Live Shopping** component: 

1. In the **Event Information** page of the [created event](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), click the arrow icon.
2. After [turning on the event](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq), go to the **CMS Configuration** section.
3. In **Script for template**, select `CMS template`.
4. Copy the code in **Script for template**.

  ![article_4_legacy_cms_portal_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/omnichannel/vtex-live-shopping-getting-started/placing-the-live-shopping-component_1.png)

5. Go to **Storefront > Layout**, or type **Layout** in the search bar at the top of the page.
6. Click **CMS > HTML Templates**.
7. Paste the code in the desired HTML file.

## Headless CMS

For stores using [Headless CMS](/en/tutorial/headless-cms-overview--3U5gvhHdQL0jczYH8gjX09), follow the steps below to place the **Live Shopping** component: 

1. In the **Event Information** page of the [created event](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), click the arrow icon.
2. Go to the **CMS Configuration** section.
3. In **Script for template**, select `External template`.
4. Copy the code in **Script for template**.

  ![article_4_headless_cms_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/omnichannel/vtex-live-shopping-getting-started/placing-the-live-shopping-component_2.png)

5. Paste the code in the desired HTML file.

> ❗ After configuring the event, you can see a preview by clicking the [preview](/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#preview) button. However, since this preview only displays certain **Live Shopping** components, we highly recommend doing additional checks on the entire website to ensure everything is working properly.
