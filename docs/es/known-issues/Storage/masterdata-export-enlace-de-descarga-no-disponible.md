---
title: "Masterdata Export Enlace de descarga no disponible"
id: 2oi0ABhQQxfPsKETeNUyvE
status: PUBLISHED
createdAt: 2022-07-08T13:50:43.220Z
updatedAt: 2023-07-28T17:14:13.207Z
publishedAt: 2023-07-28T17:14:13.207Z
firstPublishedAt: 2022-07-08T13:50:43.638Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: masterdata-export-enlace-de-descarga-no-disponible
locale: es
kiStatus: Backlog
internalReference: 613864
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, para las entidades de datos con varios campos, cuando se intenta exportar una hoja y descargarla, tanto por correo electrónico como directamente a través de la interfaz de usuario, el enlace de descarga no guarda el archivo en el navegador.



##

## Simulación


1 - para una entidad de datos en la que tiene varios campos, intente exportar todos sus campos al mismo tiempo o varios registros

2 - el enlace de descarga no generará un archivo en su navegador

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/masterdata-export-enlace-de-descarga-no-disponible_1.png)



## Workaround


**Haga clic con el botón derecho del ratón en el enlace de descarga y copie el enlace; a continuación, péguelo en otra pestaña y se iniciará la descarga o bien obtenga los datos a través de la API https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search y/o descargue los datos en varias hojas de cálculo más pequeñas.

