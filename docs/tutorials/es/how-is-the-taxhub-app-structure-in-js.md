---
title: 'Como es la estrutura de App en JS del TaxHub'
id: 6hY8wkf8LCCS4o0KAaKUu0
status: DRAFT
createdAt: 2017-07-26T17:04:34.946Z
updatedAt: 2020-05-25T19:10:26.819Z
publishedAt: 
firstPublishedAt: 2017-07-26T17:52:25.165Z
contentType: tutorial
productTeam: Others
author: 2Y2pnNkWfSoUMMYcwemq4A
slug: taxhub-estructura-de-app-en-js
locale: es
legacySlug: taxhub-estructura-de-app-en-js
subcategory: 
---

### Introducción

Este documento tiene la finalidad de instruir y proporcionar ejemplos acerca de la APP necesaria para desarrollar e instalar en TaxHub, con el objetivo de que en el checkout se pueda leer y aplicar los impuestos provistos y calculados en la propia APP.

Algunos puntos importantes antes de iniciar:

- Configurar las direcciones en los muelles. Ellas serán utilizadas para el cálculo del originShipping
- Cuando se tenga una app instalada en el TaxHub del módulo de VTEX, el Checkout siempre va a llamarla en toda y cualquier sesión de compra para los cálculos de impuestos, específicamente el archivo JURISDICTION.
- Una vez que el Checkout llama el TaxHub, este genera la comunicación entre la App (node.js instalada en el TaxHub) y el Checkout. 
- El TaxHub en la sesión de compra, realizara los requests y enviara los datos de la compra para la App pueda comunicarse con el ERP o Middleware;
- Con toda la información que obtenga el App por medio de los request, se armaran los JS que servirán para que la propia App logre la comunicación en los pasos siguientes;
- Todos los responses son esperados como object por el TaxHub, y se debe trabajar exactamente con lo que la App necesita de informacion, pues los requests siempre siguientes trabajaran con base en lo que se retorne. Caso se opte por retornar todo vacío, el TaxHub igual lo va a aceptar, pero devolverá todo vacio en los siguientes pasos.

Deberás crear un archivo jurisdiction.zip. la estructura del zip sigue el mismo patrón y los archivos serán llamados en el orden indicado abajo para el cálculo. 

Defina el nombre del archivo inicial, con el mismo país de la tienda. 
Ejemplo: argentina.js o mexico.js, el archivo .js de la carpeta principal y la carpeta tienen que tener el mismo nombre. La carpeta IVA puede tener cualquier nombre.

El orden de llamada que debe seguir también para el desarrollo:
![TaxHubTree](//images.contentful.com/alneenqid6w5/5hPFG8m6pUCMuIg8e2Iymm/957b9c89844099db690e82abe53c2b7a/TxHubTree.jpg)

Después de hacer los cambios deberá subir el archivo a VTEX en el formato `.zip` siempre con la misma estructura de carpetas.

Tendrás el collection en el Postman para validar el funcionamiento de los javascripts. https://www.getpostman.com/collections/f29298ccf69003fd7210

En el archivo customerCode.js, está el parámetro de entrada orderFormId, con eso tendrá acceso completo al orderForm del carrito para usar los datos. La llamada es importante enviar un parámetro adicional para no quedar en looping entre el checkout y taxhub.
/api/checkout/pub/orderForm/{orderFormId}?disableAutoCompletion=true

__Folders & JavaScripts Structure__
Levels structure
```
JURISDICTION/
     {{COUNTRY_NAME}}.JS
        {{COUNTRY_NAME}}/
        FISCALREGION.JS
        CUSTOMERCODE.JS
        ITEMCODE.JS
     {{TAX_NAME}}/
        ALIQUOT.JS
        TAXVALUE.JS
```

__Observaciones__

1. La estructura anterior es la mimina requerida para que la APP trabaje en las sesiones del checkout.
2. El folder y el JS con la tag {{COUNTRYNAME}} necesita ser llamado exactamente con el nombre del país para el cual será calculado el impuesto
3. El folder con el tag {{TAX_NAME}} se recomienda usar el nombre del impuesto que será mostrado en el checkout pero es posible asignar cualquier nombre.
4. Si necesita calcular más de un impuesto en el checkout, puede crear un segundo folder {{TAX_NAME}} con el nombre del segundo impuesto (e incluir los JS necesarios).
5. La APP se ejecutará por cada elemento distinto (no por la cantidad de los elementos) en el carro.


__JavaScript's Protocol__
❖	Occupation Area.JS
Este javascript recibirá un request con la dirección de origen inicial ubicada en el Muelle (módulo de Logística VTEX) y también la dirección del cliente. La propia aplicación identifica y responde a TaxHub acerca de si es posible comprar o no.

La respuesta que la aplicación necesita hacer es en una estructura booleana. Significa, sólo un "verdadero" o "falso" basado en la respuesta del servidor, para permitir o no continuar la compra.

Request:
```
{ 
"origin": {
"country": "Argentina",
"state": "Buenos Aires",
"city": "Ciudad Autónoma de Buenos Aires", "neighborhood": "Palermo"
}, 
"destination": {						
"country": "Argentina", 
"state": "Mendoza",
"city": "Mendoza", 
"neighborhood": "Villa Nueva"
}
 }
```

Response: boolean

Example:
```
{
“true“						
}
```

❖	FISCALREGION.JS
Una vez en este paso, la APP recibirá un request de TaxHub con la dirección del cliente, donde la aplicación a su vez puede comprobar directamente con el servidor sobre la condición de impuestos para esta región o por otro lado, la propia App puede haber configurado en su propia estructura el manejo de impuestos a calcular por la región fiscal.

Recordando que todas las respuestas realizadas por la aplicación serán utilizadas y devueltas en la siguiente request de TaxHub.
				
Request:
```
{
“country": “Argentina", 
“state": “BA“,
“city": “Buenos Aires“, 
“neighborhood": “Palermo“						
}
```

Response: object 

Example:
```
{
“region": “A“,
"taxCompliance": "true"					
}
```

❖	CUSTOMERCODE.JS
Aquí, la aplicación recibirá una solicitud de TaxHub con el cliente EMAIL y el accountName (nombre de la tienda en el sistema VTEX) ademas de poder conectarnos a Master Data y traer información de Profile System (Si es necesario).

Con esta información recibida por la App, enviará esos datos al servidor externo para procesar y devolver la información que sea necesaria tener en el Checkout, con el objetivo de calcular los impuestos para este cliente en cuestión.					

Request:
```
{
"account": "zonaprop",
"clientEmail": "jose.gabriel@vtex.com.br"						
}
```

Response: object 

Example:						
```
{
"dni": "31009878"
}
```

❖	ITEMCODE.JS
Una vez en este paso, la aplicación recibirá una solicitud de TaxHub con el ID SKU y el accountName (nombre de la tienda en el sistema VTEX). Tambien en esta seccion podremos también traer información del producto (si es necesario).

Con esta información recibida por la App, enviará esos datos al servidor externo para procesar y devolver la información que sea necesaria tener en el Checkout, con el objetivo de calcular los impuestos para este cliente en cuestión.
				
Request:					
```
{
"account": "zonaprop", 
"itemId": "408"						
}
```

Response: object 

Example:					
```
{
"refId": “45FSA3A”, 
"imported": false					
}
```

❖	ALIQUOT.JS
En este paso, la aplicación recibirá una solicitud de TaxHub con toda la lógica previamente formada por las respuestas de la aplicación.

Con estos datos finales, la aplicación tendrá los necesarios para calcular los impuestos para la compra. Donde la respuesta aquí será exactamente la fórmula para calcular el valor del impuesto y aplicarlo en el carro.
Ponga atención a los siguientes campos:

- __"originFiscalRegion"__: Dirección establecida en el Muelle (requerida en las tiendas que utilizan la aplicación TaxHub);
- __"destinationFiscalRegion":__ Dirección del cliente llenada en el momento de la compra.
- __"endpoint":__ Servidor configurado inicialmente en la interfaz backend de Tax Hub. Es un campo opcional
- __"authorizationHeader":__ Key de autenticacion del servidor “endpoint”. Es un campo opcional					

Request:
```
{
	"originFiscalRegion": object,		              //Objeto Dock Address
	"destinationFiscalRegion": object,            //Objeto Final client address
	"customerCode": object,		                    //Objeto CLIENTECODE.JS
	"itemCode": object,			                      //Objeto ITEMCODE.JS
	"endpoint": "http://www.server.com/taxes",    //Optional (set on TaxHub backoffice)
	"authorizationHeader": "GDFKFDJDKDLKJLKFDJLKFDJFL" //Optional
}
```

Response: object

Example:
```
{
"mva": 0.6543,					
"destination": 0.34,
“origin”: 0.11,
“expression” : “((((event.sellingPrice + ((event.sellingPrice + event.shippingPrice) * event.aliquot.mva)) * event.aliquot.destination) - (event.sellingPrice * event.aliquot.origin)) * 1.000000)”
}
```

❖	TAXVALUE.JS
Una vez en este paso, Pasará de nuevo la fórmula que fue devuelta en el ALIQUOT.JS para hacer el cálculo debido del impuesto (la fórmula devuelta en ALIQUOT.JS no tiene un estándar, la idea es usar exactamente lo que el servidor (externo) necesita como base para el cálculo).

Cuando el cálculo sea exitoso, devolverá exactamente el nombre del impuesto y el valor respectivo que lo representa en esa compra para el elemento.					
Request:
```	
{
"aliquot": object, //Objeto aliquot
"itemPrice": 79.00,
"shippingPrice": 5.00, 
"sellingPrice": 70.00						
}
```

Response: TaxValue[] 

Example:			
```
[{
"name": “IVA”, 
"value": 12.90						
}]
```

__JavaScript Archive__
*__Recommended structure__*
```
(function () { 
'use strict';						
var requestPromise = require("request-promise");
exports.run = function (event, context) {
try {
let objectResponse = {}; 
context.done(null, objectResponse);
} catch (e) 
{ context.done(e, null);					
}; 
};						
}).call(this);
```

__Observaciones __
1. __"event"__:  Objeto de entrada que contiene las propiedades indicadas anteriormente.
2. __"context"__: Función de devolución de llamada. El primer parámetro debe venir el error si existe. En el segundo parámetro el objeto de respuesta.
3. __Importing__: Libraries Sólo las bibliotecas hechas por VTEX.
