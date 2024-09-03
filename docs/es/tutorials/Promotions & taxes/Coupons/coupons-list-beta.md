---
title: 'Lísta de cupones'
id: 5z5ya3IonsC2W4B5h4JrsZ
status: CHANGED
createdAt: 2022-04-28T20:47:44.779Z
updatedAt: 2024-08-14T17:44:43.108Z
publishedAt: 2023-04-20T19:11:14.509Z
firstPublishedAt: 2022-04-28T21:03:11.698Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: lista-de-cupones-beta
locale: es
legacySlug: lista-de-cupones-beta
subcategoryId: 1TXh7VjDSIGA2eSI0CmUsi
---

La página __Cupones__ te permite visualizar todos los [cupones](https://help.vtex.com/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL)  registrados en tu tienda, gestionar los datos de cada uno y analizar cuántas veces y en qué pedidos se usaron.

Desde esta página puedes:

* Buscar cupones.
* Exportar cupones.
* Visualizar datos de uso de los cupones.
* Filtrar cupones.
* Visualizar la lista de cupones activos.
* Acceder a la lista de cupones archivados.
* Crear cupones.
* Editar cupones.
* Archivar cupones.

Para acceder a la página desde el Admin VTEX, haz clic en **Promociones > Cupones**.

![lista-cupons](https://images.ctfassets.net/alneenqid6w5/3KpOX5OW4oM5dBUNxkc0YP/1526330ae6f09ee70d1250a5c6ac0082/screencapture-coupons-pricingqa-myvtex-admin-coupons-2022-04-29-18_13_40_1.png)

Luego, verás la descripción de las acciones y los componentes incluidos en la página.

## Barra superior

La barra superior de la página **Cupones** presenta una barra de búsqueda, filtros y botones para exportar cupones, ver datos de uso de los cupones y acceder a la lista de cupones archivados. En las secciones a continuación, podrás ver más detalles sobre cada una de estas opciones.

### Buscar cupones

Puedes encontrar cupones específicos usando la barra de búsqueda. Te permite buscar por código de cupón, por [UTM source](https://help.vtex.com/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii) o por [UTM campaign](https://help.vtex.com/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii).

### Filtrar cupones

Puedes usar los filtros para visualizar solo los cupones que cumplen con criterios específicos. Para aplicar filtros, sigue los pasos a continuación.

1. En el Admin VTEX, accede a *Promociones > Cupones*, o escribe *Cupones* en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el filtro que desees usar:
   * **Última modificación:** indica la fecha de la última vez en que se modificó el cupón.
   * **Tipo de cupón:** indica si el cupón es sencillo o un lote. Para conocer los distintos tipos de cupones, consulta [Cupones](https://help.vtex.com/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL).
3. Marca la opción deseada.
4. Haz clic en `Aplicar`.
5. Repite el proceso si quieres aplicar otro filtro.

Para limpiar los filtros, es decir, para desactivar los filtros aplicados, hay dos opciones:

* Haz clic en <i class="fas fa-times"></i> al lado de un filtro para desactivar un filtro específico.
* Haz clic en `Limpiar filtros` para desactivar todos los filtros.

### Exportar cupones

Puedes descargar un archivo CSV con tus cupones y la información de cada uno.

Para exportar los cupones, haz clic en el botón <i class="fa-solid fa-arrow-down-to-line"></i> `Exportar`, al lado de la barra de búsqueda. La exportación tiene en cuenta los [filtros](#filtrar-cupones) aplicados en la lista.

El archivo que se genera contiene la siguiente información:

| Columna | Descripción |
|---|---|
| `code` | Código de cupón. En los lotes de cupones, indica el prefijo de los códigos generados. |
| `type` | Indica si el cupón es sencillo (single) o lote (multiple). Para más detalles sobre cada tipo de cupón, consulta [Cupones](https://help.vtex.com/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL). Para saber cómo exportar los códigos que se generaron con un lote de cupones, consulta [Exportar códigos del lote de cupones](#exportar-codigos-del-lote-de-cupones). |
| `quantity` | Número de códigos del cupón. Para los cupones sencillos, el valor siempre es `1`. Para los lotes de cupones, indica el número de códigos para ese lote. |
| `archived` | Indica si el cupón está archivado (`true`) o activo (`false`). |
| `utmSource` | Indica la UTM source asociada al cupón, en caso de que haya. |
| `utmCampaign` | Indica la UTM campaign asociada al cupón, en caso de que haya.|
| `maxUsage` | Número máximo de veces en las que se podrá usar el cupón. |
| `maxItemsPerClient` | Determina la cantidad máxima de productos en los que se podrá aplicar el cupón. La cantidad definida vale para una o más compras del mismo cliente. Esa opción se completa solo en los cupones ya existentes configurados con esta limitación en versiones previas del módulo **Cupones**. |
| `expirationIntervalPerUse` | Intervalo de tiempo mínimo para reutilizar el cupón. |
| `lastModified` | Fecha en que el cupón se modificó por última vez. |

A continuación, puedes ver un ejemplo del archivo CSV exportado:

![cupons-exportados](https://images.ctfassets.net/alneenqid6w5/3BiCzXoNpaMM1ZpkBoa3Nr/921b74b837ae69f974aef332dc8d816a/image3.png)

#### Exportar códigos del lote de cupones

El archivo CSV exportado solo muestra una línea para el lote de cupones, es decir, no muestra todos los códigos del lote, solo el prefijo.

Para ver o exportar todos los códigos de un lote de cupones, sigue los pasos a continuación:

1. Busca el lote de cupones en la [lista de cupones](#lista-de-cupones).
2. Haz clic en <i class="fas fa-ellipsis-v"></i> en la línea del lote de cupones para que aparezca un menú con más opciones.
3. Haz clic en <i class="fa-solid fa-arrow-down-to-line"></i> **Exportar**.

    Verás una pantalla con dos opciones:

    * <i class="far fa-clone"></i> **Copiar todos:** permite copiar los códigos generados a su área de transferencia. También puedes copiar cada código haciendo clic sobre él.
    * **Exportar:** permite exportar los códigos generados a un archivo CSV. El archivo exportado tiene una columna con un código por línea.

![exportar-cupones](https://images.ctfassets.net/alneenqid6w5/P8bIJHkyTTi2jVZ325rko/e41e4a9922531597949431314c41ed5d/image_6.png)

### Ver uso de cupones

Para ver el total de los cupones activos y el espacio disponible restante para los cupones nuevos, haz clic en <i class="fas fa-chart-line"></i> `Uso de los cupones`.

![uso-de-cupones](https://images.ctfassets.net/alneenqid6w5/CaNOtLMQXu26MGYfaAe4o/0ed73731ce39d27daf747bae02757a81/image_9.png)

La cantidad máxima de cupones activos que puedes tener es de 5000. Para liberar espacio, puedes archivar cupones desde la [Lista de cupones](#lista-de-cupones). Si necesitas aumentar el límite de los cupones activos, ponte en contacto con [nuestro Soporte](https://support.vtex.com/hc/pt-br/requests).

### Acceder a cupones archivados

Para acceder a la lista de cupones archivados, sigue los pasos a continuación.

1. En la esquina superior derecha de la página **Cupones**, haz clic en <i class="fas fa-ellipsis-v"></i> `Más`.
2. Haz clic en <i class="fas fa-archive"></i> `Cupones archivados`.

La lista de cupones archivados presenta la misma información descrita en la sección [Lista de cupones](#lista-de-cupones), excepto por las opciones disponibles en el menú <i class="fas fa-ellipsis-v"></i> en la línea de cada cupón. Las opciones disponibles para los cupones archivados son:

* <i class="fas fa-search"></i> **Visualizar:** permite ver los detalles del cupón archivado en una versión no editable del [formulario de creación y edición del cupón](https://help.vtex.com/es/tutorial/crear-cupon-beta--7lMk3MmhNp2IEccyGApxU).
* <i class="fas fa-archive"></i> **Desarchivar:** permite disponer del cupón para su uso y edición.

## Crear cupón

El botón `Crear cupón`, en la esquina superior derecha de la página, permite acceder al formulario de creación del nuevo cupón. Para obtener más información sobre este proceso, consulta [Crear cupón](https://help.vtex.com/es/tutorial/crear-cupon-beta--7lMk3MmhNp2IEccyGApxU).

## Lista de cupones

La lista de cupones presenta todos los cupones activos en tu tienda, ordenados desde el más reciente. Al hacer clic en un cupón de la lista, serás redireccionado a la página de [edición del cupón](https://help.vtex.com/es/tutorial/crear-cupon-beta--7lMk3MmhNp2IEccyGApxU).

A continuación, encontrarás más detalles sobre cada columna de la lista:

* **Código:** muestra el código del cupón.
* **Tipo de cupón:** indica si el cupón es [sencillo o un lote](https://help.vtex.com/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL#tipos-de-cupones).
* **UTM source:** indica la [UTM source](https://help.vtex.com/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii) asociada al cupón, en caso de que haya alguna.
* **UTM campaign:** indica la [UTM campaign](https://help.vtex.com/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii) asociada al cupón, en caso de que haya alguna.
* **Última edición:** muestra la fecha en que el cupón se modificó por última vez.
   * **Menú** <i class="fas fa-ellipsis-v"></i>: muestra un menú con más opciones, las cuales se describen a continuación.
   * <i class="fas fa-pencil"></i> **Editar:** permite acceder al formulario de edición del cupón para visualizar o modificar la información registrada. Consulta [Crear cupón](https://help.vtex.com/es/tutorial/crear-cupon-beta--7lMk3MmhNp2IEccyGApxU) para más información sobre el formulario. Opción disponible solo para cupones activos.
   * <i class="fas fa-archive"></i> **Archivar:** permite archivar el cupón, es decir, desactivar su uso en la tienda. Opción disponible solo para cupones activos.
   * <i class="fas fa-download"></i> **Exportar:** abre una ventana modal con los códigos del lote de cupones desde donde se puede copiar los códigos o exportarlos a un archivo CSV. Opción disponible solo para lotes de cupones.
   * <i class="far fa-signal-alt-3"></i> **Ver detalles de uso:** abre una ventana modal con información sobre el uso del cupón. Para más información, consulta la sección [Ver detalles de uso](#ver-detalles-de-uso). Opción disponible solo para cupones activos.

### Ver detalles de uso

La ventana **Ver detalles de uso** muestra los datos de uso de cada cupón, que se describen a continuación.

* **Promociones asociadas:** muestra el nombre de las promociones vinculadas al cupón, en caso de que haya alguna. Al hacer clic sobre el nombre de una promoción, serás redireccionado a la página de edición de la promoción.

    El cupón solo estará disponible cuando esté vinculado a, por lo menos, una promoción. Para establecer dicho vínculo, debes usar la misma [utm_source o utm_campaign](https://help.vtex.com/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii) que utilizaste en el registro tanto del cupón como de la promoción. Consulta la sección [Asociar el cupón con una promoción](https://help.vtex.com/es/tutorial/crear-cupon-beta--7lMk3MmhNp2IEccyGApxU#asociar-el-cupon-con-una-promocion) para saber cómo realizar esta configuración.

* **Uso** (cupones sencillos): muestra el número de usos del cupón y el número de usos restantes, en caso de que hayas limitado la cantidad de usos.

    Esta sección muestra la lista de pedidos en que se usó el cupón y permite buscar por número de pedido. Al hacer clic en el número de un pedido, serás redirigido a la página de detalles del pedido en **Gestión de pedidos**.

![ver-detalles-de-uso](https://images.ctfassets.net/alneenqid6w5/1bFOCXCpWwoXzJToacK3BM/5ce20bfb2a8105f006dc649682b5221a/ver-detalles-de-uso.png)

* **Uso general de códigos de cupon** (lotes de cupones): muestra la cantidad total de usos de los códigos de un grupo de cupones y la cantidad de usos restantes, si ha limitado la cantidad de usos.

    Esta sección también muestra la lista de códigos en el lote de cupones y le permite buscar un código específico. Al hacer clic en un código, se accede a la lista de pedidos en los que se ha utilizado el código y se puede buscar por un número de pedido. Al hacer clic en un número de pedido, accederá a la página de detalles del pedido en **Gestión de pedidos**.

![selecciona-el-codigo-lotes-cupones](https://images.ctfassets.net/alneenqid6w5/25yE4tmkHYDm4MISaz9upH/7ea64df31330da8be8002f373451f262/selecione-o-codigo-grupo-es.PNG)

## Más información

* [Cupones](https://help.vtex.com/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL)
* [Crear cupón](https://help.vtex.com/es/tutorial/crear-cupon-beta--7lMk3MmhNp2IEccyGApxU)
