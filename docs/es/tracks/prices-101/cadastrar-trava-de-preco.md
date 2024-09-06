---
title: 'Registrar Bloqueo de Precio'
id: 6IVgeLPeggIv2mkbFVO6y3
status: PUBLISHED
createdAt: 2019-07-04T13:54:30.939Z
updatedAt: 2024-08-26T18:38:52.888Z
publishedAt: 2024-08-26T18:38:52.888Z
firstPublishedAt: 2019-07-17T19:48:12.477Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: registrar-bloqueo-de-precio
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugES: precios-101
---

Hay dos formas de registrar el bloqueo de precio:

- a través del Admin
- por API REST

Siga el siguiente procedimiento para registrar el bloqueo de precio:

## Admin 

1. En el Admin de VTEX, ve a Configuración de la **tienda > Productos > Configuración de precios**, o escribe **Configuración de precios** en la barra de búsqueda de la parte superior de la página.
2. Haz clic en **Usar límite de variación de precios**.
3. Ingresa el porcentaje deseado para **Reducción máxima** y **Aumento máximo**.
4. Haz clic en **Guardar**.

## API REST

>⚠️ Las autenticaciones para las llamadas de API REST del módulo de Precios deben realizarse a través de AppKey y AppToken. Para entender más, acceda a nuestro  artículo sobre [cómo generar un Appkey y un AppToken para autenticar sus integraciones](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication)

Para registrar el **bloqueo de precio**, necesita enviar en __POST__ para el siguiente  endpoint:

`https://api.vtex.com/{{account}}/pricing/config`

- El objeto del request tiene las siguientes propiedades:

| __Propiedades__ | __Tipos__ | __Descripción__ |
|------------------|-----------|-------------|
| priceVariation | object | Variación de precio |
| upperLimit | integer | Límite superior |
| lowerLimit | integer | Límite inferior |

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
	"priceVariation": {
        "upperLimit": 50,
        "lowerLimit": 20
    }
}
```
