---
title: "Catalog GraphQL CategoryInputTranslation no funciona"
id: 1Zue7Roia2sYa4xNP9hF2y
status: PUBLISHED
createdAt: 2024-04-29T14:30:53.743Z
updatedAt: 2025-01-28T14:38:29.411Z
publishedAt: 2025-01-28T14:38:29.411Z
firstPublishedAt: 2024-04-29T14:30:54.577Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-graphql-categoryinputtranslation-no-funciona
locale: es
kiStatus: Backlog
internalReference: 1024172
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, el método CategoryInputTranslation, para el catálogo graphQL no está generando una actualización en los datos traducidos para las cuentas.


##

## Simulación


1 - Acceda al IDE graphQL de VTEX y seleccione la aplicación vtex.catalog-graphql@1.103.1
2 - Crear una mutación para el método CategoryInputTranslation
3 - Compruebe si dicha actualización se ha reflejado en los datos traducidos en el sitio web



## Workaround



- utilice `vtex.catalog-grapghql@1.103.1` a través de Postman

- utilice directamente `vtex.messages@1.69.0` en GraphQL IDE

