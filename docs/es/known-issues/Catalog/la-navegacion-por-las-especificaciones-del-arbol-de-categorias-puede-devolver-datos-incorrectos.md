---
title: "La navegación por las especificaciones del árbol de categorías puede devolver datos incorrectos"
id: 3ZfOkiixwkeUgjkHpYO5Gp
status: PUBLISHED
createdAt: 2025-02-14T14:09:03.075Z
updatedAt: 2025-02-14T14:09:03.715Z
publishedAt: 2025-02-14T14:09:03.715Z
firstPublishedAt: 2025-02-14T14:09:03.715Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-navegacion-por-las-especificaciones-del-arbol-de-categorias-puede-devolver-datos-incorrectos
locale: es
kiStatus: Backlog
internalReference: 1179682
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, cuando se navega por el árbol de categorías, si un usuario navega a "Campo (SKU)" y luego a "Valores" para una especificación y luego vuelve a la vista del árbol de categorías haciendo clic en el enlace de migas de pan:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-navegacion-por-las-especificaciones-del-arbol-de-categorias-puede-devolver-datos-incorrectos_1.png)

y, a continuación, vuelve al mismo formulario de especificación, los valores de especificación enumerados anteriormente ya no aparecerán.


##

## Simulación


1 - En el árbol de categorías, vaya a cualquier categoría con grupos y campos registrados, luego haga clic con el botón derecho y acceda a la opción "Campos (SKU)"

2 - En la lista de campos SKU, busque un campo de especificación que tenga valores de especificación para él.

3 - Haga clic en la opción "Valores" y aparecerán listados

4 - A continuación, en el breadcrumb, haga clic en el enlace "Categorías".

5 - Repita los pasos 1 a 3, los mismos campos no se mostrarán de nuevo, como si no estuvieran presentes en el catálogo.



## Workaround


Gestionar los valores de especificación mediante API u hoja de cálculo

Y/o

Si le ocurre lo mismo, cierre la sesión o borre las cookies del navegador para restablecer la caché.





