---
title: 'Pagos en los marketplaces VTEX'
id: 2kYOfWCZYweJkYl18bw9yD
status: PUBLISHED
createdAt: 2022-01-26T20:27:07.040Z
updatedAt: 2023-03-22T19:01:11.613Z
publishedAt: 2023-03-22T19:01:11.613Z
firstPublishedAt: 2022-01-26T21:27:07.735Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: payments-in-vtex-marketplaces
legacySlug: pagos-en-los-marketplaces-vtex
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En este artículo, trataremos los diferentes escenarios relacionados con los pagos en los [marketplaces VTEX](/es/docs/tutorials/estrategias-de-marketplace-en-vtex#ser-um-marketplace-vtex) y su configuración.

Para los clientes de VTEX en Brasil, tanto el seller como el marketplace pueden procesar los pagos, según las condiciones comerciales negociadas entre ellos y el proveedor de pagos.

Consulta a continuación las opciones para Split de pagos y la configuración necesaria para que el seller o el marketplace procese los pagos.

## Split de pagos

Los pedidos realizados en un marketplace pueden contener ítems de varios sellers, que se pagan en una experiencia de checkout unificada en el storefront del marketplace. VTEX ofrece la solución [Split de pagos](/es/docs/tutorials/split-de-pagos) para que la división del valor del pedido se haga automáticamente, según las comisiones configuradas al [agregar el seller](/es/docs/tutorials/agregar-seller).

Si el seller es el procesador de pagos, debe operar bajo las condiciones establecidas en nuestro [Split de transacción](/es/tutorial/split-payment#split-de-transacao). Asimismo, si el marketplace VTEX se encarga de procesar los pagos, debe seguir el flujo del [Split de cobros](/es/docs/tutorials/split-de-pagos#split-de-recebiveis) o realizar sus transferencias fuera del entorno VTEX.

> ℹ️ Los clientes de VTEX en Brasil pueden utilizar tanto el split de transacción como el split de cobros. Los clientes de VTEX en otros países solo deben utilizar el split de transacción. Ten en cuenta que algunos países imponen restricciones a la transferencia de valores entre sellers y marketplaces. Infórmate de las restricciones con las autoridades financieras de tu país antes de construir tu arquitectura de pagos.

Para establecer los valores de transferencias externas al entorno VTEX, utiliza los [informes del OMS](/es/docs/tutorials/informe-de-pedidos) para calcular las comisiones. En Brasil, la transferencia de valores en un entorno externo, sin la participación de la plataforma VTEX, solo puede realizarse por las instituciones financieras.

## Configuración de pagos

Consulta a continuación la configuración necesaria en tu Admin VTEX para crear comisiones sobre pedidos de sellers y para hacer que el seller o el marketplace sea el procesador de pagos.

> ℹ️ En caso de que la integración con sellers externos o sellers VTEX se haga mediante API, consulta [External seller processing payment](https://developers.vtex.com/vtex-rest-api/docs/external-seller-processing-payments).

### Configurar comisiones para los sellers

Al [agregar un seller](/es/docs/tutorials/agregar-seller), el marketplace configura las comisiones por producto, envío o categoría para los pedidos de ese seller. Para configurar las comisiones de tus sellers, accede al Admin VTEX y sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Marketplace > Gestión__, o escribe __Gestión__ en la barra de búsqueda en la parte superior de la página.
2. Elige un seller de la lista y haz clic en `Editar/Ver`. Si utilizas otra versión de la página Gestión, basta con hacer clic en el nombre del seller deseado.
3. Cambia los campos de la sección __Comisiones__. Si utilizas otra versión de la página Gestión, cambia los campos de la sección __Acuerdos comerciales__.
4. Haz clic en `Guardar`.

### Marketplace VTEX procesando pagos

Para que el sistema del marketplace procese los pagos, debes acceder a la sección de [Pagos](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) en el entorno VTEX y configurar:

- [Proveedor de pagos](https://help.vtex.com/es/docs/tracks/configurar-un-conector-de-pagos)
- [Condiciones de pago](/es/docs/tracks/configurar-una-condicion-de-pago)
- [Antifraude](/es/docs/tutorials/como-configurar-antifraude)

Para finalizar la configuración que hace que el marketplace sea el procesador de pagos, al [configurar el afiliado](/es/docs/tutorials/como-configurar-afiliado), el seller debe dejar la opción __Utilizar mi medio de pago__ sin marcar.

### Seller VTEX procesando pagos

Para que su sistema pueda procesar los pagos, el seller debe acceder a la sección de [Pagos](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) en el entorno VTEX y configurar los pasos que se describen a continuación. Esta opción también es válida para las tiendas físicas registradas como _sellers white label.

- [Política comercial para marketplaces](/es/docs/tutorials/configurar-politica-comercial-para-marketplace)
- [Proveedor de pagos](https://help.vtex.com/es/docs/tracks/configurar-un-conector-de-pagos)
- [Condiciones de pago](/es/docs/tracks/configurar-una-condicion-de-pago)
- [Antifraude](/es/docs/tutorials/como-configurar-antifraude)

Una vez configurado el sistema de Pagos, al [Configurar el afiliado](/es/docs/tutorials/como-configurar-afiliado) para el marketplace en cuestión, el seller debe marcar la opción __Utilizar mi medio de pago__.

## Obtén más información
- [Configurar _marketplaces_ VTEX](/es/docs/tutorials/configurar-marketplaces-vtex)
