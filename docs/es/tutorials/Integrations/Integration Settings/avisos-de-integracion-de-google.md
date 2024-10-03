---
title: 'Avisos de integración de Google'
id: 4BC0Epit2hACKbkBSqDR2A
status: PUBLISHED
createdAt: 2024-07-01T15:16:46.324Z
updatedAt: 2024-08-12T21:09:51.480Z
publishedAt: 2024-08-12T21:09:51.480Z
firstPublishedAt: 2024-07-01T16:13:33.089Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: google-integration-warnings
locale: es
legacySlug: avisos-de-integracion-de-google
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Al integrar una tienda VTEX con Google Shopping, el seller debe completar el proceso de [Envío de productos a Google Shopping](https://help.vtex.com/es/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/5L5LnccDCj5lJk8H95GQ82) y estos productos pueden o no ser aprobados por Google. 

## Status de integración del producto

El status de integración es un mensaje informativo sobre el estado de los productos del seller con la integración de Google Shopping. Puedes encontrar tres categorías de mensajes, **mensajes de error, mensajes de advertencia y mensajes de éxito.** 

Para verificar el status de integración de un producto, en el Admin VTEX accede a **Marketplace > Conexiones > Productos** o ingresa **Productos** en la barra de búsqueda.

Consulta en la tabla a continuación los mensajes que corresponden a cada status:  

| **Status** | **Mensaje** | **Detalles** | **Impacto en el anuncio** |
|:---:|:---:|:---:|:---:|
|    **Procesado con error** |   **SKU from `accountName` was not integrated. We noticed some problems** | Inactive product or SKU, Invalid price y SKU out of stock. |  Si no se realizan los ajustes, los productos no se integrarán. |
| **Procesado con advertencia** | **SKU from `accountName` integrated. See offer. But we noticed some missing data** | EAN/UPC and manufacturer code, Size, Color, Gender y Age group. |  Si se aplica al producto y no se rellenaron los datos faltantes, el anuncio puede tener poca visibilidad o ser rechazado. |
| **Procesado con éxito** | **SKU from `accountName` integrated. See offer. Add following data to increase offer visibility.** | [Product Highlights](https://support.google.com/merchants/answer/7052112?hl=pt-BR#zippy=%2Coutros-requisitos%2Ccomo-formatar-os-dados-do-produto:~:text=produtos%20s%C3%A3o%20veiculados.-,Opcional%3A,-envie%20o%20atributo) | Si es aplicable y se cumplen los atributos opcionales indicados por Google, el anuncio puede mejorar su visibilidad. |

## Rellenar campos obligatorios de Google

Cuando un producto muestra el status **Procesado con error o Procesado con advertencia**, significa que no se han rellenado o configurado uno o varios de los datos necesarios para la integración del catálogo con Google shopping.  

Comprueba a continuación los campos obligatorios y cómo rellenarlos:  

**Price (precio):** campo obligatorio; debe rellenarse especificando el tipo de precio que se desea mostrar en Google shopping.
Para identificar el error de integración del precio del SKU con Google, lee el artículo [Verificar integraciones](https://help.vtex.com/es/tutorial/verificando-integracao-no-bridge/#preco).   

**Availability (disponibilidad):** campo obligatorio. Si la integración de un SKU presenta error, consulta los artículos [Gestión del stock](https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) y [Almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb).   

**Description (descripción):** campo obligatorio; debe rellenarse con la información principal del producto. Constituye un resumen sencillo y fácil de entender para el cliente. Para incluir saltos de línea y otros recursos de formato en la descripción del producto se debe utilizar HTML.  

<div class=”alert alert-info”>
La descripción de un producto difiere del título o nombre del producto.
</div>

**Image (imagen):** campo obligatorio. Para agregar correctamente una imagen a un producto o SKU, consulta el tutorial [Rellenar campos de registro de SKU](https://help.vtex.com/es/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY#imagens).  

**EAN/UPC:** campo obligatorio en el [módulo Catálogo](https://help.vtex.com/es/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe) y debe rellenarse con el código de identificación único del SKU (código de barras), aceptando hasta 13 caracteres numéricos.  

**Manufacturer code o Código del fabricante:** campo obligatorio del [módulo Catálogo](https://help.vtex.com/es/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe) y debe rellenarse con el código proporcionado por el fabricante para identificar el producto. Si un producto tiene un código específico, este campo debe rellenarse.  

<div class=”alert alert-info”>
Los códigos EAN/UPC y Código del fabricante son obligatorios cuando se venden productos manufacturados. Consulta a continuación cuándo aplicar el <a href https://support.google.com/merchants/answer/6324461?hl=pt-BR&ref_topic=6324338&sjid=10867212756007821438-SA>EAN/UPC</a> o el <a href https://support.google.com/merchants/answer/6324482?hl=pt-BR&ref_topic=6324338&sjid=10867212756007821438-SA>Código del fabricante</a> a un producto. 
</div>  

**Size:** campo obligatorio exclusivo para productos de ropa que corresponden a la categoría [ID1604](https://support.google.com/merchants/answer/6324492?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) y calzado que corresponden a la categoría [ID187](https://support.google.com/merchants/answer/6324492?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) en Google. Si se aplica a tu producto, rellena la talla del SKU.  

El campo Size (talla) es un [campo personalizado](https://help.vtex.com/es/tutorial/criando-um-campo-de-produto--tutorials_106) que debe ser creado por el seller. Consulta a continuación el nombre y tipo de campo.  

|**Nombre del campo**|**Tipo de campo**|
|:---:|:---:|
| Talla | Texto |

Este tipo de campo admite la introducción de valores alfanuméricos como **P,M,G, GG, 41,42,37,33**.

**Color:** campo obligatorio exclusivo para ítems de ropa y accesorios que corresponden a la [categoría ID166](https://support.google.com/merchants/answer/6324487?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) en Google. Si se aplica a tu producto, rellena el color del SKU.

El campo Color es un [campo personalizado](https://help.vtex.com/es/tutorial/criando-um-campo-de-produto--tutorials_106) que debe ser creado por el seller. Consulta a continuación el nombre y tipo de campo.

|**Nombre del campo**|**Tipo de campo**|
|:---:|:---:|
| Color | Texto |

Este tipo de campo admite la introducción de valores alfanuméricos como ** Verde, Negro, Amarillo, Rosa **.

<div class=”alert alert-info”>
Cada SKU solo permite un color.
</div>  

**Gender:** campo obligatorio exclusivo para todos los ítems de ropa y accesorios que corresponden a la [categoría ID166](https://support.google.com/merchants/answer/6324487?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) en Google. Si se aplica a tu producto, rellena el género del SKU.

El campo Gender es un [campo personalizado](https://help.vtex.com/es/tutorial/criando-um-campo-de-produto--tutorials_106) que debe ser creado por el seller. Consulta a continuación el nombre y tipo de campo.

|**Nombre del campo**|**Tipo de campo**|**Valor del campo**|
|:---:|:---:|:---:|
| Género | Combo |Masculino, Femenino y Unisex|

Este tipo de campo requiere que se rellenen valores predeterminados. Para la integración con Google, solo se aceptarán los valores indicados en valor del campo.  

**Age Group (grupo de edad):**  campo obligatorio para todos ítems de ropa y accesorios que corresponden a la [categoría ID166](https://support.google.com/merchants/answer/6324463?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1#:~:text=Veja%20a%20seguir%20os%20valores%20aceitos%20para%20este%20atributo%3A) en Google. Si se aplica a tu producto, rellena el grupo de edad del SKU.  

El campo Age Group es un [campo personalizado](https://help.vtex.com/es/tutorial/criando-um-campo-de-produto--tutorials_106) que debe ser creado por el seller. Consulta a continuación el nombre y tipo de campo.  

|**Nombre del campo**|**Tipo de campo**|**Valor del campo**|
|:---:|:---:|:---:|
| Grupo de edad | Combo |Recién nacido (hasta 3 meses), Bebé (de 3 a 12 meses), Niño pequeño (de 1 a 5 años), Niño (de 5 a 13 años) y Adulto (a partir de 13 años).|

Este tipo de campo requiere que se rellenen valores predeterminados. Para la integración con Google, solo se aceptarán los valores indicados en valor del campo.  

**Material:** es un campo obligatorio exclusivo para ítems de moda. Si es aplicable a tu producto, informa los materiales utilizados para fabricar el producto.  

**Pattern (estampado):** es un campo obligatorio exclusivo para ítems de moda. Si se aplica a tu producto, informa si el SKU es o no estampado.  

