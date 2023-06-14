---
title: '¿Por qué el pedido de marketplace no integró?'
id: frequentlyAskedQuestions_717
status: CHANGED
createdAt: 2017-04-27T22:28:15.676Z
updatedAt: 2020-11-27T19:02:07.748Z
publishedAt: 2019-12-31T14:23:55.880Z
firstPublishedAt: 2017-04-27T23:02:34.518Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: por-que-el-pedido-del-marketplace-no-integro
legacySlug: por-que-el-pedido-del-marketplace-no-integro
---

El primer paso a ser hecho es la verificación en Integraciones, que es la herramienta que monitorea y graba los logs de interacciones con los marketplaces. El propio Bridge ya indicará cual es el problema y dará opción de reprocesamiento del pedido.

Vea nuestra documentación para [análisis de pedidos con problemas en Integraciones](/es/tutorial/como-verificar-la-integracion-en-bridge).

Abajo, tenemos los principales escenarios que se podrán encontrar.

### Indisponibilidad de stock

[Entienda cómo funciona la integración de stock](/es/tutorial/como-funciona-la-regla-de-disponibilidad-minima/) y [sepa porque ocurre la indisponibilidad de stock.](/es/faq/por-que-el-pedido-fue-cerrado-sin-stock/)

### Divergencia de valores

[Entienda como funciona la integración de precio](/es/tutorial/atualizacion-de-precio) y [sepa porque ocurre la divergencia de precios.](/es/faq/por-que-el-pedido-fue-cerrado-con-el-precio-incorrecto/)

### ID de SKU inválido

Esto ocurre cuando la tienda posee un catálogo asociado al Marketplace antes de la configuración por VTEX. Cuando la configuración por VTEX fue realizada, los IDs de los SKUs no eran los mismos y eso impide la integración. El modo de resolverlo es alterando los IDs de los SKUs en el partner, para que queden con los mismos códigos que en VTEX.

### Pedido com Datos de Entrega Incompletos

Todo pedido en VTEX necesita de las informaciones de Entrega.  En el caso contrario no se podrá proseguir con un pedido que no se sabrá cómo ser entregado. Luego, el modo de resolverlo será agregando todas las informaciones pertinentes para que el pedido consiga avanzar.

### Status de Indisponibilidade

Referido al caso de indisponibilidad de Stock, es posible que el marketplace bloquee el pedido hasta que el ítem asociado al SKU esté nuevamente disponible. Normalmente, en el Marketplace, el status del pedido podría ser **Unavaliable**. Esto impide la evolución del pedido, imposibilitando la evolución.

En estos casos no es posible aprobar los pedidos automáticamente por la API, pues los mismos no están aptos para la aprobación. Para corrección, será necesario el contacto con el propio Marketplace para ajustar el escenario.

### De/para de transportadoras no registradas en el ERP

Muchos sistemas de ERP poseen un DE/PARA para relacionar las transportadoras registradas en VTEX con las transportadoras registradas en ese sistema. Por eso, siempre que una nueva transportadora fuera registrada en VTEX, es necesario también actualizar ese DE/PARA. En caso contrario, errores de integración externos podrán comenzar a ocurrir.

Ejemplo: `PEDIDO 3352226239 27/03/2017 16:32:37 Interface = 15 Msg = transportadora / servicio de entrega (Correios – Correios) no registrados.`
