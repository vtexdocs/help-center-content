---
title: 'VTEX Pick and Pack: Hojas de trabajo'
createdAt: 2024-01-03T18:38:05.781Z
updatedAt: 2026-08-21T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-worksheets
locale: es
hidden: false
---

**Hojas de trabajo** es la página del Admin VTEX que permite hacer seguimiento en tiempo real de las hojas de trabajo utilizadas por los alistadores para agrupar y alistar los ítems de los pedidos. Una hoja de trabajo puede reunir uno o varios pedidos, que se procesan mediante el flujo de Pick and Pack de manera simultánea. Para abrir la página, en el Admin VTEX, accede a **Envío > Pick and Pack > Hojas de trabajo**.

![Página Hojas de trabajo](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_1.png)

Este artículo se divide en las siguientes secciones:

- [Hacer seguimiento de hojas de trabajo](#hacer-seguimiento-de-hojas-de-trabajo)
- [Seleccionar instalaciones](#seleccionar-instalaciones)
- [Buscar hoja de trabajo](#buscar-hoja-de-trabajo)
- [Filtrar hojas de trabajo](#filtrar-hojas-de-trabajo)
- [Crear hoja de trabajo](#crear-hoja-de-trabajo)
- [Consultar detalles de la hoja de trabajo](#consultar-detalles-de-la-hoja-de-trabajo)
- [Gestionar hoja de trabajo](#gestionar-hoja-de-trabajo)
- [Acceder a herramientas de seguimiento](#acceder-a-herramientas-de-seguimiento)

## Hacer seguimiento de hojas de trabajo

Las hojas de trabajo están organizadas en columnas según la etapa en que se encuentran. El encabezado de cada columna indica el número de hojas de trabajo en la etapa correspondiente:

- **Fijado:** hojas de trabajo fijadas en la página para seguimiento prioritario.
- **Pendientes:** hojas de trabajo que esperan o que tienen el alistamiento de ítems en curso.
- **A empacar:** hojas de trabajo con el alistamiento completado, que están en espera de empaque.
- **Completado:** hojas de trabajo con la preparación finalizada.
- **Cancelado:** hojas de trabajo canceladas antes de completarse.

Cada hoja de trabajo se presenta en una tarjeta con la siguiente información:

| Información                    | Descripción                                                                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **ID de la hoja de trabajo**   | Identificador de la hoja de trabajo en la plataforma.                                                            |
| **Status**                     | Etapa actual de la hoja de trabajo, como **Pendiente**, **A empacar** o **Completado**.                          |
| **Pedidos**                    | IDs de los pedidos agrupados en la hoja de trabajo.                                                              |
| **Fecha de inicio**            | Fecha y hora en que comenzó el alistamiento de los ítems.                                                        |
| **Plazo**                      | Fecha y hora límite para concluir la preparación de la hoja de trabajo.                                          |
| **Alistador**                  | Alistador responsable de la hoja de trabajo.                                                                     |
| **Instalación**                | [Instalación](https://help.vtex.com/es/docs/tutorials/gestionar-almacenes) en que se procesa la hoja de trabajo. |
| **Ya alistado** o **Empacado** | Progreso de la etapa actual, en unidades procesadas del total previsto.                                          |

![Tarjeta de hoja de trabajo](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_2.png)

Para consultar los datos completos de una hoja de trabajo, haz clic en la tarjeta correspondiente. Para más información, ve a [Consultar detalles de la hoja de trabajo](#consultar-detalles-de-la-hoja-de-trabajo).

## Seleccionar instalaciones

De manera predeterminada, la página muestra las hojas de trabajo de todas las instalaciones de tu operación. Para restringir la vista sigue los pasos a continuación:

1. Haz clic en `Cambiar instalaciones seleccionadas`.
2. Selecciona las instalaciones deseadas. Puedes usar el campo **Buscar** para encontrar una instalación por nombre.

## Buscar hoja de trabajo

Para localizar una hoja de trabajo específica, ingresa el ID de la hoja de trabajo o el ID de uno de los pedidos que la componen en el campo **Buscar**.

## Filtrar hojas de trabajo

Puedes mostrar solo las hojas de trabajo que contienen ítems de determinadas categorías del catálogo. Para filtrar esta vista sigue los pasos a continuación:

1. Haz clic en `Categorías`.
2. Selecciona las categorías deseadas. Puedes usar el campo **Buscar** para encontrar una categoría por nombre.
3. Haz clic en `Aplicar`.

Para remover el filtro y volver a mostrar todas las hojas de trabajo, haz clic en `Limpiar`.

## Crear hoja de trabajo

Al crear una hoja de trabajo, defines qué pedidos se alistarán en conjunto y quién realizará el alistamiento. No hay límite de pedidos por hoja de trabajo. Para agregar una hoja de trabajo sigue los pasos a continuación:

1. En la barra lateral, haz clic en **Pedidos**.
2. En la pestaña **Pedidos**, selecciona los pedidos que deseas agrupar. Cada pedido muestra la secuencia, el plazo, el tipo de envío, la instalación y la cantidad de ítems y unidades.
3. En **Asignar pedidos a la hoja de trabajo**, revisa el resumen de los pedidos seleccionados, con la cantidad de ítems, la cantidad de unidades y el tiempo estimado de preparación.

> ℹ️ Los pasos 4 y 5 son opcionales.

4. Para definir el responsable del alistamiento, haz clic en el ícono de edición <i class="fas fa-pen" aria-hidden="true"></i> del campo **Alistador** y selecciona el alistador deseado. De manera predeterminada, la asignación es **Automático**.
5. Activa la opción **Fijar nuevas hojas de trabajo** para mostrar la hoja de trabajo creada en la columna **Fijado**.
6. Haz clic en `Crear`.

![Acción para crear hoja de trabajo](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_3.png)

> ℹ️ La cantidad de pedidos por hoja de trabajo depende de las opciones **Pedido único** y **Pedido múltiple**, definidas en la página [VTEX Pick and Pack: Configuración](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-configuracion).

## Consultar detalles de la hoja de trabajo

Para abrir el panel de detalles, haz clic en el ícono de la esquina superior derecha de la hoja de trabajo deseada. El encabezado del panel muestra el ID y el status de la hoja de trabajo, y el cuerpo presenta la siguiente información:

| Información                | Descripción                                                                                                                      |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Instalación**            | [Instalación](https://help.vtex.com/es/docs/tutorials/gestionar-almacenes) en que se procesa la hoja de trabajo. |
| **Fecha de creación**      | Fecha y hora en que se creó la hoja de trabajo.                                                                  |
| **Fecha de inicio**        | Fecha y hora en que comenzó el alistamiento de los ítems.                                                        |
| **Pedidos**                | Cantidad de pedidos agrupados en la hoja de trabajo.                                                             |
| **Ítems**                  | Cantidad de ítems y de unidades a preparar.                                                                      |
| **Alistador**              | Alistador responsable de la hoja de trabajo.                                                                     |
| **Plazo**                  | Fecha y hora límite para concluir la preparación de la hoja de trabajo.                                          |
| **Ya alistado o Empacado** | Progreso del alistamiento o empaque, en unidades del total previsto.                                             |

![Detalles de la hoja de trabajo](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_4.png)

### Agregar tags

Las tags identifican hojas de trabajo con características en común, como el tipo de operación al que se refieren. Para agregar una tag, haz clic en `+` en el panel de detalles y selecciona la tag deseada. Puedes usar el campo **Buscar tags** para encontrar una tag por nombre.

> ℹ️ Las tags disponibles se registran en el campo **Tags de hoja de trabajo**, en la página [VTEX Pick and Pack: Configuración](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-configuracion).

### Pedidos

La pestaña **Pedidos** lista los pedidos que componen la hoja de trabajo. Para buscar un pedido ingresa el ID en el campo **Buscar**. Los ítems de cada pedido presentan la siguiente información:

- **EAN:** código de barras del ítem.
- **ID de ref.:** código de referencia del ítem en el catálogo.
- **SKU:** identificador del ítem en la plataforma.
- **Categorías:** categorías del catálogo a las que está asociado el ítem.

![Pestaña en la ventana modal de detalles de la hoja de trabajo](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_5.png)

### Aprobaciones

La pestaña **Aprobaciones** presenta las solicitudes de los alistadores que dependen de la autorización de un administrador para que el alistamiento de los ítems continúe.

> ℹ️ La pestaña **Aprobaciones** solo se muestra cuando la opción **Activar flujo de aprobaciones** está habilitada en la página [VTEX Pick and Pack: Configuración](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-configuracion).

## Gestionar hoja de trabajo

En el panel de detalles, haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> para acceder a las siguientes acciones:

- `Imprimir`: genera la lista de alistamiento de la hoja de trabajo.
- `Observaciones`: registra y consulta notas sobre la hoja de trabajo.
- `Pausar alistamiento`: interrumpe el alistamiento de los ítems.
- `Seleccionar alistador`: define el alistador responsable de la hoja de trabajo.

![Menú de acciones del panel de detalles](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_6.png)

> ℹ️ El contenido de la lista de alistamiento se define en la página [VTEX Pick and Pack: Configuración](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-configuracion), en la opción **Habilitar lista de alistamiento**.

### Agregar observación

Las observaciones registran información sobre la preparación de la hoja de trabajo, como una orientación para el alistador. Para agregar una observación sigue estos pasos:

1. Haz clic en `Observaciones`.
2. Ingresa la observación en el campo de texto.
3. Haz clic en `Agregar observación`.

### Pausar alistamiento

Al pausar el alistamiento, impides que el alistador continúe alistando los ítems de la hoja de trabajo. Para pausar el alistamiento sigue estos pasos:

1. Haz clic en `Pausar alistamiento`.
2. En el campo **Motivo**, selecciona el motivo de la pausa.
3. En el campo **Motivo de la pausa**, describe el motivo con más detalles.
4. Haz clic en `Confirmar`.

### Seleccionar alistador

Puedes asignar la hoja de trabajo a un alistador o cambiar el alistador responsable. Para seleccionar un alistador sigue estos pasos:

1. Haz clic en `Seleccionar alistador`.
2. Busca el alistador deseado. La lista muestra el nombre, el nombre de usuario, el último acceso y la cantidad de tareas asignadas a cada alistador. Puedes usar el campo **Buscar** para encontrar un alistador por nombre.
3. Haz clic en el alistador deseado.

## Acceder a herramientas de seguimiento

La barra lateral de la página reúne herramientas para hacer seguimiento de la operación de fulfillment:

- **Alistadores:** lista de los alistadores de la operación, con el último acceso y la cantidad de tareas asignadas a cada uno.
- **Pedidos:** pedidos disponibles para asignación a nuevas hojas de trabajo y devoluciones.
- **Inbox:** conversaciones entre el retailer y los alistadores sobre cada hoja de trabajo.
- **Alertas de tiempo:** hojas de trabajo que superaron el tiempo previsto para la etapa en que se encuentran.
- **Auditoría de ítems:** historial de los cambios realizados en los ítems durante la preparación de los pedidos.
- **Transferencias:** transferencias de ítems entre instalaciones.

### Inbox

En **Inbox** se organizan las conversaciones con los alistadores por hoja de trabajo. La etiqueta **Needs Support** identifica las hojas de trabajo en las que el alistador solicitó ayuda.

Para responder a un alistador haz clic en la conversación deseada y escribe el mensaje. También puedes enviar archivos, ubicaciones y mensajes de audio.

![Pantalla del Inbox con la lista de conversaciones por hoja de trabajo](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-ordens-de-servico_7.png)

> ℹ️ El **Inbox** depende de la opción **Permitir chat de soporte**, habilitada en la página [VTEX Pick and Pack: Configuración](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-configuracion).
