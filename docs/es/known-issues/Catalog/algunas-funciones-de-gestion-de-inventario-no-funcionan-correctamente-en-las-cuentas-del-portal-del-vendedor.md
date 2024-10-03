---
title: 'Algunas funciones de gestión de inventario no funcionan correctamente en las cuentas del portal del vendedor'
id: uJ4qws662c8pUnyfOV1fV
status: PUBLISHED
createdAt: 2024-03-18T17:54:20.400Z
updatedAt: 2024-03-18T17:54:21.597Z
publishedAt: 2024-03-18T17:54:21.597Z
firstPublishedAt: 2024-03-18T17:54:21.597Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: some-inventory-management-features-not-working-properly-on-seller-portal-accounts
locale: es
kiStatus: Backlog
internalReference: 1001665
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las funciones de gestión de inventario (como los enlaces a los productos) no se comportan como se espera en las cuentas del portal del vendedor. Esto ocurre porque este tipo de cuentas utilizan una versión diferente del catálogo.

El módulo de Logística utiliza en esta UI una API de catalogV1.

Sin embargo, no tenemos un proxy desde el catálogo del portal del vendedor a esta API en catalogV1.

El impacto es que los enlaces proporcionados en los productos no abren la página del catálogo, pero en su lugar devuelve un error.


##

## Simulación



1. Intente abrir los enlaces a los productos en una gestión de inventario portal vendedor.



## Workaround


N/A





