---
title: 'Registrar Regla de Precio'
id: 7fyZaYe1IGzL0qVC28tOBO
status: PUBLISHED
createdAt: 2019-07-04T13:53:15.461Z
updatedAt: 2023-08-21T17:10:07.115Z
publishedAt: 2023-08-21T17:10:07.115Z
firstPublishedAt: 2019-07-17T19:42:10.960Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: cadastrar-regra-de-preco
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugES: precios-101
---

Hay dos formas de registrar una regla de precio:

- por el Admin 
- por API REST

Siga el procedimiento a continuación para registrar la regla de precio de su tienda:

## Admin

1. En el Admin VTEX, accede a **Precios > Reglas de precios** , o escribe **Reglas de precios** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el botón verde **Nueva Regla**.
3. En el primer paso, **¿Cuáles son los datos generales de esta regla?**, seleccione en el *dropdown* una tabla de precios. 
4. En el segundo paso, **¿En cuáles ítems esta regla se aplicará?**, seleccione si la regla se va a *Aplicar en todos los productos* o *Apenas en categorías y marcas escogidas*. Si se selecciona la segunda opción, debe escoger las **Categorías** y/o **Marcas** deseadas. 
5. En el paso **¿Aplicar regla para ítems en un rango de markup?**, active el *toggle* *Utilizar rango de markup* para utilizar este criterio. Digite el porcentaje mínimo de markup en el campo **de** y el porcentaje máximo de markup en el campo **hasta** para seleccionar los ítems dentro de este rango.
6. En el paso **¿Aplicar regla apenas en determinados días?**, active el *toggle* *Utilizar apenas en el periodo específico* para utilizar este criterio. Digite la **Fecha Inicio**, la **Hora Inicio**, la **Fecha Fin** y la **Hora Fin** del periodo en que la regla se aplicará.
7. En el paso, **¿Cuál será la variación del precio para esta regla?**, defina el porcentaje de variación de precio en *Modificador*. La regla de precio aplicará esta variación a los SKUs escogidos.
8. Haga clic en **Guardar**.
9. Una *barra lateral* se abrirá para confirmar la creación de la regla. Haga clic en **Confirmar**.

## API REST

>⚠️ Las autenticaciones para las llamadas de API REST del módulo de Precios deben realizarse a través de AppKey y AppToken. Para entender más, acceda a nuestro artículo sobre [cómo generar un Appkey y un AppToken para autenticar sus integraciones](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication)

Para registrar una **regla de precio**, debe enviar un __POST__ para el siguiente endpoint:

`https://api.vtex.com/{{accountName}}/pricing/pipeline/catalog`

- El objeto del request tiene las siguientes propiedades:

| __Propiedades__ | __Tipos__ | __Descripción__ |
|------------------|-----------|-------------|
| tradePolicyId | string | Id de la tabla de precio en la cual se aplicará la regla |
| rules | array | Criterios de la regla de precio |
| id | integer | Id de la regla de precio. Es posible registrar más de una regla para la misma tabla de precios. |
| context | object | Objeto que contiene las propiedades de la regla de precio|
| categories | object | Categoría a la que se aplicará la regla |
| brands | object | Marca a la que se aplicará la regla |
| markupRange | object | Regla aplicada para ítems en un rango de markup |
| from | integer | Valor mínimo del rango de markup |
| to | integer | Valor máximo del rango de markup |
| dateRange | object | Regla aplicada apenas en determinados días |
| from | string | Fecha y horario de inicio |
| to | string | Fecha y horario de fin |
| percentualModifier | integer | Variación del precio para esta regla |

- El objeto de response tiene las siguientes propiedades: 

| __Propiedades__ | __Tipos__ | __Descripción__ |
|------------------|-----------|-------------|
| tradePolicyId | string | ID de la tabla de precio en la cual se aplicará la regla |
| rules | array | Array con los objetos de las reglas de precio que se aplicarán en la tabla de precios |
| id | integer | ID de la regla de precio. Es posible registrar más de una regla para la misma tabla de precios. |
| context | object | Objeto que contiene las propiedades de la regla de precio|
| categories | object | Categoría a la que se aplicará la regla |
| brands | object | Marca a la que se aplicará la regla |
| markupRange | object | Regla aplicada para ítems en un rango de markup |
| from | integer | Valor mínimo del rango de markup |
| to | integer | Valor máximo del rango de markup |
| dateRange | object | Regla aplicada apenas en determinados días |
| from | string | Fecha y horario de inicio |
| to | string | Fecha y horario de fin |
| percentualModifier | integer | Variación del precio para esta regla |

- A continuación, tenemos un ejemplo de Header y Body para ser pasados en el request

### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/vnd.vtex.pricing.v3+json |
| Content-Type | application/json |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body 
```json
 {
        "tradePolicyId": "1",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {
                        "8": "categoryName"
                    },
                    "brands": {
                        "2000003": "brandName"
                    },
                    "markupRange": {
                        "from": 20,
                        "to": 50
                    },
                    "dateRange": {
                        "from": "2019-07-09T15:00:00.000Z",
                        "to": "2019-07-12T15:00:00.000Z"
                    }
                },
                "percentualModifier": 10
            }
        ]
 }
```
*Si se pasa un array vacío, las reglas registradas anteriormente se borrarán*
