---
title: "La sustitución de archivos SVG con el mismo nombre no funciona"
id: 3oTKQXVklDPcH47NGaEbGh
status: PUBLISHED
createdAt: 2024-12-16T20:25:22.346Z
updatedAt: 2024-12-16T20:25:23.138Z
publishedAt: 2024-12-16T20:25:23.138Z
firstPublishedAt: 2024-12-16T20:25:23.138Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-sustitucion-de-archivos-svg-con-el-mismo-nombre-no-funciona
locale: es
kiStatus: Backlog
internalReference: 1151600
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se utiliza el gestor de archivos CMS en el administrador de la cuenta, hay una opción para que usted pueda subir archivos:

 ![](https://vtexhelp.zendesk.com/attachments/token/tIFD30VhzhOuxTIV0f7UurtEH/?name=image.png) ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-sustitucion-de-archivos-svg-con-el-mismo-nombre-no-funciona_1.png)

Cuando suba archivos .SVG, si elige reemplazar un archivo anterior, utilizando el mismo nombre, se mostrará la siguiente pantalla:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-sustitucion-de-archivos-svg-con-el-mismo-nombre-no-funciona_2.png)

Sin embargo, el contenido de dicho archivo nunca se actualiza cuando se utiliza este método.


##

## Simulación


1 - Obtener 2 archivos .SVG con el mismo nombre.
2 - subir el archivo #1 y comprobar su contenido
3 - sube el archivo #2 y comprueba su contenido, incluso después de días, no se habrá sobrescrito.



## Workaround


Borre el archivo anterior antes de volver a subirlo.





