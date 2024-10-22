---
title: 'How the suspicious purchase notice on VTEX DO works'
id: tutorials_7102
status: ARCHIVED
createdAt: 2017-04-27T21:48:17.808Z
updatedAt: 2020-01-08T20:23:04.348Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:20.650Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-the-suspicious-purchase-notice-on-vtex-do
locale: en
legacySlug: understanding-the-suspicious-purchase-notice-on-vtex-do
subcategoryId: unknown-subcategory
---

VTEX is concerned about ensuring the safety of your store operations. For this reason, we have developed an integration between SherlockBOT and VTEX DO that notifies you about any suspicious behavior identified upon closing of the purchase.

### What the SherlockBOT is

SherlockBOT is a robot that sweeps all VTEX stores searching for closing patterns of suspicious purchases. It works based on a set of pre-defined rules. 

### How the shopkeeper is alerted

When SherlockBOT identifies a closed order that may indicate a malware, the retailer is notified through [VTEX DO](/en/tutorial/understanding-the-task-list-vtex-do) – VTEX’s task manager – which sends an alert to the store admin through the Payments module. 

See an example of this alert in the screenshot below:

![sherlock (1)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/understanding-the-suspicious-purchase-notice-on-vtex-do_1.png)

The retailer may also be included in the Gateway’s security barriers, that is, VTEX may apply protection rules to your store to protect it against credit card tests.  

When a suspicious behavior is identified, these rules are enabled.  This way, the order will still be processed, but we carry out a subsequent processing that will block credit card testing.

To apply these rules to your store, just enter ‘Yes’ in the comment field of the alert sent by VTEX DO.

**Important:** SherlockBOT will not send alerts regarding orders requested through Telesales operators.  This means that such orders are not deemed as “suspicious behavior,” and VTEX DO will not display them.

_Please note that SherlockBOT **does not** replace, and is not intended to replace, your anti-fraud system.  It will just block clearly suspicious transactions aiming at protecting your store and reducing the cost of unnecessary analyses.  The anti-fraud system will continue to be crucial for the safety of your store and protection against *chargebacks*._
