---
title: 'What can I do if a customer is unable to log in?'
id: 1DISDN4tFaSSccu2WK2amG
status: PUBLISHED
createdAt: 2017-05-09T13:46:57.095Z
updatedAt: 2019-12-31T14:25:13.615Z
publishedAt: 2019-12-31T14:25:13.615Z
firstPublishedAt: 2017-05-09T13:48:52.807Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_35
slug: what-can-i-do-if-a-customer-is-unable-to-log-in
legacySlug: what-can-i-do-if-a-customer-is-unable-to-log-in
---

VTEX ID has a rule to stop users trying to misuse another person’s login, so that after 3 incorrect tries the email is blocked for __1 hour__.

At the end of this time it is automatically unblocked, but it is impossible to do this manually.

This applies both to the store’s customers and to administrative access, and even to the APIs.

---


There is another similar situation, when a user has not used up all his attempts, but still does not get the password recovery notification. In this case the user is probably included in the Amazon Web Service blacklist. See [here](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppression-list.html) for information supplied by AWS about this list.

Amazon SES has a blacklist of email addresses which have recently caused a rejection bounce for any Amazon SES customer. This is an automatic operation carried out by Amazon and it does not mean that the email address will remain on the blacklist. It can happen when the supplier that sent the email is being hacked by other users.

But since VTEX uses the same platform for all its clients, the blacklist operates for the same dispatch quota and rejection rate. An email address can remain on the blacklist to up to 14 days.

If you find that the customer has not received an email and is not in the situation described above, get in touch with VTEX support to ask for his address to be taken off the blacklist.

Unfortunately Amazon has no automatic way to do this. It is still a manual process.
