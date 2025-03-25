---
title: 'Qué son utm_source, utm_campaign y utm_medium'
id: 2wTz7QJ8KUG6skGAoAQuii
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.092Z
updatedAt: 2022-11-28T19:10:34.068Z
publishedAt: 2022-11-28T19:10:34.068Z
firstPublishedAt: 2019-01-24T22:11:24.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: what-are-utm-source-utm-campaign-and-utm-medium
locale: es
legacySlug: que-son-utm-source-utm-campaign-y-utm-medium
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

UTMs (Urchin Tracking Modules) son parámetros de URL normalmente utilizados en contextos de marketing para rastrear el tráfico que llega a las páginas del sitio.

Usted puede, por ejemplo, definir que cada vez que un usuario llegue a su tienda desde un clic en un anuncio de Facebook, la URL será montada con el parámetro `utm_source=fb`.

O bien, usted puede definir que, para esa misma UTM, determinada promoción será aplicada. Es decir, siempre que un cliente venga de Facebook, se aplicará una determinada promoción en el pedido hecho por él.

Así, la plataforma le permite tomar ciertas acciones de acuerdo con el origen del tráfico de la tienda.

>ℹ️ En la pantalla de **Gestión de pedidos**, sólo utm_source está [disponible para filtro](https://help.vtex.com/es/tutorial/como-filtrar-pedidos).

### Tipos de UTM

Conceptualmente, VTEX trabaja con tres tipos de UTM:
- __utm_source__: el origen del tráfico, es decir, de qué sitio, anunciante o publicación vino el usuario.
- __utm_medium__: los medios de publicidad o marketing utilizados para llegar a su sitio (ejemplos: banner, cpc, newsletter).
- __utm_campaign__: el nombre de la campaña que define determinado contexto de marketing (ejemplos: natal, lanzamiento, promo01).

Pero usted puede utilizar estas UTMs de la manera que mejor se adapte a sus reglas de negocio.

Por lo tanto, en la práctica, lo que importa es definir la acción correcta para los valores de estos parámetros.

>❗ Atención: caracteres **especiales no** deben utilizarse en UTMs. Estas variables solo funcionan correctamente en caso de que sean utilizados caracteres ** alfanuméricos, guiones y underscore **.

Para obtener más información sobre problemas con la adición de UTM al carrito, vaya a [Why are the UTMs not being applied to the cart?](https://developers.vtex.com/vtex-rest-api/docs/check-marketing-utms-used-at-checkout#why-are-the-utms-not-being-applied-to-the-cart).

### Artículos relacionados

- [Qué son las UTMs internas utmi_cp, utmi_pc y utmi_p](/es/faq/que-son-las-utms-internas)
