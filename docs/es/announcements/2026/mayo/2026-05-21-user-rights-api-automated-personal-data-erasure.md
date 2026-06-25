---
title: "User Rights API: eliminación automatizada de datos personales"
createdAt: 2026-05-21T14:00:00.000Z
updatedAt: 2026-05-21T14:00:00.000Z
contentType: updates
productTeam: Identity
slugEN: 2026-05-21-user-rights-api-automated-personal-data-erasure
locale: es
announcementSynopsisES: 'La nueva User Rights API permite automatizar solicitudes de eliminación de datos personales conforme a la LGPD (Brasil) y al RGPD en la plataforma VTEX.'
tags:
  - Nueva funcionalidad
---

VTEX lanzó **User Rights API**, que permite automatizar el proceso de eliminación de datos personales de compradores en la plataforma, en conformidad con la LGPD (Brasil) y el RGPD, en el marco del “derecho al olvido”.

> ℹ️ Esta funcionalidad está en fase de beta abierta.

> ⚠️ Los flujos de derechos de usuario disponibles en esta API se aplican solo a compradores no corporativos. No se aplican a compradores B2B ni a usuarios del Admin VTEX.

## ¿Qué cambió?

Antes, la eliminación de datos personales predeterminada de la plataforma requería un [flujo manual vía Copilot](https://help.vtex.com/es/docs/tutorials/eliminacion-de-los-datos-de-clientes). Ahora, los retailers pueden integrar sus sistemas con la nueva API para automatizar este proceso.

> ℹ️ Los datos personales almacenados en entidades personalizadas de Master Data continúan siguiendo el proceso existente descrito en [Eliminación de los datos de clientes](https://help.vtex.com/es/docs/tutorials/eliminacion-de-los-datos-de-clientes).

## ¿Por qué realizamos este cambio?

Para ofrecer a los retailers una forma eficiente y escalable de gestionar solicitudes de eliminación de datos personales, suprimiendo la necesidad de procesos manuales para cada solicitud individual.

## ¿Qué se necesita hacer?

No se requiere ninguna acción. El flujo manual existente sigue estando disponible. Para adoptar el flujo automatizado:

- Consulta la [guía de integración de User Rights API](https://developers.vtex.com/docs/guides/user-rights-data-erasure) para implementar el flujo completo.
- Consulta la referencia de los endpoints en la [documentación de la API](https://developers.vtex.com/docs/api-reference/user-rights-api).

