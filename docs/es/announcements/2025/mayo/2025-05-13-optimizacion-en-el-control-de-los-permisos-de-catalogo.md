---
title: 'Optimización en el control de los permisos de Catálogo'
id: 7f2oJiK1j4EYeZBikTHihh
status: PUBLISHED
createdAt: 2025-05-13T20:43:35.895Z
updatedAt: 2025-06-06T21:15:25.435Z
publishedAt: 2025-06-06T21:15:25.435Z
contentType: updates
productTeam: Management
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2025-05-13-improved-control-of-catalog-permissions
locale: es
legacySlug: optimizacion-en-el-control-de-los-permisos-de-catalogo
announcementImageID: 'undefined'
announcementSynopsisES: 'Nuevos recursos del License Manager de Catálogo, más intuitivas y con acceso unificado por Admin VTEX o API.'
---

Actualizamos los [recursos de License Manager](/es/docs/tutorials/recursos-del-license-manager) relacionados con el módulo Catálogo para mejorar la gestión de permisos. Estos son los principales cambios: 

- Funciones más simples e intuitivas relacionadas con las acciones en Catálogo.
- Control de acceso unificado para tareas realizadas en el Admin VTEX o vía API.

## ¿Qué cambió?

Teniendo en cuenta la organización por productos en License Manager, hemos realizado cambios en dos productos:

- Los recursos asignados anteriormente al producto **Catalog** se asignan ahora al producto **Catalog Legacy**.
- El recurso **View Product**, antes asignado al producto **Catalog API**, ahora está asignado al producto **Catalog**.

Además, agregamos nuevas funciones en License Manager, relativas al producto **Catalog** y a la categoría **General**. Consulta a continuación los detalles de los permisos concedidos:

| **Recurso** | **Clave** | **Descripción** |
|---|---|---|
| View Product | ViewProduct | Ver detalles de productos y SKUs. |
| Edit Product | EditProduct | Editar detalles de productos y SKUs. |
| View Category | ViewCategory | Ver detalles de categorías. |
| Edit Category | EditCategory | Editar detalles de categorías. |
| View Collection | ViewCollection | Ver detalles de colecciones. |
| Edit Collection | EditCollection | Editar detalles de colecciones. |
| View Brand | ViewBrand | Ver detalles de marcas. |
| Edit Brand | EditBrand | Editar detalles de marcas. |
| Import Spreadsheet | ImportSpreadsheet | Importar productos y SKUs por plantilla. |
| Export Spreadsheet | ExportSpreadsheet | Exportar plantilla con información del catálogo. |

Estos recursos dan acceso a determinadas tareas de la plataforma, independientemente de la interfaz. Por ejemplo: un usuario con cualquier perfil que contenga la función **Edit Category** puede editar los detalles de categorías a través del Admin VTEX o de la [API del catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#overview).

> ℹ️ El producto **Catalog Legacy** (anteriormente **Catalog**) permanece activo, pero solo da acceso a las antiguas pantallas de gestión del catálogo, si aún se utilizan en tu tienda. 

## ¿Qué se necesita hacer?

Los nuevos recursos ya están activos, fueron documentados en este artículo del [License Manager](/es/docs/tutorials/recursos-del-license-manager) y se asignaron automáticamente a todos los perfiles de acceso que utilizaban el producto **Catálogo**. Sin embargo, es necesario que las tiendas revisen sus permisos de acceso antes del 1 de julio de 2025. A partir de esa fecha, cualquier intento de acceso sin los recursos mencionados será bloqueado.

Te recomendamos aprovechar esta oportunidad para revisar los permisos de tu tienda, manteniendo solo los permisos necesarios para cada usuario.

Para más información sobre la gestión de permisos de usuario y claves de aplicación consulta los siguientes artículos:

- [Roles](/es/docs/tutorials/roles)
- [Gestionar usuarios](/es/docs/tutorials/gestionar-usuarios-administradores)
- [Gestionar claves de aplicación](/es/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet#gerenciar-chaves-de-aplicacao)
- [Recursos de License Manager](/es/docs/tutorials/recursos-del-license-manager)
