---
title: 'Enable HTTPS throughout the site'
id: 1igIyCv5IiGWGIekqYYI02
status: PUBLISHED
createdAt: 2017-08-18T16:26:40.067Z
updatedAt: 2022-05-03T20:42:34.297Z
publishedAt: 2022-05-03T20:42:34.297Z
firstPublishedAt: 2017-08-19T00:17:36.439Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: enable-https-throughout-the-site
locale: en
legacySlug: enable-https-throughout-the-site
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

The HTTPS protocol causes data trafficked between the site and the user to be encrypted. It is essential for security, especially on pages that have forms with data collection.

Increasingly, Google, which is of course a major influencer of web technologies, has been encouraging the adoption of secure protocol. Nowadays, it is already very important that the site traffics 100% in HTTPS.

By default VTEX stores come with HTTPS enabled only on checkout pages, but the whole site has SSL certificate (created at the time of [pointing the domain to VTEX](/en/tutorial/configuring-dns-pointing-to-vtex), all you need to do is configure the protocol for each page of the site. When you have finished configuring, whenever a page is accessed in HTTP the user will be redirected to the same page in HTTPS.

For this we must:

1. Meet the [requirements](/en/tutorial/enable-https-throughout-the-site#requirements);
2. [Verify that the site works on HTTPS](/en/tutorial/enable-https-throughout-the-site#verify-if-the-site-works-on-https);
3. [Enable HTTPS on pages](/en/tutorial/enable-https-throughout-the-site#enable-https-on-pages).

## Requirements

Before activating HTTPS, it is necessary that its layout be adapted to the use of the protocol. Any HTTP request on an HTTPS page will be barred as it features mixed content. 

More information about this scenario can be found in the article [What is mixed content?](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), in Google's own documentation.

These HTTP requests are:: references to images, CSS files, JS and any resource through which your front-end will download and also communication with other pages and APIs (Ajax / XHR). Of course, not loading these resources can be harmful to the page, preventing the display of certain images, loading CSS styles or JS functions.

### Examples

- Calling a script with the following snippet would result in problems: `<script src="http://www.site.com/arquivos/funcao.js"></script>`
- The correct implementation would be: `<script src="https://www.site.com/arquivos/funcao.js"></script>`
- You can also use the relative protocol, in order to follow the same one in which the page is accessed: `<script src="//www.site.com/arquivos/funcao.js"></script>`
- For files hosted on VTEX the following format must always be used, which relates to the protocol and to the domain accessed: `<script src="/arquivos/funcao.js"></script>`

**Caution:** to call external routes to VTEX, first check whether the destination supports HTTPS.

## Verify if the site works on HTTPS

The most practical way to know if your site meets the requirements is to browse pages over HTTPS. To do this without actually activate it just use the beta environment (`{STORENAME}.vtexcommercebeta.com.br`), where all navigation is forced to pass through HTTPS. 

Any case of mixed content will be reported by the browser. Barred requests will be reported in the Dev Tools Network section.

## Enable HTTPS on pages

After checking and adjusting (if necessary) the entire layout, pages and site resources, we can already enable HTTPS without any problem. 

All pages on the site must be changed individually according to the article [How do I use the HTTPS protocol on my store’s pages?](/en/tutorial/how-do-i-use-the-https-protocol-on-my-stores-pages). Note that all checkout pages already come with HTTPS enabled by default.

You can change the protocol in all folders at once by using our API, documented [in this Postman collection](https://developers.vtex.com/reference/change-uri-schema). 

>⚠️ **Warning:** avoid having HTTPS enabled on only a few pages. When you access an HTTPS page, then go to an HTTP page from the same store, the browser will try to read your resources forcibly over HTTPS, and this can cause problems.
>
> It is appropriate to enable HTTPS throughout the site at one time.
>
> The same goes for desktop and mobile websites (child website), where it is necessary to treat the HTTPS of both at the same time.

## Limitations

### Loss of parameters

This [known issue](/en/known-issues/campaign-parameters-are-lost-when-http-is-redirected-to-https) has been solved! With the use of the [new VTEX CDN](/en/tutorial/activating-new-vtex-cdn), redirection between pages retains the original parameters.

### XML URLs

This [known issue](/en/known-issues/its-not-possible-to-create-xml-feed-in-https) has been solved! XML URLs will now follow the same protocol configured for the product page.
