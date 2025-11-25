---
title: 'VTEX Pick and Pack: Configuración'
id: 16cs3e7hWk7c4cSZqe10O9
status: PUBLISHED
createdAt: 2024-01-05T20:43:38.480Z
updatedAt: 2024-01-09T18:30:22.578Z
publishedAt: 2024-01-09T18:30:22.578Z
firstPublishedAt: 2024-01-09T16:30:00.192Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-settings
legacySlug: vtex-pick-and-pack-configuracion
locale: es
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

> ℹ️ Esta función se encuentra en fase beta cerrada, por lo que sólo los clientes seleccionados pueden acceder a ella ahora. Si desea implementarla en el futuro, rellene nuestro [formulario](https://vtex.com/co-es/contacto/) apontaby introduciendo el nombre del producto en el campo `Comentarios`.

__Configuración__ es una página del Admin VTEX donde puedes realizar los ajustes de VTEX Pick and Pack para tu tienda. Los ajustes se distribuyen en las siguientes secciones:

* [Pedidos](#pedidos)
* [Hojas de trabajo](#hojas-de-trabajo)
* [Ítems](#items)
* [Automatización](#automatizacion)
* [Usuarios](#usuarios)
* [Instalaciones](#instalaciones)

## Pedidos

En esta sección puedes configurar los ajustes relacionados con los pedidos procesados por **VTEX Pick and Pack**.

![vtex-pick-and-pack-configuracion_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_1.png)

* **Descargar pedidos del OMS:** permite exportar pedidos desde el OMS.

>ℹ️ Los filtros siguientes se aplican solo a los pedidos nuevos que se creen después de la exportación. Si no defines ningún filtro, se descargarán todos los pedidos.

### Filtros

Estos son los filtros disponibles que determinan los pedidos que se descargarán:

* **Medios de pago:** medios de pago utilizados en los pedidos a exportar.
* **Métodos de envío:** métodos de envío utilizados en los pedidos a exportar.
* **Tipo de envío:** tipos de envío utilizados en los pedidos a exportar (`SHIP_FROM_STORE`, `PICKUP_IN_STORE` y `DRIVE_THRU`).
* **Tags del pedido:** restringe la descarga a los pedidos que tengan determinadas tags.
* **Políticas comerciales:** [políticas comerciales](https://help.vtex.com/es/docs/tutorials/como-funciona-una-politica-comercial) aplicadas en los pedidos a exportar.
* **Enviar cambios al OMS**: permite enviar los cambios (reemplazos, rechazos o ajustes) realizados en pedidos alistados por el [módulo Pedidos de VTEX](https://help.vtex.com/es/docs/tutorials/pedidos-vision-general). Para que se pueda aplicar este filtro, los pedidos deben tener su hoja de trabajo finalizada y no contener ítems pendientes de alistamiento o empaque en el OMS.

Haz clic en `Guardar` para registrar los cambios realizados.

## Hojas de trabajo

En esta sección puedes definir las opciones que se aplicarán a las [hojas de trabajo](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-hojas-de-trabajo) de tu tienda. Una hoja de trabajo consiste en un único pedido o en un conjunto de pedidos que serán procesados por el flujo de Pick and Pack simultáneamente.

### General

![vtex-pick-and-pack-configuracion_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_2.png)

- **Pedido único**: opción que limita cada hoja de trabajo a un solo pedido.
- **Pedidos múltiples**: opción que permite gestionar varios pedidos en una misma hoja de trabajo.
- **Tags de hojas de trabajo**: tags personalizadas que ayudan a identificar las hojas de trabajo. Las tags pueden consultarse en la pantalla de [hojas de trabajo pendientes](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#hojas-de-trabajo-pendientes) en la aplicación móvil de Pick and Pack.
- **Permitir notas en hojas de trabajo**: opción que permite al alistador [agregar notas a la hoja de trabajo](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#hojas-de-trabajo-pendientes).
- **Permitir chat de soporte**: opción que habilita el chat entre el alistador y el retailer vía Admin VTEX.
- **Habilitar lista de alistamiento**: lista que proporciona al alistador la información necesaria de la hoja de trabajo para el alistamiento de los ítems. Esta información puede imprimirse en formato de etiqueta.

### Etiqueta

Puedes definir la información que se mostrará en la lista de alistamiento, que se imprime y se incluye en el paquete del pedido.

- **Tamaño (cm)**: formato impreso de la etiqueta.
- **Tamaño de fuente (px)**: tamaño de fuente que se imprimirá en la etiqueta, en píxeles.
- **Margen izquierdo**: tamaño del margen izquierdo de la etiqueta en centímetros.
- **Margen derecho**: tamaño del margen derecho de la etiqueta en centímetros.
- **Margen superior**: tamaño del margen superior de la etiqueta en centímetros.
- **Margen inferior**: tamaño del margen inferior de la etiqueta en centímetros.
- **Mostrar IDs de pedidos**: opción que muestra los IDs de los pedidos en la etiqueta.
- **Separar ítems por pedidos**: opción que permite generar una etiqueta por pedido.
- **Mostrar información del cliente**: opción que incluye la información del cliente en la etiqueta.
- **Mostrar código de barras/QR de paquetes**: opción que exhibe el código de barras o código QR en la etiqueta.
- **Código de barras/QR**: si la opción **Mostrar código de barras/QR de paquetes** está activada, permite seleccionar si el código de barras con el número de pedido, el número de la hoja de trabajo o ambos figurará en la etiqueta.

Haz clic en `Guardar` para registrar los cambios realizados.

### Alistamiento

![vtex-pick-and-pack-configuracion_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_3.png)

- **Mostrar pestaña de información de pedidos**: opción que exhibe la pestaña de información del pedido en la [hoja de trabajo](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-hojas-de-trabajo) del alistador, tanto en el Admin VTEX como en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#ordens-de-servico-pendentes).
- **Mostrar información del cliente por pedido**: opción que exhibe la pestaña de información del cliente para el alistador.
- **Permitir observaciones en los ítems**: opción que permite al alistador [agregar observaciones en los ítems del pedido durante el alistamiento](https://help.vtex.com/es/docs/tutorials/vtex-pick-and-pack-mobile#ordens-de-servico-pendentes).
- **Pedir confirmación para alistar ítems**: opción que activa una validación adicional en la aplicación Pick and Pack, solicitando que el alistador confirme manualmente el alistamiento de cada ítem del pedido.
- **Activar flujo de aprobaciones**: opción que requiere la aprobación de un administrador para el alistamiento de los ítems.
- **Permitir agregar ítems**: opción que permite al alistador [agregar nuevos ítems durante el alistamiento](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#adicionar-novos-produtos-a-um-pedido).
- **Permitir reemplazode ítems**: opción que permite al alistador [reemplazar ítems durante el alistamiento](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#substituir-itens).
- **Motivos de reemplazo**: motivos de [reemplazo de ítems](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#substituir-itens) que el alistador puede seleccionar en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). Los motivos de reemplazo registrados no se traducen si el alistador elige otro idioma en la aplicación móvil de Pick and Pack.
- **Permitir rechazar ítems**: opción que permite al alistador [rechazar ítems durante el alistamiento](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#recusar-itens).
- **Motivos de rechazo**: motivos de [rechazo de ítems](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#recusar-itens) que el alistador puede seleccionar en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). Los motivos de rechazo registrados no se traducen si el alistador elige otro idioma en la aplicación móvil de Pick and Pack.
- **Permitir cambios de precio de ítems**: opción que permite al alistador cambiar el precio de los ítems durante el alistamiento.
- **Motivos de cambio de precio**: motivos de cambio de precio que el alistador puede seleccionar en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). Los motivos de cambio de precio registrados no se traducen si el alistador elige otro idioma en la aplicación móvil de Pick and Pack.
- **Límite de cambios de precio en ítems de pedidos**: número máximo de veces que puede modificarse el precio de los ítems en un pedido. 100% es el valor máximo que se puede agregar al precio original al modificarlo, y −100% es el mínimo, ambos calculados sobre el valor original del ítem.
- **Permitir cambios en la cantidad de ítems**: opción que permite al alistador [cambiar la cantidad de los ítems durante el alistamiento](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#alterar-a-quantidade-de-um-produto).
- **Límite de cambios en la cantidad de ítems en pedidos**: número máximo de veces que puede modificarse la cantidad de ítems en un pedido. 100% es el valor máximo que se puede agregar a la cantidad original al modificarla, y −100% es el mínimo, ambos calculados sobre la cantidad original del ítem.
- **Limitar cambios totales en el pedido**: opción que define cuánto puede variar el valor total del pedido cuando el alistador realiza modificaciones. 100% es el valor máximo que se puede agregar al valor final del pedido al modificarlo, y −100% es el mínimo, ambos calculados sobre el valor original del pedido.
- **Límite de cambios a un pedido**: cantidad máxima de cambios (reemplazos, rechazos y nuevos ítems) que se pueden hacer en un pedido.

Haz clic en `Guardar para registrar los cambios realizados.

## Empaque

En esta sección se definen los ajustes correspondientes a la etapa de empaque de los ítems del pedido.

### General

![vtex-pick-and-pack-configuracion_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_4.png)

- **Activar proceso de empaque**: opción que inicia el [flujo de empaque](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#empacotamento) a ser realizado por el alistador.
- **Activar informe de paquetes**: opción que permite exhibir un informe sobre los paquetes. Esta opción se encuentra actualmente deshabilitada.
- **Activar etiquetas de empaque**: opción que permite generar etiquetas para el empaque de los pedidos y muestra la configuración de etiquetas en la página.
- **Opciones de empaque**: opciones de configuración para los embalajes que se utilizarán en el empaque. Las opciones son las siguientes:
  - **Sistema de medidas**: opción de unidades de medida, sistema métrico o imperial, para medir dimensiones y peso del empaque.
  - **Actualizar peso total**: opción que muestra un modal en la aplicación Pick and Pack para que el alistador ingrese el peso total del paquete. Si está desactivada, el modal no se muestra y el proceso de empaque se inicia.
- **Empaque personalizado**: opción que muestra en la aplicación Pick and Pack un formulario para que el alistador ingrese las dimensiones y el peso del empaque personalizado.
- **Sin empaque**: opción que permite el envío del pedido usando el propio empaque de los ítems.
  - **Utilizar dimensiones y peso del SKU**: opción que define que las dimensiones y peso del SKU se utilizarán para determinar las dimensiones y peso del empaque. Si el SKU no tiene esa información registrada, se mostrará el formulario para las dimensiones y el peso del empaque personalizado.
  - **Ingresar las dimensiones/peso total**: opción que permite completar las dimensiones y peso del ítem.
- **Mostrar cantidad de paquetes**: opción que muestra la cantidad de paquetes en la etiqueta impresa.
- **Mostrar código de barras/QR del paquete**: opción que muestra un código de barras o un código QR generado a partir de la información del campo **Código de barras/código QR**.
- **Mostrar información del pedido**: opción que muestra datos del pedido en la etiqueta impresa. En el campo **Pedidos** selecciona la información que deseas mostrar.
- **Mostrar información del cliente**: opción que muestra los datos del cliente en la etiqueta impresa. En el campo **Cliente** selecciona la información que deseas mostrar.
- **Mostrar información de envío**: opción que muestra los datos del envío en la etiqueta impresa. En el campo **Envío** selecciona la información que deseas mostrar.
- **Mostrar ítems**: opción que muestra los datos de los ítems del pedido en la etiqueta impresa. En el campo **Ítems** selecciona la información que deseas mostrar.
- **Mostrar información de alistamiento**: opción que muestra los datos del alistamiento de los ítems en la etiqueta impresa. En el campo **Alistamiento** selecciona la información que deseas mostrar.
- **Tamaño (mm)**: formato en que se imprimirá la etiqueta en milímetros.
- **Tamaño de fuente (px)**: tamaño de la fuente en píxeles que se utilizará en la etiqueta impresa.
- **Margen izquierdo**: tamaño del margen izquierdo de la etiqueta impresa en milímetros.
- **Margen derecho**: tamaño del margen derecho de la etiqueta impresa en milímetros.
- **Margen superior**: tamaño del margen superior de la etiqueta impresa en milímetros.
- **Margen inferior**: tamaño del margen inferior de la etiqueta impresa en milímetros.

Haz clic en `Guardar` para registrar los cambios realizados.

### Tipos de empaque

![vtex-pick-and-pack-configuracion_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_6.png)

La página está organizada de la siguiente manera:

| Columna       | Descripción                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| **Nombre**    | Nombre del empaque.                                                         |
| **Descripción** | Descripción con detalles del empaque.                                     |
| **Código**    | Código único del empaque.                                                   |
| **Tamaño (cm)** | Tamaño en centímetros del empaque.                                        |
| **Tipo**      | Tipo de empaque, que puede ser `Caja`, `Bolsa`, `Empaques`, `Cinta` y `Papel`.       |

**Para crear un nuevo tipo de empaque**, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o busca **Configuración** en la barra de búsqueda.
2. Haz clic en la sección **Empaque** y luego en **Tipos de empaque**.
3. Haz clic en el botón `Crear tipo de empaque`.
4. Llena los siguientes campos:
   - **Nombre**: nombre del tipo de empaque.
   - **Tipo**: tipo de empaque, que puede ser `Caja`, `Bolsa`, `Empaques`, `Cinta` y `Papel`.
   - **Descripción**: descripción con detalles sobre el empaque.
   - **Código**: código único del empaque.
   - **Longitud**: longitud del empaque en centímetros.
   - **Altura**: altura del empaque en centímetros.
   - **Anchura**: anchura del empaque en centímetros.
   - **Peso máximo**: peso máximo del empaque.
5. Haz clic en `Guardar`.

Para editar un nuevo tipo de empaque, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o busca **Configuración** en la barra de búsqueda.
2. Haz clic en la sección **Empaque** y luego en **Tipos de empaque**.
3. Haz clic en <i class="fas-solid fa-ellipsis-vertical"></i> del tipo de empaque que deseas editar.
4. Haz clic en <i class="fas fa-pencil"></i> `Editar`.
5. Edita la información del tipo de empaque.
6. Haz clic en `Guardar`.

Para duplicar un nuevo tipo de empaque, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o busca **Configuración** en la barra de búsqueda.
2. Haz clic en la sección **Empaque** y luego en la **Tipos de empaque**.
3. Haz clic en <i class="fas-solid fa-ellipsis-vertical"></i> del tipo de empaque que deseas duplicar.
4. Haz clic en <i class="fas fa-copy"></i> `Duplicar`.
5. Haz clic en `Confirmar`.

Para eliminar un tipo de empaque, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o busca **Configuración** en la barra de búsqueda.
2. Haz clic en la sección **Empaque** y luego en **Tipos de empaque**.
3. Haz clic en <i class="fas-solid fa-ellipsis-vertical"></i> del tipo de empaque que deseas eliminar.
4. Haz clic en <i class="fas fa-trash"></i> `Eliminar`.
5. Haz clic en `Confirmar`.

## Ítems

En esta sección encontrarás la configuración de los ítems que se muestran en la aplicación móvil de **VTEX Pick and Pack**.

### General

En esta sección se define la información de los ítems que se mostrará en la aplicación móvil y se pueden agregar datos adicionales que ayuden al alistador a localizar el ítem.

![vtex-pick-and-pack-configuracion_15](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_15.png)

- **Información del ítem que se mostrará en la aplicación de alistamiento**: información de los productos que aparecen en la ficha de los ítems en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet).
- **Activar transferencia de ítems**: opción que permite entregar un ítem desde una ubicación diferente a la instalación especificada originalmente.
- **Activar ubicación del ítem**: opción que asigna un código único a cada SKU para ubicar más fácilmente los ítems en la tienda o almacén. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Códigos**: código de ubicación del ítem. Para más información sobre esta configuración, consulta la [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Ejemplo**: campo que muestra una vista previa del código de la ubicación. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Separador**: símbolo que separa cada sección de información del código de ubicación. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Asignar marcas de productos a**: selección que define el espacio (contenedor, zona, sección o pasillo) donde se ubicarán las marcas. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Asignar categorías de productos a**: selección que define el espacio (contenedor, zona, sección o pasillo) donde se ubicarán las categorías. Para más información sobre esta configuración, consulta [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-).
- **Activar códigos de barras dinámicos**: cuando se activa esta opción <i class="fas fa-toggle-on"></i>, se generan EANs basados en:

  | **Precio**       | **Peso**                                                                 |
  | ------------- | --------------------------------------------------------------------------- |
  | Formato: `Dígito-Ítem-Precio-Verificador` <br>Los dígitos del precio se convierten de la siguiente manera: el precio $12.90 equivale a los dígitos `01290`. <br>Ejemplo: `20-01234-01290-1` | Formato: `Dígito-Ítem-Peso-Verificador` <br>Los dígitos del peso se convierten de la siguiente manera: el peso de 200 gramos equivale a los dígitos `00200`. <br>Ejemplo: `20-01234-00200-1` | 

- **Tipos de código de barras dinámicos**: selección que define si el código de barras dinámico se basará en el precio, peso o cantidad del ítem. Después de seleccionar el tipo de código, llena los campos con los valores numéricos del código.

### Categorías

En esta sección puedes definir la jerarquía de las categorías de productos que se mostrará en la aplicación móvil. La lista definida se utiliza para ordenar los ítems durante el alistamiento en la aplicación móvil Pick and Pack.

![vtex-pick-and-pack-configuracion_13](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_13.png)

- **Todas las instalaciones**: selección para definir las instalaciones que tendrán las categorías disponibles. Si hay diferencias entre las instalaciones seleccionadas, se muestra una alerta indicando que la nueva configuración reemplazará las existentes.
- **Categorías disponibles**: árbol completo de categorías del catálogo. Al seleccionar las instalaciones, se cargan las categorías previamente guardadas.

Para definir las categorías disponibles de una instalación, sigue los pasos a continuación:

1. Haz clic en `Cambiar instalaciones seleccionadas` y selecciona las instalaciones que deseas editar.
2. Haz clic en la lista de categorías que deseas incluir en las instalaciones. Puedes buscar por el nombre de una categoría en hasta tres niveles del árbol.
3. Haz clic en <i class="fas fa-grip-vertical"></i> y arrastra una categoría para ordenar la lista como prefieras.
4. Haz clic en `Guardar` para finalizar.

Para eliminar una categoría seleccionada, haz clic en <i class="fas fa-trash"></i>.

Para exportar la información de las categorías que se mostrarán en la aplicación móvil de Pick and Pack, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o busca **Configuración** en la barra de búsqueda.
2. Haz clic en la sección **Categorías**.
3. Haz clic en las categorías que deseas exportar.
4. Después de seleccionarlas, haz clic en `Exportar`. Se descargará un archivo CSV con la siguiente información:

```csv
category_id,name,priority
6,Food,10
```

- `category_id`: ID de la categoría.
- `name`: nombre de la categoría.
- `priority`: prioridad de la categoría en el orden de categorías mostrado en la aplicación móvil.

Para importar información de las categorías seleccionadas que se mostrarán en la aplicación móvil de Pick and Pack, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. Haz clic en la sección **Categorías**.
3. Haz clic en `Importar`.
4. Selecciona el archivo CSV de tu computadora. El archivo CSV debe tener las columnas `category_id`, `name` y `priority`.
5. Verifica que la información esté correcta.
6. Haz clic en `Reemplazar`.

### Catálogo

En esta sección puedes realizar una actualización en masa e indexar el catálogo que estará disponible en la [aplicación móvil de Pick and Pack](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet).

>ℹ️ En la configuración inicial de Pick and Pack, se debe realizar primero la **actualización masiva del catálogo** y, a continuación, su **indexación**.

![vtex-pick-and-pack-configuracion_16](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_16.png)

La página está organizada de la siguiente manera:

| Columna        | Descripción                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Ítem**       | Nombre del producto.                                                                                              |
| **ID**         | ID del producto.                                                                                                  |
| **SKU**        | ID del SKU.                                                                                                       |
| **EAN**        | Número de EAN.                                                                                                     |
| **Categorías** | Categorías a las que pertenece el producto.                                                                        |
| **Dimensiones**| Dimensiones en centímetros del producto.                                                                           |
| **Peso**       | Peso del producto.                                                                                                 |
| **Pesable**    | Indicación sobre si el producto varía de peso, como las frutas, o tiene peso fijo.                                 |
| **Temperatura**| Temperatura de conservación del producto. Esta información solo se muestra en el Admin VTEX.                       |
| **Activo**     | Indicación sobre si el producto está activo en el catálogo de la aplicación móvil o no.                            |

Para realizar una edición en masa de los ítems, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o busca **Configuración** en la barra de búsqueda.
2. En **Ítems**, haz clic en la sección **Catálogo**.
3. Haz clic en `Actualización en masa`.
4. Haz clic en `Descargar plantilla`.
5. Llena la plantilla con la información de los ítems.
6. Haz clic en `Seleccionar archivo` y selecciona la plantilla editada con la nueva información.
7. Haz clic en `Continuar`.
8. Verifica si hay algún error al llenar el archivo CSV y, de ser así, corrígelo y envía el archivo de nuevo.
9. Haz clic en `Continuar`.

Para editar la información de un ítem, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En **Ítems**, haz clic en la sección **Catálogo**.
3. Haz clic en el ítem que deseas editar.
4. Edita la información del ítem:

    ![vtex-pick-and-pack-configuracion_14](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_14.png)

   - **Códigos EAN**
   - **Códigos SKU**
   - **Temperatura**
5. Haz clic en `Guardar`.

Para indexar las actualizaciones realizadas en los ítems, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En **Ítems**, haz clic en la sección **Catálogo**.
3. Haz clic en `Indexar catálogo`.
4. Haz clic en `Continuar`.
5. Haz clic en `OK` para finalizar.

## Automatización

En esta sección puedes configurar los ajustes de automatización de procesos de VTEX Pick and Pack. Las automatizaciones son un mecanismo de reglas orientado a eventos: se definen condiciones y el sistema ejecuta acciones automáticamente cuando se cumplen. Estas reglas pueden ser aplicadas a pedidos, hojas de trabajo y servicios de envío.

### Hojas de trabajo

En esta sección puedes configurar automatizaciones relacionadas con hojas de trabajo.

![vtex-pick-and-pack-configuracion_10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_10.png)

Sigue los pasos a continuación para crear una nueva automatización:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En **Automatización**, haz clic en la sección **Hojas de trabajo**.
3. Haz clic en `Nuevo`.
4. Llena los siguientes campos:
   - **Activo**: opción que activa la automatización de hojas de trabajo.
   - **Nombre de la automatización**: nombre descriptivo de la automatización.
   - **Cuando esto ocurre**: condición que activa la automatización.
   - **Hacer lo siguiente**: consecuencia de la automatización.
   - Haz clic en `+ Agregar otra acción` para implementar acciones adicionales.
5. Haz clic en `Crear` para finalizar.

Para actualizar o eliminar una automatización, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En la sección **Automatización**, haz clic en **Hojas de trabajo**.
3. Haz clic en la automatización que deseas editar.
4. Haz clic en `Actualizar` para guardar los cambios o haz clic en `Eliminar` para borrar la automatización.

### Pedidos

En esta sección puedes configurar automatizaciones relacionadas con pedidos.

![vtex-pick-and-pack-configuracion_11](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_11.png)

Para crear una nueva automatización, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En la sección **Automatización**, haz clic en **Pedidos**.
3. Haz clic en `Nuevo`.
4. Llena los siguientes campos:
   - **Activo**: opción que activa la automatización de pedidos.
   - **Nombre de la automatización**: nombre descriptivo de la automatización.
   - **Cuando esto ocurre**: condición que inicia la automatización.
   - **Hacer lo siguiente**: consecuencia de la automatización.
   - Haz clic en `+ Agregar otra acción` para implementar acciones adicionales.
5. Haz clic en `Crear` para finalizar.

Para actualizar o eliminar una automatización, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En la sección **Automatización**, haz clic en **Pedidos**.
3. Haz clic en la automatización que deseas editar.
4. Haz clic en `Actualizar` para guardar las actualizaciones o haz clic en `Eliminar` para borrar la automatización.

### Servicios de envío

En esta sección puedes configurar automatizaciones relacionadas con los envíos de pedidos.

![vtex-pick-and-pack-configuracion_12](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_12.png)

Sigue los pasos a continuación para crear una nueva automatización:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En la sección **Automatización**, haz clic en **Servicios de envío**.
3. Haz clic en `Nuevo`.
4. Llena los siguientes campos:
   - **Activo**: opción que activa la automatización de envío.
   - **Nombre de la automatización**: nombre descriptivo de la automatización.
   - **Cuando esto ocurre**: condición que activa la automatización.
   - **Hacer lo siguiente**: consecuencia de la automatización.
   - Haz clic en `+ Agregar otra acción` para implementar acciones adicionales.
5. Haz clic en `Crear` para finalizar.

Sigue los pasos a continuación para actualizar o eliminar una automatización:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En la sección **Automatización**, haz clic **Servicios de envío**.
3. Haz clic en la automatización que deseas editar.
4. Haz clic en `Actualizar` para guardar las actualizaciones o en `Eliminar` para borrar la automatización.

## Usuarios

En esta sección puedes gestionar los alistadores de tu operación VTEX Pick and Pack. Los usuarios con el permiso **Alistador** solo tendrán acceso a la aplicación VTEX Pick and Pack.

![vtex-pick-and-pack-configuracion_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_7.png)

Para crear un nuevo usuario, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En la sección **Usuarios**, haz clic en **Alistadores**.
3. Haz clic en `Crear usuario`.
4. Llena los campos del formulario:
   - **Username**: nombre de usuario del alistador.
   - **Name**: nombre del alistador.
   - **Email**: email de acceso del alistador.
   - **Password**: contraseña de acceso del alistador.
   - Selecciona la instalación donde está ubicado el alistador.
5. Haz clic en `Create user`.

Para editar o eliminar un usuario, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o busca **Configuración** en la barra de búsqueda.
2. En la sección **Usuarios**, haz clic en **Alistadores**.
3. Haz clic en el alistador que deseas editar o eliminar.
4. Edita la información que desees.
5. Haz clic en `Update` para guardar las actualizaciones o en `Delete` para eliminar el usuario.

## Integración

En esta sección puedes configurar integraciones con la aplicación móvil de Pick and Pack.

### Webhook

En esta sección puedes configurar webhooks para la aplicación móvil. Un webhook es una notificación automática que Pick and Pack envía a una URL cada vez que hay algún cambio en el flujo, como la facturación de un pedido o cambio de status de una hoja de trabajo.

![vtex-pick-and-pack-configuracion_8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_8.png)

El sistema agrupa la información del evento, como el ID del pedido, status actual y anterior, fecha y otros detalles, y envía todo a la dirección configurada. También puede limitarse el envío por instalaciones. En ese caso, el webhook solo se dispara para eventos relacionados con esas instalaciones.

Para crear un nuevo webhook, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En **Integración**, haz clic en la sección **Webhook**.
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
   - **Dónde se aplicará (instalaciones)**: instalaciones en las que se aplicará el webhook.
5. Haz clic en `Crear`.

Para editar o eliminar un webhook, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Pick and Pack > Configuración**, o ingresa **Configuración** en la barra de búsqueda.
2. En la sección **Integración**, haz clic en **Webhook**.
3. Haz clic en el webhook que deseas modificar.
4. Edita la información del webhook.
5. Haz clic en `Actualizar` para guardar las actualizaciones o en `Eliminar` para eliminar el webhook.

### Clave de aplicación

En esta sección puedes generar una clave de API para utilizar los endpoints de autenticación utilizando el JWT de la API de Pick and Pack y la API de Pick and Pack Last Mile Protocol.

![vtex-pick-and-pack-configuracion_9](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/vtex-pick-and-pack/vtex-pick-and-pack-configuracion_9.png)

Para generar una nueva clave de API, haz clic en `Generar`.
