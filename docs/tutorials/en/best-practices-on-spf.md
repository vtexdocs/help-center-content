---
title: 'Best Practices on Sender Policy Framework (SPF)'
id: 42t0lkl2VyC6Yewc4wA6wI
status: PUBLISHED
createdAt: 2017-08-09T16:58:00.716Z
updatedAt: 2023-03-10T18:49:18.935Z
publishedAt: 2023-03-10T18:49:18.935Z
firstPublishedAt: 2017-08-10T00:04:19.239Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: best-practices-on-spf
locale: en
legacySlug: best-practices-on-spf
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

[Sender Policy Framework](http://www.open-spf.org/Introduction/) (SPF) is a system that prevents unauthorized servers from sending emails on behalf of a domain. This system verifies if the server follows the policies determined by the administrator of that domain. This configuration is essential to avoid deliverability issues for transactional emails.

If you are trying to improve the deliverability rate of transactional emails in your store, consider [setting up DKIM](https://developers.vtex.com/docs/guides/setting-up-dkim-for-transactional-emails) as well.

## Understanding syntax

For syntax details, we recommend that you read the documentation [Sender Policy Framework SPF Record Syntax](http://www.open-spf.org/SPF_Record_Syntax/).

In the DNS manager, the SPF will be a TXT entry in the domain root (ex.: site.com) with the following format:

`site.com. IN TXT “v=spf1 a mx ip4:192.0.2.32/27 include:provedor.com -all”`

We can divide the policy above into the following sections:

- `v=spf1`: required prefix.
- `a mx ip4:192.0.2.32/27 include:provedor.com`: authorized senders.
- `-all`: condition for including or excluding senders except the ones previously declared.

When applied for authorized senders, the above rules mean a server can send messages on behalf of the given domain (site.com) if:

- `a`: its IP address is found in the domain's type A entry.
- `mx`: it is designated as the domain’s MX record.
- `ip4`: it belongs to the `192.0.2.32/27` IP address block.
- `include`: it satisfies the SPF rules in the referenced domain (provider.com).

The inclusion or exclusion condition can have the following values:

- `+all`: any sender will be authorized.
- `-all`: any sender (except the declared ones) will be rejected.
- `~all`: another verification step will be required to reject unauthorized senders.
- `?all`: the verification of unauthorized senders will be disregarded.

We recommend using -all, which has a better deliverability rate. Make sure all domains sending messages on your behalf are properly configured. Otherwise, messages will not be delivered.

## SPF in the VTEX context
VTEX uses the `include:amazonses.com` SPF. This is Amazon's transactional email sending service, used in the default sender (VTEX type) of Message Center.

See our article [Setting up the SPF](https://developers.vtex.com/vtex-rest-api/docs/setting-up-the-spf) for more details.
