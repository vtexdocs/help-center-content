---
title: 'Call Webhook: Cómo hacer llamadas a sistemas externos'
id: 2KRA2c41CskapG2IrqMhnO
status: PUBLISHED
createdAt: 2025-09-17T14:00:42.361Z
updatedAt: 2025-10-03T14:20:03.772Z
publishedAt: 2025-10-03T14:20:03.772Z
firstPublishedAt: 2025-10-03T14:20:03.772Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: call-webhook-making-requests-to-external-services
legacySlug: call-webhook-como-hacer-llamadas-a-sistemas-externos
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

#### **¿ Qué es una API?**

La sigla **API** corresponde a las palabras en inglés **"" Application Programming Interface""**. En español, ""Interfaz de Programación de Aplicaciones"". Son una forma de **integrar sistemas** , posibilitando beneficios como la seguridad de los datos y la facilidad en el intercambio entre información.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/call-webhook-como-hacer-llamadas-a-sistemas-externos_1.png)

Actualmente, la capacidad de conectarse e integrarse con otros sistemas es una funcionalidad esencial para la mayoría de las soluciones hoy en día. Por ello, tenemos una carta de acción para utilizar en los flujos justamente para esa función: **Llamar Webhook.**

#### **Llamar Webhook**

La carta de **Llamar Webhook** es la responsable de la conexión entre la Plataforma Weni y otros sistemas externos, a continuación, tenemos un poco sobre su anatomía:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/call-webhook-como-hacer-llamadas-a-sistemas-externos_2.png)

  1. Método de la solicitud: Donde se define cuál será el método para su solicitud de API (GET, POST, PUT o DELETE).
  2. URL de la solicitud: Donde se coloca la URL de la solicitud para la API.
  3. Encabezado de la solicitud: Donde se coloca el encabezado de la solicitud junto con información como tokens de autorización y tipos de contenido.
  4. Cuerpo de la solicitud: Donde se agrega un cuerpo para su solicitud (usado para POST y PUT).

#### **Cómo formatear correctamente el cuerpo de la solicitud**

Normalmente, para el cuerpo de las solicitudes POST y PUT, utilizamos la notación JSON para enviar la información solicitada por la API. A continuación, sigue el ejemplo de un cuerpo en JSON:
`{ ""platform"":""push"", ""author"":""john"" }`

¿Cómo podemos reproducir esta notación utilizando la carta _Call Webhook_? En la plataforma, utilizamos las funciones `@json y @object` para esta construcción, siendo la primera para señalar qué notación traduciremos los valores, y la segunda para señalar el comienzo y el fin de nuestras llaves. Traduciendo el ejemplo anterior a la notación utilizada en la plataforma, tenemos:
`@(json(object(""platform"",""push"",""author"",""john"")))`

En caso de que desee utilizar alguna variable como, por ejemplo, `@contact.name` para el campo ""author"" de nuestro ejemplo, tenemos:
`@(json(object(""platform"",""push"",""author"",contact.name)))`

El cuerpo de la solicitud acepta todas las variables y expresiones soportadas en la plataforma.

#### Navegando en un Webhook

Después de hacer la solicitud, puedes utilizar algunas expresiones para consultar información del retorno.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/call-webhook-como-hacer-llamadas-a-sistemas-externos_3.png)

  * **@results**
`@results.[nombre del result de la carta Llamar Webhook]`: Para consultar el estado de la solicitud, como por ejemplo: 200, 400, 500.

  * **@webhook**
Esta expresión se usa para recuperar los valores devueltos de la última llamada de webhook hecha en el flujo. Por ejemplo:
    * `@webhook`: El valor de esta variable es toda la respuesta de la última solicitud realizada.
    * `@webhook.results.cliente`: Nombre del cliente devuelto por la API, en caso de que solo se devuelva un objeto.
    * `@webhook.results.0.cliente`: Nombre del cliente devuelto por la API. Si la respuesta está en un array, es necesario especificar la posición deseada en el array, como 0, 1, 2, y así sucesivamente.

Para almacenar los valores en otras variables, puedes guardarlos como un [campo de contacto](https://help.vtex.com/es/docs/tutorials/campo-de-contactos) o [resultado del flujo](https://help.vtex.com/es/docs/tutorials/glosario-de-variables)."

