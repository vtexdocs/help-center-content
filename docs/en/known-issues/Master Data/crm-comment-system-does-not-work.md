---
title: "CRM comment system does not work"
id: 6ND4BvFMWsCaMu6OuqaYqG
status: PUBLISHED
createdAt: 2019-01-07T17:54:17.690Z
updatedAt: 2022-12-22T20:48:59.020Z
publishedAt: 2022-12-22T20:48:59.020Z
firstPublishedAt: 2019-01-07T19:04:57.208Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: crm-comment-system-does-not-work
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

CRM comment system doesn't store the information that is entered.

The use of the comment system, be it directly or through triggers, is compromised.

## Simulation

1. Access https://{{account}}.vtexcrm.com.br;
2. Choose a document;
3. Type in the comment field and click on `Save`. The system will respond with "Your review has been saved successfully";
4. The comment disappears.

## Workaround

A possible workaround would be to create a field of type `Text` and make it visible on the form.

You can then create or edit the value of the field.

