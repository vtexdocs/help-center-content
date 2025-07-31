---
title: 'How the cache works'
id: tutorials_258
status: PUBLISHED
createdAt: 2017-04-27T22:11:32.790Z
updatedAt: 2021-12-03T20:51:39.557Z
publishedAt: 2021-12-03T20:51:39.557Z
firstPublishedAt: 2017-04-27T23:03:11.364Z
contentType: tutorial
productTeam: Identity
author: authors_3
slugEN: understanding-how-the-cache-works
locale: en
legacySlug: understanding-how-the-cache-works
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

The cache is very widely used as a rapid-access device. It is the same with VTEX. We use the cache as a resource to speed up the loading of pages and files.

How does it do it?

When a page or file starts loading, from the URL, the browser submits a request to the server which, in turn, has to supply information relevant to the request. 

The browser submits a **request** and the server’s reply is its **response**. These terms will be used frequently in this article. 

See the schematic chart shown below:

![How the cache works - communication between server and browser](https://images.ctfassets.net/alneenqid6w5/6ONSKQqdEoIsHxcvfp5GoS/c0dd7b6c39dd72bc71c60185e926fa67/1_EN.png)

The cache is represented by a layer between the browser and server. So when a **request** is made, instead of the system going straight to the server to find the information, it first goes to this layer, which makes the response much quicker. A schematic diagram is shown below:

![How cache works - communication with cache (without expiring)](https://images.ctfassets.net/alneenqid6w5/15ss3biutJhXX2WkG9k8xG/fa4aaef1190355a31e8afb5b08a85630/2_EN.png)

However, since the latest information is in the server, the cache has to be updated from time to time. The frequency varies according to the type of **request**: it is different for a single page, for a java script or CSS file, or for an image.

A website has a large number of pages: the home page, department and category pages, brands, searches, products etc. Depending on the category and product mix trees, a site can have more than 10 thousand pages.

Each of these pages is loaded from a URL, so if a website has 10 thousand pages, it will also have 10 thousand different URLs. 

The cache layer saves a version of each of these pages (URLs), so when the user clicks on a product on one of the site displays, the page for that product starts being loaded with the cached information from that product URL. 

The same thing happens with the other pages of the site. What is most important here is to understand that the cache storage is always based on URLs.

If we think of the cache layer as a data bank (or an Excel worksheet), in general terms it would look like a table with two columns: URL and content. 

The “URL” column representing the name of the cached **request **(page or file) and the “content” column representing the html code or binary code (in the case of files) for that **request**.

So when a **request** is made, the system searches on this big table, from the “URL” for the “content”, and returns it to the browser.

As mentioned the cache duration time varies for each type of **request**. The following table shows the cache time for each type of **request**:

| Request                      | Format (MIME Identifier) | Duration           |
|------------------------------|--------------------------|--------------------|
| Page/Document                | text/html                | At most 30 minutes |
| Image (jpeg, gif, png, ico)  | image/*                  | At most 1 hour     |
| Javascript                   | text/javascript          | At most 1 hour     |
| CSS                          | text/css                 | At most 1 hour     |

When a **request** cache (page or file) expires, and you make a new request (i.e. load the URL again) the system goes to the server, collects the latest information and updates the content of the URL in the cache. Once updated, the cached version will be returned for a new request for the URL. The following illustrates how this works:

![How cache works - communication with cache (expired)](https://images.ctfassets.net/alneenqid6w5/e5oS6cve6yw1tS81PYkBK/5ab850cc08928054e7c5133016702c17/3_EN.png)

So we can separate responses into two groups: cached and not cached.

- __Cached responses__: These are responses returned by the cache layer, with a better performance.
- __Non-cached responses__: Responses where the cached version has expired. They are returned by the server and are usually slower.

To actually find out whether a response is cached or not, access the browser developer tools and look for native **requests** on the VTEX platform. 

When you click on the request, upon the first page reload, find among the headers the property “X-VTEX-Cache-Status-Janus-Edge”. If the value is entered as “HIT”, it means that the content shown is cached, i.e. it was returned by the cache layer. 

If the value is “MISS”, it means that the content is not cached but was returned directly by the server. Another important detail that can be found from the **request** headers is the date when the cache was created. This is shown in the property `X-vtex-processed-at`.

![](https://images.contentful.com/alneenqid6w5/5GPSsb4UWA28QS4soyguSI/8772946997cc979ddf9c2297f2ca8bb6/cache.png)

JavaScript and CSS files also have a fixed cache duration, but as they are used in formatting layouts and thus sometimes need to work more quickly, the portal is able to identify changes in their content, and break through the cache layer. 

In general, if a java script or CSS file is altered in the Portal Manager (/admin/a/), it will be updated as soon as the cache of the page calling it expires. However, for this to work, the call on the template cannot have any query string, i.e. it must be clean, without parameters.

- Price changes can take up to 30 minutes.
- Changes in catalogue data (product, SKU, category, brand, etc.) can take up to 2 hours.
- Layout changes can take up to 40 minutes.

Although this may appear complex, the cache layer is really quite simple and it is extremely beneficial for the performance of the store as a whole.
