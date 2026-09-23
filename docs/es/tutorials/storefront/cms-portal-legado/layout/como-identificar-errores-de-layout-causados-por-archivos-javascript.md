---
title: 'Identificar errores de layout causados por archivos JavaScript'
id: frequentlyAskedQuestions_588
status: PUBLISHED
createdAt: 2019-01-24T20:45:54.986Z
updatedAt: 2023-03-29T13:44:10.202Z
publishedAt: 2023-03-29T13:44:10.202Z
firstPublishedAt: 2019-01-24T22:14:27.348Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-identify-layout-errors-caused-by-javascript-files
legacySlug: como-identificar-errores-de-layout-causados-por-archivos-javascript
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
seeAlso:
  - /es/docs/tutorials/como-identificar-cual-archivo-javascript-esta-aplicado-en-una-pagina
  - /es/faq/como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda
  - /es/docs/tutorials/como-realizar-um-teste-para-verificar-problemas-de-layout
---

> ⚠️ Tutorial válido solo para tiendas CMS Portal (Legado).

Puede usar la página `/tools.html` para verificar si un error de layout proviene de un archivo JavaScript personalizado de la tienda o del comportamiento nativo de VTEX.

Para deshabilitar el JavaScript del cliente y probar la página, siga los pasos a continuación:

1. Acceda a `https://{accountName}.myvtex.com/tools.html`, reemplazando `{accountName}` por el nombre de la cuenta de su tienda.
2. En la pestaña **Client JavaScript is**, haga clic en **Disable**.

![Página tools.html con la opción de deshabilitar el JavaScript del cliente](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/como-identificar-errores-de-layout-causados-por-archivos-javascript_1.png)

3. Elimine `/tools.html` de la URL y actualice la página de la tienda.

Si el error desaparece, es probable que lo cause un archivo JavaScript personalizado. En ese caso, ajuste el archivo.

Al insertar JavaScript en la página, siga estas recomendaciones:

- Use un archivo JavaScript externo, no código inline.
- Verifique que el archivo no afecte el desempeño de la tienda.
