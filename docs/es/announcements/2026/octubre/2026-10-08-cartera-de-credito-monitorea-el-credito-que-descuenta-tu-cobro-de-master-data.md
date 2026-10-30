---
title: 'Cartera de crédito: monitorea el crédito que descuenta tu cobro de Master Data'
createdAt: '2026-10-08T00:00:00.000Z'
updatedAt: '2026-10-08T00:00:00.000Z'
contentType: updates
productTeam: Billing
slugEN: 2026-10-08-credit-wallet-track-the-credit-that-offsets-your-master-data-charges
locale: es
announcementSynopsisES: 'Consulta tu cartera de crédito en la nueva página Créditos del Admin VTEX y descubre cómo descuenta el cobro de Master Data.'
tags:
  - Nueva funcionalidad
  - Facturación
---

El Admin VTEX ahora ofrece la página **Créditos**, en **Información de facturación**, donde puedes consultar el saldo y el consumo de la [Cartera de crédito](/es/docs/tutorials/cartera-de-credito) de tu empresa. La cartera de crédito es un crédito de facturación otorgado automáticamente por VTEX que se utiliza para descontar el cobro de [Master Data](/es/docs/tutorials/master-data-es), que ocurre independientemente de la versión utilizada (v1 o v2).

## ¿Qué cambió?

**Información de facturación** incluye ahora una nueva página, **Créditos**, junto a Contratos, Facturas, Datos de registro y Contactos de facturación. Para acceder haz clic en tu avatar en la esquina superior derecha de la pantalla, identificado con la inicial de tu email, y luego en **Facturación > Créditos**.

En la página **Créditos** puedes consultar:

- **Saldo total**: saldo actual de tu cartera de crédito.
- **Cobertura estimada para el consumo actual**: estimación de cuántos meses cubriría el saldo actual, manteniendo el ritmo de consumo reciente.
- **Resumen anual de crédito**: total de crédito generado y utilizado en el periodo (**Entradas y salidas**) y el porcentaje del crédito acumulado que fue consumido (**Tasa de consumo**).
- **Estado de cuenta de créditos**: estado de cuenta mes a mes con saldo inicial, crédito generado, valor usado, valor vencido y saldo final.
- **Consumo de Master Data**: el costo estimado del próximo ciclo, qué porcentaje de ese costo cubre el crédito, cuántos documentos hay almacenados y el nivel de precios de ese volumen.

La página también explica cómo se forma y consume el crédito: cada mes, VTEX suma todo lo que la empresa, es decir, todas las cuentas agrupadas bajo ella para fines de facturación, pagó a VTEX el mes anterior y concede al mes siguiente un crédito equivalente al 2% de ese total. Este crédito se aplica exclusivamente para descontar el cobro de Master Data, y el saldo no utilizado continúa acumulándose hasta el final del ciclo contractual vigente.

> ⚠️ Los pagos de Ads, Professional Services y consultorías en general no entran en la base de cálculo del crédito.

## ¿Por qué realizamos este cambio?

El crédito de la cartera de crédito se calcula y aplica automáticamente en las facturas, pero hasta ahora no había dónde consultarlo. La página **Créditos** brinda visibilidad sobre el saldo disponible, el historial de uso y la relación entre ese crédito y el costo de Master Data, permitiendo prever si el consumo del próximo ciclo será totalmente cubierto o generará un cobro adicional.

## ¿Qué se necesita hacer?

Solo los usuarios con el rol [Finance](/es/docs/tutorials/roles-de-usuario-predefinidos#finance), [Finance Full Access](/es/docs/tutorials/roles-de-usuario-predefinidos#finance-full-access) o con el recurso `View Credits` de [Billing](/es/docs/tutorials/roles-de-usuario-predefinidos#billing) vinculado al rol pueden acceder a la página **Créditos** en el Admin VTEX.

El crédito se concede y aplica automáticamente. Para consultar el saldo y el consumo, accede a **Facturación > Créditos** en el Admin VTEX.
