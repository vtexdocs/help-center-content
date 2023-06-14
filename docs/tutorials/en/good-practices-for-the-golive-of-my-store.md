---
title: 'Good practices for the Go-live of my store'
id: 2HhBfAzR4kmkwGA8WImEaC
status: DRAFT
createdAt: 2017-06-26T16:58:25.201Z
updatedAt: 2022-12-12T12:21:06.787Z
publishedAt: 
firstPublishedAt: 2017-06-26T23:15:02.601Z
contentType: tutorial
productTeam: Post-purchase
author: 5fYXkMJagMwcSAeMAsAuOI
slug: good-practices-for-the-golive-of-my-store
legacySlug: good-practices-for-the-golive-of-my-store
subcategory: wz3FvYTctwuCwG206QUAi
---

## WarRoom pre-Go-live
After all integration and navigation flows are established and developed, one of the most critical moments of the project are the end-to-end tests, where the user's navigation flows are validated and the billing tests are conducted. Certainly important issues to be solved will arise. 

<div class="alert alert-info">
The most important is that all decision makers are in the same desk (VTEX, Customer, Agency) to optimize the synergy and resilience of the team in case any issue or doubt arises. 
</div>

## Pre-Golive validation checklist
The following is a suggested spreadsheet including the main points of attention to validate the store, before performing Golive to the public: [Pre-Golive validation checklist](https://docs.google.com/spreadsheets/d/1demkpSZ2h7ut5TsKwiPdmK029BfaCp0wabeGADfA_W0/edit)

<div class="alert alert-info">
Recommended validation dates:
1. One month before the Go-live (to have time to take action if a blocking issue is detected).
2. One week before the Go-live (to have time to take action if a minor issue was forgotten or delayed).
</div>

## Security certificate and pointing VTEX domain

This process is conducted at the time of the GoLive of the store. It enables the current party responsible for the domain to point to VTEX. After this action, when accessing www.mystore.com, your new store will be pointed to VTEX.

<div class="alert alert-warning">
If you use Cloudflare as a DNS zone, it may be necessary to disable the DNS proxy (and consequently disable CloudFlare's CDN and WAF services). You can find more information in the article <a href="https://help.vtex.com/en/tutorial/disable-cloudflare-proxy--75QqsXAqR7NdkRc1GZPiXb">How to disable Cloudflare proxy</a>.  
</div>

The details of this process are presented here: [Setting up the pointing of DNS to VTEX](/en/tutorial/configuring-dns-pointing-to-vtex/).

<div class="alert alert-info">
The main recommendation is that a customer's employee with knowledge and experience in DNS performs this set up. If this set up is not correct, your store may be unavailable due to a human error. In case there is a problem, it is necessary to take action immediately to correct it and regain the stability of operations.
</div>

## Communication channel during Go-live
While the Go-live process is ongoing, in addition to the WarRoom, it is convenient to keep an active communication channel to share critical issues or urgent needs. Everyone should be aligned regarding the path to follow. 

<div class="alert alert-info">
To do so, it is usually convenient to open a Slack, Whatsapp or Skype channel during the week prior or subsequent to the Go-live, including all those involved in the project. 
</div>
