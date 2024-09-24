---
title: 'El enrutamiento de solicitudes es incoherente al ejecutar pruebas A/B'
id: 5ukS8DTwmWsM0fNWQLYFQ1
status: PUBLISHED
createdAt: 2023-11-08T21:42:53.184Z
updatedAt: 2023-11-08T21:45:26.642Z
publishedAt: 2023-11-08T21:45:26.642Z
firstPublishedAt: 2023-11-08T21:42:53.723Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: request-routing-is-inconsistent-when-running-ab-tests
locale: es
kiStatus: Backlog
internalReference: 931246
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

Las peticiones HTTP de navegación de tienda no respetan la cookie de selección de espacio de trabajo durante la sesión. De hecho, durante una única sesión, un usuario puede recibir respuestas de todos los espacios de trabajo que se estén probando.

## Simulación

1. Crea un test A/B en tu tienda utilizando la CLI de VTEX IO.
2. Abre la pestaña "Aplicación" en Chrome DevTools (o equivalente en tu navegador)
    1. Navega por la tienda y borra tu cookie `VtexWorkspace` después de cada clic
    2. Deberías ver que los valores cambian eventualmente, aunque la cookie de sesión no haya cambiado
3. Abre la pestaña "Red" en Chrome DevTools (o equivalente en tu navegador)
    1. Navega por la tienda y observa las peticiones HTTP que se realizan
    2. Deberías ver que la cadena de consulta `workspace` se establece en diferentes valores a lo largo de la sesión


## Workaround

No hay ninguna solución disponible. No se recomienda realizar pruebas A/B y sus resultados no deben considerarse correctos hasta que se solucione este problema conocido.


