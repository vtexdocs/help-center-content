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
---

Los puntos de recogida son lugares donde los clientes recogen sus pedidos. Una tienda ofrece puntos de recogida para que sus clientes tengan la opción de elegir entre recibir su pedido a domicilio (entrega) o recogerlo en un lugar determinado (recogida).

Hay diferentes maneras de utilizar los puntos de recogida dependiendo de la organización y la estrategia comercial de la tienda, por ejemplo:

* Punto de recogida que coinciden con el _stock_.
* Tiendas físicas que también son puntos de recogida.
* Locales exclusivos para la recogida de pedidos.

En todos estos casos hay que prestar atención a la necesidad (o no) de transporte entre el [stock](/es/docs/tutorials/almacen) y el punto de recogida. En este caso, [configura](#como-configurar) los puntos de recogida con las transportadoras que llevan los paquetes hasta el punto de recogida. 

## Cómo funcionan puntos de recogida

Actualmente, la plataforma limita la selección a los 300 puntos de recogida más cercanos a la dirección del cliente independientemente de que los puntos de recogida estén configurados como activos o inactivos. Por lo tanto, es posible que no se incluyan algunos puntos de recogida aunque cumplan con el requisito de ubicación.

Es posible [configurar la cantidad de puntos de recogida](#como-configurar-puntos-de-recogida) que se que se muestran en el checkout, y el límite configurado se aplica por [política de envío](/es/docs/tutorials/politica-de-envio), como se muestra en los siguientes ejemplos:

> Ejemplo 1: la tienda establece el límite de cinco puntos de recogida que se muestran en el checkout. La política de envío está asociada a tres puntos de recogida, por lo que solo se muestran tres opciones en el checkout.

> Ejemplo 2: la tienda establece el límite de cinco puntos de recogida que se muestran en el checkout. Hay dos políticas de envío y cada una está asociada con tres puntos de recogida diferentes, por lo que se presentan seis opciones en el checkout. Aunque el límite fuera cinco, la regla se aplica para cada política de envío.

Es importante observar que:

* Los puntos de recogida que le aparecen al cliente en el _checkout_ dependen de la disponibilidad de los ítems y del transporte hasta el punto de recogida.
* VTEX limita la ubicación a un radio de 50 km entre el punto de recogida y la dirección del cliente.
* Cuando hay transporte entre el [stock](/es/docs/tutorials/almacen) y el punto de recogida, VTEX también toma en cuenta la existencia de la ruta a la hora de elegir el punto de recogida.

> ℹ️ Con los puntos de recogida, VTEX también hace posible que el administrador de la tienda: <body> <ul> <li>Configure puntos de recogida de contingencia: puntos de recogida que pueden suministrar stock a otros puntos cuando sea necesario y así permitir la elección más conveniente para el comprador. Para obtener más información, visite [Punto de recogida de contingencia.](/es/docs/tutorials/crear-punto-de-recogida-de-contingencia-como-opcion-en-el-checkout)</li> <li>Configure un seller white label como punto de recogida. Obtenga más información en [Configurar seller white label como punto de recogida (pickup point)](/es/tutorial/setting-up-seller-white-label-as-a-pickup-point--6fSUE2O0taaoKieAaiuc4e).</li> </ul></body>

Es importante verificar que la configuración de la cantidad de puntos de recogida esté dentro de los límites aceptados y de acuerdo con la estrategia de ventas de la tienda. Esto permite que la [simulación de envío](/es/docs/tutorials/simulador-de-envio) considere correctamente los datos y asegura, por ejemplo, que el número de puntos de recogida no limita la operación de la tienda.

## Cómo configurar puntos de recogida

VTEX considera que el punto de recogida es una forma de envío. Es por eso que la configuración en la plataforma cumple con los criterios de una política de envío. Por lo tanto, para que los puntos de recogida estén disponibles al cliente es necesario:

1. Registrar el punto de recogida. Es posible registrar el punto de recogida de las seguientes maneras:
    - **Mediante el Admin:** registrando cada punto de recogida individualmente.
    - **Mediante la plantilla del Admin:** registrando varios puntos simultáneamente.
    - **Mediante la API:** con el _request_ [Create/Update Pickup Point](https://developers.vtex.com/vtex-rest-api/reference/pickup-points-1#createupdate) 
2. Configurar la [estrategia de envío](/es/docs/tutorials/estrategia-de-envio) del punto de recogida:
    - Crear por lo menos un [muelle](/es/docs/tutorials/gestionar-el-muelle) que atienda al punto de recogida.
    - Crear por lo menos un [stock](/es/docs/tutorials/gestionar-almacenes) que atienda al punto de recogida.
    - Crear por lo menos [una política de envío](/es/docs/tutorials/politica-de-envio) para el punto de recogida, que incluye agregar una [plantilla de envío](/es/docs/tutorials/plantilla-de-flete) con la ubicación de los puntos de recogida.

3. Asociar el punto de recogida a la política de envío:
    - Paso 1: En el Admin VTEX, accede a **Envío > Estrategia de Envío**, o escribe *Estrategia de Envío* en la barra de búsqueda en la parte superior de la página.  
    - Paso 2: Haz clic en la pestaña **Políticas de envío**, selecciona la política de envío creada para el punto de recogida.
    - Paso 3: En la columna **Acciones**, haz clic en el ícono <i class="fas fa-pen"></i> para editar.
    - Paso 4: Activa el botón <i class="fas fa-toggle-on"></i> del campo **Asociar puntos de recogida**.
    - Paso 5: Selecciona el punto de recogida mediante los campos disponibles.![relacionarpontosretiradaES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/puntos-de-recogida/puntos-de-recogida_1.png) > ℹ️ Para las tiendas que tienen más de 50 puntos de recogida, recomendamos utilizar el campo Tags de [los puntos de recogida al crear un punto de recogida](/es/tutorial/politica-de-envio--tutorials_140#registrar-politica-de-envio). Utilizar tags facilita la búsqueda de los puntos de recogida al asociarlos con la política de envío.También recuerda que la política de envío que está asociada a un punto de recogida no estará disponible para otros tipos de envíos. Recomendamos crear una política de envío dedicada al punto de recogida.

4. [Registrar la geolocalización](/es/docs/tutorials/gestionar-geolocalizacion): para una mayor precisión de la ubicación de los puntos de recogida en el _checkout_.> ℹ️ La visualización de los puntos de recogida con el mapa y la hora en el checkout solo está disponible para Checkout V6.

5. Habilitar la solicitud de dirección en el checkout. De este modo, el cliente tiene que agregar la dirección que se utilizará en la factura:
    - Paso 1: En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Checkout**, o escribe *Checkout* en la barra de búsqueda en la parte superior de la página.  
    - Paso 2: Selecciona la configuración utilizada en la tienda y haz clic en el ícono <i class="fas fa-cog"></i>.
    - Paso 3: Haz clic en la pestaña **Checkout** en la barra superior.
    - Paso 4: Selecciona el botón <i class="fas fa-toggle-on"></i> del campo **Dirección de la factura para recogida en la tienda**. ![NFpontoretiradaES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/puntos-de-recogida/puntos-de-recogida_2.png)> ⚠️ La opción de **Dirección en la factura para recogida en la tienda** debe estar habilitada en todas las tiendas en Brasil, ya que es requisito que la factura emitida contenga la información de la dirección del cliente, incluso si la opción de entrega de el pedido está en el punto de recogida. La dirección ingresada por el cliente se registrará en el campo `invoiceData` del [orderForm](https://developers.vtex.com/vtex-rest-api/reference/orderform-fields#invoicedata).

6. Para configurar la cantidad de puntos de recogida que se muestran en el checkout:
    - Paso 1: En el Admin VTEX, accede a **Configuración de la tienda > Envío > Configuración**, o escribe *Envío* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Envío*.    
    - Paso 2: Cambia el campo **Configuración de los puntos de recogida**. Utiliza los botones <i class="far fa-caret-square-up"></i> y <i class="far fa-caret-square-down"></i> y selecciona la cantidad de puntos de recogida que estarán disponibles en la lista de búsqueda (mostrada en el checkout).
