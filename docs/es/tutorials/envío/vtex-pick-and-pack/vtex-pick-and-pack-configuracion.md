---
title: 'VTEX Pick and Pack: Configuración'
createdAt: 2024-01-05T20:43:38.480Z
updatedAt: 2026-10-26T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-settings
locale: es
hidden: false
---

> ℹ️ **VTEX Pick and Pack** no se muestra como disponible en el Admin VTEX de forma predeterminada. Si deseas activar esta solución en tu tienda solicita su activación al equipo de Product Support de VTEX.

**Configuración** es una página del Admin VTEX que permite seleccionar los ajustes deseados para el funcionamiento de VTEX Pick and Pack en tu tienda. Los ajustes se distribuyen en las siguientes secciones:

* [Pedidos](#pedidos)
* [Hojas de trabajo](#hojas-de-trabajo)
* [Ítems](#items)
* [Automatización](#automatizacion)
* [Usuarios](#usuarios)
* [Integración](#integracion)

Además de las pestañas de **Configuración**, Pick and Pack utiliza la página **Ubicaciones de fulfillment**, donde puedes vincular los almacenes a las ubicaciones de fulfillment. Más información en [Ubicaciones de fulfillment](#ubicaciones-de-fulfillment).

## Pedidos

En esta sección puedes configurar los ajustes relacionados con los pedidos procesados por VTEX Pick and Pack.

![vtex-pick-and-pack-configuracion_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_1.png)

* **Descargar pedidos del OMS:** permite descargar pedidos del módulo [Pedidos](https://help.vtex.com/es/docs/tutorials/pedidos-vision-general) a Pick and Pack. Los pedidos solo se descargan cuando el almacén de los ítems está vinculado a una [ubicación de fulfillment](#ubicaciones-de-fulfillment).

### Filtros

> ℹ️ Los filtros se aplican solo a pedidos nuevos. Si no se configura ningún filtro, se descargarán todos los pedidos.

Estos son los filtros disponibles que determinan los pedidos que se descargarán:

* **Medios de pago:** medios de pago utilizados en los pedidos a exportar.
* **Métodos de envío:** métodos de envío utilizados en los pedidos a exportar.
* **Tipo de envío:** tipos de envío utilizados en los pedidos a exportar (`SHIP_FROM_STORE`, `PICKUP_IN_STORE` y `DRIVE_THRU`).
* **Tags del pedido:** restringe la descarga a los pedidos que tengan determinadas tags.
* **Políticas comerciales:** [políticas comerciales](https://help.vtex.com/es/docs/tutorials/como-funciona-una-politica-comercial) aplicadas en los pedidos a exportar.

### Enviar cambios al OMS

Esta opción permite enviar los cambios (reemplazos, rechazos o ajustes) realizados en los pedidos en preparación al módulo [Pedidos](https://help.vtex.com/es/docs/tutorials/pedidos-vision-general). Los cambios solo se envían al OMS si la hoja de trabajo de ese pedido ya está terminada y si no quedan ítems sin alistar ni sin empacar.

### Remoción automática de pedidos facturados

En la sección **Pedidos** puedes decidir qué hace VTEX Pick and Pack con un pedido ya descargado cuando ese pedido pasa a **Facturado** en el sistema de gestión de pedidos (OMS).

Para remover automáticamente los pedidos facturados de VTEX Pick and Pack sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En el menú lateral, en **Pedidos**, haz clic en **General**.
3. En la sección **Si un pedido cambia a Facturado en el OMS**, activa la opción **Remover de Pick and Pack**.
4. Haz clic en `Guardar`.

Con esta opción activada, VTEX Pick and Pack remueve automáticamente de la aplicación los pedidos que cumplen las siguientes condiciones:

- El pedido ya se descargó en VTEX Pick and Pack.
- El pedido aún no se ha procesado.
- El pedido cambió a **Facturado** en el OMS antes de la etapa de preparación.

Haz clic en `Guardar` para registrar los cambios realizados en la pestaña.

## Hojas de trabajo

En esta sección puedes configurar las opciones que se aplicarán a las [hojas de trabajo](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-hojas-de-trabajo) de tu tienda. Una hoja de trabajo consiste en un único pedido o en un conjunto de pedidos que serán procesados por el flujo de Pick and Pack simultáneamente.

### General

En esta pestaña eliges cómo se agrupan los pedidos en hojas de trabajo y qué recursos están disponibles para el alistador. Consulta a continuación la configuración disponible:

![vtex-pick-and-pack-configuracion_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_2.png)

* **Pedido único:** opción que limita cada hoja de trabajo a un solo pedido.
* **Múltiples pedidos:** opción que permite gestionar varios pedidos en una misma hoja de trabajo.
* **Tags de hojas de trabajo**: tags personalizadas que ayudan a identificar las hojas de trabajo. Las tags se pueden ver en la pantalla de [hojas de trabajo pendientes](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#hojas-de-trabajo-pendientes) en la aplicación móvil de Pick and Pack.
* **Permitir observaciones en la hoja de trabajo:** opción que permite que el alistador [agregue observaciones en la hoja de trabajo](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#hojas-de-trabajo-pendientes).
* **Permitir chat de soporte**: opción que habilita el chat entre el alistador y el retailer vía Admin VTEX.
* **Habilitar lista de alistamiento**: lista que proporciona al alistador la información necesaria de la hoja de trabajo para el alistamiento de los ítems. Esta información puede imprimirse en formato de etiqueta.

#### Etiqueta

Aquí eliges la información que se muestra en la lista de alistamiento, que se imprime y se incluye en el paquete del pedido.

* **Tamaño (cm):** formato impreso de la etiqueta.
* **Tamaño de fuente (px):** tamaño de fuente que se imprimirá en la etiqueta, en píxeles.
* **Margen izquierdo:** tamaño del margen izquierdo de la etiqueta en centímetros.
* **Margen derecho:** tamaño del margen derecho de la etiqueta en centímetros.
* **Margen superior:** tamaño del margen superior de la etiqueta en centímetros.
* **Margen inferior:** tamaño del margen inferior de la etiqueta en centímetros.
* **Mostrar IDs de pedidos:** opción que muestra los IDs de los pedidos en la etiqueta.
* **Separar ítems por pedidos:** opción que permite generar una etiqueta por pedido.
* **Mostrar información del cliente:** opción que incluye la información del cliente en la etiqueta.
* **Mostrar código de barras/QR de los paquetes:** opción que exhibe el código de barras o código QR en la etiqueta.
* **Código de barras/QR:** si la opción **Mostrar código de barras/QR de los paquetes** está activada, permite seleccionar si el código de barras con el número de pedido, el número de la hoja de trabajo o ambos figurará en la etiqueta.

Haz clic en `Guardar` para registrar los cambios realizados en la pestaña.

### Alistamiento

En esta pestaña determinas qué puede ver y hacer el alistador durante el alistamiento de los ítems, como reemplazar, rechazar o modificar ítems del pedido. Consulta a continuación la configuración disponible:

![vtex-pick-and-pack-configuracion_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_3.png)

* **Mostrar pestaña de información de pedidos:** opción que muestra la pestaña de información del pedido en la hoja de trabajo del alistador, tanto en el [Admin VTEX](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-hojas-de-trabajo) como en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#hojas-de-trabajo-pendientes).
* **Mostrar información del cliente por pedido:** opción que muestra la pestaña de información del cliente para el alistador.
* **Permitir observaciones en los ítems**: opción que permite al alistador [agregar observaciones en los ítems del pedido durante el alistamiento](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#hojas-de-trabajo-pendientes).
* **Pedir confirmación para alistar ítems:** opción que activa una validación adicional en la aplicación Pick and Pack, solicitando que el alistador confirme manualmente el alistamiento de cada ítem del pedido.
* **Activar flujo de aprobaciones:** opción que requiere la aprobación de un administrador para el alistamiento de los ítems.
* **Permitir agregar ítems:** opción que permite al alistador [agregar nuevos ítems durante el alistamiento](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#agregar-nuevos-productos-a-un-pedido).
* **Permitir reemplazo de ítems:** opción que permite al alistador [reemplazar ítems durante el alistamiento](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#reemplazar-items).
* **Motivos de reemplazo**: motivos de [reemplazo de ítems](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#reemplazar-items) que el alistador puede seleccionar en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile). Los motivos de reemplazo registrados no se traducen si el alistador elige otro idioma en la aplicación móvil de Pick and Pack.
* **Permitir rechazar ítems:** opción que permite que el alistador [rechace ítems durante el alistamiento](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#descartar-items).
* **Motivos de rechazo:** motivos de [rechazo de ítems](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#descartar-items) que el alistador puede seleccionar en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile). Los motivos de rechazo registrados no se traducen si el alistador elige otro idioma en la aplicación móvil de Pick and Pack.
* **Permitir cambios de precio de ítems:** opción que permite al alistador cambiar el precio de los ítems durante el alistamiento.
* **Motivos de cambio de precio**: motivos de cambio de precio que el alistador puede seleccionar en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile). Los motivos de cambio de precio registrados no se traducen si el alistador elige otro idioma en la aplicación móvil de Pick and Pack.
* **Límite de cambios de precio en ítems de pedidos**: número máximo de veces que puede modificarse el precio de los ítems en un pedido. 100% es el valor máximo que se puede agregar al precio original al modificarlo y \-100% el mínimo, ambos calculados sobre el valor original del ítem.
* **Permitir cambios en la cantidad de ítems**: opción que permite al alistador [cambiar la cantidad de los ítems durante el alistamiento](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#modificar-cantidad-de-producto).
* **Límite de cambios en la cantidad de ítems en pedidos:** número máximo de veces que puede modificarse la cantidad de ítems en un pedido. 100% es el valor máximo que se puede agregar a la cantidad original al modificarla y \-100% el mínimo, ambos calculados sobre la cantidad original del ítem.
* **Limitar cambios totales en el pedido:** opción que define cuánto puede variar el valor total del pedido cuando el alistador realiza modificaciones. 100% es el valor máximo que se puede agregar al valor final del pedido al modificarlo y \-100% el mínimo, ambos calculados sobre el valor original del pedido.
* **Límite de cambios a un pedido:** cantidad máxima de cambios (reemplazos, rechazos y nuevos ítems) que se pueden hacer en un pedido.

Haz clic en `Guardar` para registrar los cambios realizados en la pestaña.

### Empaque

En esta pestaña encontrarás los ajustes relacionados con la etapa de empaque de ítems del pedido.

#### General

En esta pestaña activas el proceso de empaque y configuras las opciones de empaque y de etiqueta de empaque. Consulta a continuación la configuración disponible:

![vtex-pick-and-pack-configuracion_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_4.png)![vtex-pick-and-pack-configuracoes_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_5.png)

* **Activar proceso de empaque:** opción que inicia el [flujo de empaque](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#empaque) a ser realizado por el alistador.
* **Activar informe de paquetes**: opción que permite mostrar un informe sobre los paquetes. Esta opción no está habilitada.
* **Activar etiquetas de empaque**: opción que permite generar etiquetas para el empaque de los pedidos y muestra la configuración de etiquetas en la página.
* **Opciones de empaque:** opciones de configuración para los embalajes que se utilizarán en el empaque. Las opciones son las siguientes:
  - **Sistema de medidas**: opción de unidades de medida, sistema métrico o imperial, para medir dimensiones y peso del empaque.
  - **Actualizar peso total**: opción que muestra un modal en la aplicación Pick and Pack para que el alistador ingrese el peso total del paquete. Si está desactivada, el modal no se muestra y el proceso de empaque se inicia.
* **Empaque personalizado**: opción que muestra en la aplicación Pick and Pack un formulario para que el alistador ingrese las dimensiones y el peso del empaque personalizado.
* **Sin empaque**: opción que permite el envío del pedido usando el propio empaque de los ítems.
  - **Utilizar dimensiones y peso del SKU:** opción que define que las dimensiones y peso del SKU se utilizarán para determinar las dimensiones y peso del empaque. Si el SKU no tiene esa información registrada, se mostrará el formulario para las dimensiones y el peso del empaque personalizado.
  - **Ingresar las dimensiones y el peso totales:** opción que muestra en la aplicación Pick and Pack un formulario para que el alistador ingrese las dimensiones y el peso del ítem.
* **Mostrar cantidad de paquetes**: opción que muestra la cantidad de paquetes en la etiqueta impresa.
* **Mostrar código de barras/QR del paquete**: opción que muestra un código de barras o un código QR generado a partir de la información del campo **Código de barras/QR**.
* **Mostrar información del pedido**: opción que muestra datos del pedido en la etiqueta impresa. En el campo **Pedidos** selecciona la información que deseas mostrar.
* **Mostrar información del cliente**: opción que muestra los datos del cliente en la etiqueta impresa. En el campo **Cliente** selecciona la información que deseas mostrar.
* **Mostrar información de envío**: opción que muestra los datos del envío en la etiqueta impresa. En el campo **Envío** selecciona la información que deseas mostrar.
* **Mostrar ítems**: opción que muestra los datos de los ítems del pedido en la etiqueta impresa. En el campo **Ítems** selecciona la información que deseas mostrar.
* **Mostrar información de alistamiento**: opción que muestra los datos del alistamiento de los ítems en la etiqueta impresa. En el campo **Alistamiento** selecciona la información que deseas mostrar.
* **Tamaño (cm)**: formato en que se imprimirá la etiqueta en centímetros.
* **Tamaño de fuente (px)**: tamaño de la fuente en píxeles que se utilizará en la etiqueta impresa.
* **Izquierda**: tamaño del margen izquierdo de la etiqueta impresa en centímetros.
* **Derecha**: tamaño del margen derecho de la etiqueta impresa en centímetros.
* **Superior**: tamaño del margen superior de la etiqueta impresa en centímetros.
* **Inferior**: tamaño del margen inferior de la etiqueta impresa en centímetros.

Haz clic en `Guardar` para registrar los cambios realizados en la pestaña.

#### Tipos de empaque

![vtex-pick-and-pack-configuracion_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_6.png)
La página está organizada de la siguiente manera:

| Columna                        | Descripción                                                                   |
| ------------ | ----------------------------------------------------------------------------------------- |
| Nombre                         | Nombre del empaque                                                            |
| Descripción                    | Descripción con detalles del empaque                                          |
| Código                         | Código único del empaque                                                      |
| Tamaño (cm) | Tamaño en centímetros del empaque                                             |
| Tipo                           | Tipo de empaque, que puede ser `Caja`, `Bolsa`, `Empaques`, `Cinta` o `Papel` |

Para crear un nuevo tipo de empaque sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. Haz clic en la pestaña **Empaque** y luego en la pestaña **Tipos de empaque**.
3. Haz clic en el botón `Crear tipo de empaque`.
4. Llena los siguientes campos:
   - **Nombre**: nombre del tipo de empaque.
   - **Tipo**: tipo de empaque, que puede ser `Caja`, `Bolsa`, `Empaques`, `Cinta` o `Papel`.
   - **Descripción**: descripción con detalles sobre el empaque.
   - **Código**: código único del empaque.
   - **Longitud**: longitud del empaque en centímetros.
   - **Altura**: altura del empaque en centímetros.
   - **Anchura**: anchura del empaque en centímetros.
   - **Peso máximo**: peso máximo admitido para el empaque.
5. Haz clic en `Guardar`.

Para editar un tipo de empaque, sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. Haz clic en la pestaña **Empaque** y luego en la pestaña **Tipos de empaque**.
3. Haz clic en el menú <i class="fas-solid fa-ellipsis-vertical" aria-hidden="true"></i> del tipo de empaque que deseas editar.
4. Haz clic en `Editar` <i class="fas fa-pencil" aria-hidden="true"></i>.
5. Edita la información del tipo de empaque.
6. Haz clic en `Guardar`.

Para duplicar un tipo de empaque, sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. Haz clic en la pestaña **Empaque** y luego en la pestaña **Tipos de empaque**.
3. Haz clic en el menú <i class="fas-solid fa-ellipsis-vertical" aria-hidden="true"></i> del tipo de empaque que deseas duplicar.
4. Haz clic en `Duplicar` <i class="fas fa-copy" aria-hidden="true"></i>.
5. Haz clic en `Confirmar`.

Para eliminar un tipo de empaque, sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. Haz clic en la pestaña **Empaque** y luego en la pestaña **Tipos de empaque**.
3. Haz clic en el menú <i class="fas-solid fa-ellipsis-vertical" aria-hidden="true"></i> del tipo de empaque que deseas eliminar.
4. Haz clic en `Eliminar` <i class="fas fa-trash" aria-hidden="true"></i>.
5. Haz clic en `Confirmar`.

## Ítems

En esta sección encontrarás la configuración de los ítems que se muestran en la aplicación móvil de **VTEX Pick and Pack**.

### General

En esta pestaña eliges qué información de los ítems se mostrará en la aplicación móvil y agregas datos que ayuden al alistador a ubicar el ítem.

![vtex-pick-and-pack-configuracion_17](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_17.png)

* **Información del ítem que se mostrará en la aplicación de alistamiento:** información de los productos que aparecen en la ficha de los ítems en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile).
* **Activar transferencia de ítems:** opción que permite entregar un ítem desde una ubicación diferente a la ubicación de fulfillment especificada originalmente. Esta funcionalidad está en fase de pruebas y puede presentar inconsistencias durante el uso.
* **Activar ubicación del ítem:** opción que asigna un código único a cada SKU para ubicar más fácilmente los ítems en la tienda o almacén. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Códigos:** código de ubicación del ítem. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Ejemplo:** campo que muestra una vista previa del código de la ubicación. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Separador:** símbolo que separa cada sección de información del código de ubicación. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Asignar marcas de productos a:** selección que define el espacio (contenedor, zona, sección o pasillo) donde se ubicarán las marcas. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Asignar categorías de productos a:** selección que define el espacio (contenedor, zona, sección o pasillo) donde se ubicarán las categorías. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Activar códigos de barras dinámicos:** opción que, si está activada <i class="fas fa-toggle-on" aria-hidden="true"></i>, permite generar EANs basados en el precio, el peso o la cantidad del ítem.
* **Tipos de código de barras dinámicos:** selección que define si el código de barras dinámico se basará en el precio, peso o cantidad del ítem. Después de seleccionar el tipo de código, llena los campos con los valores numéricos del código.

Los EANs dinámicos basados en precio, peso y cantidad siguen los siguientes formatos:

| Tipo     | Formato                            | Conversión                                                                          | Ejemplo            |
| ---------- | ------------------------------------- | -------------------------------------------------------- | ------------------ |
| Precio   | `Dígito-Ítem-Precio-Verificador`   | El precio de $12.90 equivale a los dígitos `01290`. | `20-01234-01290-1` |
| Peso     | `Dígito-Ítem-Peso-Verificador`     | El peso de 200 gramos equivale a los dígitos `00200`.               | `20-01234-00200-1` |
| Cantidad | `Dígito-Ítem-Cantidad-Verificador` | La cantidad de 5 unidades equivale a los dígitos `00005`.           | `20-01234-00005-1` |

### Categorías

En esta pestaña organizas la jerarquía de las categorías de productos que se mostrará en la aplicación móvil. Esta lista se utiliza para ordenar los ítems durante el alistamiento en la aplicación móvil Pick and Pack.

![vtex-pick-and-pack-configuracion_13](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_13.png)

* **Todas las ubicaciones de fulfillment**: selección para definir las ubicaciones de fulfillment que tendrán las categorías disponibles. Si hay diferencias entre las ubicaciones de fulfillment seleccionadas, se muestra una alerta indicando que la nueva configuración reemplazará las existentes.
* **Categorías disponibles**: árbol completo de categorías del catálogo. Al seleccionar las ubicaciones de fulfillment, se cargan las categorías previamente guardadas.

Para configurar las categorías disponibles de una ubicación de fulfillment, sigue los pasos a continuación:

1. Haz clic en `Cambiar ubicaciones de fulfillment seleccionadas` y selecciona las ubicaciones de fulfillment que deseas editar.
2. En la lista de categorías, selecciona las que deseas incluir en las ubicaciones de fulfillment. Puedes buscar por el nombre de una categoría en hasta tres niveles del árbol.
3. Para ordenar la lista, haz clic en el ícono de arrastrar <i class="fas fa-grip-vertical" aria-hidden="true"></i> de una categoría y arrástrala hasta la posición deseada.
4. Haz clic en `Guardar` para finalizar.

Para remover una categoría seleccionada haz clic en el ícono de eliminación <i class="fas fa-trash" aria-hidden="true"></i>.

Para exportar la información de las categorías que se mostrarán en [VTEX Pick and Pack Mobile](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile) sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. Haz clic en la pestaña **Categorías**.
3. Haz clic en las categorías que deseas exportar.
4. Después de seleccionarlas, haz clic en `Exportar`. Se descargará un archivo CSV con la siguiente información:

```csv
category_id,name,priority
6,Food,10
```

* `category_id:` ID de la categoría.
* `name:` nombre de la categoría.
* `priority:` prioridad de la categoría en relación con el orden de las categorías mostradas en la aplicación móvil.

Para importar la información de las categorías seleccionadas que se mostrarán en [VTEX Pick and Pack Mobile](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile), sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. Haz clic en la pestaña **Categorías**.
3. Haz clic en `Importar`.
4. Selecciona el archivo CSV de tu computadora. El archivo CSV debe tener las columnas `category_id`, `name` y `priority`.
5. Verifica que la información esté correcta.
6. Haz clic en `Reemplazar`.

### Catálogo

En esta pestaña actualizas en masa e indexas el catálogo disponible en [VTEX Pick and Pack Mobile](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile).

> ℹ️ Durante la configuración inicial de Pick and Pack, realiza primero la actualización en masa del catálogo y después indéxalo.

> ⚠️ El catálogo de Pick and Pack es una copia del [catálogo de VTEX](/es/docs/tutorials/catalogo-vision-general). Los cambios de producto, SKU, EAN, categoría, dimensiones o peso en el catálogo de VTEX no se aplican automáticamente. Hasta la sincronización, la aplicación móvil y el alistamiento usan el catálogo de Pick and Pack, que puede ser diferente del catálogo de VTEX. Para sincronizar los dos catálogos, sigue el procedimiento de [indexación del catálogo](#indexar-el-catalogo).

![vtex-pick-and-pack-configuracion_15](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_15.png)

La página está organizada de la siguiente manera:

| Columna     | Descripción                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------- |
| Ítem        | Nombre del producto                                                                                                          |
| ID          | ID del producto                                                                                                              |
| SKU         | ID del SKU                                                                                                                   |
| EAN         | Número de EAN                                                                                                                |
| Categorías  | Categorías a las que pertenece el producto                                                                                   |
| Dimensiones | Dimensiones en centímetros del producto                                                                                      |
| Peso        | Peso del producto                                                                                                            |
| Pesable     | Indicación sobre si el producto varía de peso, como las frutas, o tiene peso fijo                                            |
| Temperatura | Temperatura de conservación del producto. Esta información solo se muestra en el Admin VTEX. |
| Activo      | Indicación sobre si el producto está activo en el catálogo de la aplicación móvil o no                                       |

La actualización en masa edita campos del catálogo de Pick and Pack mediante un archivo CSV. Para traer los cambios hechos en el catálogo de VTEX, usa `Indexar catálogo`.

Para realizar una edición en masa de los ítems sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Ítems**, haz clic en la pestaña **Catálogo**.
3. Haz clic en `Actualización en masa`.
4. Haz clic en `Descargar plantilla`.
5. Llena la plantilla con la información de los ítems.
6. Haz clic en `Seleccionar archivo` y selecciona la plantilla editada con la nueva información.
7. Haz clic en `Continuar`.
8. Verifica si hay algún error al llenar el archivo CSV y, de ser así, corrígelo y envía el archivo de nuevo.
9. Haz clic en `Continuar`.

Para editar la información de un ítem sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Ítems**, haz clic en la pestaña **Catálogo**.
3. Haz clic en el ítem que deseas editar.
4. Edita la información del ítem:

   ![vtex-pick-and-pack-configuracion_16](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_16.png)

   - Códigos EAN
   - Códigos SKU
   - Temperatura
5. Haz clic en `Guardar`.

#### Indexar el catálogo

Para sincronizar el catálogo de Pick and Pack con el catálogo de VTEX, sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Ítems**, haz clic en la pestaña **Catálogo**.
3. Haz clic en `Indexar catálogo`.
4. Haz clic en `Continuar`.
5. Haz clic en `OK` para finalizar.

## Automatización

En esta sección puedes configurar los ajustes de automatización de procesos de **VTEX Pick and Pack**. Las automatizaciones son un mecanismo de reglas orientado a eventos: defines las condiciones y el sistema ejecuta las acciones automáticamente cuando se cumplen. Estas reglas pueden ser aplicadas a pedidos, hojas de trabajo y servicios de envío.

### Hojas de trabajo

En esta sección puedes configurar automatizaciones relacionadas con hojas de trabajo.

![vtex-pick-and-pack-configuracion_10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_10.png)

Para crear una nueva automatización sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Automatización**, haz clic en la pestaña **Hojas de trabajo**.
3. Haz clic en `Nuevo`.
4. Llena los siguientes campos:
   - **Activo**: opción que activa la automatización de hojas de trabajo.
   - **Nombre de la automatización**: nombre descriptivo de la automatización.
   - **Cuando esto ocurre**: condición que inicia la automatización.
   - **Hacer lo siguiente**: consecuencia de la automatización.
5. Haz clic en `+ Agregar otra acción` para implementar acciones adicionales.
6. Haz clic en `Crear` para finalizar.

Sigue los pasos a continuación para actualizar o eliminar una automatización:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Automatización**, haz clic en la pestaña **Hojas de trabajo**.
3. Haz clic en la automatización que deseas editar.
4. Haz clic en `Actualizar` para guardar las actualizaciones o haz clic en `Eliminar` para eliminar la automatización.

### Pedidos

En esta sección puedes configurar automatizaciones relacionadas con pedidos.

![vtex-pick-and-pack-configuracion_11](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_11.png)

Para crear una nueva automatización sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Automatización**, haz clic en la pestaña **Pedidos**.
3. Haz clic en `Nuevo`.
4. Llena los siguientes campos:
   - **Activo**: opción que activa la automatización de pedidos.
   - **Nombre de la automatización**: nombre descriptivo de la automatización.
   - **Cuando esto ocurre**: condición que inicia la automatización.
   - **Hacer lo siguiente**: consecuencia de la automatización.
5. Haz clic en `+ Agregar otra acción` para implementar acciones adicionales.
6. Haz clic en `Crear` para finalizar.

Sigue los pasos a continuación para actualizar o eliminar una automatización:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Automatización**, haz clic en la pestaña **Pedidos**.
3. Haz clic en la automatización que deseas editar.
4. Haz clic en `Actualizar` para guardar las actualizaciones o haz clic en `Eliminar` para eliminar la automatización.

### Servicios de envío

En esta sección puedes configurar automatizaciones relacionadas con los envíos de pedidos.

![vtex-pick-and-pack-configuracion_12](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_12.png)

Para crear una nueva automatización sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Automatización**, haz clic en la pestaña **Servicios de envío**.
3. Haz clic en `Nuevo`.
4. Llena los siguientes campos:
   - **Activo**: opción que activa la automatización de envío.
   - **Nombre de la automatización**: nombre descriptivo de la automatización.
   - **Cuando esto ocurre**: condición que inicia la automatización.
   - **Hacer lo siguiente**: consecuencia de la automatización.
5. Haz clic en `+ Agregar otra acción` para implementar acciones adicionales.
6. Haz clic en `Crear` para finalizar.

Sigue los pasos a continuación para actualizar o eliminar una automatización:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Automatización**, haz clic en la pestaña **Servicios de envío**.
3. Haz clic en la automatización que deseas editar.
4. Haz clic en `Actualizar` para guardar las actualizaciones o haz clic en `Eliminar` para eliminar la automatización.

## Usuarios

En esta sección puedes gestionar los alistadores de tu operación VTEX Pick and Pack. Los usuarios con el permiso **Alistador** solo tendrán acceso a la aplicación VTEX Pick and Pack.

![vtex-pick-and-pack-configuracion_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_7.png)

Para crear un nuevo usuario sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Usuarios**, haz clic en la pestaña **Alistadores**.
3. Haz clic en `Crear usuario`.
4. Llena los campos del formulario:
   - **Nombre de usuario**: nombre de usuario del alistador.
   - **Nombre**: nombre del alistador.
   - **Email**: email de acceso del alistador.
   - **Contraseña**: contraseña de acceso del alistador.
5. Selecciona la [ubicación de fulfillment](#ubicaciones-de-fulfillment) del alistador.
6. Haz clic en `Crear usuario`.

Para editar o eliminar un usuario sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Usuarios**, haz clic en la pestaña **Alistadores**.
3. Haz clic en el alistador que deseas editar o eliminar.
4. Edita la información que desees.
5. Haz clic en `Actualizar` para guardar las actualizaciones o en `Eliminar` para eliminar el usuario.

### Acceder a VTEX Pick and Pack en el Admin VTEX

Los alistadores creados en esta pestaña solo pueden acceder a la aplicación móvil. Los usuarios que necesitan seguir la operación en el Admin VTEX requieren [roles](/es/docs/tutorials/roles) y [recursos del License Manager](/es/docs/tutorials/recursos-del-license-manager), y no se gestionan en esta pestaña.

Recomendamos crear un rol dedicado a la operación de fulfillment y asignarlo a los usuarios responsables de su gestión. Para que estos usuarios vean la página [Insights](/es/docs/tutorials/vtex-pick-and-pack-insights), el rol debe incluir el recurso **Insights Metrics** del producto **Insights**.

## Ubicaciones de fulfillment

Las ubicaciones de fulfillment no forman parte de las pestañas de **Configuración**. Se gestionan en una página separada del Admin VTEX, **Envío > Pick and Pack > Ubicaciones de fulfillment**.

Una ubicación de fulfillment es el lugar donde se realiza el alistamiento de los pedidos, como una tienda física o un centro de distribución. Un [almacén](/es/docs/tutorials/gestionar-almacenes) es el lugar logístico de VTEX en el que se almacenan los ítems.

Una ubicación de fulfillment puede tener más de un almacén vinculado.

> ⚠️ Los pedidos solo entran en Pick and Pack cuando el almacén de los ítems está vinculado a una ubicación de fulfillment. Un almacén sin ubicación de fulfillment mantiene esos pedidos fuera de Pick and Pack, incluso con la opción **Descargar pedidos del OMS** activada. Si un pedido tiene ítems de un almacén sin ubicación de fulfillment, la automatización que agrega el pedido a la hoja de trabajo falla.

Los pedidos de todos los almacenes vinculados a la misma ubicación de fulfillment se procesan en esa ubicación de fulfillment. Las hojas de trabajo, la aplicación móvil, la página [Insights](/es/docs/tutorials/vtex-pick-and-pack-insights), la asignación de alistadores, las categorías y los webhooks filtrados por ubicación de fulfillment usan esa ubicación de fulfillment y, por lo tanto, consideran todos los almacenes vinculados a ella.

## Integración

En esta sección puedes configurar las integraciones con [VTEX Pick and Pack Mobile](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile).

### Webhook

En esta sección puedes configurar webhooks para la aplicación móvil. Un webhook es una notificación automática que Pick and Pack envía a una URL cada vez que hay algún cambio en el flujo, como la facturación de un pedido o el cambio de status de una hoja de trabajo.

El sistema agrupa la información del evento, como el ID del pedido, status actual y anterior, fecha y otros detalles, y envía todo a la dirección configurada. También puedes limitar el envío por [ubicaciones de fulfillment](#ubicaciones-de-fulfillment). En ese caso, el webhook solo se dispara para eventos relacionados con esas ubicaciones de fulfillment.

![pick-and-pack-webhook-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/webhook-pt.png)

Para crear un nuevo webhook sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Integración**, haz clic en la pestaña **Webhook**.
3. Haz clic en `Nuevo`.
4. Llena los campos del formulario:
   - **Activo**: opción que activa el webhook.
   - **Tipo**: método del webhook. Estos son los tipos de evento que pueden generar notificaciones:
     - `INVOICING`: facturación del pedido.
     - `ORDER_STATUS`: cambio en el status del pedido.
     - `WORKSHEET_STATUS`: cambio en el status de la hoja de trabajo.
     - `RETURN_STATUS`: actualización en el status de la devolución.
   - **URL**: URL del webhook.
   - **Encabezados**: encabezados del webhook.
   - **Parámetros**: parámetros del webhook.
   - **Dónde se aplicará (ubicaciones de fulfillment)**: ubicaciones de fulfillment en las que se aplicará el webhook.
5. Haz clic en `Crear`.

Para editar o eliminar un webhook, sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda.
2. En **Integración**, haz clic en la pestaña **Webhook**.
3. Haz clic en el webhook que deseas modificar.
4. Edita la información del webhook.
5. Haz clic en `Actualizar` para guardar las actualizaciones o en `Eliminar` para eliminar el webhook.

### Clave de aplicación

En esta pestaña generas una clave de aplicación para utilizar los endpoints de autenticación por JSON Web Token (JWT) de la [Pick and Pack API](https://developers.vtex.com/docs/api-reference/pick-and-pack-api#post-/token) y de la [Pick and Pack Last Mile Protocol API](https://developers.vtex.com/docs/api-reference/pick-and-pack-protocol-api#post-/token).

![vtex-pick-and-pack-configuracion_14](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_14.png)

Para generar una nueva clave de aplicación haz clic en `Generar`.
