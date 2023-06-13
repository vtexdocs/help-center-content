---
title: Registrar Bloqueo de Precio
id: 6IVgeLPeggIv2mkbFVO6y3
status: CHANGED
createdAt: 2019-07-04T13:54:30.939Z
updatedAt: 2023-03-29T20:24:47.600Z
publishedAt: 2023-03-29T15:24:12.257Z
firstPublishedAt: 2019-07-17T19:48:12.477Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: registrar-bloqueo-de-precio
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugES: precios-101
---

Hay dos formas de registrar el bloqueo de precio:

- a través del Admin
- por API REST

Siga el siguiente procedimiento para registrar el bloqueo de precio:

## Admin 

1. Haga clic en **Precios**.
2. Haga clic en **Configuraciones**.
3. En la caja **Bloqueo en la variación de precio** active la funcionalidad haciendo clic en el *toggle* **Usar bloqueo de precio**.
4. Digite el porcentaje de variación del **Límite superior** y del **Límite inferior** deseados.
5. Haga clic en **Guardar**.

## API REST

<div class="alert alert-warning">
Las autenticaciones para las llamadas de API REST del módulo de Precios deben realizarse a través de AppKey y AppToken. Para entender más, acceda a nuestro  artículo sobre <a href="https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication">cómo generar un Appkey y un AppToken para autenticar sus integraciones</a>
</div>

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
