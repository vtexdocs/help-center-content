---
title: 'Las reglas de merchandising visual no funcionan cuando se proporcionan varios términos de búsqueda'
id: 6FkfnnvFiYXYqPgMrpDgM1
status: PUBLISHED
createdAt: 2024-06-20T21:41:14.250Z
updatedAt: 2024-06-20T21:41:15.088Z
publishedAt: 2024-06-20T21:41:15.088Z
firstPublishedAt: 2024-06-20T21:41:15.088Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: las-reglas-de-merchandising-visual-no-funcionan-cuando-se-proporcionan-varios-terminos-de-busqueda
locale: es
kiStatus: Backlog
internalReference: 1053623
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Aunque es posible proporcionar varios términos de búsqueda al crear una regla de merchandising visual para la Búsqueda Inteligente, no se pueden utilizar. La regla se considerará inválida y no se aplicará.

Diferentes términos de búsqueda pueden devolver productos completamente diferentes en un resultado de búsqueda en un orden diferente, lo que es incompatible con la acción de fijar (_promover_) u ocultar (_eliminar_) algunos productos que ofrece una regla visual.

Al tratarse de una acción no válida, no se espera que se proporcione esta condición y se eliminará de la interfaz.


##

## Simulación



- Crear una regla de merchandising visual
- Aplicar varios términos de búsqueda como condición para la regla
- Seleccione algunos productos para fijar y/u ocultar
- Busque uno de estos términos de búsqueda y observe que los resultados no tendrán la regla aplicada
- También es posible observar lo mismo a través de la función de búsqueda explicada del administrador, que resaltará que no se han aplicado reglas a la búsqueda.



## Workaround


Este objetivo se consigue a través de reglas manuales de merchandising. La acción de fijar y ocultar productos es directamente compatible con las acciones de promover y eliminar para una regla manual.




