---
title: 'Importar datos de clientes'
id: 2zWYVOyj0sISYQmeUwCsI0
status: PUBLISHED
createdAt: 2017-06-22T20:55:49.745Z
updatedAt: 2022-10-17T20:32:21.800Z
publishedAt: 2022-10-17T20:32:21.800Z
firstPublishedAt: 2017-06-27T14:40:29.106Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slug: importar-datos-de-clientes-brasil
legacySlug: importar-datos-de-clientes-brasil
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

La importación de datos de clientes debe hacerse en el Master Data. Para el envío de datos, use el artículo [Importando datos en el Master Data](/es/tutorial/importar-datos-en-el-master-data).

<div class="alert alert-danger">
  <p>Este artículo se refiere a los campos del masterdata específicamente para las tiendas de <strong>Brasil</strong>. Debe verificar los valores válidos para diferentes países.</p>
  <p>Vea también <a href="https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2">importar datos de clientes con la API de Master Data v2</a>.</p>
</div>

El checkout trabaja con los datos de las entidades CL (cliente) y AD (dirección).

Pero es importante notar que para que el checkout ya traiga los datos del cliente en el carrito con base en el email, es fundamental asegurar que todos los datos a continuación estén correctamente registrados en el Master Data.

Las siguientes tablas representan los datos o formatos necesarios para la importación. 

### Cliente

| Nombre del campo | Descripción | Formato |
|---------------|-----------|---------|
| firstName | nombre | texto |
| lastName | apellido | texto |
| email | email del cliente | email |
| documentType | Tipo del documento | para Brasil debe ser "cpf" |
| document | Documento (CPF) | 11 dígitos, sin máscara |
| homePhone | Teléfono | en el formato "+5511999999999", siendo +55 para el país y seguido por el teléfono con DDD |

El campo `id` lo genera el sistema tras la importación, y se usará como `userId` en la importación de la dirección.

El campo `userId` de los clientes debe dejarse en blanco, y no se utilizará en este momento. Lo generará el sistema tras la primera compra del cliente.

Si el cliente es una **persona jurídica**, `document` y `documentType` ya no son obligatorios y se deben completar los siguientes campos adicionales:

| Nombre del campo | Descripción | Formato |
|---------------|-----------|---------|
| isCorporate | define si el cliente es persona jurídica | debe ser "true" |
| corporateName | razón social | texto |
| tradeName | nombre fantasía | texto |
| stateRegistration | inscripción estatal | debe ser "Exento" o texto/alfanumérico |
| corporateDocument | CNPJ | 14 dígitos, sin máscara |

### Dirección

Es obligatorio que los clientes tengan por lo menos una dirección.

| Nombre del campo | Descripción | Formato |
|---------------|-----------|---------|
| id | ID de la dirección | en blanco |
| userId | ID del cliente | campo `id`, generado tras importación de clientes |
| addressName | nombre de la dirección | texto/alfanumérico |
| addressType | tipo de la dirección | debe ser "residential" o "commercial" |
| country | país | "BRA" para Brasil |
| state | estado (UF) | dos letras |
| city | ciudad | texto |
| neighborhood | barrio | texto |
| postalCode | CEP | 8 ó 9 dígitos, con guion |
| street | dirección | texto |
| number | número | alfanumérico |
| complement | Complemento y referencia | texto |
| reference | campo no usado | en blanco |
| receiverName | destinatario | texto |

---

En el caso de que los datos (cliente o dirección) no estén consistentes, incluyndo CPF/CNPJ [RUT] válidos, el checkout no completará los datos del cliente y éste hará la compra como un nuevo usuario.
