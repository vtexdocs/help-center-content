---
title: 'Google Search Console Tracking – Tracking errors'
id: tutorials_568
status: PUBLISHED
createdAt: 2017-04-27T22:00:16.796Z
updatedAt: 2020-04-06T20:03:36.157Z
publishedAt: 2020-04-06T20:03:36.157Z
firstPublishedAt: 2017-04-27T23:03:39.657Z
contentType: tutorial
productTeam: Others
author: authors_84
slugEN: google-search-console-tracking-tracking-errors
legacySlug: google-search-console-tracking-tracking-errors
locale: en
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

The **Tracking errors** section of Google Search Console lists the errors identified by Google crawlers.

The Erros de Rastreamento section comprises two checking groups: **Website Errors** and **URL Errors**.

### Website Errors

Checks the quality of the principal means of access to the website

- **DNS:** displays the history of errors in requests to the store DNS.
In case a DNS error is identified, the store must check the DNS settings and, if the DNS was not pointed to VTEX, the availability of the hosting service should also be checked.
- **Server Connectivity:** shows the history of connectivity errors, which are divided into Tempo limite da conexão, Falha na conexão and Sem resposta.
In case of server Connectivity errors, you will have to analyze the continuity of errors. Specific errors may relate to instability in the store website, while successive errors will require checking the host server.
- **robots.txt Search:** shows the history of errors in queries made to the store’s robots.txt file.
In case of errors, users must check whether the robots.txt file can be accessed through their production URL. E.g.: http://www.store.com/robots.txt

### URL Errors

This section shows the errors identified by Google crawlers, segmented by device since the last corrections made.

- **Desktop:** list all errors identified by crawlers.
- **Mobile:** list the errors identified only by crawlers that simulate mobile devices.

## Improving the indexing

In order to improve indexing of your store on Google Search Console, follow the steps below:

### Queries

Crawlers continuously browse all web links identified. When accessing a link that returns an error, crawlers create a log on this webpage.

Google Search Console lists all logs since the last correction made in the panel. If no correction has been made, or if the last correction has been made a long time ago, you will have to mark all errors as corrected. This way, the history will be completely removed, enabling new queries and the correct identification of URLs that still show errors.

Os crawlers do Search Console identificam os seguintes erros:

- **301 – Moved Permanently:** Despite being classified as “error,” this is only a reply indicating that the URL intended was redirected to another URL.
- **404 – Not Found:** Page not found.
- **500 – Internal Server Error:** “Houston, I have problem!” &#8211; there is a problem with your server or your scripts. As a rule, error 500 is due to a mistaken rule or a syntax error in the indexed URL. Filter parameters that are no longer available may also generate errors.

### Correction

- **Mapping:** in case you identify important URLs, and intend to keep the link indexed, you will have to create a URL mapping on the VTEX portal by redirecting the traffic of the URL with error to a URL that is accessible and important. Know how to create URL mapping on VTEX.
- **Indexation removal: **if you identify URLs with error with no importance for your store’s strategy, you will have to remove the URL indexation in the option “Excluir URL Indexada” of Google Search Console.
