---
title: 'Crear audiencias de campaña'
id: 6cnuDZJzIkIeocewAQQK4K
status: PUBLISHED
createdAt: 2018-12-02T18:34:21.663Z
updatedAt: 2025-04-10T17:52:25.441Z
publishedAt: 2025-04-10T17:52:25.441Z
firstPublishedAt: 2018-12-03T16:51:36.457Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-a-campaign-audience
legacySlug: como-crear-campanas
locale: es
subcategoryId: 2cI57eZ3ZiWSeaQs26Gwys
---

El recurso «Audiencia de campañas» te permite segmentar las promociones de tu tienda a partir de [públicos objetivos](/es/tutorial/audiencias-de-campanas--3o7lhpNseXY2WmjZO0gQ6m#publico-objetivo) definidos que cumplen con criterios específicos. Para obtener más información sobre esta funcionalidad, consulta [Audiencias de campañas](/es/tutorial/audiencias-de-campanas--3o7lhpNseXY2WmjZO0gQ6m).

Para crear una nueva audiencia de campaña, sigue los pasos a continuación:

1. En el Admin VTEX, accede a *Promociones > Audiencia de campañas*, o escribe *Audiencia de campañas* en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Nueva audiencia de campaña`.
3. Rellena los campos con los datos generales de la audiencia de campaña, según se indica en la sección [Datos generales](#datos-generales).
4. En **Público-objetivo**, haz clic en `Crear nuevo público-objetivo`.
5. Rellena los campos de la sección [Crear nuevo público-objetivo](#crear-nuevo-publico-objetivo).
6. Haz clic en `Guardar`.

> ⚠️ Luego de crear una audiencia de campaña, debes asociarla a una promoción de campaña para que entre en efecto. Sigue los pasos indicados en la guía [Crear una promoción de campaña](/es/tutorial/promocion-de-campanha--1ChYXhK2AQGuS6wAqS8Ume).

## Datos generales

Al crear una nueva audiencia de campaña, debes completar la información en la sección **¿Cuáles son los datos generales de esta audiencia de campaña?** que se indica a continuación:

* **Estado:** estado actual de la audiencia de campaña.
    * **Activo:** disponible para usar en las promociones de campaña de tu tienda.
    * **Inactivo:** no disponible para usar en las promociones de campaña de tu tienda.
* **Nombre:** nombre de la audiencia de campaña.
* **Descripción:**  descripción interna de la audiencia de campaña.
* **Validez:** periodo de vigencia de la audiencia de campaña en la tienda.
    * **Fecha de inicio:** fecha de inicio de la programación de la audiencia de campaña a partir de la cual la audiencia de campaña será válida.
    * **Hora de inicio:** horario de inicio de la programación de la audiencia de campaña a partir del cual la audiencia de campaña será válida.
    * **Fecha de término:** fecha de finalización de la programación de la audiencia de campaña a partir de la cual la audiencia de campaña será válida.
    * **Hora de término:** horario de finalización de la programación de la audiencia de campaña a partir de la cual la audiencia de campaña será válida.

> ⚠️ Para programar una audiencia de campaña, debes completar una **Fecha de inicio** o una **Hora de inicio** posterior a la fecha u hora actual. La zona horaria que toma en cuenta el sistema es la misma que la del dispositivo del usuario que creó la audiencia de campaña. No se realizan ajustes en caso de que haya zonas horarias diferentes.

## Crear nuevo público-objetivo

La configuración del público-objetivo permite segmentar a los usuarios según determinadas condiciones. Para obtener más información sobre el público objetivo de las audiencias de campaña, consulta [Audiencias de campañas](/es/tutorial/audiencias-de-campanas--3o7lhpNseXY2WmjZO0gQ6m).

Luego de hacer clic en `Crear nuevo público-objetivo`, debes seguir las instrucciones a continuación:

1. Rellena los campos referidos al público-objetivo. Para obtener más detalles sobre el significado de cada campo, consulta las secciones a continuación:
    * [Defina a tu público objetivo](#define-a-tu-publico-objetivo): escribe el nombre del público-objetivo.
    * [Ítems que se usarán en este público-objetivo](#items-que-se-usaran-en-este-publico-objetivo):  restringe los ítems que se asociarán al público-objetivo.
    * [Condiciones para que se aplique tu público-objetivo](#condiciones-para-que-se-aplique-tu-publico-objetivo): rellena con los criterios que se aplicarán para incluir clientes en el público-objetivo definido.
2. Al final de la sección de configuración del público-objetivo, haz clic en `Actualizar`.
    El público creado aparecerá en una lista en la sección **Público-objetivo**.
    Si quieres editar el público objetivo, hazle clic y modifica los campos que desees.
    Si quieres eliminarlo, haz clic en el ícono del cesto de basura <i class="fas fa-trash-alt"></i>.
3. Si deseas crear más públicos-objetivo para la audiencia de campaña, haz clic nuevamente en `Crear nuevo público-objetivo` y repite los pasos 1 y 2. De lo contrario, continúa al paso 4.
4. Si creas más de un público-objetivo, deberás elegir cuál será la relación entre ellos en la audiencia de campaña:
    * **o:** la audiencia de campaña estará compuesta por clientes que encajen en cualquiera de los públicos-objetivo.
    * **y:** la audiencia de campaña estará compuesta por clientes que encajen en todos los públicos-objetivo y sumen todos sus criterio

![publico-alvo-e-ou-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/audiencia-de-las-campa%C3%B1as/crear-audiencias-de-campana_1.gif)

### Define a tu público-objetivo

* **Nombre**: nombre del público-objetivo.

### Ítems que se usarán en este público-objetivo

* **Categorías, Marcas, Colecciones** y **SKU:** permite incluir o eliminar una o más categorías, marcas, colecciones, productos y SKU del público-objetivo a través de los criterios **Es igual a** o **Diferente de**.

    Los ítems deben cumplir con todas las condiciones registradas para que el cliente forme parte del público-objetivo.

* **Al menos _ productos que cumplen con los criterios antes mencionados:** determina cuántos ítems correspondientes a los criterios definidos debe haber en el carrito para que el cliente forme parte del público-objetivo. Todos los criterios anteriores deben ser **Es igual a** para activar esta configuración.

Ejemplo: en la imagen a continuación, los ítems cuya marca es **Nike** forman parte del público-objetivo. La configuración también indica que, al menos, 3 ítems deben cumplir con estos criterios. Por ende, un cliente debe tener en el carrito al menos **3** ítems que cumplan con estos criterios para ser parte del público-objetivo.

![exemplo-marca-publico-alvo-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/audiencia-de-las-campa%C3%B1as/crear-audiencias-de-campana_2.png)

### Condiciones para que se aplique tu público-objetivo

* **Valor mínimo del pedido:** valor mínimo que debe tener el total de los ítems en el carrito del cliente. Este total incluye la suma de los precios de los productos en el carrito que cumplen con los criterios de la audiencia de campaña.
* **Valor máximo del pedido:** valor máximo que puede tener el total de los ítems en el carrito del cliente. Este total incluye la suma de los precios de los productos en el carrito que cumplen con los criterios de la audiencia de campaña.
* **Valor del ítem entre __ y __:** precio mínimo y máximo que puede tener cada ítem en el carrito. La audiencia de campaña se activará si el valor del ítem cumple con el intervalo de valores completados.
* **Restricción de promoción por BIN:** la audiencia de campaña se activará si el _Número de Identificación Bancaria_ (BIN) de la tarjeta de crédito está entre los caracteres rellenados. El BIN corresponde a los 6 u 8 primeros números de una tarjeta y sirve para identificar al banco y al emisor de la tarjeta.
* **Marketing Tags:** campo usado para restringir la activación de la audiencia de campaña si la compra la realiza el [módulo de Suscripciones de VTEX](/es/tutorial/como-funciona-suscripciones--frequentlyAskedQuestions_4453).
* **Cluster de clientes:** el cliente formará parte del público-objetivo si está registrado en el cluster seleccionado. Cabe destacar que el nombre del cluster debe ser igual al registrado. Cualquier error de escritura impedirá el correcto funcionamiento de la configuración.
* **Número máximo de cuotas:** la audiencia de campaña se activará si el número de cuotas seleccionado por el cliente es menor o igual al número máximo registrado.
* **Solo en la primera compra:** la audiencia de campaña solo se activará si es la primera compra del cliente en tu tienda.
* **¿Aplicar el descuento incluso si el usuario no está conectado?:** este campo está disponible cuando se selecciona el campo **Solo en la primera compra**. Si se selecciona este campo, el cliente será parte del público-objetivo aunque no haya ingresado su usuario y contraseña. Cuando este campo no esté seleccionado, el cliente solo será parte del público-objetivo si ingresó a la tienda con el email y la contraseña registrados previamente.
* ** Precio «de» y «por» son los mismos** o **Precio «de» y «por» son diferentes:** se refiere a los valores del [precio de lista](/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#precio-de-lista) en el registro del producto. Solo se puede seleccionar una de las dos opciones.
* **El código postal de entrega debe Incluir / Excluir de __ hasta __:** permite incluir o excluir intervalos de códigos postales para el envío de los pedidos. La audiencia de campaña se activará si el código postal cumple con la regla configurada en el público-objetivo.
* **Afiliados:** permite seleccionar [afiliados](/es/tutorial/que-es-afiliado--4bN3e1YarSEammk2yOeMc0) a partir de una lista. La audiencia de campaña se activará si la compra se realiza en un _marketplace_ de los afiliados seleccionados.

  > ⚠️ La opción **Afiliados** solo se aplica si el afiliado es una tienda VTEX.

* **Sellers:** permite definir si la campaña debe considerar sellers que sean iguales o diferentes a los seleccionados, según los sellers registrados en tu cuenta.
* **utm_source:** permite seleccionar la [utm_source](/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii) deseada o crear una nueva para vincularla a la audiencia de campaña. La audiencia de campaña se activará si el cliente navega con la utm_source correspondiente a cualquiera de los valores registrados. Cabe destacar que el cliente puede ingresar solo una utm_source en el _checkout_.
* **utm_campaign:** permite seleccionar la [utm_campaign](/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii) deseada o crear una nueva para vincularla a la audiencia de campaña. El descuento se aplicará si la navegación se realiza con la utm_campaign con el valor registrado.
* **Tipo de carga:** permite seleccionar los [tipos de entrega](/es/tutorial/como-se-maneja-el-tipo-de-entrega--tutorials_126) que se incluirán en el público-objetivo. Ejemplo: normal o _express_. La audiencia de campaña se activará si, al finalizar el pedido, el cliente selecciona uno de los tipos de entrega definidos.
* **Aplique el descuento solo cuando el cliente seleccione uno de los transportistas anteriores:** la audiencia de campaña se activará solo después que el cliente seleccione la forma de envío del pedido.
* **Medio de pago:** permite seleccionar los medios de pago que se incluirán en el público-objetivo. La audiencia de campaña se activará si la forma de pago elegida por el cliente es la misma que la registrada.

> ⚠️ Las audiencias de campañas definidas por **Medio de pago** o** Número máximo de cuotas** no aplican a los pedidos que se pagan con dos tarjetas o con tarjetas de regalo.

## Más información

- [Audiencias de campañas](/es/tutorial/audiencias-de-campanas--3o7lhpNseXY2WmjZO0gQ6m)
- [Crear promoción de campaña](/es/tutorial/promocion-de-campana--1ChYXhK2AQGuS6wAqS8Ume)
- [Lista de audiencias de campañas](/es/tutorial/lista-de-audiencias-de-campanas--2aW3JH34Zsm4keR5wtXZbT)
