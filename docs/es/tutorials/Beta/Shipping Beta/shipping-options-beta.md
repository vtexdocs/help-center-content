---
title: 'Shipping Options (Beta)'
id: 7gsdck3519Z3VPqzwFFHJL
status: ARCHIVED
createdAt: 2022-05-27T15:35:44.505Z
updatedAt: 2023-08-14T17:28:57.629Z
publishedAt: 
firstPublishedAt: 2022-05-31T18:53:28.695Z
contentType: tutorial
productTeam: Others
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: shipping-options-beta
locale: es
legacySlug: delivery-options-beta
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ Esta funcionalidad se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarla. Si tienes alguna duda, ponte en contacto con <a href= "https://support.vtex.com/hc/es-419/requests">nuestro Soporte</a>.

**Opciones de envío** es la funcionalidad que permite a los administradores de la tienda crear, editar y gestionar las opciones de envío desde un mismo lugar y garantizar mayor simplicidad y eficiencia en la gestión de su operación. El término «envío» es la forma general de referirse a la entrega o recogida de un pedido. Al configurar cada opción de envío, el administrador de la tienda determina:

- El nombre de la opción de envío que se mostrará al consumidor.
- El tipo de envío, si es entrega o recogida.
- El plazo de envío.
- La región geográfica a la que se aplicará la opción de envío.
- La tarifa de envío que se cobrará al consumidor.

La interfaz **Opciones de envío** permite al administrador de la tienda definir y controlar todas las opciones de envío que se muestran al consumidor en el checkout. Esta funcionalidad permitirá separar el valor cobrado a los consumidores del costo logístico registrado en las [plantillas de envío](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127).

Sin embargo, el objetivo de las **Opciones de envío** no es sustituir las [políticas de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) ni las plantillas de envío. Las plantillas de envío se utilizarán para escoger la transportadora que entregará el pedido. Dicha selección es determinada por el [Order Allocation Algorithm](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA).

## Precios de las tarifas de envío

Con las **Opciones de envío**, se separa lo que se cobra a los consumidores por el envío del pedido y el costo de envío para el administrador de la tienda, ya que se pueden configurar diferentes reglas de precios para la tarifa de envío.

>ℹ️ Para que la selección de las transportadoras para el envío se realice correctamente, se debe ingresar en las plantillas de envío el costo real que las transportadoras cobran por realizar el envío.

La funcionalidad **Opciones de envío** permite al administrador de la tienda configurar la tarifa de envío a partir de:

- Valores fijos
- Valores basados en el valor total del carrito
- Valores basados en el peso de los ítems
- Valores del costo de transporte

Cabe destacar que en la fase beta, las **Opciones de envío** funcionan en paralelo con las promociones de envío del módulo [Promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N).

## Selección de sellers

En **Opciones de envío**, la selección de sellers busca las opciones que ofrecen el menor costo para el administrador de la tienda. El administrador determina el plazo máximo en que el seller debe ser capaz de atender el pedido y, en la experiencia de checkout, el consumidor ve el plazo de envío real, o sea, el plazo de entrega de las transportadoras.

En cada opción de envío, el administrador de la tienda registra un SLA (_Service Level Agreement_), es decir, un acuerdo de servicio con condiciones de envío para el pedido. Por ejemplo, un administrador de la tienda registra dos opciones de envío:

- Una llamada `Entrega el mismo día`, con un SLA de envío de pedido el mismo día.
- Una llamada `Estándar`, con un SLA de envío de pedido de hasta 5 días laborales.

El algoritmo de la plataforma VTEX, [Order Allocation Algorithm](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA), analiza las combinaciones de tiendas y centros de distribución que dan servicio a cada una de las opciones de envío y busca seleccionar las que tienen el menor costo de envío. En el ejemplo, el resultado es una combinación del menor costo de envío el mismo día y otra combinación del menor costo de envío en hasta 5 días laborales.

>ℹ️ Con las **Opciones de envío**, existe la garantía de que siempre se presentará al consumidor una opción de envío disponible para la ubicación, lo que antes no ocurría. La única excepción es si no hay un seller ni política de envío que cumpla las condiciones de una opción de envío. En este caso, no se mostrará ninguna opción de envío al consumidor en el checkout.

## Acciones y configuración

Las acciones disponibles en las **Opciones de envío** son:

- [Agregar opción de envío](https://help.vtex.com/es/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL#agregar-opcion-de-envio)
- [Editar opción de envío](https://help.vtex.com/es/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL#editar-opcion-de-envio)
- [Ver lista de opciones de envío](https://help.vtex.com/es/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL#ver-lista-de-opciones-de-envio)

## Agregar opción de envío

Para agregar una opción de envío, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Inventario y envío > Opciones de envío**.
    > Si tu tienda utiliza el [Nuevo Admin VTEX](https://content.vtex.com/join-new-admin-beta-program-es/), acceda a **Configuración de la tienda** <i class="fas fa-cog" alt="engrenagem azul"></i> **> Envío > Opciones de envío**.
2. Haz clic en `+ Crear opción de envío`.
3. Ingresa el nombre de identificación de la opción de envío. Este nombre será visible para los consumidores en la experiencia de compra.
4. Selecciona el tipo de envío: `Entrega` para entregar el pedido en la dirección del consumidor o `Punto de recogida` para que el consumidor recoja el pedido en un [punto de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R).
5. Selecciona una o más zonas de envío en las que la opción de envío será válida. La zona de envío es una delimitación geográfica que establece la región en la que son válidas determinadas opciones de envío. Puedes utilizar la barra de búsqueda para buscar usando el nombre de la zona de envío.
6. Determina el intervalo de tiempo para el plazo de envío. Puedes escoger entre las siguientes opciones:
    - **Días laborables:** define un intervalo de tiempo en días. Por ejemplo, de 3 a 5 días laborales.
    - **Tiempo transcurrido:** define el tiempo total en días, horas y/o minutos.
    - **El mismo día:** no hay ajustes adicionales y la opción se ofrecerá siempre que haya al menos una tienda y transportadora que puedan entregar el mismo día, independientemente de la hora.
7. Selecciona la regla de precios de la tarifa de envío que se aplicará con base en uno de los siguientes criterios:
    - **Costo:** la tarifa varía según el origen del producto y los costos de la transportadora y el consumidor paga la tarifa completa.
    - **Por valor del pedido:** la tarifa es relativa al precio del pedido y se pueden establecer uno o más rangos de precio. Se agregará un nuevo rango siempre que el valor máximo del intervalo sea diferente de Ilimitado.
    - **Por peso:** la tarifa varía según el peso del paquete y se pueden definir uno o más rangos de precio por kilogramo (kg). Se agregará un nuevo rango siempre que el valor máximo del intervalo sea diferente de Ilimitado.
    - **Markup:** la tarifa es el resultado de la suma del costo de envío más un porcentaje sobre ese costo.
    - **Envío gratis:** libre de costo para el consumidor y no requiere configuración adicional.
8. Haz clic en el botón `Guardar`.

![opcoes_envio_criacao_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Beta/Shipping%20Beta/shipping-options-beta_1.png)

## Editar opción de envío

Puedes editar la configuración de una opción de envío siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Inventario y envío > Opciones de envío**.
    > Si tu tienda utiliza el [Nuevo Admin VTEX](https://content.vtex.com/join-new-admin-beta-program-es/), acceda a **Configuración de la tienda** <i class="fas fa-cog" alt="engrenagem azul"></i> **> Envío > Opciones de envío**.
2. Identifica la opción de envío deseada. Puedes utilizar la barra de búsqueda para filtrar por nombre.
3. Haz clic en el ícono de menú <i class="fas fa-ellipsis-v"></i>.
4. Selecciona la opción `Editar`.
5. Realiza los cambios deseados en el formulario de la opción de envío.
6. Haz clic en el botón `Guardar`.

Además de editar una opción de envío, desde el ícono de menú <i class="fas fa-ellipsis-v"></i> puedes realizar las siguientes acciones:

- **Duplicar:** crea una opción de envío idéntica, lo que puede facilitar la creación de variaciones.
- **Desactivar/Activar:** el status de la opción de envío cambia a `inactivo` y deja de aparecer en el checkout. Puedes reactivar una opción de envío en cualquier momento.
- **Eliminar:** la opción de envío se elimina permanentemente y no se puede recuperar.

## Ver lista de opciones de envío

Después de configurar las opciones de envío, aparecerán en una lista en **Configuración de la tienda > Envío > Opciones de envío**, según se muestra en la siguiente imagen:

![opcoes_envio_listagem_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Beta/Shipping%20Beta/shipping-options-beta_2.png)

La tabla siguiente contiene la descripción de las columnas mostradas:

| **Columna** | **Descripción** |
| ---------- | ---------- |
| Nombre | Nombre que identifica la opción de envío y que se muestra al consumidor en la experiencia de compra. |
| Tipo | Tipo de envío, ya sea entrega o recogida. |
| Tarifa | Regla de precio de la opción de envío. La tarifa de envío se puede cobrar según: <ul><li><b>Costo:</b> la tarifa varía según el origen del producto y los costos de la transportadora.</li><li><b>Por pedido:</b> la tarifa es relativa al precio del pedido y se pueden establecer uno o más rangos de precio.</li><li><b>Por peso:</b> la tarifa varía según el peso del paquete y se pueden definir uno o más rangos de precio por kilogramo (kg) para determinar una referencia de peso promedio y máximo para cada rango.</li><li><b>Envío gratis:</b> libre de costo para el consumidor y no requiere configuración adicional.</li><li><b>Markup:</b> la tarifa se define añadiendo un valor porcentual al costo de envío.</li></ul> |
| Plazo | Periodo en el que se debe realizar el envío, ya sea el mismo día o después de un intervalo de tiempo. |
| Zonas | Delimitación geográfica a la que servirá la operación, denominada zona de envío. |
| Status | Puede ser `Activo`, cuando la opción de envío está disponible, o `Inactivo`, si la opción se ha desactivado temporalmente. |
