---
title: 'Adaptación de los requests de front-end de su tienda al Master Data'
id: 5h9BKOee5usqOt9rbGKbdO
status: PUBLISHED
createdAt: 2019-08-30T17:26:33.530Z
updatedAt: 2020-04-02T16:47:26.778Z
publishedAt: 2020-04-02T16:47:26.778Z
contentType: updates
productTeam: Master Data
author: authors_31
slugEN: adapting-your-stores-front-end-requisites-to-master-data
locale: es
legacySlug: adaptacion-de-los-requests-de-front-end-de-su-tienda-al-master-data
announcementImageID: ''
announcementSynopsisES: 'VTEX descontinuará el soporte para CORS del Master Data.'
---

Con el objetivo principal de proporcionar una experiencia cada vez más eficiente para usted y sus clientes, VTEX descontinuará el soporte para CORS del Master Data. Siga las instrucciones de este artículo y evite cualquier falla en la operación y la navegación de su tienda.

>⚠️ En alineamiento con la colaboración que tenemos con nuestros clientes, asegurando una fricción mínima en sus operaciones, ampliamos la fecha de descontinuación de este recurso hasta el día 7 de octubre de 2019.
  
### ¿Qué es CORS?

CORS *(Cross-Origin Resource Sharing)* es un mecanismo de protección de los navegadores cuando necesitan acceder a informaciones en un dominio diferente al cual el usuario está navegando. Imagine un usuario accediendo al dominio “vtex.com”. Si hay algún recurso de javaScript que necesite consultar una información en otro dominio, por ejemplo, “vtexday.com”, el navegador realizará un proceso de validación para saber si el dominio “vtexday.com” permite consultas a partir del dominio “vtex.com”. El proceso en sí es básicamente un request adicional en la misma API configurada en javascript; sin embargo, a través del método OPTIONS. 

Haga clic [aquí](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS) para conocer más sobre CORS.

### ¿Por qué estamos descontinuando el soporte para CORS?

Tenemos dos objetivos con este cambio:

- Eliminar una llamada extra innecesaria, haciendo que el uso del servicio sea más eficiente y, consecuentemente, mejorando la experiencia del cliente mientras navega por el sitio web;

- Como el método OPTIONS no es almacenado en caché por CDN, es posible que su tienda sufra interrupciones del servicio por exceso de uso (throttling). Queremos evitar este comportamiento inesperado.

### ¿Qué es necesario hacer?

Para adecuarse a esta definición, el desarrollador responsable por el front-end necesita modificar los requests javascript (front-end, por tanto), que se realizan al Master Data, garantizando la llamada siempre a través de la ruta relativa; es decir, por el dominio del propio sitio web.

Con el siguiente ejemplo, ilustramos una forma inapropiada (con CORS) de realizar el request al Master Data:

```$.getJSON("https://api.vtex.com/{account}/dataentities/CL/search?_where=(email=test@test.com)");```

Tenga en cuenta que en este ejemplo, el request se realiza a través de una ruta absoluta; es decir, la URL de la llamada contiene el protocolo (https) y el dominio (api.vtex.com). Este formato dejará de funcionar a partir de la fecha mencionada en este correo electrónico.

A continuación, con un ejemplo ilustrativo, también demostramos la forma correcta de realizar el mismo request:

```$.getJSON("/api/dataentities/CL/search?_where=(email=test@test.com)");```

Tenga en cuenta, en este último ejemplo, que el protocolo y el dominio de la llamada  no están presentes en la URL. De esta forma, el browser no utilizará CORS y realizará el request a través del protocolo y dominio del propio sitio web, siguiendo el formato correcto. También tenga en cuenta que el directorio “/api” se ha agregado al endpoint.

### ¿Qué impactos puede sufrir mi tienda si no se adecua?

La tienda puede verse afectada de varias maneras si no se produce el ajuste, desde el mal funcionamiento de recursos simples hasta la interrupción en las ventas. Es decir, el impacto estará relacionado proporcionalmente con la dependencia que el flujo de compra tiene de estos requests al Master Data.

Comparta este artículo con el desarrollador responsable del front-end de su tienda. Para acceder a informaciones exclusivas de su tienda con respecto a este asunto, comuníquese con nuestro soporte. Estamos listos para apoyarlos en esta adaptación.
