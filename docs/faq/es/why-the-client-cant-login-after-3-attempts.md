---
title: 'Por qué el cliente no puede logar después de 3 intentos'
id: 6FxM3HmlSEGuCowIy8cqOQ
status: DRAFT
createdAt: 2017-08-22T15:07:14.649Z
updatedAt: 2019-12-31T14:23:58.913Z
publishedAt: 
firstPublishedAt: 2017-08-22T15:13:15.862Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_35
slug: por-que-el-cliente-no-puede-logar-despues-de-3-intentos
locale: es
legacySlug: 
---

VTEX ID posee una regla para evitar que usuarios intenten usar el login de otra persona de forma maliciosa, por lo que tras 3 intentos sin éxito, el email es bloqueado por __1 hora__.

El desbloqueo es automático después de este tiempo y no es posible hacerlo manualmente.

Esto se aplica tanto a los clientes de una tienda como al acceso administrativo e incluso a las APIs.
