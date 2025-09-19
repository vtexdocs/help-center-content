---
title: 'Catalog API: nuevas restricciones para activar un SKU'
id: JcUDPA6hTMK4kwjTUAUn9
status: PUBLISHED
createdAt: 2021-01-28T18:30:48.345Z
updatedAt: 2021-05-04T18:11:05.378Z
publishedAt: 2021-05-04T18:11:05.378Z
contentType: updates
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2021-01-28-catalog-api-new-restrictions-to-activate-an-sku
locale: es
legacySlug: catalog-api-nuevas-restricciones-para-activar-un-sku
announcementImageID: 'undefined'
announcementSynopsisES: 'Con esta nueva actualización, la creación de SKUs por API tiene nuevas restricciones'
---

Actualizamos la [Catalog API](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-overview) referente a la creación de SKUs para evitar posibles problemas de visualización de los SKUs de su tienda.

Antes, la validación de SKUs por API generaba algunos efectos no deseados para nuestros clientes cuando intentaban activar un SKU creado o actualizado. A partir del 11 de marzo de 2021, la creación de SKUs por API sigue el estándar establecido en el Admin, evitando comportamientos inesperados. 

## ¿Qué cambió?
Con la actualización, al crear un SKU por API, este no se creará como activo. Para activarlo se le debe asociar una imagen. Asimismo, los SKUs que forman parte de Kits, también se deben asociar a un componente activo para que tengan el status «activo». 

En nuestra [guía](https://developers.vtex.com/vtex-rest-api/docs/how-to-activate-an-sku) hay más detalles sobre cómo el cambio afectó a los endpoints [Create SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku#catalog-api-post-sku) y [Update SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku#catalog-api-put-sku), así como el nuevo proceso de validación de SKU a partir de la actualización.

## ¿Qué necesito hacer?

El 11 de marzo de 2021, la actualización para la creación de nuevos SKUs será implementada de forma automática por VTEX y los requisitos serán obligatorios. Si no sigue esta configuración, el SKU no se creará. Recomendamos que implemente este nuevo estándar de forma inmediata, para adecuarse a tiempo a la actualización definitiva. 

En el caso de los SKUs que están registrados en su tienda, es necesario verificar si los mismos están activos y debidamente vinculados a los productos. Si un SKU está desvinculado, deberá adecuarlo a la actualización y [añadirle una imagen](/es/tutorial/como-actualizar-la-imagen-de-un-sku--5PMb54FnvUuWOq2qGyAosu).
