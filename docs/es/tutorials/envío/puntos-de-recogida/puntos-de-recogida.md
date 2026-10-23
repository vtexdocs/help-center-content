---
title: 'Puntos de recogida'
id: 2fljn6wLjn8M4lJHA6HP3R
status: PUBLISHED
createdAt: 2020-07-01T19:16:21.675Z
updatedAt: 2023-07-25T16:53:09.640Z
publishedAt: 2023-07-25T16:53:09.640Z
firstPublishedAt: 2020-07-01T19:25:40.136Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: pickup-points
legacySlug: como-funciona-el-punto-de-recogida
locale: es
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
categoryCover: true
---

Los puntos de recogida son lugares donde los clientes recogen sus pedidos. Una tienda ofrece puntos de recogida para que sus clientes tengan la opción de elegir entre recibir su pedido a domicilio (envío) y recogerlo en una ubicación determinada (recogida).

Hay diferentes maneras de utilizar los puntos de recogida dependiendo de la organización y la estrategia de negocio de la tienda:

- Puntos de recogida que coinciden con el almacén.
- Tiendas físicas que también son puntos de recogida.
- Locales exclusivos para la recogida de pedidos.

En todos los casos hay que determinar si hace falta transporte entre el [almacén](/es/docs/tutorials/almacen) y el punto de recogida. De ser necesario [configura](#como-configurar-puntos-de-recogida) los puntos de recogida con transportadoras que lleven los paquetes hasta el punto de recogida.

## Cómo funcionan los puntos de recogida

Actualmente la plataforma limita la selección a los 300 puntos de recogida más cercanos a la dirección del cliente, independientemente de si están configurados como activos o inactivos. Por eso es posible que no se incluyan algunos puntos de recogida aunque cumplan con el requisito de ubicación.

Puedes [configurar la cantidad](#como-configurar-puntos-de-recogida) de puntos de recogida que se mostrarán en el checkout al cliente. El límite configurado se aplica por [política de envío](/es/docs/tutorials/politica-de-envio), según los siguientes ejemplos:

- **Ejemplo 1:** la tienda configura un límite de cinco puntos de recogida mostrados en el checkout. La política de envío está asociada a tres puntos de recogida, por lo tanto, solo se muestran tres opciones en el checkout.
- **Ejemplo 2:** la tienda configura un límite de cinco puntos de recogida mostrados en el checkout. Existen dos políticas de envío y cada una está asociada a tres puntos de recogida diferentes, por lo tanto, se presentan seis opciones en el checkout. Es decir, aunque el límite sea cinco, la regla se aplica a cada política de envío.

Ten en cuenta que:

- Los puntos de recogida que se muestran al cliente en el checkout dependen de la disponibilidad de los ítems y del transporte hasta el punto de recogida.
- VTEX limita la ubicación a un radio de hasta 1000 km entre el punto de recogida y la dirección del cliente. Este radio se puede configurar en el Admin VTEX en **Configuración de la tienda > Envío > Configuración**. Como la configuración se realiza a nivel de cuenta, las tiendas con cuentas franquicia deben modificarla en cada una de ellas.
- En los casos en que hay transporte entre el [almacén](/es/docs/tutorials/almacen) y el punto de recogida, VTEX también toma en cuenta esa ruta para elegir el punto de recogida.

> ℹ️ Mediante los puntos de recogida, VTEX también permite que el administrador de la tienda:
>
> - Configure **puntos de recogida de contingencia:** puntos de recogida que pueden suministrar stock a otros puntos cuando sea necesario, lo que permite la elección más conveniente para el comprador. Para más información, accede a [Crear un punto de recogida de contingencia para garantizarlo como opción en el checkout](https://help.vtex.com/es/docs/tutorials/crear-punto-de-recogida-de-contingencia-como-opcion-en-el-checkout).
> - Configure un **seller white label como punto de recogida**. Más información en [Configurar seller white label como punto de recogida (pickup point)](/es/tutorial/setting-up-seller-white-label-as-a-pickup-point--6fSUE2O0taaoKieAaiuc4e).

Es importante verificar que la cantidad de puntos de recogida configurada esté dentro de los límites aceptados y de acuerdo con la estrategia de ventas de la tienda. Esto permite que la [simulación de envío](/es/docs/tutorials/simulador-de-envio) considere los datos correctamente y garantiza, por ejemplo, que la configuración del número de puntos de recogida no limite la operación de la tienda.

## Cómo configurar puntos de recogida

VTEX considera que el punto de recogida es una forma de envío. Es por eso que la configuración en la plataforma cumple con los criterios de una política de envío. Para que los puntos de recogida estén disponibles para el cliente es necesario:

1. [Registrar el punto de recogida](/es/docs/tutorials/registro-de-puntos-de-recogida), lo que puede hacerse de las siguientes formas:
   - **Vía Admin:** se registra cada punto de recogida individualmente.
   - **Vía plantilla del Admin:** permite registrar varios puntos simultáneamente.
   - **Vía API:** con la solicitud [Create/Update Pickup Point](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/configuration/pickuppoints/-pickupPointId-).
2. Configurar la [estrategia de envío](/es/docs/tutorials/estrategia-de-envio) del punto de recogida:
   - Crear al menos un [muelle](/es/docs/tutorials/gestionar-el-muelle) que atienda el punto de recogida.
   - Crear al menos un [almacén](/es/docs/tutorials/gestionar-almacenes) que atienda el punto de recogida.
   - Crear al menos [una política de envío](/es/docs/tutorials/politica-de-envio) para el punto de recogida, lo que incluye agregar la [plantilla de envío](/es/docs/tutorials/plantilla-de-flete) con la ubicación del punto de recogida.
3. Asociar el punto de recogida a la política de envío:
   - a. En el Admin VTEX, accede a **Envío > Estrategia de envío** o ingresa Estrategia de envío en la barra de búsqueda en la parte superior de la página.
   - b. En la pestaña **Políticas de envío**, busca la política de envío creada para el punto de recogida.
   - c. En el lado derecho de la fila, haz clic en el ícono <i class="fas fa-pen"></i> y selecciona Editar.
   - d. Activa el botón <i class="fas fa-toggle-on"></i> del campo **Asociar puntos de recogida**.
   - e. Selecciona el punto de recogida mediante los campos disponibles.![relacionarpontosretiradaES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/puntos-de-recogida/puntos-de-recogida_1.png)
     > ℹ️ Para las tiendas que tienen más de 50 puntos de recogida, recomendamos utilizar el campo Tags de los puntos de recogida al crear un punto de recogida. Utilizar tags facilita la búsqueda de los puntos de [recogida al momento de asociarlos con la política de envío](/es/docs/tutorials/crear-una-politica-de-envio). También recuerda que la política de envío que está asociada a un punto de recogida no estará disponible para otros tipos de envíos. Recomendamos crear una política de envío dedicada al punto de recogida.
4. [Registrar la geolocalización](/es/docs/tutorials/gestionar-geolocalizacion): para una mayor precisión de la ubicación de los puntos de recogida en el checkout.

> ℹ️ La vista de los puntos de recogida con mapa y horario en el checkout solo está disponible para Checkout V6.

5. Activa la solicitud de dirección en el checkout. De este modo, el cliente tiene que agregar la dirección que se utilizará en la factura:
   - a. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Checkout**, o ingresa Checkout en la barra de búsqueda en la parte superior de la página.
   - b. Selecciona la configuración utilizada en la tienda y haz clic en el ícono <i class="fas fa-cog"></i>.
   - c. Haz clic en la pestaña **Checkout** en la barra superior.
   - d. Selecciona el <i class="fas fa-toggle-on"></i> del campo **Dirección en factura para recogida en la tienda**.![NFpontoretiradaES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/puntos-de-recogida/puntos-de-recogida_2.png)
     > ⚠️ La opción **Dirección en factura para recogida en la tienda** debe estar activada en todas las tiendas de Brasil, ya que es un requisito que la factura emitida contenga la información de la dirección del cliente, incluso si la opción de entrega del pedido es un punto de recogida. La dirección ingresada por el cliente se registrará en el campo `invoiceData` del [orderForm](https://developers.vtex.com/docs/guides/orderform-fields#invoicedata).
6. Para configurar la cantidad de puntos de recogida que se muestran en el checkout:
   - a. En el Admin VTEX, accede a **Configuración de la tienda > Envío > Configuración**, o ingresa Envío en la barra de búsqueda en la parte superior de la página y selecciona Configuración de la tienda / Envío.
   - b. Cambia el campo **Configuración de puntos de recogida:** utiliza los botones <i class="far fa-caret-square-up"></i> y <i class="far fa-caret-square-down"></i> y selecciona la cantidad de los primeros puntos de recogida que estarán disponibles en la lista de búsqueda mostrada en el checkout para el cliente.
