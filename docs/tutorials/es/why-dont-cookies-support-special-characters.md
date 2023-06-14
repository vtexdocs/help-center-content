---
title: '¿Por qué las Cookies no soportan caracteres especiales?'
id: 6hs7MQzTri6Yg2kQoSICoQ
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.126Z
updatedAt: 2021-11-17T17:57:16.625Z
publishedAt: 2021-11-17T17:57:16.625Z
firstPublishedAt: 2019-01-24T21:55:08.804Z
contentType: tutorial
productTeam: Reliability
author: authors_35
slug: por-que-las-cookies-no-soportan-caracteres-especiales
locale: es
legacySlug: por-que-las-cookies-no-soportan-caracteres-especiales
subcategory: 1luKrYptdi8WoMYckakUaM
---

De acuerdo con las normas del IETF (Internet Engineering Task Force), la institución responsable de documentar los estándares utilizados en Internet, las cookies no pueden tener caracteres especiales en su composición, incluyendo caracteres no ASCII.

Esta norma está contenida en los RFC (Requests For Comments) - documentos técnicos actualizados periódicamente por el propio IETF. Para saber más, [acceda al artículo del IEFT sobre los caracteres aceptados en  headers y cookies](https://tools.ietf.org/html/rfc7230#section-3.2.6 ). 

De este modo, este comportamiento es adoptado por la mayoría de los productos y servicios digitales que existen en el mercado. Tanto así que este es también el comportamiento que se espera de la plataforma VTEX. 

Por esto, el uso de caracteres especiales en la creación de cookies pueden generar algunos bugs en el funcionamiento de una tienda. 
A continuación, seleccionamos dos escenarios posibles: 

## Ejemplos

### Google Analytics vs UTM
Una de las formas de crear una cookie inválida es mediante el uso de un UTM que tenga caracteres especiales.

Digamos que crea un UTM que tiene caracteres acentuados, como
`www.sitio.com?utm_source=día-de-las-madres`.

En este caso, el enlace no será captado correctamente por Google Analytics, lo que genera una cookie inválida. Esto afecta directamente al funcionamiento de la tienda, pues no hay forma de que el administrador de la tienda elimine las cookies del usuario. 

Por lo tanto, esta información se almacena en el navegador hasta que el usuario la elimine o hasta que la cookie venza, de acuerdo con la fecha de validez expresada por el creador de la cookie. 

### Javascripts personalizados 

Muchas implementaciones de front-end crean cookies usando Javascript para almacenar datos para una variedad de propósitos. 

Es fundamental que tanto la validación como la conversión *(encoding)* de los datos formen parte de esta rutina, para no crear Cookies inválidas que impidan la navegación en la tienda.

Pero es importante tener en cuenta que, además de ofrecer riesgos como este, la creación de cookies también puede perjudicar a la tienda de otras maneras. 

