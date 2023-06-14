---
title: 'Modificar un Cookie'
id: 37m4zqneEUaOmAKokqWS6w
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.039Z
updatedAt: 2019-12-31T15:19:43.194Z
publishedAt: 2019-12-31T15:19:43.194Z
firstPublishedAt: 2019-01-24T22:03:00.444Z
contentType: tutorial
productTeam: Others
author: authors_35
slug: como-modificar-un-cookie
legacySlug: como-modificar-un-cookie
subcategory: 1luKrYptdi8WoMYckakUaM
---

Algunos cookies se generan directamente en la Base de Datos de VTEX. En éstos es imposible alterar la validez. Los cookies generados externamente e insertados vía JavaScript como, por ejemplo, Google Tag Manager, pueden ser editados. Se puede hacer la edición directamente en el JavaScript, como en el caso genérico a continuación, en el que se define su tiempo de validez.

`document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";`

Es importante recordar que VTEX no reconoce cookies con caracteres especiales. Siempre que haya un caso de esos, el usuario no logrará cargar más una página en su tienda (pantalla blanca).
