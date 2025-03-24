---
title: 'No es posible cargar nuevos medios/documentos en un espacio de trabajo de desarrollo cuando la entidad tiene más de 10k documentos.'
id: zhDX1xoXAifH9tYroXCFn
status: PUBLISHED
createdAt: 2023-04-24T20:01:04.211Z
updatedAt: 2024-06-28T16:07:27.058Z
publishedAt: 2024-06-28T16:07:27.058Z
firstPublishedAt: 2023-04-24T20:01:04.779Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: not-possible-to-upload-new-mediadocument-in-a-development-workspace-when-entity-has-more-than-10k-documents
locale: es
kiStatus: Fixed
internalReference: 795940
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



No es posible subir un nuevo medio/documento en alguna entidad a través de la galería de medios (admin/new-cms/media-gallery) o el editor de sitios (admin/cms/site-editor) en un espacio de trabajo de desarrollo cuando una entidad tiene más de 10k documentos porque no usamos desplazamiento desde Datos Maestros en estos escenarios.



## Simulación




- Debe tener al menos 10k documentos en el gestor de archivos (estas dos entidades: `vtex_admin_cms_graphql_content`
`vtex_admin_cms_graphql_contentVariant`.


- Crear un espacio de trabajo de desarrollo (`vtex use devWorkspace`)
- Acceso: admin/new-cms/media-gallery, en este nuevo dev workspace
- Intente subir una nueva imagen
- La imagen no se carga y se produce un error de desplazamiento en los datos maestros.

*Lo mismo ocurre cuando se utiliza la galería multimedia a través del editor del sitio.



## Workaround




- Cargar las imágenes en un espacio de trabajo de producción o maestro y luego, puede seleccionarlos en un espacio de trabajo de desarrollo una vez que se crean
- Realice todos los procesos en un entorno/espacio de trabajo de producción en lugar de un entorno de desarrollo (`vtex use prodWorkspace --production`)





