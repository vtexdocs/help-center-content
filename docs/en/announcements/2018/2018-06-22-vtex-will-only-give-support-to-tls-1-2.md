---
title: 'VTEX will only give support to TLS 1.2'
id: 63OshDDS6cmcKKmau6aQUA
status: PUBLISHED
createdAt: 2018-06-22T16:25:55.532Z
updatedAt: 2019-12-31T15:12:50.508Z
publishedAt: 2019-12-31T15:12:50.508Z
contentType: updates
productTeam: Reliability
author: authors_24
slugEN: 2018-06-22-vtex-will-only-give-support-to-tls-1-2
locale: en
legacySlug: vtex-will-only-give-support-to-tls-1-2
announcementImageID: 'undefined'
announcementSynopsisEN: 'As of June 30th, TLS previous versions and all SSL versions will be deprecated.'
---

As part of our constant improvement, we will only give support to integrations using the __TLS 1.2 protocol__. As of __June 30th__, TLS previous versions and all SSL versions will be deprecated. Those changes are PCI DDS compliant and are necessary to keep the platform secure.


## What you need to do
__If you're part of an agency or a payment provider__ and uses the Payments' API, then you must review your integrations and upgrade to __TLS 1.2__ as soon as possible.

You can test your connection from the server that connects to our endpoints. Just make a GET request in the following URL: `https://securetlspci.vtexpayments.com.br/`. If it returns `200 OK`, that means you're already compliant with the __TLS 1.2 protocol__. Therefore, you won't need to perform any actions. See the example below:

    curl -X GET \
    https://securetlspci.vtexpayments.com.br/ \
    -H 'accept: text/html'
    

## If you work on a store
Stores don't need to take any actions. But feel free to contact your agency or provider and check if their payment integrations are already compliant with the __TLS 1.2 protocol__.
