---
title: "[Mercado Livre] AD BuyBox doesn't update shipping_mode for ME2"
id: 5XmZsbZz1171a04dWPs2MY
status: PUBLISHED
createdAt: 2024-06-03T11:38:34.337Z
updatedAt: 2024-06-03T11:38:35.242Z
publishedAt: 2024-06-03T11:38:35.242Z
firstPublishedAt: 2024-06-03T11:38:35.242Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: mercado-livre-ad-buybox-doesnt-update-shippingmode-for-me2
locale: en
kiStatus: Backlog
internalReference: 1042779
---

## Summary


AD BuyBox doesn't update shipping_mode for ME2


##

## Simulation



Q: Why is the ad in under_review when I try to update ME2?
A: Today the status of this ad on MELI is under_review, this happens because it is a BuyBox type ad and in this case we cannot update it to ME2 because MELI doesn't allow it, and for this reason when we try to update MELI it returns the following moderation:


    Não é possível processar uma solicitação de um anúncio moderado pelo Mercado Livre.<br><br>Resumo da moderação: <br><br>Razão: Cancelamos o anúncio porque você só pode vender este produto com seu anúncio de catálogo. <br>Remédio: Cancelamos o anúncio porque você só pode vender este produto com seu anúncio de catálogo.


Q: So will this happen for all buybox ads?
A: No, this scenario will only happen when the case is for "Restrict catalog" where there can only be a BuyBox advertisement, not because it's BuyBox but because it's this specific Restrict type.

**SOLUTION**
As we don't have this ME2 update flow for buybox ads, we are opening this KI


##

## Workaround


Open a ticket to the connections team requesting an update for ME2, always informing the buybox ad ex: MLB36470123456





