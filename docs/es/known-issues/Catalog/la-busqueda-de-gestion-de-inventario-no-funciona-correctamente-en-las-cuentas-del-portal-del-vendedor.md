---
title: "La búsqueda de gestión de inventario no funciona correctamente en las cuentas del portal del vendedor"
id: 7pCEQVKpXDq8NwtMXDxlFT
status: PUBLISHED
createdAt: 2022-11-08T18:55:29.448Z
updatedAt: 2023-02-24T18:21:26.642Z
publishedAt: 2023-02-24T18:21:26.642Z
firstPublishedAt: 2022-11-08T18:55:30.178Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-busqueda-de-gestion-de-inventario-no-funciona-correctamente-en-las-cuentas-del-portal-del-vendedor
locale: es
kiStatus: Backlog
internalReference: 694254
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La búsqueda de gestión de inventario no se comporta como se espera en las cuentas del portal del vendedor. Esto ocurre porque este tipo de cuentas utilizan una versión diferente del catálogo.

El módulo de Logística utiliza en esta UI una API de catalogV1.

Sin embargo, no tenemos un proxy desde el catálogo del portal del vendedor a esta API en catalogV1.

El impacto es que a veces el retorno en el desplegable y en el resultado puede ser diferente si el cliente está buscando un término.

El problema no parece producirse cuando se utilizan Ids de producto y sku.

Otra repercusión es que si se utiliza el filtro, el nombre de los skus de los productos no aparece en la interfaz de usuario.




## Simulación



1. Buscar un nombre de producto específico;
2. Comprobar si el desplegable devuelve el producto;
3. 3. Compruebe si el resultado de la búsqueda devuelve el producto.



## Workaround



Buscar por Id de producto e Id de Sku.







