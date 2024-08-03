---
title: 'Introducción a las APIs VTEX'
id: 3SjAqQ0BeUqu2ge8AiIkmW
status: DRAFT
createdAt: 2017-06-08T20:46:13.393Z
updatedAt: 2020-04-08T16:15:23.801Z
publishedAt: 
firstPublishedAt: 2017-06-08T21:03:38.350Z
contentType: tutorial
productTeam: Others
author: authors_24
slug: introduccion-a-las-apis-vtex
locale: es
legacySlug: introduccion-a-las-apis-vtex
subcategory: 1vwB9FtTSQmcSewQw02QoW
---

Una API (Application Programming Interface) es un conjunto de rutinas y patrones de programación para acceso a aplicaciones de software o plataformas, basado en la Web.
 
VTEX pone a disposición una serie de APIs abiertas para que los comerciantes y aliandos realicen integraciones altamente customizables con nuestros sistemas. 

Si usted no tiene experiencia en programación pero desea lidiar con ese tipo de integración, es importante conocer lo básico sobre cómo funcionan los intercambios de datos vía API.
 
Algunos programas nos ayudan a lidiar con APIs y construir requests rápidamente. Uno de los más utilizaros es el **Postman**, que usamos aquí como referencia.

Sin embargo, una API pública que no necesita autenticación puede ejecutarse incluso en su browser, como si fuera una URL normal.
 
### El concepto de API
 
Cuando un site o una aplicación necesita comunicarse con otro sistema, lo hace usualmente por medio de una API.

En VTEX, por ejemplo, toda vez que su tienda inserta un nuevo valor de flete para una transportadora o siempre que el sistema de un aliado realiza una consulta del número de productos en su stock, esa comunicación se realiza por una API específica para cada uno de esos determinados fines.
 
Para que el sistema 1 se comunique con el sistema 2, él necesita tener acceso a un código puesto a disposición por el sistema 2. 

Además, si la API que él desea usar es privada, él necesitará una **AppKey** y un **AppToken** (que funcionan más o menos como contraseña y login). Y en el caso de APIs públicas, esto no es necesario.
 
### Enviando requests
 
El **request** es la solicitud que un sistema hace al otro (“borre esto”, “consulte aquello” etc.). Para saber cómo está interactuando su tienda a través de las APIs y que resultados están retornando, es importante saber simular requests. Y es ahí que entra el [Postman](https://www.getpostman.com/docs/requests).
 
Las cuatro partes principales de un request HTTP son: 
- URL.
- Método.
- Headers.
- Body.

Vamos a entender mejor cada una de ellas.

****

#### URL

Es donde está incluida la ruta que su request debe recorrer para obtener, publicar o borrar la información deseada.

Por ejemplo, la URL para obtener la información sobre determinado SKU en una tienda VTEX es: `http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{{skuId}}`

En ella deben incluirse:
- El nombre de la tienda: `{{AccountName}}`.
- El ambiente, o sea, vtexcommercestable o vtexcommercebeta: `{{environment}}`.
- El ID del SKU: `{{skuId}}`.
 
En el Postman, debe insertarse la URL en el campo destacado a continuación:

![APIs1](https://images.contentful.com/alneenqid6w5/f53Sv9BCZqK4EI0sYmW8A/63e512b825d47daa2f685ae5bb9df553/APIs1.png)

****

#### Método

Para que interactúen, las APIs usan determinados métodos, que, en el protocolo HTTP, funcionan por medio de **verbos**. Cada uno de ellos determina un tipo de acción. Los más comunes son:
- __GET__: lee o recupera información.
- __POST__: crea un nuevo recurso.
- __PUT__: actualiza un recurso.
- __DELETE__: remueve un recurso.
 
En el caso de la URL del ejemplo precedente, como lo que deseamos es leer información de un SKU, el verbo usado es GET.
 
Sin embargo, usted no necesita deducir esto solo. Al poner a disposición una API, VTEX informa el método que debe utilizarse con ella.
 
En el Postman, el método es seleccionado a la izquierda del campo de URL.

![APIs2](https://images.contentful.com/alneenqid6w5/wDClzNRJDiCE6OKecOAs4/8545dbce3bc2ee546b8cf497750360b5/APIs2.png)


****
#### Headers
 
Como la información de su tienda es particular, todas las APIs de VTEX son privadas. Para tener acceso a ellas y simular un request, es necesario tener la AppKey y el AppToken.
 
Cuando es creado un nuevo usuario para su tienda, se le atribuye a este usuario un determinado perfil de acceso en el módulo [License Manager](/es/tutorial/vision-general-del-license-manager/). 

Y, para cada uno de esos perfiles, está permitido el acceso a determinadas APIs. Por ejemplo, aunque un usuario con el perfil de televendas tiene acceso al módulo OMS de su admin, él no consigue acceder a información de su tienda vía API.
 
En el postman, la AppKey y el AppToken deben insertarse en la pestaña **Headers**. En el primer header, inserte `X-VTEX-API-AppKey` y entonces su AppKey. En la segunda línea, inserte `X-VTEX-API-AppToken` y entonces su AppToken. 

Para saber como generar su AppKey y su AppToken, ler el artículo [Crear appKey y appToken para autenticar las integraciones](/es/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones).

![APIs3](https://images.contentful.com/alneenqid6w5/4z9W9DYJEcYa2WGIoSceEE/166d8adc70a8176af1a7fb04e5cdbb65/APIs3.png)

****

#### Body
 
Es en el campo de Body que aparece el cuerpo de la respuesta a la solicitud. 
 
En el ejemplo del GET que mostramos anteriormente, lo que queríamos era información sobre determinado SKU. Ésta llegará probablemente en un JSON con diversos datos sobre el nombre del SKU, sus dimensiones, su imagen etc. Todas ellas aparecerán en el Body de la respuesta.
 
Además, algunos requests (específicamente aquéllos en los que una información está siendo enviada, y no solicitada) exigen un código en el cuerpo de la solicitud. 

En este caso, usted usará el body no sólopara leer la respuesta, sino que también como un campo donde insertar los datos necesarios para la solicitud. Éste es, por tanto, el Body del Request.


### Dónde encontrar las APIs de VTEX
 
Las APIs de VTEX están disponibles en nuestro Help Center, en la sección [Developer Docs](/es/developer-docs).
 
Ellas quedan divididas por módulo o funcionalidad. Ingresando a uno de éstos, usted encuentra las APIs correspondientes, cada una de ellas acompañada de la indicación del método correcto, URL y Headers. Algunas APIs tienen también el código que debe pasarse en el Body.
 
![APIs4](https://images.contentful.com/alneenqid6w5/1JZCBHsm6UGS2EwuGqoGm4/a61e000b81acd2f06a1021f70c12e31b/APIs4.png)
 
A la derecha de esas indicaciones, el Postman exhibe, para cada API, un Sample Request. De acuerdo con el lenguaje elegido en la caja de selección por encima de él, el Sample Request muestra cómo sería la aplicación de la solicitud en el código.

![sample request](https://images.ctfassets.net/alneenqid6w5/3wK9xsMZmwca8IeygiYOyO/fc875afab27a1abb9c812ec62e511ec9/sample_request.png)
 
Para algunas APIs, hay también una Sample Response, que es un ejemplo de respuesta a aquel request.
 
<div class="alert alert-warning">
Todo el contenido que aparece entre llaves (**{{contenido}}**) es una variable, y debe ser reemplazado por el dato correcto antes de que se realice el request. Es el caso, por ejemplo, del nombre de su tienda, del ambiente deseado y de los de AppKey y AppToken.
</div>

Vea cómo crear su appKey y appToken en el artículo [Crear appKey y appToken para autenticar las integraciones](/es/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones).
