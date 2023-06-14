---
title: Control para deshabilitar la tag canonical
id: 6A8OVhzqc8qYYmecUu68kk
status: DRAFT
createdAt: 2019-01-24T20:45:37.943Z
updatedAt: 2022-09-08T16:44:24.945Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:03:32.817Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: control-para-deshabilitar-la-tag-canonical
legacySlug: control-para-deshabilitar-la-tag-canonical
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

## ¿Qué es la tag canonical?

Al utilizar el control de meta tags, explicado en el artículo [Cómo utilizar el control de meta tags](como-utilizar-el-control-de-meta-tags), una de las tags insertadas en el head de la página es la __tag canonical__:

`<link rel="canonical" href="http://{AccountName}.com.br/{page}">`

La tag canonical permite evitar __contenido duplicado__, es decir, escenarios en los que dos páginas del sitio exhiben contenido idéntico o casi idéntico. Un ejemplo son las tres siguientes URLs:
- {AccountName}.com
- {AccountName}.com.br
- {AccountName}.com/

Todas las URLs anteriores muestran el mismo contenido, pero para los buscadores, la simple adición de una barra al final de la dirección puede caracterizar una página diferente, lo que es pésimo para el propósito de __SEO__.

Para evitar escenarios como este, la tag canonical informa a los buscadores cuál es la versión preferente de una página web.

Por medio de ella, un motor de búsqueda puede decidir si dos páginas tienen contenido duplicado y, si decide que sí, repasar los méritos de indexación a la versión preferente.

## Deshabilitar la tag canonical para una página

Aunque la tag canonical es útil para fines de SEO, puede que usted no quiera usarla para páginas específicas.

Como se inserta automáticamente por el control de meta tags, si está usando este control, usted necesita informar al sistema que debe excluir sólo la tag canonical. Esto se hace por medio del siguiente control:

`<vtex.cmc:canonicalPage disable="true"/>`

El valor `true` pasado al parámetro `disable` de ese control hace que la tag canonical __no__ sea usada para ese template.
