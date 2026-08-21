---
title: 'Recursos del License Manager'
id: 3q6ztrC8YynQf6rdc6euk3
status: PUBLISHED
createdAt: 2022-02-14T17:53:22.572Z
updatedAt: 2025-10-24T22:59:13.330Z
publishedAt: 2025-10-24T22:59:13.330Z
firstPublishedAt: 2022-02-14T19:56:27.935Z
contentType: tutorial
productTeam: Identity
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: license-manager-resources
legacySlug: recursos-del-license-manager
locale: es
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

VTEX ofrece varios [roles de usuario predefinidos](/es/docs/tutorials/roles) para los usuarios administrativos. Esto permite a los colaboradores de una empresa desempeñar sus funciones accediendo al mínimo de recursos necesarios. Sin embargo, sabemos que cada ecommerce tiene sus propias necesidades y que la flexibilidad es esencial para abordar problemas empresariales específicos.

Por lo tanto, la plataforma VTEX ofrece la posibilidad de crear roles de usuario personalizados, lo que permite elegir con precisión a qué recursos puede acceder un determinado rol personalizado. A continuación, encontrarás los recursos de VTEX disponibles para cada producto.

> ❗ El uso sin restricciones de los recursos aumenta el riesgo de ataques a las tiendas por la filtración de credenciales de acceso a los recursos críticos. Si tienes alguna duda sobre la descripción de un recurso específico, no dudes en ponerse en contacto con nosotros.

<DataTable
  src="data-tables/license-manager-resources.json"
  columns={[
    { key: 'product', label: 'Producto', sortable: true, filterable: true },
    { key: 'category', label: 'Categoría', sortable: true, filterable: true },
    { key: 'resource', label: 'Recurso', sortable: true, filterable: true },
    { key: 'description', label: 'Descripción' },
    { key: 'key', label: 'Llave', type: 'code', sortable: true, filterable: true },
    { key: 'resourceId', label: 'ID del Recurso', type: 'text', sortable: true },
    { key: 'productId', label: 'ID del Producto', type: 'text', sortable: true },
  ]}
/>

> ℹ️ En la aplicación [Audit](/es/docs/tutorials/audit), los recursos de License Manager son identificados por las respectivas claves.

## Recursos internos o obsoletos

En la interfaz del License Manager, también encontrarás recursos obsoletos o que son de uso exclusivo interno de VTEX. Estos no tienen ningún impacto en tu tienda. Son:

<DataTable
  src="data-tables/license-manager-internal-resources.json"
  columns={[
    { key: 'product', label: 'Producto', sortable: true, filterable: true },
    { key: 'category', label: 'Categoría', sortable: true, filterable: true },
    { key: 'resource', label: 'Recurso', sortable: true, filterable: true },
    { key: 'key', label: 'Llave', type: 'code', sortable: true, filterable: true },
    { key: 'resourceId', label: 'ID del Recurso', type: 'text', sortable: true },
    { key: 'productId', label: 'ID del Producto', type: 'text', sortable: true },
  ]}
/>

