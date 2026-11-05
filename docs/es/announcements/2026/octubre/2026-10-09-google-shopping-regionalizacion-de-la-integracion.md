---
title: 'Google Shopping: regionalización de la integración'
createdAt: 2026-10-02T12:00:00.000Z
updatedAt: 2026-10-09T12:00:00.000Z
contentType: updates
productTeam: Channels
slugEN: 2026-10-09-google-shopping-regionalization-of-the-integration
locale: es
announcementSynopsisES: 'La integración con Google Shopping ahora envía costo de envío, SLA, precio y disponibilidad por región según las zonas logísticas de la tienda.'
tags:
  - Nueva funcionalidad
  - Marketplace
---

Desarrollamos la regionalización de Google Shopping para que los anuncios y las listas de tiendas VTEX que usan la integración con Google Shopping puedan enviar los datos de envío, el SLA, el precio y la disponibilidad según la región del comprador. Esta funcionalidad se encuentra disponible para tiendas con la [integración de Google Shopping](/es/docs/tracks/marketplace-de-google-shopping) configurada y con [políticas de envío](/es/docs/tutorials/politica-de-envio) activas que incluyan una tabla de envío para la política comercial de la integración. Google usa zonas fijas para dividir el país en regiones. Esas zonas, incluidas las **Zonas comunes**, ya vienen sincronizadas desde Logística y no se pueden modificar.

El objetivo de esta funcionalidad es ofrecer una experiencia de compra más fluida, en la que el comprador tiene acceso al precio, a la disponibilidad, al plazo de entrega y al envío desde el primer contacto con el anuncio.

## ¿Qué cambió?

Antes, la integración enviaba los datos del SKU a nivel nacional, con un único precio y status de disponibilidad para todo el país, sin información de envío ni SLAs específicos por región. Ahora, los anuncios y listas pueden mostrar envío, SLA, precio y disponibilidad según la región del comprador. Estos valores provienen de una simulación basada en las políticas de envío de la tienda, así que las promociones de precio y de envío también entran en esa simulación.

Se pueden activar dos opciones, en este orden:

- **Google Shipping:** envía a Google el costo de envío y el SLA de entrega ya calculados por la tabla de envío de VTEX, por región. El precio y la disponibilidad siguen siendo nacionales. Los anuncios y listas pueden mostrar el valor de envío y el SLA estimado, incluidos envío gratis o entrega rápida, según las promociones de la tienda.
- **RAAP** (Regional Availability & Pricing): regionaliza el precio y la disponibilidad de cada SKU que la integración ya envía a nivel nacional.

> RAAP solo se puede activar cuando Google Shipping está activo y cuando la tienda tiene una variación real de precio o stock por región.

## ¿Qué se necesita hacer?

La funcionalidad está disponible para todas las tiendas VTEX con una integración de Google Shopping activa a partir del 2 de octubre de 2026. Para usar la funcionalidad la tienda debe tener políticas de envío con tabla de envío configurada y activa para la política comercial de la integración y activar las zonas deseadas en la nueva página.

Las tiendas que usan CMS Portal (Legado) o headless deben adaptar su página de producto para leer el parámetro `region_id` que Google agrega a la URL. Sin esta lectura RAAP no se refleja en el storefront. Más información en [Adapting headless storefronts to Google RAAP](https://developers.vtex.com/docs/guides/adapting-headless-storefronts-to-google-raap).

Para más información sobre cada configuración accede al tutorial [Regionalización de Google Shopping](/es/docs/tutorials/regionalizacion-de-google-shopping).
