---
title: 'Mercado Libre: FAQ'
id: 3w4IgSgKZOocGee8cgSWW0
status: PUBLISHED
createdAt: 2019-01-24T20:45:46.512Z
updatedAt: 2025-02-20T13:59:29.817Z
publishedAt: 2025-02-20T13:59:29.817Z
firstPublishedAt: 2019-01-24T22:00:23.608Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: mercado-livre-faq
legacySlug: mercado-libre-faq
locale: es
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

Esta guía tiene el objetivo de responder a las preguntas más frecuentes sobre la integración con Mercado Libre. Para navegar, utilice la siguiente tabla de contenido: 

# Anuncios/Productos

## ¿Por qué no logro enviar la descripción de mi producto en HTML a Mercado Libre?

Existen tres formas de enviar a Mercado Libre la descripción de un producto:

- Rellenar el campo **Descripción de producto**
- Crear una especificación de producto
- Crear una plantilla en el Centro de mensajes (opcional)

> ℹ️ Consulta el artículo de Mercado Libre [“Cómo describir tus productos”](https://www.mercadolibre.com.ar/ayuda/completar_datos_productos_3147#:~:text=Ingres%C3%A1%20desde%20Modificar%2C%20en%20el%20listado%20de%20publicaciones.&text=Ahora%20bien%2C%20si%20ten%C3%A9s%20muchas,las%20publicaciones%20ordenadas%20por%20categor%C3%ADa.) para obtener sugerencias sobre cómo describir tus productos.

#### Rellenar el campo Descripción de producto

Ingresa a *PRODUCTOS > Catálogo > Productos y SKU* en el Admin VTEX y haz clic en el botón `Modificar`. Luego, rellena el campo **Descripción de producto** con la descripción que quieras para tu producto.

También puedes usar la ruta [PUT Update Product](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product) y rellenar el campo **Description** con la descripción que desees para tu producto.

#### Crear una especificación de producto

[Crea una especificación de producto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) llamada `plaintext_description_meli` y complétala con la descripción que quieras para tu producto.

También puedes usar la ruta [POST Create Specification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-post-specification) y rellenar el campo **Name** con `plaintext_description_meli` y el campo **Description** con la descripción que desees para tu producto.

#### Crear una plantilla en el Centro de mensajes (opcional)

El [Centro de mensajes](/es/tutorial/conhecendo-o-message-center--tutorials_84) en un módulo que se encarga de configurar y enviar emails en VTEX a través de una plantilla de mensajes. La ventaja de crear una plantilla para describir tus productos es que, si tu tienda anuncia muchos productos en Mercado Libre, todos ellos tendrán una descripción estándar y personalizada.

Antes de crear la plantilla, debes [rellenar el campo Descripción del anuncio](#rellenar-el-campo-descripcion-del-anuncio). Este campo será importante para crear una descripción exclusiva para tu producto. Después de rellenar el campo, ingresa a *CLIENTE > Centro de mensajes > Plantillas* en el Admin VTEX y busca la tarjeta **Bridge - Integração Mercado Livre**.

No es necesario completar los campos relacionados con el email, solamente el **campo HTML** utilizando el lenguaje HTML para definir el formato de la descripción que deseas. Una vez que crees una plantilla de descripción, todos tus productos anunciados en Mercado Libre tendrán el mismo formato de descripción.

Não é necessário preencher os campos relacionados ao e-mail, somente o **campo HTML**. Te recomendamos crear una descripción estándar para tus productos. La descripción que se completó en el campo `Descripción de producto` se usará dentro del **campo HTML**.

A continuación, encontrarás un ejemplo de una plantilla de descripción de productos. Los valores entre `[ ]` deben reemplazarse por la descripción que vayas a elegir.

```
[Tienda de Gustavo]<br>
[Entrega en todo Brasil]<br>
[Directo de fábrica]<br>
{{TÍTULO}}<br>
{{DESCRIPCIÓN}}<br>

<br>[DUDAS FRECUENTES]<br>
<br>[¿EL PRODUCTO ES NUEVO?]<br>
<br>[Sí, todos nuestros productos son nuevos.]<br>
```

Los campos `{{TÍTULO}}` y `{{DESCRIPCIÓN}}` usarán la información del producto que se completó en los campos **Nombre** e **Descripción de producto** en *PRODUCTOS > Catálogo > Productos y SKU* en el Admin VTEX.

La descripción personalizada de tu anuncio en Mercado Libre se mostrará en el siguiente formato:

Tienda de Gustavo
Entrega en todo Brasil
Directo de fábrica
{{TÍTULO}}
{{DESCRIPCIÓN}}

DUDAS FRECUENTES
¿EL PRODUCTO ES NUEVO?
Sí, todos nuestros productos son nuevos.

## ¿Por qué mi anuncio fue pausado en Mercado Libre?

La pausa en el anuncio del Mercado Libre ocurre básicamente por dos motivos:

1. Cuando el producto es removido de la política comercial vinculada a Mercado Libre o desactivado, el anuncio será pausado.
Para realizar la integración con Mercado Libre, es necesario definir una política comercial; es decir, establecer una diferenciación de catálogo y/o logística entre los diferentes canales de venta en una tienda. [Lea más](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/15NZiQstCET8zyQUIa7nhw).
2. Cuando el producto alcanza el stock mínimo registrado, el anuncio será pausado. El valor del stock mínimo es definido en el panel de configuración de Mercado Libre en el Bridge de VTEX.

Al registrar un producto, es necesario establecer una cantidad mínima de stock de ese ítem. Cuando el número de productos alcanza el límite establecido, el anuncio es pausado en Mercado Libre. El valor mínimo de stock es definido en el panel de configuración de Mercado Libre de VTEX.

## ¿Qué significa el error “The attributes [BRAND, MODEL] are required for category MLBXXXX”

La categoría en cuestión exige el mapeo de marca y modelo. Esta información debe estar presente en la plantilla de mapeo. Formato de ejemplo:

![mercadolivre faq erro](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/visi%C3%B3n-de-conjunto-de-integraciones/mercado-libre-faq_1.JPG)

## ¿Por qué mi anuncio está desactivado en Mercado Libre?

VTEX no desactiva anuncios en ML, solamente los pausa.

## ¿Cómo cambiar la imagen de un producto en Mercado Libre?

El envío de las imágenes de un producto ocurre sólo una vez, cuando el anuncio se crea en Mercado Libre. Por lo tanto, si el producto tiene su imagen alterada en VTEX después de haber sido integrado con Mercado Libre, esta información no será actualizada.

Un posible workaround es eliminar el anuncio en Mercado Libre y enviar la información del producto nuevamente al Mercado Libre, reindexando el producto en VTEX. Sin embargo, al realizar esta acción, usted debe saber que todo el histórico de este anuncio será excluido en Mercado Libre. Se creará un nuevo anuncio, sin ninguna relación con la información del anuncio anterior.

## ¿Por qué el título de mi anuncio aparece cortado en Mercado Libre?

Mercado Libre tiene una limitación de 60 caracteres para el nombre del anuncio. Por lo tanto, al elegir el formato del Título del anuncio en el panel de configuración de Mercado Libre en el Bridge de VTEX, tenga en cuenta esta restricción de 60 caracteres.

## ¿Cómo puedo reenviar la información de los productos al Mercado Libre?

Por regla de Mercado Libre, no se puede reenviar información de los productos luego de que ya se anunciaron y vendieron. Deberás eliminar el anuncio del producto y modificar la información que deseas.

Si el producto aún no se vendió, podrás hacer modificaciones. Si la modificación es en el valor de la variación/atributo, el cambio se debe hacer en la [página de mapeo](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA). Si la modificación es en el valor de la especificación del producto, consulta el artículo [Registrar especificaciones de producto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin).

> ⚠️ Luego de eliminar un producto, no es posible recuperar la relevancia del anuncio.

## ¿Por qué mi producto fue categorizado equivocadamente en Mercado Libre?

Los errores de categorización tienen que ver con el nombre y el precio del producto. Para la correcta categorización de sus productos, es necesario hacer [upload de la plantilla de mapeo](https://assets.ctfassets.net/alneenqid6w5/qyDp7OSL5YAGaGKagWiK0/07900f41a952a460185e18f9db190eb1/Planilha_de_Mapeamento_do_Mercado_Livre.xlsx). Esa plantilla se utilizará en las etapas de categorización, variación y atributos de su producto. Para saber más, consulte este [artículo](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA#categorizacao).

## ¿Por qué Mercado Libre devuelve errores de atributo después del mapeo?

Cada categoría de producto en Mercado Libre exige atributos diferentes. Por ejemplo, para un zapato de adulto, puede ser necesario indicar en la plantilla de mapeo los códigos de los atributos Color principal y Talla de zapato para adulto.

Por otro lado, para cada una de esas categorías de producto, algunos atributos no se aceptan. Para el mismo zapato de adulto, por ejemplo, no se puede atribuir un código relativo a Talla de cinturón.

VTEX no puede indicar exactamente cuáles atributos tiene que ser completados para cada categoría, puesto que este es un criterio interno de Mercado Libre.

Sin embargo, estos atributos son bastante claros (Color principal, Color secundario, Talla de zapato para adulto, Talla de cinturón, Talla de ropa para bebés, etc.). Se deben escoger los atributos pertinentes a cada producto.

Si alguno de estos atributos se completa de forma incorrecta (por ejemplo, si se asignó un código relativo a Talla de cinturón para un zapato), Integraciones va a mostrar un error con el siguiente formato:

![mercadolivre faq erro2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/visi%C3%B3n-de-conjunto-de-integraciones/mercado-libre-faq_2.JPG)

En este caso, tenemos dos ejemplos de errores en el mismo mensaje.
El primero de estos indica que el atributo cuyo código comienza con el número `113000` es necesario para la categoría escogida y no fue ingresado en la plantilla de mapeo. Vea la plantilla a continuación:

![mercadolivre faq erro3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/visi%C3%B3n-de-conjunto-de-integraciones/mercado-libre-faq_3.JPG)

El segundo error muestra que el atributo cuyo código empieza con el número `63000`, ingresado en la última columna de la plantilla anterior, es inválido para la categoría escogida.

### ¿Cómo identificar el atributo faltante o inválido?

Los códigos de cada variación de atributo comienzan con el mismo número. Por ejemplo, todos los códigos relativos a **Color principal** comienzan en 33000 y corresponden al siguiente formato: 33000_Amarillo_52007. Mientras que los códigos relativos a **Color secundario** comienzan en 43000. Ejemplos: `43000_Azul claro_52093` y `43000_Rosa_52058`.

Para identificar el atributo señalado en el mensaje de error, consulte el número inicial de los códigos determinados por Mercado Libre. Haga clic en el nombre de su país para bajar la plantilla de referencia:

1. [Brasil](https://assets.contentful.com/alneenqid6w5/22NlNdUIBK8qWic8cYw2sg/11c88bb0b439c7c7f8ce5909923af3d6/Brasil.zip)
2. [Argentina](https://assets.contentful.com/alneenqid6w5/3c61gJrH7GWOywMCGMECg4/dc7a2ce73a99d41345dde2092eb1fec6/Argentina.rar)
3. [Colômbia](https://assets.contentful.com/alneenqid6w5/5RePTJoKrYi4qA66WCCYKw/33910300057806b554d566210aa2310a/Colombia.rar)
4. [México](https://assets.contentful.com/alneenqid6w5/3Z3xgpPyvuYEAIO2me4GSG/e4f4198463d8a3ba05124a30031302fa/Mexico.rar)

## ¿Por qué mis anuncios en Mercado Libre no tienen los SKUs agrupados?

Con excepción de los productos de ropa, calzado y bolsas, la integración crea solamente un anuncio por SKU. Así, los SKUs no se agrupan en un solo anuncio en Mercado Libre.

## ¿Por qué las especificaciones/atributos de mis SKU no se envían al Mercado Libre?

Con excepción de los SKUs de ropa, para enviar las variaciones y los atributos de los SKUs de cualquier categoría es necesario crear la plantilla de mapeo. Para más información, lea el artículo [Mapeo de categorías, variaciones y atributos de Mercado Libre](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA).

## ¿Cómo borrar un anuncio en Mercado Libre?

La finalización del anuncio debe realizarse directamente en Mercado Libre. En caso de que no desee que un producto sea enviado nuevamente a Mercado Libre, recuerde eliminarlo de la política comercial vinculada a Mercado Libre.

## ¿Cómo hago para reenviar información de los productos a Mercado Libre?

En caso de que un anuncio haya sido finalizado y usted desee reenviarlo a Mercado Libre, basta con reindexar el producto deseado en VTEX para que la información sea reenviada a Mercado Libre.

## ¿Por qué no puedo actualizar la información de mi producto en Mercado Libre?

En este escenario, es posible que estos productos que no tengan su información actualizada hayan sido creados directamente en el panel de Mercado Libre. No recomendamos la creación de productos directamente en el Panel de Mercado Libre. La información de los productos creados directamente en Mercado Libre no se actualizará por VTEX.

## Entendiendo los errores del Bridge

`Items in category ML…. cannot exceeds XX pictures.`

Explicación:
El comportamiento de la integración es el siguiente:
Existe el elemento principal del anuncio y este contiene las variaciones (que son los SKUs en VTEX). Cada vez que un producto posee variaciones, todas sus imágenes son agregadas en ese elemento principal.

Cada categoría tiene su propia especificación de cuántas imágenes pueden ser añadidas, en la categoría MLA3697 solo se permite 12 imágenes para este elemento principal. Vea en el enlace las condiciones de esta [categoría](https://api.mercadolibre.com/categories/MLA3697)

![mercadolivre faq erro4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/visi%C3%B3n-de-conjunto-de-integraciones/mercado-libre-faq_4.JPG)

`SKU no integrado, pues el mismo no posee descripción`

Explicación:
 Para los nuevos SKUs, al enviarlos a Mercado Libre (originalmente Meli) su descripción de flujo es:
1.    Buscar si posee una especificación de producto llamada `plaintext_description_meli`. En caso afirmativo, la enviamos como descripción; 
2.   Buscar si posee un template de Mercado Libre. Si es así, lo enviamos como descripción (para garantizar que el template esté funcional, verificar si aparece en el preview).
3.    Buscar si posee una descripción en el catálogo. Si es así, la enviamos como descripción.
4.    En caso de que no posea ninguno de los pasos anteriores, registramos el error en el Bridge de "SKU no integrado pues el mismo no posee descripción".

# Logística

## ¿Por qué mi pedido con "Acordar con el comprador" no se integró en el Bridge?

No recomendamos el uso del tipo de entrega Acordar con el comprador. En pedidos realizados con ese tipo de entrega, como no tenemos la información de la dirección de entrega, el pedido no se integrará con VTEX.

Para que un pedido sea integrado correctamente, es necesario que el mismo tenga la información de entrega. De esta forma, siempre recomendamos el uso de Mercado Envíos para los pedidos realizados en Mercado Libre.

## ¿Por qué mis pedidos están yendo a la tabla de contingencia en vez del envío VTEX?

Al calcular el envío de un pedido, la integración hace una simulación de fulfillment. Esta respuesta toma generalmente 200 ms. Mercado Libre posee un límite de tiempo de espera de 400 ms y si la respuesta de la simulación sobrepasa este tiempo, el envío será a través de la tabla de contingencia. Generalmente, ese tiempo es largo cuando la operación logística de la cuenta es compleja (por ejemplo: muchas transportadoras registradas).

# Configuraciones

## ¿Por qué mis pedidos no se integran con Mercado Libre?

En el caso de Mercado Libre, cuando el token de integración se desactiva, sin importar el motivo, los pedidos realizados en el marketplace no se envían a la plataforma de VTEX. Para resolver este error, será necesario repetir el proceso de integración.

Dicho esto, el primer paso es acceder al registro de esta integración:

1. Acceda al módulo __Marketplace__
2. Haga clic en __Integraciones__ 
3. Busque el __panel__ de Mercado Libre
4. Haga clic en el __engranaje__ <img class="shadow-4" src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/visi%C3%B3n-de-conjunto-de-integraciones/mercado-libre-faq_5.png" />
5. Haga clic en __Editar configuración__

A partir de ahí, tenemos que rehacer el proceso de integración.

6. Haga clic en el botón __Desactivada__ 
7. Haga clic en __Guardar configuración__

Espere cerca de 15 minutos. A continuación, prosiga:

8. Acceda de nuevo a __registro de integración__. Solo tiene que repetir los cinco primeros pasos del tutorial
9. Haga clic en el botón __Activada__ 
10. Haga clic en __Guardar configuración__

Hecho esto, espere otros 15 minutos. Ahora comienza la etapa más importante del proceso.

11. Acceda al __panel__ de Mercado Libre 
12. Haga el __login__ con la cuenta que desea integrar
13. Rehaga el __[proceso de autorización](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4leBEAd22Icm46kGeiGgak)__
14. __Guarde__ las configuraciones.

¡Listo! De este modo, su integración volverá a funcionar con normalidad dentro de unos pocos minutos.

