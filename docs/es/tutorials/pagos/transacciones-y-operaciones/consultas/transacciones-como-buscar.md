---
title: 'Buscar transacciones en Pagos'
id: tutorials_459
status: PUBLISHED
createdAt: 2017-04-27T22:03:50.721Z
updatedAt: 2023-03-30T15:27:27.126Z
publishedAt: 2023-03-30T15:27:27.126Z
firstPublishedAt: 2017-04-27T23:03:27.019Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: searching-for-transactions-on-payments
legacySlug: transacciones-como-buscar
locale: es
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
seeAlso:
  - /es/docs/tutorials/transacciones-pci-gateway
  - /es/docs/tutorials/como-visualizar-detalle-del-pedido
  - /es/docs/tutorials/filtrar-transacciones-en-pci-gateway
---

Puede buscar transacciones en **Pedidos > Transacciones** usando datos del cliente o identificadores de pago.

Para buscar una transacción, siga los pasos a continuación:

1. En el Admin VTEX, acceda a **Pedidos > Transacciones**, o escriba **Transacciones** en la barra de búsqueda en la parte superior de la página.
2. En la barra de búsqueda, ingrese uno de los valores enumerados a continuación.

Para volver a la lista completa de transacciones, borre el valor del campo de búsqueda.

Puede buscar por:

- **Email del cliente:** dirección de email usada en la compra.
- **Nombre del cliente:** nombre, apellido o ambos, según lo registrado en el pedido. La búsqueda no distingue mayúsculas de minúsculas.
- **Documento de identidad del cliente:** número completo del documento, sin puntuación. En tiendas de Brasil, este documento es el CPF.
- **Código de la transacción:** identificador de la transacción en el gateway de VTEX.
- **TID del pago:** identificador de la transacción en el conector.
- **ID del pago:** identificador del pago en el conector.

## Enlace de la transacción en el pedido

En la página de detalles del pedido, haga clic en **Ver detalles de la transacción** para abrir la transacción correspondiente.

![Enlace Ver detalles de la transacción en el pedido](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/transacciones-y-operaciones/consultas/transacciones-como-buscar_1.png)

## TID del pago e ID del pago

La búsqueda por TID del pago o ID del pago debe incluir el valor completo. Los códigos parciales no devuelven resultados. Puede encontrar estos valores en los detalles de la transacción:

![TID del pago e ID del pago en los detalles de la transacción](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/transacciones-y-operaciones/consultas/transacciones-como-buscar_2.png)

Estos valores representan la comunicación con el conector. Consulte cómo verificar cada interacción en [Visualizar detalles de la transacción en Pedidos](/es/docs/tutorials/como-visualizar-detalle-del-pedido).

## Nombre del cliente

Busque el nombre personal registrado en la compra, no la razón social ni el nombre comercial. Puede buscar por nombre, apellido o ambos.

## Documento de identidad del cliente

Ingrese el número completo del documento, sin puntos, guiones ni otros signos de puntuación.

## Búsqueda por URL

También puede buscar agregando el parámetro `q` a la URL de la página de Transacciones:

`https://{accountName}.myvtex.com/admin/pci-gateway#/transactions?_sort=startDate`

Reemplace `{accountName}` por el nombre de la cuenta de su tienda. Para buscar, agregue `&q=` seguido del valor. Por ejemplo, para buscar `500408`:

`https://{accountName}.myvtex.com/admin/pci-gateway#/transactions?_sort=startDate&q=500408`
