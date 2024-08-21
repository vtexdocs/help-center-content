---
title: 'Registrar un muelle'
id: 5XvQ1yLpxLlIKWRw1pSiyA
status: DRAFT
createdAt: 2019-08-21T18:17:35.897Z
updatedAt: 2022-03-08T18:43:07.011Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:49:51.424Z
contentType: trackArticle
productTeam: Post-purchase
slug: registrar-un-muelle
locale: es
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---

Hay dos formas de registrar un muelle:  
- Por Admin
- Por API REST

Siga el procedimiento a continuación para registrar un muelle en su tienda:

## Admin

1. Haga clic en **Inventario y Envío**.
2. Haga clic en la sección **Estratégia de Envío**.
3. Haga clic en el botón **Nuevo Muelle**.
4. Rellene los campos del formulario de registro. Para comprender mejor el significado de cada campo, consulte a continuación la sección [Campos de Registro] (#campos-de-registro).
5. Haga clic en el botón **Guardar**.

![ES Cadastrar Doca GIF](https://images.ctfassets.net/alneenqid6w5/1nWWY7VL7GvqTA3s9TuQ3Z/470d02a8d6a602066a4585fd3db15208/ES_Cadastrar_Doca_GIF.gif)

### Campos de registro

- _ID_: campo identificador del muelle. Si no se rellena, se creará automáticamente un valor para este campo.
- _Nombre_: nombre del muelle, para uso interno.
- _Política comercial_: políticas comerciales que este muelle atenderá.
- _Transportadoras asociadas_: transportadoras que este muelle atenderá.
- _Tiempo de Costo_: tiempo que se agregará al cálculo de la entrega debido a la etapa de este muelle. > _Ej.: _ Tiempo de costo del inventario (2 días) + Tiempo de costo del muelle (3 días) + Tiempo de costo de la transportadora (1 día) = La entrega se realizará en 6 días.

>ℹ️ **Atención**: el plazo de un muelle es independiente de si una transportadora opera o no los fines de semana y feriados. El tiempo de entrega será siempre la suma del tiempo del stock, de la transportadora y del muelle.

- _Overhead de tiempo de costo_: valor que se utilizará para elegir el muelle más ventajoso en una entrega determinada. Este valor no se agrega al cálculo del tiempo de entrega.
> _Ej.: _ Los muelles A y B tienen tiempo de costo de 3 días, pero el muelle A tiene overhead de 1 día, mientras que el muelle B tiene overhead de 2 días. En este caso, se elegirá el muelle A.

-  _Prioridad_: valor para desempate en la selección del muelle. Cuanto mayor sea el valor de prioridad, más posibilidades hay de elegir ese muelle.
- _EndPoint WMS_: se utiliza para integrar un software externo de WMS (warehouse management system) al flujo de procesamiento de pedidos.
- _Dirección_: dirección del muelle registrado.

## API REST

>⚠️ Las autenticaciones para las llamadas de API REST del módulo de Inventario y Envío deben realizarse a través de AppKey y AppToken. Para entender más, acceda a nuestro artículo sobre [ cómo generar un Appkey y un AppToken para autenticar sus integraciones](https://help.vtex.com/es/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones--43tQeyQJgAKGEuCqQKAOI2)

Para registrar un **Muelle** por API, debe enviar un __POST__ para el siguiente  endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/configuration/docks?an={{accountName}}`

- El objeto del request tiene las siguientes propiedades:

| __Propiedades__ | __Tipos__ |__Descripción__|
|------------------|-----------|-------------|
| id| object| ID del muelle|
| name| string| Nombre del muelle|
| priority| integer| Rango 0-10 para establecer la priorización de rutas|
| dockTimeFake| integer| Tiempo de Costo|
| timeFakeOverhead| integer| Overhead de tiempo de costo|
| salesChannels| nullable| Canales de venta|
| wmsEndPoint| string| EndPoint WMS|
| address| array| Dirección (ítems incluidos en el array listados abajo. Verifique el ejemplo de body)|
| postalCode| integer| Código postal|
| country| object| País|
| city| string| Ciudad|
| state| string| Estado|
| neighborhood| string| Barrio|
| street| string| Calle|
| number| string| Número|
| complement| string| Complemento|

Abajo, tenemos un ejemplo de Header y un ejemplo posible de Body para pasarse en el request.

### Headers

| Header| Value |
|------------------|-----------|
| Accept |   application/json |
| Content-Type |   application/json; charset=utf-8 |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Ejemplo

```json
{
    "id": "Alto Bosque",
    "name": "Tienda Alto Bosque",
 "priority": 0,
    "dockTimeFake": "00:00:00",
    "timeFakeOverhead": "00:00:00",
    "salesChannels": [
      "1"
    ],
    "salesChannel": null,
    "freightTableIds": [],
    "wmsEndPoint": "",
    "pickupStoreInfo": {
      "isPickupStore": false,
      "storeId": null,
      "friendlyName": null,
      "address": {
        "postalCode": "130002",
        "country": {
          "acronym": "COL",
          "name": "Colombia"
        },
        "city": "Cartagena",
        "state": "Bolívar",
        "neighborhood": "Alto Bosque",
        "street": "Transversal 53",
        "number": "100",
        "complement": "",
        "coordinates": null
      },
      "additionalInfo": null,
      "dockId": null
    },
    "address": {
        "postalCode": "130002",
        "country": {
          "acronym": "COL",
          "name": "Colombia"
        },
        "city": "Cartagena",
        "state": "Bolívar",
        "neighborhood": "Alto Bosque",
        "street": "Transversal 53",
        "number": "100",
        "complement": "",
        "coordinates": [[-43.18228090000002, -22.9460398 ]]
      }
  }
```
