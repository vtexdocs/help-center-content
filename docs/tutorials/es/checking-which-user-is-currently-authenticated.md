---
title: 'Verificación del usuario que está autenticado'
id: 4vLALC0yrsJydfaY56Zshq
status: DRAFT
createdAt: 2019-01-23T19:19:30.635Z
updatedAt: 2022-08-04T22:36:12.402Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:29:51.891Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: verificacion-del-usuario-que-esta-autenticado
legacySlug: 
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

Cuando un usuario inicia sesión en la tienda se crean cookies que almacenan el token de autorización. A partir de ese momento, cualquier request a los servidores de VTEX van a cargar estos cookies automáticamente, identificando al usuario que está haciendo determinada acción.

En varios contextos que no sean requests a nuestras APIs, puede ser necesario verificar si el usuario está conectado o incluso obtener algo que lo identifique, como su e-mail o ID, y los cookies también permiten este tipo de acción.

Sin embargo, tenga en cuenta que estos cookies tienen las opciones "HTTP Only" y "Secure" activas, lo que significa que no son accesibles por ningún método JavaScript, y que se enviarán sólo en requests HTTP seguros (es decir, detrás del protocolo HTTPS).

De esta forma, la verificación del usuario que está autenticado debe pasar a través de la siguiente API:

- método: `GET`
- ruta: `/api/vtexid/pub/authenticated/user`

Ejemplo: `GET https://www.site.com/api/vtexid/pub/authenticated/user`

La respuesta seguirá este patrón:
```
{
    "userId": "88888888-8888-8888-8888-888888888888",
    "user": "user@mail.com",
    "userType": "F"
}
```

El `userId` es el ID de usuario dentro de los servicios de VTEX. Y `user` siempre será su e-mail. El `userType` es de uso interno.

Si el usuario no está autenticado, la respuesta de esta API será vacía (_body response_ = `null`), con un status HTTP 200 (OK) o 401 (Unauthorized).
