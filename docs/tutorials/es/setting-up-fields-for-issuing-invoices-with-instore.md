---
title: Configurar campos para emisión de facturas en inStore
id: 3DlxJlZI1Wqk2So6MGwWII
status: DRAFT
createdAt: 2018-03-13T19:40:22.188Z
updatedAt: 2022-09-13T21:24:23.416Z
publishedAt: 
firstPublishedAt: 2018-03-13T19:54:06.513Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slug: configurar-campos-para-emision-de-facturas-en-instore
legacySlug: configurar-campos-para-emision-de-facturas-en-instore
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

Para que la factura de un pedido hecho por inStore tenga todos los campos necesarios, es necesario configurar algunos campos adicionales en el __orderForm__ del pedido. Además, estos campos adicionales permiten que el módulo de pedidos de VTEX identifique correctamente cuando un pedido es realizado por inStore.

Para configurar estos campos adicionales, siga los pasos abajo:

- Haga un GET en la ruta `https://{AccountName}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm`, donde `{AccountName}` es el nombre de su tienda. Usted debe utilizar la `x-vtex-api-appKey` y el `x-vtex-api-appToken` de su tienda para realizar esta llamada.
- Guarde la respuesta de este GET en algún editor de texto.
- Usted verá que la propiedad "apps" tendrá el valor de un array vacío (`[]`). Incluya dentro de los corchetes el snippet abajo.

```json
     {
       "fields": [
  "cart-extra-context",
  "cart-type",
      ],
      "id": "cart-extra-context",
      "major": 1
      }
```

- Guarde el archivo de texto.
- Haga un POST en la ruta `https://{AccountName}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm`, donde `{AccountName}` es el nombre de su tienda. Usted debe utilizar la `x-vtex-api-appKey` y el `x-vtex-api-appToken` de su tienda para realizar esta llamada. El body de este POST será todo el contenido del archivo del paso anterior.

---

Ahora el orderForm de sus pedidos ya tiene los campos extras. Para comprobar si el POST ha ocurrido con éxito, usted puede realizar un GET en la ruta `https://{AccountName}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm` y verificar si la propiedad "apps" tiene la nueva información.
