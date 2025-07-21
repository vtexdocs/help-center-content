---
title: "El service worker no crea un ámbito correcto para los almacenes multibinding"
id: 3zZLIk4u7AzNBEQNBMctLG
status: PUBLISHED
createdAt: 2024-12-05T18:39:57.838Z
updatedAt: 2024-12-05T18:39:58.643Z
publishedAt: 2024-12-05T18:39:58.643Z
firstPublishedAt: 2024-12-05T18:39:58.643Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: el-service-worker-no-crea-un-ambito-correcto-para-los-almacenes-multibinding
locale: es
kiStatus: Backlog
internalReference: 1146421
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El KI Service Worker no consigue crear el scope correcto para almacenes con múltiples bindings. Al generar el ámbito para crear la URL de acceso para el service worker, acaba creando una ruta duplicada, lo que provoca errores en funcionalidades que dependen del service worker.


##

## Simulación



1. Crear un almacén con múltiples vinculaciones (multibinding).
2. Configurar el service worker para generar la URL con scope.
3. Observa que el service worker crea una ruta duplicada. Esta duplicación provoca errores o comportamientos inesperados en las partes de la aplicación que dependen del service worker.




## Workaround


Si tu tienda multibinding no requiere un service worker, puedes deshabilitarlo como solución. Esto evitará que se produzca el error hasta que se implemente una solución adecuada.





