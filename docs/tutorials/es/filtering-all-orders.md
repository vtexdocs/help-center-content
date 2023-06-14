---
title: Filtrar pedidos en Todos los pedidos
id: tutorials_192
status: PUBLISHED
createdAt: 2017-04-27T22:15:05.494Z
updatedAt: 2023-05-31T14:45:05.491Z
publishedAt: 2023-05-31T14:45:05.491Z
firstPublishedAt: 2017-04-27T23:00:47.449Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: filtrar-todos-los-pedidos
legacySlug: como-filtrar-pedidos
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

En el módulo **Pedidos**, la página **Todos los pedidos** permite acceder a todos los pedidos de la tienda y buscar utilizando la barra de búsqueda y filtros según se muestra en la imagen a continuación:

![search_bar_ES](https://images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/daa7bf97f15445140cba0433da887aa5/search_bar_ES.png)

Este artículo explica cómo utilizar estos recursos y se divide en:

- [Barra de búsqueda](#barra-de-busqueda)
- [Filtros](#filtros)
- [Filtrar por status](#filtrar-por-status)
- [Creado](#creado)

## Barra de búsqueda

Para realizar una búsqueda en la barra de búsqueda, ingresa el término deseado y pulsa la tecla `Intro`. Puedes buscar utilizando los siguientes criterios:

- Nombre del cliente
- Documento del cliente
- Email del cliente
- ID del pedido
- Sequence

El [sequence](https://help.vtex.com/es/tutorial/cuidados-ao-definir-a-numeracao-de-pedido--VAKKptfcaOxFxM8gfPobu) es una secuencia de seis dígitos que aparece en el Admin VTEX justo después del ID del pedido. Por ejemplo, en el pedido `1268540501456-01 (501456)`, el ID del pedido es `1268540501456`, el `-01` indica que el cumplimiento será realizado por un seller y el sequence es `501456`.

<div class = "alert alert-info">
Además de los criterios enumerados anteriormente, es posible activar otros criterios de búsqueda, como se verá en la sección <a href="https://help.vtex.com/es/tutorial/filtrar-todos-pedidos--tutorials_192#filtros-otros">Otros</a>.
</div>

De forma predeterminada, la página **Todos los pedidos** se muestra con el filtro de pedidos creados **Hoy** activado. Para buscar otras fechas, utiliza los filtros descritos en [Filtros: Fechas](#filtros-fechas) y [Creado](#creado).

Puedes [buscar en todos los pedidos](#buscar-en-todos-los-pedidos) o [buscar asociando filtros](#buscar-asociando-filtros).

### Buscar en todos los pedidos

La búsqueda en todos los pedidos devuelve todos los pedidos relacionados con el criterio utilizado, independientemente de la fecha de creación del pedido. Es posible, por ejemplo, acceder al historial completo de compras de un cliente utilizando su nombre, email o documento.

Para buscar en todos los pedidos, ingresa el término deseado en la casilla de búsqueda. Se mostrará la opción <i class="fas fa-toggle-on"></i> `Remover límite de fechas`. Solo hay que activarla para iniciar la búsqueda.

![search_bar_without_time_limit_ES](https://images.ctfassets.net/alneenqid6w5/2ii9VFh5uRpG4Ad0nwIIN0/3e96ddad7e6e25df9bfc57510655390b/search_bar_without_time_limit_ES.png)

<div class="alert alert-danger">
La búsqueda en todos los pedidos no se puede asociar a otros filtros. Es decir, al remover el límite de fechas de búsqueda, cualquier filtro activo pasa a estar inactivo. Si se remueve el término de búsqueda o se desactiva el botón de alternancia <i class="fas fa-toggle-off"></i>, los filtros configurados anteriormente se vuelven a activar.
</div>

### Buscar asociando filtros

Realizar una búsqueda con filtros permite combinar diferentes filtros que se describen en las secciones:

- [Filtros](#filtros)
- [Filtrar por status](#filtrar-por-status)
- [Creado](#creado)

## Filtros

La página **Pedidos > Todos los pedidos** tiene la opción `Filtros` según se muestra en la imagen a continuación:

![search_bar_ES](https://images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/daa7bf97f15445140cba0433da887aa5/search_bar_ES.png)

Al hacer clic en `Filtros`, se muestra una ventana modal que presenta las siguientes opciones:

- Fechas
- Canales
- Status
- Otros

Para que se aplique un filtro a la búsqueda, selecciona la opción deseada y haz clic en **Aplicar**. Para remover los filtros aplicados, haz clic en **Limpiar filtros > Aplicar**.

<div class = "alert alert-info">
De forma predeterminada, la opción <i class="fas fa-toggle-on"></i> <b>Utilizar mi zona horaria: GMT-3</b> aparece activada para todos los filtros. Cuando se desactiva, la referencia de zona horaria cambia a GMT-0 y, si se vuelve a activar, se convierte en la zona horaria utilizada por el navegador del usuario.
</div>

Si no hay ninguna coincidencia para la combinación de filtros utilizada, la búsqueda no devuelve ningún pedido en la pantalla.

A continuación, se describen los filtros existentes en `Filtros`.

### Filtros: Fechas

Los filtros de **Fechas** se refieren a los criterios de fechas y periodos, como, por ejemplo, cuándo se entregará o autorizará un pedido. Al hacer clic en `Filtros`, de forma predeterminada, **Fechas** es la opción disponible.

Puedes buscar la opción deseada utilizando la barra de búsqueda o haciendo clic en el menú desplegable <i class="fas fa-angle-down"></i> al lado de las opciones:

- **Fecha de entrega:** periodo previsto para la entrega del pedido:
    - Próximos 7 días
    - Mañana
    - Hoy
    - Atrasado
- **Fecha de facturación:** fecha en que se facturó el pedido:
    - Hoy
    - Ayer
    - Últimos 7 días
    - Mes actual
    - Últimos 30 días
    - Personalizada
- **Fecha del pedido: **fecha en que se realizó el pedido:
    - Hoy
    - Ayer
    - Últimos 7 días
    - Mes actual
    - Últimos 30 días
    - Personalizada
- **Fecha de autorización:** fecha en que el pedido fue autorizado por el operador/gateway de pago:
    - Hoy
    - Ayer
    - Últimos 7 días
    - Mes actual
    - Últimos 30 días
    - Personalizada

Después de seleccionar los filtros deseados, haz clic en `Aplicar`.

### Filtros: Canales

Los filtros de **Canales** realizan la selección por canales de venta y otros aspectos del pedido. Para utilizarlos, haz `Filtros` y selecciona **Canales**. Puede que algunas de las opciones mencionadas no aparezcan en tu Admin VTEX, ya que puede depender de la configuración de tu tienda.

Puedes buscar la opción de filtro deseada utilizando la barra de búsqueda o haciendo clic en el menú desplegable <i class="fas fa-angle-down"></i> al lado de las siguientes opciones:

- **Seller:** muestra el [ID de los sellers](https://help.vtex.com/es/tutorial/adicionar-seller--tutorials_392) de tu tienda y filtra por seller encargado de realizar el fulfillment del pedido.
- **Política comercial:** muestra las[ políticas comerciales](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) de tu tienda y filtra por la política comercial utilizada en el pedido.
- **Campaña:** muestra los[ públicos de campaña](https://help.vtex.com/es/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m) de tu tienda y filtra por el público objetivo de una promoción.
- **Operador de televentas:** muestra los operadores de [televentas](https://help.vtex.com/es/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS) de tu tienda.
- **Fuente UTM:** muestra las opciones de[ fuente UTM](https://help.vtex.com/es/tutorial/o-que-sao-utm-source-utm-campaign-e-utm-medium--2wTz7QJ8KUG6skGAoAQuii) configuradas en tu tienda. Los UTM (Urchin Tracking Modules) son parámetros de URL comúnmente utilizados en contextos de marketing y promociones para rastrear el tráfico de accesos a un sitio web.

Después de seleccionar los filtros deseados, haz clic en `Aplicar`.

### Filtros: Status

Los filtros de **Status** se refieren al status del pedido al momento de búsqueda en relación con el [flujo del pedido](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196) o errores. Para utilizarlos, haz clic en `Filtros` y selecciona **Status**. Puedes buscar la opción deseada utilizando la barra de búsqueda o haciendo clic en el menú desplegable <i class="fas fa-angle-down"></i> al lado de las opciones:

- **Status del pedido:** estado del pedido en el [flujo del pedido](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196). Las opciones que aparecen corresponden a los status de pedidos que hay en tu tienda. Por ejemplo, si no hay pedidos cancelados entre tus pedidos, esta opción no estará visible. Algunos de los filtros de status de pedido son:
    - Pago aprobado
    - Pago pendiente
    - Preparando envío
    - Listo para preparación
    - Esperando para cambiar el seller
- **Status completado:** si un pedido tiene la información completa para ser finalizado en la plataforma o si es un [pedido incompleto](https://help.vtex.com/es/tutorial/entendendo-os-pedidos-incompletos--tutorials_294):
    - Incompleto
- **Status de error:** muestra los tipos de error:
    - Error permanente
    - Error temporal
    - Cualquier error

Después de seleccionar los filtros deseados, haz clic en `Aplicar`.

### Filtros: Otros

Los filtros de **Otros** se refieren a varios temas, algunos de los cuales varían según la configuración de tu tienda. Por eso, puede que algunas de las opciones que se mencionan aquí no estén disponibles en tu Admin VTEX.

Para utilizar estos filtros, haz `Filtros` y selecciona **Otros**. Puedes buscar la opción deseada utilizando la barra de búsqueda o haciendo clic en el menú desplegable <i class="fas fa-angle-down"></i> al lado de las opciones:

- **Otros campos:** campos que pueden ser utilizados para filtrar resultados. Después de seleccionar el campo, debes ingresar el valor en la barra de búsqueda <i class="fas fa-search"></i> `Buscar en Otros`.
    - ID del pedido
    - ID de SKU
    - ID de lista de regalos
    - ID de transacción (TID)
    - ID de la transacción (TID) del conector PCI
    - ID de pago (PID)
    - NSU del conector (Brasil)
- **Tipo de pago:** muestra los [medios de pago](https://help.vtex.com/es/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) configurados en tu tienda.
- **Promociones:** muestra las promociones registradas en tu tienda.
- **Moneda:** muestra las monedas registradas en la [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) y que fueron utilizadas en los pedidos.
- **Nombre del host:** muestra tu[ nombre de cuenta](https://help.vtex.com/es/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC), que es la identificación de tu empresa en el sistema VTEX.
- **B2B:** selecciona `true` para filtrar por pedidos realizados en tiendas[ B2B](https://help.vtex.com/es/tutorial/b2b-visao-geral--5vb9SNXhX2bZnkpAh7ADdC) o `false` para filtrar por pedidos realizados en otro modelo de negocio.
- **VTEX Sales App:** selecciona `true` para filtrar por pedidos realizados utilizando[ VTEX Sales App](https://help.vtex.com/es/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) o `false` para filtrar por pedidos que no utilizaron VTEX Sales App.
- **Canal de entrega:** muestra el tipo de envío del pedido, si es entrega o recogida en un[ punto de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R). La opción de recogida solo aparece en las tiendas que hayan configurado esta funcionalidad.
- **País:** muestra el país en que se realizó el pedido.
- **Tiene factura de devolución:** identifica si los pedidos tienen una factura de devolución mediante los valores `true` (sí) o `false` (no).
- **Tiene factura:** identifica si los pedidos tienen factura mediante los valores `true` (sí) o `false` (no).

## Filtrar por status

La página **Pedidos > Todos los pedidos** tiene la opción `Filtrar por status` <i class="fas fa-angle-down"></i> según se muestra en la siguiente imagen:

![search_bar_ES](https://images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/daa7bf97f15445140cba0433da887aa5/search_bar_ES.png)

Al hacer clic en `Filtrar por status` <i class="fas fa-angle-down"></i>, se muestran las opciones de [status de pedidos](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196) de tu tienda. Por ejemplo, si no hay pedidos cancelados entre todos tus pedidos, esta opción no estará visible.

<div class = "alert alert-info">
Para más opciones de filtros de status, consulta la sección <a href="https://help.vtex.com/es/tutorial/filtrar-todos-pedidos--tutorials_192#filtros-status">Filtros: Status</a>. Si deseas ver todos los status de pedidos que hay, consulta el artículo <a href="https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196">Flujo y status de pedidos</a>.
</div>

## Creado

La página **Pedidos > Todos los pedidos** tiene la opción `Creado: Hoy` <i class="fas fa-angle-down"></i> según se muestra en la siguiente imagen:

![search_bar_ES](https://images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/daa7bf97f15445140cba0433da887aa5/search_bar_ES.png)

Este filtro tiene la fecha **Hoy** activada como estándar, pero al hacer clic aparecen las siguientes opciones:

- Hoy
- Ayer
- Últimos 7 días
- Mes actual
- Últimos 30 días

<div class = "alert alert-info">
De forma predeterminada, la opción <i class="fas fa-toggle-on"></i> <b>Utilizar mi zona horaria: GMT-3</b> está activada. Cuando se desactiva, la referencia de zona horaria cambia a GMT-0 y, si se vuelve a activar, se convierte en la zona horaria utilizada por el navegador del usuario.
</div>

Para ver más opciones de filtros de fechas y periodos, consulta la sección [Filtros: Fechas](#filtros-fechas).
