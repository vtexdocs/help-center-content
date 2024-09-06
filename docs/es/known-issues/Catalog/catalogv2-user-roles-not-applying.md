---
title: 'Los roles de usuario de CatalogV2 no se aplican'
id: 3cDaOuqpAJyCL5JOMzD5nL
status: PUBLISHED
createdAt: 2022-02-25T12:18:17.776Z
updatedAt: 2024-02-16T20:26:53.078Z
publishedAt: 2024-02-16T20:26:53.078Z
firstPublishedAt: 2022-02-25T12:18:18.632Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: los-roles-de-usuario-de-catalogv2-no-se-aplican
locale: es
kiStatus: No Fix
internalReference: 489297
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

Actualmente, la interfaz de usuario de la aplicación CatalogV2 no aplica correctamente los permisos de control de acceso cuando un usuario utiliza la interfaz para crear, leer o actualizar productos.


## Simulación


1) Acceda a la interfaz de usuario del gestor de licencias para una tienda que tenga instalado el CatalogV2 (/admin/license-manager/#/role-details)

2) Establezca un rol de usuario de sólo lectura

 ![](https://vtexhelp.zendesk.com/attachments/token/NpEBOSahA9ogF72lsW9kYRjyH/?name=inline441836406.png)

3) Con estas reglas establecidas, inicie la sesión con el usuario relacionado

4) Intente actualizar un producto, podrá hacerlo, a pesar de las credenciales de sólo lectura.







## Workaround


Utilice las API GraphQL del catálogo v2 para gestionar estos permisos.

