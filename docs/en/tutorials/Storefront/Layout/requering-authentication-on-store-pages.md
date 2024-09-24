---
title: 'Requering authentication on store pages'
id: 3iPNIUgcr60Es24Y4YIwms
status: ARCHIVED
createdAt: 2018-01-22T22:30:59.147Z
updatedAt: 2021-05-27T18:30:38.021Z
publishedAt: 
firstPublishedAt: 2018-01-23T13:07:24.636Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: requering-authentication-on-store-pages
locale: en
legacySlug: requering-authentication-on-store-pages
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

You may require that for certain pages of the store users need to authenticate through VTEX ID - that is, you may require that they log in to these pages.

Some pages come with this setting by default. For example, the `/Account` and `/Account/Orders` pages.

![authenticationRequired](//images.contentful.com/alneenqid6w5/60cIIkiKDSEs2ocmqescgM/3f5a0c46d61c1002c22bc7b5469db7eb/authenticationRequired.png)

But you can either remove the authentication requirement for these pages or insert it into other pages.

To do this, follow the steps below:
1. Access the __CMS__ module.
2. Click the folder for the desired page.
3. Click the __Edit__ button.![editFolder](//images.contentful.com/alneenqid6w5/2DSRmQFQxeAYcoiWCAaU62/bc08bd32b394545d8af716338d55a0be/editFolder.png)
4. Check or uncheck the __Authentication Required__ flag.![authenticationRequiredFlag](//images.contentful.com/alneenqid6w5/3iK3iGguAUg84KuAsC4MYW/1dcdae221b886b4a4d1cdc4eb87af9a4/authenticationRequiredFlag.png)
5. Click __Save Folder__.

Note that whenever the __Authentication Required__ flag is checked for a folder, the URL of this page will be created with the `_secure` route. Ex: `http://{AccountName}.vtexcommercestable.com.br/_secure/account/`

### Authentication and caching

Above the Authentication Required flag is the page cache type information (__Cache Type__).

These two settings (authentication and caching) are closely related because pages that need authentication can not have caching. This is necessary because if there was chache in a page with login, a user's authentication data could be cached and displayed to another user.

Therefore, when you check the Authentication Required flag, you will see that the Cache Type will automatically change to `No Cache`.

On the other hand, if you clear the Authentication Required flag, the Cache Type will change to `Local and Remote`, as in the case of the image above.

### Protecting sensitive information

Pay attention to pages with sensitive information. Typically, they need to require authentication.

This is the case, for example, of the `/Account/Orders` client order page, which, by default, already comes with the Authentication Required flag checked when the store receives its environment for the first time.

If this page is not checked with the Authentication Required flag, it may happen that - due to cache - personal information of a client is shown to other clients.
