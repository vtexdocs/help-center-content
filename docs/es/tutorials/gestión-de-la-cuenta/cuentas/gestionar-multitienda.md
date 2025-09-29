---
title: 'Gestionar multitienda'
id: 4S0lFVBPylRS5KpVgdyDhJ
status: PUBLISHED
createdAt: 2024-09-06T12:35:51.501Z
updatedAt: 2025-02-07T13:40:57.764Z
publishedAt: 2025-02-07T13:30:06.894Z
firstPublishedAt: 2024-09-06T13:11:49.620Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: managing-a-multistore
legacySlug: gestionar-multitienda
locale: es
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Una multitienda, también conocida como subcuenta o subdominio, es una segunda tienda administrada dentro del mismo panel de gestión en VTEX. Las multitiendas usualmente sirven para tiendas que tienen otras marcas con logística y medios de pago similares o tiendas que necesitan otro entorno, como para ventas B2B.

Esta guía describe cómo crear, configurar y eliminar una multitienda.

## Crear multitienda

La creación de una multitienda no conlleva costos para el retailer. Sin embargo, [contratar una política adicional](/es/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), de ser necesario, sí tiene costos adicionales.

Para crear una nueva tienda, sigue las instrucciones de la sección **Crear tienda** de la guía [Gestión de la cuenta](/es/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq#crear-tienda).

Debes especificar el dominio de tu nueva tienda. Más información en la guía [Configurar el dominio de la tienda](/es/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450).

Después de crear la multitienda, define el layout de cada tienda según la tecnología de frontend que utilices. Para más información consulta [Definir layouts para cada tienda](#definir-layouts-para-cada-tienda).

### Definir layouts para cada tienda

En un entorno multidominio puedes definir diferentes layouts para cada tienda, según el dominio al que se acceda.

- Para tiendas CMS - Portal Legado, consulta [Layout](/es/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW).
- Para tiendas desarrolladas con Store Framework, consulta [Gestionar contenido de páginas y templates](/es/tutorial/gerenciando-conteudo-de-pagina-e-template--3tMbx6HXy4Fy5r9EhboG37).

### Definir políticas comerciales

Para diferenciar productos y/o precios en cada tienda, debes utilizar políticas comerciales. Para más información, consulta [Cómo funciona una política comercial](/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) y [Crear una política comercial](/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE).

## Configurar sitio web

Para que los clientes puedan acceder a la nueva tienda, sigue las instrucciones a continuación para crear un sitio web copiando la estructura de carpetas del sitio web principal. Este proceso facilita la creación del layout aunque también tienes la opción de crear un sitio web nuevo.

> ⚠️ Las tiendas desarrolladas con Store Framework también deben seguir estas instrucciones o la tienda no estará disponible.

1. En el Admin VTEX, accede al módulo **Storefront > Layout**.
2. Haz clic en **CMS > Sites and channels**.
3. Haz clic en tu sitio web principal.
4. Haz clic en `Copy Website`.
5. Vuelve a hacer clic en **Sites and channels** en la columna lateral.
6. Haz clic sobre el sitio web creado y cámbiale el nombre.
7. Haz clic en `Save Website`.
8. En el campo **Links**, haz clic en `Add`.

    ![cms-layout](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/gesti%C3%B3n-de-la-cuenta/cuentas/gestionar-multitienda_1.png)

9. Rellena el campo **Store name from License Manager** con el valor de la subcuenta creada anteriormente en el módulo [Gestión de la cuenta](#crear-multitienda).
10. En el campo **Available sales channel**, marca las políticas comerciales que se deben asociar a esta tienda.

    > ⚠️ Si la tienda utiliza más de una (1) política comercial, asegúrate de ordenarlas en **Configuración de la tienda > Canales > Políticas comerciales**. Para más información, consulta [Cómo funciona la relación entre sitios web y políticas comerciales](/es/tutorial/gestionar-multitienda--4S0lFVBPylRS5KpVgdyDhJ).

11. Haz clic en `Save Binding` y después en `Save Website`.

### Configurar dominio del XML

Para generar el archivo XML de la nueva tienda automáticamente, sigue las instrucciones de la guía [Configurar dominio del XML](/es/tutorial/configurar-dominio-do-xml--2RkGK4vHS0c6sYuUw0cUWC).

## Eliminar multitienda

Para eliminar una multitienda existente, sigue las instrucciones de la sección **Eliminar tienda** de la guía [Gestión de la cuenta](/es/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq#eliminar-tienda).

> ⚠️ El nombre de la subcuenta eliminada no puede volver a utilizarse.

## Más información

- [Elegir entre arquitectura multitienda o entorno adicional](/es/tutorial/escolhendo-entre-arquitetura-multi-loja-ou-ambiente-adicional--4HRNpa1OCKZ5YzP8yiilBL)
