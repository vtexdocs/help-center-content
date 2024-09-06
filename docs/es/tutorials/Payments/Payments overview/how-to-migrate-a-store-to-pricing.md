---
title: 'Características del Pricing'
id: 2b4KuARqwsUw0i8AwqYauK
status: ARCHIVED
createdAt: 2019-01-24T20:45:36.290Z
updatedAt: 2020-11-26T20:02:41.784Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:09:39.222Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: como-migrar-una-tienda-para-el-pricing
locale: es
legacySlug: como-migrar-una-tienda-para-el-pricing-v2
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

El Pricing es el nuevo módulo de precios de VTEX. Esta versión introduce nuevas funcionalidades que permiten la evolución de la gestión de precios de su tienda.

## Características del Pricing

El Pricing tiene algunas diferencias importantes con respecto a la primera versión. A continuación, las características del Pricing:

- Precio programado
- Importación/Exportación de precios por planilla
- Precio por cantidad mínima
- Precio de coste y rango de markup
- Reglas de precio por política comercial
- Redondeo de Precios
- Bloqueo de variación de precio
- Precios condicional (pronto!)
- Tabla de precios con jerarquía (pronto!)


## Compatibilidad entre las APIs

- Las APIs del Pricing v1 son compatibles con las del Pricing v2, lo que permite que su tienda migre de versión sin ser impactada en la integración. Sin embargo, hay que tener en cuenta que las APIs de Pricing v1 tienen menos rendimiento y no se benefician de todos los recursos de Pricing v2.
- Las APIs del Pricing v1 sólo saben manejar precios fijos, que, por definición, se superponen a precios dinámicos. Utilizando las APIs antiguas, no es posible sacar provecho, por ejemplo, de las reglas de precio usadas para la composición automática de precios a partir del precio de coste.
- Las APIs del Pricing v1 sobrescriben cualquier precio fijo que exista en el Pricing v2. Esto indica que los precios creados por el ambiente administrativo se reemplazan por los que se envían por las APIs de compatibilidad.
- Las APIs antiguas siempre tienen su ruta iniciada con `/api/pricing/pvt/price-sheet`. Con la evolución del Pricing v2, se espera que se descontinuen, pero aún no hay fecha definida para ello.
- Tenga en cuenta que el Webservice también cambia los precios. Es común que se pasen valores de precios en el método `StockKeepingUnitInsertUpdate` (ruta actual para la integración del Catálogo), ya que son campos obligatorios. Sin embargo, es posible pasar el campo de precio como nulo (`null`) para que no se haga ningún cambio de precios.
- Las APIs del Pricing v2 están todas documentadas en nuestra colección en Postman. Usted puede acceder a la documentación [por este enlace](https://developers.vtex.com/reference/pricing-api-overview).

## Migrar una tienda para el Pricing v2

>ℹ️ Toda nueva tienda VTEX ya está creada con el Pricing v2.

Pricing v2 está disponible para las tiendas que desean migrar al nuevo módulo. Actualmente, tenemos un proceso de migración automática, en que verificamos la compatibilidad de las features del Pricing v2 con las features utilizadas actualmente por la tienda.

Si su tienda todavía no utiliza el Pricing v2, usted puede solicitar a nuestro equipo de soporte la migración al nuevo módulo. Tenga en cuenta las actuales características del Pricing v2 en el momento de la migración. Si su tienda utiliza alguna de las features del Pricing antiguo que aún no está presente en el Pricing v2, sugerimos que la migración todavía no se realize.

En el futuro, las features que aún no están presentes en el Pricing v2 estarán disponibles y todas las tiendas VTEX se migrarán.
