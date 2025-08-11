---
title: 'Adapting your store’s front-end requisites to Master Data'
id: 5h9BKOee5usqOt9rbGKbdO
status: PUBLISHED
createdAt: 2019-08-30T17:26:33.530Z
updatedAt: 2020-04-02T16:47:26.778Z
publishedAt: 2020-04-02T16:47:26.778Z
contentType: updates
productTeam: Master Data
author: authors_31
slugEN: adapting-your-stores-front-end-requisites-to-master-data
locale: en
legacySlug: adapting-your-stores-front-end-requisites-to-master-data
announcementImageID: ''
announcementSynopsisEN: 'VTEX will discontinue Master Data CORS support starting on September 23rd.'
---

With its main objective of providing clients with an increasingly efficient experience, VTEX will discontinue Master Data CORS support starting. In order for your store to avoid any operational and browsing failure, follow this article’s instructions.

> ⚠️ Aligning this with the partnership we have with our clients and ensuring the least amount of friction possible to your operations, we have extended this resource's discontinuation date to October 7th, 2019.


### What is CORS?
CORS *(Cross-Origin Resource Sharing)* is a browser protection mechanism used when accessing information in a different domain from that where the user is browsing. Suppose that a user is accessing “vtex.com”. If a JavaScript resource needs to query information in another domain, such as “vtexday.com” for example, the browser performs a validation process to know if the “vtexday.com” domain allows queries from “vtex.com”. The process in itself is basically an additional requisition of the same JavaScript configured API but performed using the OPTIONS method. 

Click [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for more on CORS.

### Why are we discontinuing CORS support?
This change has two objectives:
- Remove an unnecessary call, making the service more efficient and, consequently, improving the customer’s experience when browsing on the site;

- Since the OPTIONS method is not cached by the CDN, your store may suffer from interruptions in service due to excessive use (throttling). We seek to avoid this unforeseen behavior.

### What needs to be done?
In order to adapt to this definition, your store’s front-end responsible developer must change the JavaScript requisitions that are launched in Master Data, always ensuring the call through the relative path, meaning through the own site’s domain.

In the example below, we have illustrated a wrong way to perform a Master Data requisition using CORS (jQuery example):

```$.getJSON(“https://api.vtex.com/{account}/dataentities/CL/search?_where=(email=test@test.com)“);```

You’ll notice that the requisition in this example is performed using the absolute path, meaning that the call URL contains both the protocol (https) and domain ([api.vtex.com](http://api.vtex.com/)). This format will no longer work starting from the above-mentioned date.

Below we have another example highlighting the correct way to perform the same requisition:

```$.getJSON(“/api/dataentities/CL/search?_where=(email=test@test.com)“);```

Observe that in call protocol and domain in the last example are not present. The browser will therefore not use CORS and perform the requisition through the site’s own protocol and domain, according to the correct format. Also note that the “/api” folder was added to the endpoint.

### What consequence may my store suffer if it doesn’t adapt?

The store may be impacted in a variety of ways, from a simple resource malfunction to sales interruptions, meaning that the impact will be proportional to the purchasing flow’s dependence on these Master Data requisitions.

Kindly share this article with your store’s front-end responsible developer. For more detailed information on this topic, get in touch with our customer service. We are ready to assist you with this revamping.
