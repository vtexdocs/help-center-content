---
title: 'Cartera de Crédito: sigue el crédito que compensa tu cargo de Master Data'
createdAt: '2026-09-28T00:00:00.000Z'
updatedAt: '2026-09-28T00:00:00.000Z'
contentType: updates
productTeam: Billing
slugEN: 2026-09-28-credit-wallet-track-the-credit-that-offsets-your-master-data-charges
locale: es
announcementSynopsisES: 'Consulta tu Cartera de Crédito a través de la nueva página Créditos en el Admin VTEX y descubre cómo descuenta el cobro de Master Data.'
tags:
  - Nueva funcionalidad
  - Billing
---

El Admin VTEX ahora ofrece la página **Créditos**, en **Facturación**, donde puedes consultar el saldo y el consumo de la [Cartera de Crédito](/es/docs/tutorials/cartera-de-credito) de tu empresa. La Cartera de Crédito es un crédito de facturación concedido automáticamente por VTEX y utilizado para descontar el cobro de [Master Data](/es/docs/tutorials/master-data).

## ¿Qué cambió?

**Facturación** ahora incluye una nueva página, **Créditos**, junto a Contratos, Facturas, Datos de cuenta y Contactos de facturación. Para acceder, haz clic en tu avatar — identificado por la inicial de tu email — en la esquina superior derecha de la pantalla y luego en **Facturación > Créditos**.

En la página **Créditos** encontrarás:

- **Saldo total**: saldo actual de tu Cartera de Crédito.
- **Cobertura estimada para el consumo actual**: estimación de cuántos meses cubriría el saldo actual, manteniendo el ritmo de consumo reciente.
- **Resumen anual de crédito**: total de crédito generado y utilizado en el período (**Entradas y salidas**) y el porcentaje del crédito acumulado que fue consumido (**Tasa de consumo**).
- **Estado de cuenta de crédito**: estado de cuenta mes a mes con saldo inicial, crédito generado, valor utilizado, valor vencido y saldo final.
- **Consumo de Master Data**: coste estimado para el próximo ciclo, porcentaje de ese coste cubierto por el crédito, volumen de documentos almacenados y el nivel de precios correspondiente.

La página también explica cómo se forma y consume el crédito: cada mes, VTEX suma todo lo que la empresa — es decir, todas las cuentas agrupadas bajo ella para fines de facturación — pagó a VTEX el mes anterior y concede, al mes siguiente, un crédito equivalente al 2% de ese total. Este crédito se aplica exclusivamente para descontar el cobro de Master Data, y el saldo no utilizado continúa acumulándose hasta el final del ciclo contractual vigente.

> ⚠️ Los pagos de Ads, Professional Services y consultorías en general no se incluyen en la base de cálculo del crédito.

## ¿Por qué realizamos este cambio?

El crédito de la Cartera de Crédito se calcula y aplica automáticamente en las facturas, pero hasta ahora no había dónde consultarlo. La página **Créditos** brinda visibilidad sobre el saldo disponible, el historial de uso y la relación entre ese crédito y el coste de Master Data, permitiendo prever si el consumo del próximo ciclo será totalmente cubierto o generará un cobro adicional.

## ¿Qué se necesita hacer?

Solo los usuarios con el rol de acceso [Finance](/es/docs/tutorials/roles-de-usuario-predefinidos#finance), [Finance Full Access](/es/docs/tutorials/roles-de-usuario-predefinidos#finance-full-access) o con el recurso `View Credits` de [Billing](/es/docs/tutorials/roles-de-usuario-predefinidos#billing) vinculado al rol pueden acceder a la página **Créditos** en el Admin VTEX.

El crédito se concede y aplica automáticamente. Para consultar el saldo y el consumo, accede a **Facturación > Créditos** en el Admin VTEX.