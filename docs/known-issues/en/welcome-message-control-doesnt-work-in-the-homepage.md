---
title: Welcome Message control doesn't work in the homepage
id: 38WkIwnvReicEOu6eOccuY
status: PUBLISHED
createdAt: 2017-04-26T23:34:28.335Z
updatedAt: 2022-12-22T20:48:55.961Z
publishedAt: 2022-12-22T20:48:55.961Z
firstPublishedAt: 2017-04-26T23:44:20.501Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: welcome-message-control-doesnt-work-in-the-homepage
kiStatus: Backlog
internalReference: 
---

## Summary

The Welcome Message control (`<vtex.cmc: welcomeMessage/>`) is responsible for rendering the HTML snippet that displays the welcome message to the user as well as the login link.

When copying a Web Site Binding, we realize that this control does not appear in the template that is used in more than one Web Site. For example, in the Home template.

## Simulation

- Enter the CMS module
- Click on the Web Sites folder
- Click on the Web Site
- Click on the option "Copy Web Site"
- Set it as you want (Web Site name, links, etc.)
- Save Web Site
- In the Home template, use the same template used by the other Web Site
- Save the layout
- Access the template

## Workaround

As a workaround, we recommend that a prefix or suffix is used in the template name to identify the deletion intention.

Example: 
From `Home` to` Trash-Home`

