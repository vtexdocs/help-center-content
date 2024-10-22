---
title: 'Usar filtros del Gestión de Pedidos en el API'
id: tutorials_753
status: ARCHIVED
createdAt: 2017-04-27T21:58:17.338Z
updatedAt: 2022-10-21T00:14:29.132Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:42.267Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: using-orders-managment-filters-in-api
locale: es
legacySlug: uso-de-los-filtros-del-oms-en-el-api
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Este artículo tiene el objetivo de demostrar maneras de usar los filtros aplicables por la API de la Gestión de Pedidos en las consultas por API.

Puede consultar el listado con todas las API disponibles en la Gestión de Pedidos en [nuestra documentación para desarrolladores](https://developers.vtex.com "nuestra documentación para desarrolladores").

El ejemplo utilizado es la API de consulta a los pedidos: http://{NOMBRETIENDA}.vtexcommercestable.com.br/api/oms/pvt/orders/ donde se enumeran todas las solicitudes de 15 en 15 de forma paginada.

### Aplicando los filtros

1. Acceda al módulo Gestión de Pedidos.
2. Haga clic en el símbolo de filtros.

Utilizaremos el filtro por la fecha de creación del pedido en un intervalo que traiga todos los pedidos realizados **hace un mes** y que estén en el estado **listo para el manejo.**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All orders/uso-de-los-filtros-del-gestión-de-pedidos-en-el-api_1.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All orders/uso-de-los-filtros-del-gestión-de-pedidos-en-el-api_2.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All orders/uso-de-los-filtros-del-gestión-de-pedidos-en-el-api_3.png)

Cuando se realizan los filtros, se generará una URL en el propio navegador con los parámetros seleccionados:
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All orders/uso-de-los-filtros-del-gestión-de-pedidos-en-el-api_4.png)

Por lo tanto, es necesario descodificar la dirección URL para ser interpretada por la interfaz de REST. Una herramienta ágil para ajustar esto manualmente es la [URL del dencoder]
(http://meyerweb.com/eric/tools/dencoder/ "URL dencoder").

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/All orders/uso-de-los-filtros-del-gestión-de-pedidos-en-el-api_5.png)

Hecho esto, basta con copiar la extensión de la URL desde el "?" Y pegar en la estructura de origen a la URL de solicitud.
Por ejemplo: `http://{accountName}.vtexcommercestable.com.br/api/oms/pvt/orders?orderBy=creationDate,desc&f_creationDate=creationDate:[2017-01-01T03:00:00.000Z TO 2017-07-10T02:59:59.999Z]&f_statusDescription=Pronto+para+o+manuseio`

Para utilizar la paginación y determinar la cantidad de registros por página, introduzca los parámetros `&page=1&per_page=100`.
