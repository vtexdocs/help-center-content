---
title: 'Incluir variables del pedido en el template de e-mail transaccional'
id: 694Bn8eOeAWYQeaWGaOISe
status: ARCHIVED
createdAt: 2017-12-19T14:09:17.388Z
updatedAt: 2022-09-20T15:42:07.435Z
publishedAt: 
firstPublishedAt: 2017-12-19T17:49:00.650Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: including-order-variables-in-the-transactional-email-template
locale: es
legacySlug: incluir-variables-del-pedido-en-el-template-de-email-transaccional
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

En Message Center, en la pestaña __Templates__, se encuentran los templates de email transaccional enviados a sus clientes.

Algunos de ellos se disparan cuando se cambia el status de un pedido. Por ejemplo:
- __Confirmação de pedido ("Confirmación de pedido")__: e-mail enviado cuando el pedido se realiza con éxito.
- __Pedido faturado ("Pedido facturado")__: e-mail enviado cuando el pedido es facturado.
- __Pedido cancelado__: e-mail enviado cuando se cancela el pedido.

Usted puede personalizar todos los templates de Message Center, y tiene a su disposición una serie de variables que permiten agregar datos dinámicamente al e-mail.

Estas variables son propiedades de JSON que aparecen en el campo __JSON Data__ y se pueden utilizar en el HTML del e-mail. Usted sólo tiene que insertarlas dentro de llaves dobles, usando el siguiente formato: `{{variable}}`

### Ejemplo

>⚠️ Los ejemplos de JSON Data sólo aparecerán en los templates cuando usted termine la acción deseada en su tienda. Si no ha transacionado un pedido, una recurrencia o cualquier otra acción, el JSON Data aparecerá en blanco.

Digamos que usted desea insertar el nombre del transportista en el e-mail de pedido enviado.

Para ello, entre en la plantilla de pedido enviado y, en el campo __JSON Data__, busque la propiedad `courier`.

![templateCourierMCEspanhol](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Message%20center/Templates/incluir-variables-del-pedido-en-el-template-de-email-transaccional_1.png)

El valor llenado para esta propiedad es sólo un ejemplo, pero puede utilizarlo en el campo __HTML__ para que, cuando se envía el e-mail, el cliente vea el transportista de hecho responsable de la entrega del pedido.

Tenga en cuenta que la propiedad `courier` está dentro del objeto `package`. Por lo tanto, es necesario insertarla de la siguiente manera:

`{{package.courier}}`

![courier3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Message%20center/Templates/incluir-variables-del-pedido-en-el-template-de-email-transaccional_2.png)

Vea que el valor de ejemplo ("Transportadora Teste Courier S.A.") se ha insertado en la pantalla de vista previa, debajo de los campos __HTML__ y __JSON Data__.

### Otras variables de emails de pedido

Entre las propiedades de los JSONs de pedido que se pueden utilizar como variables en los tempaltes de emails transaccionales, se encuentran:

- `courier`: transportista
- `invoiceNumber`: número de la factura
- `invoiceValue`: valor de la factura
- `invoiceUrl`: URL de la factura
- `issuanceDate`: fecha de emisión
- `trackingNumber`: número de seguimiento del pedido
- `invoiceKey`: clave de acceso de la factura
- `trackingUrl`: URL de seguimiento del pedido (informada por la transportista)
