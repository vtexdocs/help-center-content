---
title: "Its not possible to create XML feed in HTTPS"
id: 1nWCF9Rq1GM6AScc0ce2M8
status: PUBLISHED
createdAt: 2017-07-09T23:54:48.739Z
updatedAt: 2019-12-31T15:18:00.585Z
publishedAt: 2019-12-31T15:18:00.585Z
firstPublishedAt: 2017-07-11T15:30:31.425Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Catalog
slugEN: its-not-possible-to-create-xml-feed-in-https
locale: en
kiStatus: Fixed
internalReference: 
---

## Summary

<div class="alert alert-success">
<b>Fixed</b><br>
XML URLs now follow the same protocol configured for the product page.
</div>

---

The XML feeds link that is created uses HTTP instead of HTTPS.

When you configure the feed on external partner systems, such as Google, a redirection to an HTTPS link is generated and this causes the metric parameters to be lost.

You must use the HTTPS link to keep the metrics.

## Simulation

1. Access Catalog > Settings > XML
2. Create an XML feed and get its URL
3. This URL will be in HTTP and when using it on any system that requires HTTPS, a redirect must be made that will cause the parameters that come in the URL to be lost.

## Workaround

Suggested architecture:
1. We suggest using the Search API to consume the catalog;
2. Generate the desired XML;
3. Expose the XML in an environment with HTTPS that allows it to be consumed externally.

This strategy is not only a workaround but also the suggested strategy for scalability and XML feed handling in large catalogs since it's possible to update the feed as often as needed, optimize the size of the XML and make it lighter, as well as have more product targeting options.

