---
title: "Configuring your network's firewall access rules to allow the new domain"
id: 1ib1hW8UJlR7SniuFTHzx4
status: PUBLISHED
createdAt: 2020-01-06T17:05:54.548Z
updatedAt: 2020-01-08T19:28:41.329Z
publishedAt: 2020-01-08T19:28:41.329Z
contentType: updates
productTeam: Reliability
author: authors_31
slugEN: 2020-01-06-configuring-your-networks-firewall-access-rules-to-allow-the-new-domain
locale: en
legacySlug: configuring-your-networks-firewall-access-rules-to-allow-the-new-domain
announcementImageID: ''
announcementSynopsisEN: 'VTEX will change the domain that loads files. Review your firewall rules to ensure the domain is enabled.'
---

On __January 20th, 2020__, VTEX will implement a change to the domain that is responsible for loading image files, javascript and CSS on the platform. Check whether your operation's network, due to a firewall rule, has any rule that blocks the new domain from loading.

## What will change?

The `vteximg.com.br` domain, responsible for delivering your store's image files, javascript and CSS, will be replaced by the new `vtexassets.com` domain, both for the purchasing context, meaning your store's consumer browsing context, as well as for the admin dashboard.

## Why is this change being implemented?

The new vtexassets.com domain uses a more efficient file compression algorithm, which ensures a higher performance when loading and therefore a more user-friendly experience.

## What do I need to do?

Contact the operation's IT team which is responsible for the network firewall settings and infrastructure, and forward them this message. 

This team will need to __revise the firewall rules and tweak them to ensure the vtexassets.com domain's access__.

>ℹ️ Note: You will not need to make any adjustments in the front end as the domain `vteximg.com.br` will continue to work for customizations.

## What impact may befall your operation if the adjustment does not occur?

If this adjustment does not occur, as of the date mentioned in this email, your store's admin dashboard may behave unexpectedly, causing navigation and random actions errors.
