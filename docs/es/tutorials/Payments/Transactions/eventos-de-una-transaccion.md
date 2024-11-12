---
title: 'Eventos de una transacción'
id: 2xf5Axyz6EecGmcOYcMI60
status: ARCHIVED
createdAt: 2017-07-26T10:33:21.740Z
updatedAt: 2020-03-05T22:15:46.622Z
publishedAt: 
firstPublishedAt: 2017-07-27T20:01:18.994Z
contentType: tutorial
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: transactions-events
locale: es
legacySlug: eventos-de-una-transaccion
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Cada transacción que ingresa desde el checkout, esté o no finalizada, contenga o no errores de cualquier tipo, será finalmente registrada en **Pagos**. En Pagos se exhibe el log detallado de la interacción realizada entre el gateway de pagos y VTEX, indicando todos los estados que esta atravezó: autorización, capturas, rechazos, estados de antifraude, reintentos, errores de sistema, etc. 

Para acceder a esas informaciones, se debe:

1. Acceder al módulo __Pagos__

2. En __Transacciones__, buscar el pago deseado ([ver más sobre opciones de búsqueda](https://help.vtex.com/es/tutorial/transacciones-como-buscar "Como buscar transacciones"))

3. Hacer click en la transacción encontrada e ingresar a los detalles.

Más abajo se comparten ejemplos de donde encontrar las informaciones más comunes para analizar los escenarios que ocurren en Pagos.

## Autorizando la transacción

En este evento vemos que VTEX comenzó el proceso de autorización con el gateway de pagos y este respondió que podemos comenzar la operación:

![transaccion-autorizando](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Transacción autorizada y aprobada

Después de la solicitación de autorización, el gateway de pagos nos autorizará/preautorizará la transacción en caso de flujo exitoso. Con la autorización del gateway, la transacción será _aprobada_ para continuar con el flujo del pedido:

![transaccion-autorizada-aprobada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

En caso que no ocurra la autorización por algún problema fuera del flujo, el log del será detallado en el timeline, según las informaciones devueltas por el gateway de pagos.

## Análisis de antifraude

En el flujo del pedido, existe la posibilidad de enviar el pago a un antifraude (integrado directamente a VTEX) para aplicarle un análisis de riesgo. Luego de haber solicitado un análisis, el pedido contará con un estado que indique el inicio del análisis y la devolución del antifraude, junto con el resultado:

![transaccion-antifraude](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

En caso que no ocurra el análisis por algún problema fuera del flujo, el log del será detallado en el timeline, según las informaciones devueltas por el gateway de pagos.

## Captura de la transacción

Cuando se utiliza la modalidad de Preautorización de las transacciones, luego de realizar las actividades de análisis y operaciones sobre el pedido, se va a requerir facturar el pedido y capturar el monto final, que puede ser igual, menor o mayor que el preautorizado inicialmente.

Cuando se inicie el proceso de captura, se verá el evento _Settlement_, que indica que la captura fue solicitada al gateway de pagos:

![transaccion-captura-solicitud](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

Mientras se haya iniciado con éxito la captura, se verá el evento _Settling_. Y al finalizar la captura, se indicará el evento _Settled_:

![transaccion-captura-iniciada-capturada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

En caso que no ocurra la captura por algún problema fuera del flujo, el log del será detallado en el timeline, según las informaciones devueltas por el gateway de pagos.

## Transacción finalizada

Al finalizar la transacción, VTEX indicará como muestra la siguiente imagen:

![transaccion-finalizada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

## Transacción programada para captura automática

Generalmente, las afiliaciones permiten configurar una fecha programada de captura, con la finalidad de forzar una captura y evitar la extensión del tiempo de espera, que podría generar la caída del pago o del pedido.

Aquí se logra visualizar la fecha de la programación de la captura automática:

![captura-auto-agendada es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)

