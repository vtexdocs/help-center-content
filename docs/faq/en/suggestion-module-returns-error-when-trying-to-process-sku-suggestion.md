---
title: 'Suggestions module returns error when trying to process SKU suggestion. What to do?'
id: 2OAWpCkw3YQwWGAmss6sCG
status: CHANGED
createdAt: 2019-01-24T20:30:45.252Z
updatedAt: 2023-03-22T20:55:46.996Z
publishedAt: 2019-12-31T14:25:03.994Z
firstPublishedAt: 2019-01-24T20:30:45.711Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_24
slug: suggestion-module-returns-error-when-trying-to-process-sku-suggestion
locale: en
legacySlug: 
---

When trying to accept the suggestion of an SKU, the marketplace may receive the following error:

`We could not process the suggestion`

This happens when there is some error in the SKU registration in the seller.

To identify what the error is, follow the steps below:
1. Enter the __Suggestions__ module.
2. Click the SKU that the marketplace did not accept.![erroSuggestion1](https://images.contentful.com/alneenqid6w5/2T4ywpCeacosAGoQCS0k4M/f27f1729b879a02cd11f5bc916c8f8a6/erroSuggestion1.png)
3. Enter the browser __developer tools__ (for this, if you are using Google Chrome, press `F12` on Windows or` Command + Option + I` on the Mac).
4. In the developer tools, click the __Network__ tab.
5. Still in the developer tools, click the option __All__.![erroSuggestion2](https://images.contentful.com/alneenqid6w5/tXLZF0IEO4KKa6O4WuQg6/58adc90c3afa5ce2d02238079cabd958/erroSuggestion2.png)
6. Click the __Activate__ button of the Suggestions module.
7. You will see a list of the calls activated by the Accept button.
8. If one of them is in red and has `400` status, as in the image below, click on this call.![erroSuggestion3](https://images.contentful.com/alneenqid6w5/3aObfkI9zqSOaUmGqu8MMU/0532f37ce192de8b36672b7e633ab99c/erroSuggestion3.png)
9. You will see below the description of the error that caused the failure to process the SKU suggestion.![erroSuggestion4](https://images.contentful.com/alneenqid6w5/4yN8mswXdYoKO6wcsyO0eW/2de11f133c3ee911c1e712d7b1188711/erroSuggestion4.png)

To resolve the problem, the seller must resolve the error pointed out in this description.

After that, the suggestions will be updated in the marketplace, and can then be successfully approved.
