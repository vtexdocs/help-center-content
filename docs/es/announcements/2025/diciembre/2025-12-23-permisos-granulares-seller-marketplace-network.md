---
title: 'Permisos granulares para Seller Register y Marketplace Network'
status: PUBLISHED
createdAt: 2025-12-23T12:00:00.000Z
updatedAt: 2026-01-15T12:00:00.000Z
publishedAt: 2025-12-23T12:00:00.000Z
contentType: updates
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: granular-permissions-seller-marketplace-network
locale: es
legacySlug: 
announcementImageID: 
announcementSynopsisPT: 'Nuevo modelo de permisos granulares para Seller Register y Marketplace Network exige actualización de perfiles de acceso.'
---

Implementamos un nuevo modelo de validación de permisos explícitos para los servicios de Seller y Marketplace Network, ofreciendo mayor control y seguridad sobre quién puede visualizar y editar datos de sellers en su operación. Este cambio está disponible para todos los usuarios de la plataforma VTEX.

## ¿Qué cambió?

Antes, cualquier usuario autenticado con acceso básico a la cuenta tenía permiso implícito para operar los módulos de Seller y Marketplace Network. Ahora, el sistema exige que el usuario o clave de aplicación posea recursos de acceso específicos asociados a su perfil:

- **Seller Register:** Acceso segregado en "View Seller" (visualizar) y "Save Seller" (crear/editar).
- **Marketplace Network:** Acceso a través del permiso "Access the Marketplace Network".

## ¿Por qué realizamos este cambio?

Para elevar el nivel de gobernanza y seguridad de la plataforma, alineando los módulos al principio de seguridad del menor privilegio. Consulta los principales beneficios:

- **Control granular de acceso:** Defina exactamente quién puede visualizar y quién puede editar datos de sellers.
- **Mayor seguridad operacional:** Evite cambios accidentales o no autorizados en configuraciones críticas.
- **Gobernanza mejorada:** Configure perfiles de acceso restringidos de acuerdo con las responsabilidades de cada usuario.

## ¿Qué se debe hacer?

Para garantizar que su operación no se vea afectada, actualice los perfiles de acceso hasta el **01 de marzo de 2026** siguiendo los pasos a continuación:

1. En el Admin VTEX, acceda a **Configuración de la cuenta > Perfiles de acceso**.
2. Identifique qué perfiles necesitan interactuar con datos de sellers o acceder a Marketplace Network.
3. Edite el perfil deseado y agregue los recursos necesarios:
   - Para Seller: Seleccione "View Seller" o "Save Seller" (en "Seller Register").
   - Para Marketplace Network: Seleccione "Access the Marketplace Network" (en "Channels").
4. Guarde los cambios y valide si los usuarios pueden acceder a los módulos.

Si su operación utiliza apps personalizadas del VTEX IO que interactúan con datos de sellers, actualice el archivo `manifest.json` agregando las políticas necesarias:

```json
"policies": [
  {
    "name": "view-seller"
  },
  {
    "name": "save-seller"
  }
]
```

>⚠️ Sin la actualización de los perfiles, los usuarios verán pantallas vacías o mensajes de error al intentar acceder a los módulos de Seller y Marketplace Network después de la fecha límite.

Para más información sobre la gestión de perfiles de acceso, consulte la [documentación de Perfiles de acceso](https://help.vtex.com/es/tutorial/perfiles-de-acceso--7HKK5Uau2H6wxE1rH5oRbc).

