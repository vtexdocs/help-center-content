---
title: 'Activar nueva CDN de VTEX'
id: 400JfRm4VGgsKgqgOw4WWA
status: PUBLISHED
createdAt: 2017-10-02T23:12:05.096Z
updatedAt: 2019-12-31T15:25:39.216Z
publishedAt: 2019-12-31T15:25:39.216Z
firstPublishedAt: 2017-10-03T02:09:58.361Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: activar-nueva-cdn-de-vtex
legacySlug: activar-nueva-cdn-de-vtex
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

<div class="alert alert-warning">
En un compromiso de constante evolución de nuestro producto, VTEX está poniendo a disposición de tus tiendas una nueva CDN (Content Delivery Network). En este nuevo modelo, <strong>todas las páginas del sitio se entregarán a partir de esa nueva CDN especializada</strong>, sin limitarse a los archivos estáticos.
</div>

Una Red de Entrega de Contenido (traducción libre de su acrónimo) tiene su foco en seguridad, baja latencia y altas velocidades de transferencia, trabajando con las mejores tecnologías para este propósito, incluso siendo geográficamente cercana al cliente que accede a la tienda virtual.

Una de las mayores ganancias que aporta la CDN es el uso de HTTP/2 para entregar toda la tienda VTEX. Se trata de una actualización reciente para un protocolo que no era actualizado hace varios años, y que promueve una serie de mejoras. Este artículo trae más información sobre el HTTP/2 de manera muy didáctica: [Google Web Fundamentals - Introduction to HTTP/2](https://developers.google.com/web/fundamentals/performance/http2/)

__Todas las tiendas VTEX deben migrar a la nueva CDN.__

<div class=“alert alert-success”>
<strong>No hay riesgos</strong> o contraindicaciones para adherir al nuevo modelo.
</div> 

Una vez cumplidos los requerimientos de este artículo, debe hacerse el llenado [de este formulario](https://docs.google.com/forms/d/e/1FAIpQLSdae71lH2ppAgjDw_bJ8E2ZMnL8psm3pEEXbEViQOSsx5eVwQ/viewform) para solicitar la activación del nuevo servicio. 


## Requisitos

### Activar HTTPS en todo el sitio

<div class=“alert alert-info”>
Uno de los requisitos para la nueva CDN es que el sitio sea puesto a disposición totalmente en HTTPS.
</div>

Y esto porque, con la nueva CDN, cualquier página HTTP se redireccionará automáticamente a HTTPS. Pero antes es importante configurar tu tienda en VTEX para que ésta acepte el tráfico en este protocolo. En caso contrario, ella será nuevamente redireccionada a HTTP - creando un loop de re-direccionamiento, lo que romperá la navegación de estas páginas.

Para realizar esa configuración, seguir los pasos indicados en el artículo [Activar HTTPS en todo el sitio](/es/tutorial/activar-https-en-todo-el-sitio). 

### Actualizar CNAME en el DNS

Con la nueva CDN, las tiendas deben actualizar la entrada CNAME en su DNS. Si tu tienda ha ido al aire recientemente, probablemente ya usa ese CNAME, ¡pero no dejes de comprobarlo!

El nuevo CNAME para indicar la dirección de tu sitio (hostname) para los servidores de VTEX es: 

`{hostname}.cdn.vtex.com`

Considera que {hostname} es la dirección __completa__ de tu tienda.

<div class=“alert alert-success”>
 Esa modificación <strong>no causa indisponibilidad </strong> del sitio ni depende de propagación.
</div>

Ejemplos:
```
Dirección de la tienda: www.site.com
 - Entrada (subdominio): www
 - Tipo: CNAME
 - Destino: www.site.com.cdn.vtex.com
```
```
Dirección de la tienda: www.site.com.ar
 - Entrada (subdominio): www
 - Tipo: CNAME
 - Destino: www.site.com.ar.cdn.vtex.com
```
```
Dirección de la tienda: tienda.miempresa.com
 - Entrada (subdominio): tienda
 - Tipo: CNAME
 - Destino: tienda.miempresa.com.cdn.vtex.com
```
```
Dirección de la tienda: www.tienda.miempresa.com.ar
 - Entrada (subdominio): www.tienda
 - Tipo: CNAME
 - Destino: www.tienda.miempresa.com.br.cdn.vtex.com
```

Es necesario prestar atención a que el inicio del dominio (“tienda”, “www”, “www.tienda” o cualquier otro) y la terminación (“.com”, “.com.br”, “.com.ar” o cualquier otra) forman parte del `{hostname}`, y deben estar en el CNAME de destino.

Indicaciones antiguas usan direcciones como:
- ssl.vtexcommerce.com.br
- ssl9.vtexcommerce.com.br (u otro número)
- www.nombredelatienda.vtexcommerce.com.br
- hodor.vtex.com

Independientemente de cuál sea el caso de tu tienda, deberá realizar la actualización al nuevo estándar.

<div class="alert alert-danger">
<strong>Importante:</strong> el CNAME antiguo<strong> se debe eliminar</strong>. La existencia de dos entradas en su DNS probablemente va a ocasionar problemas. Se debe mantener sólo la nueva entrada CNAME.
</div>

Não se esqueça de solicitar a ativação final pelo [formulário](https://docs.google.com/forms/d/e/1FAIpQLSdI2FBXGmlSOXEtWxrYfVveln7xOJcmYotqrKfgFgmHn771Fg/viewform). La tienda va a funcionar sólo con CNAME y HTTPS, pero su llenado nos ayuda a activar de forma anticipada la CDN para su tienda, para que disfrutes de las nuevas features.

## Lectura de datos del Master Data

Las tiendas que poseen implementaciones en el front-end que hacen lectura de datos del Master Data deben realizar una pequeña actualización en la ruta utilizada para comunicarse con la API.

Ejemplo:

- Ruta antigua: `https://www.site.com/accountname/dataentities/CL/search?email=my@email.com`
- Ruta actualizada: `https://www.site.com/api/accountname/dataentities/CL/search?email=my@email.com` 

La nueva ruta sólo tiene un `/ api` al principio y funciona como la anterior, pero es fundamental para evitar la caché de páginas de la nueva CDN, manteniendo sólo la caché administrada por el Master Data.

Esto es necesario sólo en la lectura de datos, es decir, para el método GET. La grabación de datos (hecha por métodos como POST, PUT y PATCH) no se ve afectada por la caché.
