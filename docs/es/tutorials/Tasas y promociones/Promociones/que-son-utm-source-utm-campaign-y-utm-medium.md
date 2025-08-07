---
title: 'Monitoreo de campañas con parámetros UTM'
id: 2wTz7QJ8KUG6skGAoAQuii
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.092Z
updatedAt: 2025-05-26T16:32:16.492Z
publishedAt: 2025-05-26T16:32:16.492Z
firstPublishedAt: 2019-01-24T22:11:24.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: what-are-utm-source-utm-campaign-and-utm-medium
legacySlug: que-son-utm-source-utm-campaign-y-utm-medium
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Los parámetros UTM (Urchin Tracking Modules) son parámetros de URL comúnmente utilizados en contextos de marketing para monitorear el tráfico que llega a las páginas del sitio web.

<div class="alert alert-info">
  Los parámetros UTM no se crean ni se gestionan directamente en la plataforma VTEX; deben agregarse manualmente a las URLs de las campañas de marketing. El análisis de los datos de tráfico basado en estos parámetros debe realizarse con herramientas externas, como 
  <a href="https://analytics.google.com/" target="_blank">Google Analytics</a>.
</div>

Por ejemplo, al hacer clic en un anuncio de Facebook, se direccionará al usuario a una URL que contiene el parámetro `utm_source=fb`.

También pueden asociarse promociones específicas a determinados valores de parámetros UTM. Es decir, cuando un cliente accede desde una URL con un parámetro UTM configurado, puede aplicarse una promoción a la compra que haya sido identificada por el marketplace.

### Tipos de parámetros UTM
Se pueden utilizar tres tipos de parámetros UTM para monitorear el tráfico:

- **utm_source:** identifica el origen del tráfico, como un sitio web, anunciante o publicación.
- **utm_medium:** especifica el medio de divulgación, como banner, CPC (costo por clic) o newsletter.
- **utm_campaign:** define el nombre de la campaña, indicando el contexto de marketing, como Navidad, lanzamiento o promoción.

<div class="alert alert-info">
  En la pantalla de gestión de pedidos, solo el parámetro <code>utm_source</code> está 
  <a href="https://help.vtex.com/es/tutorial/como-filtrar-pedidos" target="_blank">disponible para filtrar pedidos</a>.
</div>

<div class="alert alert-danger">
No utilices caracteres especiales en los valores de parámetros UTM, por ejemplo, `utm_source=#fb`. Solo se aceptan caracteres alfanuméricos, guiones y guiones bajos.
</div>

Para saber más sobre problemas relacionados con la aplicación de parámetros UTM en el carrito, consulta el artículo [Why are the UTMs not being applied to the cart?](https://developers.vtex.com/vtex-rest-api/docs/check-marketing-utms-used-at-checkout#why-are-the-utms-not-being-applied-to-the-cart).

### Artículos relacionados
- [Qué son las UTMs internas utmi_cp, utmi_pc y utmi_p](https://help.vtex.com/es/faq/o-que-sao-as-utms-internas-utmi_cp-utmi_pc-e-utmi_p)

