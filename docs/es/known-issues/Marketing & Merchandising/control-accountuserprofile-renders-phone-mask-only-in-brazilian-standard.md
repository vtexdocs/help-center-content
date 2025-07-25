---
title: 'Control accountUserProfile renders phone mask only in Brazilian standard'
id: 76NuOCa920CYq2wSgSAyOc
status: PUBLISHED
createdAt: 2017-08-15T14:49:39.178Z
updatedAt: 2022-12-22T20:48:40.595Z
publishedAt: 2022-12-22T20:48:40.595Z
firstPublishedAt: 2017-08-15T15:01:09.167Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: control-accountuserprofile-renders-phone-mask-only-in-brazilian-standard
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The accountUserProfile control (viewPart) is rendering the phone mask only for the Brazilian standard: (99) 9999-99999. Countries that have other standards can not use the control without applying a customization (JS) over this field.

## Simulation

To simulate this scenario:

1. Set the "accountUserProfile" control on the template used by the "account" layout;
2. Access the page (/account) and confirm that the mask applied to the phone fields is in the Brazilian format.

## Workaround

To work around this scenario, use JS customizations to change the mask as needed. Also make adaptations with JS to give values to the phone fields, since with the change of the mask the field may become empty (even with the "value" property filled).

