---
title: 'Exportación de imágenes con URL incompleta'
id: 2XIs1s3gB2WSGA6CmGyGs0
status: PUBLISHED
createdAt: 2018-09-15T19:47:20.331Z
updatedAt: 2022-12-22T20:45:21.648Z
publishedAt: 2022-12-22T20:45:21.648Z
firstPublishedAt: 2018-09-15T19:55:26.680Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: exportacion-de-imagenes-con-url-incompleta
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al exportar la planilla con las imágenes registradas en los SKUs, en caso de que el account name de la tienda comience con 'p' la URL exportada será incompleta. Por ejemplo:

__Nombre de la tienda:__ papelariavtex
__URL de la imagen:__ papelariavtex.vteximg.com.br/arquivos/ids/157696/folha-a4.jpg
__URL exportada en la planilla:__ apelariavtex.vteximg.com.br/archivos/ids/157696/folha-a4.jpg

## Simulación

Si su tienda empieza con la letra 'p':

1. Vaya al Catálogo > Importación y exportación > Exportar imágenes;
2. Haga clic en Exportar a Excel.

## Workaround

El workaround es utilizar una fórmula en Excel para insertar el 'p' en la URL o cualquier otro método para completar la URL.

