---
title: 'marketingTags with null value when campaign audience is matched'
id: 17pTWB1gLNJgFy7KEZd8pk
status: PUBLISHED
createdAt: 2024-06-19T20:08:49.413Z
updatedAt: 2024-06-19T20:08:50.452Z
publishedAt: 2024-06-19T20:08:50.452Z
firstPublishedAt: 2024-06-19T20:08:50.452Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketingtags-with-null-value-when-campaign-audience-is-matched
locale: en
kiStatus: Backlog
internalReference: 1052895
---

## Summary


When an account has a campaign audience and a logged-in user is matched, checkout uses the information registered in the session, which only has the campaign's id. In `marketingTags`, it should have the campaign's name, but it's `null` as there is no information available in the session.


##

## Simulation



- Create a campaign audience;
- Log in with a user that the campaign is matched;
- Check the field `marketingData.marketingTags` in the orderForm, it will have a null value and the campaign's name.
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)


##

## Workaround


N/A



