---
title: 'How VTEX Healthcheck works'
id: 4Dkcpwvbm0mWOOyimwCaWw
status: DRAFT
createdAt: 2019-01-24T20:45:43.117Z
updatedAt: 2023-05-08T19:39:43.547Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:13:46.649Z
contentType: tutorial
productTeam: Others
author: authors_59
slug: how-vtex-healthcheck-works
legacySlug: how-vtex-healthcheck-works
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

VTEX Healthcheck is a public page that aims to monitor the status of our platform services. At Healthcheck, we have over 100 tests running per minute. Through this dashboard, you can track the health of each module in real time.

## How the status tests work

Each module has robots that make requests with the goal of checking the status of the service. If the module responds successfully, it means the service is working correctly. In Healthcheck, the module will appear with the `Healthy` sign.

If the robot receives an unexpected response __twice__, a `Warning` alert will appear in this module's box in Healthcheck. At this stage, our team will be already mobilizing to resolve a possible instability of the module. At this point, your store is __not__ being impacted.

If the robot receives an unexpected answer __three times in a row__, an `Unhealthy` alert will appear in this module's box in Healthcheck. If this instability is affecting your store's sales, this will be reported on our [status page](http://status.vtex.com/).

## What each box in Healthcheck means

### Orders I and Orders II

These boxes monitor the closure of purchases in stores. If they are marked `Healthy`, it means that purchases are being closed normally.

In __Orders I__, the tests are done from our internal network. In __Orders II__, the tests are done from an external network. These two checks are important for testing connectivity from different datacenters.

### Promotions & Taxes

Monitors the module responsible for benefits.

### Payments

Monitors the module responsible for payment services.

### JANUS

Monitors whether requests are being routed correctly for each module.

### PortalV2

Monitors the Checkout front-end.

### Profile System

Monitors the module responsible for storing your customers' information.

### Dynamic Storage

Monitors the module responsible for data structures of Master Data.

### Fulfillment

Monitors the module responsible for the sales of the store acting as a seller.

### Logistics

Monitors the module responsible for logistics information management (Inventory, Docks, Carriers, Reservations etc.)

### License Manager

Monitors the module responsible for the management of accounts, permissions and platform roles.

### VTEX ID

Monitors the module responsible for identifying users on the platform.

### Workflow

Monitors the module responsible for the Order Flow information.

### Catalog System

Monitors the module responsible for information management in the store catalog.

### File System

Monitors the department responsible for the archives of your store. This includes product image files, `.css` files, `.js` files, and so on.

### Giftcard

Monitors the service responsible for creating and maintaining vouchers.

### Master Data

Monitors the Master Data service.
