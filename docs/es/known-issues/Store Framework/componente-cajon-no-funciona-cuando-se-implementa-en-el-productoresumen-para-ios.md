---
title: 'Componente cajón no funciona cuando se implementa en el producto-resumen para iOS'
id: 75145kfQE8swAef57Yr4Aj
status: PUBLISHED
createdAt: 2023-05-29T13:22:57.856Z
updatedAt: 2024-02-19T18:51:53.024Z
publishedAt: 2024-02-19T18:51:53.024Z
firstPublishedAt: 2023-05-29T13:22:58.422Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: component-drawer-doesnt-work-when-implemented-in-productsummary-for-ios
locale: es
kiStatus: Backlog
internalReference: 833338
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el componente "drawer" se implementa en "product-summary", hace que la página se recargue después de la página 3 en iOS, y puede que se muestre un mensaje de error.


##

## Simulación



- Implementar el "cajón" en "resumen-producto";
- Accede a la página de búsqueda y ve hasta la página 3;
- La página se recargará, y a veces aparece un mensaje de error.



## Workaround


Implementar el Diseño Modal en su lugar para tener una vista rápida.




