---
title: My site is slow. What to do?
id: KdXFFAzwoCewqaSOmsigK
status: PUBLISHED
createdAt: 2018-02-06T13:14:40.270Z
updatedAt: 2019-12-31T14:24:30.944Z
publishedAt: 2019-12-31T14:24:30.944Z
firstPublishedAt: 2018-02-06T14:28:36.372Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_24
slug: my-site-is-slow
legacySlug: my-site-is-slow
---

Site performance should be a central concern for every store, since slow navigation decreases both the conversion of the store and its relevance to search engines like Google.

There are a number of reasons that can cause site slowness. In this article, we will list some of them.

If you believe your store is slow, check each of the scenarios below.

- [External Files](#external-files)
- [Synchronous requests](#synchronous-requests)
- [Too heavy images](#too-heavy-images)
- [Marketing tags, scripts and extensions](#marketing-tags-scripts-and-extensions)
- [Few cached pages](#few-cached-pages)

### External Files

If your store pages rely on external files to load, they may be held hostage by the response time of the servers delivering those files.

Ideally, __all the files used by your site should be stored in VTEX__. This is the case, for example, of images, videos, scripts, functions and advertising tags.

### Synchronous requests

External services that modify store pages can hold the full page load until they are executed.

Example: If your store makes a request for the script from a media partner directly through the CMS module, without the code being asynchronous ("async"), the page will only load after this script is executed.

In some cases this wait is required for the right functioning of the store. But in others it isn't. Imagine, for example, a chat box service. You don't need to stop loading the page until it runs.

### Too heavy images

When an image is sized larger than the one actally displayed on the site, the user's browser downloads the entire image and then reduces it when showing it to the user.

As a result, the page takes longer to load than it would need.

Images larger than necessary are a usual cause of slowness.

Understand this subject in depth by reading the article [Improving the performance of product images](/en/tutorial/improving-the-performance-of-product-images).

### Marketing tags, scripts, and extensions

It's critical that you be assured all of your store's extensions are there for a valid reason.

Otherwise, it may be that a third-party service is taking unnecessary loading time.

If you notice duplicate tags or tags that perform the same or similar functions, consider blocking or removing these requests through Google Tag Manager or any other tag manager.

### Few cached pages

If your store was recently implemented and still has few visits, several pages will not be cached.

When a user opens a page that is not cached, it is loaded "from scratch". Therefore, the loading time of this page becomes longer.

This is expected behavior for sites with few visits, but tends to be eliminated with increased traffic.
