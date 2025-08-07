---
title: "Intelligent Search multilanguage doesn't support 2 variations of the same language/idiom"
id: 2Qr9uJWwlr20NG29VU4tn2
status: PUBLISHED
createdAt: 2023-06-09T20:41:32.227Z
updatedAt: 2025-03-14T18:38:56.651Z
publishedAt: 2025-03-14T18:38:56.651Z
firstPublishedAt: 2023-06-09T20:41:32.884Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-multilanguage-doesnt-support-2-variations-of-the-same-languageidiom
locale: en
kiStatus: Backlog
internalReference: 841704
---

## Summary


When we use more than one locale in the account, the translation will be done based on the language in which the locale refers, and if we use more than one locale in the account, the translation will be done based on the language in which the locale refers.

When two different locale variations of the same language are used (i.e. `en-US` and `en-GB` or `en-CA`), the translations in Intelligent Search won't work properly because we will consider all of them as the same language (`english`). Only values for one of them (usually the one that comes first) will be used.

There are only two exceptions:

- `pt-BR` and `pt-PT`
- `es-ES` and `es-CA`


##

## Simulation


If you have a Binding list with multiple languages and try to use internationalization for the same root language, it will not work.


##

## Workaround


N/A





