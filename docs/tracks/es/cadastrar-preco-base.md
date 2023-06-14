---
title: Registrar Precio Base
id: P99EjtrlRHk92Q8qDPq29
status: PUBLISHED
createdAt: 2019-07-04T13:52:47.694Z
updatedAt: 2023-03-29T18:29:21.378Z
publishedAt: 2023-03-29T18:29:21.378Z
firstPublishedAt: 2019-07-17T19:41:10.765Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: registrar-precio-base
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugES: precios-101
---

Hay tres formas de registrar un precio base:

- A través del Admin
- [Por plantilla](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D0
- Por API REST

Siga el procedimiento a continuación para registrar los precios base de sus SKUs: 

## Admin 

1. En el Admin VTEX, accede a *Precios > Lista de precios* , o escribe *Lista de precios* en la barra de búsqueda en la parte superior de la página.
2. Cada caja contiene un producto con sus respectivos SKUs. Haga clic en la primera columna de la línea del SKU deseado. Se abrirá una *barra lateral*.
3. Rellena los campos del formulario: 
- **Precio de costo**, rellene con el costo del SKU. En el campo 
- **Markup:** rellene con el margen de ganancia que se obtendrá con la venta del SKU. 
4. Haga clic en la propia *barra lateral* para guardar el precio.
5. El **Precio base** se calculará en función de los datos proporcionados en los pasos anteriores.

Si lo desea, es posible registrar un **precio de lista** asociado al precio base del SKU. Para esto, siga los siguientes pasos:

1. En la *barra lateral* donde se realiza el registro del precio base, haga clic en **+ precio de lista**.
2. En el campo **Precio de Lista**, rellene con el valor deseado para el SKU.
3. Haga clic en la propia *barra lateral* para guardar el precio de lista.

## API REST

<div class="alert alert-warning">
Las autenticaciones para las llamadas de API REST del módulo de Precios deben realizarse a través de AppKey y AppToken. Para comprender más, acceda a nuestro artículo sobre <a href="https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication">cómo generar un Appkey y un AppToken para autenticar sus integraciones</a>
</div>

Para registrar el **precio base** de un SKU, usted necesita enviar un __PUT__ para el siguiente endpoint:

`https://api.vtex.com/{{account}}/pricing/prices/{{itemId}}`

Usted también puede registrar un **precio de lista** asociado al precio base del SKU. Sin embargo, este campo **no es obligatorio**

- El objeto del request tiene las siguientes propiedades:

| __Propiedades__ | __Tipos__ | __Descripción__ |
|------------------|-----------|-------------|
| costPrice | integer | Precio de Costo del SKU |
| markup| integer | Markup del SKU |
| basePrice | integer | Precio Base del SKU |
| listPrice | integer | Precio de Lista del SKU |

- El objeto del response tiene las siguientes propiedades: 

| __Propiedades__ | __Tipos__ | __Descripción__ |
|------------------|-----------|-------------|
| itemId| string| Id del SKU |
| costPrice | integer | Precio de Costo del SKU |
| basePrice | integer | Precio Base del SKU |
| listPrice | integer | Precio de Lista del SKU |
| markup | integer | Markup del SKU |
| fixedPrices | array | Precio Fijo  |
| tradePolicyId | integer | Id de la Política Comercial |
| value | integer | Valor del Precio Fijo |
| listPrice | integer | Precio de Lista |
| minQuantity | integer | Cantidad mínima de ítems |
| dateRange | string | Variación de fecha del precio fijo |

- A continuación, tenemos un ejemplo de Header y **tres ejemplos posibles de Body** para ser pasados en el request

### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/vnd.vtex.pricing.v3+json |
| Content-Type | application/json |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Ejemplo 1

```json
{
    "costPrice": null,
    "markup": 100,
    "basePrice": 300
}
```

`costPrice * (1 + markup%) = basePrice`

En este ejemplo, como `costPrice = 150` y `basePrice = 300`, el `costPrice` será calculado por el sistema y será igual a `150`.

### Body - Ejemplo 2

```json
{
    "costPrice": 150,
    "markup": null,
    "basePrice": 300,
    "listPrice": 500
}
```

`costPrice * (1 + markup%) = basePrice`

En este ejemplo, como  `costPrice = 150` y `basePrice = 300`, el `markup` será calculado por el sistema y será igual a `100`.

También incluimos un precio de lista de valor `500`.

### Body - Ejemplo 3

```json
{
    "costPrice": 150,
    "markup": 100,
    "basePrice": null,
}
```

`costPrice * (1 + markup%) = basePrice`

En este ejemplo, como `costPrice = 150` y `markup = 100`, el `basePrice` será calculado por el sistema y será igual a `300`.
