---
title: "Problema de compatibilidad con la versión de Node"
id: PIg1G3zoOXoVH2GQntcqG
status: PUBLISHED
createdAt: 2025-07-08T14:32:38.708Z
updatedAt: 2025-07-08T14:32:39.524Z
publishedAt: 2025-07-08T14:32:39.524Z
firstPublishedAt: 2025-07-08T14:32:39.524Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: problema-de-compatibilidad-con-la-version-de-node
locale: es
kiStatus: Backlog
internalReference: 1256617
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, nuestro builder hub se ejecuta en la imagen 16.X, lo que significa que sólo es posible construir librerías soportadas hasta esa versión. Las aplicaciones que utilizan builder 7 se ejecutan en el nodo 20, sin embargo, el problema surge cuando se construye, ya que el builder hub se ejecuta en la versión 16, causando un problema de incompatibilidad.


##

## Simulación


Al intentar construir una aplicación en VTEX. Por ejemplo, el error es el siguiente:

    @vendor/app@1.X.X: El motor "node" es incompatible con este módulo. Versión esperada ">=18.0.0". Obtuvo "16.X.X "Módulo incompatible encontrado.


El módulo requiere la versión 18.0.0 o superior de Node, pero la versión actual utilizada por el constructor es la 16.X.X.



## Workaround


Dado que builder-hub está limitado a Node 16.X, necesitas usar paquetes que tengan el motor como node >= 16.X. Si estás usando una librería específica, necesitas bajar la versión de la librería a una compatible.





