---
title: Why were products not sent to the marketplace?
id: frequentlyAskedQuestions_727
status: PUBLISHED
createdAt: 2017-04-27T22:27:52.318Z
updatedAt: 2019-12-31T14:24:53.255Z
publishedAt: 2019-12-31T14:24:53.255Z
firstPublishedAt: 2017-04-27T23:02:34.481Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: why-were-products-not-sent-to-the-marketplace
legacySlug: why-were-products-not-sent-to-the-marketplace
---

Products are sent to the marketplace by means of two major processes: the process of integration itself, which can be monitored by Integrations and the cataloguing process, which is done by the marketplace. More details about these two processes are given below.

## Check the Integrations

Integrations are the first place you should check if there is a problem. [Access it and check the integration status of each product](/en/tutorial/checking-integrations-in-bridge).

If a product is not registered, it may mean that it was not configured correctly, and so you must [revalidate the marketplace configurations](/en/tutorial/integrating-with-marketplace/).

In the Integrations records, the most common problems are:
- Product inactive.
- SKU out of stock for the sales policy of the marketplace.
- SKU price not valid.
- SKU without logistics for the sales policy of the marketplace.
- Product does not have the "Flag resellers" active for the marketplace's trade policy.
- SKU not part of the collection sent to the marketplace.

To correct, just adjust the incorrect item and wait for the product to be indexed, monitoring the process in the Integrations.

## Understand the cataloguing process

Cataloguing is adjusting all the products integrated with the categories and brands of the marketplace. This process is carried out exclusively by the marketplace, and VTEX has no means of interfering with it.

Normally this is a manual process, and it varies from marketplace to marketplace. To find out if your product is being catalogued, contact your marketplace.

## How to solve it

For all these problems, the recommended solution is to [reprocess the product through Integrations](/en/tutorial/checking-integrations-in-bridge).
