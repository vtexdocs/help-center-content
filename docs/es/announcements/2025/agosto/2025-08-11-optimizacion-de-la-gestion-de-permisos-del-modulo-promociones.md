---
title: 'Optimización de la gestión de permisos del módulo Promociones'
id: 4SS5gsIGGYiABjWdjL0uPO
status: PUBLISHED
createdAt: 2025-08-11T11:55:15.551Z
updatedAt: 2025-08-11T15:54:22.969Z
publishedAt: 2025-08-11T15:54:22.969Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-08-11-improved-permission-management-in-the-promotions-module
locale: es
legacySlug: optimizacion-de-la-gestion-de-permisos-del-modulo-promociones
announcementImageID: 'undefined'
announcementSynopsisES: 'Cambio en los permisos del Admin para editar promociones con métodos de envío y pago.'
---

Para reforzar la seguridad de la plataforma y garantizar una gestión de acceso adecuada, cambiamos los permisos necesarios para editar ciertas condiciones de promociones. Ahora, ciertas acciones en el formulario de promociones requieren [recursos adicionales de License Manager](/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

## ¿Qué cambió?

Los usuarios necesitarán permisos específicos para **agregar o editar condiciones de promociones** relacionadas con **métodos de envío** y **medios de pago**. Los requisitos son:

- **Métodos de envío**: requiere un [rol](/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) con el [recurso](/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) **LogisticsInternal** del producto **Logistics.**
- **Medios de pago**: requiere un [rol](/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) con el [recurso](/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) **View Payment Data** del producto **PCI Gateway.**

> ⚠️ Estos recursos son requisitos adicionales que se deben tener además de los recursos regulares para editar condiciones de promociones.

Los usuarios que no tengan estos permisos podrán ver la configuración aplicada por otros usuarios, pero no podrán editarla.

## ¿Qué se necesita hacer?

Recomendamos revisar los roles de la tienda para garantizar que los usuarios que configuran promociones tengan los recursos mencionados anteriormente además de los requisitos previos para realizar esas operaciones.

La falta de permisos impide que los usuarios editen las condiciones de métodos de envío y medios de pago de las promociones en el Admin VTEX.

Para más información sobre la gestión de permisos, accede a:

- [Recursos de License Manager](/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3)
- [Roles](/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc)
