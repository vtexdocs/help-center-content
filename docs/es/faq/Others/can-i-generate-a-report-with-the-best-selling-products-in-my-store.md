---
title: '¿Puedo generar un informe con los productos más vendidos en mi tienda?'
id: 1kAFHDatvOiwqEGGs2OYwK
status: ARCHIVED
createdAt: 2018-02-27T13:44:34.700Z
updatedAt: 2019-12-31T14:25:07.179Z
publishedAt: 
firstPublishedAt: 2018-02-27T14:56:13.919Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: 7FpKZ0rc6k4WqeymES80cw
slug: puedo-generar-un-informe-con-los-productos-mas-vendidos-en-mi-tienda
locale: es
legacySlug: 
---

No se puede generar exactamente un informe. VTEX no tiene una herramienta nativa preparada para ello, pero probablemente usted consigue esa información del ERP utilizado por su tienda.

Sin embargo, es posible obtener este resultado haciendo un análisis en la hoja de pedidos disponible en el módulo OMS.

__Para acceder a esta hoja de trabajo, siga los siguientes pasos: __

1. Acceda al módulo __OMS__
2. Haga clic en el icono __filtro__.
3. Haga una búsqueda __por período__ (recordando que el rango máximo permitido es de hasta 6 meses. En el caso de querer hacer una búsqueda por período de 1 año, por ejemplo, haga la búsqueda 2 veces)
4. Al regresar a la lista ya filtrada de pedidos, __clique en el icono de exportación .__
! [ExportacaoOMS] (https:// images.contentful.com/alneenqid6w5/3pX1xFqvS0uMOEe8OUquci/81e2be7c1948d62a863cfccfc36f18a9/exportacaoOMS.png)
5. Aparecerá una barra de progreso. Entonces, para finalizar, hay que hacer clic en __Exportar xxx solicitudes a correo electrónico.
! [ExportarOMS] (https:// images.contentful.com/alneenqid6w5/3Z7h82etgIuQcUI6iGsgyk/11bbadc4b3c2174c82844e9125af8e50/ExportarOMS.png)

Su solicitud irá a una fila, que puede ser acompañada por la OMS. Cuando llegue su turno, recibirá la hoja de pedidos en su correo electrónico.

Para obtener la información de sus productos más vendidos, después de descargar la hoja de cálculo, usted debe hacer la cuenta entre las columnas __AH (Quantity_SKU) __, que dice la cantidad de SKU que se vendió, y la columna __AI (ID_SKU) __, que si se refiere al SKU en cuestión.

<div class = "alert alert-danger">
Las exportaciones se pueden realizar dentro de un rango de tiempo de 31 días.
</ Div>
