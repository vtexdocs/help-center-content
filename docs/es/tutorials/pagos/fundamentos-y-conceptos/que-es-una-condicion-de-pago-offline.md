---
title: 'Condición de pago offline'
id: 3WtA4nmQJWqAaCy0kYG6IG
status: PUBLISHED
createdAt: 2019-01-24T20:45:37.593Z
updatedAt: 2026-09-30T20:30:00.000Z
publishedAt: 2024-08-15T17:45:31.703Z
firstPublishedAt: 2019-01-24T22:06:51.647Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-an-offline-payment-condition
legacySlug: que-es-una-condicion-de-pago-offline
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
hidden: false
---

Las condiciones de pago offline son las que requieren que el cliente realice una acción fuera del entorno de la tienda para que la transacción continúe. El flujo tiene tres etapas:

1. El cliente elige una condición de pago offline.
2. El proveedor de pago o conector genera el boleto (Brasil) o el código de pago.
3. El proveedor confirma el pago a VTEX o la confirmación llega mediante el archivo de retorno descrito en [Cómo funcionan las conciliaciones bancarias](https://help.vtex.com/es/docs/tutorials/conciliaciones-bancarias).

Con la confirmación, la tienda recupera el control de la transacción y puede completar el pedido. Antes de ese punto, el pedido permanece en el status [**Pago pendiente**](https://help.vtex.com/es/docs/tutorials/flujo-y-status-de-pedidos) y, si el cliente no paga dentro del plazo, el pedido se cancela.

Ejemplos de condiciones de pago offline:

- **Boleto (Brasil):** el cliente paga directamente al banco, en una sucursal, cajero automático o aplicación, antes de que el producto se envíe. El flujo completo se describe en [Boleto bancario registrado - Flujo básico de pago](https://help.vtex.com/es/docs/tutorials/boleto-bancario-registrado-flujo). Para activar el uso de boleto en la tienda consulta [Configurar boleto bancario](/es/docs/tutorials/como-configurar-boleto-bancario).
- **Ficha de depósito:** se usa en México. El cliente paga en puntos autorizados. El funcionamiento se describe en [Qué es ficha de depósito](https://help.vtex.com/es/docs/tutorials/que-es-ficha-de-deposito).
- **Condiciones offline de Mercado Pago:** disponibles en países de América Latina. La configuración se describe en [Configurar Mercado Pago offline y Wallet como métodos de pago](https://help.vtex.com/es/docs/tutorials/configurar-mercado-pago-offline-y-wallet-como-metodos-de-pago).
