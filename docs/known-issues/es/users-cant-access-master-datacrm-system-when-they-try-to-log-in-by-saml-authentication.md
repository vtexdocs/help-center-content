---
title: 'Los usuarios no pueden acceder al sistema de Datos Maestros/CRM cuando intentan iniciar sesión mediante autenticación SAML.'
id: 152NR7uX8iEUnKWu9gFR7h
status: PUBLISHED
createdAt: 2023-04-13T14:29:02.684Z
updatedAt: 2023-04-13T14:29:03.148Z
publishedAt: 2023-04-13T14:29:03.148Z
firstPublishedAt: 2023-04-13T14:29:03.148Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: los-usuarios-no-pueden-acceder-al-sistema-de-datos-maestroscrm-cuando-intentan-iniciar-sesion-mediante-autenticacion-saml
locale: es
kiStatus: Backlog
internalReference: 465652
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El usuario no puede acceder al sistema Master Data/CRM a través de la autenticación SAML
El sistema Master Data/CRM utiliza otro dominio (vtexcrm.com.br) y la solución SAML fue proyectada para redirigir al dominio myvtex.com.



##

## Simulación


Acceso al administrador mediante autenticación SAML
Haga clic en Datos Maestros/CRM en la opción de menú.
El sistema volverá a mostrar la opción de inicio de sesión.
El usuario selecciona el login SAML
Después de confirmar el login SAML, el sistema intentará acceder al sistema CRM pero
se vuelve a mostrar la opción de inicio de sesión



## Workaround


El usuario debe seleccionar otro tipo de autenticación, como inicio de sesión y contraseña o código de acceso.





