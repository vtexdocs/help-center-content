---
title: 'Campos de producto personalizables para Mercado Libre'
id: 6tJOSJ2o9phVIb8XXG6QSk
status: PUBLISHED
createdAt: 2024-07-23T19:44:34.554Z
updatedAt: 2024-08-19T17:39:24.164Z
publishedAt: 2024-08-19T17:39:24.164Z
firstPublishedAt: 2024-07-23T20:17:01.358Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: custom-product-fields
legacySlug: campos-de-producto-personalizables
locale: es
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Los campos personalizables le permiten adaptar los atributos del producto según sea necesario, mejorando la información sobre los productos enviados a Mercado Livre.  
En esta documentación encontrarás **qué campos se pueden personalizar**, **cómo crear un nuevo campo** y **qué valores se aceptan**.  

## Campos personalizables

Consulte la siguiente tabla sobre qué campos se pueden personalizar y la descripción del campo:

| **Nombre del campo** | **Descripción** |
|:---:|:---:|
| meli_title | Envíe el nombre registrado en este campo en lugar del nombre en el campo `título`. |
| meli_shipping_mode | Define el [tipo de logística](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy) utilizada por el vendedor: [me1](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-1-me1) o [me2](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-2-me2). |
| officialstoreid_meli | Define la tienda oficial del vendedor en Mercado Livre. |
| plaintext_description_meli | Envía la descripción del producto registrado en este campo en lugar de la descripción en el campo `productDescription`. |
| free_shipping | Informar a Mercado Livre si el producto se ofrece con la opción de envío gratuito. |

## Crear un campo de producto

Para crear un campo de producto, sigue los pasos a continuación:  

1. En el Admin VTEX, accede a Catálogo, o escribe Catálogo en la barra de búsqueda en la parte superior de la página.  
2. Haz clic en Categorías.  
3. Haz clic en la categoría asociada al grupo de especificaciones en el que deseas crear un campo.  
  Verás que, al crear un campo en un nivel de categoría superior, la especificación aparecerá en todos los niveles de categoría inferiores.  
4. Haz clic en __Acciones.__  
5. Haz clic en __Campo (Producto).__  
6. Haz clic en __Nuevo campo.__  
7. Completa la información del campo que estás creando:  
<div class="alert alert-warning">
El nombre del campo debe completarse exactamente como uno de los nombres presentados en la tabla de secciones<a href="#campos-personalizables">Campos personalizables</a>.
</div>  

  __Nombre:__ nombre de la especificación (campo) de producto.  
  __Texto:__ descripción del campo.  
  __Tipo:__ tipo de campo, el cual puede variar entre __Texto, Texto grande, Número, Combo, Radio, Checkbox, Texto indexado y Texto grande indexado.__ Consulta la sección Tipos de campo de producto para obtener más información sobre cada opción.  
  __Valor predeterminado:__ valor de llenado ya definido en la creación del campo.  
  __Grupo:__ nombre del grupo de especificaciones creado previamente y del cual formará parte ese campo.  
  __Filtro:__ define si la especificación se usará como filtro en la navegación del sitio web.  
  __Obligatorio:__ define si el valor se debe completar obligatoriamente en el registro del producto o no. Si el campo es obligatorio, el producto solo podrá activarse luego de rellenar la información de esta especificación.  
  __Muestra especificación:__ define si el campo se muestra en la página de detalles del producto, en la pestaña Especificaciones.  
  __Link en el menú superior:__ define si el link para los valores del campo se muestra en el menú principal del sitio web.  
  __Link en el menú lateral:__ define si el link para los valores del campo se muestra en el menú lateral del sitio web.  
  __Activo:__ inserta o elimina este campo en el registro del producto (pestaña Especificaciones).  
8. Haz clic en __Guardar.__

## Registrar valores en el campo de producto

Los valores de los campos de producto variarán según el tipo de campo. No se crearán valores predefinidos para los campos __Texto__ y __Número.__ Estos se rellenarán libremente durante el registro del producto en la pestaña __Especificaciones.__  

Sin embargo, para los campos __Combo, Radio y Checkbox__ es necesario registrar valores predefinidos para seleccionarlos durante el registro del producto. Verifique los valores aceptados para cada campo personalizable en la siguiente tabla:  

| **Nombre del campo** | **Tipo de campo** | **Descripción del tipo de campo** | **Valor de campo** |
|:---:|:---:|:---:|:---:|
| meli_title | Texto grande | Rellenar contenido como texto libre, adecuado para estructuras HTML grandes. | Texto libre |
| meli_shipping_mode | Combo | Contenido con dos o más valores predefinidos, para seleccionar una opción en una lista desplegable. | me1 e me2 |
| officialstoreid_meli | Texto | Rellenar el contenido como texto libre, apto para textos pequeños con formato sencillo. No apto para estructuras HTML grandes. | Texto alfanumérico. Ej: 8457 |
| plaintext_description_meli | Texto grande | Rellenar contenido como texto libre, adecuado para estructuras HTML grandes. | Texto libre |
| free_shipping | Checkbox | Opción que solo tiene valores equivalentes a verdadero o falso. | Si la casilla está marcada el envío es gratuito, si la casilla no está marcada el envío no es gratuito. |

Sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Catálogo**, o escribe **Catálogo** en la barra de búsqueda en la parte superior de la página.  
2. Haz clic en Categorías.  
3. Haz clic en la categoría en la que está guardado el campo de producto.  
4. Haz clic en el botón **Acciones**<i class="fas fa-angle-down" aria-hidden="true"></i>.
5. Haz clic en **Campo (Producto)**.
6. Haz clic en la flecha hacia abajo <i class="fas fa-angle-down" aria-hidden="true"></i>.
7. Haz clic en **Valores**.  
  Si ya hay valores registrados, deberás hacer clic también en Nuevo valor.  
8. Rellena el campo **Nombre** con los valores que desees crear para ese campo. Ingresa un valor por línea y presiona la tecla `Enter` entre cada valor.  
9. Haz clic en **Guardar**.  

Los valores creados se mostrarán en la pestaña **Especificaciones** en el registro de Producto.

