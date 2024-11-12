---
title: 'Error al buscar puntos de recogida y listar tiendas en el localizador de tiendas'
id: Ycy0EPwfhPfDUx1abDMb2
status: PUBLISHED
createdAt: 2024-10-17T00:03:29.004Z
updatedAt: 2024-10-17T00:03:29.895Z
publishedAt: 2024-10-17T00:03:29.895Z
firstPublishedAt: 2024-10-17T00:03:29.895Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-searching-for-pickup-points-and-listing-stores-in-the-store-locator
locale: es
kiStatus: Backlog
internalReference: 1118712
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al buscar un punto de recogida en Logística, puede producirse el siguiente error:
 ![](https://vtexhelp.zendesk.com/attachments/token/tGzdaXqZCHcgtcGaPagLU0yZu/?name=image.png)

    Se ha producido un error al cargar los puntos de recogida. Por favor, vuelva a cargar la página.


También en este mismo escenario, hay un impacto en la tienda web, que utiliza la aplicación Store Locator para listar sus tiendas, entonces la lista de tiendas no se mostrará:
 ![](https://vtexhelp.zendesk.com/attachments/token/Dv85rVttxoEMwVXMsMmTxWoI1/?name=image.png)


##

## Simulación


**En admin

1. Accede a la lista de puntos de recogida en logística: https://accountname.myvtex.com/admin/pickup-points;
2. Introduce un término de búsqueda para el punto de recogida, como "Oeste";
3. De forma intermitente, puede producirse el error anterior, por lo que se mostrará el mensaje de error.

**En la tienda web que utiliza la aplicación Store Locator**

1. Acceda a la tienda web;
2. Ir a la página para ver todas las tiendas;
3. Intermitentemente, las tiendas no se cargan.



## Workaround


Como ocurre de forma intermitente, puedes volver a intentarlo en unos instantes.




