---
title: 'Configuring the host and currency'
status: PUBLISHED
createdAt: 2025-11-20T17:57:33.273Z
updatedAt: 2025-11-20T17:57:33.273Z
publishedAt: 2025-11-20T17:57:33.273Z
firstPublishedAt: 2025-11-20T17:57:33.273Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: configuring-the-host-and-currency
locale: en
trackSlugEN: vtex-live-shopping-getting-started
order: 8
---

Once the event is configured, you have to set up your host and currency.

In the **Live Shopping** context, the host corresponds to the storefront home URL, and is used internally by the platform. On the other hand, the currency configuration determines how the price is displayed in the event.

## Setting up the host and currency

To configure the host and currency, follow the steps below:

1. In the VTEX Admin, go to **Apps > Live Shopping > Settings**, or type **Settings / Live Shopping** in the search bar at the top of the page.
2. In the **Store Host** section, fill in the `Host URL` field with the home URL, starting after the protocol (`http://` or `https://`) and the `www` prefix. For example, if the URL is `https://www.mystore.com`, enter `mystore.com`.

    > ❗ Even if the event is streamed from a different domain, the host must be the storefront home. Otherwise, the products might not be displayed correctly.

3. In the **Currency Display** section, fill in the **Choose displayed currency** field with the desired currency code. For example, `USD - United States dollar ($)`.
4. Click the **Choose display style** dropdown menu and select an option. For the previous example, `$` or `USD`.
5. Click the **Number of visible decimals** dropdown menu and select the number of decimals.
6. In the **Display taxes?** field, select `Yes` to display the taxes in the event, or `No` to hide them.
7. Review the **Display preview** to see how the currency will be displayed in the event.
8. Click `Save`.
