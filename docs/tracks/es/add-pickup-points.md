---
title: Registrar un punto de recogida
id: 6Mk0PK5AwSVzEufC3FmtAO
status: DRAFT
createdAt: 2019-08-22T13:27:37.853Z
updatedAt: 2022-03-08T18:48:30.264Z
publishedAt: 
firstPublishedAt: 2019-09-16T13:52:23.078Z
contentType: trackArticle
productTeam: Post-purchase
slug: cadastrar-pontos-de-retirada
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---

Hay tres formas de registrar un punto de recogida:

- Por admin
- Por plantilla
- Por REST API


Siga el siguiente procedimiento para registrar un punto de recogida en su tienda:


## Admin


1. Haga clic en **Inventario y Envío**
2. Haga clic en la sección **Puntos de Recogida**
3. Haga clic en el botón **agregar punto de recogida**.
4. Rellene los campos del formulario de punto de recogida. Para entender mejor el significado de cada campo, consulte la sección [Campos de registro](#campos-de-registro), abajo.
5. Haga clic en el botón **Guardar cambios**

![ES Cadastrar Ponto de Retirada GIF](//images.ctfassets.net/alneenqid6w5/1tWiezGUaoTRohpM2m5241/f1dfb789d45d72d8054f0f4ccebe740b/ES_Cadastrar_Ponto_de_Retirada_GIF.gif)


### Campos de registro


- _Name_: Nombre del punto de recogida.
- _ID_: ID del punto de recogida. Si no se rellena, el sistema va a escoger un ID automáticamente.
- _Pickup point address_:
-Seleccione el _país_ donde está localizado el punto de recogida.
-En el campo _Pickup point address_, digite la dirección deseada y haga clic en la opción  correcta entre las que aparecerán abajo para escoger la localización. Las informaciones de la  dirección se exhibirán en la pantalla, así como su geolocalización en el mapa. Usted puede hacer clic en _Edit_ para alterar la dirección o en _Clear_ para agregar una dirección desde cero.

- _Pickup instructions_: ingrese informaciones para su cliente relacionadas al punto de recogida. Esas informaciones se exhibirán al cliente en el checkout, al momento de la elección del punto de recogida.
- _Tags_: usted puede agregar tags para agrupar puntos de recogida, separando cada tag por comas.
- _Working hours_:
-En los  _Días de la semana_, rellene los horarios de funcionamiento del punto de recogida. Si no se agrega ninguna información, el sistema considerará el horario de funcionamiento de 24 horas por día para todos los días de la semana.

- _Exceptions or holidays_:
-Para agregar días y horarios específicos en que el punto de recogida no funcionará, haga clic en _Add an Exception_.
-Rellene el _Día_ y el _Horario_ deseados y haga clic en _Agregar_.

## Plantilla


> **Antes de realizar la importación de los Puntos de Recogida, es necesario exportar la plantilla modelo**.

Para hacer el download de la plantilla modelo, siga los pasos a continuación:

1. Haga clic en **Inventario y Envío**
2. Haga clic en la sección **Puntos de Recogida**
3. Haga clic en el botón **Upload an XLS**
4. Haga clic en **Download a Sample Table**

5. Una vez realizado el download de la plantilla, altere en el archivo Excel los campos necesarios para incluir nuevos puntos de recogida y guarde la plantilla en su computadora

Para subir una plantilla con los puntos de recogida, siga los pasos a continuación:

1. Haga clic en **Inventario y Envío**
2. Haga clic en la sección **Puntos de Recogida**
3. Haga clic en el botón **Upload an XLS**
4. Haga clic en **Choose a File**
5. Seleccione un archivo de su computadora

## API REST


<div class="alert alert-warning">
Las autenticaciones para las llamadas de API REST del módulo de Logística se deben realizar vía  AppKey y AppToken. Para entender más, acceda a nuestro artículo sobre  <a href="https://help.vtex.com/es/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones--43tQeyQJgAKGEuCqQKAOI2">cómo generar un Appkey y un AppToken para autenticar sus integraciones</a>
</div>

Para registrar un **Punto de Recogida** por API, debe  enviar un __POST__ para el siguiente  endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/configuration/pickuppoints/{{pickupPointId}}?an={{accountName}}`

- El objeto del request tiene las siguientes propiedades:


| __Propiedad__ | __Tipo__ |__Descripción__|
|------------------|-----------|-------------|
| name| string| Nombre del punto de recogida|
| Description| string| Descripción del punto de recogida|
| instructions| string| Instrucciones para que el cliente recoja el pedido|
| address| array| Dirección del punto de recogida (array descrito en los campos abajo. Verifique el ejemplo de body.) |
| postalCode| integer| Código postal, o CEP|
| country| string| País|
| city| string| Ciudad|
| state| string| Estado|
| neighborhood| string| Barrio|
| street| string| Calle|
| number| string| Número|
| complement| string| Complemento|
| reference| string| Referencia de la dirección |
| isActive| nullable| Marcar si el punto de recogida está activo|
| businessHours| array| Definir horario de funcionamiento del punto de recogida (ítems del array descritos abajo. Verifique el ejemplo de body.)  |
| dayOfWeek | integer| Día de la semana (definido de 1 a 7)|
| openingTime| string| Horario de apertura|
| closingTime| string| Horario de cierre|
| tagsLabel| list| Tags de puntos de recogida|

A continuación tenemos un ejemplo de header y posibles ejemplos de body para pasarse en el  request.

### Headers

| Header| Value |
|------------------|-----------|
| Accept |   application/json |
| Content-Type |   application/json; charset=utf-8|
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |


### Body - Ejemplo


```json
{
    "id": "1a227d3",
    "name": "Tienda Copacabana",
    "description": "",
    "instructions": "Obligatorio presentar documento de identificación",
    "formatted_address": "undefined",
    "address": {
        "postalCode": "22070002",
        "country": {
            "acronym": "BRA",
            "name": "Brazil"
        },
        "city": "Rio de Janeiro",
        "state": "RJ",
        "neighborhood": "Copacabana",
        "street": "Avenida Atlántica",
        "number": "",
        "complement": "",
        "reference": null,
        "location": {
            "latitude": -22.974477767944336,
            "longitude": -43.18672561645508
        }
    },

    "isActive": true,
    "businessHours": [

        {

            "dayOfWeek": 1,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"

        },
        {

            "dayOfWeek": 2,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"

        },
        {

            "dayOfWeek": 3,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"

        },
        {

            "dayOfWeek": 4,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"

        },
        {

            "dayOfWeek": 5,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"

        }
    ],

    "tagsLabel": [
        "zonasur", "rio de janeiro"
    ]
}

```
