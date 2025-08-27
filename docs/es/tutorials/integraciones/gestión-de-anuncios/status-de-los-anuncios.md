---
title: 'Status de los anuncios'
id: 2OE87wU26F7lApl99OdwvJ
status: PUBLISHED
createdAt: 2023-09-29T19:16:05.771Z
updatedAt: 2024-11-27T00:05:01.148Z
publishedAt: 2024-11-27T00:05:01.148Z
firstPublishedAt: 2023-09-29T20:07:16.003Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: offer-status
legacySlug: estado-del-anuncio-beta
locale: es
subcategoryId: 2zVauFUkYn8vgS0y0MfWeK
---

El módulo **Status de los anuncios** permite a los sellers realizar un seguimiento del envío y la sincronización de los anuncios de las integraciones con los canales de venta. En VTEX, un anuncio es un SKU activo de un seller que ha configurado su precio y stock, y lo ha enviado a un canal de ventas.  

En **Status de los anuncios** se puede llevar a cabo un seguimiento de los anuncios enviados únicamente a los marketplaces VTEX. Para acceder al módulo en el Admin VTEX, ve a **Marketplace > Conexiones > Status de los anuncios,** o ingresa **Status de los anuncios** en la barra de búsqueda.  

![Pantalla de estado de la oferta](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/gesti%C3%B3n-de-anuncios/status-de-los-anuncios_1.gif)

La página **Status de los anuncios** está compuesta por tres pestañas: **[Publicados](#pestana-publicados)**, **[Problemas](#pestana-problemas)** y **[A la espera de finalización.](#pestana-a-la-espera-de-finalizacion)** Todas ellas presentan una lista de tus anuncios de acuerdo con su status actual. Accede y consulta los detalles de cada anuncio, como status, stock, precio, fecha de actualización y los motivos de rechazo en el marketplace.

![Estado de los anuncios shcema](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/gesti%C3%B3n-de-anuncios/status-de-los-anuncios_2.png)

## Pestaña Publicados

En la pestaña **Publicados**, el seller puede hacer un seguimiento de los anuncios enviados que ya han sido aprobados por el marketplace. En esta pestaña están disponibles las siguientes acciones:

- [Buscar y filtrar anuncios](#buscar-y-filtrar-anuncios)
- [Ver información de los anuncios](#ver-informacion-de-los-anuncios)
- [Editar información de los anuncios](#editar-informacion-de-los-anuncios)
- [Exportar la lista de anuncios publicados](#exportar-la-lista-de-anuncios-publicados)

### Buscar y filtrar anuncios

En la parte superior derecha de la página hay una barra de búsqueda con el ícono de una lupa<i class="fas fa-search"></i>, en la que puedes buscar un anuncio por el **ID del SKU y el nombre del anuncio.**

Además, los resultados de la búsqueda pueden filtrarse según los siguientes criterios:

- **Marketplace:** canal de ventas al que se envió el anuncio.
- **Stock:** cantidad de stock de un producto, que puede ser:
  - Mínimo: número mínimo de ítems en stock de un producto.
  - Máximo: número máximo de ítems en stock de un producto.
- **Actualización:** status de actualización de precios y stock de los anuncios ya publicados.

Para filtrar los anuncios por **Marketplace**, haz clic en la flecha hacia abajo situada junto al término, marca en la casilla de selección los marketplaces deseados y, a continuación, haz clic en **Aplicar**.

Para filtrar los anuncios por **Stock**, haz clic en la flecha hacia abajo situada junto al filtro, ingresa el número de stock mínimo, stock máximo, o ambos, y haz clic en **Aplicar**.

![Filtro estoque offer status](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/gesti%C3%B3n-de-anuncios/status-de-los-anuncios_3.png)

Para filtrar los anuncios por **Actualización**, haz clic en la flecha hacia abajo situada junto al filtro, selecciona una de las opciones y haz clic en **Aplicar.**

Consulta a continuación las opciones disponibles para este filtro:

- **Actualizados**: son anuncios cuyo precio y/o stock han sido actualizados por el seller y se procesaron con éxito.
- **Error al actualizar:** anuncios que presentaban inconsistencias y, por lo tanto, no pudieron ser actualizados.

![Filtro atualizado offer status](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/gesti%C3%B3n-de-anuncios/status-de-los-anuncios_4.png)

Puedes utilizar un único filtro o combinarlos en una misma búsqueda. Los filtros no vienen preseleccionados de manera predeterminada, lo que significa que la página inicial mostrará la cantidad total de anuncios existentes.

### Ver información de los anuncios

En la parte superior de la página **Status de los anuncios** se muestran los anuncios del seller con la siguiente información:

- Número de anuncios publicados en relación con los anuncios enviados.
- Número de anuncios con status **Actualizado.**
- Número de anuncios con status **Error al actualizar.**

En la lista de anuncios se muestran columnas con la siguiente información:

| **Columna** | **Descripción** |
|---|---|
| **Nombre** | Muestra la imagen del SKU, el título del anuncio en el canal de ventas y el ID del SKU en VTEX. |
| **Marketplace** | Canal de ventas al que se envió el anuncio. |
| **Precio** | Precio del SKU del anuncio. |
| **Stock** | Cantidad de items en  [stock](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) para el SKU del anuncio. |
| **Actualización** | Estado del proceso de la actualización, pudiendo ser Actualizados <i class="far fa-check-circle"></i> o Error al actualizar<div class="error-icon"></div>. |

Para ordenar los anuncios en orden ascendente o descendente haz clic en los nombres de las columnas. Por ejemplo, al hacer clic en la columna **Precio**, la lista se organiza por el precio del anuncio, ya sea de menor a mayor o de mayor a menor.

### Editar información de los anuncios

Al hacer clic en un anuncio se abrirá una ventana con barras informativas con los siguientes datos:

- **Precio:** muestra el precio actual del anuncio, cuándo se produjo la última actualización y si se realizó correctamente o no.
- **Stock:** cuál es el stock actual del ítem anunciado, cuándo se produjo la última actualización y si se realizó correctamente o no.
- **Contenido:** cuándo se actualizó el contenido por última vez y si la actualización se realizó correctamente o no.

Para actualizar la información de un anuncio ya publicado el seller debe realizar los siguientes pasos:

1. En la pestaña **Publicados** haz clic en el anuncio deseado.
2. Haz clic en el <i class="fas fa-ellipsis-v"></i> ícono de tres puntos de la esquina superior derecha.
3. Haz clic en una de las opciones:
    - **Editar precio**
    - **Editar stock**
    - **Editar contenido**

Serás redirigido a la página correspondiente para realizar los cambios necesarios.

![Ações offer status](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/gesti%C3%B3n-de-anuncios/status-de-los-anuncios_5.png)

### Exportar la lista de anuncios publicados

Para exportar la lista de anuncios publicados en formato XLSX, haz clic sobre el ícono flecha hacia abajo, ubicado en la parte superior de la interfaz. El archivo se enviará al email del usuario registrado. El tiempo que tarde la exportación dependerá de la cantidad de anuncios de la lista exportada y de cuestiones de procesamiento de la plataforma VTEX.

> ℹ️ El contenido exportado incluirá el total de anuncios de la lista al momento de la exportación. Si hay algún filtro activo, solo se exportarán los anuncios seleccionados.

## Pestaña Problemas

En la pestaña **Problemas** el seller puede hacer un seguimiento de los anuncios enviados que no fueron aprobados por el marketplace. En esta pestaña también puedes realizar las siguientes acciones:

- [Buscar y filtrar anuncios](#buscar-y-filtrar-anuncios)
- [Ver detalles del problema](#ver-detalles-del-problema)
- [Editar información de los anuncios](#editar-informacion-de-los-anuncios)
- [Exportar la lista de anuncios con problemas](#exportar-la-lista-de-anuncios-con-problemas)

### Buscar y filtrar anuncios con problemas

En la parte superior derecha de la página hay una barra de búsqueda con un ícono de lupa <i class="fas fa-search"></i>, en la que puedes buscar un anuncio por:

- Nombre del anuncio
- ID del SKU

Además, los resultados de la búsqueda pueden filtrarse según los siguientes criterios:

- **Marketplace:** canal de venta al que se envió el anuncio.
- **Enviados:** pueden consultarse tres periodos predeterminados desde que el anuncio se envió al marketplace; *Hoy***,** *Últimos 7 días* y *El mes pasado*.
- **Stock:** cantidad de stock de un producto, que puede ser:
    - `Mínimo:` número mínimo de ítems en stock de un producto.
    - `Máximo:` número máximo de ítems en stock de un producto.

Para filtrar los anuncios por **Marketplace**, haz clic en la flecha hacia abajo situada junto al término, marca en la casilla de selección los marketplaces deseados y, a continuación, haz clic en **Aplicar**.

Para filtrar los anuncios por **Enviados**, haz clic en la flecha hacia abajo situada junto al filtro, selecciona una de las opciones y haz clic en **Aplicar.**

Para filtrar los anuncios por **Stock**, haz clic en la flecha hacia abajo situada junto al filtro, ingresa el número de stock mínimo, stock máximo, o ambos, y haz clic en **Aplicar**.

![Filtro estoque offer status](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/gesti%C3%B3n-de-anuncios/status-de-los-anuncios_6.png)

Puedes utilizar un único filtro o combinarlos en una misma búsqueda. Los filtros no vienen preseleccionados de manera predeterminada, lo que significa que la página inicial mostrará la cantidad total de anuncios existentes.

### Ver detalles del problema**

En la pestaña **Problemas** puedes ver la lista de anuncios junto con la siguiente información presentada en columnas:

| **Columna** | **Descripción** |
|---|---|
| **Nombre** | Muestra la imagen del SKU, el título del anuncio en el canal de ventas y el ID del SKU en VTEX. |
| **Marketplace** | Canal de ventas al que se envió el anuncio. |
| **Precio** | Precio del SKU del anuncio. |
| **Stock** | Cantidad de items en  [stock](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) para el SKU del anuncio. |
| **Problemas** | Número de problemas identificados en el anuncio. |
| **Enviados** | Fecha en la que el anuncio se envió al marketplace.|

Para ordenar los anuncios en orden ascendente o descendente haz clic en los nombres de las columnas.

### Editar información de los anuncios

Al hacer clic en un anuncio se abrirá una ventana con una barra que te informará de los errores encontrados en el anuncio, enumerados a continuación:

- **Posibles errores**
  - **Anuncio rechazado por el marketplace:** este mensaje informa que el marketplace no aceptó el anuncio debido a que no cumple con los requisitos establecidos.
  - **Es necesario actualizar el stock:** cuando el SKU del ítem anunciado no tiene stock configurado.
  - **Es necesario actualizar el precio:** cuando no se ha configurado el precio de un anuncio.

Para actualizar cualquier información de un anuncio con problemas el seller debe realizar los siguientes pasos:

1. En la pestaña **Problemas**, haz clic en el anuncio deseado.  
2. Haz clic en el ícono <i class="fas fa-ellipsis-v"></i> de tres puntos de la esquina superior derecha.  
3. Haz clic en una de las opciones:  
  - **Editar precio**  
  - **Editar stock**  
  - **Editar contenido**  

Serás redirigido a la página correspondiente para realizar los cambios necesarios.

### Exportar la lista de anuncios con problemas

Para exportar la lista de anuncios con problemas en formato XLSX, haz clic sobre el ícono flecha hacia abajo, ubicado en la parte superior de la interfaz. El archivo se enviará al email del usuario registrado. El tiempo que tarde la exportación dependerá de la cantidad de anuncios de la lista exportada y de cuestiones de procesamiento de la plataforma VTEX.

> ℹ️ El contenido exportado incluirá el total de anuncios de la lista al momento de la exportación. Si hay algún filtro activo, solo se exportarán los anuncios seleccionados.

## Pestaña A la espera de finalización

En la pestaña **A la espera de finalización** el seller puede realizar un seguimiento de los anuncios que están pendientes de ser analizados por el marketplace. En esta pestaña también puedes realizar las siguientes acciones:

- [Buscar y filtrar anuncios](#buscar-y-filtrar)
- [Editar información de los anuncios](#editar-informacion-de-los-anuncios)
- [Exportar la lista de anuncios en espera de finalización](#exportar-la-lista-de-anuncios-en-espera-de-finalizacion)

### Buscar y filtrar anuncios en análisis

En la parte superior derecha de la página hay una barra de búsqueda con el ícono de una lupa <i class="fas fa-search"></i>, en la que puedes buscar un anuncio por:

- Nombre del anuncio
- ID del SKU

Además, los resultados de la búsqueda pueden filtrarse según los siguientes criterios:

- **Marketplace** canal de ventas al que se envió el anuncio.
- **Enviados:** pueden consultarse tres periodos predeterminados desde que el anuncio se envió al marketplace: **Hoy, Últimos 7 días** y **El mes pasado**.

Para filtrar los anuncios por **Marketplace**, haz clic en la flecha hacia abajo situada junto al término, marca en la casilla de selección los marketplaces deseados y, a continuación, haz clic en **Aplicar**.

Para filtrar los anuncios por **Enviados**, haz clic en la flecha hacia abajo situada junto al filtro, selecciona una de las opciones y haz clic en **Aplicar.**

Puedes utilizar un único filtro o combinarlos en una misma búsqueda. Los filtros no vienen preseleccionados de manera predeterminada, lo que significa que la página inicial mostrará la cantidad total de anuncios existentes.

### Editar información de los anuncios

En la pestaña **A la espera de finalización** puedes consultar la lista de anuncios junto con la siguiente información presentada en columnas:

| **Columna** | **Descripción** |
|---|---|
| **Nombre** | Muestra la imagen del SKU, el título del anuncio en el canal de ventas y el ID del SKU en VTEX. |
| **Marketplace** | Canal de ventas al que se envió el anuncio. |
| **Enviados** | Fecha en la que el anuncio se envió al marketplace.|

Para ordenar los anuncios en orden ascendente o descendente haz clic en los nombres de las columnas.

Para actualizar la información de un anuncio en análisis deben seguirse los pasos a continuación:

1. En la pestaña **A la espera de finalización**, haz clic en el anuncio deseado.
2. Haz clic en el ícono <i class="fas fa-ellipsis-v"></i> de tres puntos de la esquina superior derecha.
3. Haz clic en una de las opciones:
    - **Editar precio**
    - **Editar stock**
    - **Editar contenido**

Serás redirigido a la página correspondiente para realizar los cambios necesarios.

### Exportar la lista de anuncios en espera de finalización

Para exportar la lista de anuncios en espera de finalización en formato XLSX, haz clic sobre el ícono flecha hacia abajo, ubicado en la parte superior de la interfaz. El archivo se enviará al email del usuario registrado. El tiempo que tarde la exportación dependerá de la cantidad de anuncios de la lista exportada y de cuestiones de procesamiento de la plataforma VTEX.

> ℹ️ El contenido exportado incluirá el total de anuncios de la lista al momento de la exportación. Si hay algún filtro activo, solo se exportarán los anuncios seleccionados.
