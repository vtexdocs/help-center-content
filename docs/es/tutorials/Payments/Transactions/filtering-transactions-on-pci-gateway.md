---
title: 'Filtrar transacciones en la sección de Pedidos'
id: 6LUq65FqUgIKkKEeWa4IwC
status: PUBLISHED
createdAt: 2019-01-24T21:38:42.313Z
updatedAt: 2023-10-18T16:58:56.709Z
publishedAt: 2023-10-18T16:58:56.709Z
firstPublishedAt: 2019-01-24T21:38:42.695Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: filtrar-transacciones-en-pci-gateway
locale: es
legacySlug: filtrar-transacciones-en-pci-gateway
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

En la sección de Pedidos, usted puede utilizar __filtros__ para ver sus transacciones. Con esta funcionalidad, puede obtener información más detallada sobre los pagos que se están realizando en su tienda.

## Acceder a la pantalla de filtros

Para hacer un filtro de sus transacciones siga los pasos abajo:

1. Acceda la sección de __Pedidos__ en el Admin VTEX y click en __Transacciones__.
2. En el lado izquierdo de la barra de búsqueda, haga clic en el __icono de funil__.
3. Usted verá las opciones de filtro disponibles. A continuación, vamos a dar más detalles sobre cada uno de estos filtros.

Para cada opción se muestra entre paréntesis el número de transacciones realizadas de acuerdo con el filtro.

## Filtro por canal

Este filtro muestra por qué canales se realizó una transacción. Se divide en tres partes: __Conector__, __Antifraude__ y __Política Comercial__.

### Conector

Este filtro mostrará todas las transacciones realizadas de acuerdo con el conector del pago. Los conectores enumerados serán los que haya registrado en su tienda.

Algunos ejemplos de conectores:

- Cielo
- Mercado Pago
- PagSeguro

### Antifraude

Este filtro lista todas las transacciones realizadas de acuerdo con los antifraudes registrados en su tienda.

Algunos ejemplos de antifraudes:

- Clear Sale
- FControl
- Konduto

### Política Comercial

Este filtro indica por qué política comercial se realizaron las transacciones. Las políticas enumeradas serán las políticas comerciales registradas en su tienda.

## Filtro por fecha

Este filtro lista las transacciones de acuerdo con el rango de fecha deseado. Los rangos de fecha disponibles para este filtro son: __Hoy__, __Ayer__, __Una semana__, __Hace una semana__, __Hace dos semanas__, __Un mes__ o __Último mes__.

Las fechas también varían según los eventos de la transacción. Las fechas pueden ser: __Data de inicio__, __Data de autorización__, __Data de finalización__ y __Data de cancelación__. A continuación está el detalle de cada uno de estos filtros.

### Fecha de inicio

Este filtro considera el momento en que se inició la transacción. Es la primera interacción de la transacción en su tienda.

### Fecha de autorización

Después del inicio de la transacción, se produce el proceso de autorización. Este filtro considera la fecha cuando VTEX recibió la información de que la transacción fue autorizada. Es importante resaltar que este status es anterior al análisis del antifraude. Después del análisis del antifraude, la transacción queda con el status de *Aprobada*.

### Fecha de finalización

La etapa de transacción finalizada se produce después de la inclusión de la factura en el pedido. Esta etapa ocurre *después de* la liquidación de la transacción.

### Fecha de cancelación

Este filtro considera el momento en que la transacción ha llegado al estado de cancelación.

## Filtro por Pago

Este filtro muestra los datos de pago de las transacciones que se realizaron. Los filtros disponibles son: __Medio de Pago__ y __Número de parcelas__.

### Medios de pago

Este filtro muestra los medios de pago de las transacciones que se realizaron en su tienda.

Algunos ejemplos de medios de pago:

- Visa
- Boleto bancário
- Pagaré
- Mercado Pago
- Pay Pal

### Número de parcelas

Este filtro indica el número de parcelas de los pagos realizados en su tienda. Para las compras realizadas __en efectivo__, el filtro se mostrará como __1__.

## Status

Este filtro muestra todas las transacciones de acuerdo con su status. Para obtener más información sobre el flujo de transacciones, usted puede acceder a [nuestro artículo sobre este tema](/es/faq/flujo-de-la-transaccion-en-pci-gateway).

Algunos ejemplos de status de la transacción:

- Finalizada
- Cancelada
- Autorización
- Aprobada
- Iniciada
- Cancelando
