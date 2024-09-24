---
title: 'Realizar una prueba para verificar problemas de layout'
id: tutorials_545
status: CHANGED
createdAt: 2017-04-27T22:01:40.228Z
updatedAt: 2024-09-24T14:26:07.457Z
publishedAt: 2023-03-29T13:52:48.907Z
firstPublishedAt: 2017-04-27T23:03:38.289Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5S2MYtrgEoSGaGMqsICaEC
slug: como-realizar-um-teste-para-verificar-problemas-de-layout
locale: es
legacySlug: como-realizar-um-teste-para-verificar-problemas-de-layout
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

>⚠️ Tutorial válido solo para tiendas CMS Portal Legado.

Cuando nos encontramos con escenarios en los que haya algún comportamiento extraño en el sitio, podemos hacer algunos procedimientos para ver de dónde viene la duda.

La primera prueba, es desconectar el JS en tools, si tiene dudas de cómo hacerlo [haga clic aquí y vea cómo deshabilitarlo.](https://help.vtex.com/es/tutorial/como-identificar-erros-de-layout-ocasionados-por-arquivos-javascript--frequentlyAskedQuestions_588)

Si, aun con el tools deshabilitado, todavía no está seguro si es algún JS colocado en la página, trate de tomar un template prácticamente limpio y haga la prueba usando el LID del template registrado.

1. Para hacer eso, en el Admin VTEX, accede a **Storefront > Layout > CMS** and crea un template nuevo en Templates de Página y coloque el template más limpio que pueda, solamente con la información que necesita probar.

2. Luego, acceda al área de Layouts y vaya a la carpeta de la página que quiere probar y haga clic en Novo Layout.

3. Ahora coloque el Nome do Layout, y seleccione el template que ha creado anteriormente.

4. Acceda al sitio y vaya a la página que está probando. Después, coloque la Lid del Layout que ha creado como una QueryString (con ? o &):

