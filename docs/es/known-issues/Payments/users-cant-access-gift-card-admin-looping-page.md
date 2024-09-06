---
title: 'Los usuarios no pueden acceder a la administración de la tarjeta regalo (página en bucle)'
id: 5FowAAf8VulbVXcQIeSmHd
status: PUBLISHED
createdAt: 2024-05-02T15:26:57.386Z
updatedAt: 2024-05-02T15:26:58.463Z
publishedAt: 2024-05-02T15:26:58.463Z
firstPublishedAt: 2024-05-02T15:26:58.463Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: los-usuarios-no-pueden-acceder-a-la-administracion-de-la-tarjeta-regalo-pagina-en-bucle
locale: es
kiStatus: Backlog
internalReference: 1025971
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Si los usuarios bloquean las cookies de terceros (configuración del navegador) no podrán acceder al módulo de Tarjeta Regalo en admin, hay una cookie establecida en otro dominio VTEX.


##

## Simulación


Después de bloquear las cookies de terceros es posible simular el problema mencionado anteriormente, también puede inspeccionar la página (herramientas de desarrollador) e ir a la pestaña Red (buscar Vale.aspx), habrá un código de estado 302.



## Workaround


Ponga en la lista blanca las cookies de terceros presentes en el dominio myvtex.com.




