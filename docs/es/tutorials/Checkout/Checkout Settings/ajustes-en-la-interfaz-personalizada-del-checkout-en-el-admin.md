---
title: 'Ajustes en la interfaz personalizada del checkout en el Admin '
id: 548aDBJciQu97Vh0BhEiWx
status: PUBLISHED
createdAt: 2024-01-04T13:27:04.734Z
updatedAt: 2024-01-04T18:28:45.989Z
publishedAt: 2024-01-04T18:28:45.989Z
firstPublishedAt: 2024-01-04T18:28:45.989Z
contentType: tutorial
productTeam: Shopping
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: how-to-customize-the-checkout-ui-custom-in-the-admin
locale: es
legacySlug: ajustes-en-la-interfaz-personalizada-del-checkout-en-el-admin
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Las personalizaciones del checkout descritas en este artículo se llevan a cabo utilizando la aplicación Checkout UI Custom. Antes de iniciar los ajustes debes comprobar que la aplicación está instalada en la tienda, o instalarla como se indica en el artículo [Checkout UI Custom](https://developers.vtex.com/docs/apps/vtex.checkout-ui-custom).

## Personalizar el checkout

En el VTEX Admin, ve a **Configuración de la tienda > Storefront > Interfaz personalizada del checkout**, o ingresa **Interfaz personalizada del checkout** en la barra de búsqueda de la parte superior de la página. 

Se puede acceder a las funcionalidades de personalización de la aplicación a través de las siguientes pestañas del Admin:

* [Interfaz](#interfaz)
* [Colores](#colores)
* [JavaScript](#javascript)
* [CSS](#css)
* [Historial](#historial)

## Interfaz

En esta pestaña puedes configurar los siguientes ajustes:

1. **Opciones de pago como acordeón:** al activar el botón, las formas de pago se muestran en cascada (acordeón) si hay hasta cinco medios de pago. Cuando está desactivado, los medios de pago se muestran en pestañas laterales.

2. **Fecha de envío simplificada:** al activar el botón, podrás ver la estimación de envío en formato de fecha (por ejemplo, "lunes 18/09/23").  Cuando la opción está desactivada, los datos proporcionados se limitarán a una estimación del plazo en días por ejemplo, en hasta 5 días laborables.

3. **Mostrar el precio unitario del ítem:** al activar el botón, el usuario verá el valor unitario de cada producto y el valor total sumado, si se agregan al carrito dos o más unidades. Cuando la opción está desactivada, solo se puede ver el valor unitario de cada producto.

4. **Mostrar campo 'Notas':** al activar este botón se muestra un campo para agregar comentarios adicionales al pedido, como un mensaje de felicidades si el producto es un regalo o alguna observación relativa a la entrega del producto. Cuando está desactivado, este campo de comentarios no se muestra.

5. **Ocultar el paso de email:** al activar el botón, se desactiva la opción del relleno automático de datos mediante la inserción del email. Cuando se desactiva, los datos de contacto deben ingresarse manualmente.

6. **Formulario de dirección de Google:** es una integración del formulario de direcciones con Google (en fase beta). Cuando el botón está activado se proporcionan sugerencias para autocompletar la dirección; al seleccionarlas, los campos de dirección se rellenarán automáticamente.

7. **Tamaño del texto:** esta configuración permite cambiar el tamaño de la fuente (en píxeles) en el checkout.

8. **Radio del borde:** esta configuración permite personalizar el formato de redondeo del borde externo (en píxeles) en el checkout.

9. **Radio del borde del botón:** esta configuración permite personalizar el formato del redondeo del borde de los botones (en píxeles) en el checkout.

10. **Altura de los campos de texto:** permite personalizar la altura (en píxeles) de los campos de texto en el checkout.

11. **Anchura máxima del contenido:** permite configurar la anchura máxima (en píxeles) de la información mostrada en el checkout.

12. **Borde del contenedor:** permite configurar el [tipo de borde](https://www.w3schools.com/css/css_border.asp) de las secciones del checkout.

13. **Familia de fuente:** permite configurar los tipos de fuentes utilizadas en el checkout.

## Colores

La pestaña Colores facilita la personalización de los colores del checkout de tu tienda, lo que incluye la modificación de los colores del fondo, de los botones o del texto, por ejemplo. Esta estandarización garantiza una armonía visual consistente.

![Colores](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Checkout/Checkout Settings/ajustes-en-la-interfaz-personalizada-del-checkout-en-el-admin_1.png)

## JavaScript

La pestaña JavaScript agrega un nivel adicional de personalización de la interfaz al posibilitar la inserción de scripts.

![Java - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Checkout/Checkout Settings/ajustes-en-la-interfaz-personalizada-del-checkout-en-el-admin_2.png)

## CSS

La pestaña CSS permite ajustar el aspecto visual de la tienda mediante la inclusión de código CSS.

![CSS - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Checkout/Checkout Settings/ajustes-en-la-interfaz-personalizada-del-checkout-en-el-admin_3.png)

## Historial

Permite ver y restaurar las personalizaciones creadas y publicadas anteriormente.

![Histórico - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Checkout/Checkout Settings/ajustes-en-la-interfaz-personalizada-del-checkout-en-el-admin_4.png)

Para asegurarte de que la configuración se aplique correctamente, solo tienes que configurar los ajustes necesarios y hacer clic en el botón `Publicar`.

