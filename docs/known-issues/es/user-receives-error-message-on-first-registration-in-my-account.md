---
title: 'El usuario recibe un mensaje de error al registrarse por primera vez en Mi cuenta'
id: 1eFTt4iIxZsBPxd3UQ436r
status: PUBLISHED
createdAt: 2022-07-21T15:40:25.508Z
updatedAt: 2022-11-25T22:01:57.125Z
publishedAt: 2022-11-25T22:01:57.125Z
firstPublishedAt: 2022-07-21T15:40:26.082Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-usuario-recibe-un-mensaje-de-error-al-registrarse-por-primera-vez-en-mi-cuenta
locale: es
kiStatus: Backlog
internalReference: 619909
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un nuevo usuario se registra en **Mi Cuenta**, la página ejecuta dos peticiones, una enviando los datos y la otra consultando el `userid` de ese usuario, pero en esta segunda petición el retorno es 404 no encontrado, y la página muestra un mensaje de error al usuario.



## Simulación


** **

1. Entrar en la casa
2. Acceder a mi cuenta con un usuario no registrado.
3. Iniciar sesión
4. En este momento, la UI mostrará un mensaje de error "`Ha habido un error de comunicación con el sistema, intente recargar la página`".
5. En la consola, se podrá ver una petición _**graphql**_ para el sistema de perfiles que devuelve 404.



## Workaround


No hay ninguna solución para evitar el error.
NOTA; sin embargo, al recargar la página, el flujo suele ser el siguiente.

