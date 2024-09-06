---
title: 'Gestionar SKUs en inventario'
id: 6q8viq5Rvdb9mPDKs8MWKO
status: ARCHIVED
createdAt: 2019-09-23T12:29:35.372Z
updatedAt: 2022-03-08T18:44:41.035Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:56:10.686Z
contentType: trackArticle
productTeam: Post-purchase
slug: gestionar-skus-en-inventario
locale: es
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---

Ahora que todos los componentes de la ruta logística se han registrado, puede gestionarlos de acuerdo con las especificaciones de cada uno.

Como mencionamos anteriormente, la primera etapa de la ruta es el stock.

De este modo, es necesario incluir en el sistema todos los SKUs que estarán disponibles para su entrega por una transportadora. Esto es válido para todos los stocks que estén relacionados con una determinada ruta logística, sin excepción.

El Admin cuenta con la herramienta __Gestionar Ítems en Inventario __. Aquí puede actualizar la cantidad de SKUs disponibles en un determinado stock siempre que sea necesario.

Existen tres formas diferentes de realizar esta operación: 
- Por Admin.
- Por plantilla.
- Por API.

Vea a continuación.


## Admin

Usted puede gestionar las cantidades de SKUs en stock a través del propio Admin de VTEX. Puede editar apenas un SKU o varios a la vez.

Verifique el procedimiento:
1. Acceda al módulo __Inventario y Envío__.
2. Haga clic en __Inventario__.
3. Busque un producto o filtre por una cantidad máxima en stock.
4. Elija editar apenas un SKU haciendo clic en __Edite solamente este__ o edite varios SKUs al mismo tiempo haciendo clic en el botón __Editar seleccionados__.
5. Complete los campos con el nuevo recuento de ítems disponibles en stock.
6. Haga clic en el botón __Guardar__.

## Plantilla 

Para editar en masa y actualizar el stock de diversos SKUs, siga los pasos de nuestro artículo [Importar y exportar plantilla de stock]https://help.vtex.com/es/tutorial/importando-e-exportando-planilha-de-estoque?locale=pt).

Pero antes, preste atención para rellenar de forma correcta esta plantilla. Para hacer esto, siga las pautas en nuestro artículo [Cómo rellenar la plantilla de stock](https://help.vtex.com/es/tutorial/como-rellenar-la-plantilla-de-stock--2EQ0XOe8aA0UyQso0k2kkA).

## API REST

>⚠️ Las autenticaciones para las llamadas de API REST del módulo de Precios deben realizarse a través de AppKey y AppToken. Para saber más, vea nuestro artículo sobre [cómo crear appKey y appToken para autenticar las integraciones](https://help.vtex.com/es/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones--43tQeyQJgAKGEuCqQKAOI2)

Para cambiar la cantidad de un SKU en stock por API, debe enviar un __PUT__ al siguiente endpoint:


`https://logistics.{{environment}}.com.br/api/logistics/pvt/inventory/skus/{{skuId}}/warehouses/{{warehouseId}}?an={{accountName}}`

El objeto que debe enviarse en el body del request tiene las siguientes propiedades:

| __Propiedad__ | __Tipo__ |__Descripción__|
|------------------|-----------|-------------|
| unlimitedQuantity | boolean | Define si ese SKU tiene o no stock infinito  |
| dateUtcOnBalanceSystem | DateTimeOffset | Fecha/hora. Define el momento correspondiente al stock informado. Esto es útil debido a la liberación de las reservas de pedidos en manejo. Cuando se pase como `null`, este valor será la fecha/hora del momento del request.   |
| quantity| integer | Nueva cantidad de SKU que debe registrarse en el stock|

A continuación, tenemos un ejemplo de Header y un ejemplo posible de Body para ser pasados en el request.
 
### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/json |
| Content-Type | application/json; charset=utf-8 |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Ejemplo 

```json
{
    "unlimitedQuantity": false,
    "dateUtcOnBalanceSystem": null,
    "quantity": 243
}
```
