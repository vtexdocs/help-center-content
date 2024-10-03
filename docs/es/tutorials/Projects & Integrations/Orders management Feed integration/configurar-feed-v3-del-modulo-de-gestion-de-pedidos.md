---
title: 'Configurar Feed v3 del módulo de Gestión de pedidos'
id: 5qDml3cQypWDRTgw69s4C1
status: ARCHIVED
createdAt: 2019-01-30T20:34:24.388Z
updatedAt: 2021-09-09T18:30:06.744Z
publishedAt: 
firstPublishedAt: 2019-01-30T20:37:00.666Z
contentType: tutorial
productTeam: Post-purchase
author: 6AcGyun1hSWewU8YcaQiO
slugEN: orders-management-feed-v3-setup
locale: es
legacySlug: feed-v3-de-gestion-de-pedidos
subcategoryId: 3Y8xzVGMXcuPTuzfFI0vUp
---

La nueva versión del Feed proporciona mejor performance de operación para su tienda a través de sus nuevas funcionalidades que garantizan agilidad en la gestión de los eventos de sus pedidos. 

## Configuración del Feed

Feed v3 hace posible la personalización del _feed_ con filtros e intervalos necesarios para su operación.

Esto significa que es posible definir qué status estarán visibles en el _feed_ de eventos de su tienda a través de la [API Feed Configuration](https://developers.vtex.com/reference/feed-v3#feedconfiguration). Se puede ver la lista con los posibles status de pedido en el artículo [Flujo de pedido en Gestión de pedidos](https://help.vtex.com/es/tutorial/fluxo-de-pedido/#entiendo-los-estados).

>ℹ️ Si el objeto `filter` no se configura en la API, las actualizaciones de **todos** los status se enviarán al <i>feed</i>.

>ℹ️ La AppKey que se utilizará en la integración debe ser la misma que la utilizada en la configuración inicial.

Un ejemplo de _body_ sería el siguiente:

```
{
   “filter”: {
       “status”: [“order-completed”,“start-handling”,“handling”,“ready-for-handling”,“cancel”]
   },
   “queue”:{
       “visibilityTimeoutInSeconds”: 250,
       “MessageRetentionPeriodInSeconds”:345600
   }
}

```

El campo `visibilityTimeoutInSeconds` establece un tiempo de espera en segundos para que los eventos vuelvan a exhibirse en el _feed_ después de ser consultados. Al hacer una llamada para lectura de su _feed_, __todos__ los eventos devueltos se omiten para ser _commitados_, no apareciendo en ninguna consulta durante el tiempo de espera definido en el campo. Si no son _commitados_, los eventos reaparecerán en el _feed_ después del tiempo configurado.

El tiempo de espera _default_ definido en el campo es de 30 segundos, pero se puede configurar para hasta 43200 segundos (12 horas).

El tiempo de permanencia de un evento en su _feed_ se define en segundos en el campo `MessageRetentionPeriodInSeconds`. Si un evento no recibe interacciones dentro del tiempo configurado, se excluirá de la fila del _feed_ y se perderán los datos referentes a este. El tiempo máximo que se puede definir en el campo es de hasta 345600 segundos (4 días). 

>ℹ️ Para configurar y utilizar el Feed v3, debe tener un [perfil de acceso](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc?locale=es) habilitado con el recurso `Feed v3 and Hook`, dentro del producto de **OMS**.

## Cómo funcionan las APIs del Feed v3

El Feed v3 trabaja con dos llamadas: una para su lectura y otra para informar que un evento ya ha sido leído y debe ser excluido.

>⚠️ ¡No olvide configurar el Feed antes de usarlo!

### Get feed order status

La [llamada de lectura del _feed_](https://developers.vtex.com/reference/feed-v3#getfeedorderstatus1) devuelve a su fila de eventos, es decir, devuelve los cambios de status de los pedidos. __Cada evento corresponde a un cambio de status.__

El parámetro `maxLot` indica el número máximo de eventos que serán devueltos a cada llamada. En el Feed v3, puede especificar __hasta 10 eventos__. 

>⚠️ Cada vez que se realiza una llamada de lectura del _feed_, **todos** los eventos devueltos se mantienen invisibles en el _feed_ durante el tiempo definido en el campo `visibilityTimeoutInSeconds` de la API de Feed Configuration. 

#### Confirm item feed order status

Después de que hace la lectura del _feed_, es hora de [_commitar_ los eventos](https://developers.vtex.com/reference/feed-v3#commititemfeedorderstatus).

En el _body_ del _commit_ se debe pasar el valor del `handles`. Este valor es devuelto por la API del _feed_ cuando usted realiza la llamada para su lectura y es a través de este que la API sabrá a qué evento se está refiriendo cuando usted hace el _commit_. 

En el _body_, cada _array_ puede contener tantos `handles` como sean necesarios. Esto significa que es posible _commitar_ más de un evento a la vez.

>ℹ️ El campo `visibilityTimeoutInSeconds` indica el tiempo máximo para realizar un <i>commit</i> de un evento. 

No hay casos en los que un evento del _feed_ no deba ser _commitado_. Su sistema debe _commitar_ todos los eventos de su fila. __Una vez que un evento ha sido _commitado_, no se puede recuperar en el _feed_ con el mismo _appkey_.__

>⚠️ Todos los posibles status de pedido (considerando el filtrado, cuando corresponda) deben tratarse en la integración para evitar errores. Debe prestarse especial atención al `Status Null`, que puede no ser identificado y terminar siendo mapeado como otro status, lo que puede generar errores. 

Para entender más sobre cómo funciona el _feed_, acceda a nuestro artículo sobre [cómo funciona el _feed_ del módulo de Gestión de Pedidos](https://help.vtex.com/es/tutorial/como-funciona-el-feed-v3-del-modulo-de-gestion-de-pedidos--5SzSKee2f666YCoWkm0eQC).

## Hook

Sepa más sobre cómo es [la configuración y el funcionamiento del Hook](https://help.vtex.com/es/tutorial/configurar-hook-del-feed-v3--6JkYQpIlU8ptysUiGIp4Px), extensión del _feed_ para operaciones robustas con integraciones complejas.

