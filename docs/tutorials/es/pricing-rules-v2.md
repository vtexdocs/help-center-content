---
title: 'Reglas de precios (v2)'
id: tutorials_4446
status: DRAFT
createdAt: 2017-04-27T21:50:44.178Z
updatedAt: 2021-08-19T14:33:42.966Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:16.063Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: reglas-de-precios-v2
locale: es
legacySlug: reglas-de-precios-v2
subcategory: wUepkh8pzimEywO8oGUIc
---

**Soft launch**
Las funcionalidades descritas en este artículo todavía no están disponibles para todos los clientes.

Una regla de precio es un modificador del precio base registrado en la Lista de precios.

![new-dashboard-pricing-es](https://images.contentful.com/alneenqid6w5/3EB6csYrKUiwQGGuikW0MA/ada36ea5a53b0d864561093817b76bf9/new-dashboard-pricing-es.gif)

## Como funciona

El registro de precio base servirá como referencia para todas las políticas comerciales. A partir de él, se calcularán todos los precios de venta en la tienda.

Las reglas de precios se utilizan cuando se quiere alterar un precio de una determinada política comercial sin alterar el precio base para las demás políticas comerciales. También pueden ser utilizadas para alteraciones de precio para todos los productos de una categoría o marca.

Las reglas de modificación del precio son opcionales. El precio calculado de un SKU será su precio base en el caso no encaje en ninguna regla de modificación.

Más allá de esto, es importante resaltar que las reglas de precios se aplican al precio del SKU de forma sequencial, en el orden en el que son registradas en la plataforma. Es posible alterar el orden de una regla arrastando la flecha a la derecha hacia arriba o abajo. 

Será aplicada **sólo la primera** regla de precio que sea válida para as condiciones de SKU (categoría; marca; y rango de markup). Incluso si existen otras relas de precio válidas, apenas la primeira en el orden será utilizada para el cálculo del precio del SKU.

![new-dashboard-pricing-rule-reordering-es](https://images.contentful.com/alneenqid6w5/3qFR7a9G2kCO6IMSACoKki/be7a36609e25db3e3e4da99f5b116c71/new-dashboard-pricing-rule-reordering-es.gif)

_Recomendamos que el orden parta de las reglas más específicas a las reglas más generales._

## Como registrar

El paso a paso para el registro es bien simple, y está expuesto aquí:

![new-dashboard-pricing-add-rule-es](https://images.contentful.com/alneenqid6w5/1WE61W9Hvu8GMIoywGeqOG/97efe02874306a266793385ef984c32d/new-dashboard-pricing-add-rule-es.gif)

1. En la pantalla **Reglas de precios** será exhibida una lista con todas las políticas comerciales. Dentro de cada una, estarán las reglas. Haga click en el botón **Nueva regla**, arriba de la lista para crear una regla.
2. Elija en qué política comercial estará incluida esta regla.
3. Elija sobre qué items esta regla será aplicada. Es posible elegir dos opciones: aplicar en toda la tienda o completar los campos Categoría y/o Marca con uno o más valores.
4. Opcionalmente puede aplicar la regla sólo para items con precio base dentro de un **Rango de markup**. Si lo desea, active el campo **Utilizar rango de markup** y completa los campos `desde` y `hasta`.
5. Complete el campo **Modificador** con el valor porcentual que será incrementado o deducido del markup del precio base.
6. Haga click en el bostón **Guardar**.

Debajo se muestran ejemplos de los flujos de edición y exclusión de reglas de precio.

![new-dashboard-pricing-edit-rule-es](https://images.contentful.com/alneenqid6w5/61kaPdcYbCkwYGa0IeQoOg/5620702e4eb27233d0bbc8a3e60e7c11/new-dashboard-pricing-edit-rule-es.gif)
*Flujo de alteración de una regla*

![new-dashboard-pricing-remove-rule-es](https://images.contentful.com/alneenqid6w5/1iiu0BkGmgSC0Awgoacmq0/dedb479cfb8745277bad3e8f8d4e93ff/new-dashboard-pricing-remove-rule-es.gif)
*Fluxo de exclusión de una regla*
