---
title: 'Problemas con triggers que contienen anexos'
id: 2ESGyVDhYIwIG8cEsGUMOy
status: PUBLISHED
createdAt: 2018-12-05T13:57:01.530Z
updatedAt: 2022-12-23T17:55:19.274Z
publishedAt: 2022-12-23T17:55:19.274Z
firstPublishedAt: 2018-12-05T16:08:44.694Z
contentType: knownIssue
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
tag: Master Data
slug: problemas-con-triggers-que-contienen-anexos
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al configurar un trigger para que envíe un correo electrónico que contenga un archivo adjunto, el sistema enviará el correo electrónico pero no incluirá el archivo adjunto.

Este problema conocido suele afectar a las cuentas que han configurado un formulario en su sitio web donde el usuario adjuntaba un curriculum (p.ej.: Trabaje con nosotros), o especificaciones del producto.






## Simulación

1. Acceda al Dynamic Storage de la cuenta ( https://{{account}}.ds.vtexcrm.com.br/).
2. Haga clic en la pestaña Triggers y configure las acciones según corresponda.
3. Haga clic en Anexo (attachment) y seleccione "Archivo" (File) en el menú desplegable.
4. El trigger enviará el correo electrónico correctamente, pero no contendrá el archivo adjunto

## Workaround

Aunque en este momento no existe ninguna alternativa que permita almacenar el archivo con VTEX y utilizarlo como un trigger, la funcionalidad deseada puede ser reproducida de una manera diferente:
El usuario puede configurar el formulario orientado al cliente para que acepte una URL (donde se almacena el archivo externamente).  El usuario final puede almacenar el archivo en un servicio separado (GoogleDrive, Dropbox, S3) y copiar y pegar la URL en ese campo.

