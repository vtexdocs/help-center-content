---
title: 'Consultar cartera de crédito'
createdAt: '2026-10-08T00:00:00.000Z'
updatedAt: '2026-10-30T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: checking-credit-wallet
locale: es
subcategoryId: credit-wallet
---

Para acceder a la cartera de crédito, haz clic en tu avatar, identificado por la inicial de tu email, en la esquina superior derecha de la pantalla. Luego, haz clic en **Facturación > Créditos**.

> ⚠️ Solo los usuarios con el rol [Finance](/es/docs/tutorials/roles-de-usuario-predefinidos#finance), [Finance - Full access](/es/docs/tutorials/roles-de-usuario-predefinidos#finance-full-access) o con el recurso `View Credits` de [Billing](/es/docs/tutorials/roles-de-usuario-predefinidos#billing) vinculado al rol pueden acceder a la página **Créditos** en el Admin VTEX.

![creditos-es](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/es/tutorials/admin-vtex/facturacion/creditos/creditos-es.png)

En la página **Créditos** puedes consultar la siguiente información:

- **Saldo total**: saldo actual de tu cartera de crédito.
- **Cobertura estimada para el consumo actual**: estimación de cuántos meses cubriría el saldo actual, manteniendo el consumo reciente. Es una proyección, no una garantía: cambia si la operación crece o si el consumo varía.
- **Resumen anual de créditos**: resumen anual del crédito, con dos indicadores:
  - **Entradas y salidas**: el crédito generado ("entradas") y el crédito usado para descontar el cobro de Master Data ("salidas") en el periodo. El crédito vencido se contabiliza por separado (columna **Vencido** del estado de cuenta) y no se incluye en este número.
  - **Tasa de consumo**: porcentaje del crédito acumulado consumido en el periodo. Como el crédito no utilizado continúa acumulándose para los meses siguientes, cuanto más bajo sea este porcentaje mayor será el margen de tu saldo con relación al consumo de Master Data.
- **Estado de cuenta de créditos**: estado de cuenta mes a mes con saldo inicial, crédito generado, valor usado, valor vencido y saldo final. Haz clic en el ícono `>` de un mes para expandir la fila y ver los movimientos individuales de ese periodo (fecha, descripción, valor de crédito y saldo actualizado). Si hubo consumo de Master Data en el mes, la fila expandida también muestra la sección **Consumo por add-on** en la esquina inferior izquierda de la pantalla, con una tarjeta por cada add-on con consumo.

### Consumo de Master Data

![creditos-master-data-es](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/es/tutorials/admin-vtex/facturacion/creditos/creditos-master-data-es.png)

> ⚠️ Durante la primera semana de cada mes, el recuento de documentos en el panel lateral de Master Data puede mostrarse como cero. Esto ocurre porque la primera actualización del mes solo se realiza después de ese periodo. En cuanto se realice la actualización, se mostrará el número correcto de documentos.

Para ver el consumo de Master Data, expande la fila de un mes en el **Estado de cuenta de créditos** y, en la sección **Consumo por add-on**, en la esquina inferior izquierda de la pantalla, haz clic en la tarjeta **Master Data**. Se abrirá un panel lateral con:

- **Costo estimado para el próximo ciclo**: costo bruto de Master Data en el próximo ciclo. Se calcula con el volumen de documentos de la última actualización semanal, antes de aplicar el crédito de la cartera de crédito.
- **Cobertura del crédito**: porcentaje del costo de Master Data del próximo ciclo que cubre el saldo actual de la cartera de crédito. Si es menor que 100%, la diferencia se cobra en la factura.
- **Documentos almacenados**: el volumen actual y el nivel de precios de ese volumen.
- **Volumen de documentos** (gráfico): volumen de documentos almacenados por mes. La barra del mes en curso muestra el volumen acumulado hasta la última actualización, el último lunes. Todavía no es el volumen final del mes. Las barras de los meses ya cerrados muestran el total definitivo de ese mes.

> ℹ️ A diferencia de la **Cobertura estimada para el consumo actual** de la página general, que proyecta en meses la duración del saldo total, la **Cobertura del crédito** de Master Data indica solo si el saldo cubre el 100% del costo en el ciclo actual o si habrá un cobro adicional.
