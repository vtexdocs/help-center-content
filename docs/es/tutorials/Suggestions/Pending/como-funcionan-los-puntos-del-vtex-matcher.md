---
title: 'Cómo funcionan los puntos del VTEX Matcher'
id: tutorials_424
status: PUBLISHED
createdAt: 2017-04-27T22:05:43.272Z
updatedAt: 2023-05-10T14:44:35.573Z
publishedAt: 2023-05-10T14:44:35.573Z
firstPublishedAt: 2017-04-27T23:03:25.241Z
contentType: tutorial
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slugEN: understanding-vtex-matcher-scoring
legacySlug: como-funcionan-los-puntos-del-vtex-matcher
locale: es
subcategoryId: znvlXLHC80EKkugQaiMI4
---

VTEX Matcher es la herramienta utilizada por los marketplaces para evaluar los anuncios enviados por los sellers y agilizar el proceso de catalogación.

VTEX Matcher evalúa los SKU asociando la información del anuncio de un seller con la información de los ítems ya presentes en el catálogo del marketplace. Los atributos que se evalúan en un anuncio son:

- Nombre del SKU  
- Nombre del producto  
- Marca  
- Categoría
- EAN o Ref ID  
- Altura  
- Anchura  
- Longitud  
- Peso  
- Nombre de la imagen  
- URL de la imagen  
- Especificaciones  

## Puntuación 

Los anuncios recibidos se incluyen en una fila para ser evaluados por Matcher. Los SKU que llegan y que pertenecen al mismo producto tienen una regla de priorización: el SKU que llega primero se evalúa primero.

VTEX Matcher asigna una puntuación a cada atributo de un anuncio que coincide con la información del producto existente en el marketplace. Los puntos se suman, generando una puntuación final para el anuncio.

La puntuación final determina el status del producto, desde *Aprobado, Negado* o *Pendiente*. 

## Catalogación
En la siguiente tabla se puede ver cómo cada puntuación genera un status y una acción correspondiente.

<div class="alert alert-info">
La puntuación máxima de VTEX Matcher para la catalogación automática es 95. Las puntuaciones superiores a 95 requieren catalogación manual.
</div>

| Puntuación           | Status    | Escenario                                                                                                                                                        | Acción                                                                                                                                                                                                                                                                                                                    |
|----------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mayor o igual que 95 | Aprobado  | Correspondencia en `productName`, `brandName` y al  menos dos entre los tres a seguir: `EAN`, o `refId`, o `skuName`.                                            |  **Asociar a SKU existente:** el propio VTEX Matcher realiza la [catalogación automática](https://help.vtex.com/es/tutorial/manual-sku-cataloging--tutorials_396#opciones-de-catalogacion). La información del ítem asociado no se transfiere, prevalecen los atributos del SKU que ya existía.                           |
| 90 puntos            | Aprobado  | Correspondencia en `productName` y al  menos dos entre los tres a seguir: `EAN`, o `refId`, o `skuName`.                                                         |  **Asociar a SKU existente:** el propio VTEX Matcher realiza la [catalogación automática](https://help.vtex.com/es/tutorial/manual-sku-cataloging--tutorials_396#opciones-de-catalogacion). La información del ítem asociado no se transfiere, prevalecen los atributos del SKU que ya existía..                          |
| 85 puntos            | Aprobado  | Correspondência en   `productName` y `brandName`.                                                                                                                | **Asociar a un producto existente:** el propio VTEX Matcher realiza la [catalogación automática](https://help.vtex.com/es/tutorial/manual-sku-cataloging--tutorials_396#opciones-de-catalogacion). La información adicional de este ítem se transfiere al producto, complementando la información que ya está registrada. |
| 80 puntos            | Aprobado  | Correspondência entre  `productName`.                                                                                                                            | **Asociar a un producto existente:** el propio VTEX Matcher realiza la [catalogación automática](https://help.vtex.com/es/tutorial/manual-sku-cataloging--tutorials_396#opciones-de-catalogacion). La información adicional de este ítem se transfiere al producto, complementando la información que ya está registrada. |
| De 31 a 79           | Pendiente | El anuncio no tiene un `productName` equivalente en el marketplace.                                                                                              | **Anuncio queda como pendiente:** cuando VTEX Matcher señala un anuncio está  pendiente, el marketplace necesita revisarlo y definir su catalogación, a través del módulo de [SKU recibidos](https://help.vtex.com/es/tutorial/manual-sku-cataloging--tutorials_396).                                                     |
| De 0 a 30            | Negado    | El anuncio se envió sin `imageName`  `imageUrl`, `EAN`, `anchura`, `altura`, `longitud`, `peso`, `productName`, `skuName`, `brandName`, `categoría`, o `refId`.  | **Rechazar anuncio:** los anuncios rechazados automáticamente por VTEX Matcher se ponen en fila y solo se pueden ver a través de la [API de Marketplace](https://developers.vtex.com/docs/api-reference/marketplace-apis).                                                                             |

## Configuración de Matcher
Los criterios descritos en este artículo son estándar. Puede configurar VTEX Matcher de forma diferente a través de la [API de aprobación automática](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/autoapproval/toggle).  

La plataforma VTEX también permite utilizar otros matchers, desarrollados por equipos internos o partners.

Al hacer esto, los matchers trabajarán en paralelo. Esto significa que no se sustituyen entre sí, sino que funcionan de forma complementaria. Cada vez que se envíe un producto o SKU al marketplace, se notificará a todos los matchers para iniciar el proceso de evaluación. Del mismo modo, para que un SKU enviado se rechace, tiene que ser rechazado por todos los matchers activos en la tienda.

## Sepa más  
- [Catalogación de SKUs Recibidos](https://help.vtex.com/es/tutorial/sugerindo-e-aprovando-skus--tutorials_396)
- [Documentación de API para configuración de Matcher](https://developers.vtex.com/vtex-rest-api/reference/getautoapprovevaluefromconfig) 

