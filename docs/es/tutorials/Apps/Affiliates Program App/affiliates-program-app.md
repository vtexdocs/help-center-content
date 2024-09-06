---
title: 'Aplicación Affiliates Program'
id: 7IpHHHcjjWxdmSRMw1FMPQ
status: PUBLISHED
createdAt: 2022-11-07T14:17:36.954Z
updatedAt: 2023-03-29T14:35:30.885Z
publishedAt: 2023-03-29T14:35:30.885Z
firstPublishedAt: 2022-11-07T22:17:42.126Z
contentType: tutorial
productTeam: Apps
author: 5l9ZQjiivHzkEVjafL4O6v
slug: aplicacion-affiliates-program
locale: es
legacySlug: aplicacion-affiliates-program
subcategoryId: 6GWaAkVqXQYN79ilMgUsPr
---

>ℹ️ **Affiliates program** es una aplicación solo compatible con las tiendas [VTEX IO](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), y no está disponible para las tiendas que utilizan [CMS - Portal Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) o [Headless CMS](https://faststore.dev/tutorials/cms/0#vtex-headless-cms). Para instalar y configurar la app en tu tienda VTEX, consulta la guía del desarrollador [Affiliates Program app](https://developers.vtex.com/vtex-developer-docs/docs/affiliates-program-app).

En la aplicación **Affiliates Program**, un afiliado es alguien que se asocia con tu tienda VTEX para promover las ventas a cambio de una comisión. El término es, por tanto, diferente del [concepto habitual de afiliado en VTEX](https://help.vtex.com/es/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0).

La aplicación **Affiliates Program** crea una URL específica de tu tienda VTEX para tus [afiliados registrados](#agregar-afiliado). Cuando el afiliado comparte su URL con un cliente y este realiza una compra a través del link, el afiliado recibe una comisión por la venta.

La aplicación crea dos grupos de páginas después de ser instalada en tu entorno VTEX:

- [Páginas de los afiliados](#paginas-de-los-afiliados)
- [Páginas en el Admin VTEX](#paginas-en-el-admin-vtex)

### Páginas de los afiliados

La aplicación crea tres tipos de páginas para los afiliados, que disponen de ellas sin necesidad de acceder al Admin VTEX de su tienda, como se indica en la siguiente tabla:

| **Tipo** | **URL** |
| ---------- | ---------- |
| Páginas del afiliado | `{storeName.com}/affiliates/{affiliateSlug}` |
| Página de perfil del afiliado | `{storeName.com}/affiliates/{affiliateSlug}/profile` |
| Página del formulario de registro | `{storeName.com}/affiliate/form` | 

La **página del afiliado** es la URL de la tienda VTEX que comparten con los clientes. Ve un ejemplo en la siguiente imagen:

![url_pagina_es_3](https://images.ctfassets.net/alneenqid6w5/3BxA8DMUUHVt7qZs5mYUhx/72903370216b4def73a08cc485c3c81d/url_pagina_es.png)

La **página del perfil del afiliado** es una interfaz a través de la cual pueden seguir y gestionar sus pedidos y comisiones. Ve un ejemplo en la siguiente imagen:

![profile_pagina_es_3](https://images.ctfassets.net/alneenqid6w5/37jFSHHD7RweXxkvOzelPL/25c11f8c83fe7871282c513bef26c2ee/profile_pagina_es.png)

La página de **registro** permite que los interesados en convertirse en afiliados completen sus datos para solicitar el registro en su tienda VTEX.

>ℹ️ Las páginas de afiliación son personalizables. Para más información, consulta la guía del desarrollador [Affiliates program app](https://developers.vtex.com/vtex-developer-docs/docs/affiliates-program-app).

### Páginas en el Admin VTEX

La aplicación **Affiliates program** crea interfaces en el Admin VTEX para que puedas gestionar todo el contenido relacionado con los afiliados.

Tras la [instalación](https://developers.vtex.com/vtex-developer-docs/docs/affiliates-program-app#installation) de la aplicación, las siguientes páginas estarán disponibles en tu Admin VTEX, en **Apps > Afiliados**:

- [Gestión de afiliados](#gestion-de-afiliados)
- [Gestión de pedidos](#gestion-de-pedidos)
- [Gestión de comisiones](#gestion-de-comisiones)

## Gestión de afiliados

La página **de Gestión de afiliados** permite realizar las siguientes acciones:

- [Agregar afiliado](#agregar-afiliado)
- [Buscar afiliados](#buscar-afiliados)
- [Filtrar afiliados](#filtrar-afiliados)
- [Ver detalles del afiliado](#ver-detalles-del-afiliado)
- [Editar afiliado](#editar-afiliado)

![affiliates_management_page_es](https://images.ctfassets.net/alneenqid6w5/7E41Gki569BjcMFnhsttH9/de5a0b8ff2c25569692f4c2eb99c730d/affiliates_management_page_es.jpg)

### Agregar afiliado

Para crear un nuevo afiliado, haz clic en el botón "Agregar afiliado", rellena los campos previstos y haz clic en "Guardar".

> Los siguientes campos son obligatorios: _Nombre_, _Email_, _Identificador de la URL_ y _Teléfono_.

### Buscar afiliados

Para buscar un afiliado, escribe en la barra de búsqueda cualquiera de los siguientes datos: _ID de afiliado, nombre, nombre de la tienda, email_ o _teléfono._

>⚠️ En la aplicación **Affiliates Program**, además de que el término afiliado es diferente al [concepto habitual de afiliado en VTEX](https://help.vtex.com/es/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0), el `ID de afiliado` tampoco coincide con el código por defecto. En la aplicación, el `ID de afiliado` es un código alfanumérico que se genera automáticamente cuando creas un nuevo afiliado.

### Filtrar afiliados

Para filtrar la búsqueda de afiliados, haz clic en `Todos` <i class="fas fa-toggle-on"></i> y selecciona la opción deseada. La opción por defecto `Todos` realiza la búsqueda en todos tus afiliados, y las otras opciones corresponden a la aprobación: `Sí` para los afiliados aprobados y `No` para los miembros no aprobados.

### Ver detalles del afiliado

Para ver los detalles de un afiliado, en su fila, haz clic en <i class="fas fa-ellipsis-v"></i> **Más acciones**, y luego en <i class="fas fa-eye"></i> **Detalles**. Se te redirigirá a una página donde podrás ver información sobre el afiliado y también realizar las siguientes acciones:

- **Activar el afiliado**: haciendo clic en en `¿Activo?` <i class="fas fa-toggle-on"></i>.
- **Acceder a la página [Gestión de pedidos](#gestion-de-pedidos) de los afiliados:** haciendo clic en el botón `Gestión de pedidos`.
- **Editar afiliado:** haciendo clic en el botón `Editar`.

### Editar afiliado

Para editar un afiliado con el fin de modificar su registro, sigue los pasos a continuación:

1. En la fila del afiliado, haz clic en <i class="fas fa-ellipsis-v"></i> **Más acciones**.
2. Haz clic en <i class="fas fa-pencil-alt"></i> **Editar**.
3. Edita los datos de registro.
4. Haz clic en `Guardar`.

## Gestión de pedidos

La página de **Gestión de pedidos** permite realizar las siguientes acciones:

- [Seguir dashboard](#seguir-dashboard)
- [Buscar pedidos](#buscar-pedidos)
- [Filtrar pedidos](#filtrar-pedidos)
- [Exportar plantilla de pedidos](#exportar-lista-de-pedidos)
- [Ver detalles del pedido](#ver-detalles-del-pedido)

![orders_management_page_es](https://images.ctfassets.net/alneenqid6w5/4oecP3rDffWqrP0KtvOhrp/56d938c239cb62d2396e4152adf5df08/orders_management_page_es.jpg)

### Seguir dashboard

En la parte superior de la página, verás las siguientes métricas sobre los pedidos realizados a través de los links de uno o más afiliados:

- **Total de pedidos:** número total de pedidos de los afiliados.
- **Total del pedido:** suma de los valores del pedido, realizada a partir del precio de los ítems y sin incluir los gastos de envío.
- **Total de la comisión del pedido:** suma de los valores de las comisiones de los afiliados sobre los pedidos.

>ℹ️ Para seguir el flujo de un pedido, haz clic en el `ID del pedido`. De este modo, se te redirigirá a **Pedidos > Todos los pedidos** en el Admin VTEX. 

### Buscar pedidos

Para buscar un pedido, introduce en la barra de búsqueda el `ID de afiliado` relacionado con el pedido. Puedes realizar esta búsqueda asociada al uso de filtros, como se verá [a continuación](#filtrar-pedidos).

### Filtrar pedidos

Puedes filtrar la búsqueda de pedidos por los siguientes criterios:

- **Status del pedido:** la opción por defecto es mostrar todos los pedidos. Para seleccionar un status de pedido, haz clic en **Todos los pedidos** <i class="fas fa-angle-down"></i> y selecciona una de las opciones: _creado, pago aprobado, pago pendiente, facturado_ o _cancelado_. Más información en [Flujo y status de pedidos](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196).
- **Periodo de creación del pedido:** filtra a partir de un rango de días y horas durante los cuales se crearon los pedidos. Para ello, determina una fecha de inicio en el campo `De` y una fecha de fin en el campo `Hasta`.

### Exportar lista de pedidos

La aplicación **Affiliates Program** te permite exportar una lista con extensión CSV de los pedidos de los afiliados.

>⚠️ Para activar la función de exportación de listas, primero debes configurar las plantillas de email, como se describe en la guía para desarrolladores [Affiliates Program app](https://developers.vtex.com/vtex-developer-docs/docs/affiliates-program-app#email-templates).

Tras la configuración, para exportar la lista basta con hacer clic en **Exportar** en la página **Gestión de pedidos**. El siguiente mensaje de confirmación deberá aparecer:

> _El informe se está generando y se enviará a tu email._

El archivo generado se enviará al email del [usuario](https://help.vtex.com/es/tutorial/gerenciando-usuarios--tutorials_512) conectado. El contenido exportado se refiere al número total de pedidos de la lista en el momento de la exportación. Si algún filtro está activo, solo se exportarán los anuncios seleccionados.

### Ver detalles del pedido

Para ver los detalles de un pedido, en la fila del pedido, haz clic en <i class="fas fa-ellipsis-v"></i> **Más acciones**, y luego en <i class="fas fa-eye"></i> **Detalles**.

## Gestión de comisiones

La página de **Gestión de comisiones** permite realizar las siguientes acciones:

- [Buscar comisiones](#buscar-comisiones)
- [Editar comisiones](#editar-comisiones)
- [Exportar plantilla de comisiones](#exportar-plantilla-de-comisiones)
- [Importar comisiones](#importar-comisiones)
- [Descargar la última importación](#descargar-la-ultima-importacion)

![commissions_ management_page_es](https://images.ctfassets.net/alneenqid6w5/4sPaoOQE8vAbN9tsCMS7zt/a87a79d01580e58605e0a21461d8a381/commissions__management_page_en.png)

### Buscar comisiones

Para buscar entre las comisiones de los pedidos, en la barra de búsqueda de la pestaña **Comisiones registradas**, escribe el `ID de SKU` del pedido, es decir, el número que [identifica el SKU](https://help.vtex.com/es/tutorial/descobrir-o-id-de-um-sku--4VQZsYeb3igGK2YowuEYWW).

### Editar comisiones

Puedes cambiar el valor porcentual de una comisión siguiendo las instrucciones a continuación.

1. En la pestaña **Comisiones registradas**, en la fila de la comisión que deseas editar, haz clic en <i class="fas fa-ellipsis-v"></i> **Más acciones**.
2. Haz clic en <i class="fas fa-pencil-alt"></i> **Editar**.
3. En el modal abierto, introduce el número de la comisión deseada. No se aceptan los decimales.
4. Haz clic en `Confirmar`.

El siguiente mensaje debe aparecer:

> _Comisión actualizada con éxito_

### Exportar plantilla de comisiones

Para exportar una plantilla de comisiones por SKU con extensión .CSV, en la parte superior de la página **Gestión de comisiones**, haz clic en **Exportar**. El siguiente mensaje de confirmación deberá aparecer:

> _El informe se está generando y se enviará a tu email._

El archivo se enviará al email del [usuario](https://help.vtex.com/es/tutorial/gerenciando-usuarios--tutorials_512) conectado.

>ℹ️ El contenido exportado se refiere a las comisiones de los SKU de la lista en el momento de la exportación. Si algún filtro está activo, solo se exportarán las comisiones de SKU seleccionadas.

### Importar comisiones

Puedes hacer una actualización masiva de comisiones por SKU, según el paso a paso que se indica a continuación. Si lo deseas, puedes utilizar una plantilla haciendo clic en `plantilla en XLSX`.

1. Ve a la pestaña **Importar comisiones**.
2. Arrastra y suelta el archivo en formato CSV o XLSX en el área punteada, o haz clic en `seleccionar un archivo`.
3. Haz clic en `Enviar archivo`.

Comprueba que aparece el siguiente mensaje:

> _El archivo se está procesando_

El nombre del archivo agregado aparecerá junto al campo `Última importación`.

>ℹ️ Puedes identificar la fecha de importación y el usuario que realizó la acción pasando el cursor por encima del símbolo `?` debajo de `Última importación`.

### Descargar la última importación

El último archivo importado está disponible para su descarga. Para descargarla, ve a la pestaña **Importar comisiones**, identifica el nombre del archivo junto a `Última importación` y haz clic en él.
