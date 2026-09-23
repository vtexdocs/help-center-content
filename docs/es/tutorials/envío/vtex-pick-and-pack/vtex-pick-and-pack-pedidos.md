---
title: 'VTEX Pick and Pack: Pedidos'
id: 3rGbJlyedHdbWjvZ52p95b
status: PUBLISHED
createdAt: 2023-12-14T17:26:02.135Z
updatedAt: 2026-06-26T00:00:00.000Z
publishedAt: 2024-01-05T17:31:16.218Z
firstPublishedAt: 2023-12-19T15:00:12.093Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-orders
legacySlug: vtex-pick-and-pack-pedidos
locale: es
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

**Pedidos** es la página que muestra la información de los pedidos creados y gestionados por [VTEX Pick and Pack](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack). Está disponible en el Admin VTEX a través de **Envío > Pick and Pack > Pedidos** y permite realizar las siguientes acciones:

- [Consultar pedidos](#consultar-pedidos)
- [Buscar pedidos](#buscar-pedidos)
- [Filtrar pedidos](#filtrar-pedidos)

![pick-and-pack-pedidos-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_1.png)

La página muestra la siguiente información en una tabla:

| Campo de la tabla    | Descripción                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Status               | Etapa del proceso de fulfillment del pedido.                                                                                 |
| ID del pedido        | Número de identificación del pedido. También indica la fecha de creación del pedido.                         |
| Facturas             | Estado de facturación del pedido. Valores posibles: **Facturado** y **No facturado**.        |
| Ítems                | Número de ítems que componen el pedido.                                                                                      |
| Envío                | Tipo de envío del pedido. Valores posibles: **Entrega al cliente** y **Recogida en tienda**. |
| Pago                 | Medio de pago utilizado para realizar el pedido.                                                                             |
| Instalaciones        | Indica la tienda o el centro de distribución responsable del alistamiento y preparación del pedido.                          |
| Tags                 | Tags relacionadas con la venta del pedido, como UTM o cupones.                                                               |
| Fecha de vencimiento | Plazo de entrega o recogida del pedido.                                                                                      |

## Consultar pedidos

Puedes acceder a información más detallada sobre cada pedido haciendo clic en el pedido correspondiente en la tabla.

![pick-and-pack-pedidos-2-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_2.png)

Al seleccionar el pedido deseado, tendrás acceso a la siguiente información:

- **Resumen del pedido**: muestra el ID, la secuencia, el status actual, el tiempo de alistamiento y la fecha estimada de entrega.
- **Ítems**: lista de ítems que componen el pedido. Además, puedes hacer clic en **Hoja de trabajo** para acceder a información más detallada sobre el mismo.
  **Observaciones**: muestra las observaciones registradas en el pedido.
- **Flujo del pedido**: indica visualmente la etapa actual del proceso de fulfillment dentro de VTEX Pick and Pack, que tiene un flujo operativo propio, independiente del flujo del pedido en el Order Management System (OMS).
- **Paquete(s)**: muestra la información relacionada con los paquetes generados para envío, cuando corresponde. En la esquina superior de la ventana del paquete, haz clic en (<i class="fas fa-ellipsis-v" aria-hidden="true"></i>) para abrir el menú de acciones:

  - **Imprimir**: genera la etiqueta del paquete para el proceso de envío.
  - **Definir ubicación**: permite asociar una ubicación física al paquete para el control logístico. Al seleccionar esta opción, se muestra la pantalla de ubicación del paquete, en la que puedes:
    - Ver la **Instalación** responsable del paquete.
    - Ingresar o escanear el **código de ubicación (BIN)** en el campo disponible.
    - Hacer clic en `Escanear` para capturar el código con un lector.
    - Hacer clic en `Guardar` para registrar la ubicación del paquete.

## Buscar pedidos

Puedes buscar un pedido utilizando la barra de búsqueda. Ingresa el ID del pedido en la barra de búsqueda, por ejemplo `SLR-1341470502250-01`.

## Filtrar pedidos

Puedes refinar la búsqueda y la vista de pedidos. Filtra los pedidos utilizando las siguientes opciones:

- **Fecha de creación:** selecciona la fecha de creación del pedido.
- **Fecha de entrega:** selecciona la fecha de entrega.
- **Status del pedido:** selecciona uno o más status operativos del pedido.
- **Categorías:** selecciona la categoría en la que están los ítems del pedido.
- **Medios de pago:** selecciona el medio de pago utilizado en el pedido.
- **Estrategia de envío:** selecciona la estrategia de envío utilizada en el pedido.
- **Tipo de envío:** selecciona el tipo de envío utilizado en el pedido.
- **Instalaciones**: selecciona una o más unidades responsables del procesamiento del pedido.

## Configurar remoción automática de pedidos facturados

En la sección **Configuración** de Pick and Pack, puedes definir el comportamiento de los pedidos que cambian a Facturado en el OMS después de descargarse en la aplicación.

Si activas esta opción, se removerán automáticamente de la aplicación los pedidos que:

- Ya fueron descargados en Pick and Pack.
- Aún no se procesaron.
- Cambien a **Facturado** en el OMS antes de la etapa de preparación.

Para configurar esta regla sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Pedidos**, haz clic en `General`.
3. En la sección **Si un pedido cambia a Facturado en el OMS**, activa la opción **Remover de Pick and Pack**.
4. Haz clic en `Guardar`.

![pick-and-pack-pedidos-3-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_3.png)