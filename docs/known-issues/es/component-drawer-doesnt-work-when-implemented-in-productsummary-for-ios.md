---
title: 'Componente cajón no funciona cuando se implementa en el producto-resumen para iOS'
id: 75145kfQE8swAef57Yr4Aj
status: PUBLISHED
createdAt: 2023-05-29T13:22:57.856Z
updatedAt: 2023-05-29T13:22:58.422Z
publishedAt: 2023-05-29T13:22:58.422Z
firstPublishedAt: 2023-05-29T13:22:58.422Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: componente-cajon-no-funciona-cuando-se-implementa-en-el-productoresumen-para-ios
kiStatus: Backlog
internalReference: 833338
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el componente "drawer" se implementa en "product-summary", hace que la página se recargue después de la página 3 en iOS, y puede que se muestre un mensaje de error.


##

## Simulación



- Implementar el "cajón" en "resumen-producto";
- Accede a la página de búsqueda y ve hasta la página 3;
- La página se recargará, y a veces aparece un mensaje de error.



## Workaround


Implementar el Diseño Modal en su lugar para tener una vista rápida.




