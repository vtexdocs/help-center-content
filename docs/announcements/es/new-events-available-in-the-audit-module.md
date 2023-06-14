---
title: "Nuevos eventos disponibles en el módulo Audit"
id: 36HT3LaI5wORvV9uaDKCwy
status: PUBLISHED
createdAt: 2023-04-18T20:01:44.458Z
updatedAt: 2023-04-18T20:46:27.347Z
publishedAt: 2023-04-18T20:46:27.347Z
contentType: updates
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slug: nuevos-eventos-disponibles-en-el-modulo-audit
legacySlug: nuevos-eventos-disponibles-en-el-modulo-audit
announcementImageID: ""
announcementSynopsisES: Audit está proporcionando nuevos eventos relacionados con los módulos de VTEX ID, License manager y Pricing.
---

[Audit](https://help.vtex.com/es/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA) es un módulo que registra eventos ocurridos en tu tienda VTEX, viabilizando futuras auditorías. VTEX realizó una mejora en Audit, que ahora registra una gama de eventos más amplia.

## ¿Qué cambió?

VTEX agregó los siguientes eventos a la [lista de eventos disponibles en Audit](https://help.vtex.com/es/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ):

### VTEX ID

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PasswordCreated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">El usuario registra una contraseña por primera vez en la tienda o en el Admin VTEX.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de usuario.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PasswordUpdated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">El usuario cambia su contraseña de la tienda o del Admin VTEX.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de usuario.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">IdentityProviderChanged
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cambios en la configuración del proveedor de identidad. Por ejemplo, cuando se crea una integración OAuth personalizada, o se modifica la información de una configuración OAuth existente.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Proveedor de identidad.
   </td>
  </tr>
</table>

### License Manager

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Block AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Bloqueo de clave de aplicación.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Clave de aplicación bloqueada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Accept Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Aceptación de invitaciones para ser usuario titular.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del usuario que aceptó la invitación.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save User
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de nuevo usuario o modificar sus datos.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de usuario.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Account
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de cuenta o modificar la información de la misma.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cuenta creada o modificada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Role
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Editar rol.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Rol editado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Delete Role
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminar rol.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Rol eliminado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Unblock AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Bloqueo de clave de aplicación.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Clave de aplicación bloqueada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resource Access Allowed
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Acceso al recurso permitido.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Clave del recurso e ID del usuario al que se le ha dado acceso.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Cancel Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cancelación de invitación para usuario titular.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de usuario invitado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Delete User
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminar usuario.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del usuario eliminado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Update Binding
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Actualización de binding.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Binding actualizado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resource Access Denied
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Acceso al recurso denegado.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Clave del recurso e ID del usuario al que se le denegó.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Create New AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de clave de aplicación.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Clave de aplicación creada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Create Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Crear invitación para usuario titular.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del usuario que recibirá la invitación.
   </td>
  </tr>
</table>

### Pricing

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Fixed Price Modified
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación del precio fijo.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificación del precio fijo modificado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Put Catalog Step
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación o modificación de una regla de precio.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Regla de precio creada o modificada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Deleted Fixed Prices From Table
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminación del precio fijo de la lista de precios correspondiente.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificación de la lista y del precio eliminado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Compatibility Post Prices
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación del precio utilizando la API de compatibilidad con el contrato de PricingV1.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificación del precio modificado.
   </td>
  </tr>
</table>

<div class = "alert alert-info">
Consulta la <a href="https://help.vtex.com/es/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ">lista completa de eventos disponibles en Audit</a>.
</div>

## ¿Qué se necesita hacer?

Los cambios realizados en Audit ya se han implementado en todas las cuentas, registrando la lista de eventos antes mencionados. No se requiere ninguna acción.

