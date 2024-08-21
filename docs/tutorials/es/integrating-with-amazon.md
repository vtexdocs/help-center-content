---
title: 'Integrar con Amazon'
id: 2w2vFtveNWcycooEGks2me
status: DRAFT
createdAt: 2017-10-24T19:22:17.213Z
updatedAt: 2020-03-06T13:56:49.869Z
publishedAt: 
firstPublishedAt: 2017-10-24T20:45:46.537Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: integrar-con-amazon
locale: es
legacySlug: integrar-con-amazon
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

>⚠️ Esta integración es válida solo para las categorías **Actividades al aire libre**, **Equipaje**, **Cámara y Foto**, **Casa y Jardin**, **Computadoras**, **Electronicos**, **Deportes**, **Joyas**, **Libros**, **Materiales de Oficina**, **Herrajes**, **Juegos**, **Zapatos** y **Ropa**.

>⚠️ Esta integración está disponible para Brasil, México, Estados Unidos, Canadá y Europa.

## Autorizar VTEX en el panel Amazon

Para realizar la integración con el Marketplace de Amazon, es necesario que el propietario de la tienda otorgue la autorización para VTEX a través en su cuenta Amazon Seller Central a traves del mercado de EE.UU. (_www.amazon.com_). 

<div class=“alert alert-danger”>
En el panel Amazon, verificar si todavía estás conectado al mercado de EE.UU. (_www.amazon.com_). Si no estás, recibirás una mensaje de error al realizar el proceso y será necesario cambiar el mercado para EE.UU. (_www.amazon.com_) nuevamente.
</div>

Cuando en la etapa de registro del developer, se deben rellenar los campos de la siguiente manera:  
  - Developer’s Name: VTEX  
  - Developer Account Number: 2625-4263-7910  

__Durante todo el proceso de autorización en Amazon, siempre tenga en manos las credenciales y los identificadores dados.__ El Seller ID y el MWS Auth Token, por ejemplo, son esenciales para configurar la integración dentro de la plataforma VTEX.


## Preconfiguraciones en VTEX

Antes de configurar la integración, usted debe comprobar si todos los productos que se envían a Amazon tienen:

  - __Categoría Global:__ si sus productos no tienen categoría global registrada, puede configurar la categoría global dentro de la configuración de categoría, que los productos asociados heredarán este valor. Para saber cómo configurar la categoría global, [acceda a nuestro artículo](/es/tutorial/configurando-a-categoria-global).

  -  __EAN:__ como el catálogo de Amazon es único, ella exige que los productos enviados tengan el EAN para que se puedan mezclar los productos de todos los sellers. La exención del EAN en la integración de sus productos debe configurarse tanto en Amazon como en VTEX. Si Amazon ha concedido la exención de EAN a su tienda, [abra un ticket](https://support.vtex.com/hc/es-419) con el tema (_subject_) "[Amazon] Exención de EAN" para solicitar el envío procedimiento del lado de la VTEX.
  
  - __Tiempo de Costo__: en Amazon existe el campo `fulfillment latency`, que es __usado para configurar el tiempo de preparación de la entrega de determinado producto.__ Para rellenarlo masivamente a través de la integración, es necesario rellenar el campo [Tiempo de Costo](https://help.vtex.com/es/tutorial/como-crear-muelle) en el registro del muelle asociado a la política comercial usada para Amazon. Si este campo no se rellena, Amazon utilizará el valor _default_ de ellos (2 días).
  
>⚠️ NOTA: Es importante llenar este campo porque si su tienda no está perfomando conforme el tiempo de preparación configurado, retrasando la entrega, su cuenta puede ser bloqueada.

## Configuración de la integración

Debes acceder al admin de tu cuenta en VTEX y entrar en la sección de __Integraciones__. Dentro de __Configuración__ hay una caja con el logo de Amazon. Hacer clic en esa caja y llenar los campos listados: 

- __Afiliate Id__: Llenar el campo con tres letras para identificar el afiliado. Vale destacar que en este campo sólo se aceptan __consonantes__. Recomendamos llenar con `MZN`.
- __Afiliate Email__: email para notificación de pedidos no integrados.
- __Sales Channel__: Id de la política comercial utilizada para la integración de la tienda.
- __Amazon Seller Id__: Id de la tienda en Amazon, obtenido a través de la liberación del token de VTEX en tu cuenta de Amazon.
- __Amazon Auth Token__: Token obtenido en la etapa de autorización de la clave de VTEX en tu cuenta de Amazon. 
- __Order Allowance Rate__: Tasa de aceptación de divergencia de valor en el pedido integrado.
- __Name for the type of freight__: Nombre del tipo de entrega registrado en el panel de Amazon. Este nombre del tipo de entrega se localiza en la pantalla __Configuraciones de envío__ en la pestaña __Modelos de Envío__, __bajo__ de la caja _Modelo estándar de Amazon_.  
- __Don't send the variations of skus - Only for office category__: En caso de que su tienda sea del sector de __Office__, recomendamos seleccionar la opción `ON`. Actualmente, no es posible enviar los SKUs consolidados a Amazon. __Esta flag debe ser utilizada solamente para tiendas del sector *Office*__
- __Not send price to Amazon:__ Amazon da la posibilidad de utilizar su propio sistema para la parametrización de precios en los productos. __Para utilizar este servicio, marque la opción `ON` para que la integración no envíe los precios de VTEX.__ Pues, si los precios se envían vía integración, ellos sobrescriben los del sistema de Amazon.

## Envío de los atributos de SKUs a Amazon

Si su tienda tiene que enviar atributos obligatorios a Amazon, acceda a nuestro artículo [Enviar atributos de SKU a Amazon](/es/tutorial/enviar-atributos-de-sku-a-amazon) para completar su integración.

Listo! ¡Su integración con Amazon ahora está configurada!
