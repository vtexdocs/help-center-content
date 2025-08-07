---
title: 'Facturas de pedidos FBA'
id: 3AdnQDyUJUJu7KelalqJLG
status: DRAFT
createdAt: 2025-07-17T22:55:07.302Z
updatedAt: 2025-07-17T23:30:05.048Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: fba-order-invoices
legacySlug: facturas-de-pedidos-fba
locale: es
subcategoryId: 
---

La funcionalidad Facturas permite que los sellers [filtren](#filtros) y exporten facturas de pedidos FBA utilizando filtros para personalizar su consulta.

Para acceder a la página, accede al **Admin VTEX > Marketplace > Amazon > Facturas** o escribe **Facturas** en la barra de búsqueda del Admin.

![overview-nfe-fba](//images.ctfassets.net/alneenqid6w5/4FqM91rsLMIVmr1xcVuvfx/ea9f1f992466a7da1cd20c27828b6056/overview-nfe-en.jpg)

## Filtros

A continuación se describen los filtros disponibles.

**Periodo:** filtro obligatorio. Permite seleccionar un intervalo de fechas que recoge el periodo de las facturas deseadas. Puedes seleccionar valores predefinidos o personalizarlo indicando la fecha de inicio y fin.

<div class=”alert alert-info”>
"Hoy" es el periodo predeterminado que se muestra en la página.
</div>

**Status:**  filtro opcional. Puedes seleccionar uno o más status de entre **Emitida, Rechazada** y **Cancelada.** Si no seleccionas ninguno, se considerarán todos en la consulta.  

**Tipo:**  filtro opcional. Puedes escoger entre **Tipo de operación** y **Tipo de factura**.  Para buscar facturas de todos los tipos, selecciona la opción **Todos.** 
Al seleccionar **Tipo de operación** o **Tipo de factura,**  se muestran otras variables para el filtro :  

- Si se selecciona **Tipo de operación** , se muestran las opciones **Envío (excedente), Remoción, Ventas, Devolución del cliente, Ajuste de stock (encontrado)** y **Ajuste de stock (perdido),**  según se ilustra a continuación.

![typeop-nfe-fba](//images.ctfassets.net/alneenqid6w5/1RdIWYPBSZGPBguJOIohxx/e1304f7da923a0affd64ca50d42966f5/typoop-nfe-en.jpg)

- Si se selecciona **Tipo de factura** , se muestran las opciones **Envío, Envío de ajuste, Devolución, Devolución de ajuste** y **Venta al cliente**, según se ilustra a continuación.

![type-nfe-fba](//images.ctfassets.net/alneenqid6w5/mLpc2MpvddP67tvsBv07e/a5656571ca63e6337d60cdbc5de9bfb4/typo-nfe-en.jpg)

<div class=”alert alert-info”>
Si no seleccionas ninguno de los dos, el sistema devuelve las facturas de todos los tipos de forma predeterminada.
</div>

## Exportar facturas

Sigue los pasos a continuación para exportar facturas de pedidos FBA:

1. En el Admin VTEX, accede a **Marketplace > Amazon > Facturas** o ingresa **Facturas** en la barra de búsqueda.  
2. Selecciona los filtros deseados.  
3. Haz clic en `Exportar facturas`.  

Se mostrará un mensaje de confirmación que indica que el proceso ha comenzado y en breve recibirás un link por email para acceder a las facturas.  

<div class=”alert alert-warning>
El link de exportación de las facturas es válido por tres días. Si no lo utilizas, deberás volver a realizar el proceso en el Admin para recibir un nuevo link.
</div>

