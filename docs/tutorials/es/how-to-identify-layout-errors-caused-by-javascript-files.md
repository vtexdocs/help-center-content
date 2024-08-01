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
slug: como-identificar-errores-de-layout-causados-por-archivos-javascript
locale: es
legacySlug: como-identificar-errores-de-layout-causados-por-archivos-javascript
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

Una manera de identificar si un error presentado en el layout es causado por un control estándar de VTEX o por un archivo Javascript personalizado en la tienda es usar el /tools.html.

Para eso, siga los siguientes pasos:

1. Para deshabilitar el JavaScript de la página basta colocar el `/tools.html` al final de la URL. Ej: {AccountName}.myvtex.com/tools.html
2. Haga clic en __Disable__ en la pestaña __Client JavaScript is__.
![javascript-disable ](//images.ctfassets.net/alneenqid6w5/2rDNQsznK8umymyKaOoYkA/1c4306998c4d580505dfaffe20ca66fa/js_enabled.png)

3. Después retirar el `/tools.html` da URL y actualizar la página.

Si el error que se estaba presentando es causado por un Javascript externo, el mismo no aparecerá más.
Así, será necesario ajustar ese archivo.

Sobre archivos JavaScript insertados en la página, es importante seguir algunas premisas:

- Usar JavaScript externo y no inline.
- Verificar si el mismo no va a interferir en el desempeño de la tienda.

Recordamos que también tenemos el VTEX Speed, herramienta que permite el desarrollo local con tiempo de cache menor.  [Vtex Speed - Descarga y Ejecución](https://github.com/vtex/speed)

Para investigar posibles problemas relacionados con CSS recomendamos el uso del plugin WebDeveloper - vea [aquí](/es/tutorial/herramientas-para-mejorar-la-performance-de-la-tienda/) algunas herramientas para mejorar el debug de problemas de personalización.
