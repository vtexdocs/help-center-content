---
title: VTEX Pick and Pack: Fulfillment
id: 1zGUEItEEVsal6cuBEBNcA
status: PUBLISHED
createdAt: 2023-04-10T15:43:59.687Z
updatedAt: 2023-04-20T15:41:30.789Z
publishedAt: 2023-04-20T15:41:30.789Z
firstPublishedAt: 2023-04-10T17:57:34.714Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: vtex-pick-and-pack-fulfillment
legacySlug: vtex-pick-and-pack-fulfillment
subcategory: 7Kllu6CmeLNV3tYXlCFvOt
---

[VTEX Pick and Pack](https://help.vtex.com/es/tutorial/vtex-pick-and-pack--1OOops3WrUyz7e0bnhkfXU) es una solución para agilizar los procesos de fulfillment de las tiendas, optimizando la recolección y el empaquetado de los pedidos y la entrega last mile. La solución está compuesta por las páginas [Last Mile](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-last-mile--HN7WKV0xoq2ssVjsJlfzr) y **VTEX Pick and Pack Fulfillment**, y está disponible en tu VTEX Admin en **Apps**.

El módulo **VTEX Pick and Pack Fulfillment** está relacionado con el proceso de gestión de pedidos y cuenta con las siguientes secciones:

- [Recolección y empaquetado](#recoleccion-y-empaquetado)
- [Insights](#insights)
- [Configuración](#configuracion)
- [Usuarios](#usuarios)

<div class="alert alert-danger">
<b>VTEX Pick and Pack</b> no es un sistema de facturación. Tras la recolección y el empaquetado, el pedido debe ser facturado y actualizado como <code>Facturado</code> en OMS, para que <b>VTEX Fulfillment</b> pueda finalizar el flujo de recolección y empaquetado y proceder al envío.
</div>

## Recolección y empaquetado

Esta es la interfaz de gestión de pedidos, con dos páginas principales:

- [Lista de recolección y empaquetado](#lista-de-recoleccion-y-empaquetado)
- [Detalles de recolección y empaquetado](#detalles-de-recoleccion-y-empaquetado)

### Lista de recolección y empaquetado

Al acceder a **Fulfillment > Recolección y empaquetado**, encontrarás una página en la que se enumeran todos los pedidos con pago confirmado con [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) `Listo para recolección`, como en la imagen de abajo.

La tabla siguiente contiene la descripción de las columnas mostradas:

| **Columna** | **Descripción** |
| ----------- | ---------- |
| Fecha de creación | Fecha y hora de realización del pedido. |
| Fecha de entrega | El plazo de entrega de los pedidos, definido en el acuerdo de nivel de servicio (SLA) entre la tienda y el cliente. |
| Forma de entrega | El tipo de envío del pedido, que puede ser entrega, envío a la dirección del cliente o recogida en un [punto de recogida](https://help.vtex.com/es/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R). |
| Número del pedido | ID único que identifica un pedido, el mismo que se utiliza en el sistema de gestión de pedidos (OMS). |
| Entregador | Nombre del _entregador_ asignado al pedido. El _entregador_ es la persona responsable del proceso de recolecc ión. El valor predeterminado es `No asignado` hasta que se asigne un _entregador_. |
| Status | El status del pedido, que puede ser:<ul><li><b>Listo para preparación:</b> los pedidos están listos para su preparación, pero aún no se han asignado a un recolector.</li><li><b>Listo para recolección:</b> el pedido fue asignado a un recolector y depende de su confirmación para pasar al siguiente status.</li><li><b>Recolectando:</b> se están recogiendo los ítems del pedido.</li><li><b>Listo para empaquetar:</b> el proceso de recolección ha finalizado y el pedido está listo para ser empaquetado.</li><li><b>Empaquetando:</b> los ítems del pedido se están empaquetando en bolsas o paquetes determinados por la tienda.</li><li><b>Listo para facturar:</b> el pedido puede ser facturado. La solución VTEX Pick and Pack no factura los pedidos.</li><li><b>Facturado:</b> el pedido fue facturado.</li><li><b>Preparando servicios:</b> los servicios de envío están listos para ser creados.</li><li><b>Listo para envío:</b> el pedido está listo para envío.</li><li><b>Entregado:</b> el pedido fue entregado a la dirección del cliente o punto de recogida.</li><li><b>Inactivo:</b> el pedido era de fulfillment externo, y VTEX Pick and Pack no podrá procesarlo. Si el pedido se factura en OMS en un status distinto a <code>Listo para facturar</code>, el sistema también lo considerará un caso de fulfillment externo y cambiará el status del pedido a <code>Inactivo</code>.</li><li><b>Cancelado:</b> el pedido estaba listo para preparación, pero fue cancelado.</li></ul> | 

Para ver más detalles sobre un pedido, selecciona uno de la lista y la información siguiente aparecerá:

| **Columna** | **Descripción** |
| ---------- | ---------- |
| Información del cliente | El nombre, email y número de contacto del cliente. |
| Información de entrega | La dirección de entrega del cliente o la dirección del punto de recogida, cuando el cliente elige la opción de recogida en tienda. |
| Ventana de entrega | Muestra la fecha en que se realizó el pedido y la fecha prevista en que el cliente lo recibirá. |
| Ítems del pedido | El número de ítems y sus categorías. |
| Medio de pago | El valor total del pedido y el [medio de pago](https://help.vtex.com/es/tutorial/difference-between-payment-methods-and-payment-conditions--3azJenhGFyUy2gsocms42Q) utilizado, como tarjetas de crédito o débito. |

Puedes realizar las siguientes acciones en la página de Recolección y empaquetado:

- [Buscar](#buscar)
- [Filtrar](#filtrar)
- [Importar](#importar)
- [Exportar](#exportar)
- [Imprimir recibos](#imprimir-recibos)
- [Asignar/reasignar entregador](#asignar-reasignar-entregador)

#### Buscar

En la parte superior de la página, hay un cuadro de búsqueda con el ícono de lupa <i class="fas fa-search"></i> en el que puedes buscar pedidos utilizando los siguientes criterios:

- ID del pedido
- Nombre del cliente
- Operador de la tienda responsable del pedido

#### Filtrar

Puedes filtrar los pedidos utilizando diferentes criterios. Al hacer clic en `Filtros`, un modal muestra estas opciones:

- **Orden ascendente/descendente:** al seleccionar orden ascendente, se muestran primero los pedidos con la fecha y hora de entrega más recientes, según lo establecido por los clientes al realizar el pago. En orden descendente, los pedidos se muestran de forma inversa.
- **Fecha del pedido:** define un rango para filtrar los pedidos creados entre las fechas de inicio y fin elegidas.
- **Fecha de vencimiento:** los plazos de entrega ocurren dentro de la fecha de inicio y fin elegidas.
- **Status:** selecciona uno o varios [status de pedido](#lista-de-recoleccion-y-empaquetado).
- **Total del pedido:** el rango de costo del pedido, que puede ir de USD 0 a 5 millones.
- **Número de ítems:** el número de ítems del pedido, que puede ir de 0 a 99.
- **Transportadora:** la [transportadora](https://help.vtex.com/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) responsable de la entrega.
- **Medio de pago:** el [medio de pago](https://help.vtex.com/es/tutorial/difference-between-payment-methods-and-payment-conditions--3azJenhGFyUy2gsocms42Q) utilizado por el cliente, como tarjetas de crédito o débito.
- **Entregador:** el entregador asignado para el proceso de recolección del pedido. Utiliza los emails de los entregadores disponibles.
- **Categorías:** las categorías de los ítems de los pedidos. Por ejemplo, _Bebidas_ o _Ropas_. Depende del árbol de categorías de la tienda configurado en el Catálogo.

Si deseas eliminar los filtros seleccionados, haz clic en `Filtros` y luego en `Borrar filtros`.

#### Importar

Por defecto, los pedidos con status `Listo para preparación` deben ser importados automáticamente de OMS a Recolección y empaquetado. Si un pedido no aparece en el módulo de fulfillment, a pesar de estar `Listo para separación`, puede deberse a cambios manuales en el status del pedido en OMS, y puedes importarlo manualmente.

Para importar un pedido manualmente, sigue los pasos a continuación.

1. Haz clic en `Importar`.
2. Introduce el ID del pedido.
3. Selecciona la casilla `Solo se importarán los pedidos que no se hayan descargado automáticamente`.
4. Haz clic en `Importar`.

#### Exportar

Puedes exportar una lista de pedidos siguiendo los pasos a continuación.

1. Haz clic en `Exportar`.
2. Aplica los filtros deseados.
    > No se pueden exportar todos los pedidos. Puedes duplicar o eliminar filtros en el menú <i class="fas fa-ellipsis-v"></i>. Los filtros disponibles son:
    - Entregador
    - Categorías
    - Transportadora
    - Fecha de inicio
    - Fecha de fin
    - Ciudad
3. Haz clic en `Exportar`.

#### Imprimir recibo

El recibo es un informe que contiene lo que recogió el entregador y el valor total del pedido. Puede funcionar como factura en algunos países, pero no es la norma.

Para imprimir un recibo de pedido, haz clic en el menú <i class="fas fa-ellipsis-v"></i> de la fila correspondiente al pedido y selecciona `Imprimir recibo`.

#### Asignar/reasignar entregador

Para asignar o reasignar un entregador, en la fila del pedido deseado, haz clic en el menú <i class="fas fa-ellipsis-v"></i> y selecciona `Asignar` o `Reasignar`. Se abrirá un modal donde elegirás el nombre del entregador.

También puedes asignar o reasignar un entregador en la página [Detalles de Recolección y empaquetado](#detalles-de-recoleccion-y-empaquetado), haciendo clic en el icono del lápiz <i class="fas fa-pencil-alt"></i> y seleccionando el entregador.

### Detalles de recolección y empaquetado

Para acceder a la página de detalles de un pedido, en la **página de la lista de recolección y empaquetado**, haz clic en el botón de menú <i class="fas fa-ellipsis-v"></i> de la fila del pedido sobre el que deseas ver más información y selecciona `Ver detalles`. Se te redirigirá a la siguiente página:

En la página de detalles, puedes realizar las acciones a continuación. Las acciones disponibles en la **página de detalles de Recolección y empaquetado** cambiarán en función del status del pedido mostrado en la [página de lista de Recolección y empaquetado](#recoleccion-y-empaquetado).

- [Recolectar](#recolectar)*
- [Agregar ítem](#agregar-item)*
- [Crear producto personalizado](#crear-producto-personalizado)
- [Reemplazar ítem (Buscar)](#buscar-reemplazar-item)*
- [Reemplazar por ítem recomendado (Sugerencias)](#sugerencias-sustituir-por-un-item-recomendado)*
- [Cambiar precio](#cambiar-precio)*
- [Eliminar ítem](#eliminar-item)*
- [Finalizar recolección/confirmar recolección](#finalizar-recoleccion-confirmar-recoleccion)*
- [Empaquetar](#empaquetar)*
- [Imprimir recibo y comprobante](#imprimir-recibo-y-comprobante)
- [Agregar servicio de envío](#agregar-servicio-de-envio)
- [Seguir pedido](#seguir-pedido)

<div class="alert alert-danger">
Aunque las acciones anteriores pueden ser realizadas por <a href="https://help.vtex.com/es/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA#usuarios">usuarios</a> con acceso al Admin, típicamente las acciones con un <b>*</b> (asterisco) deben ser ejecutadas únicamente por entregadores utilizando sus dispositivos móviles, sin ningún acceso al Admin de la tienda.
</div>

#### Recolectar

En el flujo natural, la recolección la realizan los recolectores en sus dispositivos móviles. Esta sección muestra cómo hacerlo a través del Admin, por si [otros usuarios](#usuarios) necesitan realizar esta acción.

En la fila del producto, como en la imagen de abajo, puedes elegir un producto y realizar otras acciones.

Para recolectar un producto, sigue los pasos que a continuación.

1. En la columna **Cantidad**, selecciona el número deseado de ítems.
2. Haz clic en el símbolo <i class="far fa-check-circle"></i> al final de la fila.
3. Haz clic en `Confirmar`.

En caso de que necesites deshacer la recolección, haz clic en el menú <i class="fas fa-ellipsis-v"></i> en la fila del producto y selecciona `Restaurar`.

#### Agregar ítem

En el flujo natural, la adición de los ítems la realizan los recolectores en sus dispositivos móviles. Esta sección muestra cómo hacerlo a través del Admin, por si [otros usuarios](#usuarios) necesitan realizar esta acción.

Puedes agregar otro producto siguiendo los pasos a continuación.

1. En el menú <i class="fas fa-ellipsis-v"></i>, en la misma fila del ID del pedido, haz clic en `+Agregar ítem`.
2. Busca el producto deseado.
3. Haz clic en `Seleccionar`.
4. Haz clic en `Agregar productos`

#### Crear producto personalizado

Puedes crear un producto personalizado siguiendo los pasos a continuación.

1. En el menú <i class="fas fa-ellipsis-v"></i>, en la misma fila del ID del pedido, haz clic en `+Agregar ítem`.
2. Haz clic en el ícono con el signo <i class="fas fa-plus"></i> más.
3. Rellena los siguientes campos:
    - Nombre
    - Precio
    - RefID
    - EAN
4. Selecciona una categoría.
5. Haz clic en `Agregar`.
6. Haz clic en `Agregar productos`.

#### Buscar: reemplazar ítem

En el flujo natural, el reemplazo de los ítems lo realizan los recolectores en sus dispositivos móviles. Esta sección muestra cómo hacerlo a través del Admin, por si [otros usuarios](#usuarios) necesitan realizar esta acción.

Puedes reemplazar un producto siguiendo los pasos a continuación.

1. En la fila de un producto no recolectado, haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en `Buscar`.
3. Busca el producto deseado.
4. Haz clic en `Seleccionar`.
5. Haz clic en `Confirmar`.
6. En el modal que se abre, selecciona un motivo para el reemplazo.
    > Es necesario configurar los motivos, como se explica en la sección [Configuración de recolección](#configuracion-de-recoleccion).
7. Rellena el campo **Observaciones** con una breve explicación para el reemplazo (obligatorio).
8. Haz clic en `Confirmar`.

#### Sugerencias: sustituir por un ítem recomendado

En el flujo natural, el reemplazo de los ítems lo realizan los recolectores en sus dispositivos móviles. Esta sección muestra cómo hacerlo a través del Admin, por si [otros usuarios](#usuarios) necesitan realizar esta acción.

Puedes reemplazar un ítem por otro basándote en una recomendación. La opción mostrada depende de cuál sea tu configuración en [Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb).

Para reemplazar un ítem por una recomendación, sigue los pasos a continuación.

1. En la fila correspondiente a un producto no recolectado, haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en `Sugerencias`.
3. Agrega el producto mostrado haciendo clic en `Seleccionar`.
4. Haz clic en `Confirmar`.
5. En el modal que se abre, selecciona un motivo para el reemplazo.
    > Es necesario configurar los motivos, como se explica en la sección [Configuración de recolección] (#configuración-recolección).
6. Rellena el campo **Observaciones** con una breve explicación para el reemplazo (obligatorio).
7. Haz clic en `Confirmar`.

Para buscar un producto manualmente, sigue los pasos a continuación.

1. En el menú <i class="fas fa-ellipsis-v"></i>, haz clic en `Sugerencias`.
2. Haz clic en `Buscar manualmente`.
3. Busca el producto deseado.
4. Haz clic en `Seleccionar`.
5. Haz clic en `Confirmar`.
6. En el modal que se abre, selecciona un motivo para el reemplazo.
    > Es necesario configurar los motivos, como se explica en la sección [Configuración de recolección] (#configuración-recolección).
7. Rellena el campo **Observaciones** con una breve explicación para el reemplazo (obligatorio).
8. Haz clic en `Confirmar`.

#### Cambiar precio

En el flujo natural, el cambio de precio lo realizan los recolectores en sus dispositivos móviles. Esta sección muestra cómo hacerlo a través del Admin, por si [otros usuarios](#usuarios) necesitan realizar esta acción.

Para cambiar el precio de un ítem, sigue los pasos a continuación.

1. En la fila correspondiente a un producto no recolectado, haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
2. Haz clic en `Cambiar precio`.
3. En el modal que se abre, rellena los campos:
    - Nuevo precio
    - Motivo
    - Observaciones
4. Haz clic en `Cambiar precio`.

#### Eliminar ítem

En el flujo natural, la eliminación de los ítems lo realizan los recolectores en sus dispositivos móviles. Esta sección muestra cómo hacerlo a través del Admin, por si [otros usuarios](#usuarios) necesitan realizar esta acción.

Puedes rechazar un producto siguiendo los pasos a continuación.

1. En el menú <i class="fas fa-ellipsis-v"></i>, haz clic en `Eliminar ítem`.
2. En el modal que se abre, selecciona un motivo para el rechazo.
3. Rellena el campo **Observaciones** con una breve explicación para el reemplazo (obligatorio).
4. Haz clic en `Confirmar`.

En caso de que necesites restaurar el producto, haz clic en el menú <i class="fas fa-ellipsis-v"></i> y selecciona `Restaurar`.

#### Finalizar recolección/confirmar recolección

En el flujo natural, este paso lo realizan los recolectores en sus dispositivos móviles. Esta sección muestra cómo hacerlo a través del Admin, por si [otros usuarios](#usuarios) necesitan realizar esta acción.

Dependiendo del status del pedido que aparezca en la [página de la lista de recolección y empaquetado](#lista-de-recoleccion-y-empaquetado), en la sección **Status**, encontrarás diferentes botones para acciones específicas, como `Finalizar recolección` en la imagen de abajo:

Puedes realizar las siguientes acciones haciendo clic en los botones disponibles:

- `Finalizar recolección`: todos los ítems fueron recogidos y finalizas la recolección, pasando al proceso de empaquetado.
- `Confirmar recogida`: si se trata de una entrega, confirmas la recogida cuando los paquetes están listos para ser entregados, y una transportadora los ha recogido. Si el cliente va a recibir el pedido en un punto de recogida, confirma la recogida después de que el cliente reciba los paquetes.

#### Empaquetar 

En el flujo natural, el empaquetado lo realizan los recolectores en sus dispositivos móviles. Esta sección muestra cómo hacerlo a través del Admin, por si [otros usuarios](#usuarios) necesitan realizar esta acción.

Una vez finalizado el proceso de recolección, debes crear los paquetes e indicar qué ítem va en cada paquete. La [configuración de los paquetes](#configuracion-de-paquetes) sobre cómo configurar las bolsas y cualquier tipo de paquetes se verá en las próximas secciones.

Para crear un nuevo paquete, sigue los pasos a continuación.

1. Haz clic en el icono de la sección **Lista de paquetes**.
2. Selecciona el tipo de paquete.
3. Haz clic en `Crear paquete`.

Puedes agregar un solo producto a un paquete o todos los productos a la vez. Una vez empaquetados todos los productos, haz clic en `Cerrar paquetes`. Una vez que cierres los paquetes, ya no podrás agregar ítems ni realizar ningún tipo de cambio.

<div class="alert alert-danger">
<b>VTEX Pick and Pack</b> no es un sistema de facturación. Una vez que el pedido pasa al status <code>Listo para facturar</code>, debe facturarse y actualizarse como <code>Facturado</code> en OMS. Solo después <b>VTEX Fulfillment</b> finalizará el flujo de recolección y empaquetado y procederá al envío. Si el pedido se factura en un status distinto a <code>Listo para facturar</code>, el sistema lo considerará un caso de fulfillment externo y cambiará el status del pedido a <code>Inactivo</code> y no permitirá que <b>VTEX Pick and Pack</b> lo procese.
</div>

#### Imprimir recibo y comprobante

En la parte superior de la página de detalles, a la izquierda de **Status**, encontrarás un menú <i class="fas fa-ellipsis-v"></i>. Al hacer clic en él, se muestran las siguientes opciones:

- **Recibo:** imprimir el recibo del pedido con una lista de todos los ítems.
- **Comprobante:** imprime el comprobante, un informe para los clientes que contiene información general y que puede ser firmado por ellos.
- **Recibo de los ítems recogidos:** imprime el recibo del pedido relacionado solo con los ítems ya recolectados.
- **Comprobante de los ítems recogidos:** imprime el comprobante del pedido relacionado solo con los ítems ya recolectados.
- **+ Agregar ítem:** [agrega un nuevo producto](#agregar-item) o crea un [producto personalizado](#crear-producto-personalizado).

#### Agregar servicio de envío

Cuando la recolección, el empaquetado y la facturación del pedido hayan finalizado y el pedido se encuentre en el status `Preparando servicios`, puedes agregar un servicio de envío siguiendo los pasos a continuación.

1. Haz clic en el botón `Agregar servicio`.
2. Selecciona el **día** y **hora** en que el pedido estará listo para recolección.
3. Selecciona el **día** y **hora** en que se enviará el pedido.
4. Selecciona la transportadora.
5. Selecciona el tipo de servicio.
6. Selecciona el medio de pago.
7. Selecciona los paquetes que se enviarán.
8. Haz clic en `Confirmar envíos`.

Recibirás un mensaje de éxito y el pedido pasará al status _Listo para envío_.

#### Seguir pedido

Una vez que el pedido pase al status _Listo para envío _o _Entregado_, aparecerá el botón `Ir al seguimiento` en la [página de detalles de Recolección y empaquetado](#detalles-de-recoleccion-y-empaquetado). Al hacer clic en él, se te redirigirá a la [Last Mile](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-last-mile--HN7WKV0xoq2ssVjsJlfzr) para realizar el seguimiento del pedido.

O puedes ir a **Last Mile** directamente en el Admin de la tienda, accediendo a **Apps > Last Mile > Servicios de envío**.

## Insights

En **VTEX Pick and Pack**, la página **Insights** proporciona datos y análisis sobre tus pedidos durante el proceso de fulfillment. En esta página, verás dos pestañas:

- [Recolección y empaquetado](#insights-recoleccion-y-empaquetado)
- [Operación](#insights-operacion)

<div class="alert alert-warning">
Para poder acceder a <b>Insights</b>, es necesario tener un perfil de usuario de administrador en VTEX Fulfillment Admin, que es diferente de los <a href="https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc">roles</a>. Para más información, consulta la sección <a href="https://help.vtex.com/es/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA#usuarios">Usuarios</a>.
</div>

### Insights: Recolección y empaquetado

El **Total de pedidos** es una métrica actualizada en tiempo real que proporciona información sobre todos los pedidos de un determinado periodo en comparación con otro. Puedes utilizar varios [filtros](#insights-filtros) para obtener diferentes resultados.

#### Insights: Filtros

Puedes combinar varios filtros para filtrar la información que deseas ver en las métricas, accediendo a `Filtros` en la parte superior de la página. Puedes filtrar por los siguientes criterios:

- Entregador
- Forma de entrega
- Transportadora
- Ciudad
- Seller

<div class = "alert alert-info">
El filtro <b>Seller</b> solo está disponible para las cuentas que operan como marketplace. Los <a href="https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa">sellers white label</a> no tienen esta opción de filtro <b>Insights</b>.
</div>

Además del **Total de pedidos**, hay una secuencia de métricas para obtener datos sobre _medios de pago_ y pedidos:

- Recolectados
- Enviados
- Entregados
- Cancelados

Puedes aplicar varios filtros para obtener diferentes resultados.

#### Insights: Rendimiento de categorías y productos

Debajo del **Total de pedidos**, encontrarás métricas sobre el número de pedidos, las unidades compradas y a qué categoría pertenecen. Puedes elegir agrupar por `Categorías` o `Productos`.

### Insights: Operación

En la pestaña **Operación**, verás el **flujo de pedidos** de Recolección y empaquetado, que mostrará la cantidad total de pedidos distribuidos por día en los últimos siete días. Cuanto más oscuro sea el tono de azul, más pedirás; cuanto más claro, menos.

<div class = "alert alert-info">
El flujo de <b>Recolección y empaquetado</b> se calcula considerando todos los pedidos de los últimos 7 días y los distribuye en horas, de 0 a 23. Aunque cambies el periodo a 15 días, por ejemplo, la visualización permanecerá fija considerando 7 días.
</div>

Debajo del **flujo de pedidos**, hay una métrica con pedidos filtrados por entregador. Verás información sobre:

- Pedidos
- Productos
- Productos rechazados
- Tasa de fulfillment
- Tiempo promedio

La página también proporciona métricas relacionadas con los siguientes temas:

- **Pedidos recolectados:** el número de pedidos recolectados en el periodo seleccionado.
- **Tasa de fulfillment:** el porcentaje de pedidos recolectados dentro del plazo mínimo de entrega.
- **Tiempo:** el tiempo promedio del proceso de recolección.
- **Motivos de rechazo:** la explicación de por qué se ha rechazado un producto.
- **Motivos de rechazo:** la explicación de por qué se ha reemplazado un producto.
- **Motivo del cambio de precio:** la explicación de por qué un producto ha sufrido un cambio de precio.

## Configuración

Para configurar **VTEX Pick y Pack** para su tienda, en tu Admin ve a **Apps > Fulfillment > Configuración.** Verás una página con las siguientes pestañas:

- [General](#configuracion-general)
- [Recolección](#configuracion-de-recoleccion)
- [Categorías](#configuracion-de-categorias)
- [Paquetes](#configuracion-de-paquetes)
- [Envío](#configuracion-de-envio)
- [Impresión](#configuracion-de-impresion)
- [Webhooks](#configuracion-de-webhook)

<div class="alert alert-warning">
Para poder acceder a <b>Configuración</b>, debes ser un <a href="https://help.vtex.com/es/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA#usuarios">usuario administrador de VTEX Fulfillment</a> o un usuario de atención al cliente.
</div>

### Configuración general

En esta pestaña, puedes configurar la tienda a la que vas a agregar **VTEX Pick and Pack**. Puedes elegir una tienda haciendo clic en el lápiz <i class="fas fa-pencil-alt"></i> en la parte superior de la página y seleccionando la tienda deseada.

Para configurar una tienda, sigue los pasos a continuación.

1. Rellena los campos junto al mapa con la información de la dirección de la tienda.
2. En **Información de contacto**, rellena los datos de la persona de contacto, si es necesario.
3. En **Horario laboral**, configura la hora de inicio y fin de los días de la semana en los que se puede realizar la recolección en la tienda.
4. En **Unidades de medida**, selecciona qué unidad será la predeterminada para medir la longitud de los ítems y paquetes, por ejemplo.
5. Haz clic en el botón `Guardar`.

### Configuración de recolección

En esta pestaña se configuran algunos de los principales aspectos y preferencias del proceso de recolección, como los motivos de rechazo y los [entregadores](#usuarios-y-license-manager-en-vtex-fulfillment).

Para ajustar la configuración de recolección, sigue los pasos a continuación.

1. En **Asignación de entregadores**, selecciona si la tienda asignará los entregadores manualmente (`manual`), por un [usuario administrador](#usuarios-y-license-manager-en-vtex-fulfillment) o automáticamente (`automático`), en función de la disponibilidad de los entregadores.
2. En **Ruta de empaquetado**, selecciona el momento en el que deseas que se inicie el proceso de empaquetado, que puede ser:
    - Después de la recolección
    - Después de la facturación
    - A partir de la facturación
3. En la **aplicación de recolección**, activa los botones relacionados con las preferencias de las actividades que los entregadores podrán ver y realizar a través de la aplicación móvil. No es obligatorio activarlos. Las opciones son:
    - Mostrar información del cliente
    - Permitir el cambio de precio
    - Permitir el reemplazo de productos
    - Permitir el rechazo de productos
    - Limitar la cantidad de recolección de ítems
    - Permitir el empaquetado
4. En **Motivos**, en _Motivos de reemplazo_, rellena el campo con el nombre de la opción que identificará un motivo de reemplazo válido y pulsa `Entrar`. Repite el proceso para agregar tantas etiquetas como quieras.
5. En _Motivos de cambio de precio_, rellena el campo con el nombre de la opción que identificará el motivo de los cambios y pulsa `Entrar`. Repite el proceso para agregar tantas etiquetas como quieras.
6. Rellena el campo _Límite de cambios_ con el número de cambios que se pueden realizar por pedido.
7. En **Orden de prioridad**, elige el nivel de prioridad en el nivel del árbol de categorías para ordenar los ítems en el proceso de recolección. Puedes elegir entre `1` (categorías principales) o `2` (categorías secundarias).
8. Haz clic en el botón `Guardar`.

### Configuración de categorías

En esta pestaña, encontrarás categorías y subcategorías que deben enumerarse según las prioridades del modelo de negocio de la tienda.

Las acciones que puedes realizar son:

- **Cambiar prioridad:** haz clic en la categoría y arrástrala a la posición deseada.
- **Eliminar categoría:** haz clic en el ícono de la papelera &lt;insert_icon> y luego en `Sí, eliminar`. Esta acción hará que la categoría desaparezca de la lista y aparezca junto a ella, bajo _Prioridad de la categoría/recolección_.
- **Agregar categoría:** si se ha eliminado una categoría, aparecerá en _Prioridad de la categoría/recolección_, y podrás agregarla a la lista haciendo clic sobre ella.

Después de cambiar la lista de prioridades, haz clic en `Guardar`.

### Configuración de paquetes

En esta pestaña, controlas los paquetes utilizados para entregar el pedido y puedes crear o eliminar un paquete.

Para crear un paquete, haz lo siguiente:

1. Haz clic en `Agregar nuevo`.
2. Introduce el nombre que identificará el paquete.
3. Rellena las medidas del paquete: altura, anchura y longitud, utilizando solo números.

  <div class = "alert alert-info">
La unidad de medida es la configurada en la pestaña General, en <b>Unidades de medida</b>.
</div>

4. Haz clic en `Agregar`.

Para eliminar un paquete, haz clic en la fila de ese paquete y, a continuación, haz clic en `Sí, eliminar`.

### Configuración de envío

En esta pestaña, asocias un servicio [Last Mile](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-last-mile--HN7WKV0xoq2ssVjsJlfzr) a tu tienda, lo que te permite seguir el status y la ubicación con actualizaciones en tiempo real, mientras tu flota interna de entregadores entrega los pedidos a los clientes.

Si el botón **Last Mile** está desactivado, no hay opciones de configuración. Para empezar a utilizar Last Mile, sigue los pasos a continuación.

1. Activa el botón haciendo clic sobre él.
2. En **Transportadora asociada**, selecciona el nombre de la transportadora.
3. Si no deseas activar la asignación automática de entregadores al crear servicios de envío, deja el botón desactiva y haz clic en `Guardar`.
4. Si deseas activar la asignación automática de entregadores, activa el interruptor `Asignación automática de entregadores`.
5. En _Tipo de asignación_, selecciona la regla de asignación para elegir los entregadores, que puede ser:
    - **Uno a la vez:** la notificación de servicio se envía al entregador que esté más cerca del punto de recogida. Si el primer entregador no acepta el servicio dentro del plazo de la solicitud, el servicio se enviará al siguiente entregador más cercano, y así sucesivamente. Si ningún entregador acepta la tarea, permanece sin asignar.
    - **Enviar a todos:** todos los entregadores disponibles y en la zona horaria del servicio reciben la notificación, con un límite de 500 entregadores. El servicio se asigna al primer entregador que lo acepte, y permanece sin asignar hasta que alguien lo acepte.
    - **Round robin:** dentro de un radio determinado, se realiza una asignación por turnos rotativos, o round robin — un algoritmo para programar y asignar recursos — al entregador. Puedes elegir las siguientes opciones:
        - Asignar servicios a usuarios desconectados
        - Reiniciar asignación si el servicio es rechazado
        - Priorizar entregadores sin servicios
        - Dar prioridad a los repartidores con plazos de entrega más cortos
    - **El más cercano:** se asigna la tarea al entregador disponible más cercano al punto donde se recogerá el pedido.
6. Rellena el campo _Expira en (segundos)_ con x, utilizando solo números.
7. Rellene el campo _Número de reintentos_ con x, utilizando solo números.
8. Haz clic en `Guardar`.

### Configuración de impresión

En esta pestaña se configuran las preferencias de [impresión](#imprimir-recibo-y-comprobante), organizadas en las siguientes secciones:

- **Recibo:** el recibo del pedido.
- **Etiqueta del paquete:** la etiqueta que aparece en los productos y que se puede escanear en el proceso de recolección.
- **Etiqueta de envío:** la etiqueta con la dirección de envío.

En cada una de esas secciones, hay un botón <i class="fas fa-toggle-off"></i> `Desactivado` que debe estar <i class="fas fa-toggle-on"></i> `Activado` para que la configuración sea válida.

Una vez que hayas terminado de definir la configuración de impresión, haz clic en `Guardar`.

### Configuración de webhook

En esta pestaña, puedes configurar un webhook para recibir notificaciones sobre los cambios dl status de los pedidos y obtener información sobre un pedido determinado.

<div class = "alert alert-info">
Para más información, consulta nuestra documentación de <a href="https://developers.vtex.com/docs/guides/vtex-pick-and-pack">VTEX Pick and Pack</a> para desarrolladores.
</div>

## Usuarios

En **VTEX Pick and Pack**, la página **Usuarios** permite gestionar los perfiles implicados en el proceso de fulfillment, denominados _usuarios_. Hay tres tipos de usuarios:

| **Usuario** | **Descripción** | **Permiso** |
| ---------- | ---------- | ---------- |
| Entregador | La persona responsable de la recolección. | <ul><li>Acceso a la aplicación, ya sea en versión móvil o web (no funciona sin conexión).</li><li>No tiene acceso al Admin.</li></ul> |
| Atención al cliente | El operador de la tienda que es responsable del pedido y tiene acceso al Admin. | <ul><li>Acceso a todos los pedidos en el Admin.</li><li>Seguir pedidos.</li><li>Comunicarse con los entregadores.</li></ul> |
| Admin | El rol de administrador permite comprobar los entregadores, gestionar todas las configuraciones y el flujo de pedidos, incluida la cancelación de pedidos, si es necesario. | Todos los permisos concedidos al usuario de atención al cliente, excepto: <ul><li>Gestionar todas las configuraciones.</li><li>Gestionar el flujo de pedidos, incluida la cancelación de pedidos.</li></ul> |

### Usuarios y License Manager en VTEX Fulfillment

El concepto de _usuario_ en **VTEX Pick and Pack** es diferente del significado común del término en VTEX. En **VTEX Fulfillment**, hay tres tipos de usuarios que participan en el proceso de fulfillment: entregador, atención al cliente y administrador. Generalmente, en VTEX, los usuarios están relacionados con [roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) y [características de License Manager](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

Para acceder a **VTEX Fulfillment**, los usuarios administradores y de atención al cliente deben tener permisos relacionados con las funciones de License Manager. Recomendamos [crear un rol](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) identificado como «_Admin de fulfillment», _que debe tener al menos los siguientes productos y recursos asociados:

| **Producto** | **Recursos asociados** |
| ---------- | ---------- |
| Insights | <ul><li>Insights metrics</li></ul> |
| License Manager | <ul><li>Get account by identifier</li><li>Obtener aplicaciones</li><li>Find user by email</li><li>View users with account access</li><li>View all admin users</li><li>Get resource by key</li><li>Get role</li><li>Get paged roles</li><li>Get paged users</li><li>Get admin status</li><li>Get accounts</li><li>Get accounts by host</li></ul> |

### Acciones en la página Usuarios

En la página **Usuarios**, puedes realizar las siguientes acciones:

- [Agregar un usuario entregador](#agregar-un-usuario-entregador)
- [Agregar un usuario de atención al cliente](#agregar-un-usuario-de-atencion-al-cliente)
- [Agregar un usuario administrador](#agregar-un-usuario-admin)
- [Editar usuario](#editar-usuario)
- [Generar clave API](#generar-clave-api)
- [Eliminar usuario](#eliminar-usuario)

#### Agregar un usuario entregador

Para crear un nuevo _entregador_, sigue los pasos a continuación:

1. En tu Admin VTEX, ve a **Apps > Fulfillment > Usuarios**.
2. En el menú superior <i class="fas fa-ellipsis-v"></i>, haz clic en `Agregar entregador`.
3. Rellena la siguiente información:
    - **Nombre:** el nombre completo del entregador.
    - **Email:** email del entregador.
    - **Usuario:** nombre de usuario que identificará el entregador.
    - **Contraseña:** la contraseña que necesitará el entregador para identificarse y autenticarse en la aplicación. La contraseña debe tener al menos:
        - Una letra mayúscula
        - Una letra minúscula
        - Un número
    - **Tiendas:** selecciona el entorno al que se asociará el entregador. Cada entorno puede tener múltiples [sellers white label](https://help.vtex.com/es/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa) asociados.
    - **Categorías:** selecciona hasta cuatro categorías relacionadas con los productos que recogerá el entregador.

  <div class = "alert alert-info">
Las categorías relacionadas con el entregador optimizan el algoritmo a la hora de determinar qué entregador recibirá el pedido. Sin embargo, no es una limitación: cualquier entregador puede ser asignado a servicios relacionados con todas las categorías.
</div>

4. Haz clic en `Guardar usuario`.

#### Agregar un usuario de atención al cliente

Solo los [usuarios administradores](#usuarios-y-license-manager-en-vtex-fulfillment) pueden crear nuevos _usuarios de atención al cliente_. Para ello, sigue los pasos a continuación:

1. En tu Admin VTEX, ve a **Apps > Fulfillment > Usuarios**.
2. En el menú superior <i class="fas fa-ellipsis-v"></i>, haz clic en `Agregar usuario de atención al cliente`.
3. En el campo de búsqueda, busca introduciendo el nombre, email o ID del usuario.
4. Haz clic en `Confirmar`.

#### Agregar un usuario Admin

Solo un [usuario administrador](#usuarios-y-license-manager-en-vtex-fulfillment) puede crear nuevos _usuarios de atención al cliente_. Para ello, sigue los pasos a continuación:

1. En tu Admin VTEX, ve a **Apps > Fulfillment > Usuarios**.
2. En el menú superior <i class="fas fa-ellipsis-v"></i>, haz clic en `Agregar administrador`.
3. En el campo de búsqueda, busca introduciendo el nombre, email o ID del usuario.
4. Haz clic en `Confirmar`.

#### Editar usuarios

Puedes editar cualquier tipo de usuario para cambiar la información a continuación.

- Nombre
- Contraseña
- Categorías
- Tienda

Para editar un usuario, sigue los pasos a continuación:

1. En tu Admin VTEX, ve a **Apps > Fulfillment > Usuarios**.
2. En la fila correspondiente al usuario que deseas editar, haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
3. Selecciona la opción `Editar`.
4. Cambia los campos deseados.
5. Introduce la contraseña.
6. Haz clic en `Guardar`.

#### Generar clave API

Los [usuarios administradores](#usuarios-y-license-manager-en-vtex-fulfillment) pueden generar claves API para utilizar las API de **VTEX Pick and Pack**. Para más información, consulta nuestra [documentación para desarrolladores](https://developers.vtex.com/docs/guides/vtex-pick-and-pack).

Para generar una clave API, sigue los pasos a continuación:

1. En tu Admin VTEX, ve a **Apps > Fulfillment > Usuarios**.
2. En la fila correspondiente a un usuario administrador, haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
3. Selecciona la opción `Editar`.
4. Haz clic en `Generar`.
5. Guarda la clave API en un lugar seguro.

  <div class="alert alert-danger">
La clave API solo se mostrará una vez. No podrás volver a acceder a esta información, así que debes asegurarte de guardarla en un lugar seguro.
</div>

6. Introduce la contraseña.
7. Haz clic en `Guardar`.

 #### Eliminar usuarios

Solo los usuarios administradores pueden eliminar otros usuarios. Esto se puede hacer siguiendo los pasos a continuación:

1. En tu Admin VTEX, ve a **Apps > Fulfillment > Usuarios**.
2. En la fila correspondiente al usuario que deseas editar, haz clic en el menú <i class="fas fa-ellipsis-v"></i>.
3. Selecciona la opción `Eliminar`.
4. Haz clic en `Guardar`.
