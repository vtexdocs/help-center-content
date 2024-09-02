---
title: 'Configurar la captación de newsletter por Master Data'
id: frequentlyAskedQuestions_1816
status: DRAFT
createdAt: 2019-01-24T20:45:58.651Z
updatedAt: 2022-10-20T19:13:32.914Z
publishedAt: 
firstPublishedAt: 2019-01-24T21:59:16.064Z
contentType: tutorial
productTeam: Master Data
author: authors_84
slug: como-configuro-la-captacion-de-newsletter-por-el-master-data
locale: es
legacySlug: como-configuro-la-captacion-de-newsletter-por-el-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

Captación de newsletter es un formulario que puede insertarse en cualquier página de su site (excepto Checkout) para obtener emails de clientes interesados en recibir las novedades de la tienda. En general, ese registro está asociado a una promoción de la tienda.

Este artículo tiene como objetivo ayudar en la configuración para la captación de los emails de clientes interesados en recibir newsletter por el Master Data.

<div class="alert alert-warning">
El control vtex.cmc:newsletterOptIn está descontinuado y ya no se debe utilizar.
</div>

Esta opción de configuración por el Master Data ofrece la comodidad de tratar los datos de todos los clientes por el mismo lugar, visto que todos los clientes registrados en la tienda ya están en el Master Data. O sea, es el lugar propio para el mantenimiento y las acciones relacionadas con los clientes y mantener todos los registros en un único lugar es facilitar el día a día.

Por tanto, siguen los pasos necesarios para esa configuración.

1. Cree los campos necesarios en el CRM. Este paso solo es válido si usted quiere un campo extra, que todavía no exista actualmente en su CRM. Si éste es su caso, [acceda a nuestro manual de mantenimiento de entidades de datos](/pt/faq/como-crio-um-campo-no-master-data).
2. Cree esos campos en el HTML de la página que la tienda desee. El gran cambio en ese aspecto es que no es más usado un control para ello, sino que un código en HTML creado por la tienda o su agencia.
3. Envíe la información por [API del MasterData](https://developers.vtex.com/reference/master-data-api-v1-overview). Para ello, hay que utilizar la API `https://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents`, con verbo PATCH, pasando los datos en JSON. Ej.:

```
{ 
 "firstName": "Jonh",
 "lastName": "Lennon", 
 "email": "jonh.lennon@lennon.com.br"
}
```

Recuerde de enviar también el campo **isNewsletterOptIn** como `true`, para marcar el cliente como alguien que aceptó recibir newsletter.

Tras esas configuraciones, usted ya puede verificar en su CRM los emails que optaron por recibir newsletter.
