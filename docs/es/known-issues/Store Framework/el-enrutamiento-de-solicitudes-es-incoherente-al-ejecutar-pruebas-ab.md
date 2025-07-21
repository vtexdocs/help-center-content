---
title: "El enrutamiento de solicitudes es incoherente al ejecutar pruebas A/B"
id: 5ukS8DTwmWsM0fNWQLYFQ1
status: PUBLISHED
createdAt: 2023-11-08T21:42:53.184Z
updatedAt: 2025-03-14T14:05:38.931Z
publishedAt: 2025-03-14T14:05:38.931Z
firstPublishedAt: 2023-11-08T21:42:53.723Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: el-enrutamiento-de-solicitudes-es-incoherente-al-ejecutar-pruebas-ab
locale: es
kiStatus: Fixed
internalReference: 931246
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las peticiones HTTP de navegación en tienda no respetan la cookie de selección de espacio de trabajo durante la sesión. De hecho, durante una única sesión, un usuario puede recibir respuestas de todos los espacios de trabajo que se estén probando.

El problema se produce cuando la cookie `VtexWorkspace` caduca o se elimina durante la navegación del usuario. Cuando esto ocurre, se genera una nueva cookie del espacio de trabajo, que puede ser la misma que antes o una diferente. Si cambia y el usuario no actualiza la página, puede producirse el problema. Si el usuario sigue navegando en el momento de la expiración, las interacciones posteriores pueden seguir asociadas al antiguo espacio de trabajo, causando el problema. Sin embargo, este escenario es relativamente raro, ya que depende de sesiones largas y de que la cookie expire sin que se actualice la página.


##

## Simulación



1. Crea un test A/B en tu tienda utilizando la CLI de VTEX IO.
2. Abre la pestaña "Aplicación" en Chrome DevTools (o equivalente en tu navegador)
  1. Navega por la tienda y borra tu cookie `VtexWorkspace` o espera a que expire
  2. Deberías ver que los valores cambian eventualmente, aunque la cookie de sesión no haya cambiado
3. Abre la pestaña "Red" en Chrome DevTools (o equivalente en tu navegador)
  1. Navega por la tienda y observa las peticiones HTTP que se realizan
  2. Debería ver que la cadena de consulta `workspace` tiene diferentes valores a lo largo de la sesión



## Workaround


No hay ninguna solución disponible.






