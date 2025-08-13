---
title: 'Cómo modificar pedidos'
id: 7btlG91rb6sHpW1dkd2kBw
status: PUBLISHED
createdAt: 2023-11-27T22:40:33.769Z
updatedAt: 2025-01-29T19:54:00.875Z
publishedAt: 2025-01-29T19:54:00.875Z
firstPublishedAt: 2023-11-28T15:16:50.272Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: how-to-modify-orders
legacySlug: como-modificar-pedidos-beta
locale: es
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

La funcionalidad [Modificar pedido](https://help.vtex.com/es/tutorial/como-funciona-modificar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ) brinda la posibilidad de editar un pedido de múltiples maneras, ya sea para atender las preferencias del cliente, abordar la falta de disponibilidad de productos u otras razones. 

Este artículo muestra las formas en que se puede modificar un pedido y describe cómo llevar a cabo estas acciones. Se estructura en las siguientes secciones:

* [Requisitos](#requisitos)
* [Tipos de modificaciones en los pedidos](#tipos-de-modificaciones-en-los-pedidos)
* [Acciones comunes](#acciones-comunes)
* [Errores de procesamiento](#errores-de-procesamiento)

> ⚠️ Para conocer las [características generales](https://help.vtex.com/es/tutorial/como-funciona-modificar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ#caracteristicas-generales) en escenarios de modificación de pedido, incluyendo reserva, actualización de stock y cuentas franquicia, o para comprender cuestiones de [precio, pago y factura](https://help.vtex.com/es/tutorial/como-funciona-modificar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ#cambios-de-precio), consulta el artículo [Cómo funciona Modificar pedido](https://help.vtex.com/es/tutorial/como-funciona-modificar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ).

## Requisitos

Existen algunas condiciones para la modificación de pedidos relacionadas con el status del pedido. Consulta los detalles a continuación.

### Status del pedido a modificar

Durante el [flujo del pedido](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196), el único status en el que **Modificar pedido** puede realizarse en el Admin VTEX es `preparando envío`. Para obtener información sobre modificaciones a través de API, consulta el artículo [Cómo funciona Modificar pedido](https://help.vtex.com/es/tutorial/como-funciona-modificar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ).

### Permiso en License Manager

Para que un usuario pueda modificar pedidos, su [rol](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) debe estar asociado con al menos uno de los siguientes [recursos de License Manager](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3):

* `Orders Full Access`
* `Change order`

## Tipos de modificaciones en los pedidos

Las principales modificaciones en los pedidos que se pueden realizar a través del Admin VTEX son: 

* **Agregar:** una cantidad de ítems o nuevos productos.
* **Remover:** una cantidad parcial o total de ítems.
* **Modificar peso:** posibilidad de modificar el peso de los ítems, aumentándolo o disminuyéndolo según necesidad.
* **Sustituir ítems:** permite reemplazar unos ítems por otros, incluyendo aquellos con precios basados en peso.
* **Modificar precio:** [modificar el valor total del pedido](https://help.vtex.com/es/tutorial/alterar-valor-total-do-pedido--2asq4BmxvSD8Tw9xpfZuMo).

Todas estas acciones se realizan a través de la [página de detalles del pedido](https://help.vtex.com/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), a la que se puede acceder de dos formas, descritas a continuación.

### Acceder al pedido desde la página Todos los pedidos

En el Admin VTEX, ve a **Pedidos >** [Todos los pedidos](https://help.vtex.com/es/tutorial/lista-de-pedidos-interface--2QTduKHAJMFIZ3BAsi6Pi), y haz clic en el pedido deseado, o ingresa **Todos los pedidos** en la barra de búsqueda de la parte superior de la página. A continuación, haz clic en el pedido deseado. Utiliza los filtros para refinar la búsqueda si es necesario.

### Acceder al pedido mediante la barra de búsqueda global

Los pedidos pueden buscarse desde cualquier sección del Admin VTEX, utilizando la barra de búsqueda situada en la parte superior de la página. Solo hay que seleccionar la opción `Pedidos` en la esquina derecha de la barra y utilizar cualquiera de los siguientes criterios:

* ID del pedido
* Nombre del cliente
* Email del cliente
* Documento del cliente 

Una vez en la página de detalles del pedido, puedes realizar las siguientes modificaciones:

* [Agregar ítems](#agregar-items)
* [Agregar nuevo producto](#agregar-nuevo-producto)
* [Remover ítems](#remover-items)
* [Remover producto](#remover-producto)
* [Sustituir ítems](#sustituir-items)
* [Modificar peso](#modificar-peso)

> ℹ️ Se puede realizar una sola modificación en el pedido o combinar varias a la vez. No hay un límite específico respecto a la cantidad de veces que el pedido puede modificarse. Para obtener más información, consulta el artículo [Cómo funciona Modificar pedido](https://help.vtex.com/es/tutorial/como-funciona-modificar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ).

### Agregar ítems

Para agregar uno o más ítems al pedido, sigue estos pasos:

1. En el Admin VTEX, accede a la página de detalles del pedido en **Pedidos >** [Todos los pedidos](#acceder-al-pedido-desde-la-pagina-todos-los-pedidos) o por la [barra de búsqueda global](#acceder-al-pedido-mediante-la-barra-de-busqueda-global).
2. En la sección **Facturación pendiente**, haz clic en `Modificar ítems`.
3. En la página **Gestionar ítems del pedido**, haz clic en la flecha hacia arriba <i class="fas fa-angle-up"></i> hasta alcanzar la cantidad que desees, o ingresa el número en el campo. Después, la página mostrará el precio y la cantidad anterior tachados y aparecerá el siguiente mensaje: _"Ítem editado"_. 

    ![change_order_adding_items_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/orders/all-orders/como-modificar-pedidos_1.png)

4. Revisa los [detalles del valor modificado](#consultar-detalles-de-los-valores-modificados). Si es necesario, puedes [revertir una modificación](#deshacer-acciones).
5. Haz clic en `Revisar y aplicar`.
6. En el campo **Motivo de las modificaciones**, describe brevemente el motivo por el que se modifica el pedido. Si lo deseas, revisa nuevamente las modificaciones realizadas.
7. Haz clic en `Aplicar`. Aparecerá el siguiente mensaje de confirmación: _“Solicitud de modificación completada”._

Una vez hecho esto, serás redirigido a la página de detalles del pedido y en la sección **Facturación pendiente** puedes ver la nueva cantidad de ítems.

### Agregar nuevo producto

Para agregar uno o más productos al pedido, sigue estos pasos:

1. En el Admin VTEX, accede a la página de detalles del pedido en **Pedidos >** [Todos los pedidos](#acceder-al-pedido-desde-la-pagina-todos-los-pedidos) o por la [barra de búsqueda global](#acceder-al-pedido-mediante-la-barra-de-busqueda-global).
2. En la sección **Facturación pendiente**, haz clic en `Modificar ítems`.
3. En la página **Gestionar ítems del pedido**, haz clic en <i class="fas fa-plus"></i> `Agregar ítem`.
4. En la página **Agregar ítems**, en la <i class="fas fa-search"></i> barra de búsqueda, ingresa el nombre del producto deseado.
5. Haz clic en <i class="fas fa-plus"></i> `Seleccionar`. Puedes añadir tantos productos como quieras, solo tienes que repetir el procedimiento. Con cada nueva adición, aparece el siguiente mensaje: _"Ítem seleccionado"_.
  > Si haces clic en el nombre del producto, se te redirigirá a la página del producto en el sitio web de la tienda.
6. A continuación, haz clic en `Agregar ítems seleccionados`. Aparecerá el siguiente mensaje: _"Ítems agregados"_.

    ![change_order_adding_product_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/orders/all-orders/como-modificar-pedidos_2.png)

4. Revisa los [detalles del valor modificado](#consultar-detalles-de-los-valores-modificados). Si es necesario, puedes [revertir una modificación](#deshacer-acciones).
8. Haz clic en `Revisar y aplicar`.
9. En el campo **Motivo de las modificaciones**, describe brevemente el motivo por el que se modifica el pedido. Si lo deseas, revisa nuevamente las modificaciones realizadas.
10. Haz clic en `Aplicar`. Aparecerá el siguiente mensaje de confirmación: _“Solicitud de modificación completada”_.

Una vez hecho esto, serás redirigido a la página de detalles del pedido y en la sección **Facturación pendiente**, puedes ver los nuevos productos agregados.

### Remover ítems

Para remover uno o más ítems del pedido, sigue estos pasos:

1. En el Admin VTEX, accede a la página de detalles del pedido en **Pedidos >** [Todos los pedidos](#acceder-al-pedido-desde-la-pagina-todos-los-pedidos) o por la [barra de búsqueda global](#acceder-al-pedido-mediante-la-barra-de-busqueda-global).
2. En la sección **Facturación pendiente**, haz clic en `Modificar ítems`.
3. En la página **Gestionar ítems del pedido**, haz clic en la flecha hacia abajo <i class="fas fa-angle-down"></i> hasta alcanzar la cantidad que desees, o ingresa el número en el campo. Después, la página mostrará el precio y la cantidad anterior tachados y aparecerá el siguiente mensaje: _“Ítem editado”_.

    ![change_order_removing_items_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/orders/all-orders/como-modificar-pedidos_3.png)

4. Revisa los [detalles del valor modificado](#consultar-detalles-de-los-valores-modificados). Si es necesario, puedes [revertir una modificación](#deshacer-acciones).
5. A continuación, haz clic en `Revisar y aplicar`.
6. En el campo **Motivo de las modificaciones**, describe brevemente el motivo por el que se modifica el pedido. Si lo deseas, revisa nuevamente las modificaciones realizadas.
7. Haz clic en `Aplicar`. Aparecerá el siguiente mensaje de confirmación: _“Solicitud de modificación completada”_.

Una vez hecho esto, serás redirigido a la página de detalles del pedido y, en la sección **Pendientes de facturación**, puedes ver la cantidad de ítems actualizada.

### Remover producto

Para remover un producto de un pedido, sigue estos pasos:

1. En el Admin VTEX, accede a la página de detalles del pedido en **Pedidos >** [Todos los pedidos](#acceder-al-pedido-desde-la-pagina-todos-los-pedidos) o por la [barra de búsqueda global](#acceder-al-pedido-mediante-la-barra-de-busqueda-global).
2. En la sección **Facturación pendiente**, haz clic en `Modificar ítems`.
3. En la página **Gestionar ítems del pedido**, haz clic en el ícono de la papelera <i class="far fa-trash-alt"></i> `Remover ítem`. Aparecerá el siguiente mensaje de confirmación: _“Ítem removido”_.

    ![change_order_removing_product_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/orders/all-orders/como-modificar-pedidos_4.png)

4. Revisa los [detalles del valor modificado](#consultar-detalles-de-los-valores-modificados). Si es necesario, puedes [revertir una modificación](#deshacer-acciones).
5. A continuación, haz clic en `Revisar y aplicar`.
6. En el campo **Motivo de las modificaciones**, describe brevemente el motivo por el que se modifica el pedido. Si lo deseas, revisa nuevamente las modificaciones realizadas.
7. Haz clic en `Aplicar`. Aparecerá el siguiente mensaje de confirmación: _“Solicitud de modificación completada”_.

Una vez hecho esto, serás redirigido a la página de detalles del pedido y, en la sección **Facturación pendiente,** puedes ver el pedido sin el producto removido.

### Sustituir ítems

Para sustituir ítems del pedido, sigue los pasos a continuación:

1. En el Admin VTEX, accede a la página de detalles del pedido en **Pedidos >** [Todos los pedidos](#acceder-al-pedido-desde-la-pagina-todos-los-pedidos) o por la [barra de búsqueda global](#acceder-al-pedido-mediante-la-barra-de-busqueda-global).
2. En la sección **Facturación pendiente**, haz clic en `Modificar ítems`.
3. En la página **Gestionar ítems del pedido**, en la fila del producto que deseas sustituir, haz clic en el menú <i class="fas fa-ellipsis-v"></i> y selecciona <i class="fas fa-pencil-alt"></i> `Sustituir ítem`.
4. En la página **Sustitución de productos**, en la <i class="fas fa-search"></i> barra de búsqueda, escribe el nombre del producto que sustituirá al anterior.
5. Haz clic en <i class="fas fa-plus"></i> `Seleccionar`. Aparecerá el siguiente mensaje: _"Ítem seleccionado"_. Si haces clic en el nombre del producto, se te redirigirá a la página del producto en el sitio web de la tienda.
6. A continuación, haz clic en `Aplicar`. Aparecerá el siguiente mensaje: _“Modificaciones aplicadas”_.
7. Revisa los [detalles del valor modificado](#consultar-detalles-de-los-valores-modificados). Si es necesario, puedes [revertir una modificación](#deshacer-acciones).
8. Haz clic en `Revisar y aplicar`.
9. En el campo **Motivo de las modificaciones**, describe brevemente el motivo por el que se modifica el pedido. Si lo deseas, revisa nuevamente las modificaciones realizadas.
10. Haz clic en `Aplicar`. Aparecerá el siguiente mensaje de confirmación: _“Solicitud de modificación completada”_.

Una vez hecho esto, serás redirigido a la página de detalles del pedido y en la sección **Facturación pendiente** puedes ver el ítem que sustituyó al anterior producto.

### Modificar peso

Para modificar el peso de un ítem, sigue estos pasos:

1. En el Admin VTEX, accede a la página de detalles del pedido en **Pedidos >** [Todos los pedidos](#acceder-al-pedido-desde-la-pagina-todos-los-pedidos) o por la [barra de búsqueda global](#acceder-al-pedido-mediante-la-barra-de-busqueda-global).
2. En la sección **Facturación pendiente**, haz clic en `Modificar ítems`.
3. En la página **Gestionar ítems del pedido**, en la fila del producto deseado, ingresa el nuevo peso en el campo. La unidad de medida especificada se basa en los ajustes del Catálogo. 
4. Una vez hecho esto, en la página se muestra el precio y el peso anterior tachados, seguido del mensaje _“Ítem editado”_.

    ![change_order_changing_weight_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/orders/all-orders/como-modificar-pedidos_5.png)

5. Revisa los [detalles del valor modificado](#consultar-detalles-de-los-valores-modificados). Si es necesario, puedes [revertir una modificación](#deshacer-acciones).
6. Haz clic en `Revisar y aplicar`.
7. En el campo **Motivo de las modificaciones**, describe brevemente el motivo por el que se modifica el pedido. Si lo deseas, revisa nuevamente las modificaciones realizadas.
8. Haz clic en `Aplicar`. Aparecerá el siguiente mensaje de confirmación: _“Solicitud de modificación completada”_.

Una vez hecho esto, serás redirigido a la página de detalles del pedido y, en la sección **Facturación pendiente,** puedes ver el peso actualizado del ítem.

## Acciones comunes

Existen acciones comunes a la hora de realizar cualquier [tipo de modificación](#tipos-de-modificaciones-en-los-pedidos) en el pedido. Puedes consultarlas en esta sección:

### Consultar detalles de los valores modificados

En la página **Gestionar ítems del pedido**, al modificar el pedido, el valor total se actualiza automáticamente en **Valor total**, en la parte inferior de la página. Además, puedes ver las modificaciones de precio resultantes de cada operación realizada. Para ver los detalles de los valores, haz clic en la flecha <i class="fas fa-angle-up"></i> situada junto al valor total.

### Deshacer acciones

En la página **Gestionar ítems del pedido**, puedes deshacer las modificaciones si así lo deseas. Haz clic en el ícono de flecha curva `Deshacer acción`. Una vez hecho esto, aparecerá un mensaje de confirmación: _"Modificación deshecha"_, y la acción se habrá revertido.

![change_order_undoing_actions_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/orders/all-orders/como-modificar-pedidos_6.png)

## Errores de procesamiento

En cualquier tipo de [modificación de pedido](#tipos-de-modificaciones-en-los-pedidos), en la página **Gestionar ítems del pedido**, al hacer clic en `Revisar y aplicar`, es posible que la modificación no se apruebe. En este caso, serás redirigido nuevamente a la página de detalles del pedido. Algunos de los motivos por los que se deniegan los cambios son:

* **Ítem no disponible:** el SKU puede [no aparecer en el sitio web de la tienda](https://help.vtex.com/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382) o no estar disponible por un error o falta de configuración de catálogo, precio o logística. 
* **Stock insuficiente:** la cantidad de ítems agregados o sustituidos en la modificación puede ser superior a la cantidad de ítems disponibles para la venta en tu [stock](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139).

Si la configuración del catálogo y del stock es correcta y los intentos de modificar los pedidos siguen dando error, podría tratarse de un problema de procesamiento de la plataforma. En este caso, ponte en contacto con [nuestro equipo de soporte](https://help.vtex.com/es/support).

