---
title: 'Catalog GraphQL CategoryInputTranslation no funciona'
id: 1Zue7Roia2sYa4xNP9hF2y
status: PUBLISHED
createdAt: 2024-04-29T14:30:53.743Z
updatedAt: 2024-04-29T14:30:54.577Z
publishedAt: 2024-04-29T14:30:54.577Z
firstPublishedAt: 2024-04-29T14:30:54.577Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-graphql-categoryinputtranslation-not-working
locale: es
kiStatus: Backlog
internalReference: 1024172
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, el método CategoryInputTranslation, para el catálogo graphQL no está generando una actualización en los datos traducidos para las cuentas.


##

## Simulación


1 - Acceda al IDE graphQL de VTEX y seleccione la aplicación vtex.catalog-graphql@1.103.1
2 - Crear una mutación para el método CategoryInputTranslation
3 - Compruebe si dicha actualización se ha reflejado en los datos traducidos en el sitio web


##

## Workaround


Utilizar directamente la aplicación de mensajes VTEX para traducir los datos (vtex.messages)





