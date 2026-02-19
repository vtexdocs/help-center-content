---
title: 'Mejoras en el sistema Matcher de VTEX'
id: 13KA505i1EQT24u7CPIPrP
status: PUBLISHED
createdAt: 2021-06-10T12:17:25.857Z
updatedAt: 2021-07-19T13:01:43.550Z
publishedAt: 2021-07-19T13:01:43.550Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2021-06-10-improvements-in-vtex-matcher
locale: es
legacySlug: mejoras-en-el-sistema-matcher-de-vtex
announcementImageID: 'undefined'
announcementSynopsisES: 'Hemos reestructurado el sistema Matcher de VTEX para mejorar la catalogación de los SKU del seller en el marketplace'
---

[VTEX Matcher](/es/docs/tutorials/como-funcionan-los-puntos-del-vtex-matcher) es una herramienta presente en los marketplaces que evalúa los productos y los SKU enviados por sellers para acelerar su [catalogación](/es/tutorial/sugerindo-e-aprovando-skus/). VTEX Matcher evalúa los ítems recibidos y busca coincidencias en el catálogo del marketplace para asociar un ítem a un SKU o a un producto existente. Si no hay ninguna coincidencia, Matcher creará un nuevo producto.

Antes, el sistema VTEX Matcher tenía algunas limitaciones para realizar esta asociación de productos, ya que tenía en cuenta criterios que no optimizaban el proceso. Hemos cambiado su configuración, mejorando las reglas aplicadas en la evaluación y la catalogación de los SKU recibidos.

## ¿Qué cambió?
Hemos realizado las siguientes mejoras en el sistema VTEX Matcher:

| Antes                                                                                                                                                                                                                               | Ahora                                                                                                                                                                                                                                         |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VTEX Matcher solo tenía en cuenta el nombre del SKU recibido para hacerlo coincidir con el catálogo del marketplace.                                                                                                                     |__ Más criterios de evaluación:__ VTEX Matcher ahora evalúa los ítems del catálogo del marketplace teniendo en cuenta el nombre, el EAN y el Ref ID. Para que se asocie un ítem, debe haber una coincidencia en al menos dos de estos criterios.        |
| VTEX Matcher no reconocía los caracteres especiales en el nombre del SKU.                                                                                                                                                                | __Caracteres especiales:__ VTEX Matcher ahora lee los caracteres especiales presentes en el nombre del SKU, para identificarlos mejor.                                                                                                                 |
| VTEX Matcher descartaba las especificaciones de SKU que venían en formato de texto, por lo que no se añadían al producto asociado.                                                                                                       | __Especificaciones de SKU en formato de texto:__ VTEX Matcher pasó a convertir las especificaciones de SKU que venían en formato de texto en datos no estructurados, lo que permite que se conviertan de hecho en una variación del producto asociado. |
| Los SKU pertenecientes al mismo producto enviados al mismo tiempo se evaluaban individualmente, lo que hacia con que VTEX Matcher creara nuevos productos para cada SKU en lugar de asociarlos con el único producto al que pertenecían. | __Manejo de variaciones:__ los SKU que pertenecen al mismo producto ahora tienen un criterio de priorización. El SKU que llega primero tiene prioridad en la evaluación, para evitar que VTEX Matcher cree productos separados por cada SKU.           |
| Solo los SKU recibidos después de que se activara la aprobación automática se procesaban bajo su regla.                                                                                                                             | __Aprobación automática:__ ahora, cuando el usuario activa la aprobación automática, procesamos los SKU que están pendientes.                                                                                                                     |

## ¿Por qué realizamos este cambio?

Esta mejora hace que la coincidencia de VTEX Matcher sea más precisa, mejorando la forma en que los productos del seller se asocian al catálogo del marketplace. Las nuevas reglas aplicadas a VTEX Matcher evitan la creación de productos de manera equivocada, además de aportar más seguridad y agilidad a la catalogación.

## ¿Qué se necesita hacer?

No se requiere ninguna acción. La actualización es automática para todos los marketplaces que utilizan VTEX Matcher.

Para saber más, consulte nuestra documentación sobre [Matcher](/es/docs/tutorials/como-funcionan-los-puntos-del-vtex-matcher), la configuración de [aprobación automática](https://developers.vtex.com/vtex-rest-api/reference/sku-approval-settings#activate-autoapprove-for-account) y la [catalogación de los SKU recibidos](/es/tutorial/sugerindo-e-aprovando-skus/).

