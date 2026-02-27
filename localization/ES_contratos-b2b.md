---
title: 'Contratos B2B'
createdAt: '2025-02-12T10:00:00.000Z'
updatedAt: '2025-02-12T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: b2b-contracts
locale: es
---

Un contrato establece las condiciones comerciales entre un cliente B2B y su tienda. Además, centraliza la gestión de acuerdos de compra, definiendo los productos a los que pueden acceder los compradores, los precios que se les aplican y los métodos de pago que pueden utilizar.

> ⚠️ Los contratos están disponibles solo para B2B Buyer Portal. Se requiere autorización del commerce engineer de la cuenta para su uso.

Los contratos se almacenan en la entidad de datos `CL` de [Master Data v1](https://help.vtex.com/pt/docs/tutorials/master-data). Esta es la misma entidad que almacena los datos de compradores en escenarios B2C, pero en contratos B2B se ajusta a especificaciones que habilitan la funcionalidad del B2B Buyer Portal.

## Datos

El contrato contiene la información básica sobre el comprador B2B, incluyendo información de contacto (email y números de teléfono) e información corporativa (nombre comercial y documento corporativo, entre otros). También contiene especificaciones de condiciones comerciales.

### Condiciones comerciales

El contrato define las condiciones comerciales que se aplican al comprador B2B. Puedes configurar lo siguiente:

- **Tablas de precio:** asocia una o más [tablas de precios](https://help.vtex.com/es/docs/tracks/tabelas-de-preco-definicao-de-conceito) al contrato.
- **Colecciones de productos:** selecciona las [colecciones de productos](https://help.vtex.com/es/docs/tracks/collections-concept-definition) a las que el contrato puede acceder, limitando los productos que los compradores pueden ver y comprar.
- **Medios de pago:** especifica los medios de pago que los compradores pueden usar en las transacciones.
- **Tarjetas de crédito:** define las tarjetas de crédito que los compradores pueden usar durante el checkout.

## Gestión de contratos

Los operadores de tiendas B2B pueden crear, editar y eliminar contratos a través de la [API B2B Contracts](https://developers.vtex.com/docs/api-reference/b2b-contracts-api). Todo contrato tiene un ID de contrato único que se genera automáticamente en VTEX al crearlo.

> ⚠️ Al crear o actualizar contratos, debes enviar cada campo según las especificaciones proporcionadas. De lo contrario, el módulo Checkout no podrá llenar automáticamente los datos durante el flujo de compra. Para más información, consulta [Autocompletar datos del cliente](https://help.vtex.com/es/tutorial/smartcheckout-preenchimento-automatico-de-dados-do-cliente--2Nuu3xAFzdhIzJIldAdtan#).

> ℹ️ Los miembros de la organización compradora pueden gestionar cierta información del contrato (como el email y el número de teléfono) a través de la interfaz de Cuenta de la organización.
