---
title: Las nuevas appKeys se crearán sin un perfil de acceso predeterminado
id: tOWdNXkLWdW9hRdGhJw0R
status: PUBLISHED
createdAt: 2021-01-06T19:24:51.000Z
updatedAt: 2021-12-10T02:40:06.394Z
publishedAt: 2021-12-10T02:40:06.394Z
contentType: updates
productTeam: Identity
author: 4ubliktPJIsvyl1hq91RdK
slug: las-nuevas-appkeys-se-crearan-sin-un-perfil-de-acceso-predeterminado
legacySlug: las-nuevas-appkeys-se-crearan-sin-un-perfil-de-acceso-predeterminado
announcementImageID: 
announcementSynopsisES: Las appKeys ya no recibirán el perfil de acceso Owner por estándar
---

La plataforma VTEX tiene una serie de APIs REST, generalmente utilizadas para integrar soluciones de terceros, cuyo acceso es otorgado a través de credenciales específicas.

AppKeys y appTokens son los elementos que conforman las credenciales de acceso a las APIs REST. Un par de appKey y appToken se puede considerar como el ID de usuario (utilizado para identificar quién está accediendo a la plataforma) y la contraseña, respectivamente. 

Este par solo puede ser creado por el usuario Titular de la cuenta, por cuestiones de seguridad. 

## ¿Qué cambió?

Antes, cuando se creaban las credenciales, el perfil de acceso Owner (Admin Super) se asignaba automáticamente. A partir de ahora, las nuevas appKeys que se creen no tendrán ningún perfil de acceso asignado, por lo que se deberá realizar la asignación de la misma forma en que se efectúa actualmente para los usuarios (vea las instrucciones de la sección Editando usuarios del artículo [Administrar usuarios](https://help.vtex.com/es/tutorial/gerenciando-usuarios--tutorials_512#editando-usuarios)).

Puede encontrar información adicional sobre las appKeys y appTokens en el artículo [Authentication](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication).

## ¿Por qué realizamos este cambio?

Este cambio se implementó por cuestiones de seguridad, en vista de que una aplicación que posee más permisos de los que debería corre el riesgo de causar daños no previstos a la tienda, ya sea por un error, uso mal intencionado o cualquier otro motivo.

Una aplicación que utiliza appKey debería recibir acceso únicamente a las funcionalidades para las que fue desarrollada. Sin embargo, el perfil de acceso Owner, al ser superior a todos, permite prácticamente cualquier acción dentro de la tienda.

Con este cambio, el perfil de acceso se deberá determinar manualmente según la necesidad y los permisos se delimitarán de acuerdo con el perfil seleccionado.

Puede encontrar más información en el artículo [Perfiles de acceso](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).
