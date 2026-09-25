---
title: 'Consultar Cartera de Crédito'
createdAt: '2026-09-28T00:00:00.000Z'
updatedAt: '2026-09-28T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: checking-credit-wallet
locale: es
subcategoryId: credit-wallet
---

Para acceder a Cartera de crédito, haz clic en tu avatar — identificado por la inicial de tu email — en la esquina superior derecha de la pantalla. Luego, haz clic en **Información de facturación > Créditos**.

> ⚠️ Solo los usuarios con el rol [Finance](/es/docs/tutorials/roles-predefinidos#finance), [Finance Full Access](/es/docs/tutorials/roles-predefinidos#finance-full-access) o con el recurso `View Credits` de [Billing](/es/docs/tutorials/roles-predefinidos#billing) vinculado al rol pueden acceder a la página **Créditos** en el Admin VTEX.

![creditos-es](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/es/tutorials/admin-vtex/facturacion/creditos/creditos-es.png)

En la página **Créditos**, encontrarás la siguiente información:

- **Saldo total**: el saldo actual de tu Cartera de crédito.
- **Cobertura estimada para el consumo actual**: estimación de cuántos meses cubriría el saldo actual, manteniendo el ritmo de consumo reciente. Es una proyección, no una garantía — cambia a medida que tu operación crece o el consumo varía.
- **Resumen anual de créditos**: resumen anual del crédito, con dos indicadores:
  - **Entradas y salidas**: total de crédito generado ("entradas") y efectivamente utilizado para descontar cargos de Master Data ("salidas") en el período. El crédito expirado se contabiliza por separado (columna **Vencido** del estado de cuenta) y no se incluye en este número.
  - **Tasa de consumo**: porcentaje del crédito acumulado que fue consumido en el período. Como el crédito no utilizado continúa acumulándose para los meses siguientes, cuanto más bajo sea este porcentaje, mayor será el margen de tu saldo en relación con el consumo de Master Data.
- **Estado de cuenta de créditos**: estado de cuenta mes a mes con saldo inicial, crédito generado, valor utilizado, valor expirado y saldo final. Haz clic en el ícono `>` de un mes para expandir la línea y ver los movimientos individuales de ese período (fecha, descripción, valor de crédito y saldo actualizado). Si hubo consumo de Master Data en el mes, la línea expandida también muestra la sección **Consumo por add-on** en la esquina inferior izquierda de la pantalla.

### Desglose por Master Data

![creditos-master-data-es](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/es/tutorials/admin-vtex/facturacion/creditos/creditos-master-data-es.png)

Para abrir el desglose por Master Data, expande la línea de un mes en el **Estado de cuenta de créditos** y, en la sección **Consumo por add-on**, en la esquina inferior izquierda de la pantalla, haz clic en la tarjeta **Master Data**. Esto abre un panel lateral con:

- **Costo estimado para el siguiente ciclo**: costo bruto de Master Data en el siguiente ciclo, calculado con base en el volumen de documentos almacenados en la última actualización del dashboard (semanal) — antes de aplicar el crédito de Cartera de crédito.
- **Cobertura de crédito**: porcentaje del costo estimado de Master Data para el siguiente ciclo que está cubierto por el saldo actual de Cartera de crédito. Si es menor que 100%, la diferencia se cobra en la factura.
- **Documentos almacenados**: volumen actual de documentos y el tier de precio correspondiente.
- **Volumen de documentos** (gráfico): volumen de documentos almacenados por mes. La barra del mes corriente muestra el acumulado hasta la última actualización del dashboard (último lunes), no el volumen final del mes — a diferencia de las barras de meses ya cerrados, que muestran el total definitivo de ese mes.

> ℹ️ A diferencia de la **Cobertura estimada para el consumo actual** de la página general, que proyecta en meses la duración del saldo total, la **Cobertura de crédito** de Master Data indica solo si el saldo cubre el 100% del costo en el ciclo actual o si habrá un cargo adicional.