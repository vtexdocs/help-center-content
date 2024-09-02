---
title: 'Exportar la base de newsletter por Master Data'
id: frequentlyAskedQuestions_1825
status: PUBLISHED
createdAt: 2019-01-24T20:45:58.818Z
updatedAt: 2024-05-24T18:56:12.924Z
publishedAt: 2024-05-24T18:56:12.924Z
firstPublishedAt: 2019-01-24T22:00:56.109Z
contentType: tutorial
productTeam: Master Data
author: authors_84
slug: como-realizar-la-exportacion-de-la-base-de-newsletter-de-master-data
locale: es
legacySlug: como-realizar-la-exportacion-de-la-base-de-newsletter-de-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

Para exportar su base de clientes que han optado por recibir newsletter, siga el paso a paso a continuación:

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. Haga clic en la pestaña **Clientes.**
3. Haga clic en `Exportar XLS`.
4. Seleccione el filtro `Recebe Newsletter?`, entre otros que quiera (`Nome` y `E-mail`, por ejemplo).
5. Haga clic en `Exportar`.
6. Será informado que la exportación se ha programado con éxito. Haga clic en `OK`.

   En la planilla que ha sido enviada a su e-mail habrá una columna titulada `isNewsletterOptIn`, que asigna el valor **true** para los clientes que reciben newsletter y **false** para aquellos que no la reciben.

<div class="alert alert-warning">
  <p>Esta opción sólo es válida para tiendas que tienen registro de newsletter por el Master Data. Si su tienda no tiene esa configuración y ella todavía se hace por un control de página, vea el artículo <a href="https://help.vtex.com/es/tutorial/como-configuro-la-captacion-de-newsletter-por-el-master-data--frequentlyAskedQuestions_1816">Configurar la captación de newsletter por Master Data</a> para saber como configurar.</p>
</div>
