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
locale: es
legacySlug: transacciones-como-buscar
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Es posible hacer las búsquedas en Transacciones de diversas formas y con diversos tipos de datos. Las opciones de búsqueda son:

- __E-mail del Cliente__
- __Nombre del Cliente__
- __Cédula de Identidad del Cliente__
- __Código de la Transacción:__ código que identifica la transacción en el gateway de la plataforma VTEX.
- __TID del Pago:__ número utilizado para identificación de la transacción con el conector
- __ID del Pago:__ número utilizado para identificación del pago con o conector

Para buscar una transacción en el módulo de Transacciones de VTEX, siga los siguientes pasos:

1. En el Admin VTEX, accede a **Pedidos** > **Transacciones**, o escribe **Transacciones** en la barra de búsqueda en la parte superior de la página.
2. En la barra de búsqueda, introduzca una de las informaciones enumeradas anteriormente.

Para volver a la lista original de las transacciones, basta apagar el valor anteriormente insertado en el campo de búsqueda.

## Link de la Transacción en el Gestión de Pedidos

Al hacer clic en una solicitud en el Gestión de Pedidos, usted va a la página que trae un resumen sobre él. Las principales informaciones están ahí, pero usted puede ver aún más detalles si hace clic en el enlace _Ver detalles de la transacción_:

![Link transação OMS (ES)](//images.ctfassets.net/alneenqid6w5/4lCG7cxc8MacMYQgmecqG6/33669bc2490b6732d50b1e9769129c33/Link_transa____o_OMS__ES_.png)

## TID del Pago e ID del Pago

La búsqueda utilizando esos códigos necesariamente necesita contener todos los dígitos, o su búsqueda regresará vacía. Vea abajo como encontrarlo:

![Códigos ES](//images.ctfassets.net/alneenqid6w5/X1c6jZ4yomYGoE8U4o86u/d68575f5fa61a6b38517920f247cc460/C__digos_ES.png)

Estos valores, dentro del detalle de la transacción representarán la comunicación junto al respectivo conector. En los Eventos de la transacción será posible validar cada contacto hecho utilizando estos como identificador.

## Nombre del cliente

El nombre que debe ser buscado es el dado personal que ha sido registrado en la compra y no la razón social o nombre fantasía en caso de persona jurídica. Se puede buscar por el nombre, apellido o ambos, todo en mayúsculo o minúsculo, en cualquier una de las letras del nombre.

## CPF

Se debe llenar el número completo del documento sin los puntos.

## Directamente por la URL

Una otra forma de hacer la búsqueda es insertando el parámetro directamente en la URL de la página. Usualmente, la estructura de URL del PCI Gateway es: 

`https://NOMBRE_TIENDA.vtexcommercestable.con.br/admin/pci- gateway#/transactions?_sort=startDate`

Caso desee hacer la búsqueda directamente en la URL, utilice el parámetro **&amp;q=** y digite el dato que desea buscar.

__Ejemplo:__ Si fuera buscar el pedido 500408, por ejemplo en la URL bastaría hacer lo siguiente:

`https://NOMBRE_TIENDA.vtexcommercestable.con.br/admin/pci- gateway#/transactions?_sort=startDate&amp;q=500408`
