---
title: 'Installing VTEX Sales App'
status: PUBLISHED
createdAt: 2026-09-22T00:00:00.000Z
updatedAt: 2026-09-22T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: installing-the-vtex-sales-app
locale: en
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 4
---

After checking the [requirements](XXX) and defining your [operation's architecture](XXX), follow the steps in this article to install **VTEX Sales App** on your main account.

## Installation in the VTEX Admin

> ⚠️ **Sales App** is installed only on the main account and doesn't require changes to franchise accounts.

1. Go to [VTEX Sales App setup](https://apps.vtex.com/vtex-assisted-sales-admin/p) in the VTEX App Store. You can also access it through the VTEX Admin by going to **Apps > Extensions Hub > App Store > VTEX Sales App**.
2. Click `Get App`.
3. Enter your VTEX main account name and click `Confirm`.
4. Click `Place Order`.
5. Click `Go to installation page` to access the app in the VTEX Admin.
6. Click `Install`. A modal window with the **Terms of Use** will open. Click `Install` again in this window to accept the terms and complete the installation.

Once that's done, the `checkout-instore-custom.js` and `checkout-instore-custom.css` files will be available on the **Default** website. To view them, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Checkout** or type **Checkout** in the search field.
2. Click the gear icon next to the **Default** field.
3. Click the **Code** tab.
4. In the **Files** section, you'll see the `checkout-instore-custom.js` and `checkout-instore-custom.css` files.

> ⚠️ By default, **Sales App** should always be used on the `default` site of the main account to simplify store operations and prevent errors.

To confirm that the files are on the correct website, make sure the URL of the **Code** tab includes `default`, for example: `https://{accountName}.myvtex.com/admin/portal/#/sites/default/code`.

## Installation on mobile devices

> ❗ Before using **Sales App** on mobile devices, you need not only to install **Sales App** in the VTEX Admin but also to complete its [basic settings](XXX), as explained in the next article in this track.

After installing and [configuring](XXX) **Sales App** in the VTEX Admin, you can use it on mobile devices, such as tablets or smartphones. See the download links for each operating system below:

| Operating system | Download link |
|------------------|---------------|
| Android | [Google Play](https://play.google.com/store/search?q=VTEX%20sales%20app&c=apps&hl=pt_BR) |
| iOS | [Apple App Store](https://apps.apple.com/us/app/vtex-sales-app/id1100390867) |
