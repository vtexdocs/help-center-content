---
title: 'Cómo funciona la indexación'
id: tutorials_256
status: PUBLISHED
createdAt: 2017-04-27T22:11:43.688Z
updatedAt: 2024-03-04T16:39:16.578Z
publishedAt: 2024-03-04T16:39:16.578Z
firstPublishedAt: 2017-04-27T23:03:11.322Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: understanding-how-indexation-works
locale: es
legacySlug: entendiendo-el-funcionamento-de-la-indexacion
subcategoryId: pwxWmUu7T222QyuGogs68
---

>⚠️ Este tutorial sólo es válido para las tiendas que utilizan la búsqueda del [CMS Portal Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).
>
> Si su tienda utiliza el [Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), consulte la página [Historial de indexación](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4flMwTaQL8FRKl1YT58ezH) para seguir el proceso de indexación.

La indexación es un proceso que prepara los datos generales del SKU, tales como datos de catálogo, de precio y de stock y actualiza la información para servir de base para búsquedas y montajes de las estantes del sitio.

Cada vez que se modifican los datos del listado de productos como se muestra a continuación, la base de datos se vuelve a indexar.

- Cambios en los datos del producto o SKU;
- Habilitación / deshabilitación del producto;
- Activación / desactivación de la colección;
- Cambio de precio;
- Cambio en la cantidad de inventario.

Una vez que el producto esté marcado para reindexar, éste queda con el texto _indexação pendente_ en el listado de productos del admin. El indexador toma esos productos y los coloca en una fila, con un tiempo de espera de 2 minutos, para que sean procesados. Pasados los 2 minutos el producto queda disponible para el consumo de la indexación. En ese proceso, todos los módulos de VTEX son consultados, actualizando precio y disponibilidad para cada política comercial. El tempo medio hasta finalizar este proceso es de 4 minutos.

![diagramaespanhol](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Products%20and%20SKUs/entendiendo-el-funcionamento-de-la-indexacion_1.png)

## Informe de Indexación

El informe de indexación es una página en el admin donde se puede hacer seguimiento del status de indexación de los productos de su tienda. El camino para accederlo es el siguiente:

1. En el Admin VTEX, accede a  **Catálogo**, o escribe  **Catálogo** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Informes**.
3. Haga clic en la pestaña **Productos Indexados**.

En él, se dividen los productos en cada paso del proceso de indexación y en periodos en los que esos productos están en este proceso:

- **Total Indexado**, **Aún no en la fila** y **Total en la fila**: : se refiere a las etapas del producto dentro del proceso &#8211; Ainda não enfileirado son los productos que se modificaron en menos de 2 minutos y Total na fila son aquellos que ya entraron en proceso de indexación, tras esos 2 minutos.
- **En la fila recientemente**, **En la fila entre 1 y 2 hs**, **En la fila de 2 a 4 hs** y **En la fila de 4 a 8 hs**: son los períodos en que los productos están en el proceso de indexación.

![productosindexados](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Products%20and%20SKUs/entendiendo-el-funcionamento-de-la-indexacion_2.png)

En el informe de indexación, también existe el tiempo que el último ítem tardó para ser re indexado. Queda al lado derecho superior del informe, conforme a la imagen arriba.

## Reintentos

Existe un número limitado de cantidad de intentos de indexación de los ítems. Lo que significa que, en caso que un producto no pueda ser indexado porque ha superado el límite de tiempo tres veces, éste se retira de la fila principal y se pasa a una fila de repechaje, en la que se hace el intento de indexación otras 7 veces, con un intento a cada 15 minutos. 

Si el producto todavía no se procesa al final de este tiempo, se retira también de la fila de repechaje y no se procesa más, solo hasta que se realice otra actualización de sus datos para que entre en todo el flujo nuevamente.

El tiempo de espera puede ser alcanzado por el número de validaciones que el producto sufrirá. Cada validación es una instancia en el catálogo. Se calcula de la siguiente manera:

- **x** Cantidad de políticas comerciales;
- **x** Promociones en las que el producto está insertado;
- **x** Cantidad de regiones geográficas;
- **x** Cantidad de colecciones en las que el producto está insertado.

## Para saber más

[¿Por qué mi producto no indexa?](http://help.vtex.com/es/faq/por-que-el-producto-no-indexa "¿Por qué mi producto no indexa?")
