---
title: 'Configuración de la integración'
id: 2TTDtf6ZityqXzfPfnvJ3e
status: PUBLISHED
createdAt: 2024-10-23T17:17:07.710Z
updatedAt: 2026-09-28T20:45:00.000Z
publishedAt: 2025-05-28T14:34:26.994Z
firstPublishedAt: 2024-10-23T19:01:15.353Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-integration-posthaus
locale: es
trackId: eipXIoOCKRgTDkg1Z1C4a
trackSlugEN: integracion-posthaus
order: 2
---

## Credenciales Posthaus

El primer paso para integrar tu tienda VTEX con Posthaus es tener las credenciales **AppKey** y **AppToken**. Ambas se utilizan para validar tu integración con el marketplace.

> ❗ Para obtener tus credenciales e iniciar la integración ponte en contacto con el [Soporte VTEX](https://supporticket.vtex.com/support) (disponible solo en inglés).

Después de solicitar las credenciales, el seller puede continuar con [Definir la política comercial en Posthaus](#definir-la-politica-comercial-en-posthaus) y la configuración de la [Regla de divergencia](/es/docs/tracks/configurar-regla-de-divergencia-de-precios-posthaus).

Durante el proceso de configuración en la plataforma VTEX, asegúrate de tener las credenciales proporcionadas por Posthaus. Las credenciales [AppKey y AppToken](https://developers.vtex.com/docs/guides/authentication) son imprescindibles para la integración.

## Definir la política comercial en Posthaus

En VTEX, una [política comercial](https://help.vtex.com/es/docs/tutorials/como-funciona-una-politica-comercial) es lo que determina el surtido de productos, los precios y la estrategia de envío en un canal de venta. Es decir, a través de la política comercial defines la configuración que se aplicará a tus productos en Posthaus.

Si en Posthaus se utiliza la misma configuración de catálogo, precio y estrategia de envío de tu tienda VTEX, no es necesario [crear una nueva política comercial](https://help.vtex.com/es/docs/tutorials/crear-una-politica-comercial), porque la misma política comercial puede usarse en distintos canales de venta.

Solo será necesario [configurar una política comercial específica para marketplace](https://help.vtex.com/es/docs/tutorials/crear-una-politica-comercial) si tienes alguno de los siguientes objetivos:

- Ofrecer en Posthaus una selección diferente de productos.
- Disponibilizar una cantidad de inventario diferente.
- Enviar precios diferentes a Posthaus.
- Enviar promociones diferentes a Posthaus.
- Configurar otras condiciones de pago.
- Definir una [estrategia de envío](https://help.vtex.com/es/docs/tutorials/estrategia-de-envio) diferente.

Si necesitas una política comercial exclusiva para Posthaus puedes [crearla directamente desde el Admin VTEX](https://help.vtex.com/es/docs/tutorials/crear-una-politica-comercial) sin completar formularios ni abrir tickets. Para más información sobre costos y condiciones, consulta [Contratación de políticas comerciales adicionales](https://help.vtex.com/es/docs/tutorials/contratacion-de-politicas-comerciales-adicionales). Si tienes alguna duda, abre un ticket en [Soporte VTEX](https://supporticket.vtex.com/support) (disponible solo en inglés) y selecciona la opción **Sales** (Comercial).
