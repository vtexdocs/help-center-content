---
title: "Customer domain not displayed on the IdP screen"
id: 4o0Iwoaw04BRirMYtueV57
status: PUBLISHED
createdAt: 2025-06-26T14:36:26.444Z
updatedAt: 2025-06-26T21:58:42.187Z
publishedAt: 2025-06-26T21:58:42.187Z
firstPublishedAt: 2025-06-26T19:28:06.890Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: customer-domain-not-displayed-on-the-idp-screen
locale: en
kiStatus: Backlog
internalReference: 1250421
---

## Summary


In the OAuth authentication, the user is redirected to a URL by the IdP after login. Some providers show the domain of that URL on the login page, and sometimes customers prefer to display their own domain in this page (especially Google message "to continue to {domain}"). If the domain has a root path, like "domain.com/en" for example, because of this rootpath is different of `/` the customer domain isn't displayed, being displayed instead a VTEX domain like vtexcommercestable.com.br, for example.


##

## Simulation


Here follows the steps to simulate the issue:

- Pick an account with a domain rootpath different of `/` (`/en`, `/es`,  `/pt` are good examples);
- Set the attribute `usesOwnDomain` to true for the account;
- The domain needs to be included in the trusted URIs of the provider;
- Access the webstore and choose to log in with this provider (Google for example), you'll see that the domain won't be displayed on the provider login page.


##

## Workaround


There is no workaround available.





