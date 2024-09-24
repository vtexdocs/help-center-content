---
title: "Review your store's CAA record"
id: 4mBSMpdCByI4c6G64G82Um
status: PUBLISHED
createdAt: 2018-11-01T14:32:53.355Z
updatedAt: 2019-12-31T15:13:16.147Z
publishedAt: 2019-12-31T15:13:16.147Z
contentType: updates
productTeam: Reliability
author: 245tA425AIeioKAk2eaiwS
slugEN: check-your-stores-caa-record
locale: en
legacySlug: check-your-stores-caa-record
announcementImageID: ''
announcementSynopsisEN: 'We recommend you to update your CAA record on your DNS domains until November 9.'
---

With __Black Friday__ just around the corner, we recommend you to update the CAA records of your DNS management system until __November 9__. This is an action required to generate and update the SSL certificates, necessary to use VTEX's CDN.

>⚠️ **Attention:** Depending on your DNS management system, this kind of entry may not be available. However, sometimes those services offer the possibility of managing the CAA records through their support channel.

## What you need to do
Check on your DNS management setup (or ask someone responsible for managing your store's domains) if the following records are set up like the examples below:

- `domain.com.    CAA     0   issue   “letsencrypt.org”`
- `domain.com.    CAA     0   issue   “comodoca.com”`
- `domain.com.    CAA     0   issue   “digicert.com”`
- `domain.com.    CAA     0   issue   “globalsign.com”`


## What's the impact?
Setting up the new CAA records will only allow the __Digicert__, __Comodo__, __Globalsign__, and __Let's encrypt__ entities to generate and renew certificates for your domain. __These certificates are actually requirements for your store to use VTEX's CDN and achieve superior performance.__ If you don't update the CAA records, your store will experience performance issues and will have a slower loading speed.

>ℹ️ Stores that don't have CAA records set up **don't need to do anything** and **won't have impacts**.


## Useful resources
- [https://letsencrypt.org/docs/caa/](https://letsencrypt.org/docs/caa/)
- [https://sslmate.com/caa/](https://sslmate.com/caa/)
- [https://sslmate.com/caa/about](https://sslmate.com/caa/about)
