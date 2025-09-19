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

En este artículo, trataremos los diferentes escenarios relacionados con los pagos en los [marketplaces VTEX](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex) y su configuración. 

Para los clientes de VTEX en Brasil, tanto el _seller_ como el _marketplace_ pueden procesar los pagos, según las condiciones comerciales negociadas entre ellos y el proveedor de pagos. 

Consulta a continuación las opciones para Split de pagos y la configuración necesaria para que el _seller_ o el _marketplace_ procese los pagos.

## Split de pagos

Los pedidos realizados en un marketplace pueden contener ítems de varios sellers, que se pagan en una experiencia de checkout unificada en el _storefront_ del marketplace. VTEX ofrece la solución [Split de pagos](/es/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) para que la división del valor del pedido se haga automáticamente, según las comisiones configuradas al [agregar el seller](/es/tutorial/adicionar-seller--tutorials_392).

Si el _seller _es el procesador de pagos, debe operar bajo las condiciones establecidas en nuestro [Split de transacción](/es/tutorial/split-payment#split-de-transacao). Asimismo, si el marketplace VTEX se encarga de procesar los pagos, debe seguir el flujo del [Split de cobros](/es/tutorial/split-payment--6k5JidhYRUxileNolY2VLx#split-de-recebiveis) o realizar sus transferencias fuera del entorno VTEX. 

> ℹ️ Los clientes de VTEX en Brasil pueden utilizar tanto el split de transacción como el split de cobros. Los clientes de VTEX en otros países solo deben utilizar el split de transacción. Ten en cuenta que algunos países imponen restricciones a la transferencia de valores entre sellers y marketplaces. Infórmate de las restricciones con las autoridades financieras de tu país antes de construir tu arquitectura de pagos.

Para establecer los valores de transferencias externas al entorno VTEX, utiliza los [informes del OMS](/es/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY) para calcular las comisiones. En Brasil, la transferencia de valores en un entorno externo, sin la participación de la plataforma VTEX, solo puede realizarse por las instituciones financieras.

## Configuración de pagos

Consulta a continuación la configuración necesaria en tu Admin VTEX para crear comisiones sobre pedidos de _sellers _y para hacer que el _seller_ o el _marketplace_ sea el procesador de pagos.

> ℹ️ En caso de que la integración con sellers externos o sellers VTEX se haga mediante API, consulta <a href = "https://developers.vtex.com/vtex-rest-api/docs/external-seller-processing-payments">External seller processing payment</a>.

### Configurar comisiones para los _sellers_

Al [agregar un seller](/es/tutorial/adicionar-seller--tutorials_392), el _marketplace_ configura las comisiones por producto, envío o categoría para los pedidos de ese _seller_. Para configurar las comisiones de tus sellers, accede al Admin VTEX y sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Marketplace** > **Gestión**, o escribe **Gestión** en la barra de búsqueda en la parte superior de la página.
2. Elige un _seller _de la lista y haz clic en `Editar/Ver`.   
_Si utilizas otra versión de la página Gestión, basta con hacer clic en el nombre del seller deseado._  
3. Cambia los campos de la sección **Comisiones.**   
_Si utilizas otra versión de la página Gestión, cambia los campos de la sección **Acuerdos comerciales.**_
4. Haz clic en `Guardar`.  

### Marketplace VTEX procesando pagos

Para que el sistema del marketplace procese los pagos, debes acceder a la sección de [Pagos](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) en el entorno VTEX y configurar: 

* [Afiliaciones de gateway](/es/tutorial/afiliacoes-de-gateway)
* [Condiciones de pago](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) 
* [Conector de pagos](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)
* [Antifraude](/es/tutorial/como-configurar-antifraude--tutorials_446) 

Para finalizar la configuración que hace que el marketplace sea el procesador de pagos, al [configurar el afiliado](/pt/tutorial/como-configurar-afiliado--tutorials_187), el seller debe dejar la opción **Utilizar mi medio de pago **sin marcar.

### Seller VTEX procesando pagos

Para que su sistema pueda procesar los pagos, el _seller_ debe acceder a la sección de [Pagos](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) en el entorno VTEX y configurar los pasos que se describen a continuación. Esta opción también es válida para las tiendas físicas registradas como _sellers white label._  

* [Política comercial para marketplaces](/es/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404)  
* [Afiliaciones de gateway](/es/tutorial/afiliacoes-de-gateway)  
* [Condiciones de pago](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3)   
* [Conector de pagos](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)  
* [Antifraude](/es/tutorial/como-configurar-antifraude--tutorials_446)  

Una vez configurado el sistema de Pagos, al [Configurar el afiliado](/es/tutorial/como-configurar-afiliado--tutorials_187) para el marketplace en cuestión, el seller debe marcar la opción **Utilizar mi medio de pago**.

## Obtén más información
- [Configurar _marketplaces_ VTEX](/es/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)
