---
title: 'Errores en mis pedidos de Mercado Libre'
id: 170njWgSw9UQ5DG6NRl14d
status: PUBLISHED
createdAt: 2024-06-28T15:03:26.959Z
updatedAt: 2024-06-28T16:08:10.242Z
publishedAt: 2024-06-28T16:08:10.242Z
firstPublishedAt: 2024-06-28T16:04:14.266Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: my-orders-in-mercado-libre-have-errors
locale: es
legacySlug: errores-en-mis-pedidos-de-mercado-libre
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
---

**Tags:** marketplace, catálogo, productos
**Palabras clave:** integración, Mercado Libre, envío de productos, pedidos

Cuando se produce un error de integración en pedidos entre un marketplace y Mercado Libre, se muestra un mensaje de error en cada pedido. 

Los pedidos presentan errores de integración por dos motivos: **ID de tienda oficial en Mercado Libre** incorrectamente registrado o **Categorías inexistentes en Mercado Libre**. Para comprobar si un pedido contiene errores de integración, en el Admin VTEX accede a **Marketplace > Conexiones > Pedidos o ingresa Pedidos en la barra de búsqueda.**

## Solución
Considera las siguientes opciones para corregir los errores de integración en los pedidos de Mercado Libre: [verificar el ID de la tienda oficial en Mercado Libre](#comprobar-id-de-la-tienda-oficial-en-mercado-libre) y [verificar la correspondencia de categorías](#comprobar-correspondencia-de-categorías) para errores de integración de pedidos.

### Verificar el ID de la tienda oficial en Mercado Libre 
Si tu tienda tiene el status de [Tienda Oficial](https://www.mercadolibre.com.mx/tiendas-oficiales/catalogo) en Mercado Libre, debes introducir el ID proporcionado por Mercado Libre en el [registro del conector](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi).

Para validar si el ID ingresado es correcto, ve a **Marketplace > Conexiones > Marketplaces e integraciones**  y sigue los pasos que se indican a continuación:

Busca el conector de **Mercado Libre.**
Haz clic en `Editar`.
Verifica el ID registrado en el campo `ID de tienda oficial de Mercado Libre`.
Si el campo está vacío o contiene un ID incorrecto, ingresa la información correcta.
Haz clic en `Guardar`.

### Verificar correspondencias de categorías

Al realizar el [mapeo de categorías y atributos](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA) con Mercado Libre, es necesario que los atributos de cada categoría registrada en VTEX correspondan con los atributos de las categorías existentes en Mercado Libre. 
Si alguno de los atributos se rellena incorrectamente, la integración devolverá un error con el siguiente formato:
`La categoría seleccionada en el atributo category_meli no existe en Mercado Libre.`

Para comprobar las categorías y atributos enviados, accede a **Marketplace > Conexiones > Marketplaces e integraciones**  y sigue los pasos que se indican a continuación:

Busca el conector de **Mercado Libre.**
Haz clic en `Editar`.
Haz clic en `Realizar mapeo`.
Haz clic en la categoría que presenta error.
Realiza nuevamente el mapeo de acuerdo con las categorías y atributos existentes en Mercado Libre.

>ℹ️ Para identificar el atributo indicado en el mensaje de error, consulta el número inicial de los códigos determinados por Mercado Libre. Haz clic en el nombre de tu país para descargar la plantilla de referencia:
>
> <p>[Brasil](https://assets.contentful.com/alneenqid6w5/22NlNdUIBK8qWic8cYw2sg/11c88bb0b439c7c7f8ce5909923af3d6/Brasil.zip)
>
> [Argentina](https://assets.contentful.com/alneenqid6w5/3c61gJrH7GWOywMCGMECg4/dc7a2ce73a99d41345dde2092eb1fec6/Argentina.rar) 
>
> [Colombia](https://assets.contentful.com/alneenqid6w5/5RePTJoKrYi4qA66WCCYKw/33910300057806b554d566210aa2310a/Colombia.rar) 
>
> [México](https://assets.contentful.com/alneenqid6w5/3Z3xgpPyvuYEAIO2me4GSG/e4f4198463d8a3ba05124a30031302fa/Mexico.rar)
> </p>

