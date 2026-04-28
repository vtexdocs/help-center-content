---
title: 'Política de envío'
id: tutorials_140
status: PUBLISHED
createdAt: 2017-04-27T22:17:12.502Z
updatedAt: 2024-11-05T18:11:45.931Z
publishedAt: 2024-11-05T18:11:45.931Z
firstPublishedAt: 2017-04-27T23:00:45.247Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-policy
legacySlug: registrar-una-transportadora, administrar-operador
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

La [estrategia de envío](/es/docs/tutorials/estrategia-de-envio) en una tienda VTEX engloba las configuraciones [logísticas](/es/docs/tutorials/fulfillment-logistica-vtex) esenciales y define la relación entre los siguientes elementos:

* Política de envío
* [Muelle](/es/docs/tutorials/muelles)
* [Almacén](/es/docs/tutorials/almacen)

La siguiente imagen muestra cómo se relacionan estos conceptos entre sí:

![shipping_strategy_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/estratégia-de-envío/politica-de-envio_1.png)

La **política de envío** es un conjunto de reglas y ajustes que definen las opciones de envío que se mostrarán a los clientes en el checkout. Al [calcular el tiempo de envío](/es/docs/tutorials/como-funciona-el-calculo-del-envio) del pedido, la plataforma VTEX toma en consideración los ajustes establecidos en las políticas de envío, entre los que destacan:

* [Transportadora](/es/docs/tutorials/transportadoras-en-vtex)
* [Horario laboral de la transportadora](/es/docs/tutorials/horario-de-atencion-de-las-transportadoras)
* [Feriados](/es/docs/tutorials/registrar-feriados)
* [Adicionales de envío](/es/docs/tutorials/adicionales-de-flete)
* [Entrega programada](/es/docs/tutorials/entrega-programada)
* [Puntos de recogida](/es/docs/tutorials/puntos-de-recogida)

Para más información sobre cómo crear una política de envío, consulta [Crear una política de envío](/es/docs/tutorials/crear-una-politica-de-envio). Para más información sobre gestión, consulta [Gestionar políticas de envío](/es/docs/tutorials/gestionar-politicas-de-envio).

## Política de envío y plantilla de envío

Cada política de envío está vinculada a una [plantilla de envío](/es/docs/tutorials/plantilla-de-flete), donde se registran detalles como:

* Identificación de la transportadora
* Valor de envío cobrado por la transportadora
* Rangos de códigos postales o [polígonos](/es/docs/tutorials/gestionar-geolocalizacion) válidos para envíos

Después de que se vincula la plantilla de envío a la política de envío, los datos pasan a formar parte de tu operación logística en VTEX.

## Primeras configuraciones logísticas

Las configuraciones se pueden realizar a través del Admin VTEX o API. Si estás empezando a configurar tu [estrategia de envío](/es/docs/tutorials/estrategia-de-envio), sugerimos el siguiente orden de configuración:

| **Tema** | **Configuración en el Admin VTEX** | **Configuración por API** |
| :--- | :--- | :--- |
| 1. Política de envío | [Crear una política de envío](/es/docs/tutorials/crear-una-politica-de-envio) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| 2. [Muelle](/es/docs/tutorials/muelles) | [Gestionar muelle](/es/docs/tutorials/gestionar-el-muelle) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| 3. [Almacén](/es/docs/tutorials/almacen) | [Gestionar almacenes](/es/docs/tutorials/gestionar-almacenes) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |

