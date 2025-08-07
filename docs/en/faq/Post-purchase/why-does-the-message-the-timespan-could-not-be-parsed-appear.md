---
title: 'Why does the message "The TimeSpan could not be parsed... " appear when importing the shipping worksheet?'
id: frequentlyAskedQuestions_6691
status: PUBLISHED
createdAt: 2017-04-27T22:22:14.460Z
updatedAt: 2019-12-31T14:24:54.975Z
publishedAt: 2019-12-31T14:24:54.975Z
firstPublishedAt: 2017-04-27T23:02:46.488Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_3
slugEN: why-does-the-message-the-timespan-could-not-be-parsed-appear
locale: en
legacySlug: why-does-the-message-the-timespan-could-not-be-parsed-appear
---

The message "A planilha contém valores inválidos, por favor verifique a linha X coluna Y. erro: The TimeSpan could not be parsed because at least one of the numeric components is out of range or contains too many digits." normally appears when the TimeCost column starts with `00.`, i.e. when the cost time is less than 1 day.

In this case, to correct it you must delete the value `00.`, leaving only the values for hours, minutes and seconds. For example: `00.24:00:00` leave only `24:00:00`.
