---
title: 'Realizar una prueba para verificar problemas de layout'
id: tutorials_545
status: PUBLISHED
createdAt: 2017-04-27T22:01:40.228Z
updatedAt: 2023-03-29T13:52:48.907Z
publishedAt: 2023-03-29T13:52:48.907Z
firstPublishedAt: 2017-04-27T23:03:38.289Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5S2MYtrgEoSGaGMqsICaEC
slug: como-realizar-um-teste-para-verificar-problemas-de-layout
legacySlug: como-realizar-um-teste-para-verificar-problemas-de-layout
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

Cuando nos encontramos con escenarios en los que haya algún comportamiento extraño en el sitio, podemos hacer algunos procedimientos para ver de dónde viene la duda.

La primera prueba, es desconectar el JS en tools, si tiene dudas de cómo hacerlo [haga clic aquí y vea cómo deshabilitarlo.](http://help.vtex.com/es/faq/como-identificar-errores-de-layout-causados-por-archivos-javascript "haga clic aquí y vea cómo deshabilitarlo.")

Si, aun con el tools deshabilitado, todavía no está seguro si es algún JS colocado en la página, trate de tomar un template prácticamente limpio y haga la prueba usando el LID del template registrado.

1. Para hacer eso, en el Admin VTEX, accede a **Storefront > Layout > CMS** and crea un template nuevo en Templates de Página y coloque el template más limpio que pueda, solamente con la información que necesita probar.

2. Luego, acceda al área de Layouts y vaya a la carpeta de la página que quiere probar y haga clic en Novo Layout.

3. Ahora coloque el Nome do Layout, y seleccione el template que ha creado anteriormente.

4. Acceda al sitio y vaya a la página que está probando. Después, coloque la Lid del Layout que ha creado como una QueryString (con ? o &):

