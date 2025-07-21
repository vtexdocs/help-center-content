---
title: "CMS Settings Role no funciona como se esperaba"
id: 1xAUvtkD2gbvc3yaoYXT2d
status: PUBLISHED
createdAt: 2023-06-19T12:31:33.137Z
updatedAt: 2023-06-19T12:31:33.699Z
publishedAt: 2023-06-19T12:31:33.699Z
firstPublishedAt: 2023-06-19T12:31:33.699Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: cms-settings-role-no-funciona-como-se-esperaba
locale: es
kiStatus: Backlog
internalReference: 538706
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


CMS Settings Role no funciona como se esperaba. A veces el usuario no puede acceder al CMS incluso después de ser añadido al rol.
Otro comportamiento inesperado es que otros módulos siguen estando disponibles para el rol CMS incluso sin los permisos necesarios.


##

## Simulación



- Cree un rol en la aplicación Roles del Gestor de Licencias dando acceso únicamente a:
  - Menú CMS en la barra superior;
  - Ajustes CMS.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Portal/cms-settings-role-no-funciona-como-se-esperaba_1.png)


- Asocie este rol a un usuario;
- Inicie sesión con este usuario e intente acceder al menú de configuración del CMS, no podrá.
- Compruebe que los demás módulos siguen estando disponibles.



## Workaround


Para acceder al menú CMS, el usuario debe ser un Admin Super.





