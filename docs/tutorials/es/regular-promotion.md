---
title: 'Promoción Regular'
id: tutorials_327
status: PUBLISHED
createdAt: 2017-04-27T22:07:59.690Z
updatedAt: 2024-05-15T16:38:18.730Z
publishedAt: 2024-05-15T16:38:18.730Z
firstPublishedAt: 2017-04-27T23:03:15.647Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: registro-promocion-regular
locale: es
legacySlug: registro-promocion-regular
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

En VTEX, se pueden [crear varios tipos de promociones](https://help.vtex.com/es/tutorial/como-criar-promocoes--tutorials_320#) para escenarios diferentes. Sin embargo, el más utilizado es la Promoción Regular. Este tipo de promoción permite que su tienda ofrezca descuentos de forma dinámica y flexible al combinar diferentes condiciones, restricciones y beneficios.

En este artículo, detallamos cómo funciona cada campo durante los pasos de configuración de una promoción regular según se describen a continuación.

1. [¿Cuáles son los datos generales de la promoción?](#1-cuales-son-los-datos-generales-de-la-promocion)
    - [Restringir esta promoción a productos dos sellers](#restringir-esta-promocion-a-productos-dos-sellers)
    - [Política Comercial](#politica-comercial)
2. [¿A qué ítems se aplicará esta promoción?](#2-a-que-items-se-aplicara-esta-promocion)
3. [¿Qué condiciones para la promoción sea válida?](#3-que-condiciones-para-la-promocion-sea-valida)
4. [Restricciones y limitaciones de uso](#4-restricciones-y-limitaciones-de-uso)

Para entender la implementación de las promociones, lea nuestro artículo sobre [Ejemplos de Promociones](https://help.vtex.com/es/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD?&utm_source=autocomplete#).

## 1. ¿Cuáles son los datos generales de la promoción? 

En esta sección, debe configurar los datos generales de la promoción. Los campos **Nombre**, **Validez** y **Cuál es el tipo y valor del descuento** son obligatorios.

- **Nombre**: es el nombre de la promoción.
- **Status**: define si la promoción está activa o inactiva.
- **Descripción**: es la descripción interna de la promoción. El objetivo de este campo es que se utilice para comunicación interna en su tienda, a fin de dejar en claro si la promoción se debe a alguna campaña, liquidación de stock, etc.
- **Validez**: es la fecha y hora de inicio y fin de la promoción. Se puede usar una fecha y hora futura para iniciar la promoción en el sitio web. Si se configura de esta forma, la promoción tendrá el status de programada hasta que se llegue a la fecha y hora definida. Mientras esté válida, la promoción tendrá el status de activa y al término de la fecha y hora definidas, su status cambiará a inactiva de forma automática.
- **Utilizar configuraciones de recurrencia**: esta opción es del tipo de casilla de selección, que al ser activada pone a disposición otras siete casillas, de modo que se pueda seleccionar los días de la semana y las horas del día en que se aplicará la promoción. Si desea que la promoción se aplique en cualquier día de la semana, no seleccione esta opción.
- **¿Cuál es el tipo y el valor del descuento?**: elección que define el tipo y valor del descuento que se aplicará a la promoción. Estas son las opciones de descuento:

  - **Nominal**: es el descuento que se concederá al total del carrito. 
  - **Carga nominal**: es el descuento que se concederá al valor del flete.
  - **Porcentual**: porcentaje de descuento que se concederá al valor del producto.
  - **Precio máximo por artículo**: el precio máximo para cada artículo de la compra será el precio registrado aquí.
  - **Carga porcentual**: porcentaje de descuento que se concederá al valor del flete.
  - **Envío máximo**: es el valor máximo establecido para el flete. 
  - **Flete gratis**: es el descuento total sobre el valor del flete.
  - **Regalo**: es el descuento total sobre el valor del producto definido como regalo. Puede seleccionar uno o más SKU como regalos, o más de una unidad para el mismo SKU. Para definir más de un regalo, escoja la opción **Activar multiplicador de regalo** y defina la cantidad deseada. Lea más sobre esta opción en este [artículo](https://help.vtex.com/es/tutorial/o-que-significa-ativar-o-multiplicador-de-brinde-em-uma-promocao--1gydgkmjEWcoo2CskUwuYK#).
>ℹ️ El producto de regalo también debe tener un precio registrado aunque se dé al cliente de forma gratuita.
  - **Descuento nominal basado en la fórmula**: el descuento se calcula en base a la fórmula que puede crear utilizando como variables la suma de los precios de los productos (`total`), el flete (`freight`) y la cantidad de artículos (`quantity`). Tenga en cuenta que el flete considerado por la fórmula será el más bajo disponible para el pedido, independientemente de la selección del cliente. El separador decimal debe ser siempre un punto. Ejemplo: si el descuento es del 30% del valor total del producto + el valor del flete, la fórmula debe ser `(total + flete) * 0,3`. Para más información sobre la fórmula, lea nuestra [documentación](https://help.vtex.com/es/tutorial/promocion-regular-con-descuento-nominal-basado-en-la-formula--2Pwrq6THyGViNedQG381jV).
  - **Valor de fidelidad nominal:** es el crédito que será añadido al programa de fidelidad de la tienda. Lea [Promoción regular con valor de fidelidad](https://help.vtex.com/es/tutorial/promocion-regular-con-valor-de-fidelidad--3FCip23ZtvG0sDt0rVGVmR) para más información.
  - **Valor de fidelidad porcentual**: es el porcentaje de crédito que se añadirá al programa de fidelidad de la tienda. Lea [Promoción regular con valor de fidelidad](https://help.vtex.com/es/tutorial/promocion-regular-con-valor-de-fidelidad--3FCip23ZtvG0sDt0rVGVmR) para más información.
  - **Tabla de precios promocionales**: se puede utilizar una lista de precios como promoción. El precio promocional de cada SKU será el correspondiente a la lista de precios seleccionada.

- **Destaque en los productos**: inserta una flag con el nombre de la promoción, usada en la vitrina y en la página del producto. Esta flag solo se insertará si se utiliza el control correcto de exhibición de promoción en el formato: `<vtex.cmc:discountHightLight/>`

>ℹ️ Las promociones del tipo **Nominal** solo se presentarán en el carrito, no en la vitrina o en la página de producto.

### Restringir esta promoción a productos dos sellers

En esta sección, se puede definir a qué *sellers* se aplicará la promoción. Puede determinar cuáles de ellos serán incluidos o excluidos del descuento.  

- **Es igual a:** seleccione los nombres de los *sellers* deseados para incluirlos.
- **Diferente de:** seleccione los nombres de los *sellers* deseados para excluirlos.

Para que la promoción sea válida para todos los *sellers*, deje la selección sin marcar.

>⚠️ No es posible seleccionar directamente un *seller white label*. Para incluir a un *seller white label* en la promoción, tiene dos opciones:1. Restringir a los *sellers* a la tienda principal. Esta restricción agrega a todos los *sellers white label* de su tienda a la promoción.2. Dejar la selección sin marcar para incluir a todos los *sellers*. Aquí, todos los tipos de *sellers*, *white label* o no, se agregarán a la promoción.

### Política Comercial

Esta sección establece las políticas comerciales válidas para la promoción. Puede incluir o excluir las políticas comerciales del descuento.

- **Es igual a:** seleccione las políticas comerciales deseadas para incluirlas.
- **Diferente de:** seleccione las políticas comerciales deseadas para excluirlas.
- **Proporcionado por mí (Mi tienda):** selección de las políticas comerciales para los productos de su tienda. Se puede seleccionar más de una política comercial.
- **Entregado por mí (Tienda de otros):** selección de las políticas comerciales para sus productos que están en las tiendas de otros. Puede seleccionar más de una política comercial.

Para que la promoción sea válida para todas las políticas comerciales, deje la selección sin marcar.

## 2. ¿A qué ítems se aplicará esta promoción?

En esta sección, debe elegir si la promoción se aplicará a todos los productos registrados en su tienda o solo a productos específicos, como se ilustra a continuación.

![promocoes-restricao-es](https://images.ctfassets.net/alneenqid6w5/55xxIduLJDJrwQMuk4OgRu/83e378ce4788febd839ee10395e02f9f/image.png)

Si desea aplicar la promoción a todo su catálogo, seleccione la opción **Aplicar a todos los productos.**

Para limitar la promoción a productos específicos, seleccione **Aplicar a los siguientes productos** y luego rellene los criterios de selección para **Categorías, Marcas, Colecciones**, **Productos** y **SKUs**.

Puede incluir o excluir **categorías, marcas, colecciones**, **productos** y **SKUs** de la promoción utilizando los criterios **Es igual a** o **Diferente de**.

Vea a continuación un ejemplo de cómo rellenarlo. En este caso, participan en la promoción todos los productos de la categoría **Vestido **cuya marca es **Farm**, con la excepción del producto **Vestido Rosas**.

![exemplo-es](https://images.ctfassets.net/alneenqid6w5/69J3NHBR8yLbbn04SSc5er/89c3e52e137f7856cb49628954217ff9/image.png)

En los campos **Productos** y **SKUs**, se puede cargar un archivo **.txt** con un ID de producto o de SKU por fila, en vez de seleccionar un producto o un SKU a la vez. Para ello, debe hacer clic en **Elegir archivo** y seleccionar el archivo **.txt** deseado.

>⚠️ Si selecciona** Aplicar a los siguientes productos** y no rellena ninguno de los criterios de selección, la promoción no se creará y aparecerá el mensaje **Defina los productos elegibles o aplique a todos los productos**. En este caso, debe volver y rellenar los criterios de selección o elegir **Aplicar a todos los productos.**

Para ser válidos en la promoción, los productos deben cumplir todas las condiciones registradas en esta sección.

## 3. ¿Qué condiciones para la promoción sea válida?

El pedido del cliente debe cumplir las condiciones registradas en esta sección para ser válido en la promoción.

- **Valor mínimo y máximo del pedido:** para las promociones de precio que ajustan directamente el valor de los ítems en el carrito, la activación de la promoción se basa en el precio original de los ítems. Y para las promociones que ofrecen otros beneficios, como envío gratuito o regalos, el precio considerado para activar la promoción es el precio ya descontado.
- **Valor acumulado de las compras:** se concederá el descuento si el total de todas las compras ya realizadas por el cliente alcanza el valor ingresado.
- **Valor del ítem entre:** se concederá el descuento si el valor del ítem cumple el intervalo de valores ingresados.
- **Precio "de" y "a" son iguales** o **Precio "de" y "a" son diferentes:** se refiere al precio del producto. Solo se puede seleccionar una opción.
- **Restricción de promoción por BIN:** se concederá el descuento si el BIN de la tarjeta está entre los ingresados.
- **Marketing Tags:** campo utilizado para restringir la activación de la promoción. 
- **Afiliados:** identificador de pedidos del Marketplace. Se aplicará el descuento a los afiliados seleccionados. Vea el artículo [Qué es afiliado](https://help.vtex.com/es/tutorial/que-es-afiliado--4bN3e1YarSEammk2yOeMc0?locale=es) para más información.
- **Clúster de clientes:** se concederá el descuento si el cliente está registrado en el clúster seleccionado. Es importante destacar que el nombre del clúster debe ser exactamente como se ha registrado, cualquier error ortográfico impedirá el correcto funcionamiento de la configuración.
- **Países de entrega:** se concederá el descuento a los países seleccionados en este campo. 
- **El código postal de entrega debe:** se concederá el descuento si el código postal está de acuerdo con la regla configurada.
- **Tipo de carga:** se concederá el descuento si el tipo de flete es igual al registrado. Este criterio solo se considerará si la promoción está relacionada con el Valor de Flete, es decir, en alguno de los siguientes casos: Carga porcentual», «Carga nominal», «Envío máximo» o «Flete gratis».
- **Aplicar el descuento solamente con el flete más barato:** si habilita esta opción, el descuento del flete se aplicará solamente al valor menor calculado por el flete. Esta opción está habilitada de forma predeterminada, pero puede inhabilitarla si desea aplicar el descuento a otros tipos de flete. Lea el artículo [Registrar promociones de envío](https://help.vtex.com/es/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW) para más información. Este criterio solo se considerará si la promoción está relacionada con el Valor de Flete, es decir, en alguno de los siguientes casos: Carga porcentual», «Carga nominal», «Envío máximo» o «Flete gratis».
- **Aplicar el descuento solamente cuando el cliente seleccione uno de los transportistas anteriores:** la promoción se aplicará solo después de que el cliente seleccione la forma de entrega en cuestión. Mientras no se seleccione, no tendrá descuento. Este criterio solo se considerará si la promoción está relacionada con el Valor de Flete, es decir, en alguno de los siguientes casos: Carga porcentual», «Carga nominal», «Envío máximo» o «Flete gratis».
- **Medio de pago:** se concederá el descuento si el medio de pago seleccionado por el cliente es igual al registrado. Este descuento solo se aplica al finalizar la compra, cuando el cliente seleccione el mismo medio de pago registrado aquí.

 >ℹ️ Por estándar, puede registrar hasta 20 medios de pago por promoción. Además, existe la posibilidad de personalización para incluir hasta 100 medios de pago. Si necesita utilizar más de 20, contacte a <a href="https://support.vtex.com/hc/pt-br/requests">nuestro servicio de asistencia
> técnica</a>.

- **Número de cuotas:** se concederá el descuento si el número de cuotas seleccionado por el cliente está dentro del intervalo registrado. Este campo no se aplica para la selección de boleto bancario.

>⚠️ **Atención**: las promociones por medio de pago y/o número de cuotas no se aplican a pedidos pagados con dos tarjetas o vales de compra.

- **Utm\_source:** se concederá el descuento si la navegación se realiza con la **utm_source** correspondiente a alguno de los valores registrados. Es importante resaltar que el cliente solo puede ingresar una **utm_source** en el checkout.
- **Utm\_campaign:** se concederá el descuento si la navegación se realiza con la **utm\_campaign** con el valor registrado.
- **Generar cupón con las UTM arriba:** crea un cupón con las UTM registradas para darle al cliente acceso a esta promoción sin necesidad de las UTM, tan solo con el código del cupón.
- **Utmi\_cp:** se concederá el descuento si la navegación se realiza con la utmi\_cp con el valor registrado (case sensitive).

>ℹ️ En el campo de las UTM, ingrese solo el valor que tendrán las UTM para activar la promoción. No es necesario ingresar <i>?utm_source=</i> dentro del campo.

- **Solo en la primera compra:** solo se concederá el descuento en la primera compra del cliente.
- **Es un pedido de suscripción**: opción que define que la promoción se aplicará a los pedidos de suscripción. Estas son las condiciones:
  - **Pedido original**: los pedidos que generan las suscripciones, pero que aún no forman parte de los ciclos de suscripción.
  - **Pedidos recurrentes**: los pedidos que forman parte de los ciclos de suscripción.
  - **Filtrar por**: es la selección que filtra qué pedidos de suscripción serán válidos para la promoción.
      - **Frecuencia**: es la selección de la frecuencia de los pedidos por suscripción, que puede ser semanal, mensual y anual.
      - **Número del ciclo**: es la selección de los ciclos de la suscripción que se incluirán en la promoción. Esta opción se desbloquea solamente si la de **Pedidos recurrentes** ha sido seleccionada anteriormente.

- **Aplicar el descuento, incluso si el usuario no está conectado:** este campo se habilita cuando se selecciona el campo **solo en la primera compra**. Si se marca este campo, la promoción se aplicará incluso si el consumidor no ingresó su *email* y contraseña. Cuando no está marcado, la promoción solo se aplicará si el consumidor ha accedido con su *email* y contraseña previamente registrados.

## 4. Restricciones y limitaciones de uso

- **Cuántas veces esta promoción se aplicará en su tienda:** limita la cantidad de veces que se aplicará la promoción. Cuando no está marcada la opción **ilimitada**, se habilita un campo para registrar la cantidad de veces a la que estará limitada. Dado que la promoción ya ha sido creada, esta condición solo se aplicará a partir del día en que se establezca, sin que afecte a los pedidos realizados con anterioridad.
-  **Cuántas veces se aplicará la promoción a su tienda por cliente:** habilita la cantidad registrada arriba, no para la cantidad de uso total de la promoción, sino para la cantidad de veces que cada cliente podrá recibir la promoción. Si se selecciona también el campo anterior, tendrá una prioridad de aplicación superior a este límite.
- **Definir la cantidad máxima de ítems afectados por carrito:** define a cuántos ítems del carrito se aplicará la promoción. Lea [este artículo](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-itens-com-promocao-no-carrinho) para saber cómo configurar el campo.
- **Permite que las promociones se acumulen:** permite que se conceda de forma simultánea más de una promoción, independiente del tipo de descuento. Sepa más sobre [cómo funciona la competencia de promociones](https://help.vtex.com/es/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#)
- **Permite que se acumule con precios manuales:** permite que la promoción se aplique a productos cuyos precios fueron introducidos manualmente por un usuario de televentas. Para habilitar la funcionalidad de precios manuales, utilice el *endpoint* [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).
