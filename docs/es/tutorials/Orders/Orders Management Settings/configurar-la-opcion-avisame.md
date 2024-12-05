---
title: 'Configurar la opción Avísame'
id: 2VqVifQuf6Co2KG048Yu6e
status: PUBLISHED
createdAt: 2017-10-17T20:54:15.822Z
updatedAt: 2023-03-29T20:36:18.980Z
publishedAt: 2023-03-29T20:36:18.980Z
firstPublishedAt: 2017-10-17T20:57:40.778Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: setting-up-the-notify-me-option
locale: es
legacySlug: configurar-el-aviseme
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

>⚠️ Este articulo explica cómo configurar la opción **Avísame** en las tiendas que usan [CMS Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj). En las tiendas que usan [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/what-is-vtex-io), la configuración se debe hacer siguiendo los pasos de la guía [Availability Notify](https://developers.vtex.com/vtex-developer-docs/docs/vtex-availability-notify).

Cuando no hay [stock](https://help.vtex.com/es/tutorial/gestionar-items-en-inventario--tutorials_139) de un producto, el administrador de la tienda puede optar por ofrecer al cliente la opción **Avísame**. Esta funcionalidad permite que los clientes interesados en un producto reciban una notificación por email cuando el ítem vuelva a estar disponible.

A continuación, puedes ver un ejemplo de cómo se visualiza la opción **Avísame** en una tienda. Para recibir una notificación cuando el ítem esté disponible para la venta, el cliente debe ingresar su nombre e email en los campos resaltados y luego hacer clic en el botón `Enviar`.

![aviseme-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/Orders%20Management%20Settings/configurar-la-opcion-avisame_1.png)

En cuanto el ítem ingrese de nuevo al stock de la tienda, el sistema envía automáticamente un email al cliente informándo le que el producto ya está disponible para la compra. 

En este artículo, describiremos en detalle las configuraciones necesarias para habilitar la opción **Avísame**:

* [Mostrar la opción Avísame](#mostrar-la-opcion-avisame)
* [Configurar la plantilla de la página de producto](#configurar-la-plantilla-de-la-pagina-de-producto)
* [Configurar la plantilla del email de notificación](#configurar-la-plantilla-del-email-de-notificacion)

## Mostrar la opción Avísame

Para activar la opción **Avísame**, sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Configuración**, o escribe *Storefront* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Storefront*. 
2. Haz clic en la pestaña **General**.
3. Selecciona la opción <a class="far fa-check-square"></a> **Mostrar «Avísame» cuando esté fora de stock**.
4. Haz clic en `Guardar`.

### Configurar la plantilla de la página de producto

A continuación, es necesario configurar la plantilla de la página de producto para que se visualice la opción **Avísame**. Sigue las instrucciones a continuación.

1. En el Admin VTEX, accede a **Storefront > Layout**, o escribe **Layout** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en la carpeta **CMS**.
3. Haz clic en la carpeta **HTML Templates**.
4. Haz clic en la plantilla **Product**.
5. Usa el control vtex.cmc:BuyButton en la plantilla de la página **Product**, según se describe a continuación:

```html
<div class="buy-button-box hidden-xs">
<vtex.cmc:BuyButton />
</div><!-- .buy-button-box -->
```

## Configurar la plantilla del email de notificación

Para configurar la plantilla del email de **Avísame** que recibirá el cliente, sigue las instrucciones a continuación.

1. En el Admin VTEX, accede a **Configuración de la tienda > Plantillas de email > Plantillas**, o escribe **Plantillas** en la barra de búsqueda en la parte superior de la página. 
2. Busca la frase «Let me know».
3. Selecciona la plantilla **Let me know**.
4. Accede al cuadro de texto **HTML** y edita el código como quieras.
5. Haz clic en `Guardar`.

## Más información

* [Exportar los clientes registrados en la notificación de disponibilidad (Avísame)](https://help.vtex.com/es/tutorial/exportar-los-clientes-registrados-en-la-notificacion-de-disponibilidad--3Yr19DMQukGeIImUeCwIao)
* [Insertar imágenes en el email de Avísame](https://help.vtex.com/es/tutorial/insertar-imagenes-en-el-email-de-avisame--3soCXGcE3XBPsnPhxJh2DY)
* [Qué hacer cuando no aparece la opción Avísame](https://help.vtex.com/es/faq/que-hacer-cuando-no-aparece-la-opcion-avisame--oNb6JK1LPMOQwYsecKKCs)
