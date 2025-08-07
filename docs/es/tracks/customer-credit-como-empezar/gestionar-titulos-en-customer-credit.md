---
title: 'Gestionar títulos en Customer Credit'
id: vtf5UVQcmlb0kHBZYYmM3
status: PUBLISHED
createdAt: 2024-02-07T21:31:46.690Z
updatedAt: 2024-02-09T12:30:53.684Z
publishedAt: 2024-02-09T12:30:53.684Z
firstPublishedAt: 2024-02-07T21:44:30.527Z
contentType: trackArticle
productTeam: Financial
slugEN: managing-customer-credit-invoices
locale: es
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugEN: customer-credit-como-empezar
---

La pantalla __Facturas__ en el Admin de VTEX (__Aplicaciones > Customer Credit > Facturas__), le permite acceder a información de todos las facturas emitidas por clientes registrados con Customer Credit en su tienda. A través de esta funcionalidad podrás realizar las siguientes acciones:

- [Filtrar vista de facturas](#filtro-de-facturas) 
- [Consulta los detalles de cada factura](#detalhes-de-la-factura)
- [Liquidar facturas](#liquidar-facturas)
<br>
<br>
![Invoices_ES](//images.ctfassets.net/alneenqid6w5/6otbbLNAHn0hHmKvkYmrj2/ef748599f8033d5bdac2d320a5cb2be3/Invoices_ES.JPG)

## Filtro de facturas

Para seleccionar la lista de invoices que se mostrarán, puede hacer clic en uno de los cuatro estados (Abierto, Pagado, Cancelado o Vencido), o ingresar el número de identificación del pedido para el cual se emitió la invoice.

<div class="alert alert-warning">
En Customer Credit, todos los títulos se crean con el estado <b>Abierto</b>.
</div>

## Detalhes de la factura

Al hacer clic en una factura específica, la página __Detalles de la factura__ muestra la siguiente información: valor de la factura emitida, fecha de vencimiento, link de pago (si existe), identificación de la cuenta donde fue emitida, identificación de la orden y observaciones (mensajes específicos sobre la factura).

## Liquidar facturas

Para facilitar el proceso de pago de una factura, es posible proporcionar un link de pago directamente al cliente. Este link se puede añadir a la factura de dos formas:

- Utilice la función `IMPORTAR` para insertar datos desde una plantilla .csv.
- Via endpoint [PUT Change Invoice](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-creditAccountId-/invoices/-invoiceId-) da API Customer Credit.

<div class="alert alert-info">
Luego de realizar uno de los trámites anteriores, el cliente tendrá acceso al botón <b>PAGAR</b> que estará disponible en su área de cliente en la web de la tienda (<b>Mi Cuenta > Mis Créditos</b >).
</div>

### Liquidación individual

Después de confirmar el pago de una factura, puede liquidarla de la siguiente manera:

1. En el Admin VTEX, accede a __Apps > Customer Credit > Facturas__, o escribe __Facturas__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la factura deseada.
3. En la página __Detalles de la factura__, haga clic en __Marcar como pagada__.
4. En la página __Facturas__, confirme que el estado de la factura esté se indique como __Pagado__.

### Liquidación masiva

Si deseas confirmar el pago de varias facturas al mismo tiempo, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Apps > Customer Credit > Facturas__, o escribe __Facturas__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el botón "EXPORTAR".
3. Accede a la plantilla .csv descargada y cambia la información del campo `Status` a `Paid` en las líneas correspondientes a los valores que deseas liquidar. Guarde la plantilla. 
4. Haga clic en el botón `IMPORTAR`.
5. Seleccione o inserte la plantilla .csv en el espacio __Suelta aquí tu archivo CSV o elige uno__.
6. Haga clic en el botón `IMPORTAR ARCHIVO`.
7. Después de cargar la plantilla en Admin, verifique en la pantalla __Facturas__ si las facturas actualizadas se describen como __Pagado__. 

### Liquidación de API

También puede liquidar un valor a través del endpoint [PUT - Change invoice](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-creditAccountId-/invoices/-invoiceId-). Para obtener más información sobre los endpoints de la API de Customer Credit , visite [Customer Credit API - Overview](https://developers.vtex.com/docs/api-reference/customer-credit-api#overview).

