---
title: "Los usuarios creados en cuentas con la función emailRectification no se crean en VTEX ID"
id: 337VszlGrfKxeRMY2Lv1az
status: PUBLISHED
createdAt: 2025-01-23T21:55:49.206Z
updatedAt: 2025-01-23T21:55:50.378Z
publishedAt: 2025-01-23T21:55:50.378Z
firstPublishedAt: 2025-01-23T21:55:50.378Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: los-usuarios-creados-en-cuentas-con-la-funcion-emailrectification-no-se-crean-en-vtex-id
locale: es
kiStatus: Backlog
internalReference: 1165203
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para las cuentas que tienen la función de Rectificación de Correo Electrónico activa, los usuarios se crean a través de cualquiera de los métodos a continuación no se crean en VTEX ID.

Métodos de creación de usuarios problemáticos conocidos:

- IU de Organización B2B en el admin de la tienda;
- Menú Mi Organización en la tienda;
- Mutación GraphQL createUserWithEmail.


##

## Simulación


En una tienda con la característica emailRectification activa, crear un usuario con uno de los métodos anteriores, el usuario no se creará en VTEX ID.



## Workaround


El usuario puede ser creado en VTEX ID por:

- Iniciando sesión en el escaparate por primera vez;
- Solicitar la creación del usuario con la API Crear Usuario.





