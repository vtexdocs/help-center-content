---
title: 'Placing Live Shopping component'
id: 4r5uk6XHxdYlOGMr11GFWR
status: PUBLISHED
createdAt: 2025-07-23T17:54:26.773Z
updatedAt: 2025-07-28T15:48:57.584Z
publishedAt: 2025-07-28T15:48:57.584Z
firstPublishedAt: 2025-07-28T15:07:46.555Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: placing-live-shopping-component
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
---

Once your event is [configured on Bundle](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX) or another studio of your choice, before transmitting it, you have to place the **Live Shopping** component on your place of choice, which can be the store home page or a [landing page](https://help.vtex.com/en/tutorial/live-shopping-configuring-a-landing-page-for-live-shopping-events--4iBDPEpXyKSfoIqUdwHGFE). The configuration steps will vary according to your store frontend solution:

* [Store Framework (VTEX IO)](#store-framework-vtex-io)
* [Legacy CMS Portal](#legacy-cms-portal)
* [Headless CMS](#headless-cms)

<div class="alert alert-warning">
  <p>After configuring the <b>Live Shopping</b> component, it may take from five to ten minutes for the changes to reflect on the storefront, due to cache.</p>
</div>

## Store Framework (VTEX IO)

For stores using [Store Framework](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework), to place the **Live Shopping** component from the [Site Editor](https://help.vtex.com/en/tutorial/managing-page-and-template-content--3tMbx6HXy4Fy5r9EhboG37), follow the steps below: 

1. In the VTEX Admin, go to **Storefront > Site Editor**, or type **Site Editor** in the search bar at the top of the page.
2. On the list **Blocks** on the right corner of the page, select the **Live Shopping** block.
3. Activate the <i class="fas fa-toggle-on" aria-hidden="true"></i> `Show component` option.

  ![article_4_store_framework_EN](//images.ctfassets.net/alneenqid6w5/CU6g8lTpsQSvuq184znAP/cb0c60872f06b68d8177f2dd229e8562/article_4_show_component_EN.png)

4. Click the **Events (Live)** dropdown and select the desired event. The options presented are only events with `Live` [status](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#event-status).
5. Click `Save`.

## Legacy CMS Portal

For stores using [Legacy CMS Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), to place the **Live Shopping** component, follow the steps below: 

1. In the **Event Information** page of the [created event](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), click the arrow icon.
2. After [turning on the event](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq), go to the **CMS Configuration** section.
3. In **Script for template**, select `CMS template`.
4. Copy the code in **Script for template**.

  ![article_4_legacy_cms_portal_EN](//images.ctfassets.net/alneenqid6w5/7wrERw2I4eXzmfjNNPa6Bq/0c19515b146afd4e16b62af983d1e430/article_4_legacy_cms_portal_EN.png)

5. Go to **Storefront > Layout**, or type **Layout** in the search bar at the top of the page.
6. Click **CMS > HTML Templates**.
7. On the desired HTML file, paste the code.

## Headless CMS

For stores using [Headless CMS](https://help.vtex.com/en/tutorial/headless-cms-overview--3U5gvhHdQL0jczYH8gjX09), to place the **Live Shopping** component follow the steps below: 

1. In the **Event Information** page of the [created event](https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), click the arrow icon.
2. Go to the **CMS Configuration** section.
3. In **Script for template**, select `External template`.
4. Copy the code in **Script for template**.

  ![article_4_headless_cms_EN](//images.ctfassets.net/alneenqid6w5/2X3fPS70Z8i6TIvYTGUpM5/358355e937e855172b1275d5569b592b/article_4_headless_cms_EN.png)

5. Paste the code on the desired HTML file.

<div class="alert alert-danger">
  <p>After configuring the event, you can have a <a href="https://help.vtex.com/en/tracks/vtex-live-shopping-getting-started--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#preview">preview</a> by clicking the <code>Preview</code> button. However, since this preview displays only certain <b>Live Shopping</b> components, we highly recommend you to perform additional checks on the entire website to ensure everything is working properly.</p>
</div>
