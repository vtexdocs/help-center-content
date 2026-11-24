---
title: 'Why does the message "The TimeSpan could not be parsed..." appear when importing the shipping worksheet?'
excerpt: "TimeCost values under one day must not start with 00. Use hours, minutes, and seconds only, such as 24:00:00."
id: frequentlyAskedQuestions_6691
status: PUBLISHED
createdAt: 2017-04-27T22:22:14.460Z
updatedAt: 2019-12-31T14:24:54.975Z
publishedAt: 2019-12-31T14:24:54.975Z
firstPublishedAt: 2017-04-27T23:02:46.488Z
contentType: frequentlyAskedQuestion
productTeam: Shipping
author: authors_3
slugEN: why-does-the-message-the-timespan-could-not-be-parsed-appear
locale: en
legacySlug: why-does-the-message-the-timespan-could-not-be-parsed-appear
---

The following message usually appears when the TimeCost column starts with `00.`, which means the transit time is less than one day: "A planilha contém valores inválidos, por favor verifique a linha X coluna Y." The TimeSpan could not be parsed because at least one of the numeric components is out of range or contains too many digits.

To fix this, remove `00.` and leave only hours, minutes, and seconds. For example, change `00.24:00:00` to `24:00:00`.
