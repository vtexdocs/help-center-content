---
title: Crear la estructura de archivos de su app (vtex init)
id: 7MEnnC356Me8yswoK4o0e
status: DRAFT
createdAt: 2018-02-21T23:00:47.117Z
updatedAt: 2020-03-13T21:24:59.887Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:02:06.319Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: crear-la-estructura-de-archivos-de-su-app-vtex-init
legacySlug: crear-la-estructura-de-archivos-de-su-app-vtex-init
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Después de iniciar sesión y crear un workspace de desarrollo, es el momento de crear la estructura inicial de carpetas y archivos de su aplicación.

VTEX IO lo hace automáticamente para usted. Sólo hay que navegar hasta la carpeta de su ordenador donde quiere que quede la carpeta raíz y teclear el siguiente comando:

`vtex init`

Con ello, el IO hará algunas preguntas que se utilizarán para definir parámetros importantes de sus archivos:

- __What's your VTEX app name?__: el nombre de su aplicación. Debe ser compuesto sólo por números, letras en caja baja, guiones bajos o guiones.

- __What's your VTEX app vendor?__: el nombre de la tienda o de la agencia responsable por el desarrollo. Debe ser compuesto sólo por números, letras en caja baja, guiones bajos o guiones.

- __What's your VTEX app title?__: el título de la aplicación. Aquí usted puede utilizar caja alta, espacios, etc.

- __What's your VTEX app description?__: una descripción de su aplicación.

El IO informa que su archivo manifest.json ha sido generado con éxito y le pregunta el servicio VTEX que desea utilizar. 

<div class="alert alert-info">
Para el desarrollo front-end, el servicio que se debe utilizar es el react.
</div>

Listo! Su estructura de carpetas y archivos está creada.
