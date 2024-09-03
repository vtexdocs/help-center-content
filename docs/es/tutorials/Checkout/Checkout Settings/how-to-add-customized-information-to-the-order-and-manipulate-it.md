---
title: 'Cómo ingresar y manipular información personalizada en el orden'
id: 7tDi1jQQ51ufARcRm8NUnC
status: ARCHIVED
createdAt: 2020-05-29T12:05:23.571Z
updatedAt: 2022-07-25T18:20:29.230Z
publishedAt: 
firstPublishedAt: 2020-05-29T12:20:21.210Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: como-ingresar-y-manipular-informacion-personalizada-en-el-orden
locale: es
legacySlug: como-ingresar-y-manipular-informacion-personalizada-en-el-orden
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Cuando el cliente final entra en el proceso de checkout en una tienda VTEX, creamos el objeto `orderForm`, que contiene una serie de información sobre el pedido.

Sin embargo, en las operaciones B2B, en las que el contexto de venta es más complejo, la tienda a menudo necesita que este objeto contenga información adicional, como tipo de pedido y purchase order number.

Para esto, debe utilizar el campo `customData` del `orderForm`. El objetivo de este campo es que se rellene con información personalizada necesaria para la operación específica de la tienda.

Para trabajar con este campo, debe utilizar la API del Checkout de VTEX. Son necesarios tres pasos:

1. Crear apps y fields por medio del request de configuración.
2. Utilizar la API para grabar/actualizar/consultar los datos (a través de `orderForm` y `placeOrder`).
3. Encontrar los datos deseados en el pedido creado.


## 1. Crear apps y fields por medio del request de configuración

Antes de rellenar el campo `customData`, es necesario utilizar la llamada [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) para crear una app. Esta app contendrá los campos personalizados que se rellenarán durante el checkout.

>⚠️ La llamada Update orderForm configuration define configuraciones que se aplican a todos los orderForms generados en su cuenta. Es decir, a partir del momento en que añade una app por medio de esta, todos los pedidos de la tienda contendrán los campos adicionales definidos en esta app. Esta llamada solo necesita realizarse una vez para crear una app y sus campos.

Veamos un ejemplo del objeto `app` enviado en el body del request  Update orderForm configuration:

```json
"apps": [
        {
            "fields": [
                "order-type",
                "po-number"
            ],
            "id": "cart-b2b-context"
        }
]
```

Con este objeto en el body, el request creará una app cuyo ID será `cart-b2b-context` y que contendrá dos campos: `order-type` y `po-number`.

Si la llamada tiene éxito (respuesta `200 OK`), el orderForm de los pedidos de su tienda ahora contiene estos dos nuevos campos.

## 2. Utilizar la API para grabar/actualizar/consultar los datos

Ahora que se crearon los campos, necesitamos guardar los datos en esos campos. Eso se puede hacer con una sola llamada: [Set multiple custom field values](https://developers.vtex.com/reference/custom-data#setmultiplecustomfieldvalues).

Por medio de esta llamada, usted informa el ID de la app que desea modificar (en la URL), así como los nombres de los campos y los valores que desea guardar en cada uno de estos campos (en el body).

Utilizando el ejemplo anterior, podríamos hacer el siguiente request:

URL:
`https://{accountName}.myvtex.com.br/api/checkout/pub/orderForm/{orderFormId}/customData/cart-b2b-context`

Body:
```json
{
  “order-type”: “abc”,
  "Po-number": “9870234”
}
```

En esta llamada de ejemplo, estamos rellenando los nuevos campos adicionales del OrderForm identificado en la URL por `{orderFormId}`.


## 3. Encontrar los datos deseados en el pedido creado


Por último, es necesario implementar el acceso a los datos guardados en los campos adicionales del orderForm. Para esto, basta con utilizar la API de [Get Order](https://developers.vtex.com/reference/orders#getorder), pasando en la URL el ID del pedido.

Los campos y sus respectivos valores estarán dentro del objeto `customData`.
