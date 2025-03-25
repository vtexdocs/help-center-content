---
title: 'He activado la suscripción de un producto, pero no aparece en el sitio. ¿Por qué?'
id: 4HTtsuhjckHBgkBIyrH8tz
status: PUBLISHED
createdAt: 2019-01-28T19:20:20.661Z
updatedAt: 2021-04-30T14:35:48.244Z
publishedAt: 2021-04-30T14:35:48.244Z
firstPublishedAt: 2019-01-28T19:20:54.475Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: i-ve-activated-a-product-subscription-but-it-doesnt-appear-on-the-site
locale: es
legacySlug: he-activado-la-recurrencia-de-un-producto-pero-no-aparece-en-el-sitio
---

>⚠️ **Atención:** existen dos formas de configurar colecciones, mediante el CMS o utilizando el módulo Colecciones Beta. Este artículo se refiere a <a href = "https://help.vtex.com/es/tutorial/registrar-una-coleccion-cms--2YBy6P6X0NFRpkD2ZBxF6L">la configuración de colecciones mediante el CMS</a>.

Siempre que cambie o cree una suscripción, es necesario reindexar sus SKUs para que ella funcione correctamente. Al hacer esto, usted estará guardando la información de que ese SKU tiene un anexo (en este caso, la suscripción) y debe ser tratado de forma distinta.

Para reindexar sólo los SKUs de la suscripción, y no toda su base, usted puede crear una colección de SKUs que forman parte de la suscripción e incluirlos manualmente para que sólo ellos se reindexen.

__Para hacer la inclusión manual de SKUs específicos, siga el paso a paso abajo:__

1. En el Admin, acceda al __CMS__.
2. Haga clic en la carpeta __CMS__.
3. Después, en __Product Clusters (Colecciones)__.
4. Haga clic en __New collection__.
5. Dé un nombre a su colección (los demás campos no se deben llenar).
6. Introduzca los SKUs en el campo informado y __los separe con comas__.

![recurrence-specific-skus](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/Marketing%20&%20Merchandising/he-activado-la-suscripcion-de-un-producto-pero-no-aparece-en-el-sitio_1.png)

Por fin, dé un nombre al __Grupo__ de su Colección y haga clic en __Save Group__.
