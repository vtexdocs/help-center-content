---
title: 'Listar los workspaces de la cuenta'
id: Y4TGxVPgSiIS0yISGugCG
status: ARCHIVED
createdAt: 2018-02-21T22:45:39.240Z
updatedAt: 2020-03-13T21:24:59.182Z
publishedAt: 
firstPublishedAt: 2018-02-21T22:46:32.112Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slugEN: list-the-account-workspaces
locale: es
legacySlug: listar-los-workspaces-de-la-cuenta
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Para ver los workspaces que existen actualmente en una cuenta, basta con usar el siguiente comando:

`vtex workspace list`

Vea el siguiente ejemplo:

![workspace list](https://images.contentful.com/alneenqid6w5/2au4D7r6YkmskO0Ko8esC6/aa635baf0e6f543c0e08ee2613e20127/workspace_list.png)

Las columnas que aparecen son las siguientes:

- __Name__: nombre del workspace.
- __Last Modified__: fecha de la última modificación en el workspace.
- __State__: Muestra si el workspace está preparado para el desarrollo (`production false`) o para la producción (`production true`).

De forma predeterminada, toda cuenta tiene los workspaces __master__ y __draft__ ya creados desde su primer acceso.
