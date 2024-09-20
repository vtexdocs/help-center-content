---
title: 'Configuración de la búsqueda'
id: 5t75L6lYNwix93l41s1Yrx
status: ARCHIVED
createdAt: 2020-08-17T19:50:20.729Z
updatedAt: 2024-09-06T20:14:21.133Z
publishedAt: 
firstPublishedAt: 2020-09-28T20:51:58.291Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: configuracion-de-la-busqueda
locale: es
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugES: vtex-intelligent-search
---

La página **Configuración de la búsqueda** comprende la configuración global de VTEX Intelligent Search. Para acceder, en el VTEX Admin ve a **Configuración de la tienda > Intelligent Search > Configuración de la búsqueda**. Esta consta de dos secciones: [Configuración general](#configuracion-general) y [Configuración de filtros](#configuracion-de-filtros).

## Configuración general

La configuración general presenta las siguientes opciones relativas a [las especificaciones de productos y SKU](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP):

* **Utiliza las especificaciones de SKU para mostrar productos individuales en los resultados de búsqueda**: establece las características que determinarán el orden de los SKU en los resultados de búsqueda.

    Supongamos que tienes un producto con los colores rojo y azul como SKU. Si seleccionas el atributo "color" en este campo, el resultado de la búsqueda devolverá dos productos (uno azul y otro rojo) en lugar de uno solo.

    Para agregar una especificación, haz clic en la barra del menú desplegable y selecciona la especificación deseada.

    Consulta la guía [Separar SKUs por especificación](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5uVxuWxTA8VvLX3G8UCcUE) para obtener más detalles sobre esta configuración. 

* **Especificaciones buscables:** determina las especificaciones de producto que pueden ser buscadas por el motor de búsqueda.

    Por ejemplo, si una camisa no contiene un color en el nombre del producto o en el SKU, de manera predeterminada, Intelligent Search no identificará este atributo en una búsqueda de "camisa azul", lo que dará como resultado camisas de diferentes colores. Sin embargo, si la especificación de color está configurada como buscable, la búsqueda puede hacer que aparezcan camisas azules en las primeras posiciones.

## Configuración de filtros

La configuración de facetas presenta ajustes relacionados con las [facetas](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/50Dh4mpv0Sax0XpbvsjAtP) mostradas a los clientes de tu tienda durante la búsqueda:

![Configuracion del filtro](//images.ctfassets.net/alneenqid6w5/mSm3lqR5H5pTn1AVrhYk8/9da57a4e5ca6deae770e223ab7fae366/configuraciones_de_filtro_es.png)

* **Orden de las facetas:** orden en el que se mostrarán las facetas en la tienda. Si no hay ninguna faceta seleccionada en la sección, el orden predeterminado es alfabético.

    Para agregar una faceta, haz clic en `Agregar`, selecciona la faceta deseada y haz clic en `Guardar`.

    Puedes cambiar la clasificación arrastrando el ícono de puntos <i class="fas fa-grip-vertical"></i> de cada faceta a la posición deseada.

    Para eliminar una faceta, haz clic en el ícono de la papelera <i class="fas fa-trash-alt"></i>.

* **Ocultar facetas:** selección que permite que determinadas facetas no se muestren en la tienda. Para ocultar una faceta, haz clic en el menú desplegable, y a continuación en el nombre de la faceta. 

    Para volver a mostrar una faceta, haz clic en la X situada junto a su nombre. Si deseas volver a mostrar todas las facetas anteriormente ocultas, haz clic en la X situada a la derecha del campo.
