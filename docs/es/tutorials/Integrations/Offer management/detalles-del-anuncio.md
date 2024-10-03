---
title: 'Gestión de anuncios: detalles del anuncio'
id: 4FF9QYAewqAn610mDHwb0P
status: DRAFT
createdAt: 2021-03-17T01:07:12.412Z
updatedAt: 2024-06-20T21:34:45.076Z
publishedAt: 
firstPublishedAt: 2021-03-17T01:13:19.773Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: offer-details
locale: es
legacySlug: detalles-del-anuncio
subcategoryId: 2zVauFUkYn8vgS0y0MfWeK
---

>ℹ️ Para evolucionar su experiencia al sincronizar y actualizar anuncios, el equipo de VTEX está desarrollando una nueva funcionalidad que sustituirá el módulo de **Gestión de anuncios**.
> Por este motivo, Gestión de anuncios no recibirá más actualizaciones ni mantenimiento.
> Para conectores y marketplaces que ya se integraron con el módulo, comuníquese con nuestro equipo de desarrollo por email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
> Para los conectores interesados en comenzar la integración, les pedimos que esperen el lanzamiento del nuevo módulo, tan pronto como esté disponible, notificaremos a todos los clientes a través del [Developer Portal](https://developers.vtex.com/updates/release-notes) y el [VTEX Help Center](https://help.vtex.com/pt/en/announcements).  

Un anuncio es un SKU cuyo precio y stock fueron configurados por un seller y que fue enviado a diferentes canales de venta. En el módulo [Gestión de anuncios](https://help.vtex.com/es/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE), los sellers supervisan el envío de sus anuncios a marketplaces y su sincronización.

La página de **Detalles del anuncio** es donde se puede visualizar toda la información sobre un anuncio específico. A través de esta, el seller visualiza las interacciones que se produjeron con un anuncio, los [detalles de cada interacción](https://help.vtex.com/es/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf) y los errores detectados. Detalles de la interacción estarán disponibles durante diez días después del registro.

Para acceder a la página **Detalles del anuncio**, realice los siguientes pasos:

1. En el Admin VTEX, ingresa en **Marketplace > Conexiones > Gestión de anuncios**.
2. haga clic en el anuncio deseado.  

La página **Detalles del anuncio** incluye las siguientes secciones:

- [Encabezado](#encabezado)    
- [Status del anuncio](#status-del-anuncio)    
- [Lista de interacciones](#lista-de-interacciones)

>ℹ️ **Gestión de anuncios** permite hacer un seguimiento de los anuncios con [Mercado Libre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq) (Classic y Premium), [Netshoes](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm) y marketplaces VTEX. Para los conectores que desean integrarse a través de API, existe la [Guía de integración de Gestión de anuncios](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).

## Encabezado

![Offer details ES cabecalho](https://images.ctfassets.net/alneenqid6w5/6XRh7RmJr7rfGUfVHER580/7daa6c6a14fa3f1bdb959526d5f33157/Offer_details_ES_cabecalho.jpg)

El encabezado presenta la información principal del anuncio para su rápida visualización, como imagen, nombre del canal, status, ID en VTEX e ID en el canal. También permite realizar las siguientes interacciones mediante el botón `Editar`:

- Editar datos del producto    
- Editar precio       
- Editar stock       

Al hacer clic en el botón `Editar`, será dirigido a la página relativa a cada alteración en VTEX.  

## Status del anuncio

En este bloque, se presenta información sobre los status posibles para un  determinado anuncio. Estos son: sincronizado, error, indisponible y enviando.   

### Status: sincronizado

![Offer details PT status sucesso](//images.ctfassets.net/alneenqid6w5/6s1o33PAsB6H7X3Z0UJxaY/f9aae1830daa0fe200e2f7ec5b470d7e/Offer_details_ES_status_sucesso.jpg)

El status *Sincronizado* significa que el anuncio ha sido recibido con éxito en un canal y está siendo actualizado tanto por el marketplace como por el seller, en tiempo real.   

### Status: error

![Offer details PT status erro](//images.ctfassets.net/alneenqid6w5/5M2tBMrTbrBloZ1093Jdjw/cba423c498f0003a3990768c22a993a4/Offer_details_ES_status_erro.jpg)

El status *Error* significa que el sistema ha encontrado un problema que impide el envío o la actualización de un anuncio en un canal, de modo que se requiere que el seller lo solucione. Los errores pueden originarse tanto del lado del seller VTEX, como descripciones de productos que exceden el límite de caracteres, como del lado del marketplace, como llamadas de API con errores.   

Si el status del anuncio es *Error*, el bloque de **Status del anuncio** mostrará una lista con los errores detectados, donde cada error puede desplegarse para que el seller acceda a más información sobre lo que ha ocurrido, y cómo resolverlo. Cada error listado contiene:   

- **Nombre del error:** título que resume el error identificado.
- **Fecha:** fecha y hora en que se identificó el error.
- **Código:** número identificador de ese error específico, asignado por el sistema de _Gestión de anuncios_.  
- **Descripción:** párrafo con más contexto sobre la falla y su resolución.   
- **Origen:** el sistema en el que se produjo la interacción. Puede ser Catálogo, Stock o Precio.   
- **Ajustar Precio/Ajustar Catálogo/Ajustar Stock**: botón que dirige al seller a la página correspondiente a cada alteración en VTEX, para corregir el error.   
- **Ver Interacción**: accede a la página de [Detalles de la interacción](https://help.vtex.com/es/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf), para investigar el error de una manera más granular.  

Si todavía hay errores por corregir, o si están todos corregidos pero se están procesando de nuevo, el status del anuncio permanece como error. El status permanecerá como *Error* hasta que las [interacciones](https://help.vtex.com/es/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf) hayan finalizado.  

### Status: indisponible

![Offer details PT status indisponivel](//images.ctfassets.net/alneenqid6w5/5ASZDWJU36WcdTJPL4HyWh/3fcfa6c8636db3979e7e23b4af740da4/Offer_details_ES_status_indisponivel.jpg)

El status *Indisponible* se produce cuando el anuncio es descartado, por estar inactivo o no estar incluido en la [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) determinada para el canal.

### Status: enviando

![Offer details PT status enviando](//images.ctfassets.net/alneenqid6w5/4sIUmJ2FxZ02SlOCPNYEi6/1a7b65d75c2fe5ca1025663298f97970/Offer_details_ES_status_enviando.jpg)

El status *Enviando* es un estado intermedio, cuando los anuncios aún están en proceso de ser enviados al canal. Este status comprende anuncios que se envían al marketplace por primera vez, que están migrando a un nuevo canal o que han sido reenviados después de haber sido descartados en un canal.   

## Lista de interacciones

![Offer details PT lista interacoes](//images.ctfassets.net/alneenqid6w5/78sdw5zgXZJL8aM9wMKqVE/3b825866f07b646c065df4004c802ff3/Offer_details_ES_lista_interacoes.jpg)

La pestaña *Interacciones* de la página **Detalles del anuncio** muestra todas las actualizaciones de `stock`, `precio` o `catálogo` que sufrió el SKU. Cada fila corresponde a una interacción producida en el anuncio, e incluye los siguientes datos:

- **Fecha de creación**: fecha y hora en que se produjo la interacción.    
- **Origen**: sistema donde se produjo la interacción. Puede ser en `catálogo`, `precio` o `stock`.    
- **Nuevo valor**: valor del precio o stock actualizado, después de que la interacción se realizó con éxito.    
- **Resultado**: informa el efecto de la interacción sobre el anuncio. El resultado de una interacción hace que el sistema determine el status del anuncio, indicando si fue posible enviarlo al canal y sincronizarlo, o no. Los resultados incluyen:    
  - **Satisfactorio**: cuando las interacciones cierran su ciclo de vida correctamente, y generan actualizaciones en un anuncio en términos de precio, stock o catálogo.    
  - **Con error**: cuando las interacciones no se realizan debido a un error identificado por el sistema.    
  - **Notificación**: cuando hay interacciones con el evento que dan una mayor visibilidad del proceso, pero no han generado actualizaciones como tal.    
  - **Procesando**: cuando un evento abierto no se concluyó y aún debe recibir más detalles. Este es un estado transitorio, considerando que cuando un evento se cierra, su resultado solo puede ser `satisfactorio`, `falla`, o `notificación`.

Para información más detallada, haga clic en la interacción deseada para acceder a la página [Detalles de la interacción](https://help.vtex.com/es/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf).

## Sepa más 

-  [Módulo Gestión de anuncios](https://help.vtex.com/es/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE)
-  [Gestión de anuncios: detalles de la interacción](https://help.vtex.com/es/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf)
