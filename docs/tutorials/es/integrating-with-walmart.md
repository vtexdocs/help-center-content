---
title: 'Integrar con Walmart'
id: tutorials_420
status: DRAFT
createdAt: 2017-04-27T22:05:57.794Z
updatedAt: 2023-03-29T16:30:37.304Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:24.177Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: vtex-bridge-configuraciones-walmart
legacySlug: vtex-bridge-configuraciones-walmart
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

## Pasos iniciales
Algunos pasos son esenciales para iniciar la configuración.

1. [Contrate el Channel](http://help.vtex.com/es/tutorial/integrando-con-marketplace/).
2. Seleccione su [política comercial](http://help.vtex.com/es/tutorial/politica-comercial-para-marketplace/).
3. Configure la [logística](/en/tutorial/como-configurar-logistica-para-politica-comercial/) para esa política comercial.
4. Póngase en contacto con Walmart y obtenga el __usuario__, __contraseña__ y __ID del vendedor__ para acceder the API: [https://marketplace.walmart.com.br/prospection](https://marketplace.walmart.com.br/prospection).

## Cómo configurar

1. En la sección __Marketplace__ del menú lateral del Admin, haga clic en __Integraciones__.
2. Una lista de opciones se abrirá. Haga clic en __Configuración__.
3. En el box de Walmart, haga clic en el botón __Integrar__.
4. Rellene los campos conforme abajo.
5. Haga clic en botón __Guardar configuración__. El botón guardar solamente está activo si todas las configuraciones están correctas.

## Campos

1. __Integración activada:__ Cuando “Sí” activa la exportación de productos, precio y stock. Cuando “No” inactiva la integración.
2. __Correo electrónico para notificación:__ Corre electrónico que recibe notificaciones cuando hayan problemas en la integración de pedidos.
3. __Usuario Walmart:__ Usuario para autenticación de las importaciones de productos, precio y stock.
4. __Clave Walmart:__ Usuario para autenticación de las importaciones de productos, precio y stock.
5. __SellerId de Walmart:__ ID de la tienda en el sistema de Walmart.
6. __Dirección del sitio web:__ Dirección de la Tienda Principal (con `http://` o `https://`). Exp: `http://www.tiendavtex.com.br`.
7. __Política Comercial__: ID de la Política Comercial de Walmart catastrada en Admin -> Marketplace -> Política Comercial.

Después de la configuración, la integración envía todos los productos asociados a la poítica comercial determinada para Walmart.

<div class="alert alert-warning">
<strong>Importante:</strong> Walmart no acepta código HTML en los campos de descripción del producto y campos de especificación.
</div>


## Flujo de la integración

VTEX envía __productos__, __precio__ y __inventario__ a Walmart, y la última actualización de envío se registra en el Admin, en el módulo de Integración.

El __fluxo de pedidos__ y __consulta de envío__ está restringido a Walmart, que consulta la API de VTEX para simular el envío en tiempo real. De esta forma, la responsabilidad de integrar los pedidos es de Walmart. Para que ellos puedan hacer esto, será necesario proporcionar la __API de Pedidos__ y __autenticar la integración__.


1 - API de pedidos
`http://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders?affiliateid={xxx}&sc={y}`

- Tenga en cuenta que el término __{AccountName}__ debe ser reemplazado por el nombre del entorno de su tienda.
- El valor para el parámetro __affiliateid__ debe ser sustituido por el Id del afiliado configurado en el paso anterior.
- El valor para el parámetro __sc__, debe ser subtituido por el ID de [política comercial](es/tutorial/politica-comercial-para-marketplace) usada para el mercado de Walmart.


2 - [Autenticar la integración](/es/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones)
Después de realizar todos estos pasos, tendrá que autenticar la integración con Walmart. Para que esto suceda, sólo tiene que enviar el appKey a ellos (ver cómo [generar el appKey para la autenticación de las integraciones](/es/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones)). Si tiene alguna duda sobre el proceso, póngase en contacto con el equipo de Walmart.

<div class="alert alert-warning">
Recuerde que el appKey debe estar asociado al perfil de acceso <strong>IntegrationProfile - Fulfillment</strong>. Es el que tiene los permisos necesarios para realizar el proceso de integración con el marketplace.
</div>
