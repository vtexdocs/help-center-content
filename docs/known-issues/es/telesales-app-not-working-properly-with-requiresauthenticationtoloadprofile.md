---
title: 'La aplicación de televenta no funciona correctamente con RequiresAuthenticationToLoadProfile'
id: 4L79woOuaUM2Ip5vG1Kp7D
status: PUBLISHED
createdAt: 2023-04-26T17:20:58.399Z
updatedAt: 2023-05-08T18:18:42.798Z
publishedAt: 2023-05-08T18:18:42.798Z
firstPublishedAt: 2023-04-26T17:20:59.230Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: la-aplicacion-de-televenta-no-funciona-correctamente-con-requiresauthenticationtoloadprofile
kiStatus: Backlog
internalReference: 797651
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se utiliza el flag RequiresAuthenticationToLoadProfile de las APIs de checkout con una app de televenta para suplantar usuarios, no se está lanzando ningún tipo de feedback al usuario si la suplantación se ha realizado con éxito y provoca algunas inconsistencias en el flujo


##

## Simulación



Para la simulación, debes tener activado RequiresAuthenticationToLoadProfile, lo que significa que debes utilizar un token autorizado para acceder a algunas APIs

También debe implementar la funcionalidad de televenta: https://help.vtex.com/en/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R

https://developers.vtex.com/docs/guides/vtex-telemarketing

Después de eso, intente suplantar a un usuario con un operador de call center, verá algunas inconsistencias en la plataforma



## Workaround



Para algunas partes del flujo, un refresco podría resolver el problema, otras funcionalidades no están preparadas para trabajar con RequiresAuthenticationToLoadProfile, por lo que, si un refresco no resuelve el problema, entonces, la única solución posible es desactivar el flag




