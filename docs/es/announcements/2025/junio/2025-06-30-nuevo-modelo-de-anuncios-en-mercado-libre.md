---
title: 'Nuevo modelo de anuncios en Mercado Libre'
id: 3g7c72gcJk6WvKXNGfPTkb
status: PUBLISHED
createdAt: 2025-06-30T16:52:13.856Z
updatedAt: 2025-07-24T17:00:22.767Z
publishedAt: 2025-07-24T17:00:22.767Z
contentType: updates
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: 2025-06-30-new-offer-model-on-mercado-libre
locale: es
legacySlug: nuevo-modelo-de-anuncios-en-mercado-libre
announcementImageID: 'undefined'
announcementSynopsisES: 'Descubre el modelo de anuncios que permite ofrecer diferentes condiciones de venta para un mismo producto.'
---

El nuevo modelo de anuncios de **Mercado Libre** permite a los sellers configurar diferentes condiciones de venta para cada SKU de un producto. El seller puede personalizar el precio de cada variación.    

La [integración con Mercado Libre](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq) está disponible para los siguientes países: Argentina, Brasil, Chile, Colombia, Ecuador, México, Perú, Uruguay y Venezuela.  

## ¿Por qué realizamos este cambio?

En el modelo anterior, se creaba un anuncio en el marketplace cuando el seller enviaba un producto a través de la integración de su tienda con Mercado Libre. Todos los SKU de este producto estaban vinculados al mismo anuncio, sin la posibilidad de tener atributos tales como precio, origen del stock, tipo de envío y descuento de forma individual.  

![uptin1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2025/junio/2025-06-30-nuevo-modelo-de-anuncios-en-mercado-libre_1.jpg)

En el nuevo modelo, los anuncios se crean en el marketplace a partir del envío de los SKU. Para agrupar los SKU de un producto, **Mercado Libre** identifica las características similares y genera automáticamente un conjunto denominado **Family_id.**  

Al crear un nuevo anuncio, Mercado Libre utilizará los atributos del SKU como talla y color para agruparlos en un **Family_id**.  

También se han modificado algunas denominaciones: lo que antes era **Product Name** ahora es **Family_id**; los **SKU**  se llaman ahora **User Product** y los **Atributos lógicos o condiciones de venta** son ahora **item_id.**  

![uptin-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2025/junio/2025-06-30-nuevo-modelo-de-anuncios-en-mercado-libre_2.png)

## ¿Qué se necesita hacer?

Las cuentas ya integradas con Mercado Libre migrarán de forma gradual y automática. Este modelo de anúcio sólo está disponible a través de Mercado Libre.  

Para migrar anuncios existentes al nuevo modelo, el seller debe seguir los pasos a continuación:  

1. En el Admin VTEX, acceder a **Marketplace > Conexiones > Marketplaces e integraciones.**  
2. Hacer clic en la integración de Mercado Libre.  
3. Hacer clic en el botón `Enviar plantilla`.  
4. Hacer clic en el link `Descarga la plantilla` y completarla con los IDs de los anuncios en Mercado Libre.  
5. Cargar la plantilla completa.  

Después de seguir estos pasos, Mercado Libre evalúa todos los anuncios seleccionados para la migración y, si son elegibles, se migrarán.  

Los anuncios no elegibles se rechazarán y seguirán existiendo y recibiendo mantenimiento de la misma forma que hasta ahora, mientras que los anuncios creados después de la migración de la cuenta estarán disponibles con este nuevo modelo.  
