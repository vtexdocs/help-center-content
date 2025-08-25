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

* [Alistamiento](#alistamiento)
* [Categorías](#categorias)
* [Empaque](#empaque)
* [Pedidos](#pedidos)
* [Automatización](#automatizacion)
* [Usuarios](#usuarios)
* [Catálogo](#catalogo)
* [Instalaciones](#instalaciones)

## Alistamiento

En esta sección se encuentran los ajustes relativos a la etapa de alistamiento, donde puedes definir las acciones que el alistador puede realizar durante el proceso de alistamiento, incluyendo la notificación de la falta de disponibilidad de un ítem del pedido y la sugerencia de otro para su sustitución.

![pick-and-pack-separacao-es](//images.ctfassets.net/alneenqid6w5/31IMWfSufilPJHlkU7bLyh/c9c4916113ccf7f6252cb17d736a0ba9/image.png)

### Estrategia de alistamiento

En esta sección puedes definir el tipo de estrategia de alistamiento que deseas que realicen los alistadores.

> ℹ️ Actualmente solo está disponible la estrategia **Alistamiento por olas**.

#### Cambios en el pedido

En esta sección puedes definir acciones relativas a cambios en el pedido, como por ejemplo, debido a ítems fuera de stock.

* **Enviar cambios al OMS:** permite enviar los cambios realizados por el alistador al [OMS de VTEX](https://help.vtex.com/es/tutorial/gerenciamento-de-pedidos-visao-geral--tutorials_201). Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Permitir cambiar el precio de los ítems:** permite que el alistador cambie los precios de los ítems de un pedido. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Permitir reemplazo de ítems:** permite que el alistador sustituya los ítems del pedido que no estaban disponibles. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Permitir rechazar ítems:** permite que el alistador rechace los ítems del pedido que no estén disponibles. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Permitir cambiar las cantidades de los ítems:** permite que el alistador cambie la cantidad de ítems del pedido. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Permitir agregar observaciones en los pedidos:** permite que el alistador añada comentarios en los pedidos, como indicar el motivo de un cambio de precio, por ejemplo. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Permitir agregar observaciones en los ítems:** permite que el alistador añada comentarios en los ítems, como indicar el motivo de rechazo de un ítem, por ejemplo. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Motivos de rechazo:** indica las opciones que el alistador puede seleccionar para justificar el rechazo de ítems del pedido. El alistador puede introducir tantas opciones como desee.
* **Motivos de cambios de precio:** indica las opciones que el alistador puede seleccionar para justificar el cambio de precio de los ítems del pedido. El alistador puede introducir tantas opciones como desee.
* **Límite de cambios de cantidad en los ítems del pedido:** porcentaje que limita cuántos ítems se pueden modificar en un pedido. 
* **Límite de cambios de precio en los ítems del pedido:** porcentaje que limita cuántos precios de ítems se pueden modificar en un pedido. 
* **Límite total de cambios en los pedidos:** porcentaje que limita la cantidad total de pedidos que se pueden modificar. 

### Hojas de trabajo

En esta sección puedes definir las opciones que se aplicarán a las hojas de trabajo de tu tienda. 

* **Permitir varios pedidos en una hoja de trabajo:** permite añadir varios pedidos a una hoja de trabajo. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Activar alistamiento rápido:** permite activar el alistamiento rápido, confirmando automáticamente la cantidad y el precio de los productos evitando la necesidad de confirmación manual por parte del alistador. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Activar fulfillment express:** activa la opción de fulfillment express, que permite el alistamiento y empaque del pedido simultáneamente. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Permitir mover pedidos una vez iniciado el alistamiento:** permite editar hojas de trabajo incluso una vez iniciado el proceso de alistamiento. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Permitir mover pedidos entre hojas de trabajo:** permite editar las hojas de trabajo moviendo los pedidos agregados entre ellas. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Tags de hojas de trabajo:** permite añadir tags personalizadas para automatizar el proceso de alistamiento de pedidos.
* **Activar códigos EAN dinámicos:** permite activar códigos de barras dinámicos, que pueden cambiar en función de las características del producto, como el peso. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.

#### Onboarding

Puedes activar el proceso de configuración de la aplicación VTEX Pick and Pack siguiendo los pasos que se indican a continuación:

1. Haz clic en `Onboarding`.
2. Haz clic en `Empezar`.
3. Selecciona las opciones que deseas configurar para la aplicación. Estos ajustes solo se aplicarán en la cuenta principal.
4. Haz clic en `Siguiente`.
5. Selecciona las hojas de trabajo que se van a gestionar en la aplicación y el número de alistadores que deseas crear.
6. Haz clic en `Siguiente`.
7. Activa <i class="fas fa-toggle-on"></i> los vendedores a los que deseas aplicar los ajustes.
8. Haz clic en `Finalizado`.
9. Haz clic en `Cerrar` para finalizar.

Haz clic en `Guardar` para registrar los cambios realizados.

## Categorías

En esta sección puedes configurar el orden de las categorías en las que se alistarán los pedidos. De este modo, el alistador puede organizar el flujo de alistamiento de productos para completar los pedidos con eficacia.

![pick-pack-categorias-es](//images.ctfassets.net/alneenqid6w5/3BSGR29QrAWbHBRjadYcBE/2bfcf15ac98f4a83428b918bee4b609b/image.png)

* **Configuración rápida:** los ajustes se aplican en todas las instalaciones. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Instalación**: determina a qué instalación se aplicarán los ajustes de las categorías.

Para agregar una categoría a la lista, haz clic en la categoría que desees. Para reordenar, arrastra la categoría de la lista a la posición deseada.

Puedes importar un archivo CSV o exportar la lista que ya está configurada.

## Empaque

En esta sección se encuentran los ajustes relativos a la etapa de empaque de los ítems del pedido. 

![pick-pack-empacotamento-es](//images.ctfassets.net/alneenqid6w5/2SbFdooYvZpNL3KDq2gdgK/22169dfbbb7de2d7cb7303533322b609/image.png)

* **Permitir informe de paquetes:** permite la visualización de informe de paquetes. El informe se mostrará en la pantalla **Pedidos**. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.
* **Permitir empaque automático:** permite el empaque automático. Puedes activar <i class="fas fa-toggle-on"></i> o desactivar <i class="fas fa-toggle-off"></i> esta opción.

### Configuración de impresión de etiquetas de paquetes

En esta sección puedes configurar las características de la etiqueta que se adjuntará al paquete del pedido. Consulta a continuación las características disponibles: 

* **Configuración de impresión de etiquetas de paquetes activa:** activa o desactiva la posibilidad de editar las características de las etiquetas.
* **Formato:** determina el formato de la etiqueta.
* **Tamaño de fuente (px):** determina el tamaño de la fuente en que se imprimirá la etiqueta, en píxeles.

#### Márgenes

* **Izquierdo:** tamaño del margen izquierdo de la etiqueta en milímetros.
* **Derecho:** tamaño del margen derecho de la etiqueta en milímetros.
* **Superior:** tamaño del margen superior de la etiqueta en milímetros.
* **Inferior:** tamaño del margen inferior de la etiqueta en milímetros.

#### Dimensiones

* **Anchura:** anchura de la etiqueta en milímetros.
* **Altura:** altura de la etiqueta en milímetros.

### Configuración de impresión de recibos

En esta sección puedes configurar las características de la impresión de recibos de los pedidos. Consulta a continuación las características disponibles: 

* **Configuración de impresión de recibos activa:** activa o desactiva la posibilidad de editar las características de los recibos.
* **Formato:** determina el formato del recibo.
* **Tamaño de fuente (px):** determina el tamaño de la fuente en que se imprimirá el recibo, en píxeles.

#### Márgenes

* **Izquierdo:** tamaño del margen izquierdo del recibo.
* **Derecho:** tamaño del margen derecho del recibo.
* **Superior:** tamaño del margen superior del recibo.
* **Inferior:** tamaño del margen inferior del recibo.

#### Dimensiones

* **Anchura:** anchura del recibo.
* **Altura:** altura del recibo.

### Empaques

En esta sección debes registrar los tipos de empaque que utilizará tu tienda para empaquetar y enviar los pedidos. Para registrar un nuevo empaque sigue estos pasos:

1. Haz clic en `Crear`.
2. Rellena el formulario a continuación:
   * **Nombre:** nombre asignado al empaque.
   * **Tipo:** tipo de empaque. Las opciones son **Caja, Bolsa, Paquete, Cinta, Papel, Otros**.
   * **Descripción:** descripción del empaque para uso interno.
   * **Código:** código identificador del empaque.
   * **Peso cúbico:** [peso cúbico](https://help.vtex.com/es/tutorial/como-o-peso-cubado-e-calculado--tutorials_128) del empaque. 
   * **Altura:** altura del empaque en milímetros. 
   * **Longitud:** longitud del empaque en milímetros.
   * **Peso:** peso del empaque en milímetros.
   * **Anchura:** anchura del empaque en milímetros.
3. Haz clic en `Guardar` para finalizar.

Haz clic en `Guardar` para registrar los cambios realizados.

## Pedidos

En esta sección puedes configurar los ajustes relacionados con los pedidos procesados por VTEX Pick and Pack.

![pick-pack-config-pedidos-es](//images.ctfassets.net/alneenqid6w5/4WY1T4pWaSbvdzA6FqOeGY/0be9f8f989de78cff2f46369bd1aaa1d/image.png)

* **Descargar pedidos del OMS:** permite exportar pedidos desde el OMS.
* **Medios de pago:** medios de pago utilizados en los pedidos a exportar.
* **Métodos de envío:** métodos de envío utilizados en los pedidos a exportar.
* **Tipo de envío:** tipos de envío utilizados en los pedidos a exportar.
* **Tags de pedidos:** tags utilizadas en los pedidos a exportar.

Haz clic en `Guardar` para registrar los cambios realizados.

## Automatización

En esta sección puedes configurar los ajustes de automatización de procesos de VTEX Pick and Pack.

![pick-pack-automacao-es](//images.ctfassets.net/alneenqid6w5/4ymzTYa77AIPdheE0KkgSy/4bb00e8ac0cbbf07c676b744771372d6/image.png)

Sigue los pasos a continuación para crear una nueva automatización:

1. Haz clic en `Crear`.
2. Rellena el campo **Nombre** con el nombre de la automatización y **Automatización para** con la opción que deseas automatizar.
3. Haz clic en `Guardar` para finalizar.

## Usuarios

En esta sección puedes realizar la gestión de usuarios, admins y alistadores de tu operación en VTEX Pick and Pack. Los usuarios con el permiso **Admin** tendrán acceso al Admin VTEX y podrán realizar cambios en la herramienta. Los usuarios con el permiso **Alistador** solo tendrán acceso a la aplicación VTEX Pick and Pack. 

![pick-pack-usuarios-es](//images.ctfassets.net/alneenqid6w5/1VzckMNHfoiub8sRtreP3p/cd858240c58bc74387f052d3fc7fd983/image.png)

Para crear un nuevo usuario sigue los pasos a continuación:

1. Haz clic en `Crear`.
2. Selecciona el tipo de permiso que deseas para tu nuevo usuario, __Admin__ o __Alistador__.
3. Registra al usuario seleccionando el permiso que desees: 
  - Permiso de __Admin__
    1. De la lista, selecciona al usuario que deseas registrar como Admin.
    2. Haz clic en Crear.
    ![pick-pack-usuarios-2-es](//images.ctfassets.net/alneenqid6w5/1cdVquaWE1X8XIgD7M6tlS/17eeb5d76b1d00afcee928845e3ee0b8/image.png)
  - Permiso de __Alistador__
    1. Rellena los siguientes campos del formulario:
       * Nombre de usuario
       * Nombre
       * Email (campo obligatorio)
       * Contraseña (campo obligatorio)
       * Instalaciones
       * Permitir el envío de paquetes
       * Categorías
    2. Haz clic en `Crear`.
    ![pick-pack-usuarios-3-es](//images.ctfassets.net/alneenqid6w5/4PrkthovWlPTX7vzJ1IdAN/b5cac2035cbd75270e61a8dcbf7a32ae/image.png)

## Catálogo

En esta sección puedes consultar la información de ítems de pedidos que se encuentran en la etapa de entrega al cliente.

![pick-pack-catalogo-es](//images.ctfassets.net/alneenqid6w5/7bEUt2nvw2xGUKO8WjmkSl/a7ba2ed1eb52f8e6f8ad1616679564b9/image.png)

La página presenta la siguiente información en forma de tabla:

| Campos de la columna | Descripción                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Ítem                 | Nombre del producto.                                                                                             |
| ID del producto      | Número de identificación del producto.                                                                           |
| SKU                  | Número de identificación del SKU del producto.                                                                   |
| EAN                  | Número EAN del producto.                                                                                         |
| Categorías           | Categorías en las que está registrado el producto.                                                               |
| Dimensiones          | Dimensiones del producto.                                                                                        |
| Peso                 | Peso del producto.                                                                                               |
| Pesable              | Productos que necesitan pesarse para indicar su unidad de medida en kilogramos o gramos, según la configuración. |
| Temperatura          | Productos que deben almacenarse a una temperatura mínima para evitar su deterioro.                               |
| Activo               | Si el producto está o no disponible para los clientes.                                                           |

Puedes agregar ID de SKU y EAN de tus productos masivamente, a través de un archivo CSV. Para hacerlo, sigue los pasos a continuación:

1. Haz clic en el botón `Carga masiva de códigos SKU/EAN`.
2. Agrega el archivo que deseas cargar.
3. Haz clic en `Continuar`.

También puedes indexar el catálogo para actualizar la lista de productos. Para hacerlo, haz clic en `Indexar catálogo` y después en `Continuar`.

> ❗ La indexación del catálogo borrará y recreará todo su contenido, lo que significa que puedes perder todos tus códigos EAN y SKU personalizados.

## Instalaciones

En esta sección podrás agregar y consultar las instalaciones de tu tienda.

![pick-pack-instalacoes-es](//images.ctfassets.net/alneenqid6w5/4VKy2KHlm4Vdz8oa8lv8VB/eb4cd39623ec2363f3c21a2624480fac/image.png)

Para crear una nueva instalación sigue los pasos a continuación:

1. Haz clic en `Crear`.
2. Rellena el formulario con la dirección de tu instalación. Es obligatorio completar los campos **Calle**, **Ciudad** y **Estado**.
3. Haz clic en `Guardar` para finalizar.
