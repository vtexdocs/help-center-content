---
title: 'Integrar con Facebook'
id: 2CSxoNsJqM2KGsqi66WAaY
status: DRAFT
createdAt: 2017-07-31T20:58:45.449Z
updatedAt: 2021-03-25T22:44:08.652Z
publishedAt: 
firstPublishedAt: 2017-07-31T21:14:22.770Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: integrar-con-facebook
legacySlug: integrar-con-facebook
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

La integración con Facebook tiene como objetivo el envío del catálogo al __Business Manager__ de Facebook, permitiendo campañas de marketing.

El catálogo de la tienda se envía mediante la indexación de los elementos en VTEX.

## Configuración de la integración 

1. En el menú del Admin, haga clic en __Integraciones__.
2. Haga clic en __Configuración__.
3. En el recuadro de Facebook, haga clic en __Integrar__.
4. Rellene los __Campos__ que aparecen en la pantalla. A continuación, vamos a detallar cómo rellenar cada campo.
5. Haga clic en el botón __Guardar Configuración__.

## Detalle de los campos

__Id del afiliado__: este campo debe rellenarse con un ID de [afiliado](/es/faq/que-es-afiliado) que no exista en el registro de afiliados del OMS. El ID acepta apenas tres dígitos y consonantes. Sugerencia: __FCB__.

__E-mail del afiliado__: rellene con el e-mail que recibirá notificaciones relacionadas con la integración.

__Política Comercial__: política comercial de la tienda que desea utilizar en la integración. La política comercial definirá el surtido del catálogo y los valores de los ítems.

__Nombre del Producto__: usted puede elegir entre dos opciones:
  - __Nombre del producto - Nombre del SKU__: envía los productos con el nombre del producto y del SKU juntos. 
  - __Nombre del producto__: envía solamente el nombre del producto.

__Id del Business Manager__: ID de la cuenta de __Business Manager__ de Facebook, que se puede obtener en la configuración de Facebook.

__URL del sitio web de la tienda__: Coloque el sitio web de su tienda. Ejemplo: `https://www.sutienda.com`. Este campo se utiliza para formar la URL completa del producto que se envía.

<div class = "alert alert-info">Todos los campos son obligatorios para el pleno funcionamiento de la integración.</div>

## Autorización

Una vez realizada la configuración, es necesario autorizar a VTEX para realizar cambios en la cuenta de Facebook del administrador de la tienda. Para esto, usted debe hacer clic en el botón __Autorizar__, en el card de Facebook, en la sección de __Integraciones__. Con esto, se solicitarán las autorizaciones necesarias.

Para realizar la autorización, debe usar la cuenta de Facebook que tiene privilegios administrativos en el  Business Manager de Facebook. Si no tiene privilegios, no se concede la autorización y el proceso quedará en loop.

Después de ese paso, la integración creará un catálogo con el nombre `VtexIntegration - {NOMBRE DE LA TIENDA}` en Facebook.

Es en este catálogo, dentro de Facebook, que se crearán los ítems y donde estarán disponibles para ser usados.

<div class="alert alert-info">
Puede utilizar el <i>pixel app</i> de Facebook para rastrear y optimizar los resultados de sus campañas de marketing en el Google Tag Manager de su tienda. Aprenda el paso a paso aquí
<a href="https://www.facebook.com/business/help/1021909254506499">aquí</a>.
</div>
