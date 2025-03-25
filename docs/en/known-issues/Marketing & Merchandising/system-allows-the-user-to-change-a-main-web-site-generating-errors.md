---
title: 'System allows the user to change a main Web Site, generating errors'
id: 1etuCzBmHEywwm02USmyW6
status: PUBLISHED
createdAt: 2017-06-14T18:44:43.954Z
updatedAt: 2022-12-22T20:48:39.505Z
publishedAt: 2022-12-22T20:48:39.505Z
firstPublishedAt: 2017-08-10T15:12:42.153Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: system-allows-the-user-to-change-a-main-web-site-generating-errors
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

In the CMS module, the system lets the user manipulate a Web Site A and point to a Web Site B as a parent.

If the user wants to return, there is no possibility to point the Web Site B to A, as a parent. With this, it generates errors in the site like the error below, and the admin becomes inaccessible.

![KI erro website](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Marketing%20&%20Merchandising/system-allows-the-user-to-change-a-main-web-site-generating-errors_1.png)

## Simulation

- Access the module __CMS__;
- Access Portal > Web Sites;
- In the first Web Site > Parent Web Site field, insert the Web Site referring to the Web Site 2;
- In the second Web Site > Parent Web Site field, insert the Web Site referring to the Web Site 1.

![KI erro website2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Marketing%20&%20Merchandising/system-allows-the-user-to-change-a-main-web-site-generating-errors_2.png)

## Workaround

When this type of problem happens, admin gets inaccessible, and product pages generate errors. The only solution is to roll back the configuration through the database.

