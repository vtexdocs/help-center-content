---
title: What to do when client doesn't get the password recovery token
id: 5jyaHYpuvK4uMuG0ksUKsa
createdAt: 2017-08-22T15:09:27.634Z
updatedAt: 2023-04-28T00:08:14.045Z
publishedAt: 
firstPublishedAt: 2017-08-22T15:13:14.166Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_35
slug: what-to-do-when-client-doesnt-get-the-password-recovery-notification
legacySlug: what-to-do-when-client-doesnt-get-the-password-recovery-notification
---

Sometimes a user has not used up all his password attempts, but still does not get the recovery notification. In this case the user is probably included in the Amazon Web Service blacklist. See [here](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppression-list.html) for information supplied by AWS about this list.

Amazon SES has a blacklist of email addresses which have recently caused a rejection bounce for any Amazon SES customer. This is an automatic operation carried out by Amazon and it does not mean that the email address will remain on the blacklist. It can happen when the supplier that sent the email is being hacked by other users.

But since VTEX uses the same platform for all its clients, the blacklist operates for the same dispatch quota and rejection rate. An email address can remain on the blacklist to up to 14 days.

If you find that the customer has not received an email and is not in the situation described above, get in touch with VTEX support to ask for his address to be taken off the blacklist.

Unfortunately Amazon has no automatic way to do this. It is still a manual process.
