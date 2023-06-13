---
title: El email «Avísame» se envía incluso cuando el producto no está disponible para la política comercial del sitio web
id: 577r3i32P5Yv9QIfVR5AYP
status: PUBLISHED
createdAt: 2021-02-22T20:44:52.444Z
updatedAt: 2022-12-22T20:40:56.942Z
publishedAt: 2022-12-22T20:40:56.942Z
firstPublishedAt: 2021-03-17T22:31:13.386Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-email-avisame-se-envia-incluso-cuando-el-producto-no-esta-disponible-para-la-politica-comercial-del-sitio-web
kiStatus: Backlog
internalReference: 
---

## Sumario

El registro de __Avíseme__ no tiene en cuenta la política comercial del cliente al notificar la disponibilidad de ítems por *email*.

Es decir, si el cliente se registra en el formulario __Avíseme__ mediante la política comercial 1 y, al mismo tiempo, el SKU está disponible en la política comercial 2, la próxima vez que se indexe el producto, el sistema enviará el *email* incorrectamente para anunciar la disponibilidad del ítem.

Si en el momento del registro el ítem no está disponible en ninguna política comercial, no pasará nada. Además, en la próxima inclusión del almacén, independientemente de la política comercial, se enviará el *email* al usuario registrado en __Avíseme__ para indicar la disponibilidad del ítem, lo que genera una expectativa incorrecta.


## Simulación

1. Considere al menos dos políticas comerciales (*1* y *2*).
2. Configure dos muelles (*Muelle-A* y *Muelle-B*). Asocie el *Muelle-A* a la *Política comercial 1* y el *Muelle-B* a la *Política comercial 2*.
3. Configure dos almacenes (*Almacén-A* y *Almacén-B*). Asocie el *Almacén-A* al *Muelle-A* y el *Almacén-B* al *Muelle-B*.
4. Elija un SKU y déjelo activo.
5. Añada cualquier cantidad de este SKU al *Almacén-B*, que está asociado al *Muelle-B* y, por ende, con la *Política comercial 2*.
6. Inicie sesión en el sitio web (o subcuenta) a través de la *Política comercial 1* y regístrese en __Avíseme__.
7. Fuerce la indexación del SKU utilizado para la prueba.
8. Observe que después de unos momentos llegará el *email* __Avíseme__, pero el enlace llevará al usuario al sitio web de la *Política comercial 1*, donde el ítem todavía no está disponible. En este contexto, el *email* se inicia incorrectamente porque el sistema identifica que hay disponibilidad en otra política comercial.

## Workaround

No hay ninguna solución alternativa para este escenario. Si su tienda utiliza más de una política comercial en la misma cuenta o en distintas subcuentas, se recomienda no utilizar la función __Avíseme__. Si su tienda utiliza políticas comerciales y almacenes exclusivos para los *marketplaces*, tampoco se recomienda utilizar este recurso.

Es posible desarrollar una integración para controlar este proceso, pero el esfuerzo se considera de moderado a alto.

