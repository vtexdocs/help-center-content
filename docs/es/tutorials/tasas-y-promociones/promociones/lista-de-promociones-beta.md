---
title: 'Promociones'
id: 4yB7nNdliiFxBTXE19GCIi
status: PUBLISHED
createdAt: 2022-05-05T13:39:53.273Z
updatedAt: 2023-07-24T13:34:09.177Z
publishedAt: 2023-07-24T13:34:09.177Z
firstPublishedAt: 2022-05-05T13:52:17.590Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: promotion-list-beta
legacySlug: lista-de-promociones-beta
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

La plataforma VTEX proporciona una forma optimizada y práctica de registrar varios tipos de promociones que se adaptan a diferentes escenarios. A través de una interfaz centralizada para la gestión de promociones, su tienda puede ofrecer más beneficios centrados en atraer y retener a los clientes.

El módulo de **Promociones** ofrece flexibilidad para crear escenarios de promoción con condiciones específicas para cada contexto. Además de filtrar y exportar promociones, permite ver la cantidad de promociones activas y archivarlas.

Accede a este módulo en el Admin VTEX a través del menú <i class="fas fa-bullhorn"></i> **Promociones** > **Promociones**.

La página muestra la lista con las promociones registradas en tu tienda y su información básica:

| Nombre del campo | Descripción |
|---|---|
| `Nombre` | Nombre de la promoción. |
| `Desde` | Fecha de inicio de la promoción.  |
| `Hasta` | Fecha de fin de la promoción.  |
| `Status` | Status de la promoción, que puede ser:  __Activa:__ la promoción está activada. __Programada:__ la promoción está programada. __Pausada:__ la promoción está pausada. __Completada:__ la promoción ha finalizado. |

![listadepromocoes es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/lista-de-promociones-beta_1.gif)

Puedes ordernar la lista de promociones por nombre, fechas o status. Para ordenarlas, haz clic en el título de la columna que tiene la información que deseas utilizar como criterio de ordenación.

Todas las funcionalidades de la página se detallarán en las siguientes secciones:

- [Crear promociones](#crear-promociones)
- [Promociones archivadas](#promociones-archivadas)
- [Buscar promociones](#buscar-promociones)
- [Exportar promociones](#exportar-promociones)
- [Uso de las promociones](#uso-de-las-promociones)
- [Filtrar promociones](#filtrar-promociones)
- [Menú de acciones de las promociones listadas](#menu-de-acciones-de-las-promociones-listadas)

## Crear promociones

Para registrar una nueva promoción, haz clic en el botón Crear promoción. Luego, puedes seleccionar los siguientes tipos de promociones:

- [Regular](/es/docs/tracks/crear-promocion-regular)
- [Comprar juntos](/es/docs/tutorials/comprar-juntos-registro-de-promocion)
- [Más por menos](/es/docs/tutorials/mas-por-menos)
- [Descuento progresivo](/es/docs/tutorials/descuento-progresivo)
- [Compra uno y lleva uno gratis](/es/docs/tutorials/como-funciona-la-promocion-compre-y-gane)
- [Promoción de campaña](/es/docs/tutorials/promocion-de-campana)

## Promociones archivadas

Para acceder a la página **Promociones archivadas**, haz clic en el icono <i class="fas fa-ellipsis-v"></i> y, después, en <i class="fas fa-box"></i>.

Ahí puedes desarchivar o duplicar las promociones archivadas al hacer clic en el icono <i class="fas fa-ellipsis-v"></i>. Al desarchivar una promoción, su status cambia a `Pausada`.

## Buscar promociones

Para buscar una promoción específica en la lista, puedes utilizar la barra de búsqueda. Allí puedes buscar por el nombre, la descripción o la UTM de la promoción.

## Exportar promociones

Puedes descargar un archivo CSV con las promociones registradas en tu tienda y su respectiva información. Para descargarlas, haz clic en el botón 📥 <i class="fas fa-download"></i> Exportar, al lado de la barra de búsqueda. El archivo exportado considera los filtros aplicados a la lista y no incluye las promociones archivadas.

El archivo contiene la siguiente información sobre cada promoción:

| Columna | Descripción |
|---|---|
| `ID` | ID de la promoción. |
| `Nombre` | Nombre de la promoción. |
| `Tipo de descuento` | Tipo de descuento aplicado en la promoción. |
| `Desde` | Fecha de inicio de la promoción. |
| `Hasta` | Fecha de fin de la promoción. |
| `Status` | Status actual de la promoción, que puede ser __Activa__, __Programada__, __Pausada__ o __Finalizada__. |

## Uso de las promociones

![usodaspromoções en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/lista-de-promociones-beta_2.JPG)

Para ver el total de promociones activas en tu tienda y el espacio restante para nuevas promociones, haz clic en <i class="fas fa-chart-line"></i> `Uso de las promociones`.

El número máximo de promociones activas por defecto es de 100. Si necesitas aumentar este límite, ponte en contacto con [nuestro Soporte](https://support.vtex.com/hc/es-419/requests).

## Filtrar promociones

![filtrodepromocoes es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/lista-de-promociones-beta_3.gif)

La lista de promociones se puede filtrar según tus necesidades, utilizando los siguientes filtros:  

- **Tipo de descuento:** tipo de descuento que se aplicará a la promoción. Las opciones son [Regular](/es/docs/tracks/crear-promocion-regular), [Comprar Juntos](/es/docs/tutorials/comprar-juntos-registro-de-promocion), [Más por Menos](/es/docs/tutorials/mas-por-menos), [Descuento Progresivo](/es/docs/tutorials/descuento-progresivo), [Comprar y Obtener](/es/docs/tutorials/como-funciona-la-promocion-compre-y-gane) y [Promoción de Campaña](/es/docs/tutorials/promocion-de-campana).
- **Status:** status de la promoción. Las opciones son `Ejecutando`, `Programada`, `Pausada` y `Realizada`.
- **Última edición:** historial de las últimas ediciones en los últimos 12 meses, 3 meses, 30 días, 7 días o el día anterior a la consulta.
- **Política comercial:** la política comercial a la que se aplicará la promoción.
- **UTM:** parámetros de URL utilizados para monitorear el tráfico. Las opciones `Sin UTM` y `Con UTM`.

Selecciona los filtros deseados y haz clic en `Aplicar` para filtrar las promociones. Para borrar la selección, haz clic en `Limpiar` en los filtros deseados.

## Menú de acciones de las promociones listadas

Al hacer clic en el ícono <i class="fas fa-ellipsis-v"></i> de una promoción, puedes realizar las siguientes acciones:

- <i class="far fa-check-circle"></i> __Editar:__ editar la promoción.
- <i class="far fa-times-circle"></i> __Desactivar:__ pausar la promoción.
- <i class="far fa-clone"></i> __Duplicar:__ crear una copia de la promoción.
- <i class="fas fa-archive"></i> __Archivar:__ archivar la promoción. La promoción se trasladará automáticamente a la página __Promociones archivadas__.

#### Más información
- [Qué son utm_source, utm_campaign y utm_medium](/es/docs/tutorials/que-son-utm-source-utm-campaign-y-utm-medium)
